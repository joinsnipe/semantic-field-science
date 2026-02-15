import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';
import { VisitTracker } from '@/components/VisitTracker';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Semantic Field Science · Human Semantic Field Model',
    template: '%s · Semantic Field Science',
  },
  description:
    'Foundational conceptual framework for human meaning dynamics (MCSH). Systemic Fragility Observatory, SPE Audit, SPE Trace. Author: Rubén Abella.',
  metadataBase: new URL('https://www.semanticfieldscience.org'),
  keywords: [
    'Semantic Field Science',
    'MCSH',
    'Modelo del Campo Semántico Humano',
    'Human Semantic Field Model',
    'divergencia semántica',
    'semantic divergence',
    'fragilidad sistémica',
    'systemic fragility',
    'SPE Audit',
    'SPE Trace',
    'AI integrity',
    'narrative reality gap',
    'Rubén Abella',
  ],
  authors: [{ name: 'Rubén Abella', url: 'https://www.linkedin.com/in/rubénabella/' }],
  creator: 'Rubén Abella',
  publisher: 'Semantic Field Science',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_ES',
    url: 'https://www.semanticfieldscience.org',
    siteName: 'Semantic Field Science',
    title: 'Semantic Field Science · Meaning moves. Now it can be measured.',
    description:
      'Foundational conceptual framework (MCSH): the distance between what a system says it is and what it actually is. Live Systemic Fragility Observatory.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Semantic Field Science — MCSH',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semantic Field Science · MCSH',
    description:
      'The distance between narrative and reality is not a philosophical problem. It is a technical problem with a solution.',
    images: ['/og-image.png'],
    creator: '@semanticfield',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.semanticfieldscience.org',
    languages: {
      'en': 'https://www.semanticfieldscience.org',
      'es': 'https://www.semanticfieldscience.org',
      'x-default': 'https://www.semanticfieldscience.org',
    },
  },
  verification: {
    // Add your verification codes here when ready
    // google: 'your-google-verification-code',
  },
};

/* ─── Schema.org JSON-LD ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.semanticfieldscience.org/#website',
      url: 'https://www.semanticfieldscience.org',
      name: 'Semantic Field Science',
      description:
        'Foundational conceptual framework for the dynamics of human meaning (MCSH). Measuring the distance between narrative and reality.',
      inLanguage: ['es', 'en'],
      publisher: { '@id': 'https://www.semanticfieldscience.org/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.semanticfieldscience.org/#organization',
      name: 'Semantic Field Science',
      url: 'https://www.semanticfieldscience.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.semanticfieldscience.org/logo.svg',
      },
      founder: {
        '@type': 'Person',
        name: 'Rubén Abella',
        url: 'https://www.linkedin.com/in/rubénabella/',
        jobTitle: 'Independent Researcher — Semantic Dynamics, AI Integrity, Systemic Fragility',
      },
      sameAs: [
        'https://www.linkedin.com/in/rubénabella/',
        'https://speaudit.com',
        'https://spetrace.com',
      ],
    },
    {
      '@type': 'ScholarlyArticle',
      '@id': 'https://www.semanticfieldscience.org/#foundational-document',
      name: 'Modelo del Campo Semántico Humano (MCSH) — Documento Fundacional',
      author: {
        '@type': 'Person',
        name: 'Rubén Abella',
      },
      datePublished: '2026-02-15',
      description:
        'Foundational framework document for the Human Semantic Field Model. Defines semantic fields, semantic dynamics, narrative tension, semantic authority, and human-AI interaction.',
      url: 'https://www.semanticfieldscience.org/docs/Documento_Fundacional_MCSH.pdf',
      inLanguage: 'es',
      publisher: { '@id': 'https://www.semanticfieldscience.org/#organization' },
    },
    {
      '@type': 'WebApplication',
      name: 'Systemic Fragility Observatory',
      url: 'https://www.semanticfieldscience.org/observatory',
      description:
        'Real-time systemic fragility monitor. Markov chain model (7 states), Monte Carlo simulation (n=10,000), 10 non-conventional indicators. Public access.',
      applicationCategory: 'Risk Analysis',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      creator: { '@id': 'https://www.semanticfieldscience.org/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es el MCSH?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un marco conceptual para observar la dinámica del significado: cómo se genera, se desplaza y se tensiona en contextos narrativos, sociales y técnicos.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Human Semantic Field Model?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A conceptual framework for observing meaning dynamics: how meaning is generated, displaced, and tensioned in narrative, social, and technical contexts.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué es el Systemic Fragility Observatory?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es la aplicación del MCSH al riesgo sistémico global. Un monitor público con modelo Markov, Monte Carlo y 10 indicadores no convencionales.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué son SPE Audit y SPE Trace?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Son las dos aplicaciones comerciales del MCSH. SPE Audit certifica la integridad temporal de cualquier archivo — outputs de IA, documentos corporativos, contratos — a un solo clic (speaudit.com). SPE Trace mide la realidad semántica de organizaciones (spetrace.com).',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>
          <VisitTracker />
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
