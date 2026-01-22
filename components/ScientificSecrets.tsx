import React from 'react';
import { Activity, Zap, Network, Radio } from 'lucide-react';

export const ScientificSecrets: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            Isso Não É Autoajuda. <br />
            <span className="text-blue-500">É Neurociência Pura.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Seu Padrão Criativo não é um "tipo de personalidade". É como seu cérebro está literalmente <strong>CONECTADO</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all group">
            <Activity className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-2">Ondas Cerebrais</h3>
            <p className="text-sm text-gray-400">
              Seu padrão define se você opera em picos de insight (<strong>Gama</strong>) ou foco sustentado (<strong>Beta</strong>).
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all group">
            <Zap className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-2">Neurotransmissores</h3>
            <p className="text-sm text-gray-400">
              Dopamina te move por novidade. Serotonina por estabilidade. Descubra qual é seu combustível real.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all group">
            <Network className="w-12 h-12 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-2">Redes Neurais</h3>
            <p className="text-sm text-gray-400">
              Visionários têm a <strong>DMN</strong> 340% mais ativa. Organizadores têm o <strong>CPFDL</strong> hiperativado.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gold-500/50 transition-all group">
            <Radio className="w-12 h-12 text-gold-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-2">Forças & Riscos</h3>
            <p className="text-sm text-gray-400">
              Cada padrão tem superpoderes específicos — e armadilhas que te travam se não souber evitar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};