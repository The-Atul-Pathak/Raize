import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamCard } from "@/components/ui/TeamCard";

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero / Mission */}
      <section className="bg-white py-20 px-4">
        <div className="container-site mx-auto max-w-4xl text-center">
          <SectionHeader
            caption="Our Mission"
            heading="We exist to level the playing field."
            align="center"
          />
          <div className="prose prose-lg mx-auto text-text-secondary">
            <p className="mb-6 leading-relaxed">
              At rAIze, we believe that the businesses reshaping
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
        </div>
      </section>

      {/* 2. Team Section */}
      <section className="bg-surface py-20 px-4">
        <div className="container-site">
          <SectionHeader
            heading="The people behind rAIze"
            align="center"
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TeamCard
              name="Atul Pathak"
              role="Co-Founder"
              bio="Atul brings over a decade of experience in software development and business technology. He specializes in identifying operational bottlenecks and deploying AI-driven solutions that drive measurable growth for ambitious mid-sized businesses."
            />
            <TeamCard
              name="[CO-FOUNDER 2 NAME]"
              role="Co-Founder"
              bio="[PLACEHOLDER: Bio — Client to provide]"
            />
            <TeamCard
              name="[PLACEHOLDER NAME]"
              role="[PLACEHOLDER ROLE]"
              bio="[PLACEHOLDER: Bio — Client to provide]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
