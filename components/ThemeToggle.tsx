'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';

// Toggles the `data-theme` attribute on <html> and remembers the choice.
// The initial attribute is set before paint by the inline script in the layout.
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current =
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'dark'
        : 'light';
    setTheme(current);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      window.localStorage.setItem('theme', next);
    } catch {
      /* ignore storage failures */
    }
    setTheme(next);
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-grid h-9 w-9 place-items-center rounded-full border border-hairline bg-surface/70 text-subink transition-colors hover:border-accent hover:text-ink"
    >
      {/* Render nothing distinct until mounted to avoid a mismatched icon flash. */}
      {mounted && isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
