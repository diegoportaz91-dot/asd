import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
// import authorImage from "@assets/generated_images/Author_professional_headshot_f1e16f52.png";

//todo: remove mock functionality - replace with real testimonials
const testimonials = [
  {
    name: "Carlos Rodriguez",
    role: "Empresario",
    content: "Este curso cambió mi perspectiva completamente. En 60 días pude implementar nuevos hábitos que transformaron mi productividad y mi confianza. Las estrategias de Leonardo son prácticas y realmente funcionan.",
    rating: 5,
    initials: "CR"
  },
  {
    name: "Miguel Santos",
    role: "Gerente de Ventas",
    content: "La sección de relaciones fue un game changer para mí. Mejoré mi comunicación en el trabajo y en casa. Mi equipo ahora me ve como un líder natural y mis ventas aumentaron 40%.",
    rating: 5,
    initials: "MS"
  },
  {
    name: "David Chen",
    role: "Ingeniero",
    content: "Como introvertido, pensé que el liderazgo no era para mí. Los ejercicios prácticos del curso me ayudaron a desarrollar presencia y autoridad. Ahora lidero proyectos con confianza.",
    rating: 5,
    initials: "DC"
  }
];

export function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const testimonialVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="testimonials" className="py-20">
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
            data-testid="text-testimonials-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transformaciones Reales
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto" 
            data-testid="text-testimonials-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Más de 2,500 hombres han transformado sus vidas con estos principios.
            Estas son algunas de sus historias.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={testimonialVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="hover-elevate transition-all duration-300 h-full" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-6">
                  <motion.div 
                    className="flex gap-1 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: 0.7 + (index * 0.2) + (i * 0.1), 
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.p 
                    className="text-muted-foreground mb-6 italic" 
                    data-testid={`text-testimonial-content-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (index * 0.2), duration: 0.6 }}
                  >
                    "{testimonial.content}"
                  </motion.p>
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + (index * 0.2), duration: 0.6 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: 1.2 + (index * 0.2), 
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div>
                      <div className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                        {testimonial.role}
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Author Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Avatar className="h-32 w-32">
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">LA</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-2xl font-bold mb-2" data-testid="text-author-name">
                  Leonardo A. Arteaga
                </h3>
                <p className="text-primary font-semibold mb-4" data-testid="text-author-title">
                  Mentor de Excelencia Masculina
                </p>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-author-bio">
                  Con más de 10 años ayudando a hombres a transformar sus vidas, Leonardo ha desarrollado 
                  un sistema práctico y comprobado que combina principios de liderazgo, disciplina personal 
                  y crecimiento profesional. Su enfoque directo y sin teorías vacías ha impactado la vida 
                  de miles de hombres en toda Latinoamérica.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}