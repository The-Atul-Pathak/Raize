# TASKS.md
# Master Task List — rAIze Website
# Created: March 2026

## PHASE 0 — SETUP (Human)
- [x] 0.1  Fill SPEC.md from intake form
- [x] 0.2  Fill DESIGN.md with brand info and design system
- [x] 0.3  Create AGENTS.md rulebook
- [x] 0.4  Create TASKS.md (this file)
- [ ] 0.5  Set up Next.js project with TypeScript + Tailwind
- [ ] 0.6  Add placeholder logo asset to /public/assets
- [ ] 0.7  Commit to Git: 'init: project setup for rAIze'
- [ ] 0.8  Confirm domain name and add to SPEC.md
- [ ] 0.9  Confirm Calendly URL and add to SPEC.md
- [ ] 0.10 Confirm email address and add to SPEC.md

## PHASE 1 — DESIGN SYSTEM ✅
NOTE: No src/ directory exists. All files go directly under raize-website/ root.
NOTE: Using Tailwind v4 (@theme CSS config) — no tailwind.config.ts.
- [x] 1.1  Configure Tailwind v4 @theme in globals.css with all design tokens from DESIGN.md (colours, fonts, spacing, radius)
- [x] 1.2  Set up Google Fonts in app/layout.tsx: Space Grotesk + Inter + JetBrains Mono
- [x] 1.3  Create Button component → /components/ui/Button.tsx (primary, secondary, ghost variants)
- [x] 1.4  Create Card component → /components/ui/Card.tsx (base card with hover states)
- [x] 1.5  Create ServiceCard component → /components/ui/ServiceCard.tsx (icon bg, colour rotation, coming soon badge)
- [x] 1.6  Create SectionHeader component → /components/ui/SectionHeader.tsx (caption + heading + sub-text)
- [x] 1.7  Create Badge component → /components/ui/Badge.tsx (primary, coral, green variants)
- [x] 1.8  Create Navbar component → /components/sections/Navbar.tsx (desktop + mobile hamburger + logo)
- [x] 1.9  Create Footer component → /components/sections/Footer.tsx (dark background, columns, tagline)
- [x] 1.10 Create WhatsAppButton → /components/ui/WhatsAppButton.tsx (number: +91 8107766700)
- [x] 1.11 Set up Framer Motion base animation config → /lib/animations.ts
- [x] 1.12 Create TestimonialCard → /components/ui/TestimonialCard.tsx
- [x] 1.13 Create TeamCard → /components/ui/TeamCard.tsx
- [x] 1.14 Create StepCard → /components/ui/StepCard.tsx (numbered How We Work steps)
- [x] 1.15 Create PainPointCard → /components/ui/PainPointCard.tsx (left yellow border)

## PHASE 2 — PAGE STRUCTURE ✅
NOTE: Pages go in /app/[page]/page.tsx — no src/ prefix.
- [x] 2.1  Home page shells → /app/page.tsx (all section shells in correct order)
- [x] 2.2  About page shell → /app/about/page.tsx (mission, team, values sections)
- [x] 2.3  Services page shell → /app/services/page.tsx (7 service sections)
- [x] 2.4  Portfolio page shell → /app/portfolio/page.tsx (case study grid + coming soon)
- [x] 2.5  Contact page shell → /app/contact/page.tsx (form + Calendly + contact details)
- [x] 2.6  Add Navbar + Footer + WhatsAppButton to /app/layout.tsx
- [x] 2.7  Verify all routes work and navigation is correct
- [x] 2.8  Verify mobile layout on all pages

## PHASE 2A — SCROLL REVEAL & ENTRANCE ANIMATIONS (mandatory)
- [ ] 2A.1  Create useScrollReveal custom hook → /lib/hooks/useScrollReveal.ts
- [ ] 2A.2  Create <RevealWrapper> → /components/ui/RevealWrapper.tsx (fade-up entrance)
- [ ] 2A.3  Create <StaggerContainer> → /components/ui/StaggerContainer.tsx
- [ ] 2A.4  Create <CountUp> → /components/ui/CountUp.tsx (number animation on scroll)
- [ ] 2A.5  Wrap all section headings and body text in <RevealWrapper>
- [ ] 2A.6  Wrap all card grids in <StaggerContainer>
- [ ] 2A.7  Apply <CountUp> to all stats
- [ ] 2A.8  Add line-reveal animation to major section headings
- [ ] 2A.9  Verify useReducedMotion() check on all animated components
- [ ] 2A.10 Lighthouse check — score must remain 80+

## PHASE 2B — SCROLLYTELLING (homepage hero + How We Work)
- [ ] 2B.1  Ask permission to install @studio-freight/lenis
- [ ] 2B.2  Create <SmoothScrollProvider> → /components/providers/SmoothScrollProvider.tsx
- [ ] 2B.3  Create <StickySection> → /components/ui/StickySection.tsx
- [ ] 2B.4  Build sticky narrative for How We Work (4 steps, 200vh pin)
- [ ] 2B.5  Create <ParallaxLayer> → /components/ui/ParallaxLayer.tsx
- [ ] 2B.6  Apply parallax to hero background and decorative elements
- [ ] 2B.7  Add scroll progress bar to /app/layout.tsx (2px line at top)
- [ ] 2B.8  Mobile: all cinematic effects degrade gracefully
- [ ] 2B.9  Lighthouse check — CLS must be under 0.1

## PHASE 2D — KINETIC TYPOGRAPHY (hero + value proposition)
- [ ] 2D.1  Ask permission to install splitting.js
- [ ] 2D.2  Create <SplitText> → /components/ui/SplitText.tsx
- [ ] 2D.3  Create <TypeReveal> → /components/ui/TypeReveal.tsx
- [ ] 2D.4  Create <WordFade> → /components/ui/WordFade.tsx
- [ ] 2D.5  Create <ScrollHighlight> → /components/ui/ScrollHighlight.tsx
- [ ] 2D.6  Create <BlurReveal> → /components/ui/BlurReveal.tsx
- [ ] 2D.7  Create <MorphingHeadline> → /components/ui/MorphingHeadline.tsx
- [ ] 2D.8  Apply TypeReveal to hero H1 headline
- [ ] 2D.9  Apply ScrollHighlight to main value proposition paragraph
- [ ] 2D.10 Apply MorphingHeadline to services section
- [ ] 2D.11 Verify all text animations have screen-reader fallback

## PHASE 2E — HORIZONTAL SCROLL (team section) ✅
- [x] 2E.1  Confirm which section(s) use horizontal scroll — note in PROGRESS.md before starting
- [x] 2E.2  Create <HorizontalTrack> component — outer pins, inner tracks on X axis based on scroll
- [x] 2E.3  Calculate outer height: number of items × item width — this gives full horizontal travel
- [x] 2E.4  Add scroll-snap behaviour on the inner track for item-by-item snapping
- [x] 2E.5  Add progress indicator: dot row with active dot highlighted in primary colour
- [x] 2E.6  Add prev/next arrow buttons — keyboard accessible, hide at start/end bounds
- [x] 2E.7  Mobile fallback: standard vertical scroll, horizontal swipe with CSS overflow-x scroll
- [x] 2E.8  Test on trackpad — horizontal momentum should feel completely native
- [x] 2E.9  Lighthouse CLS check — pinned sections can cause layout shift. Score must stay under 0.1

## PHASE 2F — AMBIENT 3D & PARTICLE EFFECTS (hero)
- [ ] 2F.1  Ask permission to install: three @react-three/fiber @react-three/drei
- [ ] 2F.2  Create /components/three/ directory
- [ ] 2F.3  Create <ThreeCanvas> → /components/three/ThreeCanvas.tsx (error boundary + CSS fallback)
- [ ] 2F.4  Build ParticleField → /components/three/ParticleField.tsx
- [ ] 2F.5  Import via next/dynamic ssr:false in /app/page.tsx
- [ ] 2F.6  Create CSS-only fallback (radial gradient)
- [ ] 2F.7  Add cursor interaction to particle field
- [ ] 2F.8  Add scroll-linked fade-out on particle field
- [ ] 2F.9  Mobile: serve CSS fallback if GPU tier < 2
- [ ] 2F.10 Lighthouse check — target Performance 75+

## PHASE 3 — CONTENT & COPY ✅
- [x] 3.1  Home: hero headline, sub-headline, CTA buttons, badge pill
- [x] 3.2  Home: pain points section with all 5 cards + follow-on line
- [x] 3.3  Home: services overview — all 7 service cards with icons and copy
- [x] 3.4  Home: How We Work — 4 steps with full copy
- [x] 3.5  Home: Why rAIze — 5 differentiators with copy
- [x] 3.6  Home: testimonials — 3 placeholder testimonial cards
- [x] 3.7  Home: final CTA section
- [x] 3.8  About: mission statement + tagline
- [x] 3.9  About: team section — Atul Pathak + 2 placeholders
- [x] 3.10 Services: full description for all 7 services with benefits lists
- [x] 3.11 Portfolio: placeholder case study cards + coming soon message
- [x] 3.12 Contact: all contact details, form styling, Calendly placeholder
- [x] 3.13 Footer: all links, tagline, short about blurb
- [x] 3.14 Navbar: verify logo text "r`AI`ze" with "AI" in primary coloure

## PHASE 3.5 — COLOUR ENHANCEMENTS ✅
- [x] 3.5.1 Add blurred colour blobs behind "Pain Points" and "Why rAIze" sections
- [x] 3.5.2 Add coloured top strips and dynamic hover borders to ServiceCard component
- [x] 3.5.3 Map services to specific vibrant colours and update icon container styles
- [x] 3.5.4 Create solid colour StatsStrip component and add after Hero section

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