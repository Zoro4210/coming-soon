# Vectiloom — Coming Soon

A minimal full-screen coming-soon page for Vectiloom. It features a looping doodle video, a centered brand mark, and a hover-triggered countdown to 20 October 2026 based on the visitor's browser time zone.

## Run locally

Serve the repository root with any static web server, then open the generated local URL.

```powershell
python -m http.server 4319 --directory dist
```

Open `http://127.0.0.1:4319/`.

## Project structure

- `dist/index.html` — page markup
- `dist/styles.css` — layout, responsive styling, and transitions
- `dist/script.js` — countdown behavior
- `dist/assets/` — logo, emblem, poster, and looping video
- `.openai/hosting.json` — static hosting configuration

## Deploy

The deployable static directory is `dist`. It can be hosted with GitHub Pages or any static hosting service.
