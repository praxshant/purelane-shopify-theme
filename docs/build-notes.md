# Purelane build notes

## Scope completed locally

The five assignment sections are implemented as Dawn sections: hero, shop grid, best-selling combos, bundles, and reviews rail. Their homepage order follows the assignment's listed scope.

## Prototype adjustments made for production

- Replaced prototype product artwork and prices with Shopify product media and variant prices.
- Replaced repeated static cards with reusable Liquid and Theme Editor blocks.
- Replaced global hero selectors with section-scoped JavaScript so Theme Editor reloads and duplicate instances do not conflict.
- Respects `prefers-reduced-motion`; the reviews marquee pauses on hover or keyboard focus.
- Provides product image fallback, sold-out state, semantic headings, visible keyboard focus, and responsive grid/rails.
- Uses an actual Shopify bundle product as the combo/bundle price and cart source. A theme alone cannot safely apply the prototype's fixed bundle discounts to arbitrary individual products at checkout.

## Still required for delivery

The development-store URL/password, product seed data, actual bundle-product configuration, storefront visual comparison from 375px upward, real cart/checkout testing, and deployment cannot be verified from this local workspace. Complete those in the store before sending the assignment.

## AI workflow

AI assisted with turning the prototype patterns into Liquid sections and with repetitive schema and card scaffolding. Human review was used to keep Shopify products, variant pricing, availability, cart behavior, accessibility, and Theme Editor isolation as the source of truth. For repeat client work, product/bundle data contracts and cross-viewport screenshot checks should be systematised before section implementation begins.
