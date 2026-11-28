# Friday 27 November 2026 — The World in One Day

[![make.fun · news-image-20261127](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

Entry for the [make.fun `news-image-20261127` bounty](https://make.fun/bounty/news-image-20261127): a single `1024×1024` archival broadsheet front page summarizing **37 strictly verified world news stories** dated **Friday 27 November 2026** across **10 global regions** and **18 fields**, featuring a bold `64px` serif masthead, dark-navy **The Day in Numbers** sidebar, 24-hour UTC timeline (`01:00–23:30`), 13 framed vector editorial scenes spanning all 6 habitable continents with per-card source attribution and certainty badges, 24 source-tagged briefs, an equirectangular world map, and a strict **Date Check** exclusion audit.

## Design Highlights (v15)
- **300px Legibility & Editorial Hierarchy:** Pairs 3 framed hero cards alongside a high-contrast dark-navy `THE DAY IN NUMBERS` sidebar, region-colored top accents, in-scene city pills and verdict tags, and a dot-matrix 130-seat New Zealand parliament hemicycle.
- **Per-Item Verification & Sourcing:** Every illustrated card (1–13) and every brief (14–37) names its official/wire source directly inline (`CENTCOM`, `Electoral Commission`, `Bundestag`, `Mombasa Court`, `Supreme Court`, `UVRI`, `IBGE`, `INSEE`, `WHO`, `Reuters`, `AP`, `BBC`, `AFP`, `CNBC`, `Yonhap`) and flags unconfirmed one-sided reports explicitly as `CLAIM`.
- **All 6 Habitable Continents Pictured & Mapped:** Covers Europe (9), Africa (5), North America (5), Middle East (4), East Asia (4), Latin America (3), Oceania (3), Southeast Asia (2), South Asia (1), and Global (1), with all 13 illustrated scenes plotted at exact coordinates on the world map.
- **Strict Friday 27 Nov 2026 Date Discipline:** Audits out earlier Thu 26 Nov / Wed 25 Nov spillover stories (Kuwait drone strike, US Thanksgiving storm outages, EU budget summit collapse, Ibiza diesel tanker, Gaza 10 killed, Depardieu trial, UK net migration, Macy's parade & Cairo fire).

## Build & Run
- `node render.mjs` renders `poster.html` into `entry.png` (`1024×1024`) deterministically via headless Chromium.
- `node main.ts` writes the pre-rendered `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` deterministically.
