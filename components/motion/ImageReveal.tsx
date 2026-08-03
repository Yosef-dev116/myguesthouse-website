"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION, EASE } from "@/lib/motion";

const VARIANTS: Record<"clipSoft" | "clipHorizontal" | "settle", Variants> = {
  clipSoft: {
    hidden: { clipPath: "inset(9% round 2.5rem)" },
    show: {
      clipPath: "inset(0% round 2.5rem)",
      transition: { duration: DURATION.slower, ease: EASE },
    },
  },
  clipHorizontal: {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    show: {
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: DURATION.slower, ease: EASE },
    },
  },
  settle: {
    hidden: { scale: 1.06 },
    show: { scale: 1, transition: { duration: DURATION.slower, ease: EASE } },
  },
};

/**
 * Wraps image markup with a transform/clip-path-only reveal — never opacity,
 * so it composes cleanly when nested inside an InViewItem/StaggerItem that's
 * already fading the same block in. Has no viewport/mount trigger of its
 * own; it inherits the "hidden"/"show" state from that ancestor the same
 * way InViewItem does, so it always needs a motion ancestor to animate.
 */
export function ImageReveal({
  variant,
  className = "",
  children,
}: {
  variant: "clip-soft" | "clip-horizontal" | "settle";
  className?: string;
  children: ReactNode;
}) {
  const key = variant === "clip-soft" ? "clipSoft" : variant === "clip-horizontal" ? "clipHorizontal" : "settle";

  return (
    <motion.div variants={VARIANTS[key]} className={className}>
      {children}
    </motion.div>
  );
}
