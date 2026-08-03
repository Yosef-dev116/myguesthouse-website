"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION, EASE } from "@/lib/motion";

/**
 * A second, shorter stagger layer for rows inside an already-revealing
 * section (amenity rows, room feature bullets). Like InViewItem, these have
 * no viewport/mount trigger of their own — they inherit "hidden"/"show" from
 * the nearest ancestor InViewGroup/StaggerGroup and simply re-stagger their
 * own children with a shorter delay, so no second observer is created.
 */
export function NestedStaggerList({
  children,
  className = "",
  staggerDelay = 0.06,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: staggerDelay } },
  };

  return (
    <motion.ul variants={container} className={className}>
      {children}
    </motion.ul>
  );
}

const row: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.fast, ease: EASE } },
};

export function NestedStaggerRow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.li variants={row} className={className}>
      {children}
    </motion.li>
  );
}

const icon: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: DURATION.fast, ease: EASE } },
};

export function NestedStaggerIcon({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span variants={icon} className={`inline-flex ${className}`}>
      {children}
    </motion.span>
  );
}
