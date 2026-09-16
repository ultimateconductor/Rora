# CLAUDE.md — Rora website

Context for coding agents working on this repo. This file covers the **website
only**. Hardware, supplier and commercial context lives in the founder's private
CLAUDE.md and is deliberately kept out of this repo while it is public.

## What this repo is

The public pre-launch page for Rora, a smart safety collar for dogs. It is a
deliberately minimal waitlist page: wordmark, headline, one line of description,
a collar illustration, and a signup form. Nothing about features, specifications,
pricing or roadmap is published.

The full v1 marketing site is archived at `archive/v1-full-site.html`. It is kept
for reference and is never served.

## Brand direction — LOCKED

**Cream ground with an ember accent.** Chosen deliberately over the earlier
near-black and aurora-gradient direction, and locked because social content is
being produced against it — changing it later means reshooting.

Tokens live in `tailwind.config.js`. Use them; do not introduce new colours.

| Token | Hex | Role |
| --- | --- | --- |
| `cream` | `#FDF6F1` | page ground |
| `ember` | `#D94A16` | wordmark, buttons, focus, errors |
| `ember-dark` | `#BE3F12` | button hover |
| `charcoal` | `#1A1411` | headlines and input text |
| `muted` | `#7D6F68` | body copy |
| `line` | `#E8D5CB` | borders |
| `faint` | `#B0A099` | placeholders, footer, labels |

The archived v1 is still in the old near-black palette. That is expected — it is
a frozen snapshot, not a live surface.

## Copy that is settled

- Headline: **"Let them roam. Keep them close."** Leave it alone.
- Subhead names the AI, so the page matches the ads that bring people to it:
  "A smart safety collar for dogs, learning to spot what's off. Arriving mid 2027."
- Fine print licenses ongoing contact: **"No spam. Occasional build updates."**
  Do not revert to promising a single email at launch — that is a promise of
  months of silence, and the list decays.
- Ship timing is **mid 2027**.

## Form rules

Field order is **email → breed → size → submit**. The dog fields must stay
**above** the call to action: anything below the CTA is never seen by someone who
simply signs up, which costs almost all of the breed and size data.

Size is required (`Not sure` keeps it to one tap). Breed is optional, because
typing is real friction. See the README for the Netlify Forms wiring.

## Claims discipline

Anything published must map to a capability confirmed **in writing** by the
hardware supplier. The platform provides location, on-demand video and audio,
step count and calories, and voice/vibration/static deterrents.

It does **not** provide heart rate, temperature, sleep tracking, or on-device
object detection. Claims of continuous vital signs, sleep quality, or autonomous
hazard detection were published once and removed — do not reintroduce them.

"Learning to spot what's off" is defensible because it describes an activity
baseline. Anything implying the collar detects danger by itself is not.

Intervention is described as **gentle first, always**: voice leads, stronger
options are off by default and user-enabled. Never claim the product cannot or
will not deliver static correction — it can, opt-in.

## Housekeeping

- `npm run build:css` after changing any class in `index.html`.
- Only `index.html`, `styles.css` and `robots.txt` are published; see
  `netlify.toml` and the README.
- The `noindex` meta tag in `index.html` must be removed at launch.
