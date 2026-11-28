# Friday 27 November 2026 — The World in One Day

[![make.fun · news-image-20261127](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/SimplyMar/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

Entry for the [make.fun `news-image-20261127` bounty](https://make.fun/bounty/news-image-20261127): a single `1024×1024` archival broadsheet front page summarizing **38 strictly verified world news stories** dated **Friday 27 November 2026** across **10 global regions** and **18 fields**, featuring a bold `62px` serif masthead, 6-metric key-figures strip, 24-hour UTC timeline (`01:00–23:30`), 3 wide full-width hero stories, 10 mid-row editorial cards spanning all 6 habitable continents with per-card source attribution and certainty badges, 25 source-tagged dispatches, a high-contrast dark-navy equirectangular world map, and a strict **Date Check** exclusion audit.

## Design Highlights (v16)
- **Wide Full-Width Hero Architecture:** Pairs 3 wide full-width lead cards (`18.8px` Georgia headlines) with a clean 6-figure horizontal summary bar and unobstructed vector scenes (clean numbered circle pins + bottom-right verdict tags) for maximum 300px thumbnail legibility.
- **Per-Item Verification & Sourcing:** Every illustrated card (1–13) and every dispatch (14–38) names its official/wire source directly inline (`CENTCOM`, `Electoral Commission`, `Bundestag`, `Mombasa Court`, `Supreme Court`, `FAO/WFP`, `IBGE`, `INSEE`, `WHO`, `Reuters`, `AP`, `BBC`, `AFP`, `CNBC`, `Yonhap`) and flags unconfirmed one-sided accounts explicitly as `CLAIM`.
- **All 6 Habitable Continents Pictured & Mapped:** Covers Europe (10), Africa (5), North America (5), Middle East (4), East Asia (4), Latin America (3), Oceania (3), Southeast Asia (2), South Asia (1), and Global (1), with all 13 illustrated scenes plotted at exact coordinates on a high-contrast dark-navy world map.
- **Strict Friday 27 Nov 2026 Date Discipline:** Audits out earlier Thu 26 Nov / Wed 25 Nov spillover stories (Kuwait drone strike, US Thanksgiving storm outages, EU budget summit collapse, Ibiza diesel tanker, Gaza 10 killed, Depardieu trial, UK net migration, Macy's parade & Cairo fire).

## Build & Run
- `node render.mjs` renders `poster.html` into `entry.png` (`1024×1024`) deterministically via headless Chromium.
- `node main.ts` writes the pre-rendered `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` deterministically.
