import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/site-config";
import { FOCUS_RING } from "@/lib/ui";

export function LocationPanel() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-hairline bg-charcoal-elevated p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] sm:p-10">
      <div aria-hidden="true" className="map-grid-overlay pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-elevated via-transparent to-transparent"
      />

      <div className="relative flex flex-col items-start gap-6">
        <span className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-brass" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cream-muted">
            Location
          </span>
        </span>

        <div className="flex items-center gap-3 rounded-full border border-brass/30 bg-brass/10 p-3">
          <MapPin className="h-6 w-6 text-brass" aria-hidden="true" />
        </div>

        <p className="text-2xl font-medium tracking-tight text-cream">{CONTACT.location}</p>

        <div className="flex w-full flex-col gap-4 pt-2">
          <Link
            href={CONTACT.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-semibold tracking-wide text-charcoal shadow-md shadow-black/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brass-light hover:shadow-[0_10px_30px_-8px_rgba(184,134,62,0.55)] active:translate-y-0 active:scale-[0.97] sm:w-auto ${FOCUS_RING}`}
          >
            Open in Google Maps
            <ExternalLink
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
            <span className="sr-only">(opens in a new tab)</span>
          </Link>

          <Link
            href={CONTACT.googleBusinessHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 rounded-sm text-sm font-medium text-cream-muted transition-colors hover:text-cream ${FOCUS_RING}`}
          >
            View on Google Business
            <ExternalLink
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
            <span className="sr-only">(opens in a new tab)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
