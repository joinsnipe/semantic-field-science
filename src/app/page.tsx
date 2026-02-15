import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Meaning moves. Now it can be measured. · Semantic Field Science',
  description:
    'Human Semantic Field Model (MCSH). A framework for observing the distance between what is said and what is. Between narrative and reality.',
  keywords: [
    'human semantic field', 'MCSH', 'semantic field model', 'semantic divergence',
    'systemic fragility', 'systemic risk 2026', 'SPE Audit', 'SPE Trace', 'Rubén Abella',
  ],
  openGraph: {
    title: 'Meaning moves. Now it can be measured.',
    description: 'Human Semantic Field Model (MCSH). Foundational conceptual framework.',
    type: 'website',
    url: 'https://www.semanticfieldscience.org',
    siteName: 'Semantic Field Science',
  },
  alternates: { canonical: 'https://www.semanticfieldscience.org' },
};

export default function Home() {
  return <HomeContent />;
}
