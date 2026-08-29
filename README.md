# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/fc102bb8-0edf-4ea7-be4b-661cfbd52981

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/fc102bb8-0edf-4ea7-be4b-661cfbd52981) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Bilingual support (English / Persian)

This site ships with a lightweight, dependency-free i18n system so it can be
read in English or Persian (فارسی), with automatic RTL layout switching.

**Structure** (`src/i18n/`):

- `types.ts` — the `Translation` TypeScript interface. Both locale files must
  satisfy it, so the compiler catches any missing or mistyped string.
- `translations/en.ts` — all English copy.
- `translations/fa.ts` — all Persian copy.
- `LanguageContext.tsx` — a React context (`LanguageProvider` / `useLanguage`)
  that holds the active language, persists the choice to `localStorage`,
  and sets `<html lang>` / `<html dir>` (`rtl` for Persian) automatically.
- `index.ts` — barrel export.

**Usage in a component:**

```tsx
import { useLanguage } from '@/i18n';

const MyComponent = () => {
  const { t, language, toggleLanguage } = useLanguage();
  return <h1>{t.hero.name}</h1>;
};
```

**Adding/editing text:** update the matching key in both
`src/i18n/translations/en.ts` and `src/i18n/translations/fa.ts`. TypeScript
will complain if a key exists in one file but not the other.

**Language switcher:** `src/components/LanguageSwitcher.tsx` renders the
toggle button used in the navigation bar (desktop and mobile).

**RTL styling:** Tailwind's built-in `rtl:`/`ltr:` variants and logical
spacing utilities (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`) are used
instead of hardcoded `ml-`/`mr-`/`left-`/`right-` wherever direction matters,
so the layout mirrors correctly when Persian (RTL) is active. The Persian
UI uses the "Vazirmatn" webfont, loaded in `index.html` and applied via the
`.font-fa` class that `LanguageProvider` toggles on `<html>`.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/fc102bb8-0edf-4ea7-be4b-661cfbd52981) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
