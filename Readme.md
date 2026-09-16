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

## Waitlist submissions

The form posts to **Netlify Forms** — no backend required. Submissions appear under
**Netlify → Forms → `waitlist`**, and can be exported as CSV or piped to a webhook.

Fields captured:

| Field | Purpose |
| --- | --- |
| `email` | required; the signup itself |
| `breed` | optional; beta cohort selection |
| `size` | **required**; Small / Medium / Large / Not sure — first-run sizing mix |

The dog fields sit **above** the submit button on purpose. Anything placed below the
call to action is never seen by people who simply sign up, so moving them down would
quietly cost almost all of the breed and size data.

Netlify detects the form by parsing the deployed HTML, so the `data-netlify="true"`
attribute, the hidden `form-name` input and the `bot-field` honeypot must all stay on
the form. Renaming the form means re-pointing the hidden `form-name` value too.

Submissions only work on Netlify. Posting from a local preview will fail — that is
expected, not a bug.

## Before launch

- Remove the `noindex` meta tag from `index.html` so search engines can index the site.
- Set up a notification for new submissions (Netlify → Forms → Settings) so signups
  do not sit unread.

## Claims discipline

Anything published must map to a capability confirmed in writing by the hardware
supplier. See `CLAUDE.md` for the confirmed capability list. The v1 archive was
revised once to remove claims (heart rate, sleep quality, autonomous hazard
detection) the platform does not support — do not reintroduce them.
