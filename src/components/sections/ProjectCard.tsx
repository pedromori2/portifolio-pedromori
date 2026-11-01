"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n-context";
import type { ProjectEntry } from "@/types/content";
import { Badge } from "@/components/ui/Badge";

function statusLabel(status: ProjectEntry["status"], t: ReturnType<typeof useLang>["t"]) {
  if (status === "live") return t.projects.statusLive;
  if (status === "in-development") return t.projects.statusInDevelopment;
  return t.projects.statusConcept;
}

export function ProjectCard({
  project,
  featured = false,
}: {
  project: ProjectEntry;
  featured?: boolean;
}) {
  const { t, locale } = useLang();

  return (
    <Link
      href={`/projetos/${project.slug}`}
      className={`group flex flex-col justify-between rounded-sm border border-border p-6 transition-colors hover:border-accent ${
        featured ? "md:p-8" : ""
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <h3 className={`font-semibold text-foreground ${featured ? "text-2xl" : "text-lg"}`}>
            {project.name}
          </h3>
          <ArrowUpRight
            size={18}
            className="shrink-0 text-foreground-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        </div>

        <span className="mt-2 inline-block font-mono text-xs text-accent">
          {statusLabel(project.status, t)}
        </span>

        <p className="mt-3 text-sm text-foreground-muted">{project.tagline[locale]}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, featured ? project.stack.length : 5).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </Link>
  );
}
