import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function PricingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const features = [
    "6 módulos completos de transformación personal",
    "Ejercicios prácticos paso a paso",
    "Ejemplos reales y casos de estudio",
    "Plan de acción de 30 días",
    "Acceso de por vida al contenido",
    "Garantía de satisfacción de 30 días"
  ];

  const bonuses = [
    "Bonus: Guía de Rutinas Matutinas de Excelencia",
    "Bonus: Checklist de Hábitos Diarios",
    "Bonus: Templates de Planificación Personal"
  ];

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="font-serif text-3xl md:text-4xl font-bold mb-4" 
            data-testid="text-pricing-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Invierte en Tu Transformación
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto" 
            data-testid="text-pricing-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            El costo de no cambiar es siempre mayor al costo de transformarte. 
            Esta inversión pagará dividendos en todas las áreas de tu vida.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="relative overflow-hidden border-2 border-primary/20 shadow-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
              >
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground" data-testid="badge-popular">
                  Más Popular
                </Badge>
              </motion.div>
            
            <CardHeader className="text-center pb-6">
              <CardTitle className="font-serif text-3xl mb-2" data-testid="text-course-title">
                Ser un Hombre de Excelencia
              </CardTitle>
              <CardDescription className="text-lg" data-testid="text-course-description">
                Curso Completo de Transformación Personal
              </CardDescription>
              
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary" data-testid="text-price-current">
                    $97
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid="text-price-subtitle">
                    Pago único
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-muted-foreground line-through" data-testid="text-price-original">
                    $297
                  </div>
                  <div className="text-sm text-destructive font-semibold" data-testid="text-discount">
                    67% OFF
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Main Features */}
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2" data-testid="text-features-title">
                  <Zap className="h-5 w-5 text-primary" />
                  Lo que incluye:
                </h4>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-3"
                      data-testid={`text-feature-${index}`}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bonuses */}
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4 text-primary" data-testid="text-bonuses-title">
                  Bonuses Exclusivos (Valor $150):
                </h4>
                <ul className="space-y-3">
                  {bonuses.map((bonus, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-3 text-sm"
                      data-testid={`text-bonus-${index}`}
                    >
                      <CheckCircle2 className="h-4 w-4 text-chart-2 mt-0.5 flex-shrink-0" />
                      <span>{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center p-4 rounded-lg bg-accent/50">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-sm" data-testid="text-guarantee-money">Garantía</div>
                  <div className="text-xs text-muted-foreground">30 días</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-accent/50">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-sm" data-testid="text-guarantee-access">Acceso</div>
                  <div className="text-xs text-muted-foreground">De por vida</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-accent/50">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-sm" data-testid="text-guarantee-instant">Entrega</div>
                  <div className="text-xs text-muted-foreground">Instantánea</div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-6">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto px-12 py-6 text-lg font-semibold"
                  onClick={scrollToCheckout}
                  data-testid="button-pricing-cta"
                >
                  Obtener Acceso Inmediato - $97
                </Button>
                <p className="text-xs text-muted-foreground mt-2" data-testid="text-pricing-urgency">
                  ⚡ Oferta limitada - El precio aumenta pronto
                </p>
              </div>
            </CardContent>
          </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}