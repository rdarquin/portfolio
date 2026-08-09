import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { CONTENT, Content, Lang } from "../i18n/content";

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
  c: Content;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLang(): Lang {
  if (typeof navigator !== "undefined" && navigator.language) {
    return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
  }
  return "fr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((prev) => (prev === "fr" ? "en" : "fr"));

  return <LanguageContext.Provider value={{ lang, toggle, c: CONTENT[lang] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
