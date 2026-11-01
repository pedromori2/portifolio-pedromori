"use client";

import { useLang } from "@/lib/i18n-context";

export function LangToggle() {
  const { locale, toggleLocale, t } = useLang();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.lang.toggle}
      title={t.lang.toggle}
      className="flex h-9 min-w-9 items-center justify-center rounded-sm border border-border px-2 font-mono text-xs text-foreground-muted transition-colors hover:border-accent hover:text-accent"
    >
      {locale === "pt" ? "PT" : "EN"}
    </button>
  );
}
