# Rora — pre-launch site

The live site is a deliberately minimal pre-launch page: wordmark, tagline,
one line of description, and an email capture. Nothing about features,
specifications, pricing or roadmap is published.

> **Let them roam. Keep them close.**

## Live

- Production: https://roracollar.io
- Deploys automatically from `claude/project-setup-ideas-4rywe9` via GitHub Actions.

## Stack

Static HTML with Tailwind CSS compiled locally to `styles.css`, plus a small
amount of vanilla JS for email validation. No framework, no runtime dependencies.

```bash
npm install        # first time only
npm run build:css  # rebuild styles.css after changing classes in index.html
npm run watch:css  # rebuild on change

python3 -m http.server 8099   # preview at http://localhost:8099
```

## What gets published

The deploy workflow copies only these into `_site/` and publishes that:

```
index.html   styles.css   robots.txt   CNAME   .nojekyll
```

Anything else in the repo — including `archive/` — stays unpublished. If you add
a file that should be publicly served, add it to the "Assemble site" step in
`.github/workflows/deploy-pages.yml`.

## Version history

`archive/v1-full-site.html` is the full marketing site (hero, activity, safety,
camera, Aura, design, specs, comparison table, deposit, FAQ). It is self-contained
— open it directly in a browser to view it, or restore it with:

```bash
cp archive/v1-full-site.html index.html && npm run build:css
```

It is kept for reference and is not served publicly.

## Before launch

- Remove the `noindex` meta tag from `index.html` so search engines can index the site.
- Connect the email form — see the `// TODO: connect to [email provider]` comment.

## Claims discipline

Anything published must map to a capability confirmed in writing by the hardware
supplier. See `CLAUDE.md` for the confirmed capability list. The v1 archive was
revised once to remove claims (heart rate, sleep quality, autonomous hazard
detection) the platform does not support — do not reintroduce them.
