'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, ElementType } from 'react';

type TagType = 'h1' | 'h2' | 'h3' | 'p' | 'span';

export function TypeReveal({
  text,
  className = "",
  delay = 0,
  as,
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: TagType;
}) {
  const shouldReduce = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const Tag = (as ?? 'span') as any;

  // If reduced motion: show full text immediately, no animation
  if (shouldReduce) {
    return <Tag ref={ref} className={className}>{text}</Tag>;
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.025, delayChildren: delay } }
  };

  const charVariants = {
    hidden:  { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0,
               transition: { duration: 0.3, ease: 'easeOut' as any } }
  };

  const chars = text.split('');

  return (
    <Tag ref={ref} className={className}>
      {/* Screen reader version */}
      <span className="sr-only">{text}</span>

      {/* Animated version */}
      <motion.span
        aria-hidden="true"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            variants={charVariants}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
