export interface TeamMember {
  id: number;
  name: string;
  role: string;
  photo: string | null;
  gradient: string;
  accentColor: string;
  accentClass: string;
  borderClass: string;
  quote: string;
  bio: string;
  education: string;
  basedIn: string;
  background: string;
  superpower: string;
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Atul Pathak",
    role: "Co-Founder",
    photo: null,
    gradient: "from-blue-500 to-violet-500",
    accentColor: "#2563EB",
    accentClass: "text-blue-600",
    borderClass: "border-blue-500",
    quote:
      "The businesses that will define the next decade aren't the biggest — they're the ones that moved smartest.",
    bio: "With a deep background in business technology and AI implementation, Atul founded rAIze to give ambitious mid-sized businesses the technology edge that was previously only available to large enterprises.",
    education: "[PLACEHOLDER: University, Degree]",
    basedIn: "New Delhi, India",
    background: "Technology & AI Strategy",
    superpower: "Turning complexity into clarity",
    linkedin: "[PLACEHOLDER: LinkedIn URL]",
  },
  {
    id: 2,
    name: "[CO-FOUNDER 2 NAME]",
    role: "Co-Founder",
    photo: null,
    gradient: "from-emerald-400 to-cyan-500",
    accentColor: "#10B981",
    accentClass: "text-emerald-600",
    borderClass: "border-emerald-500",
    quote: "[PLACEHOLDER: A memorable quote from co-founder 2]",
    bio: "[PLACEHOLDER: 2-3 sentence bio for co-founder 2]",
    education: "[PLACEHOLDER]",
    basedIn: "New Delhi, India",
    background: "[PLACEHOLDER]",
    superpower: "[PLACEHOLDER]",
    linkedin: "[PLACEHOLDER]",
  },
  {
    id: 3,
    name: "[TEAM MEMBER 3 NAME]",
    role: "[TEAM MEMBER 3 ROLE]",
    photo: null,
    gradient: "from-orange-400 to-rose-500",
    accentColor: "#F43F5E",
    accentClass: "text-rose-500",
    borderClass: "border-rose-500",
    quote: "[PLACEHOLDER: A memorable quote from team member 3]",
    bio: "[PLACEHOLDER: 2-3 sentence bio]",
    education: "[PLACEHOLDER]",
    basedIn: "New Delhi, India",
    background: "[PLACEHOLDER]",
    superpower: "[PLACEHOLDER]",
    linkedin: "[PLACEHOLDER]",
  },
];
