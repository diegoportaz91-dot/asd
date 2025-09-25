import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ModuleCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
  moduleNumber: number;
}

export function ModuleCard({ title, description, features, icon, moduleNumber }: ModuleCardProps) {
  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <Card className="h-full hover-elevate transition-all duration-300 overflow-hidden group" data-testid={`card-module-${moduleNumber}`}>
      <CardHeader className="text-center pb-4">
        <motion.div 
          className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
          whileHover={{ 
            scale: 1.1, 
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.4 }
          }}
        >
          <motion.span 
            className="text-3xl"
            data-testid={`img-module-icon-${moduleNumber}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 0.3 + (moduleNumber * 0.1), 
              type: "spring", 
              stiffness: 200 
            }}
          >
            {icon}
          </motion.span>
        </motion.div>
        <motion.div 
          className="text-sm font-semibold text-primary mb-2" 
          data-testid={`text-module-number-${moduleNumber}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + (moduleNumber * 0.1), duration: 0.5 }}
        >
          Módulo {moduleNumber}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + (moduleNumber * 0.1), duration: 0.5 }}
        >
          <CardTitle className="text-xl font-serif" data-testid={`text-module-title-${moduleNumber}`}>
            {title}
          </CardTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + (moduleNumber * 0.1), duration: 0.5 }}
        >
          <CardDescription className="text-muted-foreground" data-testid={`text-module-description-${moduleNumber}`}>
            {description}
          </CardDescription>
        </motion.div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start gap-3 text-sm"
              data-testid={`text-module-feature-${moduleNumber}-${index}`}
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 0.8 + (moduleNumber * 0.1) + (index * 0.1), 
                  type: "spring",
                  stiffness: 400
                }}
              >
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              </motion.div>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}