# Doceian Doors Lead Form and Conversion Audit

## Purpose

This document prepares Phase 6 improvements for lead quality and conversion tracking.

The goal is to improve the quality of trade-buyer inquiries without hurting conversion, breaking Formspree, or sending personal data to GA4.

This is a Phase 6A planning document. No HTML/CSS/JS is changed in this phase.

## Current Contact Form

Current form details (`contact/index.html`):

- action: `https://formspree.io/f/xpqgldgr`
- method: `post`
- form id: `contactForm`
- submit button: `type="button"` `id="contactSubmitBtn"` (Safari-safe; click + submit handled in `main.js`)
- required fields:
  - `name` (autocomplete="name")
  - `email` (type="email", autocomplete="email")
  - `message` (textarea, 5 rows)
- current field count: 3 required fields

Assessment:
- The form is short and conversion-friendly.
- It is missing structured lead-quality data — everything beyond name/email lives in the free-text `message`.

## Current Lead Quality Gap

The current form cannot structurally distinguish:

- Buyer type: distributor, builder, contractor, wholesaler, millwork supplier, project buyer
- Inquiry type: catalog request, sample discussion, wholesale inquiry, project inquiry
- Product interest: molded, shaker, primed, multiple

Notes:
- The Contact page's "What to include in your inquiry" section (added in Phase 4B-4) asks users to include this context in the message.
- But Formspree submissions currently depend on free-text compliance — the data only exists if the buyer chooses to type it.
- This makes triage slower and less consistent, and prevents any structured segmentation of lead quality.

## Current Success and Failure Messaging

Current `main.js` form messaging:

- success: "Message sent! We'll be in touch soon."
- failure: "Something went wrong. Please email us directly."
- network: "Network error. Please try again."
- in-flight: "Sending…"

Assessment:
- Success message is acceptable and professional.
- It does not promise a response time (correct — no unverified SLA).
- It could optionally be made more trade-inquiry-specific later (e.g., acknowledging catalog/project inquiries), but this is not required.

## Current GA4 Events

Current privacy-safe events (`main.js`), none of which send personal data:

- `contact_form_submit` — sends `page_path` only
- `contact_cta_click` — fires on `a[href="/contact"]` and `a[href="#contact"]`
- `catalog_click` — fires on `a[href$=".pdf"]`
- `email_click` — fires on `mailto:` links
- `phone_click` — fires on `tel:` links

Notes:
- Current events do not send personal data.
- `catalog_click` fires on PDF links (active on homepage, hub, and all three product pages after Phase 5B).
- `contact_form_submit` currently sends `page_path` only.
- This is safe but does not segment lead quality.

## Recommended Phase 6B Scope

Recommend **Option C**: add optional fields while keeping the required path short.

Recommended optional fields:

1. **Buyer type**
   - Distributor
   - Builder
   - Contractor
   - Wholesaler
   - Millwork supplier
   - Project buyer
   - Other

2. **Product interest**
   - Molded interior doors
   - Shaker interior doors
   - Primed interior doors
   - Multiple collections
   - Not sure yet

3. **Inquiry type**
   - Catalog request
   - Sample discussion
   - Wholesale inquiry
   - Project inquiry
   - General product question

4. **Phone**
   - Optional only.

Also recommended:
- Keep `name`, `email`, and `message` required.
- Keep all new fields optional.
- Improve the message placeholder to prompt project/market context.
- Preserve Formspree action, method, form id, and submit button type.

Rationale: optional fields structure every lead for faster triage without lengthening the required path, so conversion is protected while lead quality improves.

## GA4 Recommendation for Phase 6B

Recommend privacy-safe tracking only.

If dropdowns are added, `contact_form_submit` may include only enum/category values:
- `buyer_type`
- `product_interest`
- `inquiry_type`

Do NOT send:
- name
- email
- phone
- company
- message text
- any free-text personal data

Explanation:
- Category enums (fixed dropdown values) are not personal data and can help measure lead quality in GA4.
- Personal data must never be sent to GA4.

## Implementation Risk Controls

Do not:
- Change the submit button back to `type="submit"`
- Break the Safari-safe Formspree flow (click + submit handlers in `main.js`)
- Change the Formspree endpoint
- Make optional fields required
- Add too many required fields
- Promise response times
- Send personal data to GA4
- Add CRM complexity
- Add dependencies or a build system

## Recommended Phase 6B Files

Likely files:
- `contact/index.html`
- `main.js` — only if privacy-safe category tracking is added
- `DOCEIAN_SITE_IMPROVEMENT_PLAN.md`

Avoid changing:
- `styles.css` unless `<select>` styling is visibly broken
- homepage
- product pages
- catalog PDFs
- `sitemap.xml`
- `robots.txt`
- `vercel.json`

## Final Recommendation

Proceed with a small Phase 6B implementation:
- Add 3 optional dropdowns (buyer type, product interest, inquiry type)
- Add optional phone field
- Improve message placeholder
- Optionally add privacy-safe GA4 enum parameters to `contact_form_submit`
- Preserve all existing Formspree / Safari-safe behavior
