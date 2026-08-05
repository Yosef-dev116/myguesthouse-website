/**
 * Short, restrained seam between an espresso section and an ivory section (or
 * vice versa): a brief gradient fade plus a centered brass line-and-diamond
 * mark. Deliberately shorter and lower-opacity than a full scrim so the
 * handoff reads as a soft cue, not a shadow band. Render as the first child
 * of a `relative` section, with the section's content wrapper set to
 * `relative z-10` so the fade sits behind it.
 */
export function SectionBridge({ tone }: { tone: "to-ivory" | "to-espresso" }) {
  const gradient = tone === "to-ivory" ? "from-charcoal/45" : "from-cream/45";

  return (
    <>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b ${gradient} to-transparent sm:h-20`}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-6 flex justify-center sm:top-9"
      >
        <span className="flex items-center gap-3">
          <span className="h-px w-9 bg-brass/70" />
          <span className="h-2 w-2 rotate-45 border border-brass" />
          <span className="h-px w-9 bg-brass/70" />
        </span>
      </div>
    </>
  );
}
