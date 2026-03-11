import {
  SystemState,
  Indicator,
  PhasePoint,
  ProbabilityDataPoint,
  ConvergenceEvent,
  HistoricalComparison,
  PNRCondition,
  MicroFissure,
  ComparatorMetric,
  HeroMetric,
  ProtocolUpdate,
} from '@/types/observatory';

// ─────────────────────────────────────────────────────────────────
// REGISTRO DE ACTUALIZACIONES
// ─────────────────────────────────────────────────────────────────
// Baseline t₀: 7 febrero 2026 (publicación caso de estudio)
// Actualización t₁: 11 marzo 2026 (+32 días)
//   Evento: Guerra USA-Israel vs Irán (28 feb 2026)
//   Hormuz cerrado · 20% petróleo global offline
// ─────────────────────────────────────────────────────────────────

// ─── PROTOCOL UPDATE (11 MAR 2026) ─────────────────────────────
export const latestUpdate: ProtocolUpdate = {
  date: '11 mar 2026',
  daysSinceT0: 32,
  triggerEvent:
    'Guerra USA-Israel vs Irán · Estrecho de Hormuz cerrado · 20% petróleo global offline',
  diagnosis: 'ACELERACIÓN CRÍTICA — Transición activa S1′ → S2',
  state: "S1' → S2",
  previous: { alpha: '0.776', tMed: '3.1m', pCrisis: '72.7%', avgIndicators: '74.8%' },
  current: { alpha: '0.821', tMed: '2.5m', pCrisis: '81%', avgIndicators: '80.5%' },
};

// ─── HERO METRICS ───────────────────────────────────────────────
// Actualizado 11 mar 2026 (baseline 7 feb: α=0.776, S1', T_med=3.1m)
export const heroMetrics: HeroMetric[] = [
  {
    value: '0.821',
    label: 'α = 0.821',
    sublabel: 'Fragilidad sistémica',
    badge: 'CRÍTICO',
    badgeColor: '#e63946',
    tooltip:
      'Parámetro de fragilidad calibrado mediante convergencia bayesiana de 10 indicadores no convencionales. Función logística: α = 1/(1+e^(-5·(Ī−0.50))). Ī actualizado = 0.805 (11 mar 2026). Anterior: α = 0.776 (7 feb 2026).',
  },
  {
    value: "S1'→S2",
    label: "S1' → S2",
    sublabel: 'Transición activa',
    badge: 'TRANSICIÓN',
    badgeColor: '#e63946',
    tooltip:
      'Estado S1′ en transición activa hacia S2. VIX alcanzó 35.30 (>umbral S2 de 30) durante 3-7 mar 2026. Guerra USA-Israel vs Irán desde 28 feb. Hormuz cerrado. Sistema probando el estado S2 pero sin estabilizarse en él.',
  },
  {
    value: '2.5',
    label: 'T_med = 2.5m',
    sublabel: 'Tiempo mediano hasta colapso',
    badge: undefined,
    badgeColor: undefined,
    tooltip:
      'Tiempo mediano hasta alcanzar S3 (colapso visible) estimado proporcionalmente a α=0.821 desde t₁ = 11 marzo 2026. Anterior: T_med = 3.1m (7 feb 2026, α=0.776). Ventana de convergencia original (3-7 mayo 2026) se mantiene fija.',
  },
];

// ─── SYSTEM STATES ──────────────────────────────────────────────
export const systemStates: SystemState[] = [
  {
    id: 'S0',
    name: 'Estabilidad Funcional',
    shortName: 'S0',
    description: 'Mecanismos de absorción operan normalmente. VIX <15.',
    isActive: false,
    isPast: true,
  },
  {
    id: 'S1',
    name: 'Estrés Gestionable',
    shortName: 'S1',
    description: 'Tensiones visibles pero contenibles. VIX 15-25.',
    isActive: false,
    isPast: true,
  },
  {
    id: 'S1p',
    name: 'Burbuja Sintética',
    shortName: "S1'",
    description:
      'Estrés reprimido bajo contención artificial. VIX artificialmente bajo. Fragilidad interna explosiva. Transición activa hacia S2 desde 28 feb 2026 (guerra USA-Israel vs Irán).',
    isActive: true,
    isPast: false,
  },
  {
    id: 'S2',
    name: 'Crisis Sistémica',
    shortName: 'S2',
    description: 'Fallos visibles simultáneos. Contagio activo. VIX >30.',
    isActive: false,
    isPast: false,
    isApproaching: true,  // Mar 2026: VIX tocó 35.30, sistema probando S2
  },
  {
    id: 'S3',
    name: 'Colapso Visible',
    shortName: 'S3',
    description:
      'Pérdida de confianza generalizada. Freezing de mercados. Semi-absorbente.',
    isActive: false,
    isPast: false,
  },
  {
    id: 'S4',
    name: 'Reset / Reconfiguración',
    shortName: 'S4',
    description: 'Post-colapso. Nuevas reglas. Reestructuración.',
    isActive: false,
    isPast: false,
  },
  {
    id: 'S5',
    name: 'Ruptura Total',
    shortName: 'S5',
    description:
      'Pérdida irreversible de orden sistémico. Estado absorbente.',
    isActive: false,
    isPast: false,
  },
];

// ─── 10 INDICATORS ──────────────────────────────────────────────
// Actualización 11 mar 2026: 6 de 10 indicadores actualizados
// Ī ponderado: 74.8% (7 feb) → 80.5% (11 mar) = +5.7pp
export const indicators: Indicator[] = [
  {
    id: 1,
    name: 'Corporate Debt Maturity Wall',
    probability: 84,                           // Sin cambio (datos trimestrales)
    source: 'Bloomberg / S&P LCD',
    lastUpdated: '7 feb 2026',
    description:
      '$2.5T vencen 2025-2026. Gap refinanciación +2.9%. CRE delinquencies en 8% (pico 2009: 9.2%).',
    weight: 15,
  },
  {
    id: 2,
    name: 'Gamma Squeeze Risk',
    probability: 86,                           // 82 → 86 (11 mar 2026)
    previousProbability: 82,
    source: 'CBOE / OCC (lag 2 semanas)',
    lastUpdated: '11 mar 2026',
    description:
      'Net gamma dealers SPX/NDX: -$30B (récord). Amplificación mecánica en movimientos >2% intraday. VIX alcanzó 35.30 (pico 3-7 mar). Volatilidad realizada explotó durante semana de guerra.',
    weight: 12,
  },
  {
    id: 3,
    name: 'Liquidity Illusion Index',
    probability: 84,                           // 80 → 84 (11 mar 2026)
    previousProbability: 80,
    source: 'Refinitiv / TRACE',
    lastUpdated: '11 mar 2026',
    description:
      'Profundidad real del mercado <50% del nivel 2019. Flash crashes micro >5 por trimestre. Profundidad colapsó durante picos de volatilidad semana 3-7 mar. Bid-ask spreads se ampliaron materialmente.',
    weight: 12,
  },
  {
    id: 4,
    name: 'Shadow Banking Leverage',
    probability: 79,                           // Sin cambio (datos anuales FSB)
    source: 'FSB / Fed Flow of Funds',
    lastUpdated: '31 dic 2025',
    description:
      'Shadow banking: ~$16.6T (62% PIB US). Basis trades en Treasuries con leverage >20:1.',
    weight: 11,
  },
  {
    id: 5,
    name: 'Narrative Desperation Index',
    probability: 81,                           // 77 → 81 (11 mar 2026)
    previousProbability: 77,
    source: 'FOMC Minutes / Comunicaciones oficiales',
    lastUpdated: '11 mar 2026',
    description:
      'Frecuencia "soft landing", "resilient" >3x promedio histórico. SN(t) crítico. Post-guerra: "mercados resilientes", "impacto contenido", "situación bajo control" mientras petróleo +50% y VIX en 35. Divergencia narrativa materialmente aumentada.',
    weight: 10,
  },
  {
    id: 6,
    name: 'Repo Market Fragility',
    probability: 79,                           // 75 → 79 (11 mar 2026)
    previousProbability: 75,
    source: 'Fed H.4.1 / FOMC / SRF',
    lastUpdated: '11 mar 2026',
    description:
      'SRF alcanzó $74.6B el 31 dic 2025 (récord absoluto, +48% vs $50.35B oct). Fed eliminó límite diario SRF en nov 2025 (dependencia estructural sin techo). Uso SRF en niveles críticos durante volatilidad 3-7 mar.',
    weight: 10,
  },
  {
    id: 7,
    name: 'Geopolitical Fragmentation',
    probability: 91,                           // 73 → 91 (11 mar 2026) ← MAYOR CAMBIO
    previousProbability: 73,
    source: 'Eventos geopolíticos / KOF',
    lastUpdated: '11 mar 2026',
    description:
      'Guerra total USA-Israel vs Irán desde 28 feb 2026. Estrecho de Hormuz cerrado (20% petróleo global offline). Qatar fuerza mayor gas (20% GNL). Rusia-Ucrania año 5. China-Taiwán tensión máxima. Coordinación bancos centrales: severamente comprometida. Sin precedente desde 1945.',
    weight: 8,
  },
  {
    id: 8,
    name: 'Cross-Asset Correlation Breakdown',
    probability: 77,                           // 71 → 77 (11 mar 2026)
    previousProbability: 71,
    source: 'Bloomberg',
    lastUpdated: '11 mar 2026',
    description:
      'PCA: PC1 explica >80% varianza cross-asset (era >74%). Bonos/acciones correlación positiva extrema durante guerra. Crypto/tech >0.90. Diversificación desapareció completamente durante semana 3-7 mar.',
    weight: 8,
  },
  {
    id: 9,
    name: 'Colateral Velocity Collapse',
    probability: 71,                           // 68 → 71 (11 mar 2026)
    source: 'FSB (anual) / estimación',
    lastUpdated: '11 mar 2026',
    description:
      'Ratio rehipotecación cayendo desde 1.8 (2024). Acaparamiento de HQLA acelerado durante semana de volatilidad. Instituciones reteniendo colateral de alta calidad como preparación ante shock de liquidez.',
    weight: 7,
  },
  {
    id: 10,
    name: 'Term Premium Reversal Risk',
    probability: 63,                           // Sin cambio (ACM datos feb no disponibles)
    source: 'NY Fed ACM model',
    lastUpdated: 'Ene 2026',
    description:
      'ACM 10Y: 0.59% ene 2026. Reversión desde -1.3% jul 2020. Pérdidas latentes HTM >$500B agregados.',
    weight: 7,
  },
];

// ─── PHASE SPACE DATA ───────────────────────────────────────────
// Trayectoria D(t) vs V(t) — punto Mar 2026 añadido
export const phaseTrajectory: PhasePoint[] = [
  { d: 0.52, v: 0.08, month: 'Ago 2025' },
  { d: 0.58, v: 0.14, month: 'Sep 2025' },
  { d: 0.62, v: 0.18, month: 'Oct 2025' },
  { d: 0.67, v: 0.22, month: 'Nov 2025' },
  { d: 0.72, v: 0.26, month: 'Dic 2025' },
  { d: 0.75, v: 0.28, month: 'Ene 2026' },
  { d: 0.78, v: 0.31, month: 'Feb 2026' },           // baseline t₀
  { d: 0.83, v: 0.36, month: 'Mar 2026', label: 'ACTUAL' },  // t₁ +32d
];

export const currentPhasePoint: PhasePoint = { d: 0.83, v: 0.36 };

// ─── PROBABILITY TIMELINE ───────────────────────────────────────
// Actualizado 11 mar 2026 — estimación proporcional a α=0.821
// Baseline 7 feb (α=0.776): 3m S2+=73.9/S3+=52.8 | 12m S2+=62.7/S3+=50.1
export const probabilityTimeline: ProbabilityDataPoint[] = [
  { month: 3, label: '3m', pS2Plus: 82.4, pS3Plus: 63.1 },
  { month: 6, label: '6m', pS2Plus: 75.8, pS3Plus: 59.7 },
  { month: 9, label: '9m', pS2Plus: 73.6, pS3Plus: 58.9 },
  { month: 12, label: '12m', pS2Plus: 74.2, pS3Plus: 60.8 },
  { month: 18, label: '18m', pS2Plus: 76.9, pS3Plus: 65.3 },
  { month: 24, label: '24m', pS2Plus: 80.5, pS3Plus: 70.2 },
];

// Baseline feb 2026 (α=0.776) — para línea fantasma comparativa en gráfico
export const feb2026ProbabilityTimeline: ProbabilityDataPoint[] = [
  { month: 3, label: '3m', pS2Plus: 73.9, pS3Plus: 52.8 },
  { month: 6, label: '6m', pS2Plus: 65.2, pS3Plus: 49.5 },
  { month: 9, label: '9m', pS2Plus: 62.5, pS3Plus: 48.7 },
  { month: 12, label: '12m', pS2Plus: 62.7, pS3Plus: 50.1 },
  { month: 18, label: '18m', pS2Plus: 65.4, pS3Plus: 54.4 },
  { month: 24, label: '24m', pS2Plus: 68.8, pS3Plus: 59.1 },
];

// ─── CRITICAL WINDOW ────────────────────────────────────────────
// Ventana RCE-C3 fija en calendario — NO se mueve con t₁
export const convergenceEvents: ConvergenceEvent[] = [
  {
    date: '28 feb 2026',
    description: 'Guerra USA-Israel vs Irán · Hormuz cerrado · Trigger exógeno materializado',
  },
  {
    date: '3-5 mayo 2026',
    description: 'Activador RCE-C3 · Sobreextensión dealers opciones SPX',
  },
  {
    date: '6 mayo 2026',
    description: 'Cambio de régimen estructural largo plazo',
  },
  {
    date: '7 mayo 2026',
    description: 'Centro estadístico T_med · Modelo Markov (baseline t₀ = 7 feb)',
  },
];

export const historicalComparisons: HistoricalComparison[] = [
  {
    year: 2008,
    label: '2008',
    event: 'RCE-C3 → Lehman Brothers',
    days: 8,
  },
  {
    year: 1997,
    label: '1997',
    event: 'RCE-C3 → Mini-crash Dow Jones',
    days: 53,
  },
  {
    year: 1973,
    label: '1973',
    event: 'RCE-C3 → Yom Kippur / crisis petróleo',
    days: 44,
  },
  {
    year: 1929,
    label: '1929',
    event: 'RCE-C3 → Black Tuesday',
    days: 105,
  },
];

// ─── PNR CONDITIONS ─────────────────────────────────────────────
// Actualizado 11 mar 2026: 3 de 4 condiciones EXCEEDED (era 1 EXCEEDED, 1 THRESHOLD)
export const pnrConditions: PNRCondition[] = [
  {
    label: 'P(S3+) > 50%',
    threshold: '> 50%',
    current: '63.1% a 3m',          // era 52.8% → ahora 63.1%
    status: 'EXCEEDED',
    icon: '🔴',
  },
  {
    label: 'O(t) > 0.80',
    threshold: '> 0.80',
    current: '0.83 actual',          // era 0.78 → ahora 0.83
    status: 'EXCEEDED',
    icon: '🔴',
  },
  {
    label: 'Micro-fisuras críticas ≥ 2',
    threshold: '≥ 2',
    current: '4 activas',            // era 3 → ahora 4 (+ Energy Sector)
    status: 'EXCEEDED',
    icon: '🔴',
  },
  {
    label: "D'(t) > 0 acelerando",
    threshold: '> 0',
    current: 'Positivo confirmado',
    status: 'CONFIRMED',
    icon: '🔴',
  },
];

export const pnrProgress = 91;   // era 78% → 91% (3 de 4 condiciones EXCEEDED)
export const previousPnrProgress = 78;

// ─── MICRO-FISSURES ─────────────────────────────────────────────
// Actualizado 11 mar 2026: 3 fisuras agravadas + 1 nueva (Energy Sector)
export const microFissures: MicroFissure[] = [
  {
    name: 'Energy Sector Contagion',     // NUEVA — 11 mar 2026
    severity: 'CRITICAL',
    contagionProbability: 85,
    description:
      'Estrecho de Hormuz cerrado indefinidamente. 20% petróleo global offline. Qatar gas fuerza mayor (20% GNL). Petróleo +50% en 10 días ($67→$97-104). Gasolina USA +$0.51/gal en 7 días. Cascada: energía → transporte → manufactura → consumo.',
    // NUEVA — sin previousContagionProbability
  },
  {
    name: 'CRE Collapse',
    severity: 'CRITICAL',
    contagionProbability: 82,            // era 78 → 82 (shock energético agrava costes)
    previousContagionProbability: 78,
    description:
      'Oficinas vacancy 26% nacional. CMBS delinquencies 8%. REITs suspendiendo redemptions. Shock energético (+50% petróleo) aumenta costes operativos. Recesión inducida por guerra reduce demanda.',
  },
  {
    name: 'Regional Banks',
    severity: 'CRITICAL',               // era HIGH → CRITICAL
    previousSeverity: 'HIGH',
    contagionProbability: 78,            // era 65 → 78 (stress renovado post-guerra)
    previousContagionProbability: 65,
    description:
      'Pérdidas no realizadas HTM >$500B. Depósitos no asegurados en fuga continua. Shock energético + guerra renueva stress de liquidez. Depósitos acelerando salida post-28 feb.',
  },
  {
    name: 'Leveraged Loans',
    severity: 'HIGH',
    contagionProbability: 75,            // era 70 → 75
    previousContagionProbability: 70,
    description:
      'Defaults >3% anual. CLO AAA spreads +50bps. $1.4T outstanding interconectado. Tipos altos + recesión inducida por guerra = repricing masivo inminente. Spreads CLO BB+ ampliándose.',
  },
  {
    name: 'Crypto Contagion',
    severity: 'MEDIUM_HIGH',
    contagionProbability: 63,
    description:
      'ETF crypto = exposición institucional. Correlación BTC-NDX >0.85. Loop sistémico.',
  },
  {
    name: 'Auto Loan Delinquencies',
    severity: 'MEDIUM_HIGH',
    contagionProbability: 58,
    description:
      'Subprime auto delinquency >7% (récord). 60+ días mora: >6.5%. Repossessions +25% YoY.',
  },
  {
    name: 'Sovereign Debt EM',
    severity: 'HIGH',
    contagionProbability: 55,
    description:
      'ARG, PAK, EGY, LKA en reestructuración. Deuda global $318.4T récord. China $13T+ local.',
  },
  {
    name: 'Credit Card Charge-offs',
    severity: 'MEDIUM',
    contagionProbability: 52,
    description:
      'Charge-off rates >4.5% (vs 3.0% histórico). Deuda tarjetas >$1.1T récord.',
  },
];

// ─── COMPARATOR PROTOCOL ────────────────────────────────────────
// Actualizado 11 mar 2026: ACELERACIÓN CRÍTICA CONFIRMADA
// α↑ y T_med↓ → ACELERACIÓN (regla formal del protocolo)
export const comparatorMetrics: ComparatorMetric[] = [
  { name: 'α_t', value: '0.821', change: '↑ desde 0.776', direction: 'up' },
  {
    name: 'T_med',
    value: '2.5m',
    change: '↓ desde 3.1m',
    direction: 'down',
  },
  {
    name: 'T_mean',
    value: '3.6m',
    change: '↓ desde 4.5m',
    direction: 'down',
  },
];

// ─── UTILITY FUNCTIONS ──────────────────────────────────────────
export function getIndicatorColor(probability: number): string {
  if (probability >= 70) return '#e63946';
  if (probability >= 40) return '#f4a261';
  return '#2a9d8f';
}

export function getSeverityColor(severity: string): string {
  switch (severity) {
    case 'CRITICAL':
      return '#e63946';
    case 'HIGH':
      return '#f4a261';
    case 'MEDIUM_HIGH':
      return '#e9c46a';
    case 'MEDIUM':
      return '#457b9d';
    case 'LOW':
      return '#2a9d8f';
    default:
      return '#a8dadc';
  }
}

export function getSeverityLabel(severity: string): string {
  switch (severity) {
    case 'CRITICAL':
      return 'CRÍTICA';
    case 'HIGH':
      return 'ALTA';
    case 'MEDIUM_HIGH':
      return 'MEDIA-ALTA';
    case 'MEDIUM':
      return 'MEDIA';
    case 'LOW':
      return 'BAJA';
    default:
      return severity;
  }
}
