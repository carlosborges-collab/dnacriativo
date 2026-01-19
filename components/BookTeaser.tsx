import React from 'react';
import { Button } from './Button';
import { FileText, MessageSquare, BookOpen } from 'lucide-react';

export const BookTeaser: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-green-900/10 to-black relative border-y border-green-900/30">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            O Ecossistema Completo
          </h2>
          <p className="text-gray-400">
            Não entregamos apenas informação. Entregamos tecnologia para sua evolução.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* VISUAL STACK */}
          <div className="w-full lg:w-1/2 relative group">
             {/* Background Glow */}
             <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-green-600/30 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
             
             <div className="relative z-10 flex flex-col items-center">
                {/* Book Cover / Main Asset */}
                <div className="relative z-30 transform hover:-translate-y-4 transition duration-500 w-[240px] md:w-[280px]">
                   <img 
                    src="https://i.imgur.com/HM1Scl4.jpeg" 
                    alt="Livro DezOrdem e Laudo" 
                    className="w-full rounded-lg shadow-[0_20px_50px_rgba(0,255,100,0.2)] border border-green-500/30"
                   />
                </div>

                {/* Platform Screenshots (Behind) */}
                <div className="absolute top-10 -right-4 md:-right-12 z-20 w-[200px] md:w-[260px] transform rotate-6 hover:rotate-12 transition duration-500">
                   <img 
                    src="https://i.imgur.com/H4DoTr5.jpeg"
                    alt="Interface do Método" 
                    className="w-full rounded-lg shadow-2xl border border-purple-500/40 bg-gray-900" 
                   />
                </div>
                <div className="absolute top-20 -left-4 md:-left-12 z-10 w-[200px] md:w-[260px] transform -rotate-6 hover:-rotate-12 transition duration-500">
                   <img 
                    src="https://i.imgur.com/4GKkPaN.jpeg" 
                    alt="Neuro-Dossiê" 
                    className="w-full rounded-lg shadow-2xl border border-blue-500/40 bg-gray-900" 
                   />
                </div>
             </div>
          </div>

          {/* COPY */}
          <div className="w-full lg:w-1/2 space-y-8">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-900/30 rounded-lg text-green-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Livro Digital: DezOrdem</h3>
              </div>
              <p className="text-gray-400 pl-14">
                O manual definitivo para organizar sua mente sem castrar sua criatividade.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-900/30 rounded-lg text-blue-400">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Dossiê Neuro-Psicométrico</h3>
              </div>
              <p className="text-gray-400 pl-14">
                Mapeamento técnico de 20 páginas detalhando suas zonas de genialidade.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-900/30 rounded-lg text-purple-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Oráculo Criativo (IA)</h3>
              </div>
              <p className="text-gray-400 pl-14">
                Consultoria 24h por dia treinada nos princípios do Carlos Borges.
              </p>
            </div>

            <div className="pt-6">
              <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} variant="primary" pulse className="shadow-green-500/20 w-full md:w-auto">
                QUERO O PACOTE COMPLETO
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};