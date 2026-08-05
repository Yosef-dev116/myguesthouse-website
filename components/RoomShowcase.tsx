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
  const imageSpan = featured ? "md:col-span-7" : "md:col-span-6";
  const textSpan = featured ? "md:col-span-5" : "md:col-span-6";
  const imageColStart = reverse ? "md:col-start-7" : "md:col-start-1";
  const textColStart = reverse ? "md:col-start-1" : featured ? "md:col-start-8" : "md:col-start-7";
  const aspect = featured ? "aspect-[16/11]" : "aspect-[4/5]";
  const focusPosition = featured ? "object-[50%_58%]" : "object-[50%_46%]";
  const rowAlign = featured ? "md:items-start" : "md:items-center";
  const textTopOffset = featured ? "md:pt-10" : "";

  return (
    <InViewGroup className={`grid gap-8 md:grid-cols-12 md:gap-x-12 ${rowAlign}`}>
      <InViewItem className={`${imageSpan} md:row-start-1 ${imageColStart}`}>
        <ImageReveal
          variant="settle"
          className={`group relative ${aspect} w-full overflow-hidden rounded-xl`}
        >
          <Image
            src={room.image}
            alt={room.alt}
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            placeholder="blur"
            className={`object-cover ${focusPosition} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
          />
        </ImageReveal>
      </InViewItem>

      <div
        className={`${textSpan} md:row-start-1 ${textColStart} ${textTopOffset} relative flex flex-col items-start`}
      >
        {featured && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-6 left-0 -z-10 select-none font-serif text-[5.5rem] leading-none text-brass/15 md:text-[7rem]"
          >
            {room.number}
          </span>
        )}

        <InViewItem className="flex items-center gap-3">
          {featured ? (
            <span aria-hidden="true" className="h-px w-8 bg-brass" />
          ) : (
            <>
              <span className="font-mono text-sm text-brass">{room.number}</span>
              <span aria-hidden="true" className="h-px w-8 bg-brass" />
            </>
          )}
        </InViewItem>

        <InViewItem className="mt-5">
          <h3 className="font-serif text-2xl font-medium tracking-tight text-cream md:text-3xl">
            {room.title}
          </h3>
        </InViewItem>

        <InViewItem className="mt-6">
          <p className="max-w-md text-base leading-relaxed text-cream-muted">{room.description}</p>
        </InViewItem>

        <InViewItem className="mt-7 w-full">
          <NestedStaggerList className="grid grid-cols-2 gap-x-6 gap-y-3">
            {room.features.map((feature) => (
              <NestedStaggerRow
                key={feature}
                className="flex items-center gap-2 text-sm tracking-wide text-cream-muted"
              >
                <span aria-hidden="true" className="h-px w-3 shrink-0 bg-brass" />
                {feature}
              </NestedStaggerRow>
            ))}
          </NestedStaggerList>
        </InViewItem>

        <InViewItem className="mt-8">
          <Link
            href={CONTACT.phoneHref}
            className={`group inline-flex items-center gap-2.5 border border-brass/50 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-cream transition-all duration-300 ease-out hover:border-brass hover:bg-brass hover:text-charcoal ${FOCUS_RING}`}
          >
            <Phone
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
              aria-hidden="true"
            />
            Ask About This Room
          </Link>
        </InViewItem>
      </div>
    </InViewGroup>
  );
}
