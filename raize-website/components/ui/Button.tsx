import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/* ── Variant + Size Maps ── */

const variantStyles = {
  primary:
    "bg-primary text-white font-semibold shadow-sm hover:bg-primary-dark hover:shadow-md",
  secondary:
    "border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white",
  ghost:
    "text-primary font-semibold hover:bg-primary-light",
} as const;

const sizeStyles = {
  default: "px-6 py-3 text-base",
  sm: "px-4 py-2 text-sm",
} as const;

/* ── Types ── */

export type ButtonVariant = keyof typeof variantStyles;
export type ButtonSize = keyof typeof sizeStyles;

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/* ── Component ── */

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  { variant = "primary", size = "default", className, ...props },
  ref
) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full tracking-wide transition-all duration-200 cursor-pointer select-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsAnchor;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...rest}
      />
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(props as ButtonAsButton)}
    />
  );
});
