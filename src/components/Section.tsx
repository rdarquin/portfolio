import { ReactNode, useEffect, useRef, useState } from "react";

interface SectionProps {
  id: string;
  kicker?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

/** Section wrapper with a heading and a reveal-on-scroll animation. */
export default function Section({ id, kicker, title, children, className = "" }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`mx-auto max-w-6xl scroll-mt-24 px-5 py-20 transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {(kicker || title) && (
        <div className="mb-10">
          {kicker && (
            <p className="mb-3 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
              <span className="h-2.5 w-2.5 bg-accent2" />
              {kicker}
            </p>
          )}
          {title && (
            <h2 className="relative inline-block font-display text-3xl leading-[1.05] tracking-tight text-ink sm:text-4xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
