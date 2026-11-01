"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n-context";
import type { ProjectEntry } from "@/types/content";
import { Badge } from "@/components/ui/Badge";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

function statusLabel(status: ProjectEntry["status"], t: ReturnType<typeof useLang>["t"]) {
  if (status === "live") return t.projects.statusLive;
  if (status === "in-development") return t.projects.statusInDevelopment;
  return t.projects.statusConcept;
}

export function ProjectDetail({ project }: { project: ProjectEntry }) {
  const { t, locale } = useLang();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/#projetos"
        className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={16} />
        {t.projects.backToProjects}
      </Link>

      <header className="mt-8">
        <span className="font-mono text-xs text-accent">{statusLabel(project.status, t)}</span>
        <h1 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">{project.name}</h1>
        {project.period && (
          <p className="mt-1 font-mono text-sm text-foreground-muted">{project.period[locale]}</p>
        )}
        <p className="mt-4 max-w-xl text-foreground-muted">{project.tagline[locale]}</p>

        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {link.label[locale]}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        )}
      </header>

      <div className="mt-10 space-y-4 text-foreground-muted">
        {project.description.map((paragraph, index) => (
          <p key={index}>{paragraph[locale]}</p>
        ))}
      </div>

      {project.highlights && project.highlights.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
            {t.projects.features}
          </h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {project.highlights.map((item, index) => (
              <li key={index} className="flex gap-2 text-sm text-foreground-muted">
                <span className="text-accent">—</span>
                {item[locale]}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.pricing && project.pricing.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
            {t.projects.pricing}
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.pricing.map((plan) => (
              <div key={plan.name} className="rounded-sm border border-border px-4 py-3">
                <p className="text-sm font-medium text-foreground">{plan.name}</p>
                <p className="font-mono text-xs text-foreground-muted">{plan.price[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.hasArchitectureDiagram && (
        <div className="mt-10">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
            {t.projects.architecture}
          </h2>
          <div className="rounded-sm border border-border p-4">
            <ArchitectureDiagram />
          </div>
        </div>
      )}

      <div className="mt-10">
        <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
          {t.projects.stack}
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
