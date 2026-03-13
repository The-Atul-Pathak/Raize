import { type FC, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const variantStyles = {
  primary:
    "bg-primary-light text-primary",
  coral:
    "bg-accent-coral/10 text-accent-coral",
  green:
    "bg-accent-green/10 text-accent-green",
  gradient:
    "bg-gradient-to-r from-primary to-accent-violet text-white",
} as const;

export type BadgeVariant = keyof typeof variantStyles;

export type BadgeProps = {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
};

export const Badge: FC<BadgeProps> = ({
  variant = "primary",
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
