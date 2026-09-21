# Purelane Shopify setup

The homepage is built on a clean Dawn theme. Configure the following in the development store before visual and checkout QA.

## Product seed data

Create at least these eight products in a Purelane collection used by the shop section:

1. Foaming Kitchen Cleaner
2. Dishwash Gel
3. Tap & Limescale Remover
4. Laundry Detergent
5. Herbal Floor Cleaner
6. Toilet Cleaner
7. Magic Eraser — set inventory to zero and disable "continue selling when out of stock"
8. Plant-Powered Multi-Surface Cleaner for Kitchens, Bathrooms, Glass, Tiles and Everyday Family Homes — deliberately omit its image

The eighth item satisfies both long-title and missing-image coverage. Set prices and compare-at prices in Shopify; the theme never supplies them.

## Ratings metafields

Create these optional product metafields if rating text is required on product cards:

| Namespace and key | Type |
| --- | --- |
| `custom.rating` | Rating |
| `custom.rating_count` | Integer |

Leave ratings empty for products without verified review data. The card intentionally omits the rating row instead of inventing a value.

## Combo and bundle products

The price shown on every combo or bundle card is the selected **Bundle product**'s Shopify variant price and compare-at price. Configure these products with Shopify Bundles (or the store's approved bundle solution) before selecting them in the Theme Editor. Select their constituent products separately in the card's **Included products** setting so the visual stack remains merchant-editable.

This avoids the incorrect alternative of adding individual products at their normal prices while presenting a fictional bundle discount. The bundle product, availability, and cart line remain Shopify's source of truth.

## Theme Editor

1. Select the shop collection and choose eight products.
2. Select three real bundle products and their contents for Combos.
3. Select three real bundle products and their contents for Bundles.
4. Select up to three hero products.
5. Add, remove, reorder, and edit review blocks as required.
