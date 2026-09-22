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

## Combo and bundle cards

The combos and bundles are marketing displays that mirror the prototype. Each card's **offer price, compare-at price and saving** are merchant-editable section settings (set to the prototype's values), and the **Included products** setting drives the product-image stack. Their CTAs are the prototype's on-page navigation ("Shop bundle" → `#bundles`, "Build this box" → `#shop`), not add-to-cart — only the shop grid sells, via native product forms.

There is no native Shopify field for a combo/bundle offer price, so editable settings are the pragmatic solution. To turn these into true multi-product purchases with a combined cart line, model them as a `bundle_offer` metaobject or Shopify Bundles store-side and bind the card price to that — no other theme change needed.

## Theme Editor

1. Select the shop collection and choose eight products.
2. In Combos, set each card's price / compare-at / saving and pick its included products.
3. In Bundles, set each tier's price / compare-at and pick its included products.
4. Select up to three hero products.
5. Add, remove, reorder, and edit review blocks as required.
