# Planet Drop Hero Background Placeholder

The repository does not currently contain a suitable wide Planet Drop gameplay background. The page therefore uses the existing site color system and a low-contrast ambient gradient until an official source image is provided.

Recommended replacement:

- File name: `planet-drop-hero-background.webp`
- Desktop size: 2400 × 1350 px (16:9)
- Minimum size: 1920 × 1080 px
- Keep important gameplay subjects inside the middle 60% of the image so the same source can crop safely on tablets and phones.
- Avoid placing text, store badges, or essential UI at the extreme edges.
- Export as WebP at roughly 250–450 KB when visual quality allows.

After adding the image, update `--pd-game-background` near the top of `planet-drop/planet-drop.css` from `none` to:

```css
url("../assets/planet-drop-hero-background.webp")
```

The existing overlay, cover sizing, responsive crop, parallax, Hero fade, and final-download echo will apply automatically.
