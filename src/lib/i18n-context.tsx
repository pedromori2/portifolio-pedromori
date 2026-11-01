"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale } from "@/types/content";
import { defaultLocale, dictionary, type Dictionary } from "@/lib/i18n";

interface LangContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "pt" || stored === "en") {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- sync React state with the persisted/system preference on mount, before paint
        setLocaleState(stored);
        return;
      }
      const browserLang = window.navigator.language.toLowerCase();
      if (!browserLang.startsWith("pt")) {
        setLocaleState("en");
      }
    } catch {
      // localStorage indisponível (ex: navegação privada) — mantém o padrão
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignora falha de storage
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === "pt" ? "en" : "pt";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignora falha de storage
      }
      return next;
    });
  }, []);

  const value = useMemo<LangContextValue>(
    () => ({ locale, t: dictionary[locale], setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}
