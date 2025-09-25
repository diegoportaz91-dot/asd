import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ModulesSection } from "@/components/ModulesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { CheckoutSection } from "@/components/CheckoutSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ModulesSection />
        <TestimonialsSection />
        <PricingSection />
        <CheckoutSection />
      </main>
      <Footer />
    </div>
  );
}