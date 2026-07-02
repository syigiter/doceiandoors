# Doceian Doors Measurement and Monitoring Plan

## Purpose

This document defines the 7–14 day measurement period after the main website improvement cycle.

The goal is to observe real user behavior before making more changes.

## Current Site Status

The following are live in production:

- SEO metadata (titles, descriptions, canonical, Open Graph, Twitter Card)
- Structured data (JSON-LD: Organization, WebSite, WebPage, CollectionPage, ContactPage, BreadcrumbList)
- GA4 base tracking (Measurement ID G-R6RFJJQ7WE)
- GA4 business event tracking
- Working Formspree contact form
- Safari-safe submit behavior
- Catalog PDF links on the Interior Doors hub and all three product pages
- Optional structured lead form fields
- U.S. trade-buyer content improvements

## Confirmed Live Form Test

Manual production test of the contact form after Phase 6B:

- Safari security warning: none
- Invalid address warning: none
- Redirect: none
- Success message: appears
- Formspree submission: appears
- Optional fields: appear in Formspree
- Gmail notification: arrived, with slight delay

## GA4 Events to Monitor

Track these events:

- `page_view`
- `contact_cta_click`
- `contact_form_submit`
- `catalog_click`
- `email_click`
- `phone_click`

For `contact_form_submit`, monitor privacy-safe enum parameters:

- `buyer_type`
- `product_interest`
- `inquiry_type`

Do not expect or send:

- name
- email
- phone
- message
- free-text personal data

## GA4 Monitoring Checklist

Over the next 7–14 days, review:

- Which pages receive traffic
- Which product pages receive traffic
- Which CTAs are clicked
- Which catalog PDFs are clicked
- Whether `contact_form_submit` fires
- Which `buyer_type` values appear
- Which `product_interest` values appear
- Which `inquiry_type` values appear
- Whether users reach the contact page but do not submit

## Google Search Console Checklist

Over the next 7–14 days, review:

- Indexed pages
- Sitemap status
- Search impressions
- Search clicks
- Queries
- Countries
- Pages with impressions but low clicks
- Pages with zero impressions
- Crawl or indexing issues
- URL Inspection for important pages

Important pages:

- https://doceiandoors.com/
- https://doceiandoors.com/interior-doors
- https://doceiandoors.com/interior-doors/molded-doors
- https://doceiandoors.com/interior-doors/shaker-doors
- https://doceiandoors.com/interior-doors/primed-doors
- https://doceiandoors.com/contact

## Formspree Lead Quality Checklist

For each submission, record:

- Buyer type
- Product interest
- Inquiry type
- Phone provided: yes/no
- Message quality
- Country/market context if provided
- Whether it looks like a real trade lead
- Whether follow-up is needed
- Whether the form fields helped triage the lead

## Catalog Performance Checklist

Review:

- Models catalog clicks
- Technical drawings catalog clicks
- Which pages generate catalog clicks
- Whether catalog clicks lead to contact submissions
- Whether PDF naming and placement are clear

## Decision Rules After 7–14 Days

Do not make new content/code changes until enough data is reviewed.

Possible next actions:

1. If catalog clicks are high but form submissions are low:
   - Improve catalog-to-contact CTA
   - Add clearer inquiry prompts near catalog sections

2. If contact page visits are high but submissions are low:
   - Review form length
   - Check mobile layout
   - Simplify optional fields if needed

3. If product pages have low traffic:
   - Improve internal links
   - Add more product-specific content
   - Consider dedicated landing pages later

4. If GSC impressions are low:
   - Wait longer if indexing is recent
   - Check sitemap and URL Inspection
   - Improve page copy only after data is available

5. If GSC impressions exist but clicks are low:
   - Improve title/meta descriptions
   - Review search intent

6. If submissions are low-quality:
   - Adjust field options
   - Improve Contact page guidance
   - Consider qualification text

## Do Not Do During Measurement Period

Do not:

- Keep changing copy every day
- Add unsupported claims
- Add fake specs
- Add pricing or lead times without confirmation
- Send personal data to GA4
- Break the Formspree flow
- Add CRM complexity too early
- Rename PDFs
- Change URLs without a reason

## Recommended Review Cadence

Day 1:
- Confirm GA4 events
- Confirm GSC sitemap status
- Confirm Formspree notifications

Day 3–5:
- Review early traffic and events
- Check if `contact_form_submit` and `catalog_click` are firing

Day 7:
- First meaningful review
- Identify obvious issues only

Day 14:
- Main review
- Decide whether to start the next improvement phase

## Next Possible Phase

After measurement:

- Phase 7B: GA4/GSC results review
- Phase 7C: Content/CTA adjustments based on data
- Phase 8: New product or landing page expansion, only if data supports it
