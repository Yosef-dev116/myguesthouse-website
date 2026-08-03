/**
 * Shared motion tokens. Centralized so every entrance animation across the
 * site (Framer Motion only, no other animation library) stays within the
 * same calm, premium range: 500-1000ms durations, 15-40px movement.
 */

export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.5,
  base: 0.6,
  slow: 0.8,
  slower: 0.9,
} as const;

export const DISTANCE = {
  sm: 18,
  md: 24,
  lg: 32,
} as const;

export const VIEWPORT_ONCE = { once: true, amount: 0.3 } as const;
