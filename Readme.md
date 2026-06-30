# Rora — Pre-order site

A single-page pre-order website for **Rora**, a smart safety collar for dogs.
GPS tracking, geofencing, health monitoring and live 4G — backed by **Aura**,
an AI layer that learns each dog's normal and flags when something's off.

> **Always knows. Always there.**

The design follows an Apple-product-page aesthetic: cinematic, calm, premium,
motion-driven, ruthlessly minimal. Black / near-white sections alternate, with a
single restrained aurora accent (teal → violet) reserved for the Aura and CTA moments.

## Stack

- **Static HTML** (`index.html`) — no framework, no runtime dependencies.
- **Tailwind CSS**, compiled locally to `styles.css` (no CDN at runtime).
- **Vanilla JS** for the frosted scroll nav, hero parallax, scroll-reveal
  animations, the FAQ accordion, and waitlist email validation.
- Inter via Google Fonts, with a system-font fallback.

## Run it

Just open `index.html` in a browser — `styles.css` is already committed.

For local dev with a server:

```bash
python3 -m http.server 8099
# then visit http://localhost:8099
```

## Editing styles

If you change Tailwind classes in `index.html`, rebuild the stylesheet:

```bash
npm install          # first time only
npm run build:css    # one-off build
npm run watch:css    # rebuild on change
```

## Sections

Sticky nav · Hero · Health · Safety/GPS · Aura intelligence · Design & materials ·
Tech specs · Comparison ("The difference") · Pre-order tiers · Waitlist · FAQ · Footer.

Placeholder product imagery is drawn as self-contained inline SVG (monochrome,
on-brand) and tagged "Placeholder" — search `index.html` for `TODO: replace`
to find each spot for real photography.

## Customizing

- Search `index.html` for `[FILL: ...]` placeholders (price, deposit, battery,
  weight, ship date, product imagery) and replace with real values/assets.
- Forms are front-end only. Look for the `// TODO: connect to ...` comment in the
  waitlist handler to wire up an email provider / Stripe.

## Accessibility & motion

Semantic HTML, keyboard-navigable accordion (native `<button>`s), `aria-live`
form status, and full `prefers-reduced-motion` support (reveals, parallax, and
the animated aurora all disable for users who opt out).
