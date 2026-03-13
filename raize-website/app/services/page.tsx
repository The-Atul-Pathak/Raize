import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { RaizeText } from "@/components/ui/RaizeText";
import { RevealWrapper } from "@/components/ui/RevealWrapper";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { Text_03 } from "@/components/ui/wave-text";
import { Zap, LayoutDashboard, Globe, Share2, PhoneCall, MessageCircle, Layers } from "lucide-react";

export default function ServicesPage() {
  const DETAILED_SERVICES = [
    {
      title: "AI Tool Integration & Automation",
      icon: <Zap className="h-8 w-8 text-primary" />,
      colorClass: "bg-primary/10",
      description: (
        <>
          <p className="mb-4">
            The AI landscape is moving too fast to rely on guesswork. We help you identify the specific bottlenecks in your daily operations and implement the right AI tools to solve them — without overwhelming your team.
          </p>
          <p>
            From automating customer service inquiries to setting up intelligent CRMs, we handle the technical setup, data migration, and team training so you can start seeing a return on your investment immediately.
          </p>
        </>
      ),
      benefits: [
        "Reclaim 10+ hours per week per employee",
        "Eliminate human error in repetitive tasks",
        "Seamless integration with your existing CRM and software",
      ],
      comingSoon: false,
    },
    {
      title: "Custom Internal Software & Dashboards",
      icon: <LayoutDashboard className="h-8 w-8 text-accent-violet" />,
      colorClass: "bg-accent-violet/10",
      description: (
        <>
          <p className="mb-4">
            Off-the-shelf software rarely fits a growing business perfectly. When you're constantly relying on spreadsheets or duct-taping five different apps together, it's time for a bespoke solution.
          </p>
          <p>
            We build secure, scalable internal tools — like employee portals, HR systems, inventory trackers, and BI dashboards — tailored exactly to how you run your business. Get real-time visibility into your metrics and empower your team.
          </p>
        </>
      ),
      benefits: [
        "Consolidated reporting across departments",
        "Secure, role-based access for your team",
        "Built to scale alongside your operations",
      ],
      comingSoon: false,
    },
    {
      title: "Website Design & Development",
      icon: <Globe className="h-8 w-8 text-accent-green" />,
      colorClass: "bg-accent-green/10",
      description: (
        <>
          <p className="mb-4">
            Your website shouldn't just be an online brochure; it needs to be your best, 24/7 salesperson. We design and develop high-performance websites focused on lead generation, speed, and building brand credibility.
          </p>
          <p>
            From fast landing pages to complex corporate sites, we ensure every pixel serves a purpose. We build on modern platforms with best practice SEO, ensuring you're never held hostage just to make a simple update.
          </p>
        </>
      ),
      benefits: [
        "Lightning-fast load times for better SEO",
        "Mobile-first, conversion-optimised design",
        "Clear user journeys to capture highly qualified leads",
      ],
      comingSoon: false,
    },
    {
      title: "Social Media & Content Management",
      icon: <Share2 className="h-8 w-8 text-yellow-600" />,
      colorClass: "bg-accent-yellow/10",
      description: (
        <>
          <p className="mb-4">
            Consistency is the hardest part of social presence. We manage your presence end-to-end, seamlessly representing your brand voice across LinkedIn, Instagram, X, and Facebook.
          </p>
          <p>
            We handle the strategy, content creation, scheduling, and performance reporting. By crafting a cohesive strategy that builds community, we turn casual followers into interested prospects in your sales pipeline.
          </p>
        </>
      ),
      benefits: [
        "Consistent brand presence across platforms",
        "High-quality, engaging visual and copy assets",
        "Data-driven performance tracking and reporting",
      ],
      comingSoon: false,
    },
    {
      title: "AI Calling Agents",
      icon: <PhoneCall className="h-8 w-8 text-accent-coral" />,
      colorClass: "bg-accent-coral/10",
      description: (
        <>
          <p className="mb-4">
            Never miss a crucial lead or customer query again. We deploy intelligent voice agents capable of handling natural-sounding inbound and outbound calls.
          </p>
          <p>
            These custom AI agents qualify leads, seamlessly book appointments in your calendar, and answer frequently asked questions 24/7. It's like having an entire dedicated support and outbound sales team working around the clock.
          </p>
        </>
      ),
      benefits: [
        "24/7 availability for customer inquiries",
        "Automated lead qualification and routing",
        "Massive reduction in support operation costs",
      ],
      comingSoon: false,
    },
    {
      title: "WhatsApp Chatbots",
      icon: <MessageCircle className="h-8 w-8 text-accent-green" />,
      colorClass: "bg-accent-green/10",
      description: (
        <>
          <p className="mb-4">
            Meet your customers where they already spend their time. We build custom WhatsApp automations that engage directly with your customers on their preferred platform.
          </p>
          <p>
            From capturing initial leads and delivering automated quotes, to handling post-sale support and complex conversational branching — all managed perfectly without a human having to constantly monitor the inbox.
          </p>
        </>
      ),
      benefits: [
        "Instant response times for customer queries",
        "Higher open and engagement rates than email",
        "Seamless handover to human agents when needed",
      ],
      comingSoon: false,
    },
    {
      title: "SaaS Platform",
      icon: <Layers className="h-8 w-8 text-accent-violet" />,
      colorClass: "bg-accent-violet/10",
      description: (
        <>
          <p className="mb-4">
            <RaizeText /> is building the ultimate all-in-one business operating system. We're combining AI tools, project management, CRM capabilities, HR systems, and finance tracking into a single, unified workspace.
          </p>
          <p>
            Say goodbye to application fatigue and fragmented data silos. Our platform is designed specifically for the needs of mid-sized teams who want enterprise power without the complexity.
          </p>
        </>
      ),
      benefits: [
        "A single source of truth for your entire business",
        "Pre-integrated AI capabilities across all modules",
        "Massively reduced software subscription costs",
      ],
      comingSoon: true,
    },
  ];

  return (
    <>
      <section className="bg-surface py-20 px-4 border-b border-border">
        <div className="container-site text-center">
             <SectionHeader
               caption="Our Services"
               heading="Everything your business needs to grow."
               subtext="From your first automated workflow to a fully managed technology stack, we provide the tools and expertise to scale your operations."
               align="center"
             />
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <StaggerContainer className="container-site max-w-4xl mx-auto flex flex-col gap-24">
            {DETAILED_SERVICES.map((service) => (
              <RevealWrapper key={service.title} variant="fadeUp" className="flex flex-col md:flex-row gap-8 items-start">
                  <div className={`shrink-0 flex items-center justify-center h-16 w-16 rounded-2xl ${service.colorClass} shadow-sm`}>
                      {service.icon}
                  </div>
                  <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                          <h2 className="text-3xl font-heading font-bold text-text-primary">
                            <Text_03 text={service.title} />
                          </h2>
                          {service.comingSoon && (
                              <Badge variant="green">Coming Soon</Badge>
                          )}
                      </div>
                      
                      <div className="text-text-secondary text-lg leading-relaxed mb-6">
                          {service.description}
                      </div>

                      <div className="mb-8">
                          <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary mb-4">Key Benefits</h4>
                          <ul className="space-y-3">
                              {service.benefits.map((benefit, i) => (
                                  <li key={i} className="flex gap-3 text-text-secondary">
                                      <div className="mt-1 shrink-0 h-5 w-5 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center">
                                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                      </div>
                                      {benefit}
                                  </li>
                              ))}
                          </ul>
                      </div>
                      
                      <Button href={`/contact?service=${encodeURIComponent(service.title)}`} variant={service.comingSoon ? "secondary" : "primary"}>
                          {service.comingSoon ? "Join the Waitlist" : "Book a Discovery Call"}
                      </Button>
                  </div>
              </RevealWrapper>
            ))}
        </StaggerContainer>
      </section>
    </>
  );
}
