import React from 'react';
import { 
  ClipboardCheck, 
  Lightbulb, 
  Palette, 
  Moon, 
  RefreshCcw, 
  Users, 
  Zap 
} from 'lucide-react';

const codes = [
  { 
    name: 'O ORGANIZADOR', 
    type: 'TIPO 1',
    quote: 'Eu planejo demais e lanço de menos',
    icon: <ClipboardCheck className="w-8 h-8" />, 
    strength: 'Transforma caos em sistemas funcionais',
    trap: 'Paralisia por análise',
    pop: '12-15% da população'
  },
  { 
    name: 'O VISIONÁRIO', 
    type: 'TIPO 2',
    quote: 'Tenho 100 ideias, termino 3',
    icon: <Lightbulb className="w-8 h-8" />, 
    strength: 'Vê futuros que ninguém vê',
    trap: 'Dificuldade de executar',
    pop: '15-20% da população'
  },
  { 
    name: 'O APAIXONADO', 
    type: 'TIPO 3',
    quote: 'Sinto tudo com intensidade visceral',
    icon: <Palette className="w-8 h-8" />, 
    strength: 'Transforma dor em arte magnética',
    trap: 'Oscilação emocional extrema',
    pop: '18-22% da população'
  },
  { 
    name: 'O CONTEMPLATIVO', 
    type: 'TIPO 4',
    quote: 'Tenho insights profundos, mas demoro pra agir',
    icon: <Moon className="w-8 h-8" />, 
    strength: 'Sabedoria atemporal',
    trap: 'Lentidão produtiva',
    pop: '8-12% da população'
  },
  { 
    name: 'O VERSÁTIL', 
    type: 'TIPO 5',
    quote: 'Faço mil coisas, mas ninguém me lembra por uma específica',
    icon: <RefreshCcw className="w-8 h-8" />, 
    strength: 'Conecta mundos que ninguém une',
    trap: 'Falta de profundidade',
    pop: '20-25% da população'
  },
  { 
    name: 'O CONECTADOR', 
    type: 'TIPO 6',
    quote: 'Cuido de todos, esqueço de mim',
    icon: <Users className="w-8 h-8" />, 
    strength: 'Amplifica talentos coletivos',
    trap: 'Burnout social',
    pop: '10-15% da população'
  },
  { 
    name: 'O QUESTIONADOR', 
    type: 'TIPO 7',
    quote: 'Vejo problemas que ninguém vê',
    icon: <Zap className="w-8 h-8" />, 
    strength: 'Quebra paradigmas estabelecidos',
    trap: 'Isolamento por honestidade',
    pop: '8-10% da população'
  },
];

export const TheCodes: React.FC = () => {
  return (
    <section className="py-24 bg-magician-900 bg-opacity-95 relative">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-6xl font-bold text-white mb-6">
          Qual Destes 7 Padrões <br/>
          <span className="text-gold-500">Comanda Sua Mente?</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {codes.map((code, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-3xl bg-[#130821] border border-white/5 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2 text-left"
            >
              <div className="text-gold-500 font-black text-[10px] tracking-[0.3em] mb-4">{code.type}</div>
              <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-500 mb-6 border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-black transition-all">
                {code.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">{code.name}</h3>
              <p className="text-gray-500 italic text-sm mb-6">"{code.quote}"</p>
              
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div>
                   <p className="text-[10px] font-black uppercase text-green-500 tracking-widest">Força</p>
                   <p className="text-xs text-gray-300 mt-1">{code.strength}</p>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-red-500 tracking-widest">Armadilha</p>
                   <p className="text-xs text-gray-300 mt-1">{code.trap}</p>
                </div>
                <p className="text-[9px] text-gray-600 font-mono mt-4 uppercase tracking-tighter">{code.pop}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};