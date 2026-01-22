
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Lock, 
  Plus, 
  Minus,
  MessageSquare,
  Crown,
  Target,
  Sparkles,
  TrendingUp,
  Award,
  ChevronRight
} from 'lucide-react';

const Mentoria: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Eu preciso ter feito o Teste DNA Criativo antes?", a: "Não é obrigatório, mas é ALTAMENTE recomendado. O teste te dá o diagnóstico inicial. A mentoria aprofunda e IMPLEMENTA." },
    { q: "Quanto tempo por semana eu preciso dedicar?", a: "Além da sessão semanal de 90 minutos, espere dedicar 2-3 horas para implementar a Ordem da semana e 1 hora para materiais de apoio. Total: 4-5 horas/semana." },
    { q: "E se eu perder uma sessão ao vivo?", a: "Todas as sessões são gravadas e você terá acesso vitalício. Mas recomendo fortemente estar ao vivo pela troca." },
    { q: "Vou ter acesso direto a você entre as sessões?", a: "Sim. Via grupo privado no WhatsApp/Telegram para dúvidas rápidas." },
    { q: "Isso funciona para qualquer área criativa?", a: "Sim. Designers, publicitários, escritores, fotógrafos, arquitetos... Se você CRIA, o método funciona." },
    { q: "Vocês oferecem parcelamento?", a: "Sim. 12x de R$ 580 no cartão ou R$ 5.400 à vista (10% desconto)." },
    { q: "Eu tenho TDAH diagnosticado. Isso funciona pra mim?", a: "SIM. Inclusive, boa parte do método foi desenvolvido a partir do MEU diagnóstico de TDAH. O método respeita como mentes criativas REALMENTE funcionam." }
  ];

  const scrollToInvestment = () => {
    document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="antialiased bg-[#050208] text-gray-200 min-h-screen selection:bg-gold-500 selection:text-black pt-24">
      
      {/* 🎯 HERO SECTION */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-900/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-[10px] font-black uppercase tracking-[0.3em] mb-10 animate-fade-in">
            Mentoria Exclusiva | 10 Semanas | Vagas Limitadas
          </div>
          
          <h1 className="font-serif text-4xl md:text-8xl font-bold text-white mb-8 leading-[1.1]">
            Você Vai Parar de Ser Apenas <br/>
            <span className="text-gray-500 italic">"Mais Um Criativo Bom"</span> <br/>
            E Vai Se Tornar O Criativo <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400">Que Grandes Autoridades Disputam</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light">
            10 semanas. 10 Ordens. 1 transformação completa. Da mente travada ao posicionamento magnético.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button onClick={scrollToInvestment} variant="secondary" pulse className="px-12 py-7 text-xl min-w-[320px] font-black uppercase tracking-tighter">
              → Quero Minha Vaga Agora
            </Button>
            <button onClick={() => document.getElementById('pain')?.scrollIntoView({ behavior: 'smooth' })} className="text-white font-bold hover:text-gold-500 transition-colors flex items-center gap-2 group">
              Ver Como Funciona <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white">
              <CheckCircle className="w-4 h-4 text-gold-500" /> Apenas 12 vagas nesta turma
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white">
              <TrendingUp className="w-4 h-4 text-green-500" /> 8 vagas já confirmadas
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white text-red-500">
              <Zap className="w-4 h-4" /> Investimento sobe R$ 4.000 em breve
            </div>
          </div>
        </div>
      </section>

      {/* 💔 SEÇÃO 1: A DOR */}
      <section id="pain" className="py-24 bg-black/40 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-16 text-center">
            Você Já Percebeu Que...
          </h2>

          <div className="space-y-6 text-lg text-gray-400">
            <p className="text-white font-bold">Você tem talento. Todo mundo reconhece isso.</p>
            <p className="mb-8 italic">Mas quando você olha pro seu banco, pro seu calendário de clientes, pro seu reconhecimento no mercado... <strong>Algo não bate.</strong></p>
            
            <div className="grid gap-4 mt-8">
              {[
                "Você entrega trabalhos incríveis — mas cobra pouco",
                "Você tem ideias que mudariam projetos inteiros — mas ninguém te chama pra mesa de decisão",
                "Você trabalha mais que muita gente 'famosa' — mas continua invisível",
                "Você já criou coisas que deveriam ter viralizado — mas ficaram no vazio",
                "Você vê criativos 'menores' que você sendo disputados — enquanto você ainda precisa 'vender' seu trabalho",
                "Você tem portfólio, tem experiência, tem resultado — mas não tem POSICIONAMENTO"
              ].map((pain, i) => (
                <div key={i} className="flex gap-4 items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/20 transition-all">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-gray-300">{pain}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-xl text-white font-medium">E isso dói. Porque você SABE que não é falta de talento.</p>
            <p className="text-center text-4xl font-serif italic font-bold text-gold-500 mt-4">É falta de código.</p>
          </div>
          
          <div className="text-center mt-12">
             <Button onClick={scrollToInvestment} variant="outline" className="px-10 py-5">→ Quero Aprender a Me Posicionar Agora</Button>
          </div>
        </div>
      </section>

      {/* 🎯 SEÇÃO 2: A TRANSFORMAÇÃO */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              O Que Acontece Quando <br/>
              <span className="text-gold-500 italic">Domina o Código DEZ•ORDEM™</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>Imagine isso: Você abre o Instagram. Tem 3 mensagens de possíveis clientes. <span className="text-white font-bold">Você não correu atrás deles. Eles te encontraram.</span></p>
              <p>Você entra numa reunião. E antes de mostrar portfólio, <span className="text-white font-bold">a pessoa já sabe quem você é.</span></p>
              
              <div className="bg-white/5 p-8 rounded-3xl border-l-4 border-gold-500 mt-8 relative group">
                <Sparkles className="absolute -top-3 -right-3 text-gold-500 w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="text-white italic text-lg mb-6 leading-relaxed">
                  "Em 2024, Rony Meisler — um dos maiores nomes do empreendedorismo criativo do Brasil — me chamou pra ser sócio dele. Não porque eu tinha o maior portfólio, mas porque eu tinha **POSICIONAMENTO**."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center font-black text-[10px] text-black">CB</div>
                  <span className="text-gold-500 text-xs font-black uppercase tracking-widest">Carlos Borges</span>
                </div>
              </div>
            </div>
            <Button onClick={scrollToInvestment} className="mt-12 px-10">→ Quero Aprender Esse Código Agora</Button>
          </div>
          <div className="relative group">
             <div className="absolute -inset-4 bg-gold-500/10 rounded-[50px] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <img src="https://i.imgur.com/7jvyQiO.jpeg" className="relative rounded-[40px] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" alt="Carlos Borges" />
             <div className="absolute -bottom-8 -right-8 bg-gold-500 text-black p-8 rounded-3xl shadow-2xl font-black uppercase text-xs tracking-[0.2em]">
                Sócio do <br/> Rony Meisler
             </div>
          </div>
        </div>
      </section>

      {/* 🧠 SEÇÃO 3: O MÉTODO (PILARES) */}
      <section className="py-24 bg-magician-900/40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Como Funciona a <br/> <span className="text-gold-500">Mentoria DEZ•ORDEM™</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">Não é curso gravado. Não é grupo genérico. <br/> <span className="text-white font-bold">É transformação guiada. Mão na massa. Comigo.</span></p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Target className="w-8 h-8" />,
                pilar: "PILAR 1: DECODIFICAÇÃO", 
                semanas: "Semanas 1-3", 
                subtitle: "Entender Seu Código Criativo",
                desc: "Mapeamento completo do seu Padrão Criativo dominante e identificação das suas forças extraordinárias. Você sai sabendo EXATAMENTE como sua mente funciona."
              },
              { 
                icon: <Zap className="w-8 h-8" />,
                pilar: "PILAR 2: ESTRUTURAÇÃO", 
                semanas: "Semanas 4-7", 
                subtitle: "Aplicar as 10 Ordens",
                desc: "Rituais personalizados, microações que organizam sua entrega e sistemas que te libertam. Exemplos: Visionário aprende a executar, Organizador aprende a lançar."
              },
              { 
                icon: <Crown className="w-8 h-8" />,
                pilar: "PILAR 3: POSICIONAMENTO", 
                semanas: "Semanas 8-10", 
                subtitle: "Ser Desejado no Mercado",
                desc: "Construção de autoridade magnética. Como comunicar seu diferencial e atrair oportunidades de alto nível sem correr atrás delas."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[50px] hover:border-gold-500/30 transition-all group flex flex-col h-full">
                <div className="text-gold-500 mb-8 bg-gold-500/10 w-20 h-20 rounded-3xl flex items-center justify-center border border-gold-500/20 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-gold-500 font-black text-xs mb-2 tracking-[0.3em]">{item.pilar}</div>
                <div className="text-gray-500 text-[10px] uppercase font-bold mb-6 tracking-widest">{item.semanas}</div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-gold-500 transition-colors leading-tight">{item.subtitle}</h3>
                <p className="text-gray-400 leading-relaxed flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💰 SEÇÃO 4: INVESTIMENTO */}
      <section id="investment" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0c0616] border border-gold-500/20 rounded-[60px] p-12 md:p-24 backdrop-blur-3xl relative overflow-hidden text-center shadow-[0_0_100px_rgba(212,175,55,0.1)]">
             <div className="absolute top-0 right-0 p-12 opacity-10">
               <Crown className="w-32 h-32 text-gold-500" />
             </div>
             
             <div className="inline-block bg-red-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest mb-12 animate-pulse">
               ⚠️ Restam Apenas 4 Vagas
             </div>

             <h2 className="text-2xl text-gray-400 uppercase tracking-[0.4em] font-black mb-4">Investimento Especial</h2>
             <p className="text-gray-500 line-through text-2xl font-bold mb-2">De R$ 10.000</p>
             <div className="mb-12">
               <span className="text-4xl text-gold-500 font-serif italic">Por apenas</span> <br/>
               <span className="text-7xl md:text-9xl font-serif font-black text-white">R$ 6.000</span>
             </div>
             
             <p className="text-xl text-gray-300 mb-12">Ou 12x de <span className="text-white font-bold">R$ 580</span> no cartão</p>
             
             <Button onClick={() => window.open('https://pay.hotmart.com/YOUR_LINK', '_blank')} variant="secondary" pulse className="w-full py-9 text-2xl font-black uppercase tracking-widest mb-12 shadow-2xl">
                GARANTIR MINHA VAGA AGORA
             </Button>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t border-white/10 pt-12">
                <div className="flex items-start gap-4">
                  <Lock className="w-5 h-5 text-gold-500 mt-1" />
                  <div>
                    <p className="text-white font-bold text-sm">Pagamento Blindado</p>
                    <p className="text-gray-500 text-xs">Seus dados estão 100% protegidos e seguros.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="text-white font-bold text-sm">Garantia de 14 Dias</p>
                    <p className="text-gray-500 text-xs">Risco zero. Experimente e decida se é pra você.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 🚀 SEÇÃO COMPARATIVA */}
      <section className="py-24 bg-black/40">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white text-center mb-16">
            Sua Transformação em <span className="text-gold-500 italic">10 Semanas:</span>
          </h2>
          
          <div className="overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
            <table className="w-full text-left">
              <thead className="bg-white/5 uppercase tracking-[0.3em] font-black text-[10px] text-gray-500">
                <tr>
                  <th className="p-8">VOCÊ HOJE</th>
                  <th className="p-8 text-gold-500">VOCÊ APÓS DEZ•ORDEM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Talentoso, mas invisível", "Talentoso E posicionado"],
                  ["Corre atrás de cliente", "Clientes te procuram"],
                  ["Explica o que faz", "É reconhecido pelo que faz"],
                  ["Cobra pela hora", "Cobra pelo valor entregue"],
                  ["Luta contra a própria mente", "Domina seu código criativo"],
                  ["Pede permissão pra existir", "Ocupa espaço com autoridade"]
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-white/5 transition-colors">
                    <td className="p-8 text-gray-500 group-hover:text-gray-400 transition-colors">{row[0]}</td>
                    <td className="p-8 text-white font-bold flex items-center gap-3">
                      <ChevronRight className="w-4 h-4 text-gold-500" />
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-center text-4xl font-serif font-bold text-white mb-16">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/5 rounded-3xl overflow-hidden border border-white/5">
              <button 
                className="w-full p-8 flex items-center justify-between text-left group"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="text-lg text-white font-bold group-hover:text-gold-500 transition-colors">{faq.q}</span>
                {openFaq === i ? <Minus className="text-gold-500" /> : <Plus className="text-gold-500" />}
              </button>
              {openFaq === i && (
                <div className="px-8 pb-8 text-gray-400 animate-fade-in leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gradient-to-t from-gold-500/10 to-transparent border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-8xl font-serif font-bold text-white mb-12">
            O Momento Certo <br/>
            <span className="text-gold-500 italic font-light">É Agora.</span>
          </h2>
          <p className="text-2xl text-gray-400 mb-16 leading-relaxed">Você não está travado. Você está soterrado. <br/> E eu vim te mostrar onde cavar.</p>
          
          <div className="flex flex-col items-center gap-8">
            <Button onClick={scrollToInvestment} variant="secondary" pulse className="px-20 py-10 text-3xl font-black">
              QUERO MINHA VAGA
            </Button>
            <div className="flex items-center gap-4 text-gray-500">
               <MessageSquare className="w-5 h-5" />
               <a href="#" className="font-bold underline hover:text-white transition-colors">Ainda com dúvidas? Fale no WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-[10px] uppercase tracking-[0.4em] font-black">
         © {new Date().getFullYear()} Carlos Borges | Mentoria DEZ•ORDEM™
      </footer>
    </div>
  );
};

export default Mentoria;
