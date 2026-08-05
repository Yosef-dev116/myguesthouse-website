import roomDeluxe from "@/public/images/room-deluxe.png";
import roomExecutive from "@/public/images/room-executive.png";
import { Container } from "./layout/Container";
import { RoomShowcase, type Room } from "./RoomShowcase";
import { SectionBridge } from "./SectionBridge";
import { InViewGroup, InViewItem } from "./motion/InView";

const ROOMS: Room[] = [
  {
    number: "01",
    title: "Deluxe Room",
    description:
      "A bright, modern room featuring a comfortable double bed, workspace, wardrobe, and generous natural light.",
    features: ["Double bed", "Workspace", "Wardrobe", "Large window"],
    image: roomDeluxe,
    alt: "The Deluxe Room at My Guest House, with a double bed, wardrobe, and large window",
  },
  {
    number: "02",
    title: "Executive Room",
    description:
      "A spacious room with a comfortable double bed, seating area, wardrobe, television, and extra room to relax.",
    features: ["Double bed", "Seating area", "Television", "Wardrobe"],
    image: roomExecutive,
    alt: "The Executive Room at My Guest House, with a double bed, seating area, and wall-mounted television",
  },
];

export function Rooms() {
  return (
    <section
      id="rooms"
      className="relative scroll-mt-28 overflow-x-clip bg-charcoal py-28 sm:py-32 md:py-40"
    >
      <SectionBridge tone="to-espresso" />

      <Container className="relative z-10">
        <InViewGroup>
          <InViewItem className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-brass" />
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-cream-muted">
              Rooms
            </span>
          </InViewItem>

          <div className="mt-6 grid gap-8 md:grid-cols-12 md:items-end md:gap-x-12">
            <InViewItem className="md:col-span-7 lg:col-span-8">
              <h2 className="font-serif text-balance text-3xl font-medium leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-5xl">
                Spaces designed for quiet, comfortable stays.
              </h2>
            </InViewItem>

            <InViewItem className="md:col-span-5 lg:col-span-4">
              <p className="max-w-md text-lg leading-relaxed text-cream-muted">
                Bright interiors, clean finishes, and thoughtful details create a calm place to
                rest while visiting Addis Ababa.
              </p>
            </InViewItem>
          </div>
        </InViewGroup>

        <div className="mt-16 flex flex-col gap-24 md:mt-20 md:gap-32">
          <RoomShowcase room={ROOMS[0]} featured />
          <RoomShowcase room={ROOMS[1]} reverse />
        </div>
      </Container>
    </section>
  );
}
