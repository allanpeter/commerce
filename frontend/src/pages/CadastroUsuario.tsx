
import React from 'react';

function CadastroUsuario() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Cadastro de Usuário</h5>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Nome</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="mt-1 p-2 w-full border rounded-lg" />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default CadastroUsuario;
