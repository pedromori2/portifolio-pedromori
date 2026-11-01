"use client";

import { useLang } from "@/lib/i18n-context";
import { experience } from "@/content/experience";
import { SectionNumber } from "@/components/ui/SectionNumber";

export function Experience() {
  const { t, locale } = useLang();

  return (
    <section id="experiencia" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10 flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold text-foreground">{t.experience.title}</h2>
        <SectionNumber current={4} total={6} />
      </div>

      <ol className="space-y-10 border-l border-border pl-6">
        {experience.map((entry) => (
          <li key={entry.company} className="relative">
            <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border border-accent bg-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-medium text-foreground">
                {entry.role[locale]} · {entry.company}
              </h3>
              <span className="font-mono text-xs text-foreground-muted">
                {entry.period[locale]}
              </span>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              {entry.bullets.map((bullet, index) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-1 text-accent">—</span>
                  <span>{bullet[locale]}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
