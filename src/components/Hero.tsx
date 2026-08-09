import { useEffect, useState } from "react";
import { useLanguage } from "../context/Language";
import HeroVisual from "./picture_animated_on_display";
import { ArrowIcon, DownloadIcon, PinIcon } from "./Icons";

export default function Hero() {
  const { c } = useLanguage();
  const roles = c.hero.roles;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, [roles.length]);

  const cvHref = `${import.meta.env.BASE_URL}${c.hero.cvFile}`;

  return (
    <section id="top" className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-16 pt-28">
      <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-3 py-1 font-mono text-xs font-bold uppercase tracking-wide text-ink">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping bg-accent2 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 bg-accent2" />
            </span>
            {c.hero.available}
          </span>

          <p className="mt-6 font-mono text-sm font-medium uppercase tracking-widest text-ink/60">{c.hero.greeting}</p>
          <h1 className="mt-2 font-display text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-1 -z-10 h-4 -rotate-1 bg-accent sm:h-6" />
              {c.hero.name}
            </span>
          </h1>

          <div className="mt-4 h-10 overflow-hidden border-l-4 border-accent2 pl-3">
            <p key={idx} className="animate-rise font-mono text-xl font-bold text-ink sm:text-2xl">
              {roles[idx]}
            </p>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">{c.hero.tagline}</p>

          <p className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-ink/70">
            <PinIcon className="h-4 w-4 text-accent2" />
            {c.hero.location}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border-2 border-ink bg-ink px-6 py-3 font-mono text-sm font-bold uppercase tracking-wide text-paper shadow-brutal-accent transition-transform duration-150 hover:translate-x-[7px] hover:translate-y-[7px] hover:shadow-none"
            >
              {c.hero.ctaContact}
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-6 py-3 font-mono text-sm font-bold uppercase tracking-wide text-ink shadow-brutal transition-transform duration-150 hover:translate-x-[7px] hover:translate-y-[7px] hover:shadow-none"
            >
              {c.hero.ctaProjects}
            </a>
            <a
              href={cvHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-6 py-3 font-mono text-sm font-bold uppercase tracking-wide text-ink shadow-brutal transition-transform duration-150 hover:translate-x-[7px] hover:translate-y-[7px] hover:shadow-none"
            >
              <DownloadIcon className="h-4 w-4" />
              {c.hero.ctaCV}
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
