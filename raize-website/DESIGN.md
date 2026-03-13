# DESIGN.md
# Design System — rAIze Website
# Last updated: March 2026

## BRAND IDENTITY
Name: rAIze
Personality: Bold, approachable, modern, energetic — the tech-savvy partner who actually gets it done.
Visual direction: Light base with bright primary colour pops. Think Figma meets a playful AI startup.
The site should feel: fast, confident, colourful, and trustworthy — without being corporate or cold.

## BRAND COLOURS
/* Always use these variable names in code, never raw hex values */

Primary (Electric Blue):   #2563EB   /* Main CTAs, links, key highlights */
Primary Dark:              #1D4ED8   /* Hover state for Primary */
Primary Light:             #DBEAFE   /* Tinted backgrounds, badges */

Accent Yellow:             #FACC15   /* Energy, emphasis, highlight strips */
Accent Yellow Dark:        #CA8A04   /* Hover / darker yellow */

Accent Coral:              #F43F5E   /* Urgency, "Coming Soon" badges, heat */
Accent Coral Dark:         #E11D48   /* Hover for coral */

Accent Green:              #10B981   /* Success, checkmarks, "active" states */
Accent Green Dark:         #059669   /* Hover for green */

Accent Violet:             #8B5CF6   /* AI/tech accent — used sparingly on feature cards */
Accent Violet Dark:        #7C3AED   /* Hover for violet */

Background:                #FFFFFF   /* Page background — pure white */
Surface:                   #F8FAFC   /* Card backgrounds, alternating sections */
Surface Tinted:            #EFF6FF   /* Light blue tint for callout boxes */

Text Primary:              #0F172A   /* Main headings and body */
Text Secondary:            #475569   /* Supporting copy, captions */
Text Muted:                #94A3B8   /* Placeholders, disabled states */

Border:                    #E2E8F0   /* Dividers, card outlines */
Border Strong:             #CBD5E1   /* Stronger borders when needed */

Success:                   #10B981
Error:                     #F43F5E
Warning:                   #FACC15

/* Colour usage rules:
   - Never use more than 2 accent colours in a single section
   - Use Primary (blue) for all primary CTAs — always
   - Use Accent Yellow for background strips and emphasis moments
   - Use Accent Coral only for "Coming Soon", urgency, or error states
   - Use Accent Green for checkmarks, success states, and benefit lists
   - Use Accent Violet for AI/tech-specific feature highlights
   - Alternate Surface and Background between sections for visual rhythm */

## TYPOGRAPHY
Heading font:   'Space Grotesk'   /* Google Font — geometric, techy, bold personality */
Body font:      'Inter'            /* Google Font — clean, highly readable */
Mono font:      'JetBrains Mono'   /* For any code snippets or technical displays */

/* Import in app/layout.tsx — NOT src/app/layout.tsx:
   Space Grotesk: weights 400, 500, 600, 700
   Inter: weights 400, 500, 600
   JetBrains Mono: weight 400 */

/* Type scale — always use these class names */
Display:   text-6xl  font-bold    tracking-tight   /* Hero headlines — max 2 lines */
H1:        text-5xl  font-bold    tracking-tight
H2:        text-4xl  font-semibold
H3:        text-2xl  font-semibold
H4:        text-xl   font-semibold
Body LG:   text-lg   font-normal  leading-relaxed
Body:      text-base font-normal  leading-relaxed
Small:     text-sm   font-normal
Caption:   text-xs   font-medium  uppercase tracking-widest

/* Responsive scale:
   Display: md:text-7xl lg:text-8xl
   H1: md:text-6xl
   H2: md:text-4xl */

## SPACING
Section vertical padding:   py-20  (mobile)   md:py-28  (desktop)
Container max width:         max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Card internal padding:       p-6  (mobile)     md:p-8  (desktop)
Component gap:               gap-6  (default)   gap-8  (sections)

## BORDER RADIUS
Buttons:           rounded-full
Cards:             rounded-2xl
Badges / Pills:    rounded-full
Inputs:            rounded-xl
Images:            rounded-2xl
Section accents:   rounded-3xl

## SHADOWS
Card:         shadow-sm hover:shadow-lg transition-shadow duration-300
Card Active:  shadow-xl ring-2 ring-primary/20
Button:       shadow-sm hover:shadow-md transition-shadow
Nav:          shadow-sm backdrop-blur-md bg-white/80
Hero visual:  shadow-2xl

## COMPONENTS — PATTERNS

### Primary Button
bg-primary text-white font-semibold px-6 py-3 rounded-full
hover:bg-primary-dark shadow-sm hover:shadow-md transition-all duration-200
text-base tracking-wide

### Secondary Button (Outline)
border-2 border-primary text-primary font-semibold px-6 py-3 rounded-full
hover:bg-primary hover:text-white transition-all duration-200

### Ghost Button
text-primary font-semibold px-4 py-2 rounded-full
hover:bg-primary-light transition-all duration-200
flex items-center gap-2

### Service Card
bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300
p-8 border border-border hover:border-primary/30
flex flex-col gap-4
Icon container: w-12 h-12 rounded-xl flex items-center justify-center
  (colour varies by service — use one accent colour per card, rotate through palette)

### Pain Point Card
bg-surface rounded-2xl p-6 border-l-4 border-l-accent-yellow
flex items-start gap-4

### Step Card (How We Work)
Numbered with large bold number in Primary colour (opacity 15% as background watermark)
bg-white rounded-2xl p-8 shadow-sm

### Team Member Card
bg-white rounded-2xl p-6 shadow-sm border border-border
Photo: rounded-full w-20 h-20 object-cover
Name: text-xl font-semibold text-text-primary
Role: text-sm font-medium text-primary uppercase tracking-wide
Bio: text-sm text-text-secondary leading-relaxed

### Testimonial Card
bg-surface rounded-2xl p-8 shadow-sm
Quote mark: text-6xl text-primary/20 font-serif leading-none
Quote text: text-lg text-text-primary leading-relaxed italic
Author: mt-4 flex items-center gap-3

### Badge / Pill
bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide
Variant coral: bg-coral/10 text-coral (for "Coming Soon")
Variant green: bg-green/10 text-green (for "Active" / benefits)

### Section Header Pattern
Caption label: text-xs uppercase tracking-widest font-semibold text-primary mb-3
H2 heading: font-bold text-text-primary (max 2 lines)
Body sub-text: text-lg text-text-secondary max-w-2xl (max 60 chars per line)
Spacing: mb-4 between caption and heading, mb-6 between heading and sub-text, mb-16 before content

### Colour Strip Accent
Thin horizontal band (h-1.5) in Accent Yellow under section headings
Or coloured left border (border-l-4) on highlighted cards

## NAVBAR
Background: bg-white/80 backdrop-blur-md border-b border-border
Logo: Space Grotesk font-bold text-2xl — "rAIze" with the "AI" in Primary blue
Links: text-sm font-medium text-text-secondary hover:text-text-primary
CTA: Primary button (small) — "Book a Call"
Mobile: hamburger icon, full-screen overlay menu

## FOOTER
Background: #0F172A (dark)
Text: text-white/70
Logo: white version
Tagline: "Technology that works as hard as you do."
Links: grid layout — company, services, contact columns
Bottom bar: text-white/40 text-xs — "© 2026 rAIze. All rights reserved."

## HERO SECTION SPECIAL TREATMENT
The hero must feel like a funded AI startup's homepage.
- Full viewport height (min-h-screen)
- White background with subtle animated particle field (Phase 2F)
- Headline: Display size, Space Grotesk bold, text-text-primary
- Highlight the word "technology" or "rAIze" with an underline in Accent Yellow
- A colourful gradient pill badge above the headline:
  "⚡ New Delhi's AI technology partner" — bg gradient from Primary to Violet, text white
- Below the CTAs: 3 small social proof stats:
  "7 Services · 100% Delivery Rate · Built for India"
- Right side (desktop): abstract colourful geometric illustration or particle canvas

## COLOUR ROTATION FOR SERVICE CARDS
Card 1 (AI Integration):     Icon bg: bg-primary/10,      Icon colour: text-primary
Card 2 (Custom Software):    Icon bg: bg-violet/10,       Icon colour: text-violet
Card 3 (Website Dev):        Icon bg: bg-green/10,        Icon colour: text-green
Card 4 (Social Media):       Icon bg: bg-yellow/10,       Icon colour: text-yellow-600
Card 5 (AI Calling):         Icon bg: bg-coral/10,        Icon colour: text-coral
Card 6 (WhatsApp Chatbot):   Icon bg: bg-green/10,        Icon colour: text-green
Card 7 (SaaS Platform):      Icon bg: bg-violet/10,       Icon colour: text-violet (+ Coming Soon badge)

## ANIMATIONS
Page enter:      fade-in + slide up 24px, duration 400ms, ease-out
Hover on cards:  translateY(-4px) + shadow increase, duration 200ms
Scroll reveal:   fade + slide up 24px, stagger 100ms between items
Number countup:  0 → value when stats section enters viewport
Hero headline:   TypeReveal (Phase 2D) — character by character
All animations:  respect prefers-reduced-motion: reduce

## DARK MODE
Not required for v1.

## SECTION RHYTHM (page background alternation)
1. Hero:              bg-white
2. Pain Points:       bg-surface (off-white)
3. Services:          bg-white
4. How We Work:       bg-surface
5. Why rAIze:         bg-primary (dark blue) with white text — BOLD contrast section
6. Testimonials:      bg-white
7. Final CTA:         bg gradient: from-primary via-violet to-coral (vivid, punchy)