# Friday 27 November 2026 — The World in One Day

[![make.fun · news-image-20261127](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

Entry for the [make.fun `news-image-20261127` bounty](https://make.fun/bounty/news-image-20261127): a single `1024×1024` editorial broadsheet front page summarizing **38 verified world news stories** dated **Friday 27 November 2026 (UTC)** across **7 global regions** and **18 beats**, featuring 13 original vector editorial scenes with high-contrast callout tags, a 6-metric key-figures strip, a full 24-hour UTC timeline (`00:16Z–19:36Z`), 25 verified global dispatches, a deep-navy equirectangular world map, and an explicit **Date Check** audit box.

## Design Highlights (v11)
- **Strict Full-Day UTC Accuracy:** Every story occurred or was first reported on Friday 27 November 2026 (UTC), spanning midnight EU summit talks (`00:16Z`) through New Zealand's official 65/130 final count (`01:00Z`), Asian/US equity rallies (`06:30Z` & `18:00Z`), Russia's 155-drone strike (`08:06Z`), the UK DWP cyber incident (`08:14Z`), Germany's €556bn budget (`13:54Z`), and Canada's Supreme Court Bill 21 ruling (`19:36Z`). Earlier Thu 26 Nov / Wed 25 Nov stories are explicitly audited out in the `DATE CHECK ✓` box.
- **High-Contrast Editorial Hierarchy (~300px Legible):** Crisp framed white cards on warm archival newsprint (`#F6F3EB`), bold `18.4px` Georgia serif lead headlines, iconic flat-vector scenes with dark takeaway tags, zero clipping/truncation, and an equirectangular world map plotting all 13 illustrated scenes.
- **Balanced Global Coverage & Faithful Attribution:** Spans Europe (10), Asia (7), Americas (7), Middle East (5), Africa (4), Oceania (2), and Global (3); official rulings/data (`OFFICIAL`), multi-wire facts (`CONFIRMED`), and single-side accounts (`CLAIM`) are clearly distinguished.

## Build & Run
- `node render.mjs` renders `poster.html` into `entry.png` (`1024×1024`) deterministically via headless Chromium.
- `node main.ts` writes the pre-rendered `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` deterministically.
