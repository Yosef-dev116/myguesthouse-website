"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, type PointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { DURATION, EASE } from "@/lib/motion";

export function HeroImage({
  src,
  alt,
  sizes,
  priority,
}: {
  src: StaticImageData;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-18, 18]
  );

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 150, damping: 20, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 150, damping: 20, mass: 0.4 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(relativeX * -10);
    pointerY.set(relativeY * -10);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div ref={containerRef} className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-brass/20 opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-5 -right-5 hidden h-full w-full rounded-2xl border border-brass/25 md:block"
      />

      <motion.div style={{ y: parallaxY }}>
        <motion.div
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24, scale: shouldReduceMotion ? 1 : 1.04 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: DURATION.slower, delay: 0.15, ease: EASE }}
          className="relative aspect-[3/4] w-full overflow-hidden rounded-none shadow-[0_40px_80px_-30px_rgba(0,0,0,0.65)] md:rounded-2xl"
        >
          <motion.div style={{ x: springX, y: springY }} className="absolute inset-[-6%]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              placeholder="blur"
              priority={priority}
              className="object-cover"
            />
          </motion.div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/15 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-charcoal/30 via-transparent to-transparent"
          />
          <div
            aria-hidden="true"
            className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
