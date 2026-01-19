import React from 'react';
import { BookOpen, Key } from 'lucide-react';

export const Story: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Part 1: The Pain & The Man */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-gold-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-gray-800 bg-gray-900">
               <img 
                src="https://i.imgur.com/7jvyQiO.jpeg" 
                alt="Carlos Borges - A Mente por trás do Código" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                <p className="text-gold-400 font-serif text-xl italic">"Eu tentei ser quem eles queriam..."</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
              A Indústria da Produtividade <br/>
              <span className="text-red-500">Falhou com Você.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p>
                Imagine ter um motor de Ferrari, mas tentar dirigir usando o manual de um Trator. 
                Foi assim que vivi metade da minha vida. Aos 16 anos, eu já tinha meu estúdio. 
                Aos 25, eu estava <strong>quebrado, deprimido e me sentindo uma fraude</strong>.
              </p>
              <p>
                O mundo dizia: <em>"Foque em uma coisa só"</em>, <em>"Tenha rotina militar"</em>.
              </p>
              <p>
                Eu tentei. E quanto mais eu tentava me "organizar", mais minha mente criativa colapsava. 
                Eles chamaram minha genialidade de TDAH.
              </p>
              <p className="text-white font-semibold text-xl border-l-2 border-gold-500 pl-4">
                Até que eu parei de olhar para fora e decifrei o meu próprio código.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: The Revelation (DezOrdem) */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs font-bold uppercase tracking-widest border border-purple-500/20">
              <BookOpen className="w-4 h-4" />
              A Revelação
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
              Dez<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Ordem</span>
            </h2>
            <p className="text-xl text-gray-300">
              Não existe caos. O que existe são <strong>10 Ordens Ocultas</strong> (DezOrdem). 
              Cada mente criativa opera com um sistema operacional biológico único.
            </p>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Key className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                <span>Encontre seu padrão de ondas cerebrais e pare de lutar contra si mesmo.</span>
              </li>
              <li className="flex items-start gap-3">
                <Key className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                <span>Transforme seu "caos criativo" em uma linha de produção de alto impacto.</span>
              </li>
            </ul>
          </div>

          <div className="order-1 md:order-2 relative group perspective-1000">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-900/20 border border-green-900/30 transform transition-transform group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
                <img 
                  src="https://i.imgur.com/EV4ebBE.jpeg" 
                  alt="A Metodologia Aplicada" 
                  className="w-full object-cover"
                />
                <div className="absolute bottom-8 left-8 z-20">
                   <h3 className="text-white font-bold text-2xl font-serif">O Código Foi Quebrado</h3>
                   <p className="text-green-400 text-sm mt-2 font-mono">SYSTEM_STATUS: UNLOCKED</p>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};