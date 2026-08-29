import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Language, Translation } from './types';
import { en } from './translations/en';
import { fa } from './translations/fa';

const translations: Record<Language, Translation> = { en, fa };

const STORAGE_KEY = 'preferred-language';

interface LanguageContextValue {
  /** Currently active language code. */
  language: Language;
  /** Text direction that matches the active language. */
  dir: 'ltr' | 'rtl';
  /** All translated strings for the active language. */
  t: Translation;
  /** Switch to a specific language. */
  setLanguage: (language: Language) => void;
  /** Toggle between the two supported languages. */
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function isLanguage(value: string | null): value is Language {
  return value === 'en' || value === 'fa';
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLanguage(stored)) {
    return stored;
  }

  // Fall back to the visitor's browser language so Persian-speaking
  // visitors land on the Persian version automatically.
  const browserLanguage = window.navigator.language?.toLowerCase() ?? '';
  if (browserLanguage.startsWith('fa') || browserLanguage.startsWith('ir')) {
    return 'fa';
  }

  return 'en';
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const dir = language === 'fa' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    document.documentElement.classList.toggle('font-fa', language === 'fa');
    document.documentElement.classList.toggle('font-en', language === 'en');

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage errors (e.g. private browsing mode).
    }
  }, [language, dir]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      dir,
      t: translations[language],
      setLanguage: (next: Language) => setLanguageState(next),
      toggleLanguage: () => setLanguageState((prev) => (prev === 'en' ? 'fa' : 'en')),
    }),
    [language, dir]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
