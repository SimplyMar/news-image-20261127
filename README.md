# Friday 27 November 2026 — The World in One Day

A single `1024×1024` editorial broadsheet front page summarizing **38 verified world news stories** dated **Friday 27 November 2026** across **10 global regions** and **14 fields**, featuring 13 original vector editorial scenes, a dark-navy horizontal **The Day in Numbers** stat ribbon, a UTC timeline strip, 25 verified global dispatches, a deep-navy equirectangular world map, and an explicit **Date Check** audit box.

## Design Highlights (v10)
- **Open Broadsheet Hierarchy:** Warm cream newsprint (`#F6F2E9`), deep charcoal rules, refined regional accent strip, and three full-width lead stories (`16.2px` Georgia serif) with `WHY IT MATTERS` context lines.
- **Global Balance (10 Regions, 13 Illustrated Scenes across 7 Regions + Global):** Middle East (Kuwait drone strike, Gaza strikes), North America (US Thanksgiving storms), Europe (EU €45bn Ukraine loan deadlock, Kyiv grid alert, Ibiza diesel tanker, UK net migration 77,000), Oceania (New Zealand 65/131 hung parliament), Africa (Mali 300+ Russian fighters leak), Latin America (Brazil FinMin Trabuco), East Asia (Tokyo 2.9% core CPI), and Global (Black Friday & Amazon strikes, Earth >2°C 7-day record).
- **Strict Date & Attribution Discipline:** Every item occurred or was first reported on Friday 27 November 2026 (any time zone); disputed claims (Kuwait drone attribution, Jazan refinery strike) are explicitly labelled `CLAIM` and attributed; earlier-day stories (22–26 Nov) are audited out in the `DATE CHECK ✓` box.

## Build & Run
- `node render.mjs` renders `poster.html` into `entry.png` (`1024×1024`) deterministically via headless Chromium.
- `node main.ts` writes the pre-rendered `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` deterministically.
