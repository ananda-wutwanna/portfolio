import type { Dictionary, Locale } from '@/lib/i18n';
import { experience } from '@/data/experience';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Experience({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  return (
    <section id="experience" className="shell py-20 sm:py-28">
      <SectionHeader
        label={t.sections.experienceLabel}
        title={t.experience.heading}
      />

      <ol className="relative">
        {/* Spine */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline sm:left-[calc(9rem+7px)]"
          aria-hidden
        />

        {experience.map((entry, i) => (
          <Reveal
            key={entry.id}
            as="li"
            delay={i * 60}
            className="relative flex flex-col gap-1 pb-12 pl-8 last:pb-0 sm:flex-row sm:gap-8 sm:pl-0"
          >
            {/* Period rail (desktop) */}
            <div className="hidden w-36 shrink-0 pt-0.5 text-right sm:block">
              <span className="font-mono text-xs text-subink">
                {entry.period[locale]}
              </span>
            </div>

            {/* Node */}
            <span
              className={`absolute left-0 top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border-2 sm:left-[calc(9rem+1px)] ${
                entry.current
                  ? 'border-accent bg-accent'
                  : 'border-hairline bg-surface'
              }`}
              aria-hidden
            >
              {entry.current && (
                <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-accent/40" />
              )}
            </span>

            <div className="sm:pl-8">
              <h3 className="font-display text-lg font-semibold text-ink">
                {entry.org[locale]}
              </h3>
              <span className="font-mono text-xs text-subink sm:hidden">
                {entry.period[locale]}
              </span>

              <div className="mt-4 space-y-4">
                {entry.roles.map((role, ri) => (
                  <div
                    key={ri}
                    className="border-l border-hairline pl-4"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                      <span className="text-sm font-medium text-ink">
                        {role.title[locale]}
                      </span>
                      <span className="font-mono text-[11px] text-subink">
                        {role.period[locale]}
                      </span>
                    </div>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-subink">
                      {role.detail[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
