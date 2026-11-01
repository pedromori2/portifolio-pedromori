"use client";

import { useLang } from "@/lib/i18n-context";
import { mainProjects, playfulProjects } from "@/content/projects";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { t } = useLang();
  const featured = mainProjects.find((p) => p.featured);
  const rest = mainProjects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10 flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold text-foreground">{t.projects.title}</h2>
        <SectionNumber current={3} total={6} />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {featured && (
          <div className="md:col-span-2">
            <ProjectCard project={featured} featured />
          </div>
        )}
        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {playfulProjects.length > 0 && (
        <div className="mt-14">
          <p className="mb-5 font-mono text-sm text-foreground-muted">{t.projects.playfulTitle}</p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {playfulProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
