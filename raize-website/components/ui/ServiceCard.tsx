import { type FC } from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import type { ServiceColour } from "@/lib/tokens";

/* ── Types ── */

export type ServiceCardProps = {
  title: string;
  description: string;
  /** lucide-react icon name (e.g. "Zap", "Globe") */
  icon: string;
  /** Colour set for this card's icon – pass from SERVICE_COLOURS */
  colour: ServiceColour;
  /** Show "Coming Soon" badge */
  comingSoon?: boolean;
  /** Link destination for "Learn More" */
  href?: string;
  className?: string;
};

/* ── Component ── */

export const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  colour,
  comingSoon = false,
  href = "/services",
  className,
}) => {
  // Dynamically resolve the lucide icon
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = ((LucideIcons as unknown) as Record<string, LucideIcons.LucideIcon>)[icon] ?? LucideIcons.HelpCircle;

  return (
    <article
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-border bg-white p-8",
        "shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300",
        className
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl",
          colour.iconBg
        )}
      >
        <IconComponent className={cn("h-6 w-6", colour.iconColor)} />
      </div>

      {/* Title + Badge */}
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
        {comingSoon && <Badge variant="coral">Coming Soon</Badge>}
      </div>

      {/* Description */}
      <p className="text-text-secondary leading-relaxed">{description}</p>

      {/* Learn More */}
      <a
        href={href}
        className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
      >
        Learn More
        <LucideIcons.ArrowRight className="h-4 w-4" />
      </a>
    </article>
  );
};
