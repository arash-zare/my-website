import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/i18n';

interface LanguageSwitcherProps {
  /** Pass a class name to adapt the button's color to light/dark navbars. */
  className?: string;
  /** Render a compact icon-only version for tight spaces (e.g. mobile menu). */
  compact?: boolean;
}

const LanguageSwitcher = ({ className = '', compact = false }: LanguageSwitcherProps) => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Switch to Persian' : 'Switch to English'}
      className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:scale-105 ${className}`}
    >
      <Languages size={16} />
      {!compact && <span>{t.nav.langSwitchLabel}</span>}
    </button>
  );
};

export default LanguageSwitcher;
