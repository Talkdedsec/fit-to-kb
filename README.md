![Fit to KB — Small files. Less friction.](docs/assets/banner.png)

# Fit to KB

**Make your photos fit a file-size limit, right in your browser.**

[Open the app](https://talkdedsec.github.io/fit-to-kb/) · **English** · [Türkçe](README.tr.md)

Fit to KB is a free image compression tool in English and Turkish. No account, upload API, analytics or API key is required. Photos are processed on your device.

## Features

- Compress to a target size: 200 KB, 500 KB, 1 MB, or a custom limit.
- Process up to 20 photos together and download results individually or as a ZIP.
- Compare before/after previews, file sizes and output dimensions.
- Set optional maximum width and height while preserving aspect ratio.
- Read and export JPEG, PNG and WebP.
- Switch between English and Turkish, and light and dark themes.
- Use the responsive interface on desktop or mobile.

## How to use

1. Drop your photos onto the page or choose files.
2. Set the target KB limit, optional dimensions and output format.
3. Click **Compress photos**, review the results and download.

The app opens in your browser's language. Use **TR** or **EN** to switch; an explicit choice is remembered on that device.

## Local development

Requires Node.js 22.13 or later.

```sh
npm ci
npm run dev
```

## Deploy

Push to `main`, then select **GitHub Actions** in repository Settings → Pages. The included workflow runs the checks and publishes the app. `npm run build` writes the static site to `dist/`; relative asset paths support repository subpaths. `npm run preview` serves the build locally.

## Checks

```sh
npm run typecheck
npm run lint
npm test
```

Tests cover compression decisions using a simulated encoder and static asset paths. They do not replace testing real images in a browser.

## Behavior and limits

- Up to 20 files, 30 MB per file; targets from 1 to 50,000 KB. 1 KB = 1,000 bytes.
- Output is checked against the target before download. JPEG/WebP quality is adjusted first, then resolution is reduced if needed. PNG uses resolution reduction. Impossible targets report an error.
- Aspect ratio is preserved; images are never upscaled. The working canvas is capped at 16 megapixels. Input decoding still depends on device memory.
- JPEG fills transparent pixels with white. PNG and WebP preserve transparency.
- Requires a modern browser with Canvas and `createImageBitmap`. HEIC, SVG, GIF and PDF are not supported. Animated WebP becomes a still image.
- Re-encoding removes original metadata; a smaller already compliant original may be reused with its metadata.
- Files stay in browser memory until removed or the tab closes. Changed settings require another compression run.
