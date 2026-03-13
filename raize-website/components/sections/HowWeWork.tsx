'use client'

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Search, FileText, Zap, TrendingUp } from "lucide-react";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

const steps = [
  {
    label: "STEP 01",
    headline: "Discovery",
    body: "We start with a free consultation to understand your business, your current tools, and where the biggest opportunities are. No jargon. No sales pressure.",
    color: "#2563EB",
    bgClass: "from-blue-500 to-violet-600",
    icon: Search
  },
  {
    label: "STEP 02",
    headline: "Proposal",
    body: "We put together a clear plan — scope, timeline, and fixed pricing — so you know exactly what you're getting before we begin.",
    color: "#8B5CF6",
    bgClass: "from-violet-500 to-purple-700",
    icon: FileText
  },
  {
    label: "STEP 03",
    headline: "Build & Integrate",
    body: "Our team gets to work. Most clients see their first results within weeks, not months.",
    color: "#10B981",
    bgClass: "from-emerald-400 to-cyan-600",
    icon: Zap
  },
  {
    label: "STEP 04",
    headline: "Support & Grow",
    body: "We don't disappear after delivery. Through our retainer plans, we continue managing, optimising, and expanding your technology as your business grows.",
    color: "#F43F5E",
    bgClass: "from-rose-500 to-orange-500",
    icon: TrendingUp
  }
];

export function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const stepIndex = useTransform(scrollYProgress, [0, 1], [0, steps.length - 1]);
  
  useMotionValueEvent(stepIndex, 'change', (v) => {
    setActiveStep(Math.min(steps.length - 1, Math.round(v)));
  });

  if (isMobile) {
    return (
      <section className="bg-white py-20 px-4">
        <div className="container-site max-w-lg mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400 mb-12">HOW WE WORK</p>
          <div className="flex flex-col gap-6">
            {steps.map((step, idx) => (
              <RevealWrapper key={idx}>
                <div 
                  className="rounded-2xl p-6 border-l-4 bg-surface shadow-sm"
                  style={{ borderLeftColor: step.color }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      <step.icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest" style={{ color: step.color }}>{step.label}</p>
                      <h3 className="text-xl font-bold text-slate-900 font-heading">{step.headline}</h3>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.body}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const current = steps[activeStep];
  const Icon = current.icon;

  return (
    <section ref={containerRef} style={{ height: '500vh' }} className="relative bg-white">
      <div 
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
        className="flex items-center"
      >
        {/* LEFT COLUMN */}
        <div className="w-1/2 pl-16 lg:pl-24 relative h-full flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400 mb-8 relative z-10">HOW WE WORK</p>
          
          {/* Watermark Number */}
          <div 
            className="absolute left-[-8px] top-1/2 -translate-y-1/2 text-[200px] font-bold leading-none text-slate-100 uppercase select-none pointer-events-none transition-opacity duration-300 z-0"
          >
            {current.label.split(" ")[1]}
          </div>

          <div className="relative z-10 h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <p 
                  className="text-sm uppercase tracking-[0.2em] font-bold mb-4 transition-colors duration-300"
                  style={{ color: current.color }}
                >
                  {current.label}
                </p>
                <h3 className="text-6xl font-bold text-slate-900 font-heading mb-6 leading-tight">
                  {current.headline}
                </h3>
                <p className="text-lg text-slate-500 leading-relaxed max-w-sm">
                  {current.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Dots */}
          <div className="mt-12 flex gap-3 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                layout
                className={`h-3 rounded-full ${idx === activeStep ? '' : 'bg-slate-200'}`}
                style={{
                  width: idx === activeStep ? '32px' : '12px',
                  backgroundColor: idx === activeStep ? step.color : undefined
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-1/2 flex items-center justify-center relative h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className={`w-[400px] h-[360px] rounded-3xl shadow-2xl bg-gradient-to-br ${current.bgClass} flex flex-col items-center justify-center p-8 ring-2 ring-white/20`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="text-white mb-6 bg-white/10 p-4 rounded-full backdrop-blur-sm">
                <Icon size={64} strokeWidth={1.5} />
              </div>
              <h4 className="text-white text-3xl font-bold text-center font-heading">
                {current.headline}
              </h4>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
