// Modal.tsx

import React from 'react';

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Verifica se o clique ocorreu dentro do conteúdo do modal
    if (e.target === e.currentTarget) {
      onClose(); // Fecha o modal apenas se o clique foi no fundo escuro
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
