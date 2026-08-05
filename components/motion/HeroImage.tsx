"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function HeroImage({
  src,
  alt,
  priority,
}: {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 70]);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y: parallaxY }} className="absolute inset-x-0 -top-[6%] h-[112%] w-full">
        <motion.div
          className="h-full w-full"
          initial={{ scale: 1, x: "0%", y: "0%" }}
          animate={shouldReduceMotion ? undefined : { scale: 1.12, x: "-1.5%", y: "-1%" }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 34, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
          }
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            placeholder="blur"
            priority={priority}
            className="object-cover object-[50%_68%]"
          />
        </motion.div>
      </motion.div>
      <div
        aria-hidden="true"
        className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
      />
    </div>
  );
}
