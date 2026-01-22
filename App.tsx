
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import DNACriativo from './pages/DNACriativo';
import Mentoria from './pages/Mentoria';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/90 backdrop-blur-xl border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></div>
          <span className="text-white font-serif font-bold tracking-tighter text-xl">DEZ•ORDEM</span>
        </div>
        <div className="flex gap-8">
          <Link 
            to="/dnacriativo" 
            className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
              location.pathname === '/dnacriativo' ? 'text-gold-500' : 'text-gray-500 hover:text-white'
            }`}
          >
            01. DNA Criativo
          </Link>
          <Link 
            to="/mentoria" 
            className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
              location.pathname === '/mentoria' ? 'text-gold-500 border-b border-gold-500 pb-1' : 'text-gray-500 hover:text-white'
            }`}
          >
            02. Mentoria VIP
          </Link>
        </div>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/dnacriativo" element={<DNACriativo />} />
        <Route path="/mentoria" element={<Mentoria />} />
        <Route path="/" element={<Navigate to="/dnacriativo" replace />} />
        <Route path="*" element={<Navigate to="/dnacriativo" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
