'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useLang, LangToggle } from '@/components/LanguageProvider';

const navLinks = [
  { href: '/observatory', label: 'Dashboard', icon: '◉' },
  { href: '/observatory/methodology', label: 'Methodology', icon: '◫' },
  { href: '/observatory/indicators', label: 'Indicators', icon: '◨' },
  { href: '/observatory/casestudy', label: 'Case Study', icon: '◧' },
];

function useSidebarMetrics() {
  const { locale } = useLang();
  const en = locale === 'en';
  return [
    { label: 'α', value: '0.776', status: 'critical' },
    { label: en ? 'State' : 'Estado', value: "S1'", status: 'critical' },
    { label: 'T_med', value: '3.1m', status: 'warning' },
    { label: 'P(S2+ 12m)', value: '72.7%', status: 'critical' },
    { label: 'PNR', value: '78%', status: 'warning' },
  ];
}

function StatusDot({ status }: { status: string }) {
  if (status === 'critical') return <div className="w-1.5 h-1.5 rounded-full bg-obs-red" />;
  if (status === 'warning') return <div className="w-1.5 h-1.5 rounded-full bg-[#f4a261]" />;
  return <div className="w-1.5 h-1.5 rounded-full bg-[#2a9d8f]" />;
}

export default function ObservatoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { locale } = useLang();
  const en = locale === 'en';
  const sidebarMetrics = useSidebarMetrics();

  return (
    <div className="min-h-screen bg-obs-bg flex">
      {/* Sidebar — fixed, desktop only */}
      <aside className="hidden lg:flex flex-col w-56 flex-shrink-0 border-r border-obs-border bg-obs-bg fixed top-0 left-0 bottom-0 z-40">
        {/* Logo area */}
        <div className="px-4 py-4 border-b border-obs-border">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">SFS</span>
            <span className="text-xs text-obs-text-secondary/40">Observatory</span>
          </Link>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  flex items-center gap-2.5 px-3 py-2 rounded-md text-xs transition-all duration-200
                  ${isActive
                    ? 'text-white bg-white/8'
                    : 'text-obs-text-secondary/50 hover:text-white hover:bg-white/4'
                  }
                `}
              >
                <span className="text-[10px] opacity-60">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Key metrics panel */}
        <div className="px-3 py-4 border-t border-obs-border">
          <div className="flex items-center gap-2 px-3 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-obs-red animate-pulse-live" />
            <span className="text-[9px] font-mono text-obs-text-secondary/40 uppercase tracking-wider">
              Live · Feb 2026
            </span>
          </div>

          <div className="space-y-1.5">
            {sidebarMetrics.map((m) => (
              <div
                key={m.label}
                className="flex items-center justify-between px-3 py-1.5 rounded text-xs"
              >
                <span className="text-obs-text-secondary/40 font-mono">{m.label}</span>
                <div className="flex items-center gap-1.5">
                  <StatusDot status={m.status} />
                  <span className="font-mono font-semibold text-white">{m.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lang + Footer */}
        <div className="px-4 py-3 border-t border-obs-border flex items-center justify-between">
          <Link
            href="/"
            className="text-[10px] text-obs-text-secondary/30 hover:text-obs-text-secondary/60 transition-colors"
          >
            ← MCSH Framework
          </Link>
          <LangToggle />
        </div>
      </aside>

      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-obs-bg/95 backdrop-blur-xl border-b border-obs-border">
        <div className="flex items-center justify-between px-4 h-12">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">SFS</span>
            <span className="text-xs text-obs-text-secondary/40">Observatory</span>
          </Link>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-obs-red animate-pulse-live" />
            <span className="text-[9px] font-mono text-obs-text-secondary/40">LIVE</span>
          </motion.div>
        </div>

        {/* Mobile nav */}
        <div className="flex items-center gap-1 px-3 py-1.5 overflow-x-auto border-t border-obs-border/50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-3 py-1 rounded text-[11px] whitespace-nowrap transition-all
                  ${isActive
                    ? 'text-white bg-white/8'
                    : 'text-obs-text-secondary/50'
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 lg:ml-56">
        <main className="pt-24 lg:pt-0">{children}</main>

        {/* Footer */}
        <footer className="border-t border-obs-border py-10 px-6">
          <div className="max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-xs font-semibold text-white mb-1">Rubén Abella</p>
                <p className="text-[10px] text-obs-text-secondary/40">Semantic Field Science</p>
                <a
                  href="https://www.linkedin.com/in/rub%C3%A9nabella/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-obs-blue hover:text-white transition-colors mt-1 inline-block"
                >
                  LinkedIn →
                </a>
              </div>

              <div>
                <p className="text-[9px] font-mono text-obs-text-secondary/30 uppercase tracking-wider mb-2">
                  {en ? 'Links' : 'Enlaces'}
                </p>
                <div className="flex flex-col gap-1.5">
                  <Link href="/" className="text-xs text-obs-text-secondary/50 hover:text-white transition-colors">
                    MCSH Framework
                  </Link>
                  <Link href="/observatory/casestudy" className="text-xs text-obs-text-secondary/50 hover:text-white transition-colors">
                    {en ? 'Case Study' : 'Caso de estudio'}
                  </Link>
                  <Link href="/observatory/methodology" className="text-xs text-obs-text-secondary/50 hover:text-white transition-colors">
                    {en ? 'Methodology' : 'Metodología'}
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-[10px] text-obs-text-secondary/30 leading-relaxed mb-2">
                  {en
                    ? 'Public case study. Not financial advice. May be shared, cited, and debated freely.'
                    : 'Caso de estudio público. No es consejo financiero. Puede ser compartido, citado y debatido libremente.'}
                </p>
                <p className="text-[10px] text-obs-text-secondary/20 font-mono">
                  © 2026 Semantic Field Science
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
