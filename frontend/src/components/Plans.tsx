import React, { useState , useEffect  } from 'react';
import Header from './Header';
import Footer from './Footer';
import listPlans from '../api/listPlans';
import PlanInterface from '../interfaces/plan.interface';

const Plans: React.FC = () => {
  const [planos, setPlanos] = useState<PlanInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
  
  return (
    <div>
    <Header />
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto">
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
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Selecionar</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
      <Footer />
      </div>
  );
};

export default Plans;
