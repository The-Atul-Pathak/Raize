import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Text_03 } from "@/components/ui/wave-text";

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-white py-20 px-4">
         <div className="container-site">
              <SectionHeader
                caption="Portfolio"
                heading="Our work speaks for itself."
                subtext="We're just getting started — but great work is already underway. Check back soon for full case studies."
                align="center"
             />

             <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                 {[1, 2, 3].map((i) => (
                     <Card key={i} className="flex flex-col gap-4">
                         <div className="bg-surface py-12 rounded-lg flex items-center justify-center border border-dashed border-border text-text-muted mb-2">
                             Image Placeholder
                         </div>
                         <h3 className="text-xl font-bold bg-muted/20">
                            <Text_03 text={`[PLACEHOLDER: Industry Project ${i}]`} />
                         </h3>
                         <p className="text-text-secondary text-sm">
                             [PLACEHOLDER: Outcome Summary]
                         </p>
                     </Card>
                 ))}
             </div>

             <div className="mt-20 text-center">
                 <p className="text-lg text-text-primary mb-6">Interested in becoming one of our first case studies?</p>
                 <Button href="/contact">Let's Talk</Button>
             </div>
         </div>
      </section>
    </>
  );
}
