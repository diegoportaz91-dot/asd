import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import Stripe from "stripe";
import { insertPurchaseSchema } from "@shared/schema";

// Temporary: Allow app to start without Stripe keys for development
let stripe: Stripe | null = null;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-08-27.basil",
  });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Stripe payment route for course purchase
  app.post("/api/create-payment-intent", async (req, res) => {
    try {
      // Check if Stripe is configured
      if (!stripe) {
        return res.status(503).json({ 
          message: "Payment system is temporarily unavailable. Please try again later." 
        });
      }

      const { email, firstName, lastName } = req.body;
      
      // Validate required fields
      if (!email || !firstName || !lastName) {
        return res.status(400).json({ 
          message: "Email, first name, and last name are required" 
        });
      }

      const amount = 97; // $97 USD for the course
      
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
        metadata: {
          email,
          firstName,
          lastName,
          productName: "Ser un Hombre de Excelencia - Curso Completo"
        }
      });

      // Store purchase record
      await storage.createPurchase({
        email,
        firstName,
        lastName,
        stripePaymentIntentId: paymentIntent.id,
        amount: amount.toString(),
        status: "pending"
      });

      res.json({ 
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id
      });
    } catch (error: any) {
      console.error("Error creating payment intent:", error);
      res.status(500).json({ 
        message: "Error creating payment intent: " + error.message 
      });
    }
  });

  // Webhook to handle payment completion
  app.post("/api/stripe-webhook", async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
      // Note: In production, you should set STRIPE_WEBHOOK_SECRET
      // For now, we'll parse the event directly
      event = req.body;
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;
      
      // Update purchase status
      const purchase = await storage.getPurchaseByPaymentIntent(paymentIntent.id);
      if (purchase) {
        await storage.updatePurchaseStatus(purchase.id, "completed");
        console.log(`Payment completed for ${purchase.email}`);
        
        // TODO: Send course access email here
      }
    }

    res.json({ received: true });
  });

  // Get purchase status
  app.get("/api/purchase/:paymentIntentId", async (req, res) => {
    try {
      const { paymentIntentId } = req.params;
      const purchase = await storage.getPurchaseByPaymentIntent(paymentIntentId);
      
      if (!purchase) {
        return res.status(404).json({ message: "Purchase not found" });
      }

      res.json(purchase);
    } catch (error: any) {
      res.status(500).json({ message: "Error retrieving purchase: " + error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
