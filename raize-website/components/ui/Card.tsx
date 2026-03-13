import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Remove hover effects (useful for static cards) */
  noHover?: boolean;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, noHover = false, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-border bg-white p-6 md:p-8",
        !noHover &&
          "shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
