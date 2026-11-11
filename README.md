# BODYNESS Massage

Static Polish boutique massage studio website built with React, TypeScript, Vite, Tailwind CSS, Motion, Lucide and Yet Another React Lightbox. No backend or booking integration.

## Run

Requires Node.js 22.12+ (or a current supported Node release).

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Upload the contents of `dist/` to any static host. Relative Vite asset paths support subdirectory deployment. The build includes a strict TypeScript check.

For the included browser verification, run the preview on port 4173, then `node scripts/verify-browser.mjs`. It uses locally installed Microsoft Edge through Playwright and saves screenshots to `artifacts/`.

## Edit content

- `src/data/services.ts`: categories, service descriptions, durations and example prices. Confirm the real offer before publishing; replace the example price notice once verified.
- `src/data/contact.ts`: edit `phoneDisplay` (Polish number) and `email` here to update contact details throughout the site. Telephone and email links are derived automatically. Instagram and Facebook URLs are read from `social.txt`. Contact details embedded in voucher PDFs and images must be updated separately.
- `src/data/content.ts`: About introduction and qualifications text. Personalize the marked example biography and remove its placeholder note when approved.
- `src/data/images.ts`: selected local photographs and their ordering. Use exact filenames from `photos/`.
- `photos/certificates/`: add JPG, JPEG, PNG or WebP files and rebuild. Certificates are discovered automatically and sorted by filename. All five supplied certificates are included.
- `src/styles/globals.css`: colors, typography and responsive layouts.

Original photography is preserved. `src/assets/photos/` contains optimized WebP variants at 640, 1280 and 1920px. After adding or replacing a selected photograph, run `npm run images` and `npm run build`. `asset-inventory.json` records filenames and original dimensions, including certificates. Missing optimized photographs produce a clear error asking you to regenerate them.

## Before launch

Confirm prices and service availability, personalize the About text, enter the real telephone number, and verify permission to publish all supplied photographs and certificate documents. No business address, opening hours, therapist credentials or personal biography have been invented.

The header includes section tracking and an accessible mobile menu. The certificate lightbox supports Escape, arrow keys, swipe, zoom, scroll locking and focus restoration. Animations respect reduced motion settings. Google Fonts requires an internet connection; system font fallbacks are included.
