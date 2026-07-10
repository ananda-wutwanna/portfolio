'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X, FileDown } from 'lucide-react';
import { withBase, type Dictionary, type Locale } from '@/lib/i18n';
import { site } from '@/data/site';
import LangToggle from './LangToggle';
import ThemeToggle from './ThemeToggle';

export default function Navbar({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#experience', label: t.nav.experience },
    { href: '#contact', label: t.nav.contact },
  ];

  const resumeHref = withBase(site.resume[locale]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? 'border-hairline bg-paper/85 backdrop-blur-md'
          : 'border-transparent bg-paper/40 backdrop-blur-sm'
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between gap-4">
        {/* Brand — datasheet part number */}
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label={site.name[locale]}
        >
          <Image
            src="/profile.jpg"
            alt={site.name[locale]}
            width={36}
            height={36}
            priority
            className="h-9 w-9 rounded-full object-cover ring-1 ring-accent/50 shadow-[0_0_16px_-3px_rgba(53,208,127,0.6)]"
          />
          <span className="hidden font-sans text-sm font-semibold text-ink sm:inline">
            {site.name[locale]}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 text-sm text-subink transition-colors hover:text-ink after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <LangToggle locale={locale} />
          <a
            href={resumeHref}
            download
            className="hidden items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-paper transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <FileDown size={14} aria-hidden />
            {t.nav.resume}
          </a>
          <button
            type="button"
            className="inline-grid h-9 w-9 place-items-center rounded-md border border-hairline bg-surface text-ink md:hidden"
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="border-t border-hairline bg-paper md:hidden">
          <ul className="shell flex flex-col py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-hairline/70 py-3 text-base text-ink"
                >
                  {link.label}
                  <span className="font-mono text-[11px] text-subink">→</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={resumeHref}
                download
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-paper"
              >
                <FileDown size={16} aria-hidden />
                {t.nav.resume}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
