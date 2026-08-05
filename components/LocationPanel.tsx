import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/site-config";
import { FOCUS_RING } from "@/lib/ui";

export function LocationPanel() {
  return (
    <div className="relative border-l border-brass/30 pl-8">
      <div aria-hidden="true" className="map-grid-overlay pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative flex flex-col items-start gap-6">
        <span className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-brass" />
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-cream-muted">
            Location
          </span>
        </span>

        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-brass" aria-hidden="true" />
          <p className="text-2xl font-medium tracking-tight text-cream">{CONTACT.location}</p>
        </div>

        <div className="flex w-full flex-col gap-4 pt-2">
          <Link
            href={CONTACT.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex w-fit items-center gap-2.5 border border-brass/60 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-cream transition-all duration-500 ease-out hover:border-brass hover:bg-brass hover:text-charcoal ${FOCUS_RING}`}
          >
            Open in Google Maps
            <ExternalLink
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
