"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { transitions } from "@/lib/animations";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface StaggerContainerProps {
  className?: string;
  children: ReactNode;
  fast?: boolean;
}

export function StaggerContainer({
  className,
  children,
  fast = false,
}: StaggerContainerProps) {
  const prefersReduced = useReducedMotion();
  const { ref, isInView } = useScrollReveal("-60px");

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: fast ? transitions.staggerFast : transitions.stagger,
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
