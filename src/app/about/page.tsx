import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About · Semantic Field Science',
  description:
    'We didn\'t start with a theory. We started with an anomaly. Origin, products, and theoretical framework of the Human Semantic Field.',
  alternates: {
    canonical: 'https://www.semanticfieldscience.org/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
