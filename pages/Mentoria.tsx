import React, { useState } from 'react';
import { Button } from '../components/Button';
import { 
  Users, 
  Calendar, 
  Trophy, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  TrendingUp, 
  Lock, 
  Zap, 
  XCircle, 
  AlertCircle,
  Plus,
  Minus,
  Sparkles,
  Target,
  Crown
} from 'lucide-react';

const Mentoria: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Eu preciso ter feito o Teste DNA Criativo antes?", a: "Não é obrigatório, mas é ALTAMENTE recomendado. O teste te dá o diagnóstico inicial. A mentoria aprofunda e IMPLEMENTA." },
    { q: "Quanto tempo por semana eu preciso dedicar?", a: "Além da sessão semanal de 90 minutos, espere dedicar 2-3 horas para implementar a Ordem da semana e 1 hora para materiais de apoio. Total: 4-5 horas/semana." },
    { q: "E se eu perder uma sessão ao vivo?", a: "Todas as sessões são gravadas e você terá acesso vitalício. Mas recomendo fortemente estar ao vivo pela troca." },
    { q: "Vou ter acesso direto a você entre as sessões?", a: "Sim. Via grupo privado no WhatsApp/Telegram para dúvidas rápidas." },
    { q: "Isso funciona para qualquer área criativa?", a: "Sim. Designers, publicitários, escritores, fotógrafos, arquitetos... Se você CRIA, o método funciona." },
    { q: "Vou sair da mentoria com clientes fechados?", a: "Não prometo clientes, prometo POSICIONAMENTO. Mas com o posicionamento correto, você atrai oportunidades melhores e fecha contratos maiores." }
  ];

  const scrollToCheckout = () => {
    document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="antialiased bg-[#050208] text-gray-200 min-h-screen selection:bg-gold-500 selection:text-black font-sans">
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-gold-900/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
            Mentoria Exclusiva | 10 Semanas | Vagas Limitadas
          </div>
          
          <h1 className="font-serif text-4xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
            Você Vai Parar de Ser Apenas <br/>
            <span className="text-gray-500 italic">"Mais Um Criativo Bom"</span> <br/>
            E Vai Se Tornar O Criativo <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400">Que Grandes Autoridades Disputam</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-light">
            10 semanas. 10 Ordens. 1 transformação completa. <br/>
            Da mente travada ao posicionamento magnético.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button onClick={scrollToCheckout} variant="secondary" pulse className="px-12 py-6 text-xl min-w-[300px] font-black uppercase tracking-tighter shadow-gold-500/20">
              → Quero Minha Vaga Agora
            </Button>
            <button 
              onClick={() => document.getElementById('method')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white font-bold hover:text-gold-500 transition-colors flex items-center gap-2 group"
            >
              Ver Como Funciona <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 opacity-60">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white">
              <Users className="w-4 h-4 text-gold-500" /> Apenas 12 vagas por turma
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white">
              <TrendingUp className="w-4 h-4 text-green-500" /> 8 vagas confirmadas
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white">
              <Zap className="w-4 h-4 text-purple-500" /> Investimento sobe R$ 4.000 em breve
            </div>
          </div>
        </div>
      </section>

      {/* The Pain */}
      <section className="py-24 bg-black/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-16 text-center">
            Você Já Percebeu Que...
          </h2>

          <div className="space-y-6">
            {[
              "Você entrega trabalhos incríveis — mas cobra pouco",
              "Você tem ideias que mudariam projetos inteiros — mas ninguém te chama pra mesa de decisão",
              "Você trabalha mais que muita gente 'famosa' — mas continua invisível",
              "Você já criou coisas que deveriam ter viralizado — mas ficaram no vazio",
              "Você vê criativos 'menores' que você sendo disputados — enquanto você ainda precisa 'vender' seu trabalho",
              "Você tem portfólio, experiência, resultado — mas não tem POSICIONAMENTO"
            ].map((pain, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-red-500/20 transition-colors group">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="text-gray-300 text-lg leading-snug">{pain}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-gold-500/10 p-10 rounded-3xl border border-gold-500/20">
            <p className="text-xl md:text-2xl text-white font-bold mb-4">E isso dói. Porque você SABE que não é falta de talento.</p>
            <p className="text-3xl md:text-4xl text-gold-500 font-serif italic font-bold">É falta de código.</p>
          </div>
        </div>
      </section>

      {/* The Transformation / Story */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-gold-500/20 blur-3xl rounded-full"></div>
             <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
               <img src="https://i.imgur.com/7jvyQiO.jpeg" alt="Carlos Borges" className="w-full h-full object-cover grayscale" />
             </div>
             <div className="absolute -bottom-6 -right-6 bg-gold-500 p-6 rounded-2xl shadow-2xl max-w-[200px]">
                <p className="text-black font-black text-xs uppercase leading-tight">Sócio do Rony Meisler</p>
                <p className="text-black/60 text-[10px] font-bold mt-1">Convidado para a mesa de decisão.</p>
             </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
              Imagine Ser <span className="text-gold-500 italic">Desejado.</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                Imagine abrir seu Instagram e ter mensagens de clientes te procurando, não o contrário. 
                Imagine entrar numa reunião e a pessoa já saber quem você é.
              </p>
              <div className="bg-white/5 p-8 rounded-2xl border-l-4 border-gold-500">
                <p className="text-white italic mb-4">"Em 2024, Rony Meisler — um dos maiores nomes do empreendedorismo criativo do Brasil — me chamou pra ser sócio dele. Não pelo meu portfólio, mas pelo meu **POSICIONAMENTO**."</p>
                <p className="text-gold-500 font-black text-xs uppercase">— Carlos Borges</p>
              </div>
              <p>
                Não é sorte. É código. O mesmo código que eu vou te ensinar nos próximos 10 semanas para que você não seja mais uma commodity.
              </p>
            </div>
            <Button onClick={scrollToCheckout} variant="primary" className="px-10 py-5">
              QUERO ESSE POSICIONAMENTO
            </Button>
          </div>
        </div>
      </section>

      {/* The Method - 3 Pillars */}
      <section id="method" className="py-24 bg-magician-900/50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Como Funciona o <br/> <span className="text-gold-500">Método DEZ•ORDEM™</span></h2>
            <p className="text-gray-400">Não é curso. É transformação guiada. Mão na massa.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                num: "01",
                title: "DECODIFICAÇÃO", 
                subtitle: "Semanas 1-3 | Seu DNA",
                icon: <Target className="w-8 h-8" />,
                desc: "Mapeamento profundo do seu Padrão Criativo. Você sai sabendo EXATAMENTE como sua mente funciona e qual seu diferencial magnético." 
              },
              { 
                num: "02",
                title: "ESTRUTURAÇÃO", 
                subtitle: "Semanas 4-7 | As 10 Ordens",
                icon: <Zap className="w-8 h-8" />,
                desc: "Implementação das rituais e sistemas pro SEU tipo de cérebro. O caos vira clareza operativa. O motor de Ferrari ganha o manual certo." 
              },
              { 
                num: "03",
                title: "POSICIONAMENTO", 
                subtitle: "Semanas 8-10 | Maestria",
                icon: <Crown className="w-8 h-8" />,
                desc: "Ser lembrado e disputado. Como cobrar o que você vale e atrair oportunidades de alto nível sem correr atrás delas." 
              }
            ].map((pilar, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[40px] relative group hover:border-gold-500/40 transition-all">
                <div className="absolute top-8 right-8 text-white/5 font-serif text-8xl font-black group-hover:text-gold-500/10 transition-colors">{pilar.num}</div>
                <div className="text-gold-500 mb-6 bg-gold-500/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-gold-500/20">{pilar.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{pilar.title}</h3>
                <p className="text-gold-500 text-xs font-black uppercase tracking-widest mb-6">{pilar.subtitle}</p>
                <p className="text-gray-400 leading-relaxed">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusion List */}
      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="bg-[#0c0616] border border-white/5 rounded-[40px] p-8 md:p-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12 text-center">O Que Está Incluído:</h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              "10 Sessões ao vivo de 90min cada",
              "Diagnóstico Profundo do DNA Criativo",
              "Implementação Guiada das 10 Ordens",
              "Grupo Privado Exclusivo WhatsApp",
              "Workbooks e Templates Semanais",
              "Sessão Bônus de Continuidade",
              "Gravações Vitalícias de tudo",
              "Certificado de Conclusão Oficial"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment / Pricing Card */}
      <section id="investment" className="py-24 bg-gradient-to-b from-black to-magician-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-red-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest mb-12 animate-pulse">
            ⚠️ Apenas 4 Vagas Restantes Nesta Turma
          </div>
          
          <div className="bg-white/5 border border-gold-500/30 p-12 md:p-20 rounded-[50px] backdrop-blur-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8">
               <Crown className="w-16 h-16 text-gold-500/10" />
             </div>
             
             <h2 className="text-2xl text-gray-400 uppercase tracking-[0.4em] font-black mb-4">Investimento</h2>
             <p className="text-gray-500 line-through text-2xl font-bold mb-4">De R$ 10.000</p>
             <div className="mb-12">
               <span className="text-4xl text-gold-500 font-bold">Por apenas</span> <br/>
               <span className="text-7xl md:text-9xl font-serif font-black text-white">R$ 6.000</span>
             </div>
             
             <p className="text-xl text-gray-300 mb-12">Ou 12x de <span className="text-white font-bold">R$ 580</span> no cartão</p>
             
             <Button onClick={() => window.open('https://pay.hotmart.com/YOUR_MENTORIA_LINK', '_blank')} variant="secondary" pulse className="w-full py-8 text-2xl font-black uppercase tracking-widest mb-8">
                GARANTIR MINHA VAGA AGORA
             </Button>
             
             <div className="flex flex-col items-center gap-4 text-gray-500 text-sm">
               <div className="flex items-center gap-2">
                 <Lock className="w-4 h-4" /> Pagamento 100% Seguro via Hotmart
               </div>
               <div className="flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4 text-green-500" /> 14 Dias de Garantia Incondicional
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-24 max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl md:text-6xl font-serif font-bold text-white mb-16">
          Bônus Para Esta <span className="text-gold-500 italic">Turma Fundadora:</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Sessão 1-on-1 Comigo", value: "R$ 2.500", desc: "60 minutos individuais para traçarmos sua estratégia personalizada de posicionamento." },
            { title: "Livro Físico Antecipado", value: "R$ 97", desc: "Receba o livro DezOrdem em casa antes do lançamento oficial, com dedicatória." },
            { title: "Comunidade Vitalícia", value: "Inestimável", desc: "Acesso à rede de ex-mentorados para networking e oportunidades exclusivas." }
          ].map((bonus, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl relative">
              <div className="absolute -top-4 -right-4 bg-green-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Grátis</div>
              <h3 className="text-white font-bold text-xl mb-2">{bonus.title}</h3>
              <p className="text-gold-500 text-xs font-black uppercase mb-6">Valor: {bonus.value}</p>
              <p className="text-gray-400 text-sm">{bonus.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For Whom / Not For Whom */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="p-10 rounded-[40px] bg-green-900/5 border border-green-500/10">
            <h3 className="text-2xl font-bold text-green-500 flex items-center gap-3 mb-8 uppercase tracking-widest">
              <CheckCircle className="w-6 h-6" /> É Para Você Se:
            </h3>
            <ul className="space-y-4 text-gray-300">
              {[
                "Você já tem experiência (não é iniciante absoluto)",
                "Cansa de ser 'o criativo barato' do mercado",
                "Quer ser chamado por grandes autoridades",
                "Está disposto a IMPLEMENTAR, não só ver aula",
                "Quer clareza real sobre como seu cérebro funciona"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start"><ArrowRight className="w-4 h-4 text-green-500 mt-1" /> {item}</li>
              ))}
            </ul>
          </div>
          
          <div className="p-10 rounded-[40px] bg-red-900/5 border border-red-500/10">
            <h3 className="text-2xl font-bold text-red-500 flex items-center gap-3 mb-8 uppercase tracking-widest">
              <XCircle className="w-6 h-6" /> NÃO É Para Você Se:
            </h3>
            <ul className="space-y-4 text-gray-300">
              {[
                "Busca fórmula mágica sem esforço",
                "Quer apenas 'mais um curso' passivo",
                "Não está disposto a ser vulnerável na mentoria",
                "Busca 'hacks de Instagram' e truques rápidos",
                "Não está pronto para investir em crescimento real"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start"><XCircle className="w-4 h-4 text-red-500 mt-1" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 max-w-3xl mx-auto px-4">
        <h2 className="text-center text-4xl font-serif font-bold text-white mb-16">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button 
                className="w-full py-6 flex items-center justify-between text-left group"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="text-lg text-white font-bold group-hover:text-gold-500 transition-colors">{faq.q}</span>
                {openFaq === i ? <Minus className="text-gold-500" /> : <Plus className="text-gold-500" />}
              </button>
              {openFaq === i && (
                <div className="pb-8 text-gray-400 animate-fade-in leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-t from-gold-500/10 to-transparent border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8">
            Você não está travado. <br/>
            <span className="text-gold-500 italic">Você está soterrado.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">E eu vim te mostrar onde cavar. O momento certo é AGORA.</p>
          
          <div className="flex flex-col items-center gap-8">
            <Button onClick={scrollToCheckout} variant="secondary" pulse className="px-16 py-8 text-2xl font-black">
              QUERO MINHA VAGA NA MENTORIA
            </Button>
            <div className="flex items-center gap-4 text-gray-500">
               <MessageSquare className="w-5 h-5" />
               <a href="#" className="font-bold underline hover:text-white">Falar com minha equipe no WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center bg-black">
        <p className="text-xs text-gray-600 uppercase tracking-widest font-black">
          © {new Date().getFullYear()} Carlos Borges | Criador do Método DEZ•ORDEM™
        </p>
      </footer>
    </div>
  );
};

export default Mentoria;