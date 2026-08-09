import { useLanguage } from "../context/Language";
import Section from "./Section";

export default function About() {
  const { c } = useLanguage();
  return (
    <Section id="about" kicker={c.about.kicker} title={c.about.title}>
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          {c.about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-ink/70">
              {p}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {c.about.stats.map((s, i) => {
            const inverted = i % 3 === 0;
            return (
              <div
                key={s.label}
                className={`border-2 border-ink p-5 shadow-brutal-sm transition-transform duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${
                  inverted ? "bg-ink text-paper" : "bg-paper text-ink"
                }`}
              >
                <p className="font-display text-2xl leading-none">{s.value}</p>
                <p className={`mt-2 font-mono text-xs uppercase tracking-wide ${inverted ? "text-paper/60" : "text-ink/60"}`}>
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
