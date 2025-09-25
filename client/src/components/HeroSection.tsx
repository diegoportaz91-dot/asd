import { Button } from "@/components/ui/button";
import { Star, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
// import heroImage from "@assets/generated_images/Success_hero_background_image_04768ce5.png";

export function HeroSection() {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5"
        animate={{
          background: [
            "linear-gradient(45deg, hsl(var(--primary))/10%, hsl(var(--background)), hsl(var(--primary))/5%)",
            "linear-gradient(45deg, hsl(var(--primary))/5%, hsl(var(--background)), hsl(var(--primary))/10%)",
            "linear-gradient(45deg, hsl(var(--primary))/10%, hsl(var(--background)), hsl(var(--primary))/5%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground" 
            data-testid="text-hero-title"
            variants={titleVariants}
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Conviértete en un{" "}
            </motion.span>
            <motion.span 
              className="text-primary inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 100 }}
            >
              Hombre de Excelencia
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed" 
            data-testid="text-hero-subtitle"
            variants={itemVariants}
          >
            Un camino práctico para tomar el control de tu vida, construir disciplina, 
            carácter y propósito. La excelencia no es un destino, es una forma de vivir.
          </motion.p>

          {/* Social Proof */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-muted-foreground"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer" 
              data-testid="social-proof-rating"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + (i * 0.1), duration: 0.3 }}
                  >
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              <span>4.9/5 estrellas</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer" 
              data-testid="social-proof-students"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <Users className="h-4 w-4" />
              <span>+2,500 hombres transformados</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer" 
              data-testid="social-proof-time"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.6 }}
            >
              <Clock className="h-4 w-4" />
              <span>6 módulos prácticos</span>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={scrollToCheckout}
                data-testid="button-hero-primary"
              >
                Comenzar Mi Transformación
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.8 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg bg-background/20 backdrop-blur-sm border-2 hover:bg-primary/5 transition-all duration-300"
                onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-hero-secondary"
              >
                Ver Contenido del Curso
              </Button>
            </motion.div>
          </motion.div>

          {/* Guarantee */}
          <motion.p 
            className="text-sm text-muted-foreground mt-6" 
            data-testid="text-hero-guarantee"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            ✅ Garantía de 30 días - Si no estás satisfecho, te devolvemos tu dinero
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}