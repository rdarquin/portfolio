import Skill from "./skill";

interface SkillsColProps {
  name: string;
  items: string[];
}

/** A skill category card with its list of pills. */
export default function SkillsCol({ name, items }: SkillsColProps) {
  return (
    <div className="border-2 border-ink bg-paper p-5 shadow-brutal-sm transition-transform duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
      <h3 className="mb-4 border-b-2 border-ink pb-2 font-mono text-sm font-bold uppercase tracking-wide text-ink">{name}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Skill key={item} name={item} />
        ))}
      </ul>
    </div>
  );
}
