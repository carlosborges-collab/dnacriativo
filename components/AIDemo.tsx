import React, { useState, useEffect } from 'react';
import { Bot, Send, Sparkles, Lock } from 'lucide-react';
import { Button } from './Button';

export const AIDemo: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Olá. Eu sou o Mentor Virtual do Método Desordem. Após descobrir seu código, você poderá me perguntar qualquer coisa sobre sua carreira. Vamos simular? Escolha uma pergunta abaixo.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showBlur, setShowBlur] = useState(false);

  const sampleQuestions = [
    "Sou 'Vortex' e tenho muitas ideias, mas não termino nada. O que faço?",
    "Como o 'Artista' pode ganhar dinheiro sem se vender?",
    "Sou 'Racional' e travo na hora de criar. Me ajude."
  ];

  const simulateResponse = (question: string) => {
    setMessages(prev => [...prev, { role: 'user', text: question }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: `Como um ${question.includes('Vortex') ? 'Vortex' : question.includes('Artista') ? 'Artista' : 'Criativo'}, sua mente funciona em ciclos de alta energia. O erro é tentar linearidade. A solução para você é...` 
      }]);
      setShowBlur(true);
    }, 1500);
  };

  const scrollToCheckout = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-magician-900 to-black relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-gold-400 font-bold tracking-widest text-sm uppercase mb-2 block">Exclusivo</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            Seu Mentor Criativo <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Via IA</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Não é apenas um teste. É um plano de ação. Após descobrir seu perfil, use nossa Inteligência Artificial treinada com a metodologia do Carlos Borges para tirar suas dúvidas.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800 max-w-2xl mx-auto relative">
          {/* Header */}
          <div className="bg-gray-800 p-4 flex items-center gap-3 border-b border-gray-700">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Oráculo Criativo</p>
              <p className="text-green-400 text-xs flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Online
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 p-6 overflow-y-auto space-y-4 bg-gray-900/50 relative">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-purple-600 text-white rounded-br-none' 
                    : 'bg-gray-800 text-gray-200 rounded-bl-none'
                }`}>
                  {msg.text}
                  {msg.role === 'ai' && idx === messages.length - 1 && showBlur && (
                     <div className="absolute inset-0 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 bg-gray-900/60 rounded-2xl z-10 border border-gold-500/30">
                        <Lock className="w-8 h-8 text-gold-400 mb-2" />
                        <p className="text-white font-bold mb-2">A resposta completa é exclusiva para membros.</p>
                        <Button onClick={scrollToCheckout} variant="secondary" className="text-sm py-2 px-4">
                          Destravar Minha Resposta
                        </Button>
                     </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800 p-4 rounded-2xl rounded-bl-none flex gap-1">
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area (Mock) */}
          <div className="p-4 bg-gray-800 border-t border-gray-700">
             {!showBlur ? (
               <div className="flex gap-2 overflow-x-auto pb-2">
                 {sampleQuestions.map((q, i) => (
                   <button 
                    key={i}
                    onClick={() => simulateResponse(q)}
                    className="whitespace-nowrap px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs rounded-full transition-colors border border-gray-600"
                   >
                     {q}
                   </button>
                 ))}
               </div>
             ) : (
                <div className="flex items-center gap-2 opacity-50 cursor-not-allowed">
                  <div className="flex-1 bg-gray-900 h-10 rounded-lg border border-gray-700"></div>
                  <div className="bg-purple-600 h-10 w-10 rounded-lg flex items-center justify-center">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};