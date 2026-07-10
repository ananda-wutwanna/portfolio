import { ArrowRight, FileDown, MapPin } from 'lucide-react';
import { withBase, type Dictionary, type Locale } from '@/lib/i18n';
import { site } from '@/data/site';
import SplineRobot from './SplineRobot';

export default function Hero({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  const name = site.name[locale];
  const resumeHref = withBase(site.resume[locale]);

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
    >
      {/* Ambient green glow */}
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />

      {/* Oversized watermark behind the robot */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        aria-hidden
      >
        <span className="ghost-text whitespace-nowrap font-display text-[24vw] font-bold leading-none">
          WUTWANNA
        </span>
      </div>

      {/* 3D robot — fills the hero, follows the cursor. Sits behind the copy.
          The canvas is centered and its edges are feathered with a radial mask
          so the scene's light backdrop dissolves into the dark page instead of
          showing as a hard grey rectangle. */}
      <div
        className="absolute inset-0 [-webkit-mask-image:radial-gradient(ellipse_70%_92%_at_54%_50%,#000_38%,transparent_74%)] [mask-image:radial-gradient(ellipse_70%_92%_at_54%_50%,#000_38%,transparent_74%)]"
        aria-hidden
      >
        <SplineRobot scene={site.splineScene} loadingLabel={t.hero.boot} />
      </div>

      {/* Scrims so copy stays legible over the scene. Stronger on small
          screens where the robot sits directly behind the text; lighter on
          desktop where the copy occupies the left column. */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-paper via-paper/90 to-paper/55 lg:via-paper/60 lg:to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper to-transparent lg:hidden"
        aria-hidden
      />

      {/* Foreground copy. pointer-events-none lets the robot track the cursor
          across the whole hero; interactive controls opt back in. */}
      <div className="shell pointer-events-none relative z-10 w-full py-10">
        <div className="max-w-xl">
          {/* Location */}
          <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-label text-subink">
            <MapPin size={12} aria-hidden />
            {t.hero.location}
          </div>

          <h1 className="mt-6 font-display text-[2.7rem] font-bold leading-[1.02] tracking-tight text-ink text-glow sm:text-6xl md:text-7xl">
            {name}
          </h1>

          <p className="mt-4 flex items-center gap-2 font-mono text-sm text-accent sm:text-base">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_1px_rgba(53,208,127,0.8)]" />
            {t.hero.role}
          </p>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-subink">
            {t.hero.tagline}
          </p>

          {/* CTAs */}
          <div className="pointer-events-auto mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-paper shadow-[0_0_24px_-4px_rgba(53,208,127,0.7)] transition-transform hover:-translate-y-0.5"
            >
              {t.hero.viewProjects}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
            <a
              href={resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-5 py-2.5 text-sm font-medium text-ink backdrop-blur-sm transition-colors hover:border-accent"
            >
              <FileDown size={16} aria-hidden />
              {t.hero.downloadResume}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
