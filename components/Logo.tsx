/**
 * Vector trace of the official My Guest House "M" mark
 * (see public/images/official-logo.jpg). Coordinates were measured directly
 * from the source artwork (pixel edge-detection on the 1080x901 reference,
 * viewBox below uses those same source coordinates) rather than approximated
 * freehand, so the outer chevron, the notched shoulder on the inner chevron,
 * and the two vertical legs match the official proportions, spacing, and
 * center valley. Drawn as flat filled polygons (the source mark is solid,
 * single-color) using currentColor so it stays crisp, transparent, and
 * recolorable — brass on the dark site — at any size.
 */
export function Logo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="195 150 705 438"
        aria-hidden="true"
        className="h-6 w-auto shrink-0 text-brass"
      >
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="
            M205,158 L205,227 L547.5,409.5 L890,227 L890,158 L547.5,335.5 Z
            M263,287 L204,318 L204,386 L547.5,578.5 L891,386 L891,318 L832,287 L769,322 L824,352 L547.5,501.5 L271,352 L326,322 Z
            M205,420 L204,580 L270,580 L270,456 Z
            M890,420 L891,580 L825,580 L825,456 Z
          "
        />
      </svg>
      <span className="whitespace-nowrap text-base font-semibold tracking-wide text-cream">
        My Guest House
      </span>
    </span>
  );
}
