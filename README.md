# Asterfold Docs

A multi-project documentation hub built with [Astro Starlight](https://starlight.astro.build).

- `/` — project portal
- `/aegis/` — Aegis documentation
- Future projects get their own content folder and sidebar group.

## Local development

```bash
npm install
npm run dev
```

The site is served at `http://localhost:4321/docs/`.

## Build

```bash
npm run build
npm run preview
```

## Adding a project

1. Create `src/content/docs/<project>/` with an `index.mdx` landing page and any
   additional pages.
2. Add the project to `src/data/projects.ts` so it appears on the home page.
3. Add a sidebar group for the project in `astro.config.mjs`.
4. Put project images under `public/<project>/`.

Use root-relative links inside the project folder and keep the project's pages
under its slug so future projects do not share a namespace.

## Deployment

The site is configured for the GitHub Pages project URL:

```text
https://asterfold-dev.github.io/docs/
```

`astro.config.mjs` sets `site` and `base` accordingly. The workflow in
`.github/workflows/deploy.yml` builds and deploys with GitHub Pages. In the
repository settings, set **Pages → Build and deployment → Source** to
**GitHub Actions**.

If you later use a custom domain such as `docs.asterfold.dev`, update `site`,
remove `base`, and add the domain in GitHub Pages settings.
