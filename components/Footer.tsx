import { Mail } from 'lucide-react';
import type { Dictionary, Locale } from '@/lib/i18n';
import { site } from '@/data/site';

export default function Footer({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  const name = site.name[locale];

  return (
    <footer className="border-t border-hairline">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-ink">{name}</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-label text-subink">
            {t.hero.role}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            aria-label={t.contact.emailLabel}
            className="text-subink transition-colors hover:text-accent"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="shell flex flex-col gap-1 border-t border-hairline py-5 font-mono text-[11px] text-subink sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {name}. {t.footer.rights}
        </span>
      </div>
    </footer>
  );
}
