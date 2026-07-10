'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';

// Two hard-wired segments (th / en) with the active one highlighted. Persists
// the choice so the root redirect and future visits honor it.
export default function LangToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;
    try {
      window.localStorage.setItem('locale', next);
    } catch {
      /* ignore storage failures (private mode) */
    }
    // pathname is base-path-stripped, e.g. "/en" or "/en/". Swap first segment.
    const segments = (pathname || `/${locale}`).split('/');
    segments[1] = next;
    const target = segments.join('/') || `/${next}`;
    router.push(target);
  }

  return (
    <div
      className="flex items-center rounded-full border border-hairline bg-surface/70 p-0.5 font-mono text-[11px] uppercase"
      role="group"
      aria-label="Language"
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchTo(code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 tracking-wider transition-colors ${
              active
                ? 'bg-accent text-paper'
                : 'text-subink hover:text-ink'
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
