import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-xl font-bold text-primary mb-4" data-testid="text-footer-brand">
              Ser un Hombre de Excelencia
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md" data-testid="text-footer-description">
              Un camino práctico para transformar tu vida, construir disciplina, carácter y propósito. 
              La excelencia no es un destino, es una forma de vivir día a día.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2" data-testid="text-footer-email">
                <Mail className="h-4 w-4" />
                <span>contacto@hombreexcelencia.com</span>
              </div>
              <div className="flex items-center gap-2" data-testid="text-footer-location">
                <MapPin className="h-4 w-4" />
                <span>Ciudad de México, México</span>
              </div>
              <div className="flex items-center gap-2" data-testid="text-footer-phone">
                <Phone className="h-4 w-4" />
                <span>+52 55 1234 5678</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-links-title">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                  data-testid="button-footer-modules"
                >
                  Contenido del Curso
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                  data-testid="button-footer-testimonials"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                  data-testid="button-footer-pricing"
                >
                  Precio
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-legal-title">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-privacy">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-terms">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-refund">
                  Política de Reembolso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div data-testid="text-footer-copyright">
            © 2024 Leonardo A. Arteaga. Todos los derechos reservados.
          </div>
          <div data-testid="text-footer-tagline">
            Construyendo hombres de excelencia, un día a la vez.
          </div>
        </div>
      </div>
    </footer>
  );
}