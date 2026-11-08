# Tech Age

An e-commerce storefront for computers and gadgets, built with Next.js 14 (App Router). Product content is managed in Sanity CMS (with an embedded Sanity Studio), sign-in runs on Auth.js (NextAuth v5), checkout uses Stripe, and orders are stored in Firebase Firestore.

## Features

- Home page with Sanity-driven banners and product grid
- Shop and product detail pages (`/shop`, `/product/[slug]`)
- Persistent cart (Redux Toolkit + redux-persist, stored in localStorage)
- Google / GitHub OAuth sign-in (Auth.js)
- Stripe Checkout (`/api/checkout`) with success page and order saving (`/api/saveorder`)
- Order history backed by Firestore (`/orders`)
- Embedded Sanity Studio at `/studio` (link shown to `ADMIN_EMAIL`)

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open http://localhost:3000.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` / `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity content source (public values) |
| `AUTH_SECRET` | Auth.js session encryption — generate with `openssl rand -base64 32` |
| `AUTH_URL` | Canonical site URL in production |
| `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET` | Google OAuth app credentials |
| `AUTH_GITHUB_ID` / `AUTH_GITHUB_SECRET` | GitHub OAuth app credentials (button hidden when unset) |
| `STRIPE_SECRET_KEY` | Stripe secret key for checkout |
| `FIREBASE_SERVICE_ACCOUNT_KEY` | Firebase service-account JSON on one line, for writing orders |
| `ADMIN_EMAIL` | Account email that sees the Studio link |

The storefront reads from Sanity without these secrets; sign-in, checkout, and order saving each need their respective keys.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint

## Deployment

Configured for Netlify (`netlify.toml` + `@netlify/plugin-nextjs`). Set the same environment variables in the Netlify UI before building.

## Known limitations

- The email/password form on `/signin` is a placeholder; only OAuth sign-in works.
- The header search box is decorative.
- Checkout prices come from the client cart; verify prices and Stripe payment status server-side before using this in production.