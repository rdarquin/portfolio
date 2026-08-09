import { useLanguage } from "../context/Language";
import Section from "./Section";
import SkillsCol from "./skills_col";

export default function Skills() {
  const { c } = useLanguage();
  return (
    <Section id="skills" kicker={c.skills.kicker} title={c.skills.title}>
      <p className="-mt-6 mb-8 max-w-2xl text-base text-ink/70">{c.skills.subtitle}</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {c.skills.groups.map((g) => (
          <SkillsCol key={g.name} name={g.name} items={g.items} />
        ))}
      </div>
    </Section>
  );
}
