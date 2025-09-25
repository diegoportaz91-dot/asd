import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import logoUrl from "@assets/3605b0c6-95bc-418c-a7af-0c8eb1e2ac75_1758772608658.jpeg";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img 
            src={logoUrl} 
            alt="Ser un Hombre de Excelencia" 
            className="h-10 w-10 rounded-md object-cover"
            data-testid="img-logo"
          />
          <span className="font-serif text-xl font-bold text-primary" data-testid="text-brand-name">
            Ser un Hombre de Excelencia
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('modules')}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="button-nav-modules"
          >
            Módulos
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="button-nav-testimonials"
          >
            Testimonios
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="button-nav-pricing"
          >
            Precio
          </button>
          <Button 
            onClick={() => scrollToSection('checkout')}
            data-testid="button-nav-cta"
          >
            Comprar Ahora
          </Button>
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <Button 
            onClick={() => scrollToSection('checkout')}
            size="sm"
            data-testid="button-mobile-cta"
          >
            Comprar
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}