import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import heroNightImage from "@/public/images/hero-night.jpg";
import roomExecutiveImage from "@/public/images/room-executive.png";
import diningAreaImage from "@/public/images/dining-area.png";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/layout/Container";
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

      <main className="bg-charcoal pb-24 md:pb-0">
        {/* Introduction */}
        <section>
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]">
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
          </div>

          <Container>
            <div className="flex flex-col items-start gap-5 py-8">
              <div aria-hidden="true" className="flex items-center gap-1.5">
                <span className="h-[3px] w-6 rounded-full bg-[#128a4c]" />
                <span className="h-[3px] w-6 rounded-full bg-[#e6b31e]" />
                <span className="h-[3px] w-6 rounded-full bg-[#c1272d]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream-muted">
                Addis Ababa, Ethiopia
              </p>
              <h1 className="text-balance text-3xl font-medium leading-[1.15] tracking-tight text-cream sm:text-4xl">
                Welcome to My Guest House
              </h1>
              <p className="text-lg leading-relaxed text-cream-muted">
                A comfortable and peaceful place to stay in Addis Ababa, offering modern rooms,
                welcoming shared spaces, and direct assistance when planning your stay.
              </p>
            </div>
          </Container>
        </section>

        {/* Location */}
        <section className="border-t border-hairline">
          <Container>
            <div className="flex flex-col items-start gap-5 py-10">
              <h2 className="text-2xl font-medium tracking-tight text-cream">Where to Find Us</h2>
              <p className="text-base leading-relaxed text-cream-muted">
                My Guest House is located in Addis Ababa, Ethiopia.
              </p>
              <div className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row">
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
              </div>
            </div>
          </Container>
        </section>

        {/* Features */}
        <section className="border-t border-hairline">
          <Container>
            <div className="flex flex-col items-start gap-5 py-10">
              <h2 className="text-2xl font-medium tracking-tight text-cream">What You&apos;ll Find</h2>
              <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-brass" />
                    <span className="text-base text-cream-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        {/* Room preview */}
        <section className="border-t border-hairline">
          <Container>
            <div className="flex flex-col gap-5 py-10">
              <figure>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-hairline">
                  <Image
                    src={roomExecutiveImage}
                    alt="The Executive Room at My Guest House, with a double bed, seating area, and wall-mounted television"
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    placeholder="blur"
                    className="object-cover object-[50%_50%]"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-cream-muted">
                  A room at My Guest House
                </figcaption>
              </figure>

              <figure>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-hairline">
                  <Image
                    src={diningAreaImage}
                    alt="The dining area at My Guest House, seen through a lattice partition with plants"
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    placeholder="blur"
                    className="object-cover object-[50%_45%]"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-cream-muted">
                  The shared dining area
                </figcaption>
              </figure>
            </div>
          </Container>
        </section>

        {/* Reservation */}
        <section className="border-t border-hairline">
          <Container>
            <div className="flex flex-col items-start gap-6 py-10">
              <div className="flex flex-col items-start gap-3">
                <h2 className="text-2xl font-medium tracking-tight text-cream">
                  Reserve Your Stay
                </h2>
                <p className="text-base leading-relaxed text-cream-muted">
                  Contact My Guest House directly to ask about availability, room options, or your
                  planned arrival.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
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
              </div>

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
            </div>
          </Container>
        </section>

        {/* Small footer */}
        <footer className="border-t border-hairline">
          <Container>
            <p className="py-8 text-xs text-cream-muted">
              © 2026 My Guest House. All rights reserved.
            </p>
          </Container>
        </footer>
      </main>

      {/* Sticky mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-charcoal-elevated md:hidden">
        <div className="grid grid-cols-2 gap-px">
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
        </div>
      </div>
    </>
  );
}
