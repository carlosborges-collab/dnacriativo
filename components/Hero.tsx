import React from 'react';
import { Button } from './Button';
import { Brain, Lock, ShieldCheck, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToCheckout = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0518]">
      {/* Dynamic Background - Mystic Mage Style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-green-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,157,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,157,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-900/30 border border-green-500/30 mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,157,0.15)] transform hover:scale-105 transition-transform duration-500 cursor-default">
          <Sparkles className="w-4 h-4 text-green-400" />
          <span className="text-green-300 text-[10px] md:text-xs font-black tracking-[0.25em] uppercase">Protocolo Neurocientífico Ativo</span>
        </div>

        <h1 className="font-serif text-5xl md:text-8xl font-bold leading-[1.1] mb-8 text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          Sua Mente não é <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 italic">um Problema.</span>
        </h1>

        <div className="max-w-3xl mx-auto bg-white/[0.03] backdrop-blur-md border-l-4 border-gold-500 p-8 mb-12 text-left rounded-r-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
            <strong className="text-white font-bold">A Revelação:</strong> O que chamam de TDAH ou falta de foco é, na verdade, um <span className="text-gold-400 font-bold">Código Criativo Incompreendido</span>. Pare de lutar contra sua biologia e aprenda a dominar sua frequência neural.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <Button onClick={scrollToCheckout} variant="secondary" pulse className="min-w-[320px] py-6 text-xl uppercase tracking-widest font-black shadow-[0_0_50px_rgba(212,175,55,0.3)] hover:shadow-[0_0_70px_rgba(212,175,55,0.5)] border-none">
            <Lock className="w-6 h-6 mr-2" />
            DESTRAVAR MEU CÓDIGO
          </Button>
          
          <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-xl group hover:border-green-500/50 transition-all duration-500 shadow-xl">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} alt="User" className="w-10 h-10 rounded-full border-2 border-[#0f0518] grayscale group-hover:grayscale-0 transition-all duration-700" />
              ))}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 border-2 border-[#0f0518] flex items-center justify-center text-[10px] text-white font-black shadow-lg">
                +1K
              </div>
            </div>
            <div className="text-left border-l border-white/10 pl-4">
              <p className="text-white font-black text-xl leading-none">1.427 mentes</p>
              <p className="text-[10px] text-green-400 uppercase tracking-[0.2em] font-bold mt-1">Mapeadas com Sucesso</p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-30 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
           <div className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase"><ShieldCheck className="w-4 h-4 text-green-500" /> Compra 100% Segura</div>
           <div className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase"><Brain className="w-4 h-4 text-purple-500" /> Neuro-Compliant</div>
           <div className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase"><Lock className="w-4 h-4 text-gold-500" /> Acesso Imediato</div>
        </div>
      </div>
    </section>
  );
};