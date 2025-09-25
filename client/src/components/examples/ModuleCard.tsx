import { ModuleCard } from '../ModuleCard';
const mindsetIcon = "🧠";

export default function ModuleCardExample() {
  return (
    <div className="max-w-sm">
      <ModuleCard
        title="La Mentalidad de la Excelencia"
        description="Transforma tu forma de pensar para alcanzar el éxito"
        features={[
          "Cómo pensar como un líder auténtico",
          "Ejemplos de hombres que transformaron su vida",
          "Ejercicio práctico: tu nueva declaración personal"
        ]}
        icon={mindsetIcon}
        moduleNumber={1}
      />
    </div>
  );
}