# Friday 27 November 2026: 45 stories, 10 regions, 16 fields, 13 drawn scenes, map, UTC timeline & date check

![news-image-20261127](https://make.fun/badge/news-image-20261127.svg)
![Rank](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/rank.svg)
![Reward](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/reward.svg)

Bounty: [https://make.fun/bounty/news-image-20261127](https://make.fun/bounty/news-image-20261127)

An original `1024x1024` editorial broadsheet front page summarizing 45 verified world news stories dated **Friday 27 November 2026** across 10 global regions and 16 fields—featuring 3 lead hero stories (each with a *Why It Matters* synthesis) and 10 mid-row dispatches with original full-bleed vector illustrations, 6 key figures, a chronological UTC strip, certainty badges (`OFFICIAL`, `CONFIRMED`, `REPORTED`, `CLAIM`), an equirectangular world locator map, 32 additional verified briefs, and a Date Check exclusion audit.

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
