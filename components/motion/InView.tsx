"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { DISTANCE, DURATION, EASE, VIEWPORT_ONCE } from "@/lib/motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

function itemVariants(distance: number): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    show: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE } },
  };
}

export function InViewGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : container}
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "show"}
      viewport={VIEWPORT_ONCE}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function InViewItem({
  children,
  className = "",
  distance = DISTANCE.sm,
}: {
  children: ReactNode;
  className?: string;
  /** Entrance travel distance in px (15-40 range). Defaults to a restrained 18px. */
  distance?: number;
}) {
  return (
    <motion.div variants={itemVariants(distance)} className={className}>
      {children}
    </motion.div>
  );
}
