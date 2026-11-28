# Friday 27 November 2026 — The World in One Day

[![make.fun · news-image-20261127](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

Entry for the [make.fun `news-image-20261127` bounty](https://make.fun/bounty/news-image-20261127): a single `1024×1024` editorial broadsheet front page summarizing **36 verified world news stories** dated **Friday 27 November 2026 (UTC)** across **7 global regions** and **18 beats**, featuring 13 original vector editorial scenes balanced across every continent, a dark-navy **The Day in Numbers** sidebar, a full 24-hour UTC timeline (`00:16Z–19:36Z`), 23 large-type verified dispatches, an editorial world map, and an explicit **Date Check** audit box.

## Design Highlights (v12)
- **3-Hero + Dark-Navy Sidebar Architecture:** Pairs three focused, high-contrast lead stories (Russia's 155-drone strike on Ukraine, China CSI 300 +4.2% / Korea Kospi +4.3% surge, and New Zealand's official 65/130 hung parliament) with a bold **The Day in Numbers** dark-navy sidebar legible at ~300px.
- **Continental Balance Across All 13 Illustrated Scenes:** Dedicated visual panels for Europe (Kyiv, Berlin, London, Brussels), Asia (Shanghai/Seoul, Hanoi CPTPP), Americas (New York Wall Street, Ottawa Bill 21, Rio de Janeiro 5.1% unemployment), Middle East (Gulf of Oman/Hormuz), Africa (UN 16 hunger hotspots), Oceania (Wellington), and Global (Black Friday & Amazon strikes).
- **Strict Full-Day UTC Accuracy:** Every story occurred or was first reported on Friday 27 November 2026 (UTC); single-side claims are labelled `CLAIM`; earlier Thu 26 Nov / Wed 25 Nov stories are explicitly audited out in the `DATE CHECK ✓` box.

## Build & Run
- `node render.mjs` renders `poster.html` into `entry.png` (`1024×1024`) deterministically via headless Chromium.
- `node main.ts` writes the pre-rendered `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` deterministically.
