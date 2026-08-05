import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import lobbyImage from "@/public/images/lobby.png";
import { Container } from "./layout/Container";
import { InViewGroup, InViewItem } from "./motion/InView";
import { ImageReveal } from "./motion/ImageReveal";
import { CONTACT } from "@/lib/site-config";
import { FOCUS_RING } from "@/lib/ui";

const SUPPORTING_POINTS = [
  "Warm, personal hospitality",
  "Peaceful atmosphere",
  "Convenient Addis Ababa location",
  "Direct and simple booking",
];

export function About() {
  return (
    <section
      id="about"
      data-nav-theme="light"
      className="relative scroll-mt-28 overflow-x-clip bg-cream py-28 sm:py-32 md:py-40"
    >
      {/* Bridges the dark cinematic hero into this section's warm ivory register:
          a short fade from charcoal into cream, met by a thin brass seam. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-charcoal to-cream sm:h-28"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-14 flex justify-center sm:top-20"
      >
        <span className="flex items-center gap-3">
          <span className="h-px w-9 bg-brass/70" />
          <span className="h-2 w-2 rotate-45 border border-brass" />
          <span className="h-px w-9 bg-brass/70" />
        </span>
      </div>
      <div aria-hidden="true" className="about-motif-overlay pointer-events-none absolute inset-0" />

      <Container className="relative z-10">
        <div className="grid gap-14 md:grid-cols-12 md:items-center md:gap-x-14">
          <InViewGroup className="md:col-span-6">
            <InViewItem>
              <ImageReveal
                variant="clip-soft"
                className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[3.5rem] rounded-b-lg shadow-[0_40px_80px_-40px_rgba(23,18,14,0.3)]"
              >
                <Image
                  src={lobbyImage}
                  alt="The lobby at My Guest House, with a modern glass and timber partition and greenery near the entrance"
                  fill
                  sizes="(min-width: 768px) 42vw, 92vw"
                  placeholder="blur"
                  className="object-cover object-[50%_42%]"
                />
              </ImageReveal>
            </InViewItem>
          </InViewGroup>

          <InViewGroup className="flex flex-col items-start gap-8 md:col-span-6 md:pl-4">
            <InViewItem className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-brass" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-brass">
                About My Guest House
              </span>
            </InViewItem>

            <InViewItem>
              <h2 className="font-serif text-balance text-3xl font-medium leading-[1.15] tracking-tight text-charcoal sm:text-4xl md:text-[2.75rem]">
                A calm place to return to after a day in Addis.
              </h2>
            </InViewItem>

            <InViewItem>
              <p className="max-w-[50ch] text-lg leading-relaxed text-charcoal/70">
                My Guest House offers a welcoming stay shaped by comfort, personal service, and a
                relaxed atmosphere. Whether guests are visiting Addis Ababa for work, family, or
                exploration, the aim is simple: provide a clean, peaceful place that feels easy to
                settle into.
              </p>
            </InViewItem>

            <InViewItem className="w-full border-t border-charcoal/10 pt-6">
              <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {SUPPORTING_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brass" />
                    <span className="text-charcoal/70">{point}</span>
                  </li>
                ))}
              </ul>
            </InViewItem>

            <InViewItem className="w-full border-t border-charcoal/10 pt-6">
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-brass">
                Simple, direct booking
              </span>
              <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-charcoal/60">
                Speak directly with the guest house to ask questions, confirm availability, or
                plan your stay.
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-6">
                <Link
                  href={CONTACT.phoneHref}
                  className={`inline-flex items-center gap-2.5 rounded-sm text-charcoal transition-colors hover:text-brass ${FOCUS_RING}`}
                >
                  <Phone className="h-4 w-4 text-brass" aria-hidden="true" />
                  {CONTACT.phoneDisplay}
                </Link>
                <Link
                  href={CONTACT.emailHref}
                  className={`inline-flex items-center gap-2.5 rounded-sm text-charcoal transition-colors hover:text-brass ${FOCUS_RING}`}
                >
                  <Mail className="h-4 w-4 text-brass" aria-hidden="true" />
                  {CONTACT.emailDisplay}
                </Link>
              </div>
            </InViewItem>
          </InViewGroup>
        </div>
      </Container>
    </section>
  );
}
