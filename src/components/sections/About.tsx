"use client";

import { useLang } from "@/lib/i18n-context";
import { profile } from "@/content/profile";
import { SectionNumber } from "@/components/ui/SectionNumber";

export function About() {
  const { t, locale } = useLang();

  return (
    <section id="sobre" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10 flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold text-foreground">{t.about.title}</h2>
        <SectionNumber current={2} total={6} />
      </div>

      <div className="max-w-2xl space-y-5 text-foreground-muted">
        {profile.about.map((paragraph, index) => (
          <p key={index}>{paragraph[locale]}</p>
        ))}
      </div>

      <p className="mt-8 border-l-2 border-accent pl-4 font-mono text-sm text-foreground-muted">
        {t.about.education}: {profile.education[locale]}
      </p>
    </section>
  );
}
