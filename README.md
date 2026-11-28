# Friday 27 November 2026 — The World in One Day

[![make.fun · news-image-20261127](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

Entry for the [make.fun `news-image-20261127` bounty](https://make.fun/bounty/news-image-20261127): a single `1024×1024` archival broadsheet front page summarizing **29 strictly verified world news stories** dated **Friday 27 November 2026 (UTC)** across **10 global regions**, featuring a bold `66px` masthead, giant crimson key figures, a 24-hour UTC timeline (`01:00–23:30`), 13 pure-art vector editorial scenes, 16 large-type dispatches, a spacious equirectangular world map, and a strict **Date Check** exclusion audit.

## Design Highlights (v14)
- **Editorial Restraint & Maximum 300px Legibility:** Focused on 29 highest-impact stories (13 illustrated + 16 large `10.2px` briefs) instead of cramped micro-text, paired with a `66px` Georgia serif masthead, `21.5px` crimson key numbers, and uncluttered vector illustrations.
- **Strict Friday 27 Nov 2026 (UTC) Discipline:** Includes late-day 27 Nov actuals (`S&P 500 7,297.49`, `Dow 50,774.94`, `Adobe $9.7bn by 6:30pm ET`, `Canary Islands El Hierro rescue`) while explicitly auditing out all earlier Thu 26 Nov / Wed 25 Nov spillover stories (Kuwait drone strike, US Thanksgiving storm, Gaza 10 killed, Ibiza tanker, Depardieu trial, EU summit collapse, UK migration, Tokyo 23:30 UTC CPI, Macy's parade, Cairo fire).
- **Balanced 10-Region Coverage:** Spans Europe (9), Middle East (4), North America (3), Latin America (3), Africa (3), East Asia (2), Southeast Asia (2), South Asia (1), Oceania (1), and Global (1).

## Build & Run
- `node render.mjs` renders `poster.html` into `entry.png` (`1024×1024`) deterministically via headless Chromium.
- `node main.ts` writes the pre-rendered `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` deterministically.
