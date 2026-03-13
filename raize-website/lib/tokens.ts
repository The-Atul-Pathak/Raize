/**
 * Design tokens — rAIze Website
 * Sourced from DESIGN.md. Import these instead of hardcoding values.
 */

/* ── Navigation Links ── */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

/* ── Service Colour Rotation (from DESIGN.md) ── */
export type ServiceColour = {
  iconBg: string;
  iconColor: string;
};

export const SERVICE_COLOURS: ServiceColour[] = [
  { iconBg: "bg-primary/10", iconColor: "text-primary" },           // AI Integration
  { iconBg: "bg-accent-violet/10", iconColor: "text-accent-violet" }, // Custom Software
  { iconBg: "bg-accent-green/10", iconColor: "text-accent-green" },   // Website Dev
  { iconBg: "bg-accent-yellow/10", iconColor: "text-yellow-600" },    // Social Media
  { iconBg: "bg-accent-coral/10", iconColor: "text-accent-coral" },   // AI Calling
  { iconBg: "bg-accent-green/10", iconColor: "text-accent-green" },   // WhatsApp Chatbot
  { iconBg: "bg-accent-violet/10", iconColor: "text-accent-violet" }, // SaaS Platform
] as const;

/* ── Service Data ── */
export type ServiceData = {
  title: string;
  description: string;
  icon: string; // lucide-react icon name
  comingSoon?: boolean;
};

export const SERVICES: ServiceData[] = [
  {
    title: "AI Tool Integration & Automation",
    description:
      "We identify, configure and deploy the right AI tools for your workflows — from automation and CRMs to intelligent dashboards.",
    icon: "Zap",
  },
  {
    title: "Custom Internal Software & Dashboards",
    description:
      "Bespoke internal tools built for your business — employee portals, HR systems, inventory trackers, and BI dashboards.",
    icon: "LayoutDashboard",
  },
  {
    title: "Website Design & Development",
    description:
      "Fast, modern websites that generate leads and build credibility — designed to convert, not just impress.",
    icon: "Globe",
  },
  {
    title: "Social Media & Content Management",
    description:
      "We manage your social presence end-to-end — strategy, content creation, posting, and performance reporting.",
    icon: "Share2",
  },
  {
    title: "AI Calling Agents",
    description:
      "Intelligent voice agents that handle inbound and outbound calls — qualifying leads, booking appointments, and answering FAQs 24/7.",
    icon: "PhoneCall",
  },
  {
    title: "WhatsApp Chatbots",
    description:
      "Custom WhatsApp automation that engages customers, captures leads, and handles support — without a human on the other end.",
    icon: "MessageCircle",
  },
  {
    title: "SaaS Platform",
    description:
      "Our all-in-one business operating system — combining AI tools, project management, CRM, HR, and finance tracking in one place.",
    icon: "Layers",
    comingSoon: true,
  },
] as const;

/* ── Contact Info ── */
export const WHATSAPP_NUMBER = "+918107766700";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const CONTACT_EMAIL = "[PLACEHOLDER: hello@raize.in]";
export const CONTACT_LOCATION = "Serving Globally (HQ: New Delhi, India)";
