interface ProjectCardProps {
  name: string;
  desc: string;
  tags: string[];
  index: number;
}

/** A project card with a numbered watermark and a brutal hover shadow. */
export default function ProjectCard({ name, desc, tags, index }: ProjectCardProps) {
  return (
    <div className="group relative h-full overflow-hidden border-2 border-ink bg-paper p-6 shadow-brutal-sm transition-transform duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
      <span className="pointer-events-none absolute -right-3 -top-6 select-none font-display text-8xl leading-none text-ink/[0.06]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="relative font-mono text-xs font-bold text-accent2">{String(index + 1).padStart(2, "0")}</p>
      <h3 className="relative mt-2 font-display text-lg leading-tight text-ink">{name}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-ink/70">{desc}</p>
      <div className="relative mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="border border-ink/30 px-2 py-1 font-mono text-xs text-ink/70">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
