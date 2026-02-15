import type { Metadata } from 'next';
import { indicators } from '@/lib/observatory-data';

export const metadata: Metadata = {
  title: '10 Indicadores de Riesgo Sistémico No Convencionales · SFS Observatory',
  description:
    'Gamma squeeze risk, liquidity illusion, repo fragility, narrative desperation index: los indicadores que los dashboards institucionales no publican. Datos y metodología completa.',
  alternates: {
    canonical: 'https://www.semanticfieldscience.org/observatory/indicators',
  },
};

const indicatorDetails: Record<number, { magnitude: string; mechanism: string; historical: string }> = {
  1: {
    magnitude: '$2.5T de deuda corporativa vencen 2025-2026. El 40% ($1.0T) fue emitido a tipos <3% y debe refinanciarse con gap +2.9%. CRE: vacancy oficinas 26% nacional.',
    mechanism: 'Canal directo: Banks $1.2T exposure → default 10% = pérdidas $150-200B. Canal colateral: corporate bonds como colateral repo → haircuts aumentan → margin calls → spiral.',
    historical: 'Última maturity wall comparable: 2001-2002 ($800B ajustado por GDP). Actual: 3.5x mayor en términos reales. Cuando gap refinanciamiento >2%, crisis en 90% de casos históricos.',
  },
  2: {
    magnitude: 'Net gamma dealers SPX/NDX: -$30B (récord absoluto, vs -$8B histórico). Structured products con short vol embebida: >$500B notional.',
    mechanism: 'Ante movimientos >2% intraday, dealers amplifican movimiento (compran en rally, venden en decline). Retroalimentación positiva sin intervención humana. CTA trend following: $350B AUM que amplifica.',
    historical: 'Episodios de movimientos extremos (>3% SPX): <1 por trimestre 2015-2019 → >3 por trimestre 2023-2025. Flash crash 10-15% técnicamente plausible.',
  },
  3: {
    magnitude: 'Profundidad real del mercado <50% del nivel 2019. Bid-ask spreads aparecen normales pero liquidez es cosmética.',
    mechanism: 'Market makers algorítmicos desaparecen instantáneamente en stress. Flash crashes micro >5 por trimestre sin catalizador fundamental. Fails-to-deliver en Treasuries persistentemente elevados.',
    historical: 'Flash crash mayo 2010: profundidad cayó al 35%. Treasury dysfunction marzo 2020: cayó al 28%. Por debajo de 40% → dislocaciones de precio significativas.',
  },
  4: {
    magnitude: 'Total shadow banking: ~$16.6T (62% PIB US). Money market funds >$6T AUM récord. Private credit >$1.5T con apalancamiento 2-3x.',
    mechanism: 'Basis trades en Treasuries: $100M equity → $2.5B posición (25x). Si basis se mueve 10bps adversamente → $2.5M pérdidas → margin call → liquidación forzada → spiral.',
    historical: 'Marzo 2020: unwinding basis trades contribuyó al freezing del mercado de Treasuries. Fed compró >$1T en semanas para restablecer funcionalidad básica.',
  },
  5: {
    magnitude: 'Frecuencia "soft landing", "resilient", "well-positioned" >3x promedio histórico 2015-2019 en FOMC statements 2022-2025.',
    mechanism: 'Restricción de decibilidad: el sistema no puede enunciar la verdad sin precipitar lo que intenta evitar. Divergencia creciente entre forward guidance y outcomes realizados.',
    historical: 'Cuando sostener narrativa requiere esfuerzo creciente y cambios metodológicos → D(t) ha crecido tanto que mantenerla consume energía institucional extraordinaria.',
  },
  6: {
    magnitude: 'Pico SRF $29.4B oct 2025 (mayor desde dot-com). Límite $500B eliminado dic 2025. Backstop institucionalizado sin techo.',
    mechanism: 'Septiembre 2019: tipos repo al 10% intraday cuando Fed tardó horas. El plumbing financiero global está en mantenimiento artificial permanente.',
    historical: 'Desde 2019-sep no ha habido un solo periodo de 60 días donde el repo opere autónomamente sin backstop permanente del banco central.',
  },
  7: {
    magnitude: 'Friend-shoring acelerado. Controles exportación semiconductores expandidos. Erosión tratados cooperación (New START, INF terminados).',
    mechanism: 'En 2008 y 2020, coordinación entre bancos centrales fue factor crítico de contención. Esa capacidad está estructuralmente reducida en 2026.',
    historical: 'Mayor probabilidad de errores de cálculo y menor capacidad de respuesta coordinada ante crisis global.',
  },
  8: {
    magnitude: 'Bonos/acciones correlación POSITIVA. Gold/yields desacoplado. Crypto/tech correlación >0.85. PCA: PC1 explica >74% varianza de TODOS los activos.',
    mechanism: 'Todos los activos pricing el mismo riesgo. Diversificación rota porque todos responden al mismo factor: solidez del sistema de contención artificial.',
    historical: 'Históricamente, bonos y acciones se movían en dirección opuesta. Esta correlación positiva elimina el efecto diversificador de carteras 60/40.',
  },
  9: {
    magnitude: 'Ratio rehipotecación: 1.8 en 2024 vs 3.0 en 2007 (caída del 40%). Instituciones acaparando HQLA.',
    mechanism: 'Cuando actores del sistema se preparan para shock de liquidez, guardan mejores activos en lugar de prestarlos. Señal de precaución sistémica invisible.',
    historical: 'Este comportamiento no aparece en ningún informe institucional regular. Solo se detecta midiendo velocidad de circulación del colateral.',
  },
  10: {
    magnitude: 'Prima de plazo 10Y negativa o cerca de cero. Curva invertida >18 meses consecutivos récord histórico absoluto.',
    mechanism: 'Mercado no pricing adecuadamente riesgo de duración ni inflación largo plazo. Qualquier reajuste = pérdidas masivas en renta fija.',
    historical: 'Este mecanismo desencadenó crisis bancos regionales US 2023 y crisis gilts UK 2022.',
  },
};

function getColor(p: number): string {
  if (p >= 70) return '#e63946';
  if (p >= 40) return '#f4a261';
  return '#2a9d8f';
}

export default function IndicatorsPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <p className="text-obs-red font-mono text-sm tracking-[0.3em] uppercase mb-4">
          Indicadores
        </p>
        <h1 className="text-3xl md:text-5xl font-black mb-4">
          10 indicadores que nadie está monitorizando
        </h1>
        <p className="text-lg text-obs-text-secondary mb-6 max-w-2xl">
          Todos son del núcleo del sistema financiero global. Ninguno tiene un índice oficial publicado regularmente. Todos señalan en la misma dirección.
        </p>
        <p className="text-sm text-obs-text-secondary/50 font-mono mb-16">
          Promedio ponderado: <span className="text-obs-red font-bold">74.8%</span> · Convergente con α = 0.776
        </p>

        {/* Indicators detail list */}
        <div className="space-y-8">
          {indicators.map((indicator) => {
            const color = getColor(indicator.probability);
            const detail = indicatorDetails[indicator.id];

            return (
              <article
                key={indicator.id}
                id={`indicator-${indicator.id}`}
                className="bg-obs-card border border-obs-border rounded-xl overflow-hidden scroll-mt-20"
              >
                {/* Header bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-obs-border">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-obs-text-secondary/30">
                      #{indicator.id.toString().padStart(2, '0')}
                    </span>
                    <h2 className="text-base font-bold text-obs-text">
                      {indicator.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-lg font-bold"
                      style={{ color }}
                    >
                      {indicator.probability}%
                    </span>
                    <span className="text-[10px] text-obs-text-secondary/40 font-mono">
                      peso: {indicator.weight}%
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-1 bg-obs-bg-secondary">
                  <div
                    className="h-full transition-all"
                    style={{
                      width: `${indicator.probability}%`,
                      backgroundColor: color,
                    }}
                  />
                </div>

                {/* Detail content */}
                <div className="px-6 py-5 space-y-4 text-sm text-obs-text-secondary leading-relaxed">
                  {detail && (
                    <>
                      <div>
                        <h3 className="text-xs font-mono text-obs-text-secondary/40 uppercase tracking-wider mb-2">
                          Magnitud
                        </h3>
                        <p>{detail.magnitude}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-mono text-obs-text-secondary/40 uppercase tracking-wider mb-2">
                          Mecanismo de transmisión
                        </h3>
                        <p>{detail.mechanism}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-mono text-obs-text-secondary/40 uppercase tracking-wider mb-2">
                          Contexto histórico
                        </h3>
                        <p>{detail.historical}</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-6 py-3 bg-obs-bg-secondary/50 border-t border-obs-border text-[10px] font-mono text-obs-text-secondary/30">
                  <span>Fuente: {indicator.source}</span>
                  <span>Última actualización: {indicator.lastUpdated}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
