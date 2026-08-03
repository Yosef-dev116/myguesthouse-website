import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "./layout/Container";
import { LocationPanel } from "./LocationPanel";
import { InViewGroup, InViewItem } from "./motion/InView";
import { CONTACT } from "@/lib/site-config";
import { FOCUS_RING } from "@/lib/ui";
import { DISTANCE } from "@/lib/motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-x-clip border-t border-hairline bg-charcoal-elevated py-24 sm:py-28 md:py-36"
    >
      <Container>
        <InViewGroup className="grid gap-14 md:grid-cols-12 md:items-start md:gap-x-12">
          <div className="flex flex-col items-start gap-8 md:col-span-7">
            <InViewItem className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-brass" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cream-muted">
                Contact
              </span>
            </InViewItem>

            <InViewItem>
              <h2 className="text-balance text-3xl font-medium leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-5xl">
                Plan your stay directly with us.
              </h2>
            </InViewItem>

            <InViewItem>
              <p className="max-w-md text-lg leading-relaxed text-cream-muted">
                Call, email, or open the location in Google Maps to ask about availability and
                arrange your stay at My Guest House.
              </p>
            </InViewItem>

            <InViewItem className="flex flex-wrap items-center gap-4">
              <Link
                href={CONTACT.phoneHref}
                className={`inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-semibold tracking-wide text-charcoal shadow-md shadow-black/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brass-light hover:shadow-[0_10px_30px_-8px_rgba(184,134,62,0.55)] active:translate-y-0 active:scale-[0.97] ${FOCUS_RING}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </Link>
              <Link
                href={CONTACT.emailHref}
                className={`inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm font-semibold tracking-wide text-cream transition-all duration-300 ease-out hover:border-brass/50 hover:bg-cream/[0.03] ${FOCUS_RING}`}
              >
                <Mail className="h-4 w-4 text-brass" aria-hidden="true" />
                Email Us
              </Link>
            </InViewItem>

            <InViewItem className="w-full">
              <address className="not-italic flex flex-col gap-4 border-t border-hairline pt-6 text-base">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
                  <div className="flex flex-col gap-1">
                    <a
                      href={CONTACT.phoneHref}
                      className={`rounded-sm text-cream transition-colors hover:text-brass-light ${FOCUS_RING}`}
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                    <a
                      href={CONTACT.secondaryPhoneHref}
                      className={`rounded-sm text-cream-muted transition-colors hover:text-brass-light ${FOCUS_RING}`}
                    >
                      {CONTACT.secondaryPhoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
                  <a
                    href={CONTACT.emailHref}
                    className={`rounded-sm text-cream transition-colors hover:text-brass-light ${FOCUS_RING}`}
                  >
                    {CONTACT.emailDisplay}
                  </a>
                </div>
              </address>
            </InViewItem>
          </div>

          <InViewItem className="md:col-span-5" distance={DISTANCE.md}>
            <LocationPanel />
          </InViewItem>
        </InViewGroup>
      </Container>
    </section>
  );
}
