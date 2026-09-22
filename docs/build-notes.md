# Purelane build notes

## Scope completed locally

The five assignment sections are implemented as Dawn sections: hero, shop grid, best-selling combos, bundles, and reviews rail. Their homepage order follows the supplied prototype for the in-scope sections: hero, reviews, combos, bundles, then shop.

## Prototype adjustments made for production

- Replaced prototype product artwork and prices with Shopify product media and variant prices.
- Replaced repeated static cards with reusable Liquid and Theme Editor blocks.
- Replaced global hero selectors with section-scoped JavaScript so Theme Editor reloads and duplicate instances do not conflict.
- Replaced the prototype's duplicated, global stylesheet with a small stylesheet scoped to the five custom sections, so it cannot alter Dawn's header, footer, or product pages.
- Respects `prefers-reduced-motion`; the reviews marquee pauses on hover or keyboard focus.
- Provides product image fallback, sold-out state, semantic headings, visible keyboard focus, and responsive grid/rails.
- Reproduces the prototype's combos/bundles as marketing displays with its on-page navigation CTAs ("Shop bundle" → `#bundles`, "Build this box" → `#shop`), not add-to-cart. Their offer prices have no native single-product field, so they are merchant-editable section settings set to the prototype's exact values; only the shop grid sells, via native product forms.

## Deliberately out of scope

The prototype has sections beyond the assignment's five (ingredients, how-it-works, proof, why-bundles, categories, footer promos). Those were left out rather than half-built, and the two extra combo cards in the prototype (Complete Home, Hard Water Kit) were not wired since their constituent products aren't in the eight-product seed set.

## With more time

- Model combos/bundles as a `bundle_offer` **metaobject** (or Shopify Bundles) so the offer price and a true multi-product cart line stay platform-owned, rather than editable section settings.
- Run a Lighthouse/Core Web Vitals pass against the preview and act on anything it flags.
- Seed the remaining combo constituent products (fabric conditioner, machine cleaner) so combo contents match the prototype one-to-one.

## AI workflow

AI assisted with turning the prototype patterns into Liquid sections and with repetitive schema and card scaffolding. Human review was used to keep Shopify products, variant pricing, availability, cart behavior, accessibility, and Theme Editor isolation as the source of truth. For repeat client work, product/bundle data contracts and cross-viewport screenshot checks should be systematised before section implementation begins.
