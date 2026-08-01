import Image from "next/image";
import { GalleryTrigger } from "./GalleryTrigger";
import type { GalleryImageData } from "./Lightbox";

const IMAGE_SHADOW = "shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]";

export function GalleryFigure({
  index,
  image,
  aspectClassName,
  objectPosition,
  sizes,
}: {
  index: number;
  image: GalleryImageData;
  aspectClassName: string;
  objectPosition: string;
  sizes: string;
}) {
  return (
    <figure className="lg:flex lg:h-full lg:flex-col">
      <GalleryTrigger index={index} label={image.caption} className="lg:min-h-0 lg:flex-1">
        <div
          className={`relative w-full overflow-hidden rounded-2xl border border-hairline lg:aspect-auto lg:h-full ${aspectClassName} ${IMAGE_SHADOW}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            placeholder="blur"
            className={`object-cover ${objectPosition} transition-transform duration-700 ease-out group-hover:scale-105`}
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
      </GalleryTrigger>
      <figcaption className="mt-3 flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-6 bg-brass" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream-muted">
          {image.caption}
        </span>
      </figcaption>
    </figure>
  );
}
