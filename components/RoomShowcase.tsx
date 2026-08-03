import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/site-config";
import { FOCUS_RING } from "@/lib/ui";
import { InViewGroup, InViewItem } from "./motion/InView";
import { ImageReveal } from "./motion/ImageReveal";
import { NestedStaggerList, NestedStaggerRow } from "./motion/NestedStagger";

export type Room = {
  number: string;
  title: string;
  description: string;
  features: string[];
  image: StaticImageData;
  alt: string;
};

export function RoomShowcase({
  room,
  reverse = false,
  featured = false,
}: {
  room: Room;
  reverse?: boolean;
  featured?: boolean;
}) {
  const imageColStart = reverse ? "md:col-start-6" : "md:col-start-1";
  const textColStart = reverse ? "md:col-start-1" : "md:col-start-8";
  const focusPosition = featured ? "object-[50%_60%]" : "object-[50%_48%]";
  const textTopOffset = reverse ? "" : "md:pt-10";

  return (
    <InViewGroup className="grid gap-8 md:grid-cols-12 md:items-start md:gap-x-12">
      <InViewItem className={`md:col-span-7 md:row-start-1 ${imageColStart}`}>
        <ImageReveal
          variant="settle"
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-hairline shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]"
        >
          <Image
            src={room.image}
            alt={room.alt}
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            placeholder="blur"
            className={`object-cover ${focusPosition} transition-transform duration-700 ease-out group-hover:scale-105`}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"
          />
          <div
            aria-hidden="true"
            className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
          />
        </ImageReveal>
      </InViewItem>

      <div className={`md:col-span-5 md:row-start-1 ${textColStart} flex flex-col items-start ${textTopOffset}`}>
        <InViewItem className="flex items-center gap-3">
          {reverse ? (
            <>
              <span aria-hidden="true" className="h-px w-8 bg-brass" />
              <span className="font-mono text-sm text-brass">{room.number}</span>
            </>
          ) : (
            <>
              <span className="font-mono text-sm text-brass">{room.number}</span>
              <span aria-hidden="true" className="h-px w-8 bg-brass" />
            </>
          )}
        </InViewItem>

        <InViewItem className="mt-6">
          <h3 className="text-2xl font-medium tracking-tight text-cream md:text-3xl">
            {room.title}
          </h3>
        </InViewItem>

        <InViewItem className="mt-8">
          <p className="max-w-md text-base leading-relaxed text-cream-muted">
            {room.description}
          </p>
        </InViewItem>

        <InViewItem className="mt-8 w-full border-t border-hairline pt-8">
          <NestedStaggerList className="grid grid-cols-2 gap-x-6 gap-y-3">
            {room.features.map((feature) => (
              <NestedStaggerRow key={feature} className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-3 shrink-0 bg-brass" />
                <span className="text-sm tracking-wide text-cream-muted">{feature}</span>
              </NestedStaggerRow>
            ))}
          </NestedStaggerList>
        </InViewItem>

        <InViewItem className="mt-9">
          <Link
            href={CONTACT.phoneHref}
            className={`group inline-flex items-center gap-2 rounded-full border border-brass/30 px-5 py-2.5 text-sm font-semibold tracking-wide text-cream shadow-sm shadow-black/10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brass/60 hover:bg-brass/5 ${FOCUS_RING}`}
          >
            <Phone
              className="h-4 w-4 text-brass transition-transform duration-300 ease-out group-hover:translate-x-0.5"
              aria-hidden="true"
            />
            Ask About This Room
          </Link>
        </InViewItem>
      </div>
    </InViewGroup>
  );
}
