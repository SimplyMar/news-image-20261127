# Friday 27 November 2026 — The World in One Day

[![make.fun · news-image-20261127](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

Entry for the [make.fun `news-image-20261127` bounty](https://make.fun/bounty/news-image-20261127): a single `1024×1024` ultra-legible visual broadsheet summarizing **40 strictly verified world news stories** dated **Friday 27 November 2026** across **10 global regions** and **20 fields**, featuring a `46px` bold masthead, **20 large custom-illustrated story panels** (`5×4` grid with bold `12.7px` 300px-legible headlines and zero micro-text clutter), **20 concise 4-column regional briefs**, a strict **Date Check** audit bar excluding Thu 26 Nov / Wed 25 Nov spillover items, and a dark-navy global markets ticker.

## Design Highlights (v19)
- **Maximum 300px Legibility — 20 Big Illustrated Panels + 20 Briefs:** Eliminates dense micro-text paragraphs in favor of 20 large (`242×152px`) visual story tiles with bold headlines and instant graphic readouts (`PACIFIC ARCHER`, `CSI 300 +4.2%`, 130-dot NZ hemicycle `65 / 130`, `gov.uk/dwp SERVICE UNAVAILABLE`, `155 DRONES`, `S&P 7,297.49`, `€556bn`, `123 DEATHS`, `BILL 21`, `Q3 -0.2%`, `CANCELLED/GROUNDED`, `mRNA`, `5.1%`, `16 HOTSPOTS`, `OPENAI v APPLE`, `14 LOST`, `114.81`, `DEA`, `ID/PH/UAE`, `>6 KM`).
- **40 Verified Friday 27 Nov 2026 Stories Across 10 Regions & 20 Fields:** Covers Europe (11), Africa (5), North America (5), Middle East (4), East Asia (4), Latin America (3), Southeast Asia (3), Oceania (3), South Asia (1), and Global (1), with inline sources and explicit `CLAIM` / `ON RECORD` flags.
- **Strict Friday 27 Nov 2026 Date Discipline:** Audits out earlier Thu 26 Nov / Wed 25 Nov spillover stories (Kuwait drone strike, US Thanksgiving storm outages, EU budget summit collapse, Ibiza diesel tanker, Gaza 10 killed, Depardieu trial, UK net migration, Macy's parade & Cairo fire).

## Build & Run
- `node render.mjs` renders `poster.html` into `entry.png` (`1024×1024`) deterministically via headless Chromium.
- `node main.ts` writes the pre-rendered `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` deterministically.
