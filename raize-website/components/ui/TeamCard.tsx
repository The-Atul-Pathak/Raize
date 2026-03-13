import { type FC } from "react";
import { cn } from "@/lib/utils";
import { Text_03 } from "@/components/ui/wave-text";

export type TeamCardProps = {
  /** Full name */
  name: string;
  /** Role / title */
  role: string;
  /** Short bio (2-3 sentences) */
  bio: string;
  /** Photo URL — if not provided, an initial avatar is rendered */
  photoUrl?: string;
  className?: string;
};

export const TeamCard: FC<TeamCardProps> = ({
  name,
  role,
  bio,
  photoUrl,
  className,
}) => {
  return (
    <article
      className={cn(
        "rounded-2xl border border-border bg-white p-6 shadow-sm",
        className
      )}
    >
      {/* Photo or initial avatar */}
      {photoUrl ? (
        <img
          src={photoUrl}
          alt={`Photo of ${name}`}
          className="h-20 w-20 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-light text-2xl font-bold text-primary">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
      )}

      {/* Name */}
      <h3 className="mt-4 text-xl font-semibold text-text-primary">
        <Text_03 text={name} />
      </h3>

      {/* Role */}
      <p className="mt-1 text-sm font-medium uppercase tracking-wide text-primary">
        {role}
      </p>

      {/* Bio */}
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{bio}</p>
    </article>
  );
};
