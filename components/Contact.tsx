import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';
import type { Dictionary, Locale } from '@/lib/i18n';
import { site } from '@/data/site';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Contact({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  const rows = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: site.phone,
      href: `tel:${site.phoneHref}`,
    },
    {
      icon: MapPin,
      label: t.contact.locationLabel,
      value: t.contact.location,
    },
    {
      icon: Linkedin,
      label: t.contact.linkedinLabel,
      value: site.linkedinHandle,
      href: site.linkedin,
      external: true,
    },
  ];

  return (
    <section id="contact" className="shell py-20 sm:py-28">
      <SectionHeader
        label={t.sections.contactLabel}
        title={t.contact.heading}
      />

      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-5" delay={60}>
          <p className="text-lg leading-relaxed text-subink">
            {t.contact.body}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} aria-hidden />
            {t.contact.emailCta}
          </a>
        </Reveal>

        <Reveal className="md:col-span-7" delay={140}>
          <dl className="overflow-hidden rounded-lg border border-hairline bg-surface">
            {rows.map(({ icon: Icon, label, value, href, external }) => {
              const content = (
                <>
                  <dt className="flex items-center gap-2.5">
                    <Icon size={15} className="text-accent" aria-hidden />
                    <span className="spec-key">{label}</span>
                  </dt>
                  <dd className="flex items-center gap-1.5 text-sm text-ink">
                    {value}
                    {href && (
                      <ArrowUpRight
                        size={14}
                        className="text-subink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                        aria-hidden
                      />
                    )}
                  </dd>
                </>
              );

              const rowClass =
                'group flex items-center justify-between gap-4 border-t border-hairline px-5 py-4 first:border-t-0';

              return href ? (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                  className={`${rowClass} transition-colors hover:bg-paper/70`}
                >
                  {content}
                </a>
              ) : (
                <div key={label} className={rowClass}>
                  {content}
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
