import { useLanguage } from "../context/Language";
import Section from "./Section";
import ProjectCard from "./HoverEffect";

export default function Projects() {
  const { c } = useLanguage();
  return (
    <Section id="projects" kicker={c.projects.kicker} title={c.projects.title}>
      <p className="-mt-6 mb-10 max-w-2xl text-base text-ink/70">{c.projects.subtitle}</p>
      <div className="grid gap-6 md:grid-cols-3">
        {c.projects.items.map((p, i) => (
          <ProjectCard key={p.name} index={i} name={p.name} desc={p.desc} tags={p.tags} />
        ))}
      </div>
    </Section>
  );
}
