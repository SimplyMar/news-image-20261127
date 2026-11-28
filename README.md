# Friday 27 November 2026 — The World in One Day

[![make.fun · news-image-20261127](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

Entry for the [make.fun `news-image-20261127` bounty](https://make.fun/bounty/news-image-20261127): a single `1024×1024` high-contrast broadsheet front page summarizing **40 strictly verified world news stories** dated **Friday 27 November 2026** across **10 global regions** and **20 fields**, featuring a deep-navy masthead banner with amber headline ribbon, 6-metric key-figures strip, 24-hour UTC timeline (`01:00–19:36`), 3 wide full-width hero stories, 10 detailed mid-row scenes with in-scene graphic labels and per-card source attribution, 27 region-coded dispatches, an equirectangular world map spanning all 6 habitable continents, and a stacked **Date Check** audit panel.

## Design Highlights (v17)
- **Maximum 300px Contrast & Bold Sans-Serif Hierarchy:** Deep-navy banner masthead (`59px` white serif) + bright amber deck ribbon + bold sans-serif lead headlines (`20.2px` heroes, `13.8px` mid-cards) + amber callout tags inside every richly illustrated scene (`PACIFIC ARCHER`, `CSI 300 +4.2%`, Beehive + 130-dot NZ hemicycle, `S&P 7,297.49`, `gov.uk/dwp SERVICE UNAVAILABLE`, `€556bn`, `123 DEATHS`, `BILL 21`, `CANCELLED/GROUNDED`, `114.81`, `mRNA`, `5.1%`).
- **40 Verified Friday 27 Nov 2026 Stories Across 10 Regions & 20 Fields:** Covers Europe (11), Africa (5), North America (5), Middle East (4), East Asia (4), Latin America (3), Southeast Asia (3), Oceania (3), South Asia (1), and Global (1), with inline sources and explicit `CLAIM` / `ON RECORD` flags.
- **Strict Friday 27 Nov 2026 Date Discipline:** Audits out earlier Thu 26 Nov / Wed 25 Nov spillover stories (Kuwait drone strike, US Thanksgiving storm outages, EU budget summit collapse, Ibiza diesel tanker, Gaza 10 killed, Depardieu trial, UK net migration, Macy's parade & Cairo fire).

## Build & Run
- `node render.mjs` renders `poster.html` into `entry.png` (`1024×1024`) deterministically via headless Chromium.
- `node main.ts` writes the pre-rendered `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` deterministically.
