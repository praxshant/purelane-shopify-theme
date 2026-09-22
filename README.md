# Purelane — Shopify homepage (AI Product Engineer assignment)

Converted the supplied `purelane-homepage.html` prototype into a Shopify-native theme built on **stock Dawn**. The five in-scope sections are production Liquid sections a marketing team can run from the Theme Editor, driven entirely by Shopify data — products, pricing, inventory, collections and metafields.

## Live review

- **Dev store:** `https://purelane-theme-test-piibskhz.myshopify.com` (password-protected)
- **Unpublished theme preview:** `https://purelane-theme-test-piibskhz.myshopify.com?preview_theme_id=167033929879`
- Storefront password and admin access are provided in the submission email, not committed here.

The theme is intentionally left **unpublished**; the store's default Shopify test data was left untouched.

## Five implemented sections

Homepage order follows the prototype: hero → reviews → combos → bundles → shop.

| # | Section | File | Data source |
|---|---------|------|-------------|
| 1 | Hero | [sections/purelane-hero.liquid](sections/purelane-hero.liquid) | Product blocks (image, variant price/compare-at) |
| 2 | Reviews rail | [sections/purelane-reviews.liquid](sections/purelane-reviews.liquid) | Editable review blocks + aggregate settings |
| 3 | Best-selling combos | [sections/purelane-combos.liquid](sections/purelane-combos.liquid) | Editable offer price/compare-at + product image stack |
| 4 | Build-your-bundle | [sections/purelane-bundles.liquid](sections/purelane-bundles.liquid) | Editable offer price/compare-at + product image stack |
| 5 | Shop / product grid | [sections/purelane-shop.liquid](sections/purelane-shop.liquid) | Selected collection |

Reusable card: [snippets/purelane-product-card.liquid](snippets/purelane-product-card.liquid) (shared by the shop grid; the combos/bundles reuse the same visual language). Scoped styling in [assets/purelane.css](assets/purelane.css), scoped behavior in [assets/purelane.js](assets/purelane.js).

## Shopify-native implementation

- **Liquid sections**, each with a `{% schema %}`, presets, and Theme Editor **blocks** (hero slides, combo/bundle cards, review cards) — add / remove / reorder without code.
- **Products, prices, compare-at, inventory** come from Shopify; the theme never hardcodes them.
- **Collection-driven grid** — the shop section renders a merchant-selected collection.
- **Rating row from product metafields** — `custom.rating` (Rating) and `custom.rating_count` (Integer); the row is omitted when empty rather than inventing a value.
- **Native product forms → cart** for every purchasable card.
- **Responsive** from 375px up; **reduced-motion** respected; hero/marquee animations are section-scoped and survive Theme Editor reloads.

## Edge cases (seeded deliberately for QA)

- **Sold out** — Magic Eraser (0 inventory, deny) shows the sold-out pill + disabled button.
- **No image** — Magic Eraser has no media and renders the placeholder SVG fallback.
- **Long title** — "Plant-Powered Multi-Surface Cleaner for Kitchens, Bathrooms, Glass, Tiles and Everyday Family Homes" wraps cleanly.
- **Discount pricing** — compare-at + "% off" render where a compare-at price is set.

## Architectural note (be transparent)

The combos and bundles reproduce the prototype exactly. In the prototype these cards are **marketing displays**, not purchase widgets: their CTAs are on-page navigation ("Shop bundle" → `#bundles`, "Build this box" → `#shop`), so the theme keeps that behaviour rather than inventing an add-to-cart. Only the shop grid sells, via native Shopify product forms.

A combo/bundle offer price has **no native single-product field**, so it's exposed as a merchant-editable section setting (price, compare-at, saving) set to the prototype's values — editable in the Theme Editor without touching Liquid. A true multi-product Shopify **Bundle** (one cart line spanning several products) is a store-side addition; with more time I'd model these as a `bundle_offer` metaobject or Shopify Bundles so the offer price and cart stay platform-owned. Documented in [docs/shopify-setup.md](docs/shopify-setup.md).

## Docs

- [docs/build-notes.md](docs/build-notes.md) — what the original file got wrong, what changed and why, what's next.
- [docs/ai-workflow.md](docs/ai-workflow.md) — how AI was used and verified.
- [docs/shopify-setup.md](docs/shopify-setup.md) — store configuration (products, metafields, bundles, Theme Editor).
- [docs/purelane-products.csv](docs/purelane-products.csv) — the 8-product seed catalog.

## Built on Dawn

Stock [Dawn](https://github.com/Shopify/dawn) is the base theme, unchanged except for the five custom sections, the shared snippet/CSS/JS, the wired `templates/index.json`, and the docs above. Deploy via Shopify CLI: `shopify theme push --store <store> --theme "Purelane Homepage"`.
