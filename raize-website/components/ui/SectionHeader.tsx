import { type FC, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Text_03 } from "@/components/ui/wave-text";

export type SectionHeaderProps = {
  /** Small uppercase caption above the heading (e.g. "Our Services") */
  caption?: string;
  /** Main heading text */
  heading: string | ReactNode;
  /** Subtext below the heading */
  subtext?: string | ReactNode;
  /** Text alignment */
  align?: "left" | "center";
  /** Show yellow colour strip accent under heading */
  showStrip?: boolean;
  className?: string;
};

export const SectionHeader: FC<SectionHeaderProps> = ({
  caption,
  heading,
  subtext,
  align = "center",
  showStrip = true,
  className,
}) => {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <header
      className={cn("flex flex-col mb-16", alignClasses, className)}
    >
      {/* Caption */}
      {caption && (
        <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          {caption}
        </span>
      )}

      {/* Heading */}
      <h2 className="text-3xl font-bold text-text-primary md:text-4xl text-center">
        {typeof heading === "string" ? <Text_03 text={heading} /> : heading}
      </h2>

      {/* Yellow strip */}
      {showStrip && (
        <div className="mt-4 h-1.5 w-16 rounded-full bg-accent-yellow" />
      )}

      {/* Subtext */}
      {subtext && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
          {subtext}
        </p>
      )}
    </header>
  );
};
