import React from 'react';
import { Activity, Zap, Network, Radio } from 'lucide-react';

export const ScientificSecrets: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Isso não é "Autoajuda". <br />
            <span className="text-blue-500">É Neurociência Pura.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nossos laudos baseiam-se em análises de neuroimagem, padrões de ondas cerebrais e níveis de neurotransmissores. Veja o que acontece dentro da sua cabeça:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors group">
            <Activity className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-bold text-lg mb-2">Ondas Gama & Beta</h3>
            <p className="text-sm text-gray-400">
              Identificamos se sua mente opera em picos de alta frequência (Insight/Visionário) ou sustentação constante (Organizador).
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors group">
            <Zap className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-bold text-lg mb-2">Coquetel Químico</h3>
            <p className="text-sm text-gray-400">
              Dopamina (novidade), Serotonina (calma) ou Noradrenalina (ação). Seu perfil é definido pelo combustível que seu cérebro exige.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors group">
            <Network className="w-10 h-10 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-bold text-lg mb-2">Rede de Modo Padrão</h3>
            <p className="text-sm text-gray-400">
              Analisamos a hiperconectividade entre áreas cerebrais. É assim que o "Versátil" conecta pontos que ninguém mais vê.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gold-500/50 transition-colors group">
            <Radio className="w-10 h-10 text-gold-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-bold text-lg mb-2">Inibição Latente</h3>
            <p className="text-sm text-gray-400">
              Baixa inibição permite ao "Questionador" processar informações que outros filtram, detectando falhas no sistema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};