import React, { useState } from 'react';
import Modal from './Modal';
import validarCep from '../api/validaCep'; 
import Layout from './Layouts';
import InputMask from 'react-input-mask';

const Home: React.FC = () => {
  const [cep, setCep] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isValidCep, setIsValidCep] = useState(false);
  const [redirectToPlan, setRedirect] = useState(false);

  const handleValidateCep = async () => {
    const isValid = await validarCep(cep);
    if (isValid) {
      setIsValidCep(true);
      setRedirect(true);
    } else {
      setIsValidCep(false);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Digite o seu CEP</h2>
          <div className="flex items-center">
            <InputMask
              mask="99999-999"
              maskChar="_"
              className="border rounded-md py-2 px-4 w-full mr-4"
              placeholder="Digite o CEP"
              value={cep}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCep(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={handleValidateCep}
            >
              Validar
            </button>
          </div>
        </div>

        {isModalOpen && (
          <Modal onClose={closeModal}>
            <h2 className="text-xl font-bold mb-4">Nao temos cobertura para o CEP selecionado</h2>
            <p className="text-gray-700">Por favor, insira outro CEP.</p>
          </Modal>
        )}

        {isValidCep && <p className="mt-4 text-green-600">CEP válido! Redirecionando...</p>}
        {redirectToPlan && <RedirectFunction to="/plans" />}
      </div>
    </Layout>
  );
};

export default Home;
