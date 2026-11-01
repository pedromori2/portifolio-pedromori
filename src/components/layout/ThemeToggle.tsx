"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { useLang } from "@/lib/i18n-context";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLang();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.theme.toggleToLight : t.theme.toggleToDark}
      title={isDark ? t.theme.toggleToLight : t.theme.toggleToDark}
      className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground-muted transition-colors hover:border-accent hover:text-accent"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
