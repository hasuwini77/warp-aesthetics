# Contributing to Warped Aesthetics

We love contributions! This project is all about community-driven terminal themes with a focus on "aesthetic" vibes like lo-fi, anime, and pastel palettes.

## How to add a theme

1.  **Fork the repo** and create a new branch.
2.  **Add your theme YAML** to the `themes/` directory. Use the `lofi-study.yaml` as a template.
3.  **Update `src/data/themes.ts`** to include your theme in the gallery.
4.  (Optional) If you use a background image, ensure it's optimized (ideally under 1MB) and either hosted or added to `public/images/themes/`.

## Theme Structure

A theme consists of:
- **Colors:** A 16-color palette (Base16 style).
- **Metadata:** Name, author, and description.
- **Background:** (Optional) An image path and opacity level (0-100).

## Optimization Tips

- Use high-quality images but keep them under 2MB.
- Ensure the background isn't too "strong" by setting a lower opacity (e.g., 40-60%) so the terminal text remains readable.
- Stick to "Aesthetic" palettes: think soft purples, pastels, and neon contrasts.

## Open Source Vision

This project is intended to be a free, community-driven resource for Warp terminal users. We are not looking to monetize, just to build the best collection of aesthetic themes!
