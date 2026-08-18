import { useEffect, useState } from "react";

const LINES: { text: string; cls: string }[] = [
  { text: "const remy = {", cls: "text-ink/60" },
  { text: "  role: 'Consultant Data',", cls: "text-accent2" },
  { text: "  focus: ['Data Analysis', 'BI', 'ML'],", cls: "text-ink" },
  { text: "  stack: ['SQL', 'Python',", cls: "text-ink" },
  { text: "          'Power BI', 'Excel'],", cls: "text-ink" },
  { text: "  available: 'opportunities',", cls: "text-ink" },
  { text: "};", cls: "text-ink/60" },
];

/** Animated terminal-style code panel used as the hero visual. */
export default function HeroVisual() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= LINES.length) return;
    const t = setTimeout(() => setCount((n) => n + 1), 280);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div className="relative w-full max-w-md rotate-1">
      <div className="border-2 border-ink bg-paper shadow-brutal-lg">
        <div className="flex items-center gap-2 border-b-2 border-ink bg-ink px-4 py-3">
          <span className="h-3 w-3 border border-paper bg-accent2" />
          <span className="h-3 w-3 border border-paper bg-accent" />
          <span className="h-3 w-3 border border-paper bg-paper" />
          <span className="ml-2 font-mono text-xs text-paper/70">profile.ts</span>
        </div>
        <pre className="overflow-hidden px-5 py-4 font-mono text-[13px] leading-6">
          {LINES.slice(0, count).map((l, i) => (
            <div key={i} className={l.cls}>
              {l.text}
            </div>
          ))}
          {count < LINES.length && <span className="inline-block h-4 w-2 animate-pulse bg-accent2 align-middle" />}
        </pre>
      </div>
    </div>
  );
}
