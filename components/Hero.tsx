import React from 'react';
import { Button } from './Button';
import { Sparkles, CheckCircle, Clock, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0518]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-green-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-900/30 border border-green-500/30 mb-8 backdrop-blur-xl animate-fade-in">
          <Sparkles className="w-4 h-4 text-green-400" />
          <span className="text-green-300 text-[10px] md:text-xs font-black tracking-[0.25em] uppercase">Protocolo Neurocientífico Ativo</span>
        </div>

        <h1 className="font-serif text-5xl md:text-8xl font-bold leading-[1.1] mb-8 text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          Você Tem Várias Ideias, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 italic">Mas Não Sabe Por Onde Começar?</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Descubra qual dos <span className="text-gold-400 font-bold">7 Padrões Criativos</span> comanda sua mente — e por que você sempre se sentiu "diferente demais" pra se encaixar.
        </p>

        <div className="flex flex-col items-center gap-8">
          <Button onClick={scrollToPricing} variant="secondary" pulse className="min-w-[320px] py-6 text-xl uppercase tracking-widest font-black shadow-[0_0_50px_rgba(212,175,55,0.3)] border-none">
            → Descobrir Meu Padrão Criativo Agora
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>1.427 criativos já descobriram</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
              <ShieldCheck className="w-4 h-4 text-purple-500" />
              <span>Baseado em 500+ estudos</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
              <Clock className="w-4 h-4 text-gold-500" />
              <span>Resultado imediato em 15min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};