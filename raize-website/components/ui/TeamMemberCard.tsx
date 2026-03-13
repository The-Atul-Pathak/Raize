"use client";

import Image from "next/image";
import { GraduationCap, MapPin, Briefcase, Zap, Linkedin } from "lucide-react";
import type { TeamMember } from "@/lib/teamData";

interface TeamMemberCardProps {
  member: TeamMember;
  isMobile?: boolean;
}

export function TeamMemberCard({ member, isMobile = false }: TeamMemberCardProps) {
  const detailRows = [
    { icon: GraduationCap, label: "Education", value: member.education },
    { icon: MapPin, label: "Based In", value: member.basedIn },
    { icon: Briefcase, label: "Background", value: member.background },
    { icon: Zap, label: "Superpower", value: member.superpower },
  ];

  if (isMobile) {
    return (
      <article className="relative rounded-2xl bg-white shadow-sm overflow-hidden"
        style={{ borderLeft: `4px solid ${member.accentColor}` }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "1rem",
            background: `radial-gradient(ellipse at 30% 50%, ${member.accentColor}18, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <div className="relative p-6 flex flex-col gap-6">
          {/* Photo */}
          <div className="w-full" style={{ height: 280 }}>
            {member.photo ? (
              <Image
                src={member.photo}
                alt={`Photo of ${member.name}`}
                fill
                className="rounded-2xl object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            ) : (
              <div
                className={`w-full h-full rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center`}
              >
                <span className="font-heading text-5xl font-bold text-white select-none">
                  {getInitials(member.name)}
                </span>
              </div>
            )}
          </div>

          {/* Quote */}
          <div>
            <span
              className="text-5xl font-bold leading-none font-serif"
              style={{ color: member.accentColor }}
            >
              &ldquo;
            </span>
            <p className="text-base italic text-text-secondary leading-relaxed">
              {member.quote}
            </p>
            <p className="mt-2 text-sm font-semibold text-text-muted tracking-wide">
              — {member.name}
            </p>
          </div>

          {/* Details */}
          <div>
            <span
              className="text-xs uppercase font-semibold"
              style={{ letterSpacing: "0.2em", color: member.accentColor }}
            >
              TEAM MEMBER
            </span>
            <h3 className="text-3xl font-bold text-text-primary font-heading mt-2">
              {member.name}
            </h3>
            <p
              className="text-lg font-semibold mt-1"
              style={{ color: member.accentColor }}
            >
              {member.role}
            </p>
            <div className="mt-4 mb-4 h-px bg-border w-16" />
            <p className="text-base text-text-secondary leading-relaxed">
              {member.bio}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {detailRows.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={16} style={{ color: member.accentColor }} />
                  <span className="text-sm text-text-muted w-24 shrink-0">{label}</span>
                  <span className="text-sm font-medium text-text-primary">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <LinkedInButton member={member} />
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="relative" style={{ width: 900, height: 520 }}>
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "1rem",
          background: `radial-gradient(ellipse at 30% 50%, ${member.accentColor}18, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Card */}
      <div
        className="relative rounded-2xl bg-white shadow-sm overflow-hidden flex h-full"
        style={{ borderLeft: `4px solid ${member.accentColor}` }}
      >
        {/* LEFT COLUMN */}
        <div className="flex flex-col shrink-0" style={{ width: 420, padding: 24 }}>
          {/* Photo */}
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: 360 }}>
            {member.photo ? (
              <Image
                src={member.photo}
                alt={`Photo of ${member.name}`}
                fill
                className="object-cover"
                sizes="420px"
              />
            ) : (
              <div
                className={`w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center`}
              >
                <span className="font-heading text-5xl font-bold text-white select-none">
                  {getInitials(member.name)}
                </span>
              </div>
            )}
          </div>

          {/* Quote */}
          <div className="mt-4">
            <span
              className="text-5xl font-bold leading-none font-serif"
              style={{ color: member.accentColor }}
            >
              &ldquo;
            </span>
            <p className="text-base italic text-text-secondary leading-relaxed">
              {member.quote}
            </p>
            <p className="mt-2 text-sm font-semibold text-text-muted tracking-wide">
              — {member.name}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col justify-center" style={{ paddingLeft: 40, paddingRight: 32, paddingTop: 32, paddingBottom: 32 }}>
          <span
            className="text-xs uppercase font-semibold"
            style={{ letterSpacing: "0.2em", color: member.accentColor }}
          >
            TEAM MEMBER
          </span>

          <h3 className="text-4xl font-bold text-text-primary font-heading mt-2">
            {member.name}
          </h3>

          <p
            className="text-lg font-semibold mt-1"
            style={{ color: member.accentColor }}
          >
            {member.role}
          </p>

          <div className="mt-4 mb-4 h-px bg-border w-16" />

          <p className="text-base text-text-secondary leading-relaxed max-w-sm">
            {member.bio}
          </p>

          {/* Detail rows */}
          <div className="mt-6 flex flex-col gap-3">
            {detailRows.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon size={16} style={{ color: member.accentColor }} />
                <span className="text-sm text-text-muted w-24 shrink-0">{label}</span>
                <span className="text-sm font-medium text-text-primary">{value}</span>
              </div>
            ))}
          </div>

          {/* LinkedIn */}
          <div className="mt-auto pt-6">
            <LinkedInButton member={member} />
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── Helpers ── */

function getInitials(name: string): string {
  return name
    .replace(/[\[\]]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function LinkedInButton({ member }: { member: TeamMember }) {
  return (
    <a
      href={member.linkedin.startsWith("http") ? member.linkedin : "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border-2 transition-all duration-200"
      style={{
        borderColor: member.accentColor,
        color: member.accentColor,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.backgroundColor = member.accentColor;
        el.style.color = "#ffffff";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.backgroundColor = "transparent";
        el.style.color = member.accentColor;
      }}
    >
      <Linkedin size={16} />
      Connect on LinkedIn
    </a>
  );
}
