import { type FC } from "react";
import { RaizeText } from "@/components/ui/RaizeText";
import { NAV_LINKS, WHATSAPP_URL, CONTACT_EMAIL, CONTACT_LOCATION } from "@/lib/tokens";

const SERVICE_LINKS = [
  { label: "AI Tool Integration", href: "/services" },
  { label: "Custom Software", href: "/services" },
  { label: "Website Development", href: "/services" },
  { label: "Social Media", href: "/services" },
  { label: "AI Calling Agents", href: "/services" },
  { label: "WhatsApp Chatbots", href: "/services" },
] as const;

export const Footer: FC = () => {
  return (
    <footer className="bg-footer-bg" aria-label="Site footer">
      <div className="container-site py-16">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/" className="font-heading text-2xl font-bold text-white">
              r<span className="text-primary">AI</span>ze
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Technology that works as hard as you do.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>{CONTACT_LOCATION}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/40">
            © {new Date().getFullYear()} <RaizeText />. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
