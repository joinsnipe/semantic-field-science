import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metodología: MCH + Markov para Riesgo Sistémico · SFS',
  description:
    'Framework teórico completo. Estado S1′ (burbuja sintética), función logística de calibración, protocolo Comparator y condiciones de invalidación del modelo.',
  alternates: {
    canonical: 'https://www.semanticfieldscience.org/observatory/methodology',
  },
};

export default function MethodologyPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <p className="text-obs-red font-mono text-sm tracking-[0.3em] uppercase mb-4">
          Metodología
        </p>
        <h1 className="text-3xl md:text-5xl font-black mb-4">
          Modelo del Campo Semántico Humano + Markov
        </h1>
        <p className="text-lg text-obs-text-secondary mb-16 max-w-2xl">
          Tres capas de análisis integradas para medir la fragilidad sistémica global.
        </p>

        {/* Content sections */}
        <div className="prose-observatory space-y-16">
          {/* Layer 1 */}
          <section>
            <h2 className="text-xl font-bold text-obs-text mb-4 flex items-center gap-3">
              <span className="text-obs-red font-mono text-sm">CAPA 1</span>
              Framework MCH
            </h2>
            <div className="bg-obs-card border border-obs-border rounded-xl p-6 space-y-4 text-sm text-obs-text-secondary leading-relaxed">
              <p>
                El MCH parte de una observación estructural: existe una distancia medible entre lo que el sistema realmente es y lo que se dice que es. Esa distancia no es estática. Crece, se acumula, y cuando supera cierto umbral produce correcciones no graduales sino discontinuas.
              </p>
              <div className="bg-obs-bg-secondary rounded-lg p-4 font-mono text-xs space-y-2">
                <p><span className="text-obs-blue">S(t)</span> — Realidad estructural</p>
                <p><span className="text-obs-blue">R(t)</span> — Realidad humana/narrativa</p>
                <p><span className="text-obs-red">D(t)</span> = |S(t) − R(t)| — Divergencia semántica</p>
                <p><span className="text-obs-red">V(t)</span> = dD/dt — Velocidad de divergencia</p>
                <p><span className="text-obs-red">A(t)</span> = d²D/dt² — Aceleración</p>
              </div>
              <p>
                Cuando D(t) crece, el sistema se vuelve frágil porque la corrección deja de ser gradual y se convierte en salto. El MCH introduce además el concepto de umbral de no-retorno: cuando el sistema cruza una fase, volver exige energía institucional irreal.
              </p>
            </div>
          </section>

          {/* Layer 2 */}
          <section>
            <h2 className="text-xl font-bold text-obs-text mb-4 flex items-center gap-3">
              <span className="text-obs-red font-mono text-sm">CAPA 2</span>
              Modelo cuantitativo Markov + Monte Carlo
            </h2>
            <div className="bg-obs-card border border-obs-border rounded-xl p-6 space-y-4 text-sm text-obs-text-secondary leading-relaxed">
              <p>
                Traduce la fragilidad en probabilidades de transición entre 7 estados sistémicos S0…S5, con simulación repetida (n=10.000) para obtener distribución de tiempos hasta cada estado.
              </p>
              <h3 className="text-obs-text font-semibold mt-6">Los 7 estados</h3>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-start gap-3 py-2 border-b border-obs-border">
                  <span className="text-obs-text-secondary/40 w-8">S0</span>
                  <div>
                    <span className="text-obs-text">Estabilidad funcional</span>
                    <span className="text-obs-text-secondary/40 ml-2">— VIX {'<'}15, sistema autónomo</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-2 border-b border-obs-border">
                  <span className="text-obs-text-secondary/40 w-8">S1</span>
                  <div>
                    <span className="text-obs-text">Estrés gestionable</span>
                    <span className="text-obs-text-secondary/40 ml-2">— VIX 15-25, intervenciones puntuales</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-2 border-b border-obs-border bg-obs-red/5 -mx-2 px-2 rounded">
                  <span className="text-obs-red w-8 font-bold">S1&apos;</span>
                  <div>
                    <span className="text-obs-red font-bold">Burbuja Sintética</span>
                    <span className="text-obs-text-secondary/60 ml-2">— ESTADO ACTUAL. Fragilidad explosiva bajo contención artificial</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-2 border-b border-obs-border">
                  <span className="text-obs-text-secondary/40 w-8">S2</span>
                  <div>
                    <span className="text-obs-text">Crisis sistémica</span>
                    <span className="text-obs-text-secondary/40 ml-2">— Fallos múltiples, contagio activo, VIX {'>'}30</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-2 border-b border-obs-border">
                  <span className="text-obs-text-secondary/40 w-8">S3</span>
                  <div>
                    <span className="text-obs-text">Colapso visible</span>
                    <span className="text-obs-text-secondary/40 ml-2">— Semi-absorbente. Freezing mercados</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-2 border-b border-obs-border">
                  <span className="text-obs-text-secondary/40 w-8">S4</span>
                  <div>
                    <span className="text-obs-text">Reset / Reconfiguración</span>
                    <span className="text-obs-text-secondary/40 ml-2">— Post-colapso, nuevas reglas</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-2">
                  <span className="text-obs-text-secondary/40 w-8">S5</span>
                  <div>
                    <span className="text-obs-text">Ruptura total</span>
                    <span className="text-obs-text-secondary/40 ml-2">— Absorbente. P(salida) ≈ 0</span>
                  </div>
                </div>
              </div>

              <h3 className="text-obs-text font-semibold mt-6">Calibración del parámetro α</h3>
              <div className="bg-obs-bg-secondary rounded-lg p-4 font-mono text-xs">
                <p className="text-obs-text-secondary mb-2">Función de mapeo logístico:</p>
                <p className="text-obs-text">α = 1 / (1 + e<sup>-k·(Ī - θ)</sup>)</p>
                <p className="text-obs-text-secondary/50 mt-2">θ = 0.50 (umbral neutral) · k = 5.0 (sensibilidad)</p>
                <p className="text-obs-text-secondary/50">Para Ī = 0.748 → α = <span className="text-obs-red">0.776</span></p>
              </div>
            </div>
          </section>

          {/* Layer 3 */}
          <section>
            <h2 className="text-xl font-bold text-obs-text mb-4 flex items-center gap-3">
              <span className="text-obs-red font-mono text-sm">CAPA 3</span>
              Manifestaciones observables
            </h2>
            <div className="bg-obs-card border border-obs-border rounded-xl p-6 space-y-4 text-sm text-obs-text-secondary leading-relaxed">
              <p>
                Micro-fisuras del núcleo global (EEUU) más confirmación periférica (España, Francia, Italia) como validación empírica del estado sistémico diagnosticado.
              </p>
              <p>
                Si el diagnóstico de S1&apos; es correcto, sus consecuencias deben ser visibles en economías domésticas de la zona euro. Y lo son.
              </p>
            </div>
          </section>

          {/* Sensitivity analysis */}
          <section>
            <h2 className="text-xl font-bold text-obs-text mb-4">
              Análisis de sensibilidad paramétrica
            </h2>
            <div className="bg-obs-card border border-obs-border rounded-xl p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-mono">
                  <thead>
                    <tr className="text-obs-text-secondary/50 text-xs border-b border-obs-border">
                      <th className="py-3 px-2 text-left">Escenario</th>
                      <th className="py-3 px-2 text-left">α</th>
                      <th className="py-3 px-2 text-left">T_med</th>
                      <th className="py-3 px-2 text-left">P(S3+ 12m)</th>
                    </tr>
                  </thead>
                  <tbody className="text-obs-text-secondary">
                    <tr className="border-b border-obs-border/50">
                      <td className="py-2.5 px-2">Optimista</td>
                      <td className="py-2.5 px-2">0.55</td>
                      <td className="py-2.5 px-2">~8m</td>
                      <td className="py-2.5 px-2">~41%</td>
                    </tr>
                    <tr className="border-b border-obs-border/50">
                      <td className="py-2.5 px-2">Conservador</td>
                      <td className="py-2.5 px-2">0.65</td>
                      <td className="py-2.5 px-2">~5m</td>
                      <td className="py-2.5 px-2">~57%</td>
                    </tr>
                    <tr className="border-b border-obs-border/50 bg-obs-red/5">
                      <td className="py-2.5 px-2 text-obs-red font-bold">Base</td>
                      <td className="py-2.5 px-2 text-obs-red font-bold">0.75</td>
                      <td className="py-2.5 px-2 text-obs-red font-bold">~3m</td>
                      <td className="py-2.5 px-2 text-obs-red font-bold">72.7%</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-2">Pesimista</td>
                      <td className="py-2.5 px-2">0.85</td>
                      <td className="py-2.5 px-2">{'<'}2m</td>
                      <td className="py-2.5 px-2">~88%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Invalidation */}
          <section>
            <h2 className="text-xl font-bold text-obs-text mb-4">
              Qué invalidaría el modelo
            </h2>
            <div className="bg-obs-card border border-obs-border rounded-xl p-6 space-y-3 text-sm text-obs-text-secondary leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="text-obs-blue font-mono text-xs mt-1">01</span>
                <p>O(t) cae por debajo de 0.60 durante 3 meses consecutivos</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-obs-blue font-mono text-xs mt-1">02</span>
                <p>El mercado de repo opera autónomamente sin backstop 60 días</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-obs-blue font-mono text-xs mt-1">03</span>
                <p>Correlaciones cross-asset vuelven a régimen histórico (PC1 {'<'}50%)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-obs-blue font-mono text-xs mt-1">04</span>
                <p>Maturity wall se reduce por debajo de $1.5T por extensiones</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-obs-blue font-mono text-xs mt-1">05</span>
                <p>Las 3 micro-fisuras críticas muestran reversión simultánea sostenida</p>
              </div>
            </div>
          </section>

          {/* Confidence levels */}
          <section>
            <h2 className="text-xl font-bold text-obs-text mb-4">
              Nivel de confianza
            </h2>
            <div className="bg-obs-card border border-obs-border rounded-xl p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-obs-text-secondary/50 text-xs font-mono border-b border-obs-border">
                      <th className="py-3 px-2 text-left">Dimensión</th>
                      <th className="py-3 px-2 text-left">Confianza</th>
                    </tr>
                  </thead>
                  <tbody className="text-obs-text-secondary">
                    <tr className="border-b border-obs-border/50">
                      <td className="py-2.5 px-2">Dirección del riesgo</td>
                      <td className="py-2.5 px-2"><span className="text-obs-red font-bold font-mono">ALTA</span></td>
                    </tr>
                    <tr className="border-b border-obs-border/50">
                      <td className="py-2.5 px-2">Magnitud ({'>'}70% en 12-18m)</td>
                      <td className="py-2.5 px-2"><span className="text-obs-red font-bold font-mono">ALTA</span></td>
                    </tr>
                    <tr className="border-b border-obs-border/50">
                      <td className="py-2.5 px-2">Timing (Q2-Q4 2026)</td>
                      <td className="py-2.5 px-2"><span className="text-[#f4a261] font-bold font-mono">MEDIA</span></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-2">Trigger específico</td>
                      <td className="py-2.5 px-2"><span className="text-obs-text-secondary/50 font-bold font-mono">BAJA</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-obs-text-secondary/40 font-mono">
                Confianza global: 70-75%
              </p>
            </div>
          </section>

          {/* References */}
          <section>
            <h2 className="text-xl font-bold text-obs-text mb-4">
              Referencias académicas
            </h2>
            <div className="bg-obs-card border border-obs-border rounded-xl p-6 text-xs text-obs-text-secondary/50 space-y-2 leading-relaxed">
              <p>Acemoglu, D., Ozdaglar, A., & Tahbaz-Salehi, A. (2015). Systemic Risk and Stability in Financial Networks. <em>American Economic Review</em>, 105(2).</p>
              <p>Brunnermeier, M. K., & Pedersen, L. H. (2009). Market Liquidity and Funding Liquidity. <em>Review of Financial Studies</em>, 22(6).</p>
              <p>Haldane, A. G., & May, R. M. (2011). Systemic Risk in Banking Ecosystems. <em>Nature</em>, 469(7330).</p>
              <p>Scheffer, M., et al. (2009). Early-Warning Signals for Critical Transitions. <em>Nature</em>, 461(7260).</p>
              <p>Sornette, D. (2003). <em>Why Stock Markets Crash</em>. Princeton University Press.</p>
              <p>Taleb, N. N. (2012). <em>Antifragile: Things That Gain from Disorder</em>. Random House.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
