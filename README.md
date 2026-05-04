# World Stock Exchanges — Live Trading Hours

A single-page web app that displays real-time local clocks and open/closed status for 30 major stock exchanges worldwide. Cards are green when an exchange is currently open and dark when it is closed. Trading hours update every second in the browser.

Ad placement slots are included above and below the main content grid, ready for any ad network integration.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5.7 (strict) |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts on **http://localhost:3000** (or port 8888 via Netlify CLI).

```bash
# With full Netlify feature emulation
netlify dev
```

## Building for Production

```bash
npm run build
```

Output is written to `dist/client/` and served by Netlify automatically.
