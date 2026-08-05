import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "./layout/Container";
import { LocationPanel } from "./LocationPanel";
import { SectionBridge } from "./SectionBridge";
import { InViewGroup, InViewItem } from "./motion/InView";
import { CONTACT } from "@/lib/site-config";
import { FOCUS_RING } from "@/lib/ui";
import { DISTANCE } from "@/lib/motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-x-clip bg-charcoal py-28 sm:py-32 md:py-40"
    >
      <SectionBridge tone="to-espresso" />

      <Container className="relative z-10">
        <InViewGroup className="grid gap-16 md:grid-cols-12 md:items-start md:gap-x-16">
          <div className="flex flex-col items-start gap-8 md:col-span-7">
            <InViewItem className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-brass" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-cream-muted">
                Contact
              </span>
            </InViewItem>

            <InViewItem>
              <h2 className="font-serif text-balance text-3xl font-medium leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-5xl">
                Plan your stay directly with us.
              </h2>
            </InViewItem>

            <InViewItem>
              <p className="max-w-md text-lg leading-relaxed text-cream-muted">
                Call, email, or open the location in Google Maps to ask about availability and
                arrange your stay at My Guest House.
              </p>
            </InViewItem>

            <InViewItem className="flex flex-wrap items-center gap-8">
              <Link
                href={CONTACT.phoneHref}
                className={`group inline-flex items-center border border-brass/60 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-cream transition-all duration-500 ease-out hover:border-brass hover:bg-brass hover:text-charcoal ${FOCUS_RING}`}
              >
                Call Now
              </Link>
              <Link
                href={CONTACT.emailHref}
                className={`group inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-cream transition-colors duration-300 hover:text-brass-light ${FOCUS_RING}`}
              >
                <span className="border-b border-cream/30 pb-0.5 transition-colors group-hover:border-brass-light">
                  Email Us
                </span>
              </Link>
            </InViewItem>

            <InViewItem className="w-full border-t border-cream/15 pt-6">
              <address className="not-italic flex flex-col gap-4 text-base">
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
