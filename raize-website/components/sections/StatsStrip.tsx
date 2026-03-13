import { type FC } from "react";
import { cn } from "@/lib/utils";

/* ── Types ── */

interface StatProps {
  number: string;
  label: string;
  bg: string;
}

/* ── Sub-component: StatCell ── */

const StatCell: FC<StatProps> = ({ number, label, bg }) => {
  return (
    <div className={cn(bg, "py-7 px-6 text-center h-full flex flex-col justify-center")}>
      <p className="text-3xl md:text-4xl font-bold text-white font-heading tracking-tight">
        {/* [PLACEHOLDER: add CountUp animation here] */}
        {number}
      </p>
      <p className="text-sm text-white/70 mt-1 font-medium">
        {label}
      </p>
    </div>
  );
};

/* ── Main Component ── */

export const StatsStrip: FC = () => {
  return (
    <section className="w-full py-0">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <StatCell 
          number="7+" 
          label="Services offered" 
          bg="bg-blue-600" 
        />
        <StatCell 
          number="100%" 
          label="Delivery rate" 
          bg="bg-violet-600" 
        />
        <StatCell 
          number="48hrs" 
          label="Time to first result" 
          bg="bg-emerald-600" 
        />
      </div>
    </section>
  );
};
