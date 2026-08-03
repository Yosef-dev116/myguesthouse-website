import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import heroNightImage from "@/public/images/hero-night.jpg";
import roomExecutiveImage from "@/public/images/room-executive.png";
import diningAreaImage from "@/public/images/dining-area.png";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/layout/Container";
import { InViewGroup, InViewItem } from "@/components/motion/InView";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerReveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { NestedStaggerList, NestedStaggerRow } from "@/components/motion/NestedStagger";
import { CONTACT } from "@/lib/site-config";
import { FOCUS_RING } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Welcome | My Guest House Addis Ababa",
  description:
    "Essential information, location, room features, and direct reservation contacts for My Guest House in Addis Ababa, Ethiopia.",
  openGraph: {
    title: "Welcome | My Guest House Addis Ababa",
    description:
      "Essential information, location, room features, and direct reservation contacts for My Guest House in Addis Ababa, Ethiopia.",
    images: [
      {
        url: heroNightImage.src,
        width: heroNightImage.width,
        height: heroNightImage.height,
      },
    ],
  },
};

const FEATURES = [
  "Comfortable modern rooms",
  "Double beds",
  "Private bathrooms",
  "Television",
  "Workspace",
  "Wardrobe",
  "Natural light",
  "Seating area in the Executive Room",
  "Shared dining area",
  "Direct booking support",
];

const PRIMARY_BUTTON =
  "inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass px-6 py-3.5 text-base font-semibold tracking-wide text-charcoal transition-colors hover:bg-brass-light sm:w-auto";
const SECONDARY_BUTTON =
  "inline-flex w-full items-center justify-center gap-2 rounded-full border border-hairline px-6 py-3.5 text-base font-semibold tracking-wide text-cream transition-colors hover:border-brass/50 hover:bg-cream/[0.03] sm:w-auto";

export default function WelcomePage() {
  return (
    <>
      <header className="border-b border-hairline bg-charcoal">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Logo />
            <Link
              href="/"
              className={`rounded-sm text-sm font-medium text-cream-muted transition-colors hover:text-cream ${FOCUS_RING}`}
            >
              View Full Website
            </Link>
          </div>
        </Container>
      </header>

      <main className="overflow-x-clip bg-charcoal pb-24 md:pb-0">
        {/* Introduction */}
        <section>
          <InViewGroup>
            <InViewItem>
              <ImageReveal
                variant="settle"
                className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]"
              >
                <Image
                  src={heroNightImage}
                  alt="My Guest House building exterior at night, with illuminated balconies and entrance signage"
                  fill
                  sizes="100vw"
                  placeholder="blur"
                  priority
                  className="object-cover object-[50%_45%]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"
                />
              </ImageReveal>
            </InViewItem>
          </InViewGroup>

          <Container>
            <InViewGroup className="flex flex-col items-start gap-5 py-8">
              <InViewItem>
                <div aria-hidden="true" className="flex items-center gap-1.5">
                  <span className="h-[3px] w-6 rounded-full bg-[#128a4c]" />
                  <span className="h-[3px] w-6 rounded-full bg-[#e6b31e]" />
                  <span className="h-[3px] w-6 rounded-full bg-[#c1272d]" />
                </div>
              </InViewItem>

              <InViewItem>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream-muted">
                  Addis Ababa, Ethiopia
                </p>
              </InViewItem>

              <InViewItem>
                <h1 className="text-balance text-3xl font-medium leading-[1.15] tracking-tight text-cream sm:text-4xl">
                  Welcome to My Guest House
                </h1>
              </InViewItem>

              <InViewItem>
                <p className="text-lg leading-relaxed text-cream-muted">
                  A comfortable and peaceful place to stay in Addis Ababa, offering modern rooms,
                  welcoming shared spaces, and direct assistance when planning your stay.
                </p>
              </InViewItem>
            </InViewGroup>
          </Container>
        </section>

        {/* Location */}
        <section className="border-t border-hairline">
          <Container>
            <InViewGroup className="flex flex-col items-start gap-5 py-10">
              <InViewItem>
                <h2 className="text-2xl font-medium tracking-tight text-cream">Where to Find Us</h2>
              </InViewItem>

              <InViewItem>
                <p className="text-base leading-relaxed text-cream-muted">
                  My Guest House is located in Addis Ababa, Ethiopia.
                </p>
              </InViewItem>

              <InViewItem className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row">
                <Link
                  href={CONTACT.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${PRIMARY_BUTTON} ${FOCUS_RING}`}
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Open in Google Maps
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </Link>
                <Link
                  href={CONTACT.googleBusinessHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${SECONDARY_BUTTON} ${FOCUS_RING}`}
                >
                  View Google Business Profile
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </Link>
              </InViewItem>
            </InViewGroup>
          </Container>
        </section>

        {/* Features */}
        <section className="border-t border-hairline">
          <Container>
            <InViewGroup className="flex flex-col items-start gap-5 py-10">
              <InViewItem>
                <h2 className="text-2xl font-medium tracking-tight text-cream">What You&apos;ll Find</h2>
              </InViewItem>

              <InViewItem className="w-full">
                <NestedStaggerList className="grid w-full grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {FEATURES.map((feature) => (
                    <NestedStaggerRow key={feature} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-brass" />
                      <span className="text-base text-cream-muted">{feature}</span>
                    </NestedStaggerRow>
                  ))}
                </NestedStaggerList>
              </InViewItem>
            </InViewGroup>
          </Container>
        </section>

        {/* Room preview */}
        <section className="border-t border-hairline">
          <Container>
            <InViewGroup className="flex flex-col gap-5 py-10">
              <InViewItem>
                <figure>
                  <ImageReveal
                    variant="settle"
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-hairline"
                  >
                    <Image
                      src={roomExecutiveImage}
                      alt="The Executive Room at My Guest House, with a double bed, seating area, and wall-mounted television"
                      fill
                      sizes="(min-width: 768px) 60vw, 100vw"
                      placeholder="blur"
                      className="object-cover object-[50%_50%]"
                    />
                  </ImageReveal>
                  <figcaption className="mt-3 text-sm text-cream-muted">
                    A room at My Guest House
                  </figcaption>
                </figure>
              </InViewItem>

              <InViewItem>
                <figure>
                  <ImageReveal
                    variant="settle"
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-hairline"
                  >
                    <Image
                      src={diningAreaImage}
                      alt="The dining area at My Guest House, seen through a lattice partition with plants"
                      fill
                      sizes="(min-width: 768px) 60vw, 100vw"
                      placeholder="blur"
                      className="object-cover object-[50%_45%]"
                    />
                  </ImageReveal>
                  <figcaption className="mt-3 text-sm text-cream-muted">
                    The shared dining area
                  </figcaption>
                </figure>
              </InViewItem>
            </InViewGroup>
          </Container>
        </section>

        {/* Reservation */}
        <section className="border-t border-hairline">
          <Container>
            <InViewGroup className="flex flex-col items-start gap-6 py-10">
              <InViewItem>
                <div className="flex flex-col items-start gap-3">
                  <h2 className="text-2xl font-medium tracking-tight text-cream">
                    Reserve Your Stay
                  </h2>
                  <p className="text-base leading-relaxed text-cream-muted">
                    Contact My Guest House directly to ask about availability, room options, or your
                    planned arrival.
                  </p>
                </div>
              </InViewItem>

              <InViewItem className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link href={CONTACT.phoneHref} className={`${PRIMARY_BUTTON} ${FOCUS_RING}`}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </Link>
                <Link href={CONTACT.emailHref} className={`${SECONDARY_BUTTON} ${FOCUS_RING}`}>
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email Us
                </Link>
                <Link
                  href={CONTACT.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${SECONDARY_BUTTON} ${FOCUS_RING}`}
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Open in Google Maps
                  <span className="sr-only">(opens in a new tab)</span>
                </Link>
              </InViewItem>

              <InViewItem className="w-full">
                <address className="not-italic flex flex-col gap-3 border-t border-hairline pt-6 text-base">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
                    <a
                      href={CONTACT.phoneHref}
                      className={`rounded-sm text-cream transition-colors hover:text-brass-light ${FOCUS_RING}`}
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
                    <a
                      href={CONTACT.secondaryPhoneHref}
                      className={`rounded-sm text-cream-muted transition-colors hover:text-brass-light ${FOCUS_RING}`}
                    >
                      {CONTACT.secondaryPhoneDisplay}
                    </a>
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
            </InViewGroup>
          </Container>
        </section>

        {/* Small footer */}
        <footer className="border-t border-hairline">
          <Container>
            <InViewGroup>
              <InViewItem>
                <p className="py-8 text-xs text-cream-muted">
                  © 2026 My Guest House. All rights reserved.
                </p>
              </InViewItem>
            </InViewGroup>
          </Container>
        </footer>
      </main>

      {/* Sticky mobile action bar */}
      <StaggerGroup className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-charcoal-elevated md:hidden">
        <StaggerItem className="grid grid-cols-2 gap-px">
          <Link
            href={CONTACT.phoneHref}
            className={`flex items-center justify-center gap-2 bg-brass py-4 text-sm font-semibold tracking-wide text-charcoal ${FOCUS_RING}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </Link>
          <Link
            href={CONTACT.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 bg-charcoal-elevated py-4 text-sm font-semibold tracking-wide text-cream ${FOCUS_RING}`}
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Directions
            <span className="sr-only">(opens in a new tab)</span>
          </Link>
        </StaggerItem>
      </StaggerGroup>
    </>
  );
}
