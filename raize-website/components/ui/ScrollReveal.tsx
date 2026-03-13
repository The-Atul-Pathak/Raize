"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  width?: "fit-content" | "100%";
}

export function ScrollReveal({ children, className, delay = 0, width = "100%" }: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: scaleIn.hidden,
        visible: {
          ...(scaleIn.visible as any),
          transition: {
            ...(scaleIn.visible as any)?.transition,
            delay,
          },
        },
      }}
      className={cn(className)}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
