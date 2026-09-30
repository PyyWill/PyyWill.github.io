# PyyWill.github.io

Personal academic homepage of Yiyuan Pan: https://pyywill.github.io

A plain static site with no build step. Layout adapted from [Perry Dong's homepage](https://pd-perry.github.io); the education and publication lists follow [Toru Lin's homepage](https://toruowo.github.io).

## Files

- `index.html`: all content (bio, links, education, publications)
- `style.css`: styles
- `assets/`: profile photo and favicon

## Local preview

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Deployment

Every push to `main` runs `.github/workflows/static.yml`, which publishes the repository to GitHub Pages.
