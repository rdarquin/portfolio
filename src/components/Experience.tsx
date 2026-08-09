import { useLanguage } from "../context/Language";
import Section from "./Section";
import { PinIcon } from "./Icons";

export default function Experience() {
  const { c } = useLanguage();
  return (
    <Section id="experience" kicker={c.experience.kicker} title={c.experience.title}>
      <div className="relative border-l-2 border-ink pl-6 sm:pl-8">
        {c.experience.items.map((item, i) => (
          <div key={i} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[33px] top-1.5 flex h-4 w-4 rotate-45 items-center justify-center border-2 border-ink bg-accent2 sm:-left-[41px]" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-lg leading-tight text-ink">{item.role}</h3>
              <span className="bg-ink px-2 py-0.5 font-mono text-xs font-bold text-paper">{item.period}</span>
            </div>
            <p className="mt-1.5 text-sm font-semibold text-ink/80">{item.org}</p>
            <p className="mt-0.5 inline-flex items-center gap-1 font-mono text-xs text-ink/50">
              <PinIcon className="h-3 w-3" />
              {item.location}
            </p>
            <ul className="mt-3 space-y-1.5">
              {item.bullets.map((b, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-ink/70">
                  <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 bg-ink/40" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
