"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Text_03 } from "@/components/ui/wave-text";
import { motion, useReducedMotion } from "framer-motion";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { variants, transitions } from "@/lib/animations";

export type SectionHeaderProps = {
  caption?: string;
  heading: string | ReactNode;
  subtext?: string | ReactNode;
  align?: "left" | "center";
  showStrip?: boolean;
  theme?: "light" | "dark";
  className?: string;
};

export const SectionHeader = ({
  caption,
  heading,
  subtext,
  align = "center",
  showStrip = true,
  theme = "light",
  className,
}: SectionHeaderProps) => {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";
  const { ref, isInView } = useScrollReveal();
  const prefersReduced = useReducedMotion();

  const textColor = theme === "dark" ? "text-white" : "text-text-primary";
  const subtextColor = theme === "dark" ? "text-white/80" : "text-text-secondary";

  return (
    <header
      ref={ref}
      className={cn("flex flex-col mb-16", alignClasses, className)}
    >
      {caption && (
        <motion.span
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={prefersReduced ? {} : variants.fadeUp}
          transition={transitions.default}
          className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary"
        >
          {caption}
        </motion.span>
      )}

      <motion.h2
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={prefersReduced ? {} : variants.fadeUp}
        transition={{ ...transitions.default, delay: 0.1 }}
        className={cn("text-3xl font-bold md:text-4xl text-center", textColor)}
      >
        {typeof heading === "string" ? <Text_03 text={heading} allowHighlight={theme !== "dark"} /> : heading}
      </motion.h2>

      {showStrip && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView && !prefersReduced ? { scaleX: 1 } : { scaleX: prefersReduced ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          style={{ transformOrigin: "left", width: "4rem" }}
          className="mt-4 h-1.5 rounded-full bg-accent-yellow"
        />
      )}

      {subtext && (
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={prefersReduced ? {} : variants.fadeUp}
          transition={{ ...transitions.default, delay: 0.2 }}
          className={cn("mt-6 max-w-2xl text-lg leading-relaxed", subtextColor)}
        >
          {subtext}
        </motion.p>
      )}
    </header>
  );
};
