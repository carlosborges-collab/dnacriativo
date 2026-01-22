import React from 'react';
import { Hero } from '../components/Hero';
import { Identification } from '../components/Identification';
import { Story } from '../components/Story';
import { ScientificSecrets } from '../components/ScientificSecrets';
import { TheCodes } from '../components/TheCodes';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { Lock, ShieldCheck, Brain } from 'lucide-react';

const FinalCTA: React.FC = () => (
  <section className="py-24 bg-gradient-to-b from-magician-900 to-black text-center relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 relative z-10">
      <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8">
        Você Não Está Travado. <br/>
        <span className="text-gold-500 italic">Você Está Soterrado.</span>
      </h2>
      <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
        E eu vim te mostrar onde cavar. Quanto tempo mais você vai perder criando com o manual errado?
      </p>
      
      <div className="bg-white/5 border border-gold-500/30 p-12 rounded-3xl backdrop-blur-xl mb-12">
        <Button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} 
          variant="secondary" 
          pulse 
          className="py-8 px-12 text-2xl font-black uppercase tracking-tighter"
        >
          → DESCOBRIR MEU PADRÃO CRIATIVO AGORA
        </Button>
        <div className="mt-8 flex flex-wrap justify-center gap-8 opacity-50">
           <div className="flex items-center gap-2 text-xs text-white uppercase tracking-widest font-black">
             <ShieldCheck className="w-4 h-4 text-green-500" /> Pagamento Seguro
           </div>
           <div className="flex items-center gap-2 text-xs text-white uppercase tracking-widest font-black">
             <Lock className="w-4 h-4 text-gold-500" /> Acesso Imediato
           </div>
        </div>
      </div>

      <p className="text-gray-500 font-serif italic mb-4">"Você não precisa de mais um curso. Você precisa de clareza. E clareza começa aqui."</p>
      <p className="text-white font-bold uppercase tracking-[0.3em] text-xs">Carlos Borges — Criador do Método DEZ•ORDEM™</p>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-black py-12 text-center text-gray-700 border-t border-white/5">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-center gap-8 mb-8 grayscale opacity-30">
         <img src="https://logodownload.org/wp-content/uploads/2014/10/hotmart-logo.png" className="h-4" alt="Hotmart" />
         <div className="flex items-center gap-2 text-[10px] font-black"><ShieldCheck className="w-3 h-3" /> SSL SECURE</div>
         <div className="flex items-center gap-2 text-[10px] font-black"><Brain className="w-3 h-3" /> NEURO-AUTH</div>
      </div>
      <p className="mb-4 text-[10px] tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Carlos Borges & Foster Company. Todos os direitos reservados.
      </p>
      <p className="text-[9px] max-w-3xl mx-auto leading-relaxed opacity-50">
        Isenção de responsabilidade: Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca comercial da FACEBOOK, Inc. Os resultados podem variar de pessoa para pessoa com base no perfil individual.
      </p>
    </div>
  </footer>
);

const DNACriativo: React.FC = () => {
  return (
    <div className="antialiased selection:bg-gold-500 selection:text-black bg-[#0f0518] text-gray-200">
      <Hero />
      <Identification />
      <Story />
      <ScientificSecrets />
      <TheCodes />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default DNACriativo;