import type { Metadata } from 'next';
import PrivacyContent from './PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy · Semantic Field Science',
  description: 'How we handle your personal data: purpose, legal basis, retention, rights, and security (GDPR / LOPDGDD).',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
