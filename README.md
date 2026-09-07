# Bhargav Ventures

Business website with a small admin area for managing content. Built with
Vite + React + TypeScript, Tailwind CSS, shadcn/ui, Firebase (Auth +
Firestore), and Cloudinary for image uploads.

## Stack

- **Vite + React + TypeScript** — matches the stack Lovable exports, so a
  Lovable-generated prototype can be pasted into `src/` with minimal changes.
- **Tailwind CSS v4 + shadcn/ui** — same reason.
- **react-router-dom** — client-side routing. `/` is the public site, `/admin`
  is gated behind Firebase Auth.
- **Firebase** — Firestore holds site content, Firebase Auth handles the
  single admin login.
- **Cloudinary** — unsigned upload preset for image uploads from the admin
  area.
- **Vercel** — deploy target.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Fill in `.env.local` with the values described below before running the app —
`src/lib/firebase.ts` reads Firebase config from environment variables at
module load time, so the app will throw immediately if they're missing or
malformed.

## Environment variables

This is the client's own Firebase and Cloudinary project — every credential
is read from `import.meta.env.VITE_*` and nothing is hardcoded. See
[.env.example](.env.example) for the full list. Never commit `.env` or
`.env.local`.

### Firebase (`VITE_FIREBASE_*`)

Firebase Console → select the project → **Project settings** (gear icon) →
**General** tab → scroll to **Your apps** → the web app's **SDK setup and
configuration** panel shows all six values (`apiKey`, `authDomain`,
`projectId`, `storageBucket`, `messagingSenderId`, `appId`). If no web app
exists yet, create one from that page first.

The admin login itself (an email/password user) is created in Firebase
Console → **Authentication** → **Users** tab → **Add user**, after enabling
the **Email/Password** sign-in provider under the **Sign-in method** tab.

### Cloudinary (`VITE_CLOUDINARY_*`)

Cloudinary Console → **Settings** (gear icon) → **Upload** tab →
**Upload presets**. `VITE_CLOUDINARY_CLOUD_NAME` is shown on the dashboard
home page (top left, under the account name). `VITE_CLOUDINARY_UPLOAD_PRESET`
is the name of an **unsigned** upload preset — create one if none exists yet
(Add upload preset → set **Signing Mode** to **Unsigned** → save).

## Project structure

```
src/
  components/   shared UI (includes shadcn/ui primitives in components/ui/)
  pages/        public route-level pages (e.g. Home.tsx)
  admin/        admin-only pages and the auth gate (e.g. AdminDashboard.tsx)
  lib/          firebase.ts, cloudinary.ts
```

`/admin` is currently gated by a simple `onAuthStateChanged` check
(`src/admin/RequireAuth.tsx`) — any signed-in Firebase user can reach the
dashboard. This is intentionally minimal for now.

## Firestore rules

`firestore.rules` doesn't exist yet. It'll be written once the real content
collections are defined (after the Lovable prototype is pasted in and the
data model is known) — least-privilege rules per collection, not a generic
placeholder.

## Deployment

Deploys to Vercel. Set the same `VITE_FIREBASE_*` and `VITE_CLOUDINARY_*`
variables in the Vercel project's **Settings → Environment Variables** before
the first deploy.
