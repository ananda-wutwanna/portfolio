import { Github, ArrowUpRight } from 'lucide-react';
import type { Dictionary, Locale } from '@/lib/i18n';
import type { Project } from '@/data/projects';
import ImageGallery from './ImageGallery';

function StackList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tech.map((item) => (
        <li
          key={item}
          className="rounded border border-hairline bg-paper px-2 py-1 font-mono text-[11px] text-subink"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectCard({
  project,
  locale,
  t,
  featured = false,
}: {
  project: Project;
  locale: Locale;
  t: Dictionary;
  featured?: boolean;
}) {
  const L = t.projects.labels;
  const repo = project.repo;

  return (
    <article
      className={`group relative flex w-full flex-col rounded-lg border border-hairline bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow ${
        featured ? 'border-t-2 border-t-accent' : ''
      }`}
    >
      <div
        className={`flex flex-1 flex-col p-6 sm:p-7 ${
          featured ? 'lg:grid lg:grid-cols-12 lg:gap-8' : ''
        }`}
      >
        {/* Narrative column */}
        <div className={featured ? 'lg:col-span-7' : ''}>
          <div className="flex items-center gap-2">
            {featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-label text-accent">
                ★ {t.projects.featured}
              </span>
            )}
            <span className="font-mono text-[11px] uppercase tracking-label text-subink">
              {project.org[locale]}
            </span>
          </div>

          <h3
            className={`mt-3 font-display font-semibold leading-tight tracking-tight text-ink ${
              featured ? 'text-2xl sm:text-3xl' : 'text-xl'
            }`}
          >
            {project.title}
          </h3>

          <div className="mt-4 space-y-3">
            {project.summary ? (
              <p className="text-sm leading-relaxed text-subink">
                {project.summary[locale]}
              </p>
            ) : (
              project.problem && (
                <div>
                  <span className="spec-key text-subink">{L.problem}</span>
                  <p className="mt-1 text-sm leading-relaxed text-subink">
                    {project.problem[locale]}
                  </p>
                </div>
              )
            )}
            {project.highlights ? (
              <ul className="mt-1 list-disc space-y-1.5 pl-4 marker:text-accent">
                {project.highlights.map((h, i) => (
                  <li key={i} className="pl-1 text-sm leading-relaxed text-ink">
                    {h[locale]}
                  </li>
                ))}
              </ul>
            ) : (
              project.built && (
                <div>
                  <span className="spec-key text-subink">{L.built}</span>
                  <p className="mt-1 text-sm leading-relaxed text-ink">
                    {project.built[locale]}
                  </p>
                </div>
              )
            )}
            {project.systems && (
              <div>
                <span className="spec-key text-subink">{L.systems}</span>
                <ul className="mt-1.5 space-y-1.5">
                  {project.systems.map((s) => (
                    <li key={s.label.en} className="text-sm leading-relaxed">
                      <span className="font-medium text-ink">{s.label[locale]}</span>
                      <span className="text-subink"> — {s.desc[locale]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.result && (
              <div>
                <span className="spec-key text-accent">{L.result}</span>
                <p className="mt-1 text-sm leading-relaxed text-ink">
                  {project.result[locale]}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Spec panel — the datasheet "characteristics" table */}
        <div
          className={`mt-6 ${
            featured
              ? 'lg:col-span-5 lg:mt-0 lg:border-l lg:border-hairline lg:pl-8'
              : 'border-t border-hairline pt-5'
          }`}
        >
          {project.images && (
            <div className="mb-5">
              <ImageGallery
                images={project.images}
                videos={project.videos}
                locale={locale}
              />
            </div>
          )}

          <div>
            <span className="spec-key">{L.stack}</span>
            <div className="mt-2">
              <StackList tech={project.tech} />
            </div>
          </div>

          {repo && (
            <a
              href={repo.url}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-subink transition-colors hover:text-accent"
            >
              <Github size={14} aria-hidden />
              {L.repo}: {repo.label}
              <ArrowUpRight size={13} aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
