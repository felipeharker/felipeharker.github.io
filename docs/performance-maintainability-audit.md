# Performance, Efficiency, and Maintainability Audit

Date: 2026-04-16

## Scope

This audit reviewed the current Jekyll implementation and key production pages:

- Layout and navigation (`_layouts/default.html`, `_includes/nav.html`).
- Data-driven homepage and navigation (`index.html`, `_data/projects.yml`, `_data/navigation.yml`).
- Core content pages (`about.html`, `resources.html`, `project-*.html`).
- Main stylesheet (`styles/styles-main.css`).

---

## Executive Summary

The migration to Jekyll is working and already improves maintainability in two important ways:

1. The homepage project cards are generated from data (`_data/projects.yml`) instead of hardcoded blocks.
2. The navigation is generated from data (`_data/navigation.yml`) in a shared include.

However, the site still carries most legacy static-page patterns. The largest remaining opportunities are:

- **Performance:** very heavy image/PDF payloads.
- **Maintainability:** repeated markup across project pages.
- **Accessibility and quality:** missing `alt` text, duplicate `id` values, and some invalid/fragile CSS patterns.

---

## Measured Baseline (Repository Asset Profile)

Quick local inventory of media and content sizes:

- PNG files: **93 files / ~112.74 MB**.
- PDF files: **23 files / ~273.56 MB**.
- Total tracked media in audited extensions: **~386.45 MB**.

Largest individual files include:

- `assets/projects/Collingsworth-Market/Collingsworth-Site.pdf` (~54.55 MB)
- `assets/projects/Project-Boards/portfolio-boards/Collingsworth Marketplace.pdf` (~36.35 MB)
- `assets/projects/Professional-Work/Harker_Work Sample_7001 Burnet.pdf` (~35.81 MB)
- `assets/projects/Living-Outside-the-Box/LoTB-General.pdf` (~30.36 MB)

This strongly suggests network transfer and first-load performance are currently constrained primarily by media weight.

---

## Findings and Recommendations

## 1) Performance: Media Delivery Is the Biggest Bottleneck

### Findings

- Project pages embed many full-size PNGs (often multi-megabyte each).
- PDFs are linked directly and several are very large (10–55 MB range).
- Current `<img>` tags generally do not use lazy loading, decoding hints, responsive sources, or explicit dimensions.

### Recommendations (High impact)

1. **Generate responsive images** (e.g., 480/960/1440 widths) and switch to `<picture>` + WebP/AVIF fallbacks where possible.
2. Add image attributes globally:
   - `loading="lazy"`
   - `decoding="async"`
   - explicit `width` / `height` to reduce layout shift.
3. **Compress/re-export PDF assets** into web and print variants.
4. Consider moving oversized downloadable files to release storage/CDN and keep the site repo optimized for page assets.

---

## 2) Maintainability: Project Pages Are Highly Repetitive

### Findings

- Project pages (`project-cmp.html`, `project-dmf.html`, `project-lotb.html`, `project-alex.html`) repeat the same section-row-column-card markup patterns many times.
- Content structure is similar enough to be represented as data and rendered through shared includes.

### Recommendations (High impact)

1. Introduce a **single reusable include** for project content blocks (e.g., `project-section.html` with title, image, sidebar heading/body).
2. Move project metadata/content to `_data` or collections (`_projects`) and render from templates.
3. Keep page-level front matter minimal (`title`, `slug`, `hero`, `sections`) and centralize HTML structure in one place.

Expected result: easier edits, lower risk of inconsistent markup, faster future updates.

---

## 3) Accessibility and Semantics Need a Pass

### Findings

- Many `<img>` tags have no `alt` attributes on project pages.
- Repeated IDs (`id="c-b1"`, `id="c-b2"`) are used multiple times per page, which violates unique-ID requirements.

### Recommendations (High impact)

1. Add meaningful `alt` text for informative images; use empty alt (`alt=""`) for decorative ones.
2. Replace repeated IDs with reusable classes (e.g., `.content-primary`, `.content-secondary`).
3. Add a linting check for basic HTML validity/accessibility in CI.

---

## 4) CSS Architecture Can Be Simplified

### Findings

- Styles are maintained in one large legacy-style file with mixed concerns.
- Some CSS is either invalid or fragile (for example, `width: relative;` under `details`).
- Styling depends partly on IDs that are reused repeatedly across pages.

### Recommendations (Medium impact)

1. Split CSS into sections or partials by concern (base, layout, components, utilities).
2. Replace ID-driven layout hooks with classes.
3. Normalize spacing and typography with a small utility token layer.
4. Add a formatter/linter (Stylelint + Prettier) and enforce in CI.

---

## 5) Jekyll Structure: Strong Foundation, More to Consolidate

### Findings

- `index.html` and nav already use `_data` successfully.
- Several legacy template and archive folders remain in repo (excluded from build, but still maintenance overhead).

### Recommendations (Medium impact)

1. Keep excluded legacy files if needed for history, but move them into a clearly labeled `legacy/` or separate branch/archive.
2. Add a short architecture guide in `README.md` documenting:
   - where content lives,
   - how to add a project,
   - image and PDF size targets.
3. Add a simple build check workflow (`jekyll build`) in CI.

---

## Prioritized 30-Day Improvement Plan

## Phase 1 (Immediate, 1–3 days)

- Add `alt` text coverage for all live pages.
- Replace duplicate IDs with classes.
- Add `loading="lazy"` and `decoding="async"` to non-hero images.

## Phase 2 (Short term, 3–7 days)

- Create reusable project section include.
- Refactor one project page end-to-end as a pilot.
- Introduce stylelint/prettier config.

## Phase 3 (1–2 weeks)

- Convert all project pages to data-driven/collection-based rendering.
- Produce responsive image variants and update templates.
- Define media budget policy (e.g., hero <= 400KB, inline images <= 250KB where possible).

## Phase 4 (Ongoing)

- Add CI checks: `jekyll build`, linting, and optional HTML/a11y checks.
- Recompress/archive historical PDFs not required for in-page viewing.

---

## Suggested KPI Targets

- Reduce median project page total transfer by **50%+**.
- Ensure **100%** `<img>` tags have appropriate `alt`.
- Remove duplicate IDs entirely from live templates/pages.
- Reduce template duplication by moving repeated blocks into reusable include(s).

