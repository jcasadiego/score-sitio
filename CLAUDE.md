# SCORE · Score-nueva-web

## Project
Vanilla HTML/CSS/JS (React via CDN) landing for SCORE — music finance SaaS.
Two versions: `version-a/` (client mockup) and `version-b/` (conversion-optimized).
Assets in `assets/`, React vendor files in `vendor/`.

---

## Terminology & Language Standards

**Rule:** All code identifiers must be in English. UI copy/content stays in Spanish (the product's target language).

This rule applies to: CSS class names, JS variables/functions, state keys, props, HTML IDs, `name` attributes, `data-*` attribute values used as code keys, API endpoints, and environment variables.

---

## JavaScript

- Variables and functions: `camelCase` — `const formData`, `function handleSubmit`
- Constants / config: `UPPER_SNAKE_CASE` — `const API_URL`, `const MAX_RETRIES`
- State keys: `camelCase` English — `{ sent, err, fam, tab, step }` ✓ already applied
- Enum-style string values: lowercase English
  - Particle density: `'high'` / `'medium'` / `'low'` (not `'alta'` / `'media'` / `'baja'`)
  - Language toggles: `'en'` / `'es'` ✓ already correct
- Event handlers: `on` prefix — `onSubmit`, `onMenuToggle`
- Refs: descriptive English camelCase — `brainRef`, `filmRef` ✓

---

## CSS

- Class names: `kebab-case` English — `.btn-p`, `.hero-bg`, `.faq-b` ✓
- CSS custom properties: `--kebab-case` English — `--tx`, `--mu`, `--ln` ✓
- Animation keyframe names: English — `@keyframes rise`, `@keyframes floaty` ✓

---

## HTML

- Element IDs: `kebab-case` English — `id="root"` ✓
- Input `name` attributes: `camelCase` or `kebab-case` English — `name="email"`, `name="projectDescription"`
- `data-*` attributes: English keys and values when used programmatically
  - `data-fxk="rise"`, `data-t`, `data-dx` ✓ already correct

---

## API & Integrations

- **Always HTTPS** — never plain HTTP for any resource, endpoint, or external service
- Endpoint paths in English, RESTful conventions:
  - `POST https://api.score.com/v1/leads`
  - `GET https://api.score.com/v1/score/:id`
- Request/response body fields in English `camelCase`:
  ```json
  { "name": "...", "email": "...", "whatsapp": "...", "projectDescription": "..." }
  ```
- Authorization header: `Authorization: Bearer <token>`
- Environment variables: `UPPER_SNAKE_CASE` English
  - `VITE_API_URL`, `SUBMIT_ENDPOINT`, `API_KEY`

---

## External Resources

- Google Fonts: `https://fonts.googleapis.com` ✓
- CDN scripts: always `https://`
- Images/assets: served over HTTPS in production
- No mixed content allowed (HTTP resource on HTTPS page)

---

## Form Field Keys (current)

Both versions use these English keys internally — keep them:

| Field | Type | Validation |
|-------|------|-----------|
| `name` | string | min 3 chars |
| `email` | string | email regex |
| `wa` | string | min 8 digits |
| `project` | string | required |
| `links` | string | optional |
| `priv` | boolean | must be true |

---

## Pending Fixes

- [x] `'alta'` / `'media'` / `'baja'` → `'high'` / `'medium'` / `'low'` (density prop in both versions)
- [x] Security meta tags added to all 3 HTML files (`X-Content-Type-Options`, `Referrer-Policy`)
- [x] `vercel.json` created with full HTTP security headers (HSTS, CSP, X-Frame-Options, etc.)
- [x] `.gitignore` created to prevent committing `.env` files and secrets
- [ ] Wire form submit to real API endpoint (`POST /v1/leads`) with HTTPS
- [ ] Add `name` attributes to form inputs when moving to server-side
- [ ] Env var `SUBMIT_ENDPOINT` for the API URL — never hardcode
- [ ] Audit git history for secrets before first push: `git log --all -p -- "*.env" "*secret*" "*key*"`

---

## Security

### Audit result (2026-11-05)
Static HTML/JS site — no critical vulnerabilities found. All findings and fixes documented below.

### What was audited and passed

| Area | Result |
|---|---|
| Hardcoded secrets (API keys, tokens, passwords) | ✅ None found |
| External resources over HTTP | ✅ All use `https://` |
| XSS — `innerHTML`, `eval()`, `dangerouslySetInnerHTML` | ✅ None — React renders safely |
| URL/query param injection (`location.search`, `URLSearchParams`) | ✅ Not used |
| Open redirects (`location.href` with user input) | ✅ All links hardcoded |
| React version | ✅ 18.3.1 — current, production build |
| `console.log` with sensitive data | ✅ No logging of form data |
| Exposed config files (`.env`, `config.json`, etc.) | ✅ None present |
| Dangerous JS patterns (`postMessage`, `localStorage` with secrets) | ✅ Not used |
| Third-party scripts | ✅ React served from local `vendor/` — no external CDN |
| `iframe` / `embed` risks | ✅ None used |
| Media sources over HTTP | ✅ All local relative paths |

### Fixes applied

- **Security meta tags** added to all 3 HTML files:
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`

- **`vercel.json`** created with full HTTP security headers:
  - `Strict-Transport-Security` — HTTPS forced with 2-year max-age + preload
  - `X-Frame-Options: DENY` — blocks clickjacking
  - `X-Content-Type-Options: nosniff`
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` — disables geolocation, microphone, camera, payment, USB
  - `Content-Security-Policy` — restricts script/style/font/media sources
  - Automatic HTTP → HTTPS redirect rule

- **`.gitignore`** created — prevents accidental commits of `.env` files and secrets

### Pending security tasks (backend phase)

- [ ] **Form has no endpoint** — currently validates locally and shows a fake success screen. No data is saved. When wiring to backend:
  - Use `POST https://...` (never `http://`)
  - Put the URL in `VITE_SUBMIT_ENDPOINT` env var — never hardcode
  - Validate all fields server-side (don't trust client validation alone)
  - Return proper HTTP error codes (`400`, `422`, `500`)

- [ ] **Audit git history before first push** — run:
  ```bash
  git log --all -p -- "*.env" "*secret*" "*key*" "*password*"
  ```
  If anything sensitive is found, use BFG Repo-Cleaner to purge it before pushing.

- [ ] **CSP `unsafe-inline`** — currently required because styles are inline in the HTML. When migrating to Next.js, remove it and use nonces or hashes instead.

- [ ] **SRI hashes** — if React is ever loaded from a CDN instead of `vendor/`, add `integrity="sha384-..."` and `crossorigin="anonymous"` to the `<script>` tags.

- [ ] **WhatsApp link** — verify the `.wa` button uses a hardcoded phone number, not a user-supplied value.

### Rules going forward

- Never hardcode API keys, tokens, or secrets in HTML/JS files
- Never commit `.env` files — use the hosting dashboard (Vercel) to set env vars
- Never load resources over `http://` — always `https://`
- All user input that touches the DOM must go through React (never raw `innerHTML`)
- Form submissions must be validated on the server, not just the client
- Keep React updated — check for security patches at https://github.com/facebook/react/releases

---

## File Structure

```
Score-nueva-web/
├── index.html          # Version selector page
├── assets/             # Images, videos, logos
├── vendor/             # React + ReactDOM CDN builds
├── version-a/
│   └── index.html      # Client mockup version (full features)
└── version-b/
    └── index.html      # Conversion-optimized version
```
