'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export function ParallaxLayer({
  speed,
  children,
  className = ""
}: {
  speed: number;
  children: React.ReactNode;
  className?: string;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, speed * -200]);
  
  // Disable on mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
