import { SectionHeader } from "@/components/ui/SectionHeader";
import { RaizeText } from "@/components/ui/RaizeText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TeamHorizontalScroll } from "@/components/sections/TeamHorizontalScroll";

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero / Mission */}
      <section className="bg-white py-20 px-4">
        <div className="container-site mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <SectionHeader
              caption="Our Mission"
              heading="We exist to level the playing field."
              align="center"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg mx-auto text-text-secondary">
            <p className="mb-6 leading-relaxed">
              At <RaizeText />, we believe that the businesses reshaping
              their industries in the next decade won't be the biggest ones —
              they'll be the ones that moved smartest. Our mission is to put
              enterprise-grade technology within reach of every ambitious mid-sized
              business, without the enterprise price tag or the six-month wait.
            </p>
            <p className="leading-relaxed">
              We don't just advise. We build, integrate, and stand
              behind everything we deliver — because we're not a vendor, we're your
              technology partner.
            </p>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Team Section — Horizontal Scroll */}
      <TeamHorizontalScroll />
    </>
  );
}
