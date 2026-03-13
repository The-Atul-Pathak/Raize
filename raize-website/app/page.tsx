import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StepCard } from "@/components/ui/StepCard";
import { PainPointCard } from "@/components/ui/PainPointCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { RaizeText } from "@/components/ui/RaizeText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Text_03 } from "@/components/ui/wave-text";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { SERVICES } from "@/lib/tokens";

const PAIN_POINTS = [
  "I know AI is important, but I don't know where to start.",
  "We're using five different tools and none of them talk to each other.",
  "I can't afford a full-time tech team, but I can't afford to fall behind either.",
  "We had someone set up our systems — but when something breaks, there's nobody to call.",
  "I've been burned by agencies that over-promise and under-deliver.",
];

const HOW_WE_WORK_STEPS = [
  {
    title: "Discovery",
    description: "We start with a free consultation to understand your business, your current tools, and where the biggest opportunities are. No jargon. No sales pressure.",
  },
  {
    title: "Proposal",
    description: "We put together a clear plan — scope, timeline, and fixed pricing — so you know exactly what you're getting before we begin.",
  },
  {
    title: "Build & Integrate",
    description: "Our team gets to work. Most clients see their first results within weeks, not months.",
  },
  {
    title: "Support & Grow",
    description: "We don't disappear after delivery. Through our retainer plans, we continue managing, optimising, and expanding your technology as your business grows.",
  },
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
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center bg-white px-4 text-center border-b border-border">
        <div className="container-site z-10 mx-auto max-w-4xl py-20">
          <Badge variant="gradient" className="mb-8">
            ⚡ Your Global AI technology partner
          </Badge>
          <h1 className="mb-6 font-heading text-5xl font-bold tracking-tight text-text-primary md:text-7xl lg:text-8xl">
            You know your business needs better technology. We make that happen — without the overwhelm.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
            <RaizeText /> partners with growing businesses to integrate AI tools, build
            custom software, and manage your full technology stack — so you can
            focus on what you do best.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact">Book a Free Discovery Call</Button>
            <Button href="/services" variant="ghost">
              See What We Do
            </Button>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm font-medium text-text-muted">
            <span>7 Services</span>
            <span className="hidden sm:inline">·</span>
            <span>100% Delivery Rate</span>
            <span className="hidden sm:inline">·</span>
            <span>Built for Global Impact</span>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip />

      {/* 2. Pain Points Section */}
      <section className="relative overflow-hidden bg-surface py-20 md:py-28">
        {/* Colour Blobs */}
        <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl opacity-25 pointer-events-none -z-0" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl opacity-25 pointer-events-none -z-0" />
        <div className="absolute top-1/2 left-1/3 h-40 w-40 rounded-full bg-yellow-400/25 blur-3xl opacity-25 pointer-events-none -z-0" />

        <div className="container-site relative z-10">
          <ScrollReveal>
            <SectionHeader
              heading="Sound familiar?"
              subtext="If any of these sound like your business, you've found the right partner."
              align="left"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PAIN_POINTS.map((quote, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <PainPointCard quote={quote} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Overview Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <SectionHeader
              heading="Everything your business needs — under one roof."
              subtext="From your first AI tool to a fully integrated technology stack, we build and manage it all."
              align="center"
            />
          </ScrollReveal>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const enhancement = SERVICE_ENHANCEMENTS[index % SERVICE_ENHANCEMENTS.length];
              return (
                <ScrollReveal key={service.title} delay={index * 0.1}>
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
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. How We Work Section */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <SectionHeader
              heading="Simple process. Real results."
              align="center"
            />
          </ScrollReveal>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {HOW_WE_WORK_STEPS.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.1}>
                <StepCard
                  step={index + 1}
                  title={step.title}
                  description={step.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why rAIze Section */}
      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
        {/* Lighter accent blobs for dark background */}
        <div className="absolute -right-10 -top-10 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl opacity-25 pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-yellow-300/15 blur-3xl opacity-25 pointer-events-none -z-0" />
        <div className="absolute top-1/3 right-1/4 h-48 w-48 rounded-full bg-pink-400/15 blur-3xl opacity-25 pointer-events-none -z-0" />

        <div className="container-site relative z-10">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                <Text_03 text="Why businesses choose rAIze" allowHighlight={false} />
              </h2>
              <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-accent-yellow" />
            </div>
          </ScrollReveal>
          <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
            {WHY_RAIZE_POINTS.map((point, index) => (
              <ScrollReveal key={point.title} delay={index * 0.1}>
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <SectionHeader heading="What our clients say" align="center" />
          </ScrollReveal>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <TestimonialCard
                quote={<> <RaizeText /> completely transformed how we handle our inbound inquiries. The AI tool integration saved us hours every single week.</>}
                author="Arjun Mehta"
                company="Apex Logistics"
                industry="Supply Chain"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <TestimonialCard
                quote={<>We thought custom software was out of our budget until we partnered with <RaizeText />. They delivered exactly what we needed in record time.</>}
                author="Priya Sharma"
                company="Elevate Marketing"
                industry="Agency"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <TestimonialCard
                quote="Having a single trusted partner for our website, social media, and internal dashboards has been a game changer for our operations."
                author="Vikram Singh"
                company="Singh Retail Pvt Ltd"
                industry="Retail"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="bg-gradient-to-br from-primary via-accent-violet to-accent-coral py-24 text-center text-white">
        <div className="container-site mx-auto max-w-3xl">
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            <Text_03 text="Ready to stop leaving technology on the table?" />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
            Book a free 30-minute discovery call. No pitch. No pressure. Just an
            honest conversation about what's possible for your business.
          </p>
          <div className="mt-10">
            <Button
              href="/contact"
              className="bg-white text-text-primary hover:bg-surface hover:text-text-primary"
              size="default"
            >
              Book a Free Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
