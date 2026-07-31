import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import heroImage from "@/public/images/hero-night.jpg";
import { Container } from "./layout/Container";
import { HeroImage } from "./motion/HeroImage";
import { StaggerGroup, StaggerItem } from "./motion/StaggerReveal";
import { CONTACT } from "@/lib/site-config";
import { FOCUS_RING } from "@/lib/ui";

export function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip pt-28 pb-20 sm:pt-32 md:pb-28 lg:pt-40">
      <Container>
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <StaggerGroup className="flex flex-col items-start gap-8">
            <StaggerItem className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-brass" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cream-muted">
                Welcome to My Guest House
              </span>
            </StaggerItem>

            <StaggerItem>
              <h1 className="text-balance text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-5xl md:text-6xl">
                Where Comfort Meets Ethiopian Hospitality
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="max-w-[38ch] text-lg leading-relaxed text-cream-muted">
                Thoughtful comfort, personal hospitality, and a peaceful place to settle in
                while you experience the city.
              </p>
            </StaggerItem>

            <StaggerItem className="flex flex-wrap items-center gap-4">
              <Link
                href={CONTACT.phoneHref}
                className={`group inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-semibold tracking-wide text-charcoal shadow-md shadow-black/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brass-light hover:shadow-[0_10px_30px_-8px_rgba(184,134,62,0.55)] active:translate-y-0 active:scale-[0.97] ${FOCUS_RING}`}
              >
                Book Your Stay
              </Link>
              <Link
                href={CONTACT.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm font-semibold tracking-wide text-cream transition-all duration-300 ease-out hover:border-brass/50 hover:bg-cream/[0.03] ${FOCUS_RING}`}
              >
                View Location
                <ArrowUpRight
                  className="h-4 w-4 text-brass transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </StaggerItem>

            <StaggerItem className="flex flex-col gap-3 pt-4 text-sm text-cream-muted sm:flex-row sm:items-center sm:gap-5">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brass" aria-hidden="true" />
                <a href={CONTACT.phoneHref} className={`rounded-sm transition-colors hover:text-cream ${FOCUS_RING}`}>
                  {CONTACT.phoneDisplay}
                </a>
              </div>
              <span aria-hidden="true" className="hidden h-3.5 w-px bg-hairline sm:block" />
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brass" aria-hidden="true" />
                <span>{CONTACT.location}</span>
              </div>
            </StaggerItem>
          </StaggerGroup>

          <div className="-mx-6 sm:-mx-8 md:mx-0 md:mt-[-2rem] lg:-mr-10 xl:-mr-16">
            <HeroImage
              src={heroImage}
              alt="My Guest House building exterior at night, with illuminated balconies and entrance signage"
              sizes="(min-width: 1024px) 38vw, (min-width: 768px) 45vw, 100vw"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
