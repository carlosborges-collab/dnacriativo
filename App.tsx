import React from 'react';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { ScientificSecrets } from './components/ScientificSecrets';
import { TheCodes } from './components/TheCodes';
import { BookTeaser } from './components/BookTeaser';
import { AIDemo } from './components/AIDemo';
import { Pricing } from './components/Pricing';

const Footer: React.FC = () => (
  <footer className="bg-black py-12 text-center text-gray-600 border-t border-gray-900">
    <div className="max-w-6xl mx-auto px-4">
      <p className="mb-4 font-serif text-gray-500">
        "Do Caos nasce a Estrela que Dança."
      </p>
      <p className="mb-4 text-xs">
        &copy; {new Date().getFullYear()} Foster Company. Todos os direitos reservados.
      </p>
      <p className="text-[10px] max-w-2xl mx-auto text-gray-700">
        Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
      </p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-gold-500 selection:text-black bg-[#0f0518]">
      <Hero />
      <Story />
      <ScientificSecrets />
      <TheCodes />
      <BookTeaser />
      <AIDemo />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;