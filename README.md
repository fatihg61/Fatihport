# SvelteKit Portfolio – Fatih G

Een minimalistische, **Apple-achtige** (zonder Tailwind) portfolio-site gebouwd met **SvelteKit**. 
Dit project is bedoeld als visitekaartje voor opdrachtgevers — met focus op **Front-end** en **Microsoft 365 Cloud Engineering**.

## Highlights
- **Snel & toegankelijk** (A11y-first), SEO- en OG-meta out-of-the-box
- **Dark/Light** thema met `prefers-color-scheme` + handmatige toggle
- Strakke **typografie** met systeemfont-stack (San Francisco-achtig)
- Herbruikbare componenten, nette mappenstructuur en **JavaScript**
- Makkelijk te updaten via één bronbestand: `src/lib/data/profile.ts`
- Automatische **sitemap**, **robots.txt**, **manifest** en **JSON‑LD**
- Klaar voor **Vercel/Netlify** deploy en GitHub Actions CI

## Snel starten

```bash
# 1) Dependencies
pnpm i   # of: npm i / bun i / yarn

# 2) Dev server
pnpm dev # open http://localhost:5173

# 3) Build & preview
pnpm build && pnpm preview
```

## Personaliseren
Aanpassen doe je vooral in `src/lib/data/profile.ts`:
- Naam, titel(s), samenvatting
- Vaardigheden (skills) en tools
- Projecten met links en badges
- Social links (GitHub, LinkedIn, X/Twitter, e‑mail)

## Deploy
- **Vercel**: push naar GitHub → "Import Project" in Vercel → framework: SvelteKit.
- **Netlify**: "New site from Git" → build: `pnpm build` → publish: `build`.

## Kwaliteit
- **ESLint + Prettier** (Svelte + TS)
- **Vitest** setup + voorbeeldtest
- **Playwright** e2e (optioneel command: `npx playwright test`)

## Licentie
Copyright © 2025 — Fatih G. Alle rechten voorbehouden.

> Vereist **Node 18+** (aanbevolen Node 20 LTS). Installeer met `nvm` of `fnm` op Windows/Mac/Linux.
