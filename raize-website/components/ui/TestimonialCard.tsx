import { type FC } from "react";
import { cn } from "@/lib/utils";

export type TestimonialCardProps = {
  /** The testimonial quote text */
  quote: string;
  /** Author name */
  author: string;
  /** Author's company or business name */
  company: string;
  /** Industry or role */
  industry?: string;
  className?: string;
};

export const TestimonialCard: FC<TestimonialCardProps> = ({
  quote,
  author,
  company,
  industry,
  className,
}) => {
  return (
    <article
      className={cn(
        "rounded-2xl bg-surface p-8 shadow-sm",
        className
      )}
    >
      {/* Decorative quote mark */}
      <span
        className="block font-serif text-6xl leading-none text-primary/20 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote */}
      <blockquote className="mt-2 text-lg italic leading-relaxed text-text-primary">
        {quote}
      </blockquote>

      {/* Author */}
      <footer className="mt-4 flex items-center gap-3">
        {/* Placeholder avatar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-sm font-semibold text-primary">
          {author.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-text-primary">{author}</p>
          <p className="text-xs text-text-secondary">
            {company}
            {industry && ` · ${industry}`}
          </p>
        </div>
      </footer>
    </article>
  );
};
