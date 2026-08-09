import { useLanguage } from "../context/Language";
import Section from "./Section";

export default function Education() {
  const { c } = useLanguage();
  return (
    <Section id="education" kicker={c.education.kicker} title={c.education.title}>
      <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          {c.education.items.map((e, i) => (
            <div key={i} className="border-2 border-ink bg-paper p-5 shadow-brutal-sm transition-transform duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-base leading-tight text-ink">{e.degree}</h3>
                <span className="bg-ink px-2 py-0.5 font-mono text-xs font-bold text-paper">{e.period}</span>
              </div>
              <p className="mt-1.5 text-sm text-ink/70">{e.school}</p>
            </div>
          ))}
        </div>
        <div className="border-2 border-ink bg-ink p-5 text-paper shadow-brutal-sm">
          <h3 className="mb-4 border-b-2 border-paper/30 pb-2 font-mono text-sm font-bold uppercase tracking-wide text-accent">
            {c.education.languagesTitle}
          </h3>
          <ul className="space-y-2">
            {c.education.languages.map((l) => (
              <li key={l} className="flex gap-2.5 text-sm text-paper/90">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
