# PyyWill.github.io

Personal academic homepage of Yiyuan Pan: https://pyywill.github.io

A plain static site with no build step. Layout adapted from [Perry Dong's homepage](https://pd-perry.github.io); the doodles are hand-drawn by me.

## Files

- `index.html`: all content (bio, links, education, publications) and a small inline reveal-on-scroll script
- `misc/index.html`: the misc page (paintings), linked from under the homepage photo; its inline script also runs the full-size painting viewer
- `style.css`: styles for both pages
- `assets/`: profile photo, favicon, resume (`Yiyuan_Pan_CV.pdf`, linked as Resume), hand-drawn doodles (`assets/doodles/`), paintings as WebP at 840 and 1640 px wide (`assets/paintings/`), and experience logos (`assets/logos/`)

## Local preview

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Deployment

Every push to `main` runs `.github/workflows/static.yml`, which publishes the repository to GitHub Pages.
