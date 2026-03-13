'use client'

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getGPUTier } from '@pmndrs/detect-gpu';
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PainPointCard } from "@/components/ui/PainPointCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { RaizeText } from "@/components/ui/RaizeText";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { Text_03 } from "@/components/ui/wave-text";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { TypeReveal } from "@/components/ui/TypeReveal";
import { WordFade } from "@/components/ui/WordFade";
import { ScrollHighlight } from "@/components/ui/ScrollHighlight";
import { MorphingHeadline } from "@/components/ui/MorphingHeadline";
import { SERVICES } from "@/lib/tokens";

const ParticleCanvas = dynamic(
  () => import('@/components/three/ThreeCanvas').then(mod => {
    const { ThreeCanvas } = mod;
    const { ParticleField } = require('@/components/three/ParticleField');
    return function ParticleScene() {
      return (
        <ThreeCanvas style={{ position: 'absolute', inset: 0 }}>
          <ParticleField />
        </ThreeCanvas>
      );
    }
  }),
  {
    ssr: false,
    loading: () => <CSSParticleFallbackStandalone />,
  }
);

function CSSParticleFallbackStandalone() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.10) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.08) 0%, transparent 55%)
        `,
        pointerEvents: 'none',
      }}
    />
  );
}

const PAIN_POINTS = [
  "I know AI is important, but I don't know where to start.",
  "We're using five different tools and none of them talk to each other.",
  "I can't afford a full-time tech team, but I can't afford to fall behind either.",
  "We had someone set up our systems — but when something breaks, there's nobody to call.",
  "I've been burned by agencies that over-promise and under-deliver.",
];



const WHY_RAIZE_POINTS = [
  {
    title: "Speed",
    description: "We deliver in days and weeks. Not quarters.",
  },
  {
    title: "Affordability",
    description: "A fraction of the cost of hiring an in-house tech team, with more expertise across the board.",
  },
  {
    title: "AI-First",
    description: "Unlike generalist digital agencies, AI integration is our core competency — not an add-on.",
  },
  {
    title: "One Trusted Partner",
    description: "Strategy, builds, integrations, support — one team, one relationship, one invoice.",
  },
  {
    title: "We Stay",
    description: "Our retainer model means we have a long-term stake in your success. We're not here to sell you something and move on.",
  },
];

const SERVICE_ENHANCEMENTS = [
  { topColor: "bg-blue-500", borderHover: "hover:border-blue-500/40", iconBg: "bg-blue-50", iconColor: "text-blue-600" },
  { topColor: "bg-violet-500", borderHover: "hover:border-violet-500/40", iconBg: "bg-violet-50", iconColor: "text-violet-600" },
  { topColor: "bg-emerald-500", borderHover: "hover:border-emerald-500/40", iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
  { topColor: "bg-yellow-400", borderHover: "hover:border-yellow-400/40", iconBg: "bg-yellow-50", iconColor: "text-yellow-600" },
  { topColor: "bg-rose-500", borderHover: "hover:border-rose-500/40", iconBg: "bg-rose-50", iconColor: "text-rose-600" },
  { topColor: "bg-emerald-400", borderHover: "hover:border-emerald-400/40", iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
  { topColor: "bg-violet-400", borderHover: "hover:border-violet-400/40", iconBg: "bg-violet-50", iconColor: "text-violet-600" },
];

export default function Home() {
  const { scrollY } = useScroll();
  const canvasOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    async function checkGPU() {
      // Also skip on mobile — particle field is not worth the battery drain
      if (window.innerWidth < 768) {
        setShowCanvas(false);
        return;
      }
      try {
        const gpuTier = await getGPUTier();
        // tier 0 = blacklisted, tier 1 = low-end, tier 2+ = capable
        setShowCanvas(gpuTier.tier >= 2);
      } catch {
        // If detection fails, show canvas anyway (desktop assumed capable)
        setShowCanvas(true);
      }
    }
    checkGPU();
  }, []);

  return (
    <>
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center bg-white px-4 text-center border-b border-border overflow-hidden">
        {/* Particle canvas — absolute, fills hero, sits behind all content */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ opacity: canvasOpacity, pointerEvents: 'none', width: '100%', height: '100%' }}
        >
          {showCanvas ? <ParticleCanvas /> : <CSSParticleFallbackStandalone />}
        </motion.div>

        {/* Parallax Background Decor */}
        <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] h-[800px] w-[800px] rounded-full bg-blue-50/50 blur-3xl"></div>
          <div className="absolute top-[30%] -left-[10%] h-[600px] w-[600px] rounded-full bg-violet-50/50 blur-3xl"></div>
        </ParallaxLayer>

        <div className="container-site z-10 mx-auto max-w-4xl py-20 relative">
          <Badge variant="gradient" className="mb-8">
            ⚡ Your Global AI technology partner
          </Badge>
          <TypeReveal
            as="h1"
            text="You know your business needs better technology. We make that happen — without the overwhelm."
            delay={0.2}
            className="mb-6 font-heading text-5xl font-bold tracking-tight text-text-primary md:text-7xl lg:text-8xl"
          />
          <ParallaxLayer speed={0.08}>
            <WordFade
              as="p"
              text="rAIze partners with growing businesses to integrate AI tools, build custom software, and manage your full technology stack — so you can focus on what you do best."
              delay={0.5}
              className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl relative z-10 bg-white/50 backdrop-blur-sm rounded-lg p-2"
            />
          </ParallaxLayer>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact">Book a Free Discovery Call</Button>
            <Button href="/services" variant="ghost">
              See What We Do
            </Button>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="relative overflow-hidden bg-surface py-20 md:py-28">
        <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl opacity-25 pointer-events-none -z-0" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl opacity-25 pointer-events-none -z-0" />
        <div className="absolute top-1/2 left-1/3 h-40 w-40 rounded-full bg-yellow-400/25 blur-3xl opacity-25 pointer-events-none -z-0" />

        <div className="container-site relative z-10">
          <SectionHeader
            heading="Sound familiar?"
            subtext="If any of these sound like your business, you've found the right partner."
            align="left"
          />
          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PAIN_POINTS.map((quote, i) => (
              <RevealWrapper key={i} variant="scaleIn">
                <PainPointCard quote={quote} />
              </RevealWrapper>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-site">
          <SectionHeader
            heading="Everything your business needs — under one roof."
            align="center"
          />
          <div className="mt-6 mb-8 text-center">
            <MorphingHeadline
              phrases={[
                "AI tools, built for your workflow.",
                "Custom software, without the complexity.",
                "Websites that actually convert.",
                "WhatsApp chatbots that work 24/7.",
                "AI calling agents that never miss a lead.",
                "Social media, managed end-to-end.",
              ]}
              interval={2600}
              className="text-2xl md:text-3xl font-semibold text-blue-600 font-['Space_Grotesk'] min-h-[1.2em]"
            />
          </div>
          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const enhancement = SERVICE_ENHANCEMENTS[index % SERVICE_ENHANCEMENTS.length];
              return (
                <RevealWrapper key={service.title} variant="scaleIn">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    colour={{
                      iconBg: enhancement.iconBg,
                      iconColor: enhancement.iconColor,
                    }}
                    topColor={enhancement.topColor}
                    borderHover={enhancement.borderHover}
                    comingSoon={service.comingSoon}
                  />
                </RevealWrapper>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <HowWeWork />

      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
        <div className="absolute -right-10 -top-10 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl opacity-25 pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-yellow-300/15 blur-3xl opacity-25 pointer-events-none -z-0" />
        <div className="absolute top-1/3 right-1/4 h-48 w-48 rounded-full bg-pink-400/15 blur-3xl opacity-25 pointer-events-none -z-0" />

        <div className="container-site relative z-10">
          <SectionHeader
             heading="Why businesses choose rAIze"
             theme="dark"
             align="center"
          />
          <div className="mx-auto mb-16 text-center">
            <ScrollHighlight
              text="We don't just advise. We build, integrate, and stand behind everything we deliver — because we're not a vendor, we're your technology partner."
              className="text-xl md:text-2xl leading-relaxed font-medium max-w-3xl mx-auto text-white"
            />
          </div>
          <StaggerContainer className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
            {WHY_RAIZE_POINTS.map((point) => (
              <RevealWrapper key={point.title} variant="fadeUp">
                <div className="flex gap-4">
                  <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      <Text_03 text={point.title} />
                    </h3>
                    <p className="mt-2 text-white/80 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-site">
          <SectionHeader heading="What our clients say" align="center" />
          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <RevealWrapper variant="scaleIn">
              <TestimonialCard
                quote={<> <RaizeText /> completely transformed how we handle our inbound inquiries. The AI tool integration saved us hours every single week.</>}
                author="Arjun Mehta"
                company="Apex Logistics"
                industry="Supply Chain"
              />
            </RevealWrapper>
            <RevealWrapper variant="scaleIn">
              <TestimonialCard
                quote={<>We thought custom software was out of our budget until we partnered with <RaizeText />. They delivered exactly what we needed in record time.</>}
                author="Priya Sharma"
                company="Elevate Marketing"
                industry="Agency"
              />
            </RevealWrapper>
            <RevealWrapper variant="scaleIn">
              <TestimonialCard
                quote="Having a single trusted partner for our website, social media, and internal dashboards has been a game changer for our operations."
                author="Vikram Singh"
                company="Singh Retail Pvt Ltd"
                industry="Retail"
              />
            </RevealWrapper>
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary via-accent-violet to-accent-coral py-24 text-center text-white">
        <div className="container-site mx-auto max-w-3xl">
          <RevealWrapper>
            <h2 className="font-heading text-4xl font-bold md:text-5xl">
              <Text_03 text="Ready to stop leaving technology on the table?" />
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
              Book a free 30-minute discovery call. No pitch. No pressure. Just an
              honest conversation about what's possible for your business.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={0.2} className="mt-10">
            <Button
              href="/contact"
              className="bg-white text-text-primary hover:bg-surface hover:text-text-primary"
              size="default"
            >
              Book a Free Discovery Call
            </Button>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
