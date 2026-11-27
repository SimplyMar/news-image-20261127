# Friday 27 November 2026: 37 stories, 10 regions, 14 fields, 11 drawn scenes, map, UTC timeline & date check

![news-image-20261127](https://make.fun/badge/news-image-20261127.svg)
![Rank](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/rank.svg)
![Reward](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/reward.svg)

Bounty: [https://make.fun/bounty/news-image-20261127](https://make.fun/bounty/news-image-20261127)

An original `1024x1024` classical editorial broadsheet summarizing 37 verified world news stories dated **Friday 27 November 2026** across 10 global regions and 14 fields—featuring a full-width masthead, bold key-figures ribbon, 3 lead hero stories (each with a *Why It Matters* synthesis) and 8 wide mid-row dispatches with original layered vector illustrations, certainty badges (`OFFICIAL`, `CONFIRMED`, `REPORTED`, `CLAIM`), an equirectangular world locator map, 26 verified briefs, a chronological UTC panel, and a Date Check exclusion audit.

## Structure

- `poster.html` — Self-contained HTML5/CSS/SVG editorial broadsheet layout (`1024x1024`)
- `render.mjs` — Headless Chromium renderer producing `entry.png`
- `entry.png` — Final rendered `1024x1024` infographic
- `main.ts` — Node TypeScript entrypoint validating and writing `entry.png` to `MAKEFUN_OUTPUT_DIR` (defaults to `/output`)

## Usage

```bash
# Re-render entry.png from poster.html
node render.mjs

# Emit validated entry.png to output directory
MAKEFUN_OUTPUT_DIR=out node main.ts
```
