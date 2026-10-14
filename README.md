# IMX Digital Tools

Standalone marketplace project for `tools.imxcode.in`. This project does not modify the existing `imxcode.in` agency website.

## Requirements

- Node.js 22 LTS recommended
- npm

## Run locally

1. Extract the ZIP.
2. Open a terminal inside the `IMX-Digital-Tools` folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open http://localhost:3000

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Current scope

Step 1 only: Next.js App Router + TypeScript + Tailwind CSS v4 scaffold and initial placeholder homepage. Authentication, payments, database, component purchasing, ZIP generation, and provider API integrations are intentionally not implemented yet.

## Project structure

```text
IMX-Digital-Tools/
├── public/
│   ├── images/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── favicon.ico  (add later if needed)
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   └── providers/
│   ├── features/
│   │   └── marketplace/
│   ├── lib/
│   ├── server/
│   ├── types/
│   └── config/
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

Empty folders are retained with `.gitkeep` files until real files are added.
