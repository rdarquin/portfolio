/** Ambient backdrop: a static graph-paper grid, a halftone corner and print-style crop marks. */
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* graph-paper grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,16,8,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,16,8,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* halftone dots, top-right */}
      <div
        className="absolute -right-16 -top-16 h-64 w-64 opacity-[0.35] sm:h-80 sm:w-80"
        style={{
          backgroundImage: "radial-gradient(rgba(17,16,8,0.7) 1.6px, transparent 1.6px)",
          backgroundSize: "12px 12px",
          maskImage: "radial-gradient(circle at center, black 45%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 45%, transparent 75%)",
        }}
      />
      {/* accent block, lower-left */}
      <div className="absolute -left-24 bottom-24 h-40 w-40 rotate-12 border-4 border-ink/10 sm:h-56 sm:w-56" />

      {/* print-style crop marks */}
      {[
        "left-4 top-4",
        "right-4 top-4",
        "left-4 bottom-4",
        "right-4 bottom-4",
      ].map((pos) => (
        <span key={pos} className={`absolute hidden h-4 w-4 border-ink/30 sm:block ${pos}`}>
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink/20" />
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink/20" />
        </span>
      ))}
    </div>
  );
}
