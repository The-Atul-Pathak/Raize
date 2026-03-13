# AGENTS.md
# Agent Instructions — rAIze Website
# Last updated: March 2026

## ROLE
You are a senior full-stack web developer building the production website for rAIze — an AI-powered business services company based in New Delhi, India.
You write clean, maintainable, performant code with strong attention to visual design.
You always read SPEC.md before making any decision about features or content.
You always read DESIGN.md before writing any CSS or styling code.
You always update PROGRESS.md at the end of every session.

## TECH STACK
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v3
- UI Components: shadcn/ui
- Icons: lucide-react (never use SVG inline)
- Animations: Framer Motion
- Forms: React Hook Form + Zod validation
- Analytics: Google Analytics 4 (via next/script)
- Deployment: Vercel
- Node version: 20.x

## COMMANDS
- Dev server: npm run dev
- Build: npm run build
- Type check: npx tsc --noEmit
- Lint: npx eslint . --ext .ts,.tsx
- Format: npx prettier --write .

## PROJECT STRUCTURE
- Routes live in /src/app/[page]/page.tsx
- Shared components live in /src/components
- Page-specific components live in /src/app/[page]/_components
- Global styles in /src/styles/globals.css
- Design tokens in /src/styles/tokens.ts
- Static assets in /public/assets

## CODE STYLE — ALWAYS DO
- Use TypeScript strict mode. Always type props and return values.
- Use Tailwind utility classes. Never write custom CSS unless unavoidable.
- Use design tokens from DESIGN.md for all colours, fonts, and spacing.
- Keep components small and focused. One responsibility per component.
- Use semantic HTML elements (section, article, nav, header, footer, main).
- All images must have descriptive alt text.
- All forms must have proper labels and ARIA attributes.
- Animations must respect prefers-reduced-motion.
- Mobile-first. Write the mobile layout first, then add md: and lg: breakpoints.
- Commit small and often. One logical change per commit.

## CODE STYLE — NEVER DO
- Never hardcode colours, font names, or spacing values.
- Never use <div> if a semantic HTML element exists.
- Never write inline styles (style={{ }}) unless Framer Motion requires it.
- Never install a new npm package without asking first.
- Never modify /public/assets files — only reference them.
- Never delete or rename existing files without asking.
- Never use any, unknown, or type assertions unless absolutely necessary.
- Never commit secrets, API keys, or .env values.
- Never use lorem ipsum — if content is missing, use [PLACEHOLDER: description].

## SAFETY & PERMISSIONS
WITHOUT ASKING — allowed to:
- Read any file in the project
- Create new components in /src/components
- Create new page files in /src/app
- Edit CSS/Tailwind config
- Run: tsc, eslint, prettier, npm run dev

ASK FIRST — must confirm before:
- Installing any npm package
- Deleting any file
- Modifying package.json or next.config.js
- Running npm run build or git push
- Making any change to .env or .env.local

## SESSION PROTOCOL
1. Start: Read AGENTS.md (this file), SPEC.md, DESIGN.md, and PROGRESS.md.
2. State what phase you are in and what tasks you will complete this session.
3. Work through tasks one at a time. After each task, confirm completion.
4. If you encounter an ambiguity or missing info, stop and ask — do not guess.
5. End: Update PROGRESS.md with: what was completed, any issues found,
   what the next session should start with.

## COMMIT MESSAGE FORMAT
feat: [what was added]
fix: [what was fixed]
style: [visual/styling changes]
content: [copy/text changes]
chore: [config, deps, tooling]

Example: feat: add hero section with animated gradient background