'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export function MorphingHeadline({
  phrases,
  interval = 2800,
  className = ""
}: {
  phrases: string[];
  interval?: number;
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    // Pause cycling if tab is not visible
    const handleVisibility = () => {
      if (document.hidden && timer) clearInterval(timer);
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const timer = setInterval(() => {
      if (!document.hidden) {
        setCurrentIndex((i) => (i + 1) % phrases.length);
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [phrases.length, interval]);

  // Reduced motion: just show the first phrase, no cycling
  if (shouldReduce) {
    return (
      <span className={className} aria-live="polite">
        {phrases[0]}
      </span>
    );
  }

  return (
    <span className={className} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{    opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ display: 'inline-block' }}
        >
          {phrases[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
