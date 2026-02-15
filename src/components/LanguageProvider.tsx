'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Locale } from '@/lib/translations';

type LangContextType = {
  locale: Locale;
  toggle: () => void;
  t: (key: string) => string;
};

const LangContext = createContext<LangContextType>({
  locale: 'en',
  toggle: () => {},
  t: (key: string) => key,
});

export function useLang() {
  return useContext(LangContext);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    // Detect browser language on first visit
    const saved = localStorage.getItem('sfs-lang') as Locale | null;
    if (saved && (saved === 'en' || saved === 'es')) {
      setLocale(saved);
    } else {
      const browser = navigator.language.slice(0, 2);
      setLocale(browser === 'es' ? 'es' : 'en');
    }
  }, []);

  function toggle() {
    const next = locale === 'en' ? 'es' : 'en';
    setLocale(next);
    localStorage.setItem('sfs-lang', next);
  }

  function t(key: string): string {
    return translations[locale][key] || translations['en'][key] || key;
  }

  return (
    <LangContext.Provider value={{ locale, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function LangToggle() {
  const { locale, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      className="text-[10px] font-mono px-2 py-1 rounded border border-gray-200 text-gray-500 hover:border-[#6d4aff]/40 hover:text-[#6d4aff] transition-colors"
      aria-label="Switch language"
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </button>
  );
}
