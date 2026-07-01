# Doceian Doors Measurement Setup

## Purpose

This document tracks measurement and analytics setup for the Doceian Doors static website.

The goal is to establish baseline visibility before major SEO, content, and lead-generation changes.

## Current Live URLs

- https://doceiandoors.com/
- https://doceiandoors.com/robots.txt
- https://doceiandoors.com/sitemap.xml

## Phase 2A — Google Search Console

Status: In progress

Recommended setup:

- Use a Domain property for:
  doceiandoors.com

Reason:

- Covers root domain and www.
- Covers HTTP and HTTPS variants.
- Does not require adding verification code to the static site.

Required action outside the repository:

- Add the Google Search Console DNS TXT verification record at the DNS provider.
- Verify ownership in Google Search Console.
- Submit sitemap:
  https://doceiandoors.com/sitemap.xml

Do not commit DNS TXT values into the repository.

## Phase 2B — Google Analytics 4

Status: Planned

Required before implementation:

- GA4 Measurement ID, usually in the format:
  G-XXXXXXXXXX

Implementation notes:

- Add GA4 only after the approved Measurement ID is provided.
- Add the script manually to the static HTML pages.
- Do not invent or placeholder a production GA4 ID.
- Review privacy/cookie requirements before adding tracking.

## Phase 2C — Business Event Tracking

Status: Planned

Important events to track:

- Contact form submit
- Catalog PDF clicks
- Contact CTA clicks
- Request quote clicks
- Email clicks
- Phone clicks, if phone links are present

Implementation notes:

- Event tracking should be added only after GA4 is installed.
- Existing form behavior must not be broken.
- Existing links must continue to work normally.

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
