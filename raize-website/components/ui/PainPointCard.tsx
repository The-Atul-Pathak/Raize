import { type FC } from "react";
import { cn } from "@/lib/utils";

export type PainPointCardProps = {
  /** Pain point quote text */
  quote: string;
  className?: string;
};

export const PainPointCard: FC<PainPointCardProps> = ({ quote, className }) => {
  return (
    <article
      className={cn(
        "flex items-start gap-4 rounded-2xl border-l-4 border-l-accent-yellow bg-surface p-6",
        className
      )}
    >
      {/* Quotation icon */}
      <span
        className="shrink-0 font-serif text-2xl leading-none text-accent-yellow select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <p className="text-base leading-relaxed text-text-primary italic">
        {quote}
      </p>
    </article>
  );
};
