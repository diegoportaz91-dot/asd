import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Success() {
  const [paymentStatus, setPaymentStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentIntentId = urlParams.get('payment_intent');
    
    if (paymentIntentId) {
      // Simulate payment verification - in real app, verify with backend
      setTimeout(() => {
        setPaymentStatus('success');
      }, 2000);
    } else {
      setPaymentStatus('error');
    }
  }, []);

  if (paymentStatus === 'loading') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">Verificando tu pago...</p>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'error') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardHeader className="text-center">
            <CardTitle className="text-destructive">Error</CardTitle>
            <CardDescription>
              Hubo un problema verificando tu pago. Por favor contacta soporte.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button onClick={() => window.location.href = '/'}>
              Volver al inicio
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="font-serif text-xl font-bold text-primary">
            Ser un Hombre de Excelencia
          </h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-chart-2/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-chart-2" />
              </div>
              <CardTitle className="text-2xl font-serif text-chart-2" data-testid="text-success-title">
                ¡Compra Exitosa!
              </CardTitle>
              <CardDescription className="text-lg" data-testid="text-success-subtitle">
                Bienvenido al curso "Ser un Hombre de Excelencia"
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div className="text-left space-y-4">
                <h3 className="font-semibold text-lg mb-4">¿Qué sigue ahora?</h3>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Revisa tu email</h4>
                    <p className="text-sm text-muted-foreground">
                      En los próximos 5 minutos recibirás un email con:
                    </p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Acceso completo al curso</li>
                      <li>• Todos los módulos y ejercicios</li>
                      <li>• Bonuses exclusivos</li>
                      <li>• Instrucciones para comenzar</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <Download className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Acceso inmediato</h4>
                    <p className="text-sm text-muted-foreground">
                      El link en tu email te dará acceso de por vida al curso completo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <p className="text-sm text-muted-foreground mb-4">
                  ¿No recibiste el email? Revisa tu carpeta de spam o contacta soporte.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = '/'}
                    data-testid="button-back-home"
                  >
                    Volver al inicio
                  </Button>
                  <Button
                    onClick={() => window.open('mailto:contacto@hombreexcelencia.com', '_blank')}
                    data-testid="button-contact-support"
                  >
                    Contactar Soporte
                  </Button>
                </div>
              </div>

              <div className="text-xs text-muted-foreground border-t pt-4">
                <p>
                  Recuerda: Tienes garantía de 30 días. Si no estás satisfecho, 
                  te devolvemos tu dinero sin preguntas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}