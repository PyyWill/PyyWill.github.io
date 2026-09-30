# PyyWill.github.io

Personal academic homepage of Yiyuan Pan: https://pyywill.github.io

A plain static site with no build step. Layout adapted from [Perry Dong's homepage](https://pd-perry.github.io); the doodles are hand-drawn by me.

## Files

- `index.html`: all content (bio, links, education, publications) and a small inline reveal-on-scroll script
- `style.css`: styles
- `assets/`: profile photo, favicon, hand-drawn doodles (`assets/doodles/`), and experience logos (`assets/logos/`)

## Local preview

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Deployment

Every push to `main` runs `.github/workflows/static.yml`, which publishes the repository to GitHub Pages.
