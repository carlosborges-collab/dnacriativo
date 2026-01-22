import React from 'react';
import { BookOpen, XCircle } from 'lucide-react';

export const Story: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* The Problem (System Failed) */}
        <div className="mb-32 text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-12">
            O Sistema Te <span className="text-red-600">Ensinou Errado.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
             {["Foque em uma coisa só", "Você é desorganizado", "Pensa demais, faz de menos", "Precisa de disciplina militar"].map((text, i) => (
               <div key={i} className="flex items-center gap-3 bg-red-950/20 border border-red-900/30 p-4 rounded-xl text-gray-400 italic">
                 <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                 <span>"{text}"</span>
               </div>
             ))}
          </div>
          <p className="text-2xl text-white font-bold mb-6">E você tentou. Deus sabe que você tentou.</p>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Comprou cursos. Leu livros de produtividade. Montou planners. Fez listas intermináveis.
            Mas nada funcionou. Sabe por quê? <strong>Porque você estava tentando funcionar com o manual errado.</strong>
          </p>
          <div className="bg-gradient-to-r from-gold-500/10 to-transparent p-6 rounded-2xl border-l-4 border-gold-500">
             <p className="text-xl text-gold-400 italic">"Você tem um motor de Ferrari. Mas estavam te dando o manual de um trator."</p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-gold-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-gray-800 bg-gray-900">
               <img 
                src="https://i.imgur.com/7jvyQiO.jpeg" 
                alt="Carlos Borges" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="font-serif text-4xl font-bold text-white leading-tight">
              Eu sou <span className="text-gold-500">Carlos Borges.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p>
                Aos 16 anos, abri meu primeiro negócio. Aos 25, estava quebrado, deprimido, me sentindo uma fraude.
              </p>
              <p>
                Até que em 2022, recebi diagnóstico de TDAH. E em vez de aceitar o rótulo, eu fui estudar. 
                Estudei <strong>500+ pesquisas de neurociência da criatividade.</strong>
              </p>
              <p>
                Descobri algo que mudou tudo: <strong>Minha mente não estava quebrada. Ela só operava em outra frequência.</strong>
              </p>
              <p className="text-white font-semibold text-xl border-l-2 border-gold-500 pl-4">
                Criei os 7 Padrões Criativos — o mapa que decodifica como SUA mente realmente funciona.
              </p>
            </div>
            <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-gold-500 text-black font-black uppercase tracking-widest rounded hover:bg-gold-400 transition-colors">
              → Quero Descobrir Meu Padrão Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};