import heroNightImage from "@/public/images/hero-night.jpg";
import roomDeluxeImage from "@/public/images/room-deluxe.png";
import roomExecutiveImage from "@/public/images/room-executive.png";
import lobbyImage from "@/public/images/lobby.png";
import diningAreaImage from "@/public/images/dining-area.png";
import { Container } from "./layout/Container";
import { InViewGroup, InViewItem } from "./motion/InView";
import { LightboxProvider } from "./gallery/LightboxProvider";
import { GalleryFigure } from "./gallery/GalleryFigure";
import type { GalleryImageData } from "./gallery/Lightbox";

const GALLERY_IMAGES: GalleryImageData[] = [
  {
    src: heroNightImage,
    alt: "My Guest House building exterior at night, with illuminated balconies and entrance signage",
    caption: "Exterior at Night",
  },
  {
    src: roomDeluxeImage,
    alt: "The Deluxe Room at My Guest House, with a double bed, wardrobe, and large window",
    caption: "Deluxe Room",
  },
  {
    src: roomExecutiveImage,
    alt: "The Executive Room at My Guest House, with a double bed, seating area, and wall-mounted television",
    caption: "Executive Room",
  },
  {
    src: lobbyImage,
    alt: "The lobby at My Guest House, with a modern glass and timber partition and greenery near the entrance",
    caption: "Lobby",
  },
  {
    src: diningAreaImage,
    alt: "The dining area at My Guest House, seen through a lattice partition with plants",
    caption: "Dining Area",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative scroll-mt-28 overflow-x-clip border-t border-hairline bg-charcoal py-24 sm:py-28 md:py-36"
    >
      <Container>
        <InViewGroup>
          <InViewItem className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-brass" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cream-muted">
              Gallery
            </span>
          </InViewItem>

          <div className="mt-6 grid gap-8 md:grid-cols-12 md:items-end md:gap-x-12">
            <InViewItem className="md:col-span-7 lg:col-span-8">
              <h2 className="text-balance text-3xl font-medium leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-5xl">
                A closer look at your stay.
              </h2>
            </InViewItem>

            <InViewItem className="md:col-span-5 lg:col-span-4">
              <p className="max-w-md text-lg leading-relaxed text-cream-muted">
                Explore the rooms, shared spaces, and warm details that shape the atmosphere of My
                Guest House.
              </p>
            </InViewItem>
          </div>
        </InViewGroup>

        <LightboxProvider images={GALLERY_IMAGES}>
          <InViewGroup className="mt-12 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-12 lg:auto-rows-[120px] lg:gap-6">
            {/* Exterior at Night — featured, tall, full-height on desktop */}
            <InViewItem className="md:col-span-2 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:row-span-5">
              <GalleryFigure
                index={0}
                image={GALLERY_IMAGES[0]}
                aspectClassName="aspect-[4/5]"
                objectPosition="object-[50%_45%]"
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 90vw, 100vw"
              />
            </InViewItem>

            {/* Deluxe Room — tall secondary */}
            <InViewItem className="lg:col-span-3 lg:col-start-6 lg:row-start-1 lg:row-span-3">
              <GalleryFigure
                index={1}
                image={GALLERY_IMAGES[1]}
                aspectClassName="aspect-[3/4]"
                objectPosition="object-[50%_58%]"
                sizes="(min-width: 1024px) 24vw, (min-width: 768px) 45vw, 100vw"
              />
            </InViewItem>

            {/* Executive Room — wide supporting */}
            <InViewItem className="lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:row-span-2">
              <GalleryFigure
                index={2}
                image={GALLERY_IMAGES[2]}
                aspectClassName="aspect-[4/3]"
                objectPosition="object-[50%_50%]"
                sizes="(min-width: 1024px) 32vw, (min-width: 768px) 45vw, 100vw"
              />
            </InViewItem>

            {/* Lobby — small detail */}
            <InViewItem className="lg:col-span-3 lg:col-start-6 lg:row-start-4 lg:row-span-2">
              <GalleryFigure
                index={3}
                image={GALLERY_IMAGES[3]}
                aspectClassName="aspect-square"
                objectPosition="object-[50%_42%]"
                sizes="(min-width: 1024px) 24vw, (min-width: 768px) 45vw, 100vw"
              />
            </InViewItem>

            {/* Dining Area — small detail */}
            <InViewItem className="lg:col-span-4 lg:col-start-9 lg:row-start-3 lg:row-span-3">
              <GalleryFigure
                index={4}
                image={GALLERY_IMAGES[4]}
                aspectClassName="aspect-[4/5]"
                objectPosition="object-[50%_45%]"
                sizes="(min-width: 1024px) 32vw, (min-width: 768px) 45vw, 100vw"
              />
            </InViewItem>
          </InViewGroup>
        </LightboxProvider>
      </Container>
    </section>
  );
}
