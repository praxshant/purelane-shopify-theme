# AI-assisted workflow

AI was used as an engineering tool throughout — for implementation, refactoring, Liquid conversion, debugging and QA — with a human owning the Shopify data, the QA judgement, and every decision that touched the live store.

## Tools

- **Claude Code** — prototype analysis, Shopify Liquid conversion, the reusable card, Theme Editor schema/blocks, edge-case logic, CLI deploys, and headless-browser QA against the live preview.
- **ChatGPT** — architecture, review and sequencing decisions where a second pass helped.

## What was delegated to AI

- Analysed the supplied `purelane-homepage.html` prototype (structure, CSS, behavior).
- Converted static prototype sections into reusable Shopify Liquid sections with `{% schema %}`, presets and blocks.
- Built the reusable `purelane-product-card` snippet and scoped the prototype's global CSS/JS to the five sections.
- Wired sections to real Shopify product/collection data via `templates/index.json` (by handle).
- Implemented the edge cases (sold-out, no-image fallback, long title, compare-at pricing).
- Diagnosed the ratings not rendering and traced it to a **metafield namespace mismatch** (`reviews.*` vs the store's `custom.*`), then repointed the card.
- Ran browser-based QA: authenticated the password-gated preview, screenshotted desktop (1440px) and mobile (375px), and exercised hero autoplay/dots, the reviews marquee, and add-to-cart — comparing the rendered result against the prototype.

## Where AI needed correction / human verification

- **Metafield namespace.** The card was written for Shopify's standard `reviews.*` namespace; the store actually used `custom.*`. Caught during QA (0 rating rows despite populated metafields) and fixed to match the real content model — a reminder to confirm the data contract before assuming a convention.
- **Screenshot methodology.** Automated full-page captures showed below-fold sections blank; this was the scroll-reveal (`.rv` → `.in`) not firing in an un-scrolled headless render, not a bug. Verified by forcing reveal and by confirming the prototype behaves identically.
- **Shopify data was configured by hand.** Products, prices/compare-at, inventory states, product images and the automated collection were set in Admin; AI generated the seed CSV and the exact steps, a human executed and verified them.
- **Store safety.** The theme was kept unpublished and the store's existing test data untouched throughout; the live preview was verified before sign-off.

## What I'd systematise for twenty more of these

- A **product/metafield data contract** agreed up front (namespaces, types, which fields drive which UI) so the theme and the store never drift — this was the one real snag here.
- A reusable **cross-viewport screenshot + interaction QA script** (the headless pass used here) wired to run against any preview theme id, with reveal forced for deterministic captures.
- A **section-block schema template** and a shared card snippet as the starting point, so each new brand is configuration, not re-implementation.
