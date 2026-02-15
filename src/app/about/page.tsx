import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About · Semantic Field Science',
  description:
    'No empezamos con una teoría. Empezamos con una anomalía. Origen, productos y marco teórico del Campo Semántico Humano.',
  alternates: {
    canonical: 'https://www.semanticfieldscience.org/about',
  },
};

const timeline = [
  {
    year: 'Mar 2024',
    title: 'Snipe',
    content:
      'Nace Snipe — un marketplace de subastas. Intentando sobrevivir, empezamos a medir cómo nos posicionaban los modelos de lenguaje frente a la competencia.',
  },
  {
    year: 'Sep 2025',
    title: 'La anomalía',
    content:
      'Snipe sale al mercado. Hacemos un estudio semántico y entrópico de más de 700 empresas — mapas de calor, k-cluster, análisis de singularidad. Resultado: #17 entre las más singulares. Posicionados por delante de grandes plataformas con cero inversión. Pero el mercado no compraba. Algo no cuadraba.',
  },
  {
    year: 'Sep 2025',
    title: 'La pregunta',
    content:
      '¿Por qué existe esa distancia? Si nosotros nos posicionábamos legítimamente... ¿qué pasa cuando alguien lo hace ilegítimamente? ¿Quién mide esa distancia? ¿Quién la certifica? Nadie.',
  },
  {
    year: '2024',
    title: 'SPE Audit',
    content:
      'Motor de integridad forense. Certifica la integridad temporal de cualquier archivo — outputs de IA, documentos corporativos, contratos — mediante Cápsulas Forenses criptográficamente verificables. Certificación a un solo clic. Patente provisional US.',
    link: { href: 'https://speaudit.com', label: 'speaudit.com' },
  },
  {
    year: '2025',
    title: 'SPE Trace',
    content:
      'Realidad semántica para empresas. Mide D(t) = |S(t) − R(t)|: la distancia entre lo que dices que eres y lo que el mercado entiende que eres.',
    link: { href: 'https://spetrace.com', label: 'spetrace.com' },
  },
  {
    year: '2025',
    title: 'El descubrimiento',
    content:
      'Cuando aplicamos el mismo modelo a estructuras mayores — no empresas sino sistemas — D(t) medía la brecha entre cualquier narrativa dominante y la realidad estructural subyacente. Roma. La URSS. 2008. El patrón es el mismo.',
  },
  {
    year: '2025',
    title: 'MCSH',
    content:
      'El Modelo del Campo Semántico Humano formaliza todo lo anterior. S(t) — realidad estructural. R(t) — narrativa. D(t) — distancia. V(t) = dD/dt — velocidad. Cuando V(t) es positiva y acelerada, la tensión se libera de golpe. Siempre.',
  },
  {
    year: '2026',
    title: 'Observatory',
    content:
      'Systemic Fragility Observatory — monitor público de fragilidad sistémica global. Modelo Markov de 7 estados. Monte Carlo n=10.000. 10 indicadores no convencionales. Diagnóstico actual: S1\' — Burbuja Sintética.',
    link: { href: '/observatory', label: 'Entrar al Observatory →' },
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-obs-bg">
      {/* Simple header */}
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
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-20 pb-24">
        {/* Opening */}
        <p className="text-obs-text-secondary/40 font-mono text-xs tracking-[0.3em] uppercase mb-6">
          Sobre nosotros
        </p>

        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          No empezamos con una teoría.{' '}
          <br className="hidden md:block" />
          Empezamos con una{' '}
          <span className="text-obs-text-secondary/60">anomalía</span>.
        </h1>

        <p className="text-lg text-obs-text-secondary/60 mb-20 max-w-xl leading-relaxed">
          Buscábamos sobrevivir con un marketplace. Encontramos una métrica que no existía.
          Y cuando la aplicamos a estructuras mayores, explicaba cosas que nadie había medido antes.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[14px] top-2 bottom-2 w-px bg-obs-border" />

          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-12">
                {/* Dot */}
                <div className={`absolute left-[10px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
                  idx === timeline.length - 1
                    ? 'bg-white border-white'
                    : 'bg-obs-bg border-obs-text-secondary/20'
                }`} />

                {/* Year */}
                <span className="text-[10px] font-mono text-obs-text-secondary/30 uppercase tracking-wider">
                  {item.year}
                </span>

                {/* Title */}
                <h2 className="text-lg font-bold text-white mt-1 mb-2">
                  {item.title}
                </h2>

                {/* Content */}
                <p className="text-sm text-obs-text-secondary/60 leading-relaxed max-w-lg">
                  {item.content}
                </p>

                {/* Link */}
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
            La ecuación fundamental
          </p>
          <div className="font-mono text-sm text-obs-text-secondary/80 space-y-2">
            <p><span className="text-white font-bold">S(t)</span> — lo que el sistema realmente es</p>
            <p><span className="text-white font-bold">R(t)</span> — lo que se dice que es</p>
            <p><span className="text-white font-bold">D(t)</span> = |S(t) − R(t)| — la distancia entre ambos</p>
            <p><span className="text-white font-bold">V(t)</span> = dD/dt — la velocidad a la que crece esa distancia</p>
          </div>
          <p className="mt-5 text-sm text-obs-text-secondary/50 leading-relaxed">
            Cuando V(t) es positiva y acelerada, el sistema está acumulando tensión que no se libera gradualmente.
            Se libera de golpe. Siempre.
          </p>
        </div>

        {/* Three products */}
        <div className="mt-16">
          <p className="text-[9px] font-mono text-obs-text-secondary/30 uppercase tracking-wider mb-6">
            Tres productos · Un origen · Una pregunta
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://speaudit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-obs-card/30 border border-obs-border rounded-lg p-5 hover:border-obs-text-secondary/20 transition-all group"
            >
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-obs-blue transition-colors">
                SPE Audit
              </h3>
              <p className="text-[10px] text-obs-text-secondary/40 leading-relaxed">
                Integridad forense. Certifica cualquier archivo a un clic.
              </p>
            </a>

            <a
              href="https://spetrace.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-obs-card/30 border border-obs-border rounded-lg p-5 hover:border-obs-text-secondary/20 transition-all group"
            >
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-obs-blue transition-colors">
                SPE Trace
              </h3>
              <p className="text-[10px] text-obs-text-secondary/40 leading-relaxed">
                Realidad semántica para empresas. Mide la distancia entre narrativa y realidad.
              </p>
            </a>

            <Link
              href="/observatory"
              className="bg-obs-card/30 border border-obs-border rounded-lg p-5 hover:border-obs-text-secondary/20 transition-all group"
            >
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-obs-blue transition-colors">
                MCSH + Observatory
              </h3>
              <p className="text-[10px] text-obs-text-secondary/40 leading-relaxed">
                Marco teórico fundacional. Caso de estudio. Monitor en tiempo real.
              </p>
            </Link>
          </div>
        </div>

        {/* Why we haven't stopped */}
        <div className="mt-20 border-t border-obs-border pt-12">
          <h2 className="text-xl font-bold text-white mb-4">
            Por qué no paramos
          </h2>
          <p className="text-sm text-obs-text-secondary/50 leading-relaxed max-w-lg">
            No somos académicos que buscan validación empírica.
            Somos observadores que encontraron un patrón real
            y construyeron las herramientas para medirlo.
            Eso tiene consecuencias. Las estamos explorando.
          </p>
        </div>

        {/* Author */}
        <div className="mt-16 flex items-start gap-5 border-t border-obs-border pt-10">
          <div>
            <p className="text-sm font-semibold text-white">Rubén Abella</p>
            <p className="text-[10px] text-obs-text-secondary/40 mt-0.5 leading-relaxed">
              Investigación independiente en dinámica del significado,<br />
              auditoría de IA y fragilidad sistémica.
            </p>
            <div className="flex items-center gap-4 mt-3">
              <a
                href="https://www.linkedin.com/in/rub%C3%A9nabella/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-obs-blue hover:text-white transition-colors"
              >
                LinkedIn →
              </a>
              <a
                href="mailto:contact@semanticfieldscience.org"
                className="text-xs text-obs-text-secondary/40 hover:text-white transition-colors"
              >
                contact@semanticfieldscience.org
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-obs-border py-8 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <p className="text-[10px] text-obs-text-secondary/20 font-mono">
            © 2026 Semantic Field Science
          </p>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-[10px] text-obs-text-secondary/30 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/observatory" className="text-[10px] text-obs-text-secondary/30 hover:text-white transition-colors">
              Observatory
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
