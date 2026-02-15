'use client';

import Link from 'next/link';
import { useLang, LangToggle } from '@/components/LanguageProvider';

const timelineEN = [
  { year: 'Mar 2024', title: 'Snipe', content: 'Snipe is born — an auction marketplace. Trying to survive, we began measuring how language models positioned us against the competition.' },
  { year: 'Oct 2025', title: 'The anomaly', content: 'Snipe goes to market. We run a semantic and entropic analysis of 700+ companies — heat maps, k-cluster, singularity analysis. Result: #17 among the most singular. Ranked ahead of major platforms with zero investment. But the market wasn\'t buying. Something didn\'t add up.' },
  { year: 'Oct 2025', title: 'The question', content: 'Why does that distance exist? If we were positioned legitimately... what happens when someone does it illegitimately? Who measures that distance? Who certifies it? No one.' },
  { year: '2024', title: 'SPE Audit', content: 'Forensic integrity engine. Certifies the temporal integrity of any file — AI outputs, corporate documents, contracts — through cryptographically verifiable Forensic Capsules. One-click certification. US provisional patent.', link: { href: 'https://speaudit.com', label: 'speaudit.com' } },
  { year: '2025', title: 'SPE Trace', content: 'Semantic reality for organizations. Measures D(t) = |S(t) − R(t)|: the distance between what you say you are and what the market understands you to be.', link: { href: 'https://spetrace.com', label: 'spetrace.com' } },
  { year: '2025', title: 'The discovery', content: 'When we applied the same model to larger structures — not companies but systems — D(t) measured the gap between any dominant narrative and the underlying structural reality. The framework does not explain historical collapses: it measures semantic divergence patterns observable in any narrative structure.' },
  { year: '2025', title: 'MCSH', content: 'The Human Semantic Field Model formalizes everything above. S(t) — structural reality. R(t) — narrative. D(t) — distance. V(t) = dD/dt — velocity. When V(t) is positive and accelerating, tension releases all at once. Always.' },
  { year: '2026', title: 'Observatory', content: 'Systemic Fragility Observatory — public global systemic fragility monitor. 7-state Markov model. Monte Carlo n=10,000. 10 non-conventional indicators. Current diagnosis: S1\' — Synthetic Bubble.', link: { href: '/observatory', label: 'Enter the Observatory →' } },
];

const timelineES = [
  { year: 'Mar 2024', title: 'Snipe', content: 'Nace Snipe — un marketplace de subastas. Intentando sobrevivir, empezamos a medir cómo nos posicionaban los modelos de lenguaje frente a la competencia.' },
  { year: 'Oct 2025', title: 'La anomalía', content: 'Snipe sale al mercado. Hacemos un estudio semántico y entrópico de más de 700 empresas — mapas de calor, k-cluster, análisis de singularidad. Resultado: #17 entre las más singulares. Posicionados por delante de grandes plataformas con cero inversión. Pero el mercado no compraba. Algo no cuadraba.' },
  { year: 'Oct 2025', title: 'La pregunta', content: '¿Por qué existe esa distancia? Si nosotros nos posicionábamos legítimamente... ¿qué pasa cuando alguien lo hace ilegítimamente? ¿Quién mide esa distancia? ¿Quién la certifica? Nadie.' },
  { year: '2024', title: 'SPE Audit', content: 'Motor de integridad forense. Certifica la integridad temporal de cualquier archivo — outputs de IA, documentos corporativos, contratos — mediante Cápsulas Forenses criptográficamente verificables. Certificación a un solo clic. Patente provisional US.', link: { href: 'https://speaudit.com', label: 'speaudit.com' } },
  { year: '2025', title: 'SPE Trace', content: 'Realidad semántica para empresas. Mide D(t) = |S(t) − R(t)|: la distancia entre lo que dices que eres y lo que el mercado entiende que eres.', link: { href: 'https://spetrace.com', label: 'spetrace.com' } },
  { year: '2025', title: 'El descubrimiento', content: 'Cuando aplicamos el mismo modelo a estructuras mayores — no empresas sino sistemas — D(t) medía la brecha entre cualquier narrativa dominante y la realidad estructural subyacente. El marco no explica colapsos históricos: mide patrones de divergencia semántica que pueden observarse en cualquier estructura narrativa.' },
  { year: '2025', title: 'MCSH', content: 'El Modelo del Campo Semántico Humano formaliza todo lo anterior. S(t) — realidad estructural. R(t) — narrativa. D(t) — distancia. V(t) = dD/dt — velocidad. Cuando V(t) es positiva y acelerada, la tensión se libera de golpe. Siempre.' },
  { year: '2026', title: 'Observatory', content: 'Systemic Fragility Observatory — monitor público de fragilidad sistémica global. Modelo Markov de 7 estados. Monte Carlo n=10.000. 10 indicadores no convencionales. Diagnóstico actual: S1\' — Burbuja Sintética.', link: { href: '/observatory', label: 'Entrar al Observatory →' } },
];

export default function AboutContent() {
  const { locale } = useLang();
  const isEN = locale === 'en';
  const timeline = isEN ? timelineEN : timelineES;

  return (
    <div className="min-h-screen bg-obs-bg">
      {/* Header */}
      <header className="border-b border-obs-border">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm font-bold text-white hover:text-obs-text-secondary transition-colors">
            SFS
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/observatory" className="text-xs text-obs-text-secondary/50 hover:text-white transition-colors">
              Observatory
            </Link>
            <span className="text-xs text-white">About</span>
            <LangToggle />
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-20 pb-24">
        {/* Opening */}
        <p className="text-obs-text-secondary/40 font-mono text-xs tracking-[0.3em] uppercase mb-6">
          {isEN ? 'About us' : 'Sobre nosotros'}
        </p>

        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          {isEN ? "We didn't start with a theory." : 'No empezamos con una teoría.'}{' '}
          <br className="hidden md:block" />
          {isEN ? 'We started with an' : 'Empezamos con una'}{' '}
          <span className="text-obs-text-secondary/60">{isEN ? 'anomaly' : 'anomalía'}</span>.
        </h1>

        <p className="text-lg text-obs-text-secondary/60 mb-20 max-w-xl leading-relaxed">
          {isEN
            ? 'We were trying to survive with a marketplace. We found a metric that didn\'t exist. And when we applied it to larger structures, it explained things no one had measured before.'
            : 'Buscábamos sobrevivir con un marketplace. Encontramos una métrica que no existía. Y cuando la aplicamos a estructuras mayores, explicaba cosas que nadie había medido antes.'}
        </p>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[14px] top-2 bottom-2 w-px bg-obs-border" />
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-12">
                <div className={`absolute left-[10px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
                  idx === timeline.length - 1 ? 'bg-white border-white' : 'bg-obs-bg border-obs-text-secondary/20'
                }`} />
                <span className="text-[10px] font-mono text-obs-text-secondary/30 uppercase tracking-wider">{item.year}</span>
                <h2 className="text-lg font-bold text-white mt-1 mb-2">{item.title}</h2>
                <p className="text-sm text-obs-text-secondary/60 leading-relaxed max-w-lg">{item.content}</p>
                {item.link && (
                  <Link
                    href={item.link.href}
                    className="inline-block mt-3 text-xs text-obs-blue hover:text-white transition-colors font-mono"
                    {...(item.link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {item.link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* The equation */}
        <div className="mt-24 bg-obs-card/40 border border-obs-border rounded-xl p-8">
          <p className="text-[9px] font-mono text-obs-text-secondary/30 uppercase tracking-wider mb-4">
            {isEN ? 'The fundamental equation' : 'La ecuación fundamental'}
          </p>
          <div className="font-mono text-sm text-obs-text-secondary/80 space-y-2">
            <p><span className="text-white font-bold">S(t)</span> — {isEN ? 'what the system actually is' : 'lo que el sistema realmente es'}</p>
            <p><span className="text-white font-bold">R(t)</span> — {isEN ? 'what is said it is' : 'lo que se dice que es'}</p>
            <p><span className="text-white font-bold">D(t)</span> = |S(t) − R(t)| — {isEN ? 'the distance between both' : 'la distancia entre ambos'}</p>
            <p><span className="text-white font-bold">V(t)</span> = dD/dt — {isEN ? 'the rate at which that distance grows' : 'la velocidad a la que crece esa distancia'}</p>
          </div>
          <p className="mt-5 text-sm text-obs-text-secondary/50 leading-relaxed">
            {isEN
              ? 'When V(t) is positive and accelerating, the system is accumulating tension that doesn\'t release gradually. It releases all at once. Always.'
              : 'Cuando V(t) es positiva y acelerada, el sistema está acumulando tensión que no se libera gradualmente. Se libera de golpe. Siempre.'}
          </p>
        </div>

        {/* Three products */}
        <div className="mt-16">
          <p className="text-[9px] font-mono text-obs-text-secondary/30 uppercase tracking-wider mb-6">
            {isEN ? 'Three products · One origin · One question' : 'Tres productos · Un origen · Una pregunta'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="https://speaudit.com" target="_blank" rel="noopener noreferrer" className="bg-obs-card/30 border border-obs-border rounded-lg p-5 hover:border-obs-text-secondary/20 transition-all group">
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-obs-blue transition-colors">SPE Audit</h3>
              <p className="text-[10px] text-obs-text-secondary/40 leading-relaxed">
                {isEN ? 'Forensic integrity. Certifies any file with one click.' : 'Integridad forense. Certifica cualquier archivo a un clic.'}
              </p>
            </a>
            <a href="https://spetrace.com" target="_blank" rel="noopener noreferrer" className="bg-obs-card/30 border border-obs-border rounded-lg p-5 hover:border-obs-text-secondary/20 transition-all group">
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-obs-blue transition-colors">SPE Trace</h3>
              <p className="text-[10px] text-obs-text-secondary/40 leading-relaxed">
                {isEN ? 'Semantic reality for organizations. Measures the distance between narrative and reality.' : 'Realidad semántica para empresas. Mide la distancia entre narrativa y realidad.'}
              </p>
            </a>
            <Link href="/observatory" className="bg-obs-card/30 border border-obs-border rounded-lg p-5 hover:border-obs-text-secondary/20 transition-all group">
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-obs-blue transition-colors">MCSH + Observatory</h3>
              <p className="text-[10px] text-obs-text-secondary/40 leading-relaxed">
                {isEN ? 'Foundational theoretical framework. Case study. Live monitor.' : 'Marco teórico fundacional. Caso de estudio. Monitor en tiempo real.'}
              </p>
            </Link>
          </div>
        </div>

        {/* Why we haven't stopped */}
        <div className="mt-20 border-t border-obs-border pt-12">
          <h2 className="text-xl font-bold text-white mb-4">
            {isEN ? 'Why we haven\'t stopped' : 'Por qué no paramos'}
          </h2>
          <p className="text-sm text-obs-text-secondary/50 leading-relaxed max-w-lg">
            {isEN
              ? 'We are not academics seeking empirical validation. We are observers who found a real pattern and built the tools to measure it. That has consequences. We are exploring them.'
              : 'No somos académicos que buscan validación empírica. Somos observadores que encontraron un patrón real y construyeron las herramientas para medirlo. Eso tiene consecuencias. Las estamos explorando.'}
          </p>
        </div>

        {/* Author */}
        <div className="mt-16 flex items-start gap-5 border-t border-obs-border pt-10">
          <div>
            <p className="text-sm font-semibold text-white">Rubén Abella</p>
            <p className="text-[10px] text-obs-text-secondary/40 mt-0.5 leading-relaxed">
              {isEN
                ? <>Independent research in meaning dynamics,<br />AI auditing, and systemic fragility.</>
                : <>Investigación independiente en dinámica del significado,<br />auditoría de IA y fragilidad sistémica.</>}
            </p>
            <div className="flex items-center gap-4 mt-3">
              <a href="https://www.linkedin.com/in/rub%C3%A9nabella/" target="_blank" rel="noopener noreferrer" className="text-xs text-obs-blue hover:text-white transition-colors">LinkedIn →</a>
              <a href="mailto:contact@semanticfieldscience.org" className="text-xs text-obs-text-secondary/40 hover:text-white transition-colors">contact@semanticfieldscience.org</a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-obs-border py-8 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <p className="text-[10px] text-obs-text-secondary/20 font-mono">© 2026 Semantic Field Science</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-[10px] text-obs-text-secondary/30 hover:text-white transition-colors">Home</Link>
            <Link href="/observatory" className="text-[10px] text-obs-text-secondary/30 hover:text-white transition-colors">Observatory</Link>
            <Link href="/privacy" className="text-[10px] text-obs-text-secondary/30 hover:text-white transition-colors">{isEN ? 'Privacy' : 'Privacidad'}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
