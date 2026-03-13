"use client";

import {
  useMotionValue,
  useSpring,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({
  to,
  from = 0,
  duration = 1.5,
  suffix = "",
  prefix = "",
  className,
}: CountUpProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(
    prefersReduced ? to : from
  );

  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useMotionValueEvent(springValue, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  useEffect(() => {
    if (isInView && !prefersReduced) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to, prefersReduced]);

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}
