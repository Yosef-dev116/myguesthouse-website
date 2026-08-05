import Image from "next/image";
import { Bath, Laptop, Phone, Shirt, Sun, Tv, UtensilsCrossed } from "lucide-react";
import diningAreaImage from "@/public/images/dining-area.png";
import { Container } from "./layout/Container";
import { AmenityGroup, type AmenityItem } from "./AmenityGroup";
import { SectionBridge } from "./SectionBridge";
import { InViewGroup, InViewItem } from "./motion/InView";
import { ImageReveal } from "./motion/ImageReveal";
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
      data-nav-theme="light"
      className="relative scroll-mt-28 overflow-x-clip bg-cream py-28 sm:py-32 md:py-40"
    >
      <SectionBridge tone="to-ivory" />
      <div aria-hidden="true" className="about-motif-overlay pointer-events-none absolute inset-0" />

      <Container className="relative z-10">
        <div className="grid gap-16 md:grid-cols-12 md:items-center md:gap-x-14">
          <InViewGroup className="md:col-span-6">
            <InViewItem>
              <ImageReveal
                variant="clip-soft"
                className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[3.5rem] rounded-b-lg"
              >
                <Image
                  src={diningAreaImage}
                  alt="The dining area at My Guest House, seen through a lattice partition with plants"
                  fill
                  sizes="(min-width: 768px) 42vw, 92vw"
                  placeholder="blur"
                  className="object-cover object-[50%_45%]"
                />
              </ImageReveal>
            </InViewItem>
          </InViewGroup>

          <InViewGroup className="flex flex-col items-start gap-8 md:col-span-6 md:pl-4">
            <InViewItem className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-brass" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-brass">
                Amenities
              </span>
            </InViewItem>

            <InViewItem>
              <h2 className="font-serif text-balance text-3xl font-medium leading-[1.15] tracking-tight text-charcoal sm:text-4xl md:text-[2.75rem]">
                The essentials for an easy, comfortable stay.
              </h2>
            </InViewItem>

            <InViewItem>
              <p className="max-w-[48ch] text-lg leading-relaxed text-charcoal/70">
                Thoughtful room features and welcoming shared spaces help make each stay simple,
                practical, and comfortable.
              </p>
            </InViewItem>

            <div className="grid w-full grid-cols-1 gap-10 border-t border-charcoal/10 pt-8 sm:grid-cols-2">
              <AmenityGroup title="In the room" items={IN_ROOM} />
              <AmenityGroup title="Shared spaces" items={SHARED_SPACES} />
            </div>
          </InViewGroup>
        </div>
      </Container>
    </section>
  );
}
