# Portfolio

Personal site for Danny Edhouse. Cream VHS paper sleeve — print document, not a CRT website.

## Run

```
pnpm astro dev --background
```

`astro dev stop` / `status` / `logs` to manage it. pnpm, Astro 7.

## Stack

No Tailwind. No UI kits. Tokens in `src/styles/tokens.css`, document rules in `globals.css`. Component styles stay on the component. Grain / scan / vignette / rail use `is:global` so HMR doesn't drop them.

Icons: `astro-icon` + Simple Icons. Images: `astro:assets` `Picture`. Skills go through `src/data/skills.ts` and `TechPills`.

## Layout

- `src/components/sections/` — Hero, About, Projects, Timeline, Contact
- `src/components/ui/` — ActionLink, TechPills, ProjectCard
- `src/components/effects/` — Grain, ColorRail
- `src/data/` — projects, timeline, skills, info
- `src/lib/` — `dates.ts`, `reveal.ts`, `scroll.ts`

Sections share `SectionHead` + `.sleeve`. Nav stays chrome, not in `ui/`.

## How to build

JS off still has to read. Reveal, timeline fill, and grain are extras. Honour `prefers-reduced-motion`.

Hamburger stays usable at 320px. Left colour rail stays. Name stays in the hero.

Project stills: native aspect, contain, tight bezel, rounded corners, no blur, not 3D. Section kickers stay; no right-side asides.

Cassette / CRT canvas are later. Don't sneak them back in.

Reuse first. Small slices. Don't commit unless asked. If it looks AI, cut it. Don't rewrite copy for "polish" unless asked.

Astro docs: https://docs.astro.build
