import { type FC } from "react";
import { cn } from "@/lib/utils";
import { Text_03 } from "@/components/ui/wave-text";

export type StepCardProps = {
  /** Step number (1, 2, 3, 4) */
  step: number;
  /** Step title (e.g. "Discovery") */
  title: string;
  /** Step description */
  description: string;
  className?: string;
};

export const StepCard: FC<StepCardProps> = ({
  step,
  title,
  description,
  className,
}) => {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm",
        className
      )}
    >
      {/* Large watermark number */}
      <span
        className="absolute -top-4 -right-2 font-heading text-[8rem] font-bold leading-none text-primary/[0.07] select-none pointer-events-none"
        aria-hidden="true"
      >
        {step}
      </span>

      {/* Step label */}
      <span className="relative z-10 text-sm font-semibold text-primary">
        Step {step}
      </span>

      {/* Title */}
      <h3 className="relative z-10 mt-2 text-xl font-semibold text-text-primary">
        <Text_03 text={title} />
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-3 leading-relaxed text-text-secondary">
        {description}
      </p>
    </article>
  );
};
