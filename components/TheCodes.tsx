import React from 'react';
import { 
  GitGraph, // Organizador
  Lightbulb, // Visionário
  Hammer, // Executor (Filler)
  Moon, // Contemplativo
  Shuffle, // Versátil
  Users, // Conectador
  SearchCheck // Questionador
} from 'lucide-react';
import { CreativeType } from '../types';

const codes: CreativeType[] = [
  { 
    name: 'Tipo 1: O Organizador', 
    tagline: 'Do Caos à Ordem',
    icon: 'gitgraph', 
    description: 'Transforma ideias vagas em sistemas funcionais. Seu cérebro evoluiu para materializar sonhos tijolo por tijolo.',
    neuro: 'Predomínio de Ondas Beta (Foco Sustentado)',
    risk: 'Paralisia por Análise Excessiva'
  },
  { 
    name: 'Tipo 2: O Visionário', 
    tagline: 'O Arquiteto do Futuro',
    icon: 'lightbulb', 
    description: 'Vê o que ainda não existe. Sua mente funciona como uma antena cósmica, captando padrões invisíveis.',
    neuro: 'Explosões de Ondas Gama (Insights Súbitos)',
    risk: 'Dificuldade de Execução Linear'
  },
  { 
    name: 'Tipo 3: O Executor', 
    tagline: 'A Força Motriz',
    icon: 'hammer', 
    description: 'A ponte entre o pensamento e a realidade. Onde outros hesitam, ele age. O motor do mundo físico.',
    neuro: 'Alta Dopamina em Resposta à Ação',
    risk: 'Burnout por Excesso de Atividade'
  },
  { 
    name: 'Tipo 4: O Contemplativo', 
    tagline: 'O Sábio Silencioso',
    icon: 'moon', 
    description: 'Mergulha nas profundezas. Destila sabedoria do silêncio. Encontra o eterno no temporal.',
    neuro: 'Ondas Alfa Sustentadas (Introspecção)',
    risk: 'Isolamento Social Progressivo'
  },
  { 
    name: 'Tipo 5: O Versátil', 
    tagline: 'O Mestre da Integração',
    icon: 'shuffle', 
    description: 'Sintetiza múltiplas realidades. O "Hub" de integração que conecta domínios que ninguém pensaria em unir.',
    neuro: 'Corpo Caloso Hiperdesenvolvido',
    risk: 'Síndrome do Generalista (Falta de Profundidade)'
  },
  { 
    name: 'Tipo 6: O Conectador', 
    tagline: 'O Tecedor Social',
    icon: 'users', 
    description: 'Amplifica a criatividade humana através de redes. Transforma potencial individual em impacto coletivo.',
    neuro: 'Oxitocina Elevada e Neurônios Espelho',
    risk: 'Dependência de Validação Externa'
  },
  { 
    name: 'Tipo 7: O Questionador', 
    tagline: 'O Quebrador de Paradigmas',
    icon: 'searchcheck', 
    description: 'O sistema imunológico da sociedade. Detecta inconsistências e destrói ilusões confortáveis.',
    neuro: 'Baixa Inibição Latente (Filtra menos)',
    risk: 'Cinismo e Perfeccionismo Paralisante'
  },
];

const IconMap: Record<string, React.ReactNode> = {
  gitgraph: <GitGraph className="w-8 h-8" />,
  lightbulb: <Lightbulb className="w-8 h-8" />,
  hammer: <Hammer className="w-8 h-8" />,
  moon: <Moon className="w-8 h-8" />,
  shuffle: <Shuffle className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  searchcheck: <SearchCheck className="w-8 h-8" />,
};

export const TheCodes: React.FC = () => {
  return (
    <section className="py-24 bg-magician-900 bg-opacity-95 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
          Qual Destes 7 Arquétipos <br/>
          <span className="text-gold-500">Comanda Sua Mente?</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
          Cada um possui uma <strong>bioquímica</strong>, um <strong>padrão de ondas cerebrais</strong> e um <strong>destino</strong> específico. Tentar ser o que você não é gera doença. Assumir seu código gera império.
        </p>

        {/* Updated Grid Layout: Flex wrap with center alignment ensures no "missing parts" */}
        <div className="flex flex-wrap justify-center gap-6">
          {codes.map((code, idx) => (
            <div 
              key={idx} 
              className={`group p-6 rounded-2xl bg-[#130821] border border-purple-900/50 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(118,75,162,0.2)] text-left flex flex-col w-full md:w-[calc(50%-24px)] lg:w-[calc(25%-24px)] min-w-[280px]`}
            >
              <div className="w-14 h-14 bg-magician-800 rounded-xl flex items-center justify-center text-purple-400 group-hover:text-gold-400 group-hover:bg-magician-900 transition-all duration-500 mb-6 border border-magician-700">
                {IconMap[code.icon]}
              </div>
              
              <div className="mb-4">
                <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">{code.tagline}</span>
                <h3 className="font-serif text-xl font-bold text-white mt-1 group-hover:text-purple-300 transition-colors">
                  {code.name}
                </h3>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {code.description}
              </p>

              <div className="pt-4 border-t border-purple-900/30 space-y-2">
                <p className="text-xs text-gray-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-green-400 font-mono">{code.neuro}</span>
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span className="text-red-400">Risco: {code.risk}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};