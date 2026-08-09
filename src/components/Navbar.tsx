import { useEffect, useState } from "react";
import { useLanguage } from "../context/Language";
import { GlobeIcon } from "./Icons";

const SECTIONS = ["about", "skills", "services", "experience", "projects", "contact"] as const;

export default function Navbar() {
  const { c, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = SECTIONS.map((id) => ({ id, label: c.nav[id] }));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper transition-all duration-200 ${
        scrolled ? "border-b-2 border-ink" : "border-b-2 border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border-2 border-ink bg-ink font-mono text-sm font-bold text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
            RD
          </span>
          <span className="hidden font-display text-sm tracking-tight sm:inline">Rémy Darquin</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="font-mono text-xs font-medium uppercase tracking-wider text-ink/70 transition-colors hover:text-ink hover:underline hover:decoration-accent hover:decoration-4 hover:underline-offset-4"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Switch language"
            className="flex items-center gap-1.5 border-2 border-ink px-3 py-1.5 font-mono text-xs font-bold uppercase transition-colors hover:bg-ink hover:text-paper"
          >
            <GlobeIcon className="h-3.5 w-3.5" />
            {c.langLabel}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center border-2 border-ink text-ink md:hidden"
          >
            <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t-2 border-ink bg-paper px-5 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 px-1 py-2.5 font-mono text-sm font-medium uppercase tracking-wide text-ink/80 last:border-b-0 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
