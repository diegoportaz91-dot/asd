import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// Initialize Stripe - temporarily allow app to run without keys
let stripePromise: Promise<any> | null = null;
if (import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
}

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    if (!formData.email || !formData.firstName || !formData.lastName) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/success`,
          receipt_email: formData.email,
        },
      });

      if (error) {
        toast({
          title: "Error en el pago",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Ocurrió un error procesando el pago",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">Nombre</Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Tu nombre"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            data-testid="input-first-name"
          />
        </div>
        <div>
          <Label htmlFor="lastName">Apellido</Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Tu apellido"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            data-testid="input-last-name"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleInputChange}
          required
          data-testid="input-email"
        />
      </div>

      <Separator />

      <div>
        <Label className="text-base font-semibold mb-4 block">Información de Pago</Label>
        <PaymentElement />
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Lock className="h-4 w-4" />
        <span data-testid="text-security-notice">
          Tu información está protegida con encriptación SSL de 256 bits
        </span>
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full" 
        disabled={!stripe || isProcessing}
        data-testid="button-complete-purchase"
      >
        {isProcessing ? "Procesando..." : "Completar Compra - $97 USD"}
      </Button>

      <div className="text-center text-xs text-muted-foreground">
        <p data-testid="text-secure-payment">
          🔒 Pago 100% seguro procesado por Stripe
        </p>
      </div>
    </form>
  );
}

export function CheckoutSection() {
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Create payment intent when component mounts
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await apiRequest("POST", "/api/create-payment-intent", {
          email: "temp@example.com", // Will be updated when user fills form
          firstName: "temp",
          lastName: "temp"
        });
        
        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        toast({
          title: "Error",
          description: "No se pudo inicializar el procesador de pagos",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    createPaymentIntent();
  }, []);

  if (isLoading) {
    return (
      <section id="checkout" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-screen flex items-center justify-center">
              <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" aria-label="Loading"/>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!clientSecret) {
    return (
      <section id="checkout" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              Error cargando el procesador de pagos. Por favor recarga la página.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="checkout" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" data-testid="text-checkout-title">
              Completa Tu Transformación
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-checkout-subtitle">
              Estás a un paso de acceder al curso que cambiará tu vida para siempre
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <div className="order-2 lg:order-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2" data-testid="text-summary-title">
                    <CreditCard className="h-5 w-5" />
                    Información de Pago
                  </CardTitle>
                  <CardDescription data-testid="text-summary-description">
                    Completa tus datos para proceder con la compra
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                  </Elements>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="order-1 lg:order-2">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle data-testid="text-order-title">Resumen de tu Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold" data-testid="text-product-name">
                          Ser un Hombre de Excelencia
                        </h4>
                        <p className="text-sm text-muted-foreground" data-testid="text-product-description">
                          Curso completo + Bonuses
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="line-through text-muted-foreground text-sm" data-testid="text-original-price">
                          $297
                        </div>
                        <div className="font-semibold" data-testid="text-current-price">$97</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span data-testid="text-discount-label">Descuento</span>
                      <span className="text-chart-2 font-semibold" data-testid="text-discount-amount">-$200</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span data-testid="text-total-label">Total</span>
                    <span data-testid="text-total-amount">$97 USD</span>
                  </div>

                  <div className="space-y-3">
                    <Badge variant="secondary" className="w-full justify-center py-2" data-testid="badge-guarantee">
                      <Shield className="h-4 w-4 mr-2" />
                      Garantía de 30 días
                    </Badge>
                    
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div className="flex items-center gap-2" data-testid="text-delivery-info">
                        ✅ Acceso inmediato tras el pago
                      </div>
                      <div className="flex items-center gap-2" data-testid="text-lifetime-access">
                        ✅ Acceso de por vida
                      </div>
                      <div className="flex items-center gap-2" data-testid="text-bonus-included">
                        ✅ Bonuses incluidos ($150 valor)
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}