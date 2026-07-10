import type { Dictionary, Locale } from '@/lib/i18n';
import { projects } from '@/data/projects';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';

export default function Projects({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="shell py-20 sm:py-28">
      <SectionHeader
        label={t.sections.projectsLabel}
        title={t.projects.heading}
      />

      <div className="space-y-6">
        {featured.map((project) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} locale={locale} t={t} featured />
          </Reveal>
        ))}

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 80} className="flex">
              <ProjectCard project={project} locale={locale} t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
