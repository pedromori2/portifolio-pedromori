"use client";

import { useLang } from "@/lib/i18n-context";
import { profile } from "@/content/profile";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 text-center text-xs text-foreground-muted sm:flex-row sm:justify-between sm:text-left">
        <span className="font-mono">
          {profile.name} — {year}
        </span>
        <span>{t.footer.rights}</span>
      </div>
    </footer>
  );
}
