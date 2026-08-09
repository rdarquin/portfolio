import { useLanguage } from "../context/Language";
import Section from "./Section";

export default function Services() {
  const { c } = useLanguage();
  return (
    <Section id="services" kicker={c.services.kicker} title={c.services.title}>
      <p className="-mt-6 mb-10 max-w-2xl text-base text-ink/70">{c.services.subtitle}</p>
      <div className="grid gap-6 md:grid-cols-3">
        {c.services.cards.map((card, i) => (
          <div
            key={card.title}
            className="group relative flex flex-col overflow-hidden border-2 border-ink bg-paper p-6 shadow-brutal-sm transition-transform duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <span className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-7xl leading-none text-ink/[0.06]">
              0{i + 1}
            </span>
            <div className="relative mb-4 flex h-10 w-10 items-center justify-center border-2 border-ink bg-ink font-mono text-xs font-bold text-accent">
              0{i + 1}
            </div>
            <h3 className="relative font-display text-lg leading-tight text-ink">{card.title}</h3>
            <p className="relative mt-2 flex-1 text-sm leading-relaxed text-ink/70">{card.desc}</p>
            <div className="relative mt-4 flex flex-wrap gap-2">
              {card.tags.map((t) => (
                <span key={t} className="border border-ink/30 px-2 py-1 font-mono text-xs text-ink/70">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 border-2 border-ink border-l-8 border-l-accent2 bg-paper px-5 py-4 text-sm text-ink/80">
        {c.services.note}
      </p>
    </Section>
  );
}
