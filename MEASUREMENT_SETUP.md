# Doceian Doors Measurement Setup

## Purpose

This document tracks measurement and analytics setup for the Doceian Doors static website.

The goal is to establish baseline visibility before major SEO, content, and lead-generation changes.

## Current Live URLs

- https://doceiandoors.com/
- https://doceiandoors.com/robots.txt
- https://doceiandoors.com/sitemap.xml

## Phase 2A — Google Search Console

Status: Completed

Current state:

- Domain property already exists for doceiandoors.com
- Ownership verified via DNS TXT record

Next actions:

1. Confirm sitemap submission:
   - Verify https://doceiandoors.com/sitemap.xml is submitted in GSC
   - Check submission status and crawl coverage

2. Use URL Inspection for key pages:
   - https://doceiandoors.com/
   - https://doceiandoors.com/interior-doors
   - https://doceiandoors.com/interior-doors/molded-doors
   - https://doceiandoors.com/interior-doors/shaker-doors
   - https://doceiandoors.com/interior-doors/primed-doors
   - https://doceiandoors.com/contact

3. Record baseline data:
   - Wait for Search Console to populate with data (1-2 weeks after sitemap submission)
   - Document baseline metrics for impressions, clicks, and position
   - This baseline will be compared after SEO and content changes

Do not commit DNS TXT values into the repository.

## Phase 2B — Google Analytics 4

Status: Installed

Approved Measurement ID:

```
G-R6RFJJQ7WE
```

Implementation:

- GA4 base pageview tracking script installed via Google tag (gtag.js)
- Script added to all public HTML pages in <head> section
- Only base pageview tracking is enabled; no custom events yet

Pages instrumented:

- index.html
- contact/index.html
- interior-doors/index.html
- interior-doors/molded-doors/index.html
- interior-doors/shaker-doors/index.html
- interior-doors/primed-doors/index.html

Next steps:

- Verify tracking data appears in GA4 dashboard within 24 hours
- Wait for baseline data collection period (2-4 weeks recommended)
- Document baseline before proceeding to Phase 2C

## Phase 2C — Business Event Tracking

Status: Installed

Events implemented:

- `contact_form_submit` — Contact form submission (page_path)
- `catalog_click` — PDF/catalog link clicks (link_url, link_text, page_path)
- `contact_cta_click` — Contact CTA link clicks to /contact or #contact (link_url, link_text, page_path)
- `email_click` — mailto: link clicks (link_url, link_text, page_path)
- `phone_click` — tel: link clicks (link_url, link_text, page_path)

Implementation notes:

- Events use the existing GA4 gtag function; fails silently if unavailable
- No personal data (name, email, phone, message) is sent in event parameters
- Existing form behavior and link navigation remain unchanged
- All link tracking is non-blocking and does not delay navigation

## Phase 2D — Vercel Analytics and Speed Insights

Status: Planned

Decision needed:

- Confirm whether Vercel Analytics should be enabled.
- Confirm whether Speed Insights should be enabled.
- Do not add Vercel scripts or packages unless explicitly approved.

## Baseline Metrics to Track

After Search Console and GA4 are active, track these monthly:

- Organic clicks
- Organic impressions
- Average search position
- Indexed pages
- Top search queries
- Top landing pages
- Country breakdown
- Device breakdown
- Contact form submissions
- Catalog PDF clicks
- Main CTA clicks

## Rules

- Do not commit analytics IDs unless approved.
- Do not commit Search Console DNS TXT records.
- Do not add scripts without actual verified IDs.
- Do not change the static architecture.
- Keep measurement changes small and reviewable.
