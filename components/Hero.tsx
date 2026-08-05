import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import heroImage from "@/public/images/hero-night.jpg";
import { Container } from "./layout/Container";
import { HeroImage } from "./motion/HeroImage";
import { HeroMotif } from "./HeroMotif";
import { StaggerGroup, StaggerItem } from "./motion/StaggerReveal";
import { SplitHeadline } from "./motion/SplitHeadline";
import { CONTACT } from "@/lib/site-config";
import { FOCUS_RING } from "@/lib/ui";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92vh] w-full items-center overflow-hidden lg:min-h-screen"
    >
      <HeroImage
        src={heroImage}
        alt="My Guest House building exterior at night, with illuminated balconies and entrance signage"
        priority
      />

      {/* Mobile: bottom-heavy scrim so the full-bleed image stays readable behind stacked text.
          sm and up: scrim is confined to roughly the left third of the frame (fading fully
          transparent by ~58%) so the architecture keeps dominating the majority of the image. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/75 from-0% via-charcoal/35 via-45% to-transparent to-80% sm:bg-gradient-to-r sm:from-charcoal/78 sm:from-0% sm:via-charcoal/28 sm:via-32% sm:to-transparent sm:to-58%"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal/35 via-transparent to-transparent"
      />
      {/* Closing vignette so the hero hands off to the About section on a
          consistent dark edge, regardless of what the image looks like there. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-charcoal/80 sm:h-32"
      />

      <HeroMotif className="absolute inset-y-0 left-0 z-20 hidden opacity-70 mix-blend-soft-light sm:block" />

      <Container className="relative z-10">
        <StaggerGroup className="flex max-w-md flex-col items-start gap-7 py-24 sm:max-w-lg sm:py-0">
          <StaggerItem className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-brass" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-cream-muted">
              Welcome to My Guest House
            </span>
          </StaggerItem>

          <SplitHeadline
            text="Where Comfort Meets Ethiopian Hospitality"
            className="font-serif text-balance text-4xl font-medium leading-[1.1] tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]"
          />

          <StaggerItem>
            <p className="max-w-[34ch] text-lg leading-relaxed text-cream-muted">
              Thoughtful comfort, personal hospitality, and a peaceful place to settle in
              while you experience the city.
            </p>
          </StaggerItem>

          <StaggerItem className="flex flex-wrap items-center gap-8 pt-2">
            <Link
              href={CONTACT.phoneHref}
              className={`group inline-flex items-center border border-brass/60 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-cream transition-all duration-500 ease-out hover:border-brass hover:bg-brass hover:text-charcoal ${FOCUS_RING}`}
            >
              Book Your Stay
            </Link>
            <Link
              href={CONTACT.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-cream transition-colors duration-300 hover:text-brass-light ${FOCUS_RING}`}
            >
              <span className="border-b border-cream/30 pb-0.5 transition-colors group-hover:border-brass-light">
                View Location
              </span>
              <ArrowUpRight
                className="h-3.5 w-3.5 text-brass transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </StaggerItem>

          <StaggerItem className="flex flex-col gap-3 border-t border-cream/15 pt-5 text-sm text-cream-muted sm:flex-row sm:items-center sm:gap-5">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brass" aria-hidden="true" />
              <a href={CONTACT.phoneHref} className={`rounded-sm transition-colors hover:text-cream ${FOCUS_RING}`}>
                {CONTACT.phoneDisplay}
              </a>
            </div>
            <span aria-hidden="true" className="hidden h-3.5 w-px bg-cream/15 sm:block" />
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brass" aria-hidden="true" />
              <span>{CONTACT.location}</span>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </Container>
    </section>
  );
}
