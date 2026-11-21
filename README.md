# Stafida Analytica

Static Next.js website for Stafida Analytica Limited. It includes Home, Services, About and Contact.

## Local preview

Use Node.js 22 or later.

```sh
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```sh
npm run typecheck
npm run build
```

The production build exports the website to `out/`.

## GitHub Pages

Set the repository’s **Settings → Pages → Source** to **GitHub Actions**. The included workflow runs on pushes to `main` or can be run manually from the Actions tab. It uses the base path returned by GitHub Pages so pages and assets load on project URLs and custom domains.

The contact form prepares a message in the browser. Visitors send it from WhatsApp or their email app. Contact details and service descriptions are defined in `src/lib/business.ts`.
