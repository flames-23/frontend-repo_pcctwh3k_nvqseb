import React from 'react'
import { motion } from 'framer-motion'
import { Users, ShieldCheck, Truck, Calculator, Shield, ShoppingBag, Zap, Sparkles, Rocket } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import SectionTitle from './components/SectionTitle'
import GlowingCard from './components/GlowingCard'
import Accordion from './components/Accordion'

const PRIMARY = '#18A495'

function GradientBg() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[#0a0f12]" />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_left,rgba(24,164,149,0.25),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black, transparent 70%)' }} />
    </div>
  )
}

function NeonButton({ children }) {
  return (
    <a href="#oferta" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: PRIMARY, boxShadow: `0 10px 30px ${PRIMARY}40, 0 0 0 1px ${PRIMARY}80 inset` }}>
      {children}
    </a>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <GradientBg />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <Sparkles className="w-4 h-4 text-teal-300" />
            <span className="text-xs text-slate-300">Comunidade exclusiva • Conteúdo atualizado</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Importing Club – O caminho para importar streetwear, eletrônicos e muito mais pagando o preço justo
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mt-4 text-slate-300 text-lg">
            Criado e liderado pelo CEO Thiago Ruiz, guiando você para se tornar um importador independente.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="mt-8 flex items-center gap-4">
            <NeonButton>Garantir Minha Vaga</NeonButton>
            <a href="#aprendizado" className="text-slate-300 hover:text-white transition">Ver conteúdo</a>
          </motion.div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop" alt="Futuristic lifestyle" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0f12]/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full blur-2xl" style={{ background: `${PRIMARY}55` }} />
          <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full blur-2xl" style={{ background: '#60a5fa55' }} />
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="relative py-24">
      <GradientBg />
      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <SectionTitle
            eyebrow="Quem sou eu"
            title="Thiago Ruiz — seu mentor no jogo das importações"
            subtitle="Fundador do Importing Club, especialista em mapear fornecedores, negociar fretes e construir fluxo de importação com segurança e eficiência."
          />
          <div className="mt-6 space-y-3 text-slate-300">
            <p>Mais de 7 anos no mercado, conectando marcas e pessoas ao melhor do streetwear, sneakers e eletrônicos — sem depender de atravessadores.</p>
            <p>Direto, prático e com foco em resultado. Aqui você aprende o que realmente funciona.</p>
          </div>
          <div className="mt-8 flex items-center gap-6 text-slate-300/90">
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-teal-300" /><span>Metodologia comprovada</span></div>
            <div className="flex items-center gap-2"><Users className="w-5 h-5 text-teal-300" /><span>Comunidade ativa</span></div>
          </div>
        </div>
        <div className="relative max-w-md md:max-w-none md:ml-auto">
          <div className="relative rounded-3xl border border-teal-400/20 bg-gradient-to-b from-white/10 to-white/5 p-2">
            <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1200&auto=format&fit=crop" alt="Thiago Ruiz" className="rounded-[22px] object-cover w-full h-[420px]" />
            <div className="absolute inset-0 rounded-[22px] ring-1 ring-white/10" />
            <div className="absolute -inset-1 rounded-[24px] opacity-40 blur-2xl" style={{ background: `radial-gradient(60% 60% at 30% 20%, ${PRIMARY}50, transparent)` }} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Learn() {
  const items = [
    { icon: Truck, title: 'Fornecedores confiáveis', desc: 'Acesso a players reais e verificados — direto na fonte.' },
    { icon: Calculator, title: 'Cálculo de taxas', desc: 'Simulações práticas para tomar decisões com segurança.' },
    { icon: Shield, title: 'Segurança nas compras', desc: 'Estratégias para reduzir riscos e evitar golpes.' },
    { icon: ShoppingBag, title: 'Streetwear & Sneakers', desc: 'Importação com foco em hype e peças originais.' },
    { icon: Zap, title: 'Eletrônicos', desc: 'Rotas e fornecedores para tech com melhor custo-benefício.' },
    { icon: Rocket, title: 'Otimização de fretes', desc: 'Velocidade, rastreio e custos balanceados.' },
  ]
  return (
    <section id="aprendizado" className="relative py-24">
      <GradientBg />
      <div className="relative z-10 container mx-auto px-6">
        <SectionTitle
          eyebrow="O que você vai aprender"
          title="Do zero ao importador independente"
          subtitle="Conteúdo direto ao ponto, com aplicação imediata para você começar a importar com autonomia."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <GlowingCard key={i} icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  const items = [
    { title: 'Economia real', desc: 'Pague o preço justo e pare de depender de intermediários.' },
    { title: 'Acesso a fornecedores', desc: 'Entre no circuito certo e ganhe vantagem competitiva.' },
    { title: 'Liberdade para importar', desc: 'Construa seu fluxo e escale no seu ritmo.' },
  ]
  return (
    <section className="relative py-24">
      <GradientBg />
      <div className="relative z-10 container mx-auto px-6">
        <SectionTitle
          eyebrow="Benefícios"
          title="Por que o Importing Club?"
          subtitle="Uma combinação de método, comunidade e curadoria de fornecedores que realmente funciona."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="relative rounded-2xl border border-teal-400/20 bg-white/5 p-6 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl" style={{ background: `${PRIMARY}25` }} />
              <h3 className="text-white font-semibold text-lg mb-2">{it.title}</h3>
              <p className="text-slate-300/90 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Community() {
  return (
    <section className="relative py-24">
      <GradientBg />
      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <SectionTitle
            eyebrow="Comunidade exclusiva"
            title="Suporte contínuo, atualizações e network real"
            subtitle="Participe de um ecossistema focado em resultado, com discussões semanais, alertas de oportunidades e feedback direto."
          />
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-center gap-2"><Users className="w-5 h-5 text-teal-300" />Network com importadores reais</li>
            <li className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-teal-300" />Conteúdos e dicas exclusivas</li>
            <li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-teal-300" />Suporte direto do mentor</li>
          </ul>
        </div>
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop" alt="Community" className="w-full h-[380px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full blur-2xl" style={{ background: `${PRIMARY}55` }} />
          <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full blur-2xl" style={{ background: '#60a5fa55' }} />
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    { name: 'Lucas M.', text: 'Em 2 semanas, já tinha trazido meu primeiro lote de peças com margem excelente.' },
    { name: 'Ana P.', text: 'Aprendi a calcular tudo certinho e nunca mais fui enganada por atravessador.' },
    { name: 'Diego S.', text: 'A comunidade é o diferencial. Network e oportunidades reais todo dia.' },
  ]
  return (
    <section className="relative py-24">
      <GradientBg />
      <div className="relative z-10 container mx-auto px-6">
        <SectionTitle
          eyebrow="Resultados reais"
          title="Depoimentos"
          subtitle="Feedbacks de quem já aplicou a metodologia"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="relative rounded-2xl border border-teal-400/20 bg-white/5 p-6 backdrop-blur-md">
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(24,164,149,0.15)' }} />
              <p className="text-slate-300 mb-4">“{t.text}”</p>
              <div className="text-white font-semibold">{t.name}</div>
              <div className="mt-1 text-xs text-slate-400">Aluno Importing Club</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Offer() {
  return (
    <section id="oferta" className="relative py-24">
      <GradientBg />
      <div className="relative z-10 container mx-auto px-6">
        <SectionTitle
          eyebrow="Oferta Especial"
          title="Entre para o Importing Club"
          subtitle="Acesso ao curso completo + comunidade + atualizações contínuas"
        />

        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="relative rounded-2xl border border-teal-400/20 bg-white/[0.04] p-6">
            <h3 className="text-white font-bold text-xl mb-2">Plano Único</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• Acesso imediato a todos os módulos</li>
              <li>• Comunidade exclusiva e suporte</li>
              <li>• Atualizações constantes</li>
              <li>• Garantia de 7 dias</li>
            </ul>
            <div className="mt-6 flex items-end gap-3">
              <div className="text-4xl font-extrabold text-white">R$ 997</div>
              <div className="text-slate-400 mb-1">à vista</div>
            </div>
            <div className="mt-6">
              <NeonButton>Garantir Minha Vaga</NeonButton>
            </div>
            <div className="mt-3 text-xs text-slate-400">Pagamento seguro. Acesso por 12 meses.</div>
          </div>

          <div className="relative rounded-2xl border border-teal-400/20 bg-white/[0.04] p-6">
            <h4 className="text-white font-semibold mb-3">Garantia</h4>
            <p className="text-slate-300 text-sm">Você tem 7 dias para testar. Se não fizer sentido, devolvemos 100% do seu investimento.</p>
            <div className="mt-6 h-[160px] rounded-xl bg-gradient-to-br from-teal-500/20 to-sky-500/20 ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const items = [
    { q: 'Para quem é o Importing Club?', a: 'Para quem quer autonomia para importar streetwear, sneakers e eletrônicos com segurança e preço justo.' },
    { q: 'Quanto tempo para ter resultado?', a: 'Depende do seu ritmo, mas com aplicação prática, alunos costumam importar o primeiro lote em poucas semanas.' },
    { q: 'Como funciona a comunidade?', a: 'Acesso a um grupo exclusivo com atualizações, debates, alertas e suporte direto.' },
    { q: 'Tem garantia?', a: 'Sim, 7 dias de garantia incondicional.' },
  ]
  return (
    <section className="relative py-24">
      <GradientBg />
      <div className="relative z-10 container mx-auto px-6">
        <SectionTitle eyebrow="FAQ" title="Perguntas Frequentes" />
        <div className="max-w-3xl mx-auto">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f12] text-white">
      <Hero />
      <About />
      <Learn />
      <Benefits />
      <Community />
      <Testimonials />
      <Offer />
      <FAQ />
      <footer className="relative py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(24,164,149,0.1),transparent_50%)]" />
        <div className="relative container mx-auto px-6 text-center text-slate-400">
          © {new Date().getFullYear()} Importing Club • Todos os direitos reservados
        </div>
      </footer>
    </div>
  )
}
