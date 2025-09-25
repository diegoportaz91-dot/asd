import { ModuleCard } from "./ModuleCard";
import { motion } from "framer-motion";
// Temporary icon placeholders using emojis
const mindsetIcon = "🧠";
const disciplineIcon = "💪";
const strengthIcon = "🏋️";
const relationshipsIcon = "🤝";
const moneyIcon = "💰";
const actionIcon = "⚡";

export function ModulesSection() {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const modules = [
    {
      title: "La Mentalidad de la Excelencia",
      description: "Transforma tu forma de pensar para alcanzar el éxito",
      features: [
        "Cómo pensar como un líder auténtico",
        "Ejemplos de hombres que transformaron su vida",
        "Ejercicio práctico: tu nueva declaración personal"
      ],
      icon: mindsetIcon,
      moduleNumber: 1
    },
    {
      title: "Disciplina y Hábitos de Hierro",
      description: "Construye rutinas que te lleven al siguiente nivel",
      features: [
        "El poder transformador de la rutina diaria",
        "5 hábitos diarios de los hombres de excelencia",
        "Plan de 30 días para iniciar tu transformación"
      ],
      icon: disciplineIcon,
      moduleNumber: 2
    },
    {
      title: "Fuerza y Energía",
      description: "Optimiza tu cuerpo para maximizar tu potencial",
      features: [
        "Nutrición y ejercicio con ejemplos reales",
        "Calistenia básica para iniciar sin gimnasio",
        "Ejemplo de plan semanal de entrenamiento"
      ],
      icon: strengthIcon,
      moduleNumber: 3
    },
    {
      title: "Excelencia en Relaciones",
      description: "Desarrolla carisma y liderazgo natural",
      features: [
        "Cómo comunicar con seguridad y autoridad",
        "Construir respeto y liderazgo en tu entorno",
        "Ejemplos de frases y dinámicas sociales efectivas"
      ],
      icon: relationshipsIcon,
      moduleNumber: 4
    },
    {
      title: "Dinero y Abundancia",
      description: "Domina las finanzas y crea riqueza verdadera",
      features: [
        "Mentalidad de riqueza vs mentalidad de escasez",
        "Estrategias simples de inversión y generación de ingresos",
        "Ejemplo práctico de ahorro e inversión paso a paso"
      ],
      icon: moneyIcon,
      moduleNumber: 5
    },
    {
      title: "Acción Masiva",
      description: "Ejecuta tus metas con determinación imparable",
      features: [
        "Cómo eliminar la procrastinación para siempre",
        "Técnicas para ejecutar tus metas de inmediato",
        "Ejercicio: plan de acción personal personalizado"
      ],
      icon: actionIcon,
      moduleNumber: 6
    }
  ];

  return (
    <section id="modules" className="py-20 bg-muted/30">
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
            data-testid="text-modules-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Contenido del Curso
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto" 
            data-testid="text-modules-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            6 módulos prácticos diseñados para tu transformación completa. 
            Cada módulo incluye principios, ejemplos reales y ejercicios aplicables.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {modules.map((module, index) => (
            <motion.div
              key={module.moduleNumber}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              custom={index}
            >
              <ModuleCard
                title={module.title}
                description={module.description}
                features={module.features}
                icon={module.icon}
                moduleNumber={module.moduleNumber}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}