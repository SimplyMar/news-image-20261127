# Friday 27 November 2026 — The World in One Day

[![make.fun · news-image-20261127](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

Entry for the [make.fun `news-image-20261127` bounty](https://make.fun/bounty/news-image-20261127): a single `1024×1024` editorial broadsheet front page summarizing **40 verified world news stories** dated **Friday 27 November 2026 (UTC)** across **10 global regions** and **20 fields**, featuring a high-contrast navy masthead and gold headline deck, 6 key figures, a full 24-hour UTC wire timeline (`00:16–19:36`), 3 full-width lead cards, 10 continent-balanced illustrated scenes, 27 color-coded dispatches, a light editorial world map, and a strict **Date Check** audit box.

## Design Highlights (v13)
- **Maximum 300px Legibility:** Bold sans-serif headlines (`19.6px` heroes, `13.3px` mid-cards), navy masthead with gold deck, crisp high-contrast callout banners on every visual card, and zero text clipping or overlap.
- **True 10-Region, 20-Field Breadth (40 Verified Stories):** Dedicated illustrated panels across Europe (Kyiv, Brussels, Berlin, London), East Asia (Shanghai/Seoul markets, Tokyo skating world record), Southeast Asia (Hanoi CPTPP), Oceania (New Zealand 65/130 hung parliament), Middle East (Gulf of Oman / Hormuz), Africa (UN 16 hunger hotspots), North America (Canada Supreme Court Bill 21), Latin America (Brazil 5.1% jobless low), and Global (Black Friday & Amazon strikes), backed by 27 concise dispatches spanning South Asia, Wall Street, cybersecurity, energy, diplomacy, aviation, and climate.
- **Strict Full-Day UTC Accuracy:** Every item happened or was first reported on Friday 27 November 2026 (UTC); official statements and unconfirmed claims are explicitly distinguished; earlier Thu 26 Nov / Wed 25 Nov stories are audited out in the `DATE CHECK ✓` box.

## Build & Run
- `node render.mjs` renders `poster.html` into `entry.png` (`1024×1024`) deterministically via headless Chromium.
- `node main.ts` writes the pre-rendered `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` deterministically.
