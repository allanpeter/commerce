import React, { useState } from 'react';
import saveUser from '../api/saveUser';

const UserRegister: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleCadastro = () => {
    const savingUser = saveUser(name,email,+age)
    console.log(savingUser)
  };

  return (
      <div className="bg-gray-100 flex flex-col justify-center">
        <div className="mx-auto p-8 w-full">
          <form onSubmit={handleCadastro} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-bold mb-4">Cadastro de Usuário</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Nome:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded-md px-3 py-2 mt-1 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-md px-3 py-2 mt-1 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700">Idade:</label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="border rounded-md px-3 py-2 mt-1 w-full"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Cadastrar</button>
          </form>
        </div>
      </div>
  );
};

export default UserRegister;
