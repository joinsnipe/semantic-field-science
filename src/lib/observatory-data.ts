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
} from '@/types/observatory';

// ─── HERO METRICS ───────────────────────────────────────────────
export const heroMetrics: HeroMetric[] = [
  {
    value: '0.776',
    label: 'α = 0.776',
    sublabel: 'Fragilidad sistémica',
    badge: 'CRÍTICO',
    badgeColor: '#e63946',
    tooltip:
      'Parámetro de fragilidad calibrado mediante convergencia bayesiana de 10 indicadores no convencionales. Función logística: α = 1/(1+e^(-5·(Ī−0.50))). Cuanto más cerca de 1, mayor fragilidad acumulada.',
  },
  {
    value: "S1'",
    label: "S1'",
    sublabel: 'Burbuja Sintética',
    badge: 'ESTADO ACTUAL',
    badgeColor: '#e63946',
    tooltip:
      'Estado S1′ — Estrés reprimido bajo contención artificial. Baja volatilidad superficial engañosa, fragilidad estructural profunda y explosiva. VIX <15 pero indicadores internos críticos.',
  },
  {
    value: '3.1',
    label: 'T_med = 3.1m',
    sublabel: 'Tiempo mediano hasta colapso',
    badge: undefined,
    badgeColor: undefined,
    tooltip:
      'Tiempo mediano hasta alcanzar S3 (colapso visible) en 10.000 simulaciones Monte Carlo desde el estado inicial S1′. El 50% de las trayectorias simuladas llegan a S3 antes del 7 de mayo de 2026.',
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
      'Estrés reprimido bajo contención artificial. VIX artificialmente bajo. Fragilidad interna explosiva.',
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
export const indicators: Indicator[] = [
  {
    id: 1,
    name: 'Corporate Debt Maturity Wall',
    probability: 84,
    source: 'Bloomberg / S&P LCD',
    lastUpdated: '7 feb 2026',
    description:
      '$2.5T vencen 2025-2026. Gap refinanciación +2.9%. CRE delinquencies en 8% (pico 2009: 9.2%).',
    weight: 15,
  },
  {
    id: 2,
    name: 'Gamma Squeeze Risk',
    probability: 82,
    source: 'CBOE / OCC (lag 2 semanas)',
    lastUpdated: '24 ene 2026',
    description:
      'Net gamma dealers SPX/NDX: -$30B (récord). Amplificación mecánica en movimientos >2% intraday.',
    weight: 12,
  },
  {
    id: 3,
    name: 'Liquidity Illusion Index',
    probability: 80,
    source: 'Refinitiv / TRACE',
    lastUpdated: '7 feb 2026',
    description:
      'Profundidad real del mercado <50% del nivel 2019. Flash crashes micro >5 por trimestre.',
    weight: 12,
  },
  {
    id: 4,
    name: 'Shadow Banking Leverage',
    probability: 79,
    source: 'FSB / Fed Flow of Funds',
    lastUpdated: '31 dic 2025',
    description:
      'Shadow banking: ~$16.6T (62% PIB US). Basis trades en Treasuries con leverage >20:1.',
    weight: 11,
  },
  {
    id: 5,
    name: 'Narrative Desperation Index',
    probability: 77,
    source: 'FOMC Minutes (público)',
    lastUpdated: '29 ene 2026',
    description:
      'Frecuencia "soft landing", "resilient" >3x promedio histórico 2015-2019. SN(t) crítico.',
    weight: 10,
  },
  {
    id: 6,
    name: 'Repo Market Fragility',
    probability: 75,
    source: 'Fed H.4.1 / FOMC Dec 2025',
    lastUpdated: '7 feb 2026',
    description:
      'Pico SRF $29.4B oct 2025 (mayor desde dot-com). Límite agregado $500B eliminado dic 2025. Backstop institucionalizado sin techo.',
    weight: 10,
  },
  {
    id: 7,
    name: 'Geopolitical Fragmentation',
    probability: 73,
    source: 'KOF Globalisation Index',
    lastUpdated: '31 dic 2025',
    description:
      'Friend-shoring acelerado. Controles semiconductores expandidos. Coordinación pre-2008 inalcanzable.',
    weight: 8,
  },
  {
    id: 8,
    name: 'Cross-Asset Correlation Breakdown',
    probability: 71,
    source: 'Bloomberg',
    lastUpdated: '7 feb 2026',
    description:
      'PCA: PC1 explica >74% varianza cross-asset. Bonos/acciones correlación positiva. Diversificación rota.',
    weight: 8,
  },
  {
    id: 9,
    name: 'Colateral Velocity Collapse',
    probability: 68,
    source: 'FSB (anual)',
    lastUpdated: '31 dic 2025',
    description:
      'Ratio rehipotecación: 1.8 (vs 3.0 en 2007). Acaparamiento de HQLA. Precaución sistémica invisible.',
    weight: 7,
  },
  {
    id: 10,
    name: 'Term Premium Reversal Risk',
    probability: 63,
    source: 'NY Fed ACM model',
    lastUpdated: 'Ene 2026',
    description:
      'ACM 10Y: 0.59% ene 2026. Reversión desde -1.3% jul 2020. Pérdidas latentes HTM >$500B agregados.',
    weight: 7,
  },
];

// ─── PHASE SPACE DATA ───────────────────────────────────────────
export const phaseTrajectory: PhasePoint[] = [
  { d: 0.52, v: 0.08, month: 'Ago 2025' },
  { d: 0.58, v: 0.14, month: 'Sep 2025' },
  { d: 0.62, v: 0.18, month: 'Oct 2025' },
  { d: 0.67, v: 0.22, month: 'Nov 2025' },
  { d: 0.72, v: 0.26, month: 'Dic 2025' },
  { d: 0.75, v: 0.28, month: 'Ene 2026' },
  { d: 0.78, v: 0.31, month: 'Feb 2026', label: 'ACTUAL' },
];

export const currentPhasePoint: PhasePoint = { d: 0.78, v: 0.31 };

// ─── PROBABILITY TIMELINE ───────────────────────────────────────
export const probabilityTimeline: ProbabilityDataPoint[] = [
  { month: 3, label: '3m', pS2Plus: 73.9, pS3Plus: 52.8 },
  { month: 6, label: '6m', pS2Plus: 65.2, pS3Plus: 49.5 },
  { month: 9, label: '9m', pS2Plus: 62.5, pS3Plus: 48.7 },
  { month: 12, label: '12m', pS2Plus: 62.7, pS3Plus: 50.1 },
  { month: 18, label: '18m', pS2Plus: 65.4, pS3Plus: 54.4 },
  { month: 24, label: '24m', pS2Plus: 68.8, pS3Plus: 59.1 },
];

// ─── CRITICAL WINDOW ────────────────────────────────────────────
export const convergenceEvents: ConvergenceEvent[] = [
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
    description: 'Centro estadístico T_med · Modelo Markov',
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
export const pnrConditions: PNRCondition[] = [
  {
    label: 'P(S3+) > 50%',
    threshold: '> 50%',
    current: '52.8% a 3m',
    status: 'THRESHOLD',
    icon: '⚠',
  },
  {
    label: 'O(t) > 0.80',
    threshold: '> 0.80',
    current: '0.78 actual',
    status: 'APPROACHING',
    icon: '🔴',
  },
  {
    label: 'Micro-fisuras críticas ≥ 2',
    threshold: '≥ 2',
    current: '3 activas',
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

export const pnrProgress = 78;

// ─── MICRO-FISSURES ─────────────────────────────────────────────
export const microFissures: MicroFissure[] = [
  {
    name: 'CRE Collapse',
    severity: 'CRITICAL',
    contagionProbability: 78,
    description:
      'Oficinas vacancy 26% nacional. CMBS delinquencies 8%. REITs suspendiendo redemptions.',
  },
  {
    name: 'Leveraged Loans',
    severity: 'HIGH',
    contagionProbability: 70,
    description:
      'Defaults >3% anual. CLO AAA spreads +50bps. $1.4T outstanding interconectado.',
  },
  {
    name: 'Regional Banks',
    severity: 'HIGH',
    contagionProbability: 65,
    description:
      'Pérdidas no realizadas HTM >$500B. Depósitos no asegurados en fuga continua.',
  },
  {
    name: 'Auto Loan Delinquencies',
    severity: 'MEDIUM_HIGH',
    contagionProbability: 58,
    description:
      'Subprime auto delinquency >7% (récord). 60+ días mora: >6.5%. Repossessions +25% YoY.',
  },
  {
    name: 'Credit Card Charge-offs',
    severity: 'MEDIUM',
    contagionProbability: 52,
    description:
      'Charge-off rates >4.5% (vs 3.0% histórico). Deuda tarjetas >$1.1T récord.',
  },
  {
    name: 'Crypto Contagion',
    severity: 'MEDIUM_HIGH',
    contagionProbability: 63,
    description:
      'ETF crypto = exposición institucional. Correlación BTC-NDX >0.85. Loop sistémico.',
  },
  {
    name: 'Sovereign Debt EM',
    severity: 'HIGH',
    contagionProbability: 55,
    description:
      'ARG, PAK, EGY, LKA en reestructuración. Deuda global $318.4T récord. China $13T+ local.',
  },
];

// ─── COMPARATOR PROTOCOL ────────────────────────────────────────
export const comparatorMetrics: ComparatorMetric[] = [
  { name: 'α_t', value: '0.776', change: '↑ desde 0.75', direction: 'up' },
  {
    name: 'T_med',
    value: '3.1m',
    change: '↓ desde 3.5m',
    direction: 'down',
  },
  {
    name: 'T_mean',
    value: '4.5m',
    change: 'estable',
    direction: 'stable',
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
