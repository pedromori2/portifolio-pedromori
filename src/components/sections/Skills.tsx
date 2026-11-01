"use client";

import { useLang } from "@/lib/i18n-context";
import { skills } from "@/content/skills";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { Badge } from "@/components/ui/Badge";

export function Skills() {
  const { t, locale } = useLang();

  return (
    <section id="habilidades" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10 flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold text-foreground">{t.skills.title}</h2>
        <SectionNumber current={5} total={6} />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.title.pt}>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
              {group.title[locale]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
