# felipeharker.github.io

Portfolio site for Felipe Harker, now structured as a Jekyll site.

## Project structure

- `_layouts/`: shared page layouts.
- `_includes/`: reusable page fragments (`nav.html`, `project-card.html`).
- `_data/`: site content data (`projects.yml`, `navigation.yml`).
- Root `*.html`: route-level pages using front matter and layout/includes.
- `styles/`: CSS.
- `assets/`: media, downloads, and project files.

## Add or edit projects on the homepage

1. Open `_data/projects.yml`.
2. Add or update one project entry:
   - `title`
   - `url`
   - `image`
   - `location`
   - `category`
   - `type`
   - `external` (optional, `true` for external links)
3. Save and rebuild/preview.

The homepage cards are generated from `_data/projects.yml` using `_includes/project-card.html`.

## Navigation updates

Edit `_data/navigation.yml` to add/remove/reorder nav links.

## Media guidelines

To keep the site fast and maintainable:

- Prefer WebP/AVIF for web images where possible.
- Keep cover/hero images under ~400 KB when practical.
- Keep inline content images under ~250 KB when practical.
- Add `alt` text for all informative images.
- Use `loading="lazy"` and `decoding="async"` for non-critical images.
- Keep downloadable PDFs compressed; provide smaller web variants when possible.

## Local check

This repo currently does not include a `Gemfile`, so standard local validation should include lightweight checks such as:

- `git diff --check`
- basic HTML/content sanity checks
