# CHANGELOG — virtualagency-os.com canonical cutover + About page rewrite

This package is the **hardened Atlas build** with the following applied:

## 1) Canonical domain: https://virtualagency-os.com
Applied across:
- `<link rel="canonical">`
- `og:url`
- JSON-LD `WebPage.url`
- `sitemap.xml` `<loc>` entries
- `robots.txt` Sitemap directive
- `llms.txt` links

## 2) Work page replacement
Replaced the old "Selected work & examples" content with an "About West Peek Productions" profile:
- Founded 2020 by Scooter Taylor
- Virtual + hybrid events (strategy + technology support)
- Clients: Nike, AT&T, Kennedy Foundation
- Metaverse expertise + Frankfurt presentation
- Design capabilities (layout/graphics/branding)
- Origin story (COVID shift; Inovo Studios + Susan Greene copy)

Files touched:
- `selected-work.html`
- `articles.html` (link label + description updated)

## Quick verification (no tooling required)
Open these files and confirm:
- `index.html` canonical is `https://virtualagency-os.com/index.html`
- `atlas.html` contains INTENT 1–15 + INTENT X + aggressive variants
- `selected-work.html` title is "About West Peek Productions | Virtual & Hybrid Event Production"

