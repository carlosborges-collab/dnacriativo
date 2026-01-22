import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Marina",
    age: 28,
    role: "Designer",
    type: "Visionária",
    content: "Descobri que sou Visionária. Finalmente entendi por que eu começava 10 projetos e terminava 2. Agora eu SEI como funcionar."
  },
  {
    name: "Rodrigo",
    age: 29,
    role: "Empreendedor",
    type: "Organizador",
    content: "Organizador. Fazia total sentido. Eu planejava demais e lançava de menos. O teste me deu direção clara."
  },
  {
    name: "Júlia",
    age: 26,
    role: "Criativa Multidisciplinar",
    type: "Versátil",
    content: "Sou Versátil. E não, não é defeito. É meu diferencial. Só precisava de um EIXO. O teste me mostrou qual."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white text-center mb-16">
          Criativos Que Descobriram <br/>
          <span className="text-gold-500 italic">Seu Código:</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-gold-500 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-gold-500" />)}
                </div>
                <p className="text-gray-300 italic mb-8">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-magician-800 flex items-center justify-center font-bold text-gold-500 border border-gold-500/30">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}, {t.age} anos</p>
                  <p className="text-xs text-gray-500">{t.role} • <span className="text-gold-500/70 font-mono">{t.type}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};