import React from 'react';
import { Check, Star, Shield, AlertTriangle, Award, RefreshCcw } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-magician-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      {/* Urgency Bar */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-purple-900 py-3 text-center border-b border-red-500/20 z-20">
         <p className="text-white text-xs font-black tracking-[0.3em] uppercase flex justify-center items-center gap-3">
           <AlertTriangle className="w-4 h-4 animate-bounce" /> Atenção: Apenas 12 laudos disponíveis para este lote
         </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10 pt-16">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Inicie sua <span className="text-gold-500 italic">Transmutação</span></h2>
           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             O valor abaixo é simbólico perto do custo de viver uma vida inteira sem entender como seu próprio cérebro funciona.
           </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-[#1a0b2e] rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-gold-500/20 overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto transform hover:scale-[1.01] transition-all duration-700">
          
          {/* Left Side: The Stack */}
          <div className="p-8 md:p-12 flex-1 space-y-8 relative border-b md:border-b-0 md:border-r border-white/5">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
               <Award className="w-40 h-40 text-white" />
            </div>

            <div className="relative z-10">
              <h3 className="font-serif text-3xl font-bold text-white mb-2">
                Protocolo <span className="text-gold-400">Mente Mágica</span>
              </h3>
              <p className="text-green-400 text-xs font-mono tracking-widest uppercase">Acesso Imediato & Vitalício</p>
            </div>

            <ul className="space-y-5 relative z-10">
              {[
                { text: "Teste Neuro-Psicométrico dos 7 Códigos", value: "R$ 297" },
                { text: "Laudo Científico Personalizado (20+ págs)", value: "R$ 147" },
                { text: "Acesso ao Oráculo (IA Mentor 24h)", value: "R$ 197" },
                { text: "E-book Digital: DezOrdem", value: "R$ 67" },
                { text: "Masterclass: Como Monetizar seu Perfil", value: "R$ 97" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center justify-between gap-4 text-gray-300 group">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0 border border-gold-500/20 group-hover:bg-gold-500/30 transition-colors">
                      <Check className="w-3.5 h-3.5 text-gold-400" />
                    </div>
                    <span className="text-sm font-medium group-hover:text-white transition-colors">{item.text}</span>
                  </div>
                  <span className="text-xs text-gray-600 line-through font-mono">{item.value}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-green-500/5 p-5 rounded-2xl border border-green-500/20 flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <RefreshCcw className="w-4 h-4 text-green-400" />
                 <span className="text-xs text-green-400 font-bold uppercase tracking-tighter">Economia Total</span>
               </div>
               <p className="text-green-400 font-black text-lg">R$ 758,00</p>
            </div>
          </div>

          {/* Right Side: The Offer */}
          <div className="bg-[#130821]/80 p-10 md:p-12 flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 w-full">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500 text-black text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                OFERTA ÚNICA
              </span>
              
              <div className="space-y-0 mb-10">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Apenas 12 parcelas de</p>
                <div className="flex items-start justify-center gap-1">
                  <span className="text-2xl text-gold-500 mt-2 font-bold italic">R$</span>
                  <span className="text-8xl font-black text-white tracking-tighter leading-none">4</span>
                  <div className="text-left">
                    <span className="text-4xl font-black text-white block mt-2">,70</span>
                    <span className="text-gray-500 text-xs line-through block -mt-1">R$ 80,50</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4 italic">ou R$ 47,00 à vista</p>
              </div>
              
              <Button 
                fullWidth 
                pulse 
                className="py-6 text-xl bg-gradient-to-r from-gold-500 to-yellow-600 border-none text-black hover:scale-105 shadow-[0_15px_40px_rgba(212,175,55,0.3)]" 
                onClick={() => window.open('https://pay.hotmart.com/YOUR_LINK', '_blank')}
              >
                COMEÇAR MINHA JORNADA
              </Button>
              
              {/* Guarantee Badge */}
              <div className="mt-10 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 border border-gold-500/20">
                   <Shield className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-wider">Garantia Blindada</p>
                  <p className="text-gray-500 text-[10px] leading-tight mt-0.5">Teste por 7 dias. Se não descobrir algo novo sobre você, devolvemos 100%.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};