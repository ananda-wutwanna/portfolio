import Reveal from './Reveal';

// Section header: a small monospace label, a display heading, and a
// full-width hairline rule.
export default function SectionHeader({
  label,
  title,
  annotation,
}: {
  label: string;
  title: string;
  annotation?: string;
}) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <div className="flex items-baseline justify-between gap-4">
        <span className="label">{label}</span>
        {annotation && (
          <span className="hidden font-mono text-[11px] text-subink sm:inline">
            {annotation}
          </span>
        )}
      </div>
      <div className="mt-3 h-px w-full bg-hairline" />
      <h2 className="mt-6 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl md:text-[2.1rem]">
        {title}
      </h2>
    </Reveal>
  );
}
