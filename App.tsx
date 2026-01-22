import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DNACriativo from './pages/DNACriativo';

// Esta é a estrutura que permite que você tenha várias páginas no mesmo domínio.
// Se você quiser criar www.dezordem.com/mentoria, basta criar a página e adicionar a <Route> abaixo.

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota principal solicitada: www.dezordem.com/dnacriativo */}
        <Route path="/dnacriativo" element={<DNACriativo />} />
        
        {/* Redireciona a raiz (/) para a página do DNA Criativo por enquanto */}
        <Route path="/" element={<Navigate to="/dnacriativo" replace />} />
        
        {/* Fallback para páginas não encontradas - redireciona para a principal */}
        <Route path="*" element={<Navigate to="/dnacriativo" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;