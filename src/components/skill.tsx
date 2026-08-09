interface SkillProps {
  name: string;
}

/** A single skill tag. */
export default function Skill({ name }: SkillProps) {
  return (
    <li className="border border-ink/30 bg-paper px-2.5 py-1 font-mono text-xs font-medium text-ink/80 transition-colors hover:border-ink hover:bg-accent hover:text-ink">
      {name}
    </li>
  );
}
