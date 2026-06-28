# Doceian Doors

Static website for Doceian Doors, prepared for GitHub and Vercel hosting.

## Local preview

```sh
python3 -m http.server 4321
```

Open `http://127.0.0.1:4321/`.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Use the default Vercel settings for a static site.
4. Add `doceiandoors.com` and `www.doceiandoors.com` in Vercel Domains.

Current production deploy:

- `https://doceiandoors.vercel.app`
- GitHub: `https://github.com/syigiter/doceiandoors`

DNS records needed at the current DNS provider:

- `A doceiandoors.com 76.76.21.21`
- `A www.doceiandoors.com 76.76.21.21`

## Notes

- Original Doceian images and PDF catalogs were recovered from the Internet Archive.
- Contact form currently uses `mailto:info@doceiandoors.com`.
- For a production-grade form, connect Formspree, Resend, or a Vercel serverless function.
