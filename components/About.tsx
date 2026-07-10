import { GraduationCap } from 'lucide-react';
import type { Dictionary } from '@/lib/i18n';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function About({ t }: { t: Dictionary }) {
  return (
    <section id="about" className="shell py-20 sm:py-28">
      <SectionHeader
        label={t.sections.aboutLabel}
        title={t.about.heading}
      />

      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-8" delay={80}>
          <p className="text-lg leading-relaxed text-subink">
            {t.about.body}
          </p>
        </Reveal>

        <Reveal className="md:col-span-4" delay={160}>
          <div className="rounded-lg border border-hairline bg-surface p-5">
            <div className="flex items-center gap-2">
              <GraduationCap size={16} className="text-accent" aria-hidden />
              <span className="spec-key">{t.about.educationLabel}</span>
            </div>
            <p className="mt-3 font-display text-base font-semibold leading-snug text-ink">
              {t.about.education}
            </p>
            <p className="mt-1 text-sm text-subink">{t.about.educationOrg}</p>
            <p className="mt-3 font-mono text-xs text-subink">
              {t.about.educationYears}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
