/**
 * A restrained, original vertical accent inspired by the rhythm of Ethiopian
 * textile borders — a repeating sequence of small geometric motifs, not a
 * reproduction of any specific known pattern. Purely decorative.
 */
export function HeroMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="20"
      height="100%"
      preserveAspectRatio="none"
      className={className}
    >
      <defs>
        <pattern id="hero-motif-tile" width="20" height="72" patternUnits="userSpaceOnUse">
          <line x1="10" y1="0" x2="10" y2="72" className="stroke-cream/10" strokeWidth="1" />
          <rect
            x="6"
            y="8"
            width="8"
            height="8"
            transform="rotate(45 10 12)"
            className="fill-none stroke-brass/20"
            strokeWidth="1"
          />
          <path d="M10 34 L14 40 L10 46 L6 40 Z" className="fill-none stroke-terracotta/20" strokeWidth="1" />
          <rect
            x="7"
            y="58"
            width="6"
            height="6"
            transform="rotate(45 10 61)"
            className="fill-none stroke-green/20"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="20" height="100%" fill="url(#hero-motif-tile)" />
    </svg>
  );
}
