import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Quanto tempo leva o teste?",
    a: "15 minutos em média. Você responde 45 perguntas estratégicas desenvolvidas para mapear padrões neurais."
  },
  {
    q: "Recebo o resultado na hora?",
    a: "Sim. Assim que finalizar as perguntas, nosso sistema gera seu Padrão Criativo dominante + o Relatório Completo imediatamente."
  },
  {
    q: "É um teste de personalidade tipo MBTI?",
    a: "Não. É baseado em neurociência da criatividade. Mapeamos tendências de ondas cerebrais, neurotransmissores e funcionamento de redes como a DMN."
  },
  {
    q: "E se eu não gostar do meu resultado?",
    a: "Oferecemos garantia de 7 dias. Se você ler seu relatório e sentir que não agregou valor real à sua vida, devolvemos 100% do investimento."
  },
  {
    q: "O que vem depois do teste?",
    a: "Você recebe direção clara sobre rotina, projetos e parcerias. Futuramente, poderá usar seu resultado para ingressar na Mentoria DEZ•ORDEM."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0a0510]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white text-center mb-16">
          Perguntas <span className="text-gold-500 italic">Frequentes</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button 
                className="w-full py-6 flex items-center justify-between text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg text-white font-bold group-hover:text-gold-400 transition-colors">
                  {faq.q}
                </span>
                {openIndex === i ? <Minus className="text-gold-500" /> : <Plus className="text-gold-500" />}
              </button>
              {openIndex === i && (
                <div className="pb-6 animate-fade-in">
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};