import React from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';

const pains = [
  { text: "Tenho várias ideias, mas não sei por onde começar", label: "VISIONÁRIO soterrado" },
  { text: "Começo 10 projetos, termino 2", label: "VERSÁTIL sem eixo" },
  { text: "Planejo demais, lanço de menos", label: "ORGANIZADOR paralisado" },
  { text: "Sinto tudo com intensidade visceral", label: "APAIXONADO em oscilação" },
  { text: "Tenho medo de investir e dar errado", label: "CONTEMPLATIVO em isolamento" },
  { text: "Cuido de todos, esqueço de mim", label: "CONECTADOR em burnout" },
  { text: "Vejo problemas que ninguém vê", label: "QUESTIONADOR incompreendido" }
];

export const Identification: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0510] relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Se Você Já Se Sentiu Assim, <br/>
            <span className="text-red-500">Esse Teste Foi Feito Pra Você.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {pains.map((pain, idx) => (
            <div 
              key={idx} 
              className="group bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-200">"{pain.text}"</p>
              </div>
              <div className="flex items-center gap-2 text-gold-500 font-mono text-xs uppercase tracking-widest bg-gold-500/10 px-4 py-2 rounded-full border border-gold-500/20 whitespace-nowrap">
                <ArrowRight className="w-3 h-3" />
                Você pode ser um {pain.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white font-black text-xl uppercase tracking-widest border-b-2 border-gold-500 pb-2 hover:text-gold-400 transition-colors"
          >
            → Descobrir Qual É o Meu Padrão Criativo
          </button>
        </div>
      </div>
    </section>
  );
};