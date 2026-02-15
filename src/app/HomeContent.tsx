'use client';

import Link from 'next/link';
import { useLang, LangToggle } from '@/components/LanguageProvider';
import { NewsletterForm, DownloadCard } from '@/components/SheetIntegration';

export default function HomeContent() {
  const { t } = useLang();

  const concepts = [
    { title: t('c1.title'), text: t('c1.text') },
    { title: t('c2.title'), text: t('c2.text') },
    { title: t('c3.title'), text: t('c3.text') },
    { title: t('c4.title'), text: t('c4.text') },
    { title: t('c5.title'), text: t('c5.text') },
    { title: t('c6.title'), text: t('c6.text') },
  ];

  const ecosystemCards = [
    {
      badge: t('eco1.badge'),
      badgeStyle: 'bg-[#0a0a0f] text-[#e63946] border-[#e63946]/30',
      title: t('eco1.title'),
      text: t('eco1.text'),
      cta: t('eco1.cta'),
      href: '/observatory',
      external: false,
      dark: true,
    },
    {
      badge: t('eco2.badge'),
      badgeStyle: 'bg-[#6d4aff]/8 text-[#6d4aff] border-[#6d4aff]/20',
      title: t('eco2.title'),
      text: t('eco2.text'),
      cta: t('eco2.cta'),
      href: 'https://speaudit.com',
      external: true,
      dark: false,
    },
    {
      badge: t('eco3.badge'),
      badgeStyle: 'bg-[#6d4aff]/8 text-[#6d4aff] border-[#6d4aff]/20',
      title: t('eco3.title'),
      text: t('eco3.text'),
      cta: t('eco3.cta'),
      href: 'https://spetrace.com',
      external: true,
      dark: false,
    },
  ];

  const faqItems = [
    { q: t('faq1.q'), a: t('faq1.a') },
    { q: t('faq2.q'), a: t('faq2.a') },
    { q: t('faq3.q'), a: t('faq3.a') },
    { q: t('faq4.q'), a: t('faq4.a') },
    { q: t('faq5.q'), a: t('faq5.a') },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1a1a2e]">
      {/* ━━━ NAV ━━━ */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-bold text-[#1a1a2e]">SFS</Link>
            <span className="text-[10px] text-gray-400 hidden sm:inline">
              {t('nav.subtitle')}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/observatory" className="text-xs text-gray-500 hover:text-[#1a1a2e] transition-colors">
              Observatory
            </Link>
            <Link href="/about" className="text-xs text-gray-500 hover:text-[#1a1a2e] transition-colors">
              About
            </Link>
            <LangToggle />
          </div>
        </div>
      </nav>

      {/* ━━━ HERO ━━━ */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8f6ff] to-[#f0f4ff] -z-10" />
        <div className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full bg-[#6d4aff]/[0.03] blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-[#e63946]/[0.03] blur-3xl -z-10" />

        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black leading-[1.08] tracking-tight text-[#1a1a2e] mb-4">
            {t('hero.title1')}
            <br />
            <span className="bg-gradient-to-r from-[#6d4aff] to-[#1a1a2e] bg-clip-text text-transparent">{t('hero.title2')}</span>
          </h1>
          <p className="text-sm font-mono text-gray-400 mb-6 tracking-wider">
            {t('hero.model')}
          </p>
          <p className="text-xl text-gray-500 leading-relaxed max-w-xl mb-10">
            {t('hero.desc')}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#documents"
              className="px-6 py-3.5 bg-[#1a1a2e] text-white text-base font-medium rounded-lg hover:bg-[#2a2a4e] transition-all hover:shadow-lg hover:shadow-[#1a1a2e]/10 hover:-translate-y-0.5"
            >
              {t('hero.cta1')}
            </a>
            <a
              href="#subscribe"
              className="px-6 py-3.5 border border-gray-200 text-base text-gray-600 rounded-lg hover:border-[#6d4aff]/40 hover:text-[#6d4aff] transition-all"
            >
              {t('hero.cta2')}
            </a>
          </div>

          <Link
            href="/observatory"
            className="group flex items-center gap-4 px-5 py-4 bg-[#0a0a0f] rounded-xl border border-[#e63946]/20 hover:border-[#e63946]/40 transition-all max-w-lg hover:shadow-xl hover:shadow-[#e63946]/5"
          >
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#e63946] animate-pulse" />
              <span className="text-[10px] font-mono text-[#e63946] font-bold tracking-wider">LIVE</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#f1faee]">Systemic Fragility Observatory</p>
              <p className="text-xs font-mono text-[#a8dadc]/60 mt-0.5">
                α = 0.776 · {t('hero.obs.state')} S1′ · T_med = 3.1m
              </p>
            </div>
            <span className="text-xs text-[#a8dadc]/40 group-hover:text-[#f1faee] transition-colors flex-shrink-0">→</span>
          </Link>
        </div>
      </section>

      {/* ━━━ WHAT IS THE MCSH? ━━━ */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">{t('what.title')}</h2>
          <div className="space-y-5 text-lg text-gray-500 leading-relaxed">
            <p>
              {t('what.p1')} <strong className="text-[#1a1a2e]">{t('what.p1.bold')}</strong>{t('what.p1.end')}
            </p>
            <p>
              {t('what.p2.start')} <strong className="text-[#1a1a2e]">{t('what.p2.bold')}</strong>.
            </p>
            <p className="text-base text-gray-400">{t('what.p3')}</p>
          </div>
        </div>
      </section>

      {/* ━━━ WHY NOW? ━━━ */}
      <section className="py-20 px-6 bg-gray-50/60">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">{t('why.title')}</h2>
          <div className="space-y-5 text-lg text-gray-500 leading-relaxed">
            <p>{t('why.p1')}</p>
            <p>{t('why.p2')}</p>
            <p className="font-medium text-lg text-[#1a1a2e]">{t('why.p3')}</p>
          </div>
        </div>
      </section>

      {/* ━━━ CONCEPTUAL FOUNDATIONS ━━━ */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-3 text-center">{t('concepts.title')}</h2>
          <p className="text-base text-gray-400 text-center mb-10 max-w-lg mx-auto">{t('concepts.sub')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {concepts.map((c, i) => (
              <div key={c.title} className="group relative border border-gray-100 rounded-xl p-6 hover:border-[#6d4aff]/30 hover:shadow-md hover:shadow-[#6d4aff]/5 transition-all duration-300">
                <div className="absolute top-4 right-4 text-[40px] font-black text-gray-100/60 group-hover:text-[#6d4aff]/10 transition-colors leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ READING DOMAINS ━━━ */}
      <section className="py-20 px-6 bg-gray-50/60">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">{t('domains.title')}</h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-4">{t('domains.p1')}</p>
          <p className="text-base text-gray-400 italic">{t('domains.p2')}</p>
        </div>
      </section>

      {/* ━━━ THE MODEL IN ACTION ━━━ */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-2 text-center">{t('action.title')}</h2>
          <p className="text-base text-gray-400 text-center mb-10 max-w-md mx-auto">{t('action.sub')}</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {ecosystemCards.map((card) => {
              const cls = `group rounded-xl p-6 border transition-all block ${
                card.dark ? 'bg-[#0a0a0f] border-[#1c1c28] hover:border-[#333]' : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-sm'
              }`;
              const content = (
                <>
                  <span className={`inline-flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border mb-4 ${card.badgeStyle}`}>
                    {card.badge}
                  </span>
                  <h3 className={`text-lg font-bold mb-2 ${card.dark ? 'text-[#f1faee]' : 'text-[#1a1a2e]'}`}>{card.title}</h3>
                  <p className={`text-sm leading-relaxed mb-4 ${card.dark ? 'text-[#a8dadc]/60' : 'text-gray-500'}`}>{card.text}</p>
                  <span className={`text-sm font-medium group-hover:underline ${card.dark ? 'text-[#a8dadc]' : 'text-[#6d4aff]'}`}>{card.cta}</span>
                </>
              );
              return card.external ? (
                <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer" className={cls}>{content}</a>
              ) : (
                <Link key={card.title} href={card.href} className={cls}>{content}</Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ FOUNDATIONAL NOTE ━━━ */}
      <section className="py-20 px-6 bg-gray-50/60">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">{t('note.title')}</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            <strong className="text-[#1a1a2e]">{t('note.p1.bold')}</strong>{' '}{t('note.p1')}
          </p>
          <p className="text-lg text-gray-500 leading-relaxed mt-3">
            {t('note.p2.start')} <em>{t('note.p2.em1')}</em> {t('note.p2.and')} <em>{t('note.p2.em2')}</em>.
          </p>
        </div>
      </section>

      {/* ━━━ DOCUMENTS ━━━ */}
      <section id="documents" className="py-20 px-6 border-t border-gray-100 scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-3">{t('docs.title')}</h2>
          <p className="text-base text-gray-400 mb-10">{t('docs.sub')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <DownloadCard
              href="/docs/Documento_Fundacional_MCSH.pdf"
              icon="📄"
              title={t('docs.fund.title')}
              subtitle="MCSH v1.0 · PDF"
            />
            <DownloadCard
              href="/docs/Burbuja_Sintetica_Caso_Estudio.pdf"
              icon="📈"
              title={t('docs.case.title')}
              subtitle={t('docs.case.sub')}
              variant="red"
            />
          </div>
          <p className="text-xs text-gray-300 mt-4">
            {t('docs.also')} <a href="/docs/Burbuja_Sintetica_Caso_Estudio.md" download className="underline hover:text-gray-500 transition-colors">{t('docs.md')}</a>
          </p>
        </div>
      </section>

      {/* ━━━ HOW IT ALL BEGAN ━━━ */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f7ff] to-white -z-10" />
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8 text-center">{t('origin.title')}</h2>

          <div className="relative pl-8 border-l-2 border-[#6d4aff]/20 space-y-8">
            <div className="relative">
              <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-[#6d4aff]/20 border-2 border-[#6d4aff]" />
              <p className="text-xs font-mono text-[#6d4aff] mb-1">{t('origin.d1.date')}</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong className="text-[#1a1a2e]">Snipe</strong> {t('origin.d1.p1')}
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-[#6d4aff]/20 border-2 border-[#6d4aff]" />
              <p className="text-xs font-mono text-[#6d4aff] mb-1">{t('origin.d2.date')}</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('origin.d2.p1.start')} <strong className="text-[#1a1a2e]">{t('origin.d2.p1.bold1')}</strong> {t('origin.d2.p1.mid')} <strong className="text-[#1a1a2e]">{t('origin.d2.p1.bold2')}</strong>{t('origin.d2.p1.end')}
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-[#e63946]/20 border-2 border-[#e63946]" />
              <p className="text-xs font-mono text-[#e63946] mb-1">{t('origin.d3.label')}</p>
              <p className="text-lg text-gray-600 leading-relaxed">{t('origin.d3.text')}</p>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#6d4aff] pl-6 py-4 my-10 bg-[#6d4aff]/[0.03] rounded-r-lg">
            <p className="text-lg text-[#1a1a2e] font-medium italic leading-relaxed">{t('origin.quote')}</p>
          </blockquote>

          <p className="text-base text-gray-500 leading-relaxed mb-8 text-center">{t('origin.born')}</p>

          <div className="text-center">
            <Link href="/about" className="inline-flex items-center gap-2 text-base text-[#6d4aff] font-medium hover:underline">
              {t('origin.link')}
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ AUTHOR ━━━ */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6 text-center">{t('author.title')}</h2>
          <div className="max-w-lg mx-auto text-center">
            <p className="text-xl font-semibold text-[#1a1a2e] mb-1">Rubén Abella</p>
            <p className="text-base text-gray-500 leading-relaxed mb-3">{t('author.role')}</p>
            <p className="text-base text-gray-400 leading-relaxed mb-5">{t('author.bio')}</p>
            <div className="flex items-center justify-center gap-5">
              <a href="https://www.linkedin.com/in/rub%C3%A9nabella/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6d4aff] hover:underline">LinkedIn</a>
              <span className="text-gray-300">·</span>
              <a href="https://www.mentorday.es" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-[#1a1a2e] transition-colors">MentorDay</a>
              <span className="text-gray-300">·</span>
              <a href="mailto:contact@semanticfieldscience.org" className="text-sm text-gray-500 hover:text-[#1a1a2e] transition-colors">contact@semanticfieldscience.org</a>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ SUBSCRIBE ━━━ */}
      <section id="subscribe" className="py-20 px-6 bg-gray-50/60 scroll-mt-20">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-3">{t('sub.title')}</h2>
          <p className="text-base text-gray-400 mb-8">{t('sub.desc')}</p>
          <NewsletterForm />
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8 text-center">{t('faq.title')}</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <details key={idx} className="group border border-gray-100 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-[#1a1a2e]">{item.q}</span>
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-6 pb-4 pt-0">
                  <p className="text-base text-gray-500 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="border-t border-gray-100 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="/observatory" className="hover:text-[#1a1a2e] transition-colors">Observatory</Link>
            <a href="https://speaudit.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a2e] transition-colors">SPE Audit ↗</a>
            <a href="https://spetrace.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a2e] transition-colors">SPE Trace ↗</a>
            <Link href="/about" className="hover:text-[#1a1a2e] transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-[#1a1a2e] transition-colors">{t('footer.privacy')}</Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 text-[10px] text-gray-400">
            <a href="mailto:contact@semanticfieldscience.org" className="hover:text-[#1a1a2e] transition-colors">contact@semanticfieldscience.org</a>
            <span className="hidden sm:inline">·</span>
            <span>© 2026 Semantic Field Science · Rubén Abella</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
