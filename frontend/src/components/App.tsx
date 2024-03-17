import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CadastroUsuario from '../pages/CadastroUsuario';
import '../index.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
