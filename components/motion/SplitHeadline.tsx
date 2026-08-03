"use client";

import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { DURATION, EASE } from "@/lib/motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.fast, ease: EASE } },
};

/**
 * Word-by-word headline reveal. Inherits its "show" trigger from the nearest
 * ancestor motion component (a StaggerGroup or InViewGroup) the same way
 * InViewItem does, so it drops into an existing entrance sequence without
 * its own scroll/mount trigger. Words are separated by ordinary breakable
 * spaces (not spans), so responsive line-wrapping and text-balance behave
 * exactly as they did with a plain heading.
 */
export function SplitHeadline({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <h1 className={className}>{text}</h1>;
  }

  const words = text.split(" ");

  return (
    <motion.h1 variants={container} className={className}>
      {words.map((current, index) => (
        <Fragment key={`${current}-${index}`}>
          <motion.span variants={word} className="inline-block">
            {current}
          </motion.span>
          {index < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </motion.h1>
  );
}
