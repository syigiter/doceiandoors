# Doceian Doors Catalog and Product Presentation Audit

## Purpose

This document prepares Phase 5 improvements for catalog and product presentation.

The goal is to make catalog access, product collection browsing, and trade inquiry paths clearer for U.S. trade buyers.

This is a Phase 5A planning document. No HTML/CSS/JS is changed in this phase.

## Current Catalog Assets

Two catalog PDFs exist in `assets/catalog/`:

| File path | File name | Linked from | Link text | SEO-friendly filename? | Tracked by `catalog_click`? |
|-----------|-----------|-------------|-----------|------------------------|-----------------------------|
| `assets/catalog/Doceian-Doors-Models-Catalogue.pdf` | Doceian-Doors-Models-Catalogue.pdf | Homepage `#catalogs` band only | "Models catalog" | Yes — hyphenated, brand-prefixed, descriptive | Yes (homepage only) |
| `assets/catalog/Doceian-Doors-Technical-Drawing-Catalogue.pdf` | Doceian-Doors-Technical-Drawing-Catalogue.pdf | Homepage `#catalogs` band only | "Technical catalog" | Yes — hyphenated, brand-prefixed, descriptive | Yes (homepage only) |

**Key observations:**
- Both PDFs are linked **only** from the homepage catalog band (`index.html`, `#catalogs`). No other page links directly to a PDF.
- Both links open in a new tab (`target="_blank" rel="noopener"`) and are "view/open in browser" links (browser default for PDFs), not forced downloads.
- Filenames use British "Catalogue" spelling. Acceptable and descriptive; **not recommended to rename** (would break the two working homepage links for no real SEO gain).
- The homepage hero stat "PDF — Catalogs ready" is vague and does not link anywhere.

## Current Catalog CTAs

### Homepage (`index.html`)
- **Catalog band** (`#catalogs`): "Download the Doceian Doors catalogs for quoting, planning, and specification." → two PDF buttons ("Models catalog", "Technical catalog").
  - Strength: real PDF links, tracked by GA4, clear split between models vs technical.
  - Weakness: heading says "Download" but links open/view in a new tab rather than force-download; wording could name the audience.
  - Recommended: keep both PDF buttons; align verb ("View" or "Download") with actual behavior; optionally add a short line naming who the catalogs serve.
- **Nav** "Catalogs" → `#catalogs` (same-page anchor). Fine on homepage.

### Interior Doors hub (`interior-doors/index.html`)
- Closing CTA: "Request catalog information or discuss wholesale and project needs…" → "Contact Doceian Doors" (`/contact`).
  - Strength: clear inquiry path.
  - Weakness: mentions catalog but offers **no direct catalog link** — buyer must go back to the homepage catalog band.
  - Recommended: add direct PDF link(s) alongside the contact CTA so hub visitors can reach the catalog without returning home.
- **Nav** "Catalogs" → `/#catalogs` (bounces to homepage anchor).

### Molded / Shaker / Primed product pages
All three share the same closing pattern:
- Buyer-guidance CTA: "Discuss [molded/shaker/primed] door inquiries" → `/contact`.
- Final section text: **"Download the Doceian Doors catalog for full specifications and model numbers."** → buttons "Request catalog or inquiry" (`/contact`) and "View all door lines" (`/interior-doors`).
  - Strength: consistent, routes to contact and back to hub.
  - **Weakness (primary finding):** the copy explicitly says "Download the … catalog for full specifications" but **no button links to a PDF** — the "Request catalog or inquiry" button goes to `/contact`. This is a copy/behavior mismatch and a missed `catalog_click` tracking opportunity on 4 pages (hub + 3 products).
  - Recommended: either (a) add a real PDF link on these pages, or (b) soften the "Download the catalog" wording to match the contact-routing behavior. Option (a) is preferred if catalogs should be broadly accessible.
- **Nav** "Catalogs" → `/#catalogs` (bounces to homepage anchor).

### Contact page (`contact/index.html`)
- No catalog links (correct for a contact page). References "catalog request" as an inquiry type in the new Phase 4B-4 guidance.
  - Strength: reinforces catalog as a valid inquiry reason.
  - Weakness: none critical.

## Current Product Presentation Flow

Buyer journey:

```
Homepage → Interior Doors hub → Product page → Catalog / Contact
```

- **Clear steps:**
  - Homepage → hub: "View door lines" / nav "Doors" → `/interior-doors`.
  - Hub → product page: "View molded/shaker/primed doors →" cards.
  - Product page → contact: "Discuss … door inquiries" + "Request catalog or inquiry".
  - Product ↔ product cross-links (shaker ↔ primed) exist and work.
- **Missing / weak steps:**
  - **Catalog access dead-ends off the homepage.** Only the homepage exposes the PDFs. Hub and product pages talk about the catalog but link to `/contact`. A buyer deep on a product page cannot open the catalog without navigating back to the homepage `#catalogs` anchor.
  - **"Download the catalog" copy on product pages has no matching download link** (see above).
  - Homepage hero stat "PDF — Catalogs ready" is decorative, not actionable.
- **Confusing CTAs:**
  - "Request catalog or inquiry" (product pages) sounds like it might fetch the catalog but goes to the contact form. Wording vs destination mismatch.
- **Opportunities:**
  - Provide consistent, direct catalog access on the hub and product pages.
  - Standardize a "View catalog / Discuss wholesale inquiry" CTA pair across product/hub pages.
  - Optionally make the homepage hero catalog stat link to `#catalogs`.

## GA4 Tracking Check

From `main.js`:

- **`catalog_click`** fires on **any** `a[href$=".pdf"]` link (delegated at load via `querySelectorAll`). Params: `link_url`, `link_text`, `page_path`.
  - Because only the homepage currently has PDF links, `catalog_click` can only fire on the homepage today.
  - **Good news:** the selector is generic. If Phase 5B adds PDF links to the hub or product pages, `catalog_click` will track them automatically — **no JS change required**.
- **`contact_cta_click`** fires on `a[href="/contact"]` and `a[href="#contact"]`. Covers all current product/hub/contact CTAs.
- **`email_click`** (`mailto:`) and **`phone_click`** (`tel:`) are tracked site-wide.
- **`contact_form_submit`** fires on form submit/click (Formspree path), sending only `page_path` (no PII).

**Recommended tracking notes for Phase 5B:**
- No new event code is needed if catalog links are standard `<a href="....pdf">` — existing `catalog_click` will cover them.
- If catalogs are later split per collection (molded/shaker/technical), the existing `link_url` + `link_text` params already distinguish them; no schema change required.
- Only revisit `main.js` if catalog links become non-anchor elements (buttons/JS) or use query strings that hide the `.pdf` suffix.

## Recommended Phase 5B Implementation

A small, low-risk content/link PR (no new assets, no design-system change):

1. **Add direct catalog links to the hub and product pages** using the two existing PDFs, so catalog access no longer dead-ends on the homepage. This also activates `catalog_click` tracking on those pages automatically.
2. **Fix the product-page copy/behavior mismatch:** either add a real PDF button next to "Request catalog or inquiry", or reword to match the contact-routing behavior. (Preferred: add the PDF link.)
3. **Standardize a CTA pattern** across product/hub pages, e.g. "View catalog (PDF)" + "Discuss wholesale or project needs".
4. **Align the homepage catalog verb** with actual behavior (open in new tab vs download).
5. **Optional:** make the homepage hero "PDF — Catalogs ready" stat link to `#catalogs`.
6. Reuse existing `.button`, `.actions`, `.catalog-band`, and `.catalog-copy` classes. Avoid new assets and unsupported claims.

## Risks / Do Not Do

Do not:
- Invent new catalogs or catalog content that does not exist.
- Rename the existing PDF files without updating every link that points to them.
- Add unsupported certifications, specs, prices, lead times, or product data.
- Add fake per-collection catalogs if only the two combined PDFs exist.
- Break GA4 event tracking (keep catalog links as `.pdf` anchors so `catalog_click` keeps working).
- Break Formspree or the contact form block.
- Change the design system unnecessarily.

## Open Questions

Owner confirmation needed before Phase 5B:
1. Which PDF is the **primary** catalog for buyers — Models, Technical, or both presented equally?
2. Should catalog links **open in a new tab (view)** or **force download**? (Current homepage behavior is open-in-new-tab.)
3. Should the "Download the catalog" wording on product pages get a **real PDF link**, or be **reworded** to match its current contact-routing behavior?
4. Should we add **separate catalog cards** for molded, shaker, and primed — or is a single shared Models catalog sufficient (no per-collection PDFs exist today)?
5. Are there **additional catalog PDFs** available (e.g., per-collection spec sheets) that should be added, or only the two existing files?
6. Should the homepage hero "PDF — Catalogs ready" stat become a clickable link to the catalog band?
