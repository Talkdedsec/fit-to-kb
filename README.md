# KB’ye Sığdır

Browser-only image compression. Turkish/English, light/dark themes, target KB, optional maximum dimensions, before/after preview, batch processing and ZIP downloads. No upload API, account, analytics or API key.

## Run
Node 22.13+: `npm ci`, then `npm run dev`.

## GitHub Pages
Push to `main` in a GitHub repository. Select **GitHub Actions** in Settings → Pages. The included workflow publishes the app. `npm run build:pages` produces `pages-dist` for static hosting; relative asset paths support repository subpaths.

## Sites
`npm run build` produces the Sites Worker build.

## Behavior and limits
- Up to 20 JPEG, PNG or WebP files; 30 MB per file.
- 1 KB = 1,000 bytes. Output is checked against the target before download.
- JPEG/WebP quality search is followed by resolution reduction when needed. PNG uses resolution reduction. Impossible targets report an error.
- Aspect ratio is preserved, no upscaling. Canvas is capped at 16 megapixels; input decoding still depends on device memory.
- JPEG turns transparent pixels white. PNG and WebP preserve transparency.
- Modern browser with Canvas and createImageBitmap required. HEIC, SVG, GIF and PDF are not supported. Animated WebP becomes a still image.
- Re-encoding removes original metadata; a smaller already compliant original may be reused.
- Files stay in browser memory until removed or the tab is closed. Settings changes require another compression run.
