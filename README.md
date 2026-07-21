# Niña Issabela Olasiman — Portfolio

A React + Vite + Tailwind CSS portfolio site, styled around a grid-paper background,
oversized headline type, and an animated pixel/contribution-grid motif as a recurring
signature element.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

`vercel.json` is already included so client-side routing works if you add pages later.

## Where to edit things

- `src/components/Hero.jsx` — headline, pill tags, availability status
- `src/components/About.jsx` — bio + quick facts
- `src/components/Projects.jsx` — featured projects (edit the `PROJECTS` array)
- `src/components/Skills.jsx` — skill groups + pixel-block levels (`GROUPS` array, 1–10 scale)
- `src/components/Experience.jsx` — work + organization timeline (`TIMELINE` array)
- `src/components/Process.jsx` — your workflow steps
- `src/components/Contact.jsx` — email/phone
- `src/index.css` — color tokens, fonts (all under `@theme`)

## Colors

| Token | Hex | Use |
|---|---|---|
| `--color-cream` | `#FAF9F3` | background |
| `--color-ink` | `#15140F` | text, dark sections |
| `--color-indigo` | `#4B3FE4` | primary accent |
| `--color-lime` | `#D7FF3E` | pop highlight |
| `--color-coral` | `#FF5B3C` | secondary accent |

## Still to add

- Real project screenshots (drop images into `src/assets` and reference them in `Projects.jsx`)
- GitHub / LinkedIn links in `Contact.jsx` and `Nav.jsx`
- A resume PDF linked from the hero button
