import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Burbuja Sintética 2026: Caso de Estudio Completo · SFS Observatory',
  description:
    'Caso de estudio público sobre la burbuja sintética S1\'. Análisis cuantitativo del riesgo sistémico global, modelo Markov + Monte Carlo n=10.000.',
  alternates: {
    canonical: 'https://www.semanticfieldscience.org/observatory/casestudy',
  },
};

export default function CaseStudyPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <p className="text-obs-red font-mono text-sm tracking-[0.3em] uppercase mb-4">
          Caso de estudio
        </p>
        <h1 className="text-3xl md:text-5xl font-black mb-4">
          Burbuja Sintética (S1&apos;)
        </h1>
        <p className="text-lg text-obs-text-secondary mb-6 max-w-2xl">
          Caso de estudio público. Aplicación del Modelo del Campo Semántico Humano
          al riesgo sistémico global, febrero 2026.
        </p>
        <div className="flex items-center gap-4 text-xs font-mono text-obs-text-secondary/40 mb-16">
          <span>Autor: Rubén Abella</span>
          <span>·</span>
          <span>7 feb 2026</span>
          <span>·</span>
          <span>Semantic Field Science</span>
        </div>

        {/* Content */}
        <div className="space-y-16">
          {/* Executive summary */}
          <section>
            <h2 className="text-xl font-bold text-obs-text mb-4">
              Resumen ejecutivo
            </h2>
            <div className="bg-obs-card border border-obs-border rounded-xl p-6 space-y-4">
              <div className="bg-obs-bg-secondary rounded-lg p-4 font-mono text-sm space-y-2">
                <div className="flex items-center justify-between py-1">
                  <span className="text-obs-text-secondary">α (fragilidad)</span>
                  <span className="text-obs-red font-bold">0.776</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-obs-text-secondary">Estado</span>
                  <span className="text-obs-red font-bold">S1&apos; — Burbuja Sintética</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-obs-text-secondary">T_med (mediana hasta colapso)</span>
                  <span className="text-obs-red font-bold">3.1 meses</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-obs-text-secondary">P(S2+ en 12m)</span>
                  <span className="text-obs-red font-bold">72.7%</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-obs-text-secondary">P(S3+ en 12m)</span>
                  <span className="text-obs-text font-bold">50.1%</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-obs-text-secondary">Horizonte de convergencia</span>
                  <span className="text-obs-text font-bold">Mayo 2026</span>
                </div>
              </div>
              <p className="text-sm text-obs-text-secondary leading-relaxed">
                Existe un 72.7% de probabilidad de que el sistema financiero global entre en crisis sistémica (S2+) 
                en los próximos 12 meses, con una mediana de 3.1 meses y convergencia de múltiples señales en mayo 2026.
              </p>
            </div>
          </section>

          {/* The core thesis */}
          <section>
            <h2 className="text-xl font-bold text-obs-text mb-4">
              Tesis central
            </h2>
            <div className="bg-obs-card border border-obs-border rounded-xl p-6 space-y-4 text-sm text-obs-text-secondary leading-relaxed">
              <p>
                El sistema financiero global no está simplemente &quot;estresado&quot;. Está en un estado cualitativamente 
                diferente: <span className="text-obs-red font-semibold">S1&apos; (Burbuja Sintética)</span>. Este estado 
                se distingue del estrés convencional (S1) porque la fragilidad no es visible en los indicadores 
                estándar — está reprimida activamente por mecanismos de contención artificial.
              </p>
              <p>
                El VIX es artificialmente bajo (no porque no haya riesgo, sino porque la estructura del mercado de 
                opciones lo comprime). Las curvas de tipos no reflejan riesgo real porque están administradas. Los 
                spreads de crédito están comprimidos por compras directas e indirectas de bancos centrales.
              </p>
              <p>
                La diferencia entre &quot;estable&quot; y &quot;contenido artificialmente&quot; es la diferencia entre un lago tranquilo 
                y una presa a punto de reventar. Ambos parecen agua quieta. Pero la física es completamente diferente.
              </p>
            </div>
          </section>

          {/* Divergence explained */}
          <section>
            <h2 className="text-xl font-bold text-obs-text mb-4">
              La divergencia semántica
            </h2>
            <div className="bg-obs-card border border-obs-border rounded-xl p-6 space-y-4 text-sm text-obs-text-secondary leading-relaxed">
              <p>
                El concepto central del MCH aplicado a riesgo sistémico es la <strong className="text-obs-text">divergencia semántica D(t)</strong>: 
                la distancia entre la realidad estructural del sistema y la narrativa institucional sobre el sistema.
              </p>
              <div className="bg-obs-bg-secondary rounded-lg p-4 font-mono text-xs">
                <p>D(t) = |S(t) − R(t)|</p>
                <p className="text-obs-text-secondary/40 mt-1">donde S(t) = realidad estructural, R(t) = narrativa institucional</p>
              </div>
              <p>
                Cuando D(t) es pequeña, las correcciones son graduales. Cuando D(t) es grande, las correcciones 
                son discontinuas — saltos, no transiciones suaves. El VIX bajo en S1&apos; no indica ausencia de 
                riesgo: indica que la divergencia se ha acumulado hasta un punto donde la corrección será 
                necesariamente abrupta.
              </p>
              <p>
                Actualmente <span className="text-obs-red font-mono font-bold">D(t) = 0.78</span>, con velocidad 
                positiva y aceleración positiva. El sistema está divergiendo y la velocidad de divergencia aumenta.
              </p>
            </div>
          </section>

          {/* Monte Carlo results */}
          <section>
            <h2 className="text-xl font-bold text-obs-text mb-4">
              Resultados Monte Carlo
            </h2>
            <div className="bg-obs-card border border-obs-border rounded-xl p-6 space-y-4 text-sm text-obs-text-secondary leading-relaxed">
              <p>
                n=10.000 simulaciones con la matriz de transición calibrada a α=0.776. Los resultados muestran 
                una distribución bimodal: el sistema tiende a transitar hacia S2+ relativamente rápido 
                (mediana 3.1 meses) o a mantenerse en S1&apos; durante un periodo extendido.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full font-mono text-xs">
                  <thead>
                    <tr className="text-obs-text-secondary/50 border-b border-obs-border">
                      <th className="py-2 px-3 text-left">Horizonte</th>
                      <th className="py-2 px-3 text-right">P(S2+)</th>
                      <th className="py-2 px-3 text-right">P(S3+)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { h: '3 meses', s2: '73.9%', s3: '52.8%' },
                      { h: '6 meses', s2: '65.2%', s3: '49.5%' },
                      { h: '9 meses', s2: '62.5%', s3: '48.7%' },
                      { h: '12 meses', s2: '62.7%', s3: '50.1%' },
                      { h: '18 meses', s2: '65.4%', s3: '54.4%' },
                      { h: '24 meses', s2: '68.8%', s3: '59.1%' },
                    ].map((row) => (
                      <tr key={row.h} className="border-b border-obs-border/30">
                        <td className="py-2 px-3 text-obs-text-secondary">{row.h}</td>
                        <td className="py-2 px-3 text-right text-obs-red font-bold">{row.s2}</td>
                        <td className="py-2 px-3 text-right text-obs-blue font-bold">{row.s3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* What this means */}
          <section>
            <h2 className="text-xl font-bold text-obs-text mb-4">
              Implicaciones
            </h2>
            <div className="bg-obs-card border border-obs-border rounded-xl p-6 space-y-4 text-sm text-obs-text-secondary leading-relaxed">
              <p>
                Este análisis no predice el futuro. Cuantifica la fragilidad del presente. La diferencia importa.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-obs-bg-secondary rounded-lg p-4">
                  <h3 className="text-xs font-mono text-obs-red uppercase tracking-wider mb-2">Lo que SÍ dice</h3>
                  <ul className="space-y-2 text-xs text-obs-text-secondary/70">
                    <li>→ El sistema acumula fragilidad cuantificable</li>
                    <li>→ Los mecanismos de contención están en máximos históricos</li>
                    <li>→ La probabilidad de crisis en 12 meses es {'>'} 70%</li>
                    <li>→ Múltiples señales convergen en mayo 2026</li>
                    <li>→ Condiciones para PNR parcialmente alcanzadas</li>
                  </ul>
                </div>
                <div className="bg-obs-bg-secondary rounded-lg p-4">
                  <h3 className="text-xs font-mono text-obs-blue uppercase tracking-wider mb-2">Lo que NO dice</h3>
                  <ul className="space-y-2 text-xs text-obs-text-secondary/70">
                    <li>→ No predice la fecha exacta de la crisis</li>
                    <li>→ No identifica el trigger específico</li>
                    <li>→ No prescribe acciones financieras</li>
                    <li>→ No es consejo de inversión</li>
                    <li>→ No excluye la posibilidad de mitigación</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="text-center">
            <div className="bg-obs-red/5 border border-obs-red/20 rounded-xl px-6 py-5">
              <p className="text-sm text-obs-text-secondary leading-relaxed">
                <span className="text-obs-red font-bold">Caso de estudio público.</span>{' '}
                No es consejo financiero ni prescripción de acción. Este documento puede ser compartido, 
                citado y debatido libremente. El modelo presenta condiciones verificables de 
                invalidación documentadas en la{' '}
                <a href="/observatory/methodology" className="text-obs-blue hover:text-obs-text transition-colors underline">
                  sección de metodología
                </a>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
