import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Informe 11 Marzo 2026: Tres Pilares de Aceleración Sistémica · SFS Observatory',
  description:
    'Análisis cuantitativo de los tres pilares que determinan la transición S1′→S2. Liquidez artificial (SRF), gravedad de deuda (Maturity Wall), divergencia semántica. Datos actualizados a 11 marzo 2026.',
  alternates: {
    canonical: 'https://www.semanticfieldscience.org/observatory/report-11-3',
  },
};

/* ─── DATA ──────────────────────────────────────────────────────── */

const metrics = {
  rows: [
    { label: 'α (fragilidad)', feb: '0.776', mar: '0.821', delta: '+5.8%' },
    { label: 'T_med', feb: '3.1m', mar: '2.5m', delta: '−19%' },
    { label: 'P(S2+ 12m)', feb: '72.7%', mar: '81%', delta: '+8.3pp' },
    { label: 'Ī (avg indicadores)', feb: '74.8%', mar: '80.5%', delta: '+5.7pp' },
    { label: 'PNR', feb: '78%', mar: '91%', delta: '+13pp' },
    { label: 'D(t)', feb: '0.78', mar: '0.83', delta: '+6.4%' },
    { label: 'V(t)', feb: '0.31', mar: '0.36', delta: '+16%' },
    { label: 'Condiciones PNR', feb: '1/4 EXC', mar: '3/4 EXC', delta: 'crítico' },
  ],
};

const confirmations = {
  confirmed: [
    'Aceleración de fragilidad: α +5.8% en 32 días — consistente con transición S1′→S2',
    'Trigger exógeno materializado: Guerra USA-Israel vs Irán (28 feb 2026)',
    'PNR acercándose: 78%→91%, con 3/4 condiciones EXCEEDED (vs 1/4 en febrero)',
    'Divergencia narrativa creciente: D(t) 0.78→0.83, V(t) 0.31→0.36',
    'Micro-fisuras multiplicándose: 3→4 activas, con 3 en CRITICAL (vs 2 en febrero)',
  ],
  partial: [
    'VIX tocó 35.30 (>30 = umbral S2) pero retrocedió a 25.74',
    'Regional Banks stress renovado sin default sistémico',
    'Energy sector contagion activo, cascada incompleta',
  ],
  notConfirmed: [
    'Defaults masivos en maturity wall — datos trimestrales no disponibles hasta Q2',
    'Repo freeze >24h — no observado',
    'Intervención de emergencia tipo BTFP — Fed no ha activado',
    'Fuga de depósitos sistémica (>$500B/semana) — no observada',
    'VIX sostenido >30 durante >5 sesiones — retrocedió',
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────── */

export default function Report11March() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      {/* Header */}
      <header className="border-b border-[#e0e0e0] bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#888] mb-4">
            SFS Observatory · Informe Protocolo Comparator
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 text-[#111]">
            Los Tres Pilares de Aceleración Sistémica
          </h1>
          <p className="text-lg text-[#666] max-w-2xl mb-6">
            Análisis cuantitativo de los mecanismos que determinan la transición del sistema
            desde S1′ (Burbuja Sintética) hacia S2 (Crisis Sistémica).
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#999]">
            <span>11 marzo 2026</span>
            <span className="text-[#ddd]">·</span>
            <span>t₁ = +32 días desde t₀</span>
            <span className="text-[#ddd]">·</span>
            <span>Semantic Field Science</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">

        {/* ════ ESTADO ACTUAL ════ */}
        <section className="mb-16">
          <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-[#999] mb-6">
            Estado del Sistema
          </h2>
          <div className="border border-[#e0e0e0] rounded-lg overflow-hidden bg-white">
            <div className="bg-[#111] text-white px-6 py-3 flex items-center justify-between">
              <span className="font-mono text-sm font-bold">S1′ → S2 · TRANSICIÓN ACTIVA</span>
              <span className="font-mono text-xs text-white/50">α = 0.821</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e8e8e8] text-[#999] text-xs font-mono">
                    <th className="py-3 px-4 text-left">Métrica</th>
                    <th className="py-3 px-4 text-left">Feb 2026 (t₀)</th>
                    <th className="py-3 px-4 text-left font-bold text-[#111]">Mar 2026 (t₁)</th>
                    <th className="py-3 px-4 text-left">Δ</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-xs">
                  {metrics.rows.map((r) => (
                    <tr key={r.label} className="border-b border-[#f0f0f0]">
                      <td className="py-2.5 px-4 text-[#666]">{r.label}</td>
                      <td className="py-2.5 px-4 text-[#999]">{r.feb}</td>
                      <td className="py-2.5 px-4 font-bold text-[#111]">{r.mar}</td>
                      <td className="py-2.5 px-4 text-[#c0392b]">{r.delta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-[10px] font-mono text-[#bbb]">
            Evento desencadenante: Guerra USA-Israel vs Irán · 28 febrero 2026 · Estrecho de Hormuz cerrado
          </p>
        </section>

        {/* ════ PILAR 1 ════ */}
        <section className="mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-4xl font-black text-[#111]">01</span>
            <div>
              <h2 className="text-xl font-bold text-[#111]">Liquidez Artificial</h2>
              <p className="text-sm text-[#888]">El pulmón de soporte vital del sistema interbancario</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-[#e0e0e0] rounded-lg p-6">
              <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-[#999] mb-4">
                Datos verificados — 11 mar 2026
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { v: '$74.6B', l: 'SRF récord', s: '31 dic 2025' },
                  { v: '+48%', l: 'vs oct 2025', s: '$50.35B→$74.6B' },
                  { v: '79%', l: 'Repo Fragility', s: '↑75% (feb)' },
                  { v: '84%', l: 'Liquidity Illusion', s: '↑80% (feb)' },
                ].map((d) => (
                  <div key={d.l} className="text-center py-3 px-2 bg-[#fafafa] rounded">
                    <div className="font-mono text-lg font-bold text-[#111]">{d.v}</div>
                    <div className="text-xs text-[#666] mt-1">{d.l}</div>
                    <div className="text-[9px] font-mono text-[#bbb] mt-0.5">{d.s}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#e0e0e0] rounded-lg p-6 space-y-4 text-sm text-[#444] leading-relaxed">
              <p>
                El Standing Repo Facility (SRF) no es un termómetro — es un <strong className="text-[#111]">respirador</strong>.
                Desde septiembre 2019, no ha existido un periodo de 60 días donde el mercado de repo
                opere autónomamente sin backstop permanente del banco central.
              </p>
              <p>
                El récord de $74.6B y la eliminación del límite diario por parte de la Fed (noviembre 2025)
                indican que el mercado de financiación overnight ya no existe de forma natural.
                El sistema interbancario depende estructuralmente del pulmón artificial.
              </p>

              <h4 className="font-bold text-[#111] pt-2">Fases del mecanismo de transmisión</h4>
              <div className="space-y-3 pl-4 border-l-2 border-[#e0e0e0]">
                <div>
                  <p className="font-mono text-xs text-[#999] mb-1">FASE 1 — Soporte (estado actual)</p>
                  <p className="text-xs text-[#555]">
                    El backstop permanente mantiene funcionalidad. Los contrapartes con mejor colateral
                    aún operan. Pero la autonomía del sistema = 0.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#999] mb-1">FASE 2 — Saturación (umbral: SRF &gt;$100B)</p>
                  <p className="text-xs text-[#555]">
                    Los contrapartes con mejor colateral necesitan backstop.
                    El colateral de calidad se agota. Haircuts suben mecánicamente.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#c0392b] mb-1">FASE 3 — Freezing</p>
                  <p className="text-xs text-[#555]">
                    SRF sube Y profundidad de Treasuries colapsa simultáneamente.
                    El colateral soberano — la base de todo — deja de funcionar.
                  </p>
                </div>
              </div>

              <h4 className="font-bold text-[#111] pt-2">Vector crítico: Basis Trades</h4>
              <p>
                $100M equity → $2.5B posición (leverage 25x) en Treasuries. Si el basis se mueve
                10bps adversamente = $2.5M pérdidas instantáneas → margin call → liquidación forzada →
                retroalimentación. En marzo 2020, este mecanismo forzó a la Fed a comprar &gt;$1T en semanas.
                La diferencia en 2026: el SRF ya está en máximos <em>antes</em> de la crisis.
              </p>
            </div>

            <div className="bg-white border border-[#e0e0e0] rounded-lg p-6">
              <h4 className="text-xs font-mono tracking-[0.15em] uppercase text-[#999] mb-3">
                Señales de confirmación S2 — Pilar 1
              </h4>
              <div className="space-y-2 text-xs text-[#555]">
                <p className="flex items-start gap-2"><span className="text-[#bbb]">○</span> SRF &gt;$100B durante 5 sesiones consecutivas</p>
                <p className="flex items-start gap-2"><span className="text-[#bbb]">○</span> Fails-to-deliver en Treasuries &gt;$100B/semana</p>
                <p className="flex items-start gap-2"><span className="text-[#bbb]">○</span> Fed reactiva programa tipo BTFP (compra directa de colateral depreciado)</p>
                <p className="flex items-start gap-2"><span className="text-[#bbb]">○</span> Repo rate intraday &gt;200bps sobre FFR</p>
              </div>
            </div>
          </div>
        </section>

        {/* ════ PILAR 2 ════ */}
        <section className="mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-4xl font-black text-[#111]">02</span>
            <div>
              <h2 className="text-xl font-bold text-[#111]">Gravedad de Deuda</h2>
              <p className="text-sm text-[#888]">La muralla de vencimientos y la cascada de contagio</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-[#e0e0e0] rounded-lg p-6">
              <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-[#999] mb-4">
                Datos verificados — 11 mar 2026
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { v: '84%', l: 'Maturity Wall', s: 'sin cambio (trim.)' },
                  { v: '82%', l: 'CRE Collapse', s: '↑78% · CRITICAL' },
                  { v: '78%', l: 'Regional Banks', s: '↑65% · HIGH→CRIT' },
                  { v: '85%', l: 'Energy Sector', s: 'NUEVA · CRITICAL' },
                  { v: '75%', l: 'Leveraged Loans', s: '↑70%' },
                ].map((d) => (
                  <div key={d.l} className="text-center py-3 px-2 bg-[#fafafa] rounded">
                    <div className="font-mono text-lg font-bold text-[#111]">{d.v}</div>
                    <div className="text-[10px] text-[#666] mt-1">{d.l}</div>
                    <div className="text-[8px] font-mono text-[#bbb] mt-0.5">{d.s}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#e0e0e0] rounded-lg p-6 space-y-4 text-sm text-[#444] leading-relaxed">
              <p>
                El mecanismo no es &quot;la deuda no se puede pagar&quot; — es que el
                <strong className="text-[#111]"> coste de mantener la deuda viva crece más rápido
                que la capacidad del sistema para absorberlo</strong>.
              </p>

              <h4 className="font-bold text-[#111] pt-2">La trampa del gap de refinanciación (+2.9%)</h4>
              <p>
                $2.5T vencen 2025-2026. El 40% ($1.0T) fue emitido a tipos &lt;3% y debe refinanciarse
                con gap +2.9%. No significa default inmediato — significa erosión progresiva del flujo de
                caja que reduce la capacidad de las empresas para absorber cualquier shock externo.
              </p>

              <h4 className="font-bold text-[#111] pt-2">El catalizador energético (nuevo desde 28 feb)</h4>
              <div className="bg-[#f8f5f0] border border-[#e8e0d0] rounded p-4 text-xs space-y-1">
                <p>Petróleo: +50% en 10 días ($67 → $97-104)</p>
                <p>Gasolina USA: +$0.51/gal en 7 días</p>
                <p>20% del petróleo global offline (Hormuz cerrado)</p>
                <p>Qatar gas fuerza mayor (20% GNL global)</p>
                <p className="pt-2 text-[#888]">
                  Las empresas con gap +2.9% ahora enfrentan costes energéticos +50%.
                  La erosión de flujo de caja se acelera.
                </p>
              </div>

              <h4 className="font-bold text-[#111] pt-2">Secuencia de dominó</h4>
              <div className="font-mono text-xs space-y-1 pl-4 border-l-2 border-[#111]">
                <p>Maturity Wall (84%) <span className="text-[#bbb]">— primer default sistémico</span></p>
                <p className="pl-4">↓</p>
                <p>CRE Collapse (82%) <span className="text-[#bbb]">— contagio colateral</span></p>
                <p className="pl-4">↓</p>
                <p>Regional Banks (78%) <span className="text-[#bbb]">— pérdidas HTM + fuga depósitos</span></p>
                <p className="pl-4">↓</p>
                <p>Shadow Banking (79%) <span className="text-[#bbb]">— basis trade unwind</span></p>
                <p className="pl-4">↓</p>
                <p>Energy Sector (85%) <span className="text-[#bbb]">— amplificador externo</span></p>
                <p className="pl-4">↓</p>
                <p className="font-bold text-[#111]">═══ S2 CONFIRMADO ═══</p>
              </div>

              <h4 className="font-bold text-[#111] pt-2">Canal CRE (Commercial Real Estate)</h4>
              <p>
                Vacancy oficinas 26% nacional. CMBS delinquencies 8%
                (pico 2009: 9.2% — a 1.2pp del peor momento de la Gran Recesión).
                El shock energético agrava: costes operativos suben, recesión inducida
                reduce demanda, REITs suspendiendo redemptions.
              </p>
            </div>

            <div className="bg-white border border-[#e0e0e0] rounded-lg p-6">
              <h4 className="text-xs font-mono tracking-[0.15em] uppercase text-[#999] mb-3">
                Señales de confirmación S2 — Pilar 2
              </h4>
              <div className="space-y-2 text-xs text-[#555]">
                <p className="flex items-start gap-2"><span className="text-[#bbb]">○</span> Default de &gt;3 nombres sistémicos en &lt;30 días</p>
                <p className="flex items-start gap-2"><span className="text-[#c0392b]">◑</span> CRE delinquencies &gt;9% (actual: 8%, a 1pp del umbral 2009)</p>
                <p className="flex items-start gap-2"><span className="text-[#c0392b]">◑</span> Regional Banks: fuga depósitos acelerándose post-28 feb</p>
                <p className="flex items-start gap-2"><span className="text-[#bbb]">○</span> CLO AAA downgrades (aún no, pero spreads +50bps)</p>
              </div>
            </div>
          </div>
        </section>

        {/* ════ PILAR 3 ════ */}
        <section className="mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-4xl font-black text-[#111]">03</span>
            <div>
              <h2 className="text-xl font-bold text-[#111]">Divergencia Semántica</h2>
              <p className="text-sm text-[#888]">La distancia entre la realidad estructural y la narrativa institucional</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-[#e0e0e0] rounded-lg p-6">
              <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-[#999] mb-4">
                Datos verificados — 11 mar 2026
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { v: '0.83', l: 'D(t) divergencia', s: '↑0.78 (+6.4%)' },
                  { v: '0.36', l: 'V(t) velocidad', s: '↑0.31 (+16%)' },
                  { v: '81%', l: 'Narrative Desperation', s: '↑77%' },
                  { v: '91%', l: 'Geopolitical Frag.', s: '↑73% (+18pp)' },
                ].map((d) => (
                  <div key={d.l} className="text-center py-3 px-2 bg-[#fafafa] rounded">
                    <div className="font-mono text-lg font-bold text-[#111]">{d.v}</div>
                    <div className="text-[10px] text-[#666] mt-1">{d.l}</div>
                    <div className="text-[8px] font-mono text-[#bbb] mt-0.5">{d.s}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#e0e0e0] rounded-lg p-6 space-y-4 text-sm text-[#444] leading-relaxed">
              <h4 className="font-bold text-[#111]">D(t) = 0.83 — percentil 95 histórico</h4>
              <p>
                La distancia entre realidad estructural S(t) y narrativa institucional R(t) está
                en el percentil 95 histórico. Post-guerra, las instituciones comunican
                &quot;mercados resilientes&quot; e &quot;impacto contenido&quot; mientras el petróleo sube 50%,
                el VIX tocó 35.30, y 1.700 personas han muerto.
              </p>
              <p>
                La frecuencia de &quot;soft landing&quot;, &quot;resilient&quot;, &quot;well-positioned&quot; en comunicaciones
                oficiales es &gt;3x el promedio histórico 2015-2019. El sistema necesita
                <strong className="text-[#111]"> energía institucional creciente</strong> para mantener la narrativa.
              </p>

              <h4 className="font-bold text-[#111] pt-2">La Restricción de Decibilidad</h4>
              <div className="bg-[#f8f8f8] border-l-2 border-[#111] pl-4 py-3 text-xs italic text-[#555]">
                El sistema no puede decir la verdad sin precipitar lo que intenta evitar.
                Si la Fed dijera &quot;el mercado repo no funciona sin nuestra intervención permanente&quot;,
                habría corrida instantánea. La restricción amplifica D(t): cada comunicación
                oficial debe minimizar el riesgo real, aumentando la divergencia.
              </div>

              <h4 className="font-bold text-[#111] pt-2">Geopolitical Fragmentation: 73% → 91% (+18pp)</h4>
              <p>
                El mayor cambio de todos los indicadores. La guerra ha destruido no solo la
                estabilidad geopolítica sino la <strong className="text-[#111]">capacidad de respuesta coordinada</strong>:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-[#fafafa] rounded p-3">
                  <p className="font-bold text-[#111] mb-1">2008</p>
                  <p className="text-[#666]">G7 coordinó respuesta fiscal + monetaria en semanas</p>
                </div>
                <div className="bg-[#fafafa] rounded p-3">
                  <p className="font-bold text-[#111] mb-1">2020</p>
                  <p className="text-[#666]">Fed+BCE+BoJ+BoE actuaron simultáneamente con swap lines</p>
                </div>
                <div className="bg-[#f5f0f0] rounded p-3 border border-[#e0d0d0]">
                  <p className="font-bold text-[#c0392b] mb-1">2026</p>
                  <p className="text-[#666]">USA en guerra activa. Coordinación bancos centrales no operativa</p>
                </div>
              </div>

              <h4 className="font-bold text-[#111] pt-2">Ventana de convergencia RCE-C3: 3-7 mayo 2026</h4>
              <p>
                Nodo de convergencia estadístico definido por la confluencia temporal de:
                sobreextensión de dealers de opciones SPX, cambio de régimen estructural a largo
                plazo, y el centro estadístico del T_med calculado desde t₀ (7 febrero 2026).
              </p>
              <div className="overflow-x-auto mt-3">
                <table className="w-full text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#e0e0e0] text-[#999]">
                      <th className="py-2 px-3 text-left">Año</th>
                      <th className="py-2 px-3 text-left">Evento histórico</th>
                      <th className="py-2 px-3 text-right">Días señal→crisis</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555]">
                    {[
                      { y: '2008', e: 'RCE-C3 → Lehman Brothers', d: '8' },
                      { y: '1997', e: 'RCE-C3 → Mini-crash Dow Jones', d: '53' },
                      { y: '1973', e: 'RCE-C3 → Yom Kippur / crisis petróleo', d: '44' },
                      { y: '1929', e: 'RCE-C3 → Black Tuesday', d: '105' },
                    ].map((r) => (
                      <tr key={r.y} className="border-b border-[#f0f0f0]">
                        <td className="py-2 px-3 font-bold text-[#111]">{r.y}</td>
                        <td className="py-2 px-3">{r.e}</td>
                        <td className="py-2 px-3 text-right">{r.d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white border border-[#e0e0e0] rounded-lg p-6">
              <h4 className="text-xs font-mono tracking-[0.15em] uppercase text-[#999] mb-3">
                Señales de confirmación S2 — Pilar 3
              </h4>
              <div className="space-y-2 text-xs text-[#555]">
                <p className="flex items-start gap-2"><span className="text-[#c0392b]">●</span> D(t) &gt; 0.80 sostenido — <strong>CONFIRMADO</strong> (0.83)</p>
                <p className="flex items-start gap-2"><span className="text-[#c0392b]">●</span> V(t) positivo y acelerando — <strong>CONFIRMADO</strong> (0.36, +16%)</p>
                <p className="flex items-start gap-2"><span className="text-[#c0392b]">◑</span> Desacople narrativa/realidad &gt;3σ — parcialmente (3.1σ puntual, no sostenido)</p>
                <p className="flex items-start gap-2"><span className="text-[#bbb]">○</span> Evento de rendición narrativa (institución admite fragilidad) — no observado</p>
              </div>
            </div>
          </div>
        </section>

        {/* ════ VERIFICACIÓN ════ */}
        <section className="mb-16">
          <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-[#999] mb-6">
            Verificación cruzada
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#e0e0e0] rounded-lg p-5">
              <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-[#111] mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#111]" />
                Confirmado
              </h3>
              <div className="space-y-3">
                {confirmations.confirmed.map((c, i) => (
                  <p key={i} className="text-xs text-[#555] leading-relaxed">{c}</p>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#e0e0e0] rounded-lg p-5">
              <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-[#888] mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#f4a261]" />
                Parcial
              </h3>
              <div className="space-y-3">
                {confirmations.partial.map((c, i) => (
                  <p key={i} className="text-xs text-[#555] leading-relaxed">{c}</p>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#e0e0e0] rounded-lg p-5">
              <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-[#999] mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full border border-[#ccc]" />
                No confirmado
              </h3>
              <div className="space-y-3">
                {confirmations.notConfirmed.map((c, i) => (
                  <p key={i} className="text-xs text-[#888] leading-relaxed">{c}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════ SECUENCIA MARKOV ════ */}
        <section className="mb-16">
          <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-[#999] mb-6">
            Secuencia del Modelo Markov
          </h2>
          <div className="bg-white border border-[#e0e0e0] rounded-lg p-6">
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-start gap-4 py-3 px-4 bg-[#111] text-white rounded">
                <span className="font-bold w-8">S1′</span>
                <div className="flex-1">
                  <span className="font-bold">ESTADO ACTUAL — 11 mar 2026</span>
                  <p className="text-white/60 mt-1">
                    α=0.821 · Contención artificial activa · VIX 25.74 (pico 35.30) · SRF máximos
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-3 px-4 border-2 border-[#c0392b] rounded">
                <span className="font-bold w-8 text-[#c0392b]">S2</span>
                <div className="flex-1">
                  <span className="font-bold text-[#c0392b]">Crisis Sistémica — PRÓXIMO ESTADO PROBABLE</span>
                  <p className="text-[#888] mt-1">
                    P(S2+ 12m)=81% · P(S2+ 3m)=82.4% · Requiere: VIX sostenido &gt;30 + default sistémico
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-3 px-4 bg-[#fafafa] border border-[#e0e0e0] rounded">
                <span className="font-bold w-8 text-[#999]">S3</span>
                <div className="flex-1">
                  <span className="font-bold text-[#666]">Colapso Visible</span>
                  <p className="text-[#bbb] mt-1">
                    P(S3+ 3m)=63.1% · Freezing de mercados · Repo freeze &gt;24h
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-3 px-4 bg-[#fafafa] border border-[#e0e0e0] rounded">
                <span className="font-bold w-8 text-[#ccc]">S4</span>
                <div className="flex-1">
                  <span className="font-bold text-[#999]">Reset / Reconfiguración</span>
                  <p className="text-[#ccc] mt-1">
                    Post-colapso · Nuevas reglas · Requiere materialización completa de S2+S3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════ DISCLAIMER ════ */}
        <section>
          <div className="border-t border-[#e0e0e0] pt-8 text-center">
            <p className="text-xs text-[#999] leading-relaxed max-w-2xl mx-auto">
              <strong className="text-[#666]">Este análisis cuantifica fragilidad, no predice el futuro.</strong>{' '}
              No es consejo financiero ni prescripción de acción. El modelo presenta condiciones verificables
              de invalidación documentadas en la{' '}
              <a href="/observatory/methodology" className="text-[#111] underline hover:text-[#c0392b] transition-colors">
                sección de metodología
              </a>. Puede ser compartido, citado y debatido libremente.
            </p>
            <p className="font-mono text-[10px] text-[#ccc] mt-6">
              Semantic Field Science · Observatorio de Fragilidad Sistémica Global · 11 marzo 2026
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
