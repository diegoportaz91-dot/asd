import { type User, type InsertUser, type Purchase, type InsertPurchase } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createPurchase(purchase: InsertPurchase): Promise<Purchase>;
  getPurchaseByPaymentIntent(paymentIntentId: string): Promise<Purchase | undefined>;
  updatePurchaseStatus(id: string, status: string): Promise<Purchase | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private purchases: Map<string, Purchase>;

  constructor() {
    this.users = new Map();
    this.purchases = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createPurchase(insertPurchase: InsertPurchase): Promise<Purchase> {
    const id = randomUUID();
    const purchase: Purchase = { 
      ...insertPurchase, 
      id,
      status: insertPurchase.status || "pending",
      createdAt: new Date().toISOString()
    };
    this.purchases.set(id, purchase);
    return purchase;
  }

  async getPurchaseByPaymentIntent(paymentIntentId: string): Promise<Purchase | undefined> {
    return Array.from(this.purchases.values()).find(
      (purchase) => purchase.stripePaymentIntentId === paymentIntentId
    );
  }

  async updatePurchaseStatus(id: string, status: string): Promise<Purchase | undefined> {
    const purchase = this.purchases.get(id);
    if (purchase) {
      const updatedPurchase = { ...purchase, status };
      this.purchases.set(id, updatedPurchase);
      return updatedPurchase;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
