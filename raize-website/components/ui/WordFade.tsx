'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, ElementType } from 'react';

type TagType = 'h1' | 'h2' | 'h3' | 'p' | 'span';

export function WordFade({
  text,
  className = "",
  delay = 0.3,
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
  const Tag = (as ?? 'p') as any;

  if (shouldReduce) {
    return <Tag ref={ref} className={className}>{text}</Tag>;
  }

  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: delay } }
  };

  const wordVariants = {
    hidden:  { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0,
               transition: { duration: 0.4,
                             ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
  };

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
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            style={{ display: 'inline-block' }}
          >
            {word}{i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
