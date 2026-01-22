import React from 'react';
import { Check, Shield, AlertTriangle, Lock, Star } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-magician-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bg-red-600 py-2 text-center text-white text-[10px] font-black tracking-widest uppercase animate-pulse">
        ⚠️ ATENÇÃO: Preço Sobe em Breve (Próximo Lote: R$ 97)
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10 pt-16">
        <div className="text-center mb-16">
           <span className="text-gold-500 font-black text-sm uppercase tracking-[0.4em] mb-4 block">O Início da Clareza</span>
           <h2 className="text-4xl md:text-7xl font-serif font-bold text-white">O Que Você <span className="text-gold-500 italic">Recebe:</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* Benefits Card */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-6">O Dossiê DNA Criativo</h3>
              <ul className="space-y-4">
                {[
                  { t: "Teste DNA Criativo (15 min)", d: "45 perguntas estratégicas neuro-validadas" },
                  { t: "Relatório Completo do Seu Padrão", d: "Suas forças, riscos e perfil neurológico" },
                  { t: "Próximos Passos Personalizados", d: "Como estruturar sua rotina e posicionamento" },
                  { t: "BÔNUS: Grupo Privado de Criativos", d: "Conecte-se com outros do mesmo padrão" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">{item.t}</p>
                      <p className="text-gray-500 text-xs mt-1">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-6 border-t border-white/5">
              <div className="flex items-center gap-4 text-left">
                <Shield className="w-10 h-10 text-gold-500" />
                <div>
                  <p className="text-white text-xs font-black uppercase tracking-widest">Garantia Incondicional</p>
                  <p className="text-gray-500 text-[10px] leading-tight mt-1">7 dias para testar. Se não agregar valor, devolvemos 100%. Sem perguntas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Price Card */}
          <div className="bg-gradient-to-br from-gold-500 to-yellow-600 p-10 rounded-3xl flex flex-col justify-center items-center text-center text-black">
             <Star className="w-12 h-12 mb-6" />
             <p className="text-sm font-black uppercase tracking-widest mb-2 opacity-70">Oferta de Lançamento</p>
             
             <div className="mb-8">
               <span className="text-lg font-bold">R$</span>
               <span className="text-8xl font-black tracking-tighter">47</span>
               <span className="text-2xl font-black">,00</span>
               <p className="text-xs font-bold opacity-60 line-through">De R$ 147,00</p>
             </div>

             <Button 
                fullWidth 
                className="py-6 text-xl bg-black text-white hover:bg-gray-900 shadow-2xl" 
                onClick={() => window.open('https://pay.hotmart.com/YOUR_LINK', '_blank')}
              >
                COMEÇAR O TESTE AGORA
              </Button>
              
              <div className="mt-8 space-y-2">
                <p className="text-[10px] font-black uppercase flex items-center justify-center gap-2">
                  <Lock className="w-3 h-3" /> Pagamento 100% Seguro
                </p>
                <p className="text-[10px] font-bold opacity-70">Acesso Imediato ao Resultado</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};