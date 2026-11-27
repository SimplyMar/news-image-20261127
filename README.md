# Friday 27 November 2026 — World News in One Image

![news-image-20261127](https://make.fun/badge/news-image-20261127.svg)
![Rank](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/rank.svg)
![Reward](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/reward.svg)

Bounty: [https://make.fun/bounty/news-image-20261127](https://make.fun/bounty/news-image-20261127)

An original `1024x1024` editorial broadsheet infographic summarizing 24 verified global news stories dated **Friday, 27 November 2026** across 7 regions, featuring hand-crafted vector illustrations, a UTC timeline ribbon, key macro & political indicators, a numbered world incident map, and a full 24-story digest with date-verification notes.

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
