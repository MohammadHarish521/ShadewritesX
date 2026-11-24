# Agent instructions

@C:\Users\91638\.codex\RTK.md

These instructions apply to the entire repository. Follow any more specific
`AGENTS.md` in the directory being changed.

## Project context

- ShadeWritesX sells Harish's ghostwriting for founders on X. The current UI
  spells the brand `shadoWritesX`. It is not a playbook or digital-product
  checkout. Booking stays on the Calendly link in `src/data/services.ts`.
- The implementation uses React 19, TypeScript 5.9, Vite 7, Framer Motion, and
  Lucide React. It uses plain CSS imports and CSS custom properties.
- `README.md` describes an older SmartScribe academic project and contains stale
  stack and setup details. Use source files, `package.json`, and the lockfile as
  the reference for current behavior and tooling.
- The current app is a frontend landing page with static content and external
  links. There is no backend, router, or automated test suite configured.
- `src/data/services.ts` holds the ghostwriting offer, author, proof, client
  results, and FAQ. Use those supplied figures for numerical claims. Do not
  send visitors to a playbook checkout or invent prices, testimonials, or
  guarantees.

## Commands and environment

- Prefix every shell command with `rtk`, as required by the referenced RTK file.
- Use `rtk proxy <command>` for raw output or unsupported commands. In this
  Windows environment, filtered commands can fail with a Claude config directory
  error; use the proxy form if that happens.
- Use PowerShell and `npm.cmd` on Windows. Keep paths quoted when necessary.
- Use npm and preserve `package-lock.json`. The locked Vite version requires
  Node.js `^20.19.0 || >=22.12.0`.
- Prefer `rtk proxy rg` and `rtk proxy rg --files` for searches. Exclude generated
  output and dependencies when they are irrelevant.

| Task | Command |
| --- | --- |
| Install locked dependencies | `rtk proxy npm.cmd ci` |
| Start development server | `rtk proxy npm.cmd run dev` |
| Lint | `rtk proxy npm.cmd run lint` |
| Type-check and build | `rtk proxy npm.cmd run build` |
| Preview the production build | `rtk proxy npm.cmd run preview` |
| Inspect changes | `rtk proxy git diff` |

If Git reports dubious ownership in this workspace, use a per-command exception:
`rtk proxy git -c safe.directory=C:/Users/91638/Desktop/ShadewritesX status --short`.
Apply the same option to other Git commands as needed; avoid changing global Git
configuration for this issue.

## Source map

- `src/main.tsx`: React entry point; enables Strict Mode and imports `index.css`.
- `src/App.tsx`: renders the main landing component.
- `src/components/SmartScribeLanding.tsx`: page composition, navigation, mobile
  menu, hero, services, process, writing sample, author, booking, and footer.
- `src/components/SmartScribeLanding.css`: global reset, design tokens, shared
  layout and component classes, and responsive rules.
- `src/components/PlaybookContent.css`: additional content layouts, responsive
  adjustments, accessibility styles, and reduced-motion handling.
- `src/components/HeroAnimation.tsx`: rotating hero icons and Framer Motion.
- `src/components/ResultsSection.tsx` and its CSS: author-reported results;
  also renders `CaseStudy.tsx` with two anonymized client analytics dashboards.
- `src/components/TestimonialsAndFAQ.tsx` and its CSS: ghostwriting FAQ.
  The legacy filename remains; placeholder testimonials stay removed.
- `index.html`: page title, favicon, and Google Fonts imports.
- `public/`: assets served by absolute paths such as `/logo.svg`.
- `src/index.css` is intentionally cleared. `src/App.css` is unused Vite starter
  styling; importing it can conflict with landing page classes and layout.

## Implementation conventions

- Keep changes focused on the requested behavior and preserve unrelated work.
  Match the surrounding formatting instead of reformatting entire files.
- Use typed React function components and hooks. TypeScript strict mode and
  unused-variable checks are enabled; use type-only imports where appropriate.
- Keep styles alongside their components and reuse the existing CSS tokens for
  colors, fonts, spacing, radii, and shadows. Stylesheets are global, so check for
  selector collisions when adding classes.
- Preserve the canvas/obsidian palette, restrained emerald accents, technical
  grid, and existing typography unless a redesign is requested.
- Reuse Lucide icons and the existing Framer Motion dependency when appropriate.
  Add dependencies only when the task needs them.
- Preserve section IDs (`home`, `features`, `how-it-works`, `about`) or update
  their navigation and scroll logic together.
- Clean up timers, event listeners, and observers in effects. Account for React
  Strict Mode when changing animation or DOM interaction code.
- Use semantic controls, keyboard access, visible focus, meaningful accessible
  labels, and reduced-motion handling for new or changed interactions.
- Preserve booking and social link destinations unless asked to change them.
  Keep `rel="noopener noreferrer"` on links using `target="_blank"`.
- Use supplied evidence for testimonials, client results, and numerical claims.
  Keep changes to content separate from unrelated rebranding or file renaming.
- Keep generated `dist/`, `node_modules/`, local configuration, and secrets out
  of commits. Update the lockfile alongside intentional dependency changes.

## Verification and delivery

- For code changes, run lint and the production build. Report any failure and
  whether it was introduced by the change; do not claim unrun checks passed.
- For UI changes, check desktop and mobile layouts and the affected navigation,
  menu, links, animations, and interactions in a browser when one is available.
  Check for overflow, keyboard usability, and console errors.
- There is no `test` script. Add test infrastructure only when the task needs it.
  Documentation-only changes need a content and diff review rather than a build.
- Before finishing, review the diff for accidental edits and summarize the
  result, verification performed, and any remaining limitation.
