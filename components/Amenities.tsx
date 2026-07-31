import Image from "next/image";
import { Bath, Laptop, Phone, Shirt, Sun, Tv, UtensilsCrossed } from "lucide-react";
import diningAreaImage from "@/public/images/dining-area.png";
import { Container } from "./layout/Container";
import { AmenityGroup, type AmenityItem } from "./AmenityGroup";
import { InViewGroup, InViewItem } from "./motion/InView";
import { CONTACT } from "@/lib/site-config";

const IN_ROOM: AmenityItem[] = [
  { label: "Private bathroom", icon: Bath },
  { label: "Television", icon: Tv },
  { label: "Workspace", icon: Laptop },
  { label: "Wardrobe", icon: Shirt },
  { label: "Natural light", icon: Sun },
];

const SHARED_SPACES: AmenityItem[] = [
  { label: "Dining area", icon: UtensilsCrossed },
  { label: "Direct booking support", icon: Phone, href: CONTACT.phoneHref },
];

export function Amenities() {
  return (
    <section
      id="amenities"
      className="relative scroll-mt-28 overflow-x-clip border-t border-hairline bg-charcoal-elevated py-24 sm:py-28 md:py-36"
    >
      <Container>
        <InViewGroup>
          <InViewItem className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-brass" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cream-muted">
              Amenities
            </span>
          </InViewItem>

          <div className="mt-6 grid gap-8 md:grid-cols-12 md:items-end md:gap-x-12">
            <InViewItem className="md:col-span-7 lg:col-span-8">
              <h2 className="text-balance text-3xl font-medium leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-5xl">
                The essentials for an easy, comfortable stay.
              </h2>
            </InViewItem>

            <InViewItem className="md:col-span-5 lg:col-span-4">
              <p className="max-w-md text-lg leading-relaxed text-cream-muted">
                Thoughtful room features and welcoming shared spaces help make each stay simple,
                practical, and comfortable.
              </p>
            </InViewItem>
          </div>
        </InViewGroup>

        <InViewGroup className="mt-8 grid gap-10 md:mt-12 md:grid-cols-12 md:items-start md:gap-x-12">
          <InViewItem className="md:col-span-7 md:col-start-1 md:row-start-1">
            <figure className="md:max-w-[90%]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-hairline shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]">
                <Image
                  src={diningAreaImage}
                  alt="The dining area at My Guest House, seen through a lattice partition with plants"
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  placeholder="blur"
                  className="object-cover object-[50%_45%]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
                />
              </div>
              <figcaption className="mt-4 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-6 bg-brass" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream-muted">
                  Dining Area
                </span>
              </figcaption>
            </figure>
          </InViewItem>

          <div className="flex flex-col gap-14 md:col-span-5 md:col-start-8 md:row-start-1">
            <AmenityGroup title="In the room" items={IN_ROOM} />
            <AmenityGroup title="Shared spaces" items={SHARED_SPACES} />
          </div>
        </InViewGroup>
      </Container>
    </section>
  );
}
