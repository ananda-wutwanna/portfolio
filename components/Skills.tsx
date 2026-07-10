import type { Dictionary, Locale } from '@/lib/i18n';
import { skillGroups } from '@/data/skills';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Skills({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  return (
    <section id="skills" className="shell py-20 sm:py-28">
      <SectionHeader
        label={t.sections.skillsLabel}
        title={t.skills.heading}
      />

      <div className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.id}
            delay={(i % 4) * 60}
            className="flex flex-col bg-surface p-5"
          >
            <span className="spec-key text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-2 font-display text-[15px] font-semibold leading-snug text-ink">
              {group.title[locale]}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded border border-hairline bg-paper px-2 py-1 font-mono text-[11px] text-subink"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
