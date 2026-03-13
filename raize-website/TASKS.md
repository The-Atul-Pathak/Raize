# TASKS.md
# Master Task List — rAIze Website
# Created: March 2026

## PHASE 0 — SETUP (Human)
- [x] 0.1  Fill SPEC.md from intake form
- [x] 0.2  Fill DESIGN.md with brand info and design system
- [x] 0.3  Create AGENTS.md rulebook
- [x] 0.4  Create TASKS.md (this file)
- [x] 0.5  Set up Next.js project with TypeScript + Tailwind
- [ ] 0.6  Add placeholder logo asset to /public/assets
- [x] 0.7  Commit to Git: 'init: project setup for rAIze'
- [ ] 0.8  Confirm domain name and add to SPEC.md
- [ ] 0.9  Confirm Calendly URL and add to SPEC.md
- [ ] 0.10 Confirm email address and add to SPEC.md

## PHASE 1 — DESIGN SYSTEM
- [ ] 1.1  Configure Tailwind with all design tokens from DESIGN.md (colours, fonts, spacing, radius)
- [ ] 1.2  Set up Google Fonts: Space Grotesk + Inter + JetBrains Mono
- [ ] 1.3  Create Button component (primary, secondary, ghost variants)
- [ ] 1.4  Create Card component (base card with hover states)
- [ ] 1.5  Create ServiceCard component (icon bg, colour rotation, coming soon badge)
- [ ] 1.6  Create SectionHeader component (caption + heading + sub-text pattern)
- [ ] 1.7  Create Badge/Pill component (primary, coral, green variants)
- [ ] 1.8  Create Navbar component (desktop + mobile hamburger + logo)
- [ ] 1.9  Create Footer component (dark background, columns, tagline)
- [ ] 1.10 Create WhatsApp floating button component (number from SPEC.md)
- [ ] 1.11 Set up page transition animations (Framer Motion base config)
- [ ] 1.12 Create TestimonialCard component
- [ ] 1.13 Create TeamCard component
- [ ] 1.14 Create StepCard component (How We Work numbered steps)
- [ ] 1.15 Create PainPointCard component (left yellow border style)

## PHASE 2 — PAGE STRUCTURE
- [ ] 2.1  Home page — all section shells in correct order
- [ ] 2.2  About page — mission, team, values section shells
- [ ] 2.3  Services page — 7 service sections shells
- [ ] 2.4  Portfolio page — case study grid shell + coming soon state
- [ ] 2.5  Book a Call / Contact page — form + Calendly + contact details shell
- [ ] 2.6  Verify all routes work and navigation is correct
- [ ] 2.7  Verify mobile layout on all pages
- [ ] 2.8  Set up root layout with Navbar + Footer on all pages

## PHASE 2A — SCROLL REVEAL & ENTRANCE ANIMATIONS (mandatory)
- [ ] 2A.1  Create useScrollReveal custom hook
- [ ] 2A.2  Create <RevealWrapper> component (fade-up entrance)
- [ ] 2A.3  Create <StaggerContainer> component (stagger delay for children)
- [ ] 2A.4  Create <CountUp> component (number animation on scroll)
- [ ] 2A.5  Wrap all section headings and body text in <RevealWrapper>
- [ ] 2A.6  Wrap all card grids in <StaggerContainer>
- [ ] 2A.7  Apply <CountUp> to all stats
- [ ] 2A.8  Add line-reveal animation to major section headings
- [ ] 2A.9  Verify useReducedMotion() check on all animated components
- [ ] 2A.10 Lighthouse check — score must remain 80+

## PHASE 2B — SCROLLYTELLING (homepage hero + How We Work)
- [ ] 2B.1  Ask permission to install @studio-freight/lenis
- [ ] 2B.2  Create <SmoothScrollProvider> — Lenis in root layout
- [ ] 2B.3  Create <StickySection> component
- [ ] 2B.4  Build sticky narrative for How We Work (4 steps, 200vh pin)
- [ ] 2B.5  Create <ParallaxLayer> component
- [ ] 2B.6  Apply parallax to hero background and decorative elements
- [ ] 2B.7  Add scroll progress bar (2px line at top of viewport)
- [ ] 2B.8  Mobile: all cinematic effects degrade gracefully
- [ ] 2B.9  Lighthouse check — CLS must be under 0.1

## PHASE 2D — KINETIC TYPOGRAPHY (hero + value proposition)
- [ ] 2D.1  Ask permission to install splitting.js
- [ ] 2D.2  Create <SplitText> utility component
- [ ] 2D.3  Create <TypeReveal> component (character stagger)
- [ ] 2D.4  Create <WordFade> component
- [ ] 2D.5  Create <ScrollHighlight> component
- [ ] 2D.6  Create <BlurReveal> component
- [ ] 2D.7  Create <MorphingHeadline> component
- [ ] 2D.8  Apply TypeReveal to hero H1 headline
- [ ] 2D.9  Apply ScrollHighlight to main value proposition paragraph
- [ ] 2D.10 Apply MorphingHeadline to services section (AI/chatbots/websites)
- [ ] 2D.11 Verify all text animations have screen-reader fallback

## PHASE 2F — AMBIENT 3D & PARTICLE EFFECTS (hero)
- [ ] 2F.1  Ask permission to install: three @react-three/fiber @react-three/drei
- [ ] 2F.2  Create /src/components/three/ directory
- [ ] 2F.3  Create <ThreeCanvas> base wrapper with error boundary + CSS fallback
- [ ] 2F.4  Build ParticleField effect (4000 particles, cursor interaction)
- [ ] 2F.5  Implement lazy load via next/dynamic ssr:false
- [ ] 2F.6  Create CSS-only fallback (radial gradient approximation)
- [ ] 2F.7  Add cursor interaction to particle field
- [ ] 2F.8  Add scroll-linked fade-out on particle field as user scrolls past hero
- [ ] 2F.9  Mobile test — serve CSS fallback if GPU tier < 2
- [ ] 2F.10 Lighthouse check — target Performance 75+

## PHASE 3 — CONTENT & COPY
- [ ] 3.1  Home: hero headline, sub-headline, CTA buttons, badge pill
- [ ] 3.2  Home: pain points section with all 5 cards + follow-on line
- [ ] 3.3  Home: services overview — all 7 service cards with icons and copy
- [ ] 3.4  Home: How We Work — 4 steps with full copy
- [ ] 3.5  Home: Why rAIze — 5 differentiators with copy
- [ ] 3.6  Home: testimonials — 3 placeholder testimonial cards
- [ ] 3.7  Home: final CTA section
- [ ] 3.8  About: mission statement + tagline
- [ ] 3.9  About: team section — Atul Pathak + 2 placeholders with generated bios
- [ ] 3.10 Services: full description for all 7 services with benefits lists
- [ ] 3.11 Portfolio: placeholder case study cards + coming soon message
- [ ] 3.12 Contact: all contact details, form, Calendly placeholder
- [ ] 3.13 Footer: all links, tagline, short about blurb
- [ ] 3.14 Navbar: logo text "rAIze" with "AI" in primary blue

## PHASE 4 — INTEGRATIONS
- [ ] 4.1  Contact form (React Hook Form + Zod + email handler via Resend)
- [ ] 4.2  WhatsApp floating button (+91 8107766700)
- [ ] 4.3  Calendly embed on Book a Call page [needs URL]
- [ ] 4.4  Basic SEO — meta tags, title, description for every page
- [ ] 4.5  Open Graph tags (og:title, og:description, og:image) for every page
- [ ] 4.6  robots.txt and sitemap.xml

## PHASE 5 — QA & LAUNCH
- [ ] 5.1  PageSpeed Insights — 85+ on mobile and desktop
- [ ] 5.2  Optimise all images with next/image
- [ ] 5.3  Cross-browser check (Chrome, Safari, Firefox)
- [ ] 5.4  Mobile check at 375px, 390px, 430px widths
- [ ] 5.5  Check all forms submit correctly
- [ ] 5.6  Check WhatsApp button opens correctly on mobile
- [ ] 5.7  Verify SEO tags on all pages
- [ ] 5.8  Connect custom domain
- [ ] 5.9  Verify SSL certificate active
- [ ] 5.10 Submit sitemap to Google Search Console
- [ ] 5.11 Launch Readiness Report in PROGRESS.md