import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const ThankYouPage: React.FC = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const parsedParams = Object.fromEntries(queryParams);


    useEffect(() => {
        const sendEmail = async () => {
            try {
                await axios.post('http://localhost:3000/plans/send-email', {
                    email: parsedParams.email, 
                    name: parsedParams.name, 
                });
                console.log('Email enviado com sucesso!');
            } catch (error) {
                console.error('Erro ao enviar email:', error);
            }
        };
        sendEmail();
    }, [parsedParams.email,parsedParams.name]);

    return (
        <div className="flex justify-center items-center h-[80%]">
        <div className="bg-gray-200 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Obrigado por adquirir um plano conosco!</h2>
            <p className="text-lg font-semibold">Um email de confirmação foi enviado para o seu endereço de email.</p>
            {/* Adicione um botão ou link para retornar à página inicial */}
        </div>
    </div>
    );
};

export default ThankYouPage;
