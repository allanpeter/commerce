import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPlanById } from '../api/listPlans';
import { PlanInterface } from '../interfaces/plan.interface';
import { useNavigate } from 'react-router-dom';
import UserAPI from '../api/saveUser';


const Cart: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const parsedParams = Object.fromEntries(queryParams);

    const [plan, setPlan] = useState<PlanInterface | null>(parsedParams.planId);
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(plan.price);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('Cartão de Crédito');
    const [user, setUser] = useState<string>(parsedParams.userName); 

  const navigate = useNavigate()

  useEffect(() => {
    const fetchPlan = async () => {
        try {
            const fetchedPlan = await getPlanById(Number(parsedParams.planId));
            setPlan(fetchedPlan);
            setTotalPrice(plan.price);
        } catch (error) {
            console.error("Erro ao buscar plano:", error);
        }
    };

    const fetchUser = async () => {
        try {
            const fetchedUser = await UserAPI.getUserByName(parsedParams.userName);
            setUser(fetchedUser);
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
        }
    };

    fetchPlan();
    fetchUser();
}, [parsedParams.planId,parsedParams.userName]);

    const calculateTotalPrice = () => {
        let total = plan ? plan.price : 0;
        selectedExtras.forEach(extra => {
            total += 15;
        });
        setTotalPrice(total);
    };

    const handleExtraSelection = (extra: string) => {
        const updatedExtras = [...selectedExtras];
        const index = updatedExtras.indexOf(extra);
        if (index === -1) {
            updatedExtras.push(extra);
        } else {
            updatedExtras.splice(index, 1);
        }
        setSelectedExtras(updatedExtras);
    };

    const handlePayment = () => {

        navigate(`/thank-you?name=${user.name}&email=${user.email}`)

    };

    useEffect(() => {
        calculateTotalPrice(); 
    }, [selectedExtras]);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
            <div className="mb-4">
                <p className="font-bold">Usuário:</p>
                <p>{user.name}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold">Plano Selecionado:</p>
                {plan ? (
                    <>
                        <p>Nome: {plan.name}</p>
                        <p>Descrição: {plan.description}</p>
                        <p>Preço: R$ {plan.price}</p>
                        <p>Velocidade: {plan.speed}</p>
                    </>
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
            <div className="mb-4">
                <p className="font-bold">Extras:</p>
                {plan && plan?.extra?.map(eachExtra => (
                    <div key={eachExtra} className="flex items-center">
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedExtras.includes(eachExtra)}
                                onChange={() => handleExtraSelection(eachExtra)}
                                className="mr-2"
                            />
                            {eachExtra}
                        </label>
                        <span> + R$ 15,00</span>
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <p className="font-bold">Total:</p>
                <p>R$ {!totalPrice ? plan.price : totalPrice}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold">Método de Pagamento:</p>
                <select
                    value={selectedPaymentMethod}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="Cartão de Crédito">Cartão de Crédito</option>
                    <option value="PIX">PIX</option>
                </select>
            </div>
            <div className="mb-4">
                <button onClick={handlePayment} className="bg-blue-500 text-white px-4 py-2 rounded-md">Finalizar Compra</button>
            </div>
        </div>
    );
};

export default Cart;
