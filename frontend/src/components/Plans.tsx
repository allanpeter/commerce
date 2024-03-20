import React, { useState, useEffect } from 'react';
import { listPlans } from '../api/listPlans';
import {PlanInterface} from '../interfaces/plan.interface';
import { useNavigate } from 'react-router-dom';

const Plans: React.FC = () => {
  const [planos, setPlanos] = useState<PlanInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchPlanos = async () => {
      try {
        const response = await listPlans();
        setPlanos(response);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os planos:', error);
      }
    };
    fetchPlanos();
  }, []);

  const selectedPlan = async (id: number) => {
    navigate(`/register?planId=${id}`); 
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center">
      <h2 className="font-bold text-2xl pt-10">Confira os planos disponíveis para sua região</h2>
      <div className="p-32 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {loading ? (
            <p className="text-center">Carregando...</p>
          ) : (
            planos.slice(0, 4).map((plano) => (
              <div key={plano.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">{plano.name}</h2>
                  <p className="text-gray-600 mb-2">{plano.speed}</p>
                  <p className="text-gray-700 mb-2">R$ {plano.price.toFixed(2)}</p>
                  <p className="text-gray-600 mb-4">{plano.description}</p>
                  {plano.extra.length > 0 && (
                    <div className="flex space-x-2">
                      <p className="text-gray-500">Opcionais:</p>
                      <ul>
                        {plano.extra.map((eachItem, index) => (
                          <li key={index} className="text-gray-600">{eachItem}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4" onClick={() => selectedPlan(plano.id)}>Selecionar</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Plans;
