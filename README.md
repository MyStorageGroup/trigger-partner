# Trigger Partner Landing Page

MyStorage Vietnam — Trigger Partner Program landing page.

## Files

- `index.html` — English version
- `vi.html` — Vietnamese version
- `assets/` — Logos, images, favicon
- `screenshot.mjs` — Full-page PNG export (Puppeteer)

## Local Development

```bash
npx serve . --listen 3000
```

- English: http://localhost:3000
- Vietnamese: http://localhost:3000/vi.html

## Export Preview

```bash
node screenshot.mjs
```

Outputs `Trigger-Partner-Preview.png` and `Trigger-Partner-Preview-VI.png`.
