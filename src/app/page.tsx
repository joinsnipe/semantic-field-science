import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'El significado se mueve. Ahora se puede medir. · Semantic Field Science',
  description:
    'Modelo del Campo Semántico Humano (MCSH). Un marco para observar la distancia entre lo que se dice y lo que es. Entre la narrativa y la realidad. Entre el sistema y su verdad.',
  keywords: [
    'campo semántico humano',
    'MCSH',
    'semantic field model',
    'divergencia semántica',
    'fragilidad sistémica',
    'SPE Audit',
    'SPE Trace',
    'Rubén Abella',
  ],
  openGraph: {
    title: 'El significado se mueve. Ahora se puede medir.',
    description: 'Modelo del Campo Semántico Humano (MCSH). Marco conceptual fundacional.',
    type: 'website',
    url: 'https://www.semanticfieldscience.org',
    siteName: 'Semantic Field Science',
  },
  alternates: {
    canonical: 'https://www.semanticfieldscience.org',
  },
};

/* ─── Data ─────────────────────────────────────────────────────── */
const concepts = [
  {
    title: 'Campo semántico',
    text: 'El espacio donde vive, se organiza y se tensiona el significado. No es estático: tiene dirección y velocidad.',
  },
  {
    title: 'Dinámica semántica',
    text: 'Cómo el significado se desplaza, se reorganiza o se estabiliza. El cambio es la norma, no la excepción.',
  },
  {
    title: 'Tiempo semántico',
    text: 'Cómo una historia se vive, se recuerda o se proyecta. El tiempo del significado no es el tiempo del reloj.',
  },
  {
    title: 'Tensión narrativa',
    text: 'Las fuerzas que impulsan la evolución del significado. Cuando la tensión supera un umbral, el sistema cambia de estado.',
  },
  {
    title: 'Autoridad semántica',
    text: 'La capacidad de influir en lo que algo significa para un grupo. Quien controla el significado, controla la percepción de la realidad.',
  },
  {
    title: 'Interacción humano–IA',
    text: 'Cómo los sistemas técnicos amplifican, reflejan o distorsionan campos de significado humanos. Los LLMs son el caso más relevante y menos comprendido.',
  },
];

const ecosystemCards = [
  {
    badge: '🔴 LIVE · Feb 2026',
    badgeStyle: 'bg-[#0a0a0f] text-[#e63946] border-[#e63946]/30',
    title: 'Systemic Fragility Observatory',
    text: 'Aplicación del MCSH al riesgo sistémico global. Modelo Markov 7 estados + Monte Carlo n=10.000. 10 indicadores no convencionales. Monitor público con ventana crítica mayo 2026.',
    cta: 'Acceder al Observatory →',
    href: '/observatory',
    external: false,
    dark: true,
  },
  {
    badge: 'Patente en curso · Compliance IA',
    badgeStyle: 'bg-[#6d4aff]/8 text-[#6d4aff] border-[#6d4aff]/20',
    title: 'SPE Audit',
    text: 'Motor de integridad forense que certifica la integridad temporal de cualquier archivo — outputs de IA, documentos corporativos, contratos, registros de compliance — mediante Cápsulas Forenses criptográficas. Certificación de integridad a un solo clic para cualquier empresa.',
    cta: 'Ver SPE Audit →',
    href: 'https://speaudit.com',
    external: true,
    dark: false,
  },
  {
    badge: 'Patente en curso · Empresas',
    badgeStyle: 'bg-[#6d4aff]/8 text-[#6d4aff] border-[#6d4aff]/20',
    title: 'SPE Trace',
    text: 'Mide la distancia entre lo que una empresa dice que es y lo que el mercado entiende que es. S(t) vs R(t). D(t) = |S(t) − R(t)|. Realidad semántica para cualquier organización.',
    cta: 'Ver SPE Trace →',
    href: 'https://spetrace.com',
    external: true,
    dark: false,
  },
];

const faqItems = [
  {
    q: '¿Qué es el MCSH?',
    a: 'Un marco conceptual para observar la dinámica del significado: cómo se genera, se desplaza y se tensiona en contextos narrativos, sociales y técnicos.',
  },
  {
    q: '¿El documento presenta aplicaciones o metodologías?',
    a: 'No. El texto publicado es estrictamente fundacional. Delimita el marco conceptual: explícita sus alcances y límites, sin derivadas operativas.',
  },
  {
    q: '¿Dónde está la declaración pública del autor?',
    a: 'En la página About y en la presentación publicada en LinkedIn.',
  },
  {
    q: '¿Qué es el Systemic Fragility Observatory?',
    a: 'Es la aplicación del MCSH al riesgo sistémico global. Un monitor público con modelo Markov, Monte Carlo y 10 indicadores no convencionales que ningún dashboard institucional publica. Acceso gratuito.',
  },
  {
    q: '¿Qué son SPE Audit y SPE Trace?',
    a: 'Son las dos aplicaciones comerciales del MCSH. SPE Audit certifica la integridad temporal de cualquier archivo — outputs de IA, documentos corporativos, contratos — a un solo clic (speaudit.com). SPE Trace mide la realidad semántica de organizaciones (spetrace.com).',
  },
];

/* ─── Component ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a2e]">
      {/* ━━━ NAV ━━━ */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-bold text-[#1a1a2e]">SFS</Link>
            <span className="text-[10px] text-gray-400 hidden sm:inline">
              Archivo público · Texto fundacional · Autoría: Rubén Abella
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/observatory" className="text-xs text-gray-500 hover:text-[#1a1a2e] transition-colors">
              Observatory
            </Link>
            <Link href="/about" className="text-xs text-gray-500 hover:text-[#1a1a2e] transition-colors">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* ━━━ HERO ━━━ */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8f6ff] to-[#f0f4ff] -z-10" />
        <div className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full bg-[#6d4aff]/[0.03] blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-[#e63946]/[0.03] blur-3xl -z-10" />

        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black leading-[1.08] tracking-tight text-[#1a1a2e] mb-4">
            El significado se mueve.
            <br />
            <span className="bg-gradient-to-r from-[#6d4aff] to-[#1a1a2e] bg-clip-text text-transparent">Ahora se puede medir.</span>
          </h1>
          <p className="text-sm font-mono text-gray-400 mb-6 tracking-wider">
            Modelo del Campo Semántico Humano (MCSH)
          </p>
          <p className="text-xl text-gray-500 leading-relaxed max-w-xl mb-10">
            Un marco para observar la distancia entre lo que se dice
            y lo que es. Entre la narrativa y la realidad.
            Entre el sistema y su verdad.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#documentos"
              className="px-6 py-3.5 bg-[#1a1a2e] text-white text-base font-medium rounded-lg hover:bg-[#2a2a4e] transition-all hover:shadow-lg hover:shadow-[#1a1a2e]/10 hover:-translate-y-0.5"
            >
              Leer el documento fundacional
            </a>
            <a
              href="#registro"
              className="px-6 py-3.5 border border-gray-200 text-base text-gray-600 rounded-lg hover:border-[#6d4aff]/40 hover:text-[#6d4aff] transition-all"
            >
              Recibir nuevas publicaciones
            </a>
          </div>

          {/* Observatory teaser */}
          <Link
            href="/observatory"
            className="group flex items-center gap-4 px-5 py-4 bg-[#0a0a0f] rounded-xl border border-[#e63946]/20 hover:border-[#e63946]/40 transition-all max-w-lg hover:shadow-xl hover:shadow-[#e63946]/5"
          >
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#e63946] animate-pulse" />
              <span className="text-[10px] font-mono text-[#e63946] font-bold tracking-wider">LIVE</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#f1faee]">Systemic Fragility Observatory</p>
              <p className="text-xs font-mono text-[#a8dadc]/60 mt-0.5">
                α = 0.776 · Estado S1′ · T_med = 3.1m
              </p>
            </div>
            <span className="text-xs text-[#a8dadc]/40 group-hover:text-[#f1faee] transition-colors flex-shrink-0">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* ━━━ ¿QUÉ ES EL MCSH? ━━━ */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">¿Qué es el MCSH?</h2>
          <div className="space-y-5 text-lg text-gray-500 leading-relaxed">
            <p>
              El MCSH es un marco conceptual que observa cómo el significado
              se genera, se transforma y se sostiene a lo largo del tiempo.
              No describe palabras aisladas: describe <strong className="text-[#1a1a2e]">campos de significado</strong>,
              su dinámica, sus tensiones y su dirección.
            </p>
            <p>
              Propone una métrica para algo que siempre existió pero nunca
              se había formalizado: <strong className="text-[#1a1a2e]">la distancia entre lo que un sistema
              dice que es y lo que realmente es</strong>.
            </p>
            <p className="text-base text-gray-400">
              Este sitio existe como referencia estable del texto fundacional
              y de sus notas públicas asociadas.
            </p>
          </div>
        </div>
      </section>

      {/* ━━━ ¿POR QUÉ AHORA? ━━━ */}
      <section className="py-20 px-6 bg-gray-50/60">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">¿Por qué ahora?</h2>
          <div className="space-y-5 text-lg text-gray-500 leading-relaxed">
            <p>
              Los modelos de lenguaje se han convertido en estructuradores
              de verdad. Gobiernos, mercados e instituciones operan sobre
              narrativas que no siempre coinciden con la realidad estructural
              subyacente.
            </p>
            <p>
              El MCSH propone medir esa distancia. Con rigor. Con matemática.
              Sin depender de lo que el sistema dice sobre sí mismo.
            </p>
            <p className="font-medium text-lg text-[#1a1a2e]">
              Porque la distancia entre la narrativa y la realidad no es
              un problema filosófico. Es un problema técnico con solución.
            </p>
          </div>
        </div>
      </section>

      {/* ━━━ FUNDAMENTOS CONCEPTUALES ━━━ */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-3 text-center">
            Fundamentos conceptuales
          </h2>
          <p className="text-base text-gray-400 text-center mb-10 max-w-lg mx-auto">
            Los seis ejes que estructuran el modelo
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {concepts.map((c, i) => (
              <div
                key={c.title}
                className="group relative border border-gray-100 rounded-xl p-6 hover:border-[#6d4aff]/30 hover:shadow-md hover:shadow-[#6d4aff]/5 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 text-[40px] font-black text-gray-100/60 group-hover:text-[#6d4aff]/10 transition-colors leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ ÁMBITOS DE LECTURA ━━━ */}
      <section className="py-20 px-6 bg-gray-50/60">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">
            Ámbitos de lectura
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-4">
            El MCSH puede leerse en múltiples escalas: desde la
            narrativa personal hasta el colapso de sistemas complejos.
            Es un marco para cualquiera que necesite medir la distancia
            entre lo que algo dice que es y lo que realmente es.
          </p>
          <p className="text-base text-gray-400 italic">
            Las aplicaciones operativas viven en otro lugar. Aquí vive el fundamento.
          </p>
        </div>
      </section>

      {/* ━━━ EL MODELO EN ACCIÓN ━━━ */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-2 text-center">
            El modelo en acción
          </h2>
          <p className="text-base text-gray-400 text-center mb-10 max-w-md mx-auto">
            Del marco teórico a aplicaciones que miden lo que nadie había medido antes.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {ecosystemCards.map((card) => {
              const cardClasses = `
                group rounded-xl p-6 border transition-all block
                ${card.dark
                  ? 'bg-[#0a0a0f] border-[#1c1c28] hover:border-[#333]'
                  : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-sm'
                }
              `;

              const cardContent = (
                <>
                  {/* Badge */}
                  <span className={`
                    inline-flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-wider
                    px-2 py-0.5 rounded border mb-4
                    ${card.badgeStyle}
                  `}>
                    {card.badge}
                  </span>

                  <h3 className={`text-lg font-bold mb-2 ${
                    card.dark ? 'text-[#f1faee]' : 'text-[#1a1a2e]'
                  }`}>
                    {card.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-4 ${
                    card.dark ? 'text-[#a8dadc]/60' : 'text-gray-500'
                  }`}>
                    {card.text}
                  </p>

                  <span className={`text-sm font-medium group-hover:underline ${
                    card.dark ? 'text-[#a8dadc]' : 'text-[#6d4aff]'
                  }`}>
                    {card.cta}
                  </span>
                </>
              );

              return card.external ? (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClasses}
                >
                  {cardContent}
                </a>
              ) : (
                <Link
                  key={card.title}
                  href={card.href}
                  className={cardClasses}
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ NOTA FUNDACIONAL ━━━ */}
      <section className="py-20 px-6 bg-gray-50/60">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">
            Nota fundacional
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            <strong className="text-[#1a1a2e]">El significado se mueve.</strong>{' '}
            Se expande, se contrae, se tensa, se bifurca.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed mt-3">
            El MCSH nace para observar ese movimiento con rigor
            conceptual y sensibilidad humana, manteniendo abierta
            la frontera entre <em>marco fundacional</em> y{' '}
            <em>trabajo operativo posterior</em>.
          </p>
        </div>
      </section>

      {/* ━━━ DOCUMENTOS ━━━ */}
      <section id="documentos" className="py-20 px-6 border-t border-gray-100 scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-3">Documentos</h2>
          <p className="text-base text-gray-400 mb-10">
            Textos públicos del MCSH. El documento fundacional se publica sin aplicaciones ni promesas: como referencia estable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* Foundational doc */}
            <a
              href="/docs/Documento_Fundacional_MCSH.pdf"
              download
              className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-100 hover:border-[#6d4aff]/30 hover:shadow-lg hover:shadow-[#6d4aff]/5 transition-all duration-300"
            >
              <span className="text-3xl">📄</span>
              <span className="text-base font-semibold text-[#1a1a2e] group-hover:text-[#6d4aff] transition-colors">Documento Fundacional</span>
              <span className="text-xs text-gray-400">MCSH v1.0 · PDF · 316 KB</span>
            </a>
            {/* Case study PDF */}
            <a
              href="/docs/Burbuja_Sintetica_Caso_Estudio.pdf"
              download
              className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-[#e63946]/10 bg-[#e63946]/[0.02] hover:border-[#e63946]/30 hover:shadow-lg hover:shadow-[#e63946]/5 transition-all duration-300"
            >
              <span className="text-3xl">📊</span>
              <span className="text-base font-semibold text-[#1a1a2e] group-hover:text-[#e63946] transition-colors">Caso de Estudio</span>
              <span className="text-xs text-gray-400">Burbuja Sintética · Feb 2026 · PDF · 558 KB</span>
            </a>
          </div>
          <p className="text-xs text-gray-300 mt-4">
            También disponible: <a href="/docs/Burbuja_Sintetica_Caso_Estudio.md" download className="underline hover:text-gray-500 transition-colors">versión Markdown</a>
          </p>
        </div>
      </section>

      {/* ━━━ CÓMO EMPEZÓ TODO ━━━ */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f7ff] to-white -z-10" />
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8 text-center">Cómo empezó todo</h2>

          <div className="relative pl-8 border-l-2 border-[#6d4aff]/20 space-y-8">
            {/* Dot 1 */}
            <div className="relative">
              <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-[#6d4aff]/20 border-2 border-[#6d4aff]" />
              <p className="text-xs font-mono text-[#6d4aff] mb-1">Marzo 2024</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nace <strong className="text-[#1a1a2e]">Snipe</strong> — un marketplace de subastas.
                Intentando sobrevivir, empezamos a medir cómo nos posicionaban
                los modelos de lenguaje frente a la competencia.
              </p>
            </div>

            {/* Dot 2 */}
            <div className="relative">
              <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-[#6d4aff]/20 border-2 border-[#6d4aff]" />
              <p className="text-xs font-mono text-[#6d4aff] mb-1">Septiembre 2025</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Snipe sale al mercado. Para validar la propuesta del MCSH
                hacemos un <strong className="text-[#1a1a2e]">estudio semántico y entrópico</strong> de
                más de 700 empresas — mapas de calor, k-cluster, análisis de singularidad.
                Resultado: <strong className="text-[#1a1a2e]">#17 entre las más singulares</strong>.
                Posicionados por delante de grandes plataformas. Con cero inversión.
                Pero el mercado no compraba.
              </p>
            </div>

            {/* Dot 3 */}
            <div className="relative">
              <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-[#e63946]/20 border-2 border-[#e63946]" />
              <p className="text-xs font-mono text-[#e63946] mb-1">La anomalía</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Algo no cuadraba. Había dos verdades operando en paralelo y no coincidían.
              </p>
            </div>
          </div>

          {/* Blockquote */}
          <blockquote className="border-l-4 border-[#6d4aff] pl-6 py-4 my-10 bg-[#6d4aff]/[0.03] rounded-r-lg">
            <p className="text-lg text-[#1a1a2e] font-medium italic leading-relaxed">
              ¿Por qué existe esa distancia? ¿Quién la mide?
              ¿Quién la certifica? Nadie.
            </p>
          </blockquote>

          <p className="text-base text-gray-500 leading-relaxed mb-8 text-center">
            De esa pregunta nació todo lo demás.
          </p>

          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-base text-[#6d4aff] font-medium hover:underline"
            >
              Leer la historia completa →
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ AUTORÍA ━━━ */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6 text-center">Autoría</h2>
          <div className="max-w-lg mx-auto text-center">
            <p className="text-xl font-semibold text-[#1a1a2e] mb-1">Rubén Abella</p>
            <p className="text-base text-gray-500 leading-relaxed mb-3">
              Investigación independiente en dinámica del significado,
              auditoría de IA y fragilidad sistémica.
            </p>
            <p className="text-base text-gray-400 leading-relaxed mb-5">
              Emprendedor. Observador. Autor del MCSH.
              Lo que empezó como una anomalía en un marketplace
              acabó siendo un framework para medir la distancia
              entre narrativa y realidad en cualquier sistema.
            </p>
            <div className="flex items-center justify-center gap-5">
              <a
                href="https://www.linkedin.com/in/rub%C3%A9nabella/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#6d4aff] hover:underline"
              >
                LinkedIn
              </a>
              <span className="text-gray-300">·</span>
              <a
                href="https://www.mentorday.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-[#1a1a2e] transition-colors"
              >
                MentorDay
              </a>
              <span className="text-gray-300">·</span>
              <a
                href="mailto:contact@semanticfieldscience.org"
                className="text-sm text-gray-500 hover:text-[#1a1a2e] transition-colors"
              >
                contact@semanticfieldscience.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ FORMULARIO ━━━ */}
      <section id="registro" className="py-20 px-6 bg-gray-50/60 scroll-mt-20">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-3">
            Recibir nuevas publicaciones
          </h2>
          <p className="text-base text-gray-400 mb-8">
            Registro para recibir actualizaciones del archivo público (nuevas notas, revisiones y documentos).
          </p>
          <form className="space-y-3 text-left" action="#">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#1a1a2e] placeholder-gray-400 focus:border-[#6d4aff] focus:outline-none focus:ring-1 focus:ring-[#6d4aff]/20 transition-colors bg-white"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#1a1a2e] placeholder-gray-400 focus:border-[#6d4aff] focus:outline-none focus:ring-1 focus:ring-[#6d4aff]/20 transition-colors bg-white"
            />
            <input
              type="text"
              placeholder="País"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#1a1a2e] placeholder-gray-400 focus:border-[#6d4aff] focus:outline-none focus:ring-1 focus:ring-[#6d4aff]/20 transition-colors bg-white"
            />
            <select
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-400 focus:border-[#6d4aff] focus:outline-none focus:ring-1 focus:ring-[#6d4aff]/20 transition-colors bg-white"
            >
              <option value="">Área de interés</option>
              <option value="mcsh">MCSH – Marco teórico</option>
              <option value="observatory">Observatory – Fragilidad sistémica</option>
              <option value="spe">SPE – Auditoría y trazabilidad IA</option>
              <option value="all">Todo</option>
            </select>
            <label className="flex items-start gap-2 pt-1">
              <input type="checkbox" className="mt-1 accent-[#6d4aff]" />
              <span className="text-[10px] text-gray-400">
                Acepto la{' '}
                <a href="#" className="text-[#6d4aff] hover:underline">Política de Privacidad</a>
              </span>
            </label>
            <button
              type="submit"
              className="w-full py-2.5 bg-[#1a1a2e] text-white text-sm font-medium rounded-lg hover:bg-[#2a2a4e] transition-colors mt-2"
            >
              Registro
            </button>
          </form>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <details
                key={idx}
                className="group border border-gray-100 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-[#1a1a2e]">{item.q}</span>
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-6 pb-4 pt-0">
                  <p className="text-base text-gray-500 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="border-t border-gray-100 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="/observatory" className="hover:text-[#1a1a2e] transition-colors">Observatory</Link>
            <a href="https://speaudit.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a2e] transition-colors">SPE Audit ↗</a>
            <a href="https://spetrace.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a2e] transition-colors">SPE Trace ↗</a>
            <Link href="/about" className="hover:text-[#1a1a2e] transition-colors">About</Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 text-[10px] text-gray-400">
            <a href="mailto:contact@semanticfieldscience.org" className="hover:text-[#1a1a2e] transition-colors">
              contact@semanticfieldscience.org
            </a>
            <span className="hidden sm:inline">·</span>
            <span>© 2026 Semantic Field Science · Rubén Abella</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
