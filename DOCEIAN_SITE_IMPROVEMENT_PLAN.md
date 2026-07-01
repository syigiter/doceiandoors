# Doceian Doors Static Site Improvement Plan

## Current Status

Doceian Doors is a static HTML/CSS/JS website deployed on Vercel.

There is no build system, no framework, and no package.json. The site is maintained as a simple static website.

Current main sections include:

- Homepage
- Contact page
- Interior Doors page
- Molded Doors page
- Shaker Doors page
- Primed Doors page
- Sitemap and robots files

## Goal

Improve the site in small, safe, reviewable phases without changing the static architecture.

The main business goal is to make the website stronger for the US interior door market, especially for distributors, builders, wholesalers, millwork suppliers, and project buyers.

Before major SEO and content changes, establish baseline measurement so traffic, search visibility, catalog interest, and lead generation can be tracked over time.

## Phase 1 — Maintenance and Documentation Cleanup

Status: Completed

Scope:

- Update README.md to reflect the current implementation.
- Fix outdated contact form notes.
- Update robots.txt sitemap URL to the full production URL.
- Review .gitignore for local/private/generated files.
- Keep the current design and site behavior unchanged.

Expected files:

- README.md
- robots.txt
- .gitignore, only if needed
- DOCEIAN_SITE_IMPROVEMENT_PLAN.md

## Phase 2 — Measurement and Analytics Setup

Status: In progress

Note: Measurement setup should start with Google Search Console domain property verification and sitemap submission before adding GA4 or event tracking scripts.

Scope:

- Prepare the site for measurement before major SEO and content changes.
- Add Google Search Console verification when the verification method is provided.
- Add Google Analytics 4 only after the measurement ID is provided.
- Add basic event tracking for important business actions:
  - Contact form submit
  - Catalog PDF clicks
  - Request quote / contact CTA clicks
  - Email clicks
  - Phone clicks, if present
- Consider Vercel Analytics and Speed Insights if approved.
- Submit sitemap in Google Search Console after production deployment.
- Track baseline metrics before and after SEO/content changes.

Rules:

- Do not add analytics scripts without the actual approved IDs.
- Do not invent GA4, GSC, or Vercel IDs.
- Do not add cookie banners unless required by the chosen analytics setup and target compliance decision.
- Keep the static site architecture unchanged.

## Phase 3 — SEO Metadata and Sitemap Improvement

Status: Planned

Scope:

- Improve title and meta description tags.
- Add or verify canonical URLs.
- Add Open Graph metadata.
- Review heading hierarchy.
- Improve image alt text.
- Expand and verify sitemap entries.

## Phase 4 — US Market Content Strengthening

Status: Planned

Scope:

- Improve product page copy for the US interior door market.
- Position products for distributors, builders, wholesalers, and project buyers.
- Strengthen content for molded, shaker, and primed doors.
- Add clearer wholesale and project supply messaging.

## Phase 5 — Lead Form and CTA Improvement

Status: Planned

Scope:

- Improve contact form fields for B2B inquiries.
- Add stronger calls to action.
- Support wholesale pricing, catalog requests, sample requests, and distributor inquiries.
- Keep the existing form provider unless a later decision is made.

## Phase 6 — Catalog and Product Presentation

Status: Planned

Scope:

- Improve catalog section presentation.
- Make product categories easier to understand.
- Add clearer catalog download/view actions.
- Improve product-to-contact flow.

## Phase 7 — Trust Signals and Wholesale/Distributor Positioning

Status: Planned

Scope:

- Add manufacturer background.
- Add export and wholesale positioning.
- Add private label / OEM messaging if applicable.
- Add certification or compliance information only when verified.
- Add packaging, container, and project supply messaging if verified.

## Phase 8 — Technical QA Checklist

Status: Planned

Each phase should include basic checks:

- Local static preview works.
- Main pages are reachable.
- No broken local links.
- Mobile menu works.
- Contact form behavior is not broken.
- robots.txt and sitemap.xml are reachable.
- Git diff contains only intended changes.
- Working tree is clean after commit.

## Rules

- Do not add a build system.
- Do not add package.json unless explicitly approved.
- Do not introduce frameworks or dependencies.
- Keep changes small and reviewable.
- Do not deploy or merge without explicit approval.
