/**
 * Original vector interpretation of the My Guest House "M" mark: two
 * layered chevrons (a thinner one behind, a thicker one in front whose
 * outer ends drop into flat-bottomed legs) — matching the two-tier folded
 * ribbon silhouette on the physical signage (see public/images/logo.png),
 * redrawn as clean geometry rather than traced from the photo.
 */
export function Logo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 96 64"
        aria-hidden="true"
        className="h-6 w-auto shrink-0 text-brass"
      >
        <path
          d="M10 16 L48 38 L86 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinejoin="miter"
          strokeLinecap="butt"
          opacity="0.55"
        />
        <path
          d="M20 58 L20 24 L48 48 L76 24 L76 58"
          fill="none"
          stroke="currentColor"
          strokeWidth="8.5"
          strokeLinejoin="miter"
          strokeLinecap="butt"
        />
      </svg>
      <span className="whitespace-nowrap text-base font-semibold tracking-wide text-cream">
        My Guest House
      </span>
    </span>
  );
}
