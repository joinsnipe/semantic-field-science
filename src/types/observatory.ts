// Core system state types
export type SystemStateId = "S0" | "S1" | "S1p" | "S2" | "S3" | "S4" | "S5";

export interface SystemState {
  id: SystemStateId;
  name: string;
  shortName: string;
  description: string;
  isActive: boolean;
  isPast: boolean;
}

// Indicator types
export type SeverityLevel =
  | "LOW"
  | "MEDIUM"
  | "MEDIUM_HIGH"
  | "HIGH"
  | "CRITICAL";

export interface Indicator {
  id: number;
  name: string;
  probability: number; // 0-100
  source: string;
  lastUpdated: string;
  description: string;
  weight: number; // percentage weight
}

// Phase space data point
export interface PhasePoint {
  d: number; // D(t) divergence
  v: number; // V(t) velocity
  label?: string;
  month?: string;
}

// Probability timeline
export interface ProbabilityDataPoint {
  month: number;
  label: string;
  pS2Plus: number;
  pS3Plus: number;
}

// Critical window event
export interface ConvergenceEvent {
  date: string;
  description: string;
}

export interface HistoricalComparison {
  year: number;
  label: string;
  event: string;
  days: number;
}

// Point of no return
export interface PNRCondition {
  label: string;
  threshold: string;
  current: string;
  status: "CONFIRMED" | "THRESHOLD" | "APPROACHING" | "EXCEEDED";
  icon: string;
}

// Micro-fissure
export interface MicroFissure {
  name: string;
  severity: SeverityLevel;
  contagionProbability: number;
  description: string;
}

// Comparator protocol
export interface ComparatorMetric {
  name: string;
  value: string;
  change: string;
  direction: "up" | "down" | "stable";
}

// Hero metric
export interface HeroMetric {
  value: string;
  label: string;
  sublabel: string;
  badge?: string;
  badgeColor?: string;
  tooltip: string;
}
