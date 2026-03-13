import { type FC } from "react";
import { cn } from "@/lib/utils";
import { CountUp } from "@/components/ui/CountUp";

interface StatProps {
  to: number;
  suffix?: string;
  label: string;
  bg: string;
}

const StatCell: FC<StatProps> = ({ to, suffix, label, bg }) => {
  return (
    <div className={cn(bg, "py-7 px-6 text-center h-full flex flex-col justify-center")}>
      <p className="text-3xl md:text-4xl font-bold text-white font-heading tracking-tight">
        <CountUp to={to} suffix={suffix} />
      </p>
      <p className="text-sm text-white/70 mt-1 font-medium">
        {label}
      </p>
    </div>
  );
};

export const StatsStrip: FC = () => {
  return (
    <section className="w-full py-0">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <StatCell 
          to={7}
          suffix="+"
          label="Services offered" 
          bg="bg-blue-600" 
        />
        <StatCell 
          to={100}
          suffix="%"
          label="Delivery rate" 
          bg="bg-violet-600" 
        />
        <StatCell 
          to={48}
          suffix="hrs"
          label="Time to first result" 
          bg="bg-emerald-600" 
        />
      </div>
    </section>
  );
};
