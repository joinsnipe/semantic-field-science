import type { Metadata } from 'next';
import HeroMetrics from '@/components/observatory/HeroMetrics';
import SystemStateBar from '@/components/observatory/SystemStateBar';
import IndicatorGrid from '@/components/observatory/IndicatorGrid';
import ChartsRow from '@/components/observatory/ChartsRow';
import MiddleRow from '@/components/observatory/MiddleRow';
import BottomRow from '@/components/observatory/BottomRow';

export const metadata: Metadata = {
  title: 'Observatorio de Fragilidad Sistémica Global 2026 · SFS',
  description:
    'Monitor cuantitativo de riesgo sistémico global. Modelo Markov + Monte Carlo n=10.000. P(crisis 12m)=72.7%. 10 indicadores no convencionales. Actualización mensual.',
  keywords: [
    'riesgo sistémico 2026',
    'burbuja financiera 2026',
    'fragilidad sistémica',
    'modelo Markov',
    'systemic risk 2026',
    'synthetic bubble',
    'global financial fragility',
    'non-conventional indicators',
  ],
  openGraph: {
    title: '¿Cuándo explota la burbuja? Un modelo lo mide.',
    description:
      'α=0.776 · Estado S1′ · T_med=3.1 meses. El sistema no está estable: está contenido artificialmente.',
    type: 'website',
    url: 'https://www.semanticfieldscience.org/observatory',
    siteName: 'Semantic Field Science',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Systemic Fragility Observatory · SFS',
    description:
      'α=0.776 · P(crisis 12m)=72.7% · 10 indicadores no convencionales',
  },
  alternates: {
    canonical: 'https://www.semanticfieldscience.org/observatory',
    languages: {
      es: 'https://www.semanticfieldscience.org/observatory',
      en: 'https://www.semanticfieldscience.org/en/observatory',
    },
  },
};

export default function ObservatoryPage() {
  return (
    <>
      <HeroMetrics />
      <SystemStateBar />
      <IndicatorGrid />
      <ChartsRow />
      <MiddleRow />
      <BottomRow />
    </>
  );
}
