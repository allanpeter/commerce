
import React, { useState } from 'react';

interface Plan {
  id: number;
  name: string;
  speed: string;
  price: number;
  description: string;
  extras: string[];
}

interface PlansProps {
  plans: Plan[];
  onSelectPlan: (plan: Plan) => void;
}

const Plans: React.FC<PlansProps> = ({ plans, onSelectPlan }) => {
  const [, setSelectedPlan] = useState<Plan | null>(null);
  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    onSelectPlan(plan);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <div key={plan.id} className="bg-white rounded-lg shadow-md p-6 cursor-pointer" onClick={() => handleSelectPlan(plan)}>
          <h3 className="text-xl font-bold mb-2">{plan.nome}</h3>
          <p className="text-gray-600 mb-2">{plan.velocidade}</p>
          <p className="text-gray-700 mb-2">R$ {plan.preco.toFixed(2)}</p>
          <p className="text-gray-600 mb-4">{plan.descricao}</p>
          {plan.opcionais.length > 0 && (
            <div className="flex space-x-2">
              <p className="text-gray-500">Opcionais:</p>
              {plan.opcionais.map((opcional, index) => (
                <p key={index} className="text-gray-600">{opcional}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Plans;
