/**
 * Framer Motion animation presets — rAIze Website
 * Import these variants/transitions instead of defining ad-hoc values.
 */

import type { Variants, Transition } from "framer-motion";

/* ── Transitions ── */

export const defaultTransition: Transition = {
  duration: 0.4,
  ease: "easeOut",
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

/* ── Variants ── */

/** Fade in + slide up 24px */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/** Fade in + scale from 95% */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

/** Slide in from the left */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

/** Slide in from the right */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

/** Stagger container — wraps child items that use fadeInUp/scaleIn */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/** Card hover — lift up + shadow */
export const cardHover = {
  y: -4,
  transition: { duration: 0.2, ease: "easeOut" as const },
};

/* ── Reduced Motion Helper ── */

/**
 * Returns animation variants that are identity (no animation) when
 * the user prefers reduced motion.
 */
export function getReducedMotionVariants(variants: Variants): Variants {
  return {
    hidden: {},
    visible: {
      transition: { duration: 0 },
    },
    ...Object.fromEntries(
      Object.entries(variants).map(([key]) => [
        key,
        key === "visible" ? { transition: { duration: 0 } } : {},
      ])
    ),
  };
}
