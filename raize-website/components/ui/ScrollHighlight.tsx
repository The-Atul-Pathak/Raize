'use client'

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from 'framer-motion';

export function ScrollHighlight({
  text,
  className = ""
}: {
  text: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(' ');

  // Map scroll progress to word index
  const wordIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, words.length]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useMotionValueEvent(wordIndex, 'change', (v) => {
    setCurrentIndex(Math.floor(v));
  });

  // Reduced motion: show all words in primary colour immediately
  if (shouldReduce) {
    return (
      <p ref={containerRef} className={className}>
        {text}
      </p>
    );
  }

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          animate={{
            color: i <= currentIndex ? '#0F172A' : '#CBD5E1'
          }}
          transition={{ duration: 0.1 }}
          style={{ display: 'inline' }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </p>
  );
}
