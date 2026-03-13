'use client'

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export function BlurReveal({
  children,
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (shouldReduce) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ filter: 'blur(12px)', opacity: 0 }}
      animate={isInView
        ? { filter: 'blur(0px)', opacity: 1 }
        : { filter: 'blur(12px)', opacity: 0 }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
