"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { teamMembers } from "@/lib/teamData";
import { TeamMemberCard } from "@/components/ui/TeamMemberCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const CARD_WIDTH = 900;
const GAP = 64;
const PADDING = 96;

export function TeamHorizontalScroll() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ── Responsive check ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── Travel distance: how far the track needs to move horizontally ── */
  const travelDistance = (teamMembers.length - 1) * (CARD_WIDTH + GAP);

  /* ── Outer container height: travel distance + one full viewport ── */
  const outerHeight = prefersReduced
    ? "auto"
    : `calc(${travelDistance}px + 100vh)`;

  /* ── Scroll-linked horizontal transform ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -travelDistance]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveIndex(Math.round(v * (teamMembers.length - 1)));
  });

  /* ── Arrow handlers ── */
  function scrollToIndex(targetIndex: number) {
    const clamped = Math.max(0, Math.min(targetIndex, teamMembers.length - 1));
    const el = containerRef.current;
    if (!el) return;
    const containerTop = el.offsetTop;
    const scrollableHeight = el.offsetHeight - window.innerHeight;
    const targetScroll =
      containerTop +
      (clamped / (teamMembers.length - 1)) * scrollableHeight;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  }

  /* ── MOBILE FALLBACK ── */
  if (isMobile) {
    return (
      <section className="bg-white py-16 px-4">
        <div className="max-w-lg mx-auto">
          <ScrollReveal>
            <p
              className="text-xs uppercase font-semibold text-primary mb-3"
              style={{ letterSpacing: "0.2em" }}
            >
              OUR TEAM
            </p>
            <h2 className="text-4xl font-bold font-heading text-text-primary mb-10">
              The{" "}
              <span className="border-b-4 border-accent-yellow pb-0.5">
                people
              </span>{" "}
              behind rAIze
            </h2>
          </ScrollReveal>
          <div className="flex flex-col gap-8">
            {teamMembers.map((member) => (
              <ScrollReveal key={member.id}>
                <TeamMemberCard member={member} isMobile />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ── DESKTOP — Pinned horizontal scroll ── */
  return (
    <section
      ref={containerRef}
      style={{ height: outerHeight }}
      className="relative"
    >
      {/* Sticky inner — direct child, pins for full outer height */}
      <div
        style={{
          position: prefersReduced ? "relative" : "sticky",
          top: 0,
          height: prefersReduced ? "auto" : "100vh",
          overflow: "hidden",
        }}
        className="flex flex-col justify-center bg-white"
      >
        {/* Section header — inside sticky div, absolute positioned */}
        <div className="absolute top-12 left-16 z-10">
          <ScrollReveal>
            <p
              className="text-xs uppercase font-semibold text-primary"
              style={{ letterSpacing: "0.2em" }}
            >
              OUR TEAM
            </p>
            <h2 className="text-5xl font-bold font-heading text-text-primary mt-2">
              The{" "}
              <span className="border-b-4 border-accent-yellow pb-0.5">
                people
              </span>{" "}
              behind rAIze
            </h2>
          </ScrollReveal>
        </div>

        {/* Horizontal track */}
        {prefersReduced ? (
          <div
            className="flex gap-16 overflow-x-auto py-24 px-24"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                style={{
                  minWidth: CARD_WIDTH,
                  flexShrink: 0,
                  scrollSnapAlign: "center",
                }}
              >
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            style={{
              x,
              display: "flex",
              gap: GAP,
              paddingLeft: PADDING,
              paddingRight: PADDING,
              alignItems: "center",
              height: "100%",
            }}
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                style={{ minWidth: CARD_WIDTH, flexShrink: 0 }}
              >
                <TeamMemberCard member={member} />
              </div>
            ))}
          </motion.div>
        )}

        {/* Progress dots */}
        {!prefersReduced && (
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {teamMembers.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: i === activeIndex ? 1.4 : 1,
                  backgroundColor:
                    i === activeIndex ? "#2563EB" : "transparent",
                }}
                className="w-3 h-3 rounded-full border-2 border-primary"
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        )}

        {/* Prev arrow */}
        {!prefersReduced && activeIndex > 0 && (
          <button
            onClick={() => scrollToIndex(activeIndex - 1)}
            aria-label="Previous team member"
            className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-border-strong shadow-lg hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Next arrow */}
        {!prefersReduced && activeIndex < teamMembers.length - 1 && (
          <button
            onClick={() => scrollToIndex(activeIndex + 1)}
            aria-label="Next team member"
            className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-border-strong shadow-lg hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </section>
  );
}
