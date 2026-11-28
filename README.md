# Friday 27 November 2026 — The World in One Day

[![make.fun · news-image-20261127](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

Entry for the [make.fun `news-image-20261127` bounty](https://make.fun/bounty/news-image-20261127): a single `1024×1024` cream editorial broadsheet summarizing **40 world news stories** from **Friday 27 November 2026 (UTC)** across **11 global regions** and **20 fields**, featuring a `70px` serif masthead, **3 illustrated lead stories** with *Why It Matters* framing, a dark-navy **The Day in Numbers** sidebar, **10 illustrated secondary stories**, **27 sourced regional briefs**, a pin-mapped **Where It Happened** world map, a two-tier **Date Check** audit box, and an explicit **How Sure** sourcing legend.

## Design Highlights (v20)
- **Editorial Broadsheet Hierarchy & 300px Legibility:** Warm newsprint palette (`#fbf9f3`), `70px` navy serif masthead, 3 lead scenes (*Pacific Archer* Gulf of Oman blockade strike + IRGC counter-claim, CSI 300 `+4.2%` / Kospi `+4.34%` Asian equity surge, and proportional 130-seat New Zealand Parliament hemicycle `65 / 130`), dark-navy **The Day in Numbers** key-figure sidebar, and 10 high-contrast secondary cards (`4–13`) covering Ukraine's 155-drone attack, Germany's €556bn budget (`317–260`), UK DWP cyber outage, Kenya's 123-death verdict, Canada's Bill 21 ruling, UN's 16 hunger hotspots, Gaza MSF clinic strike, India's Lok Sabha expansion bill (`+50%` seats / `33%` women's quota), Ilia Malinin's `114.81` world record, and Mexico's DEA tip-line protest.
- **40 Strict Friday 27 Nov 2026 Stories Across 11 Regions & 20 Fields:** Covers Europe (8), Eastern Europe (4), Middle East (5), Africa (4), East Asia (4), North America (4), Southeast Asia (3), Oceania (3), South Asia (2), Latin America (2), and Global (1), with named sources on every single card and brief plus explicit `OFFICIAL`, `REPORTED`, `ON RECORD`, and `CLAIM` tags.
- **Two-Tier Friday 27 Nov 2026 Date Discipline:** Explicitly audits out both earlier spillover stories (Thu 26 Nov: Kuwait drone deaths, EU budget collapse, US storm outages, Ibiza tanker, Macy's parade; Wed 25 Nov: US tariff plan, Cairo tanker fire) and upcoming weekend events (Sat 28 Nov: Taiwan & Victoria polls; Sun 29 Nov: Spain general election; Mon 30 Nov: India special session).

## Build & Run
- `node render.mjs` renders `poster.html` into `entry.png` (`1024×1024`) deterministically via headless Chromium.
- `node main.ts` writes the pre-rendered `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` deterministically.
