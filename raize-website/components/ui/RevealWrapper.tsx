"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { variants as animationVariants, transitions } from "@/lib/animations";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface RevealWrapperProps {
  variant?: keyof typeof animationVariants;
  delay?: number;
  className?: string;
  children: ReactNode;
}

export function RevealWrapper({
  variant = "fadeUp",
  delay = 0,
  className,
  children,
}: RevealWrapperProps) {
  const prefersReduced = useReducedMotion();
  const { ref, isInView } = useScrollReveal();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants[variant]}
      transition={{ ...transitions.default, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
