# AGENTS.md

Architecture and conventions reference for AI agents and developers.

## Project Overview

A single-page TanStack Start application showing live trading hours for 30 global stock exchanges. Cards update every second via a `setInterval` ticker. Green = open, dark = closed. Ad slots sit above and below the main grid.

## Directory Structure

```
src/
  routes/
    __root.tsx        # HTML shell, page <title>, global CSS import
    index.tsx         # Entire app lives here: exchange data, open/closed logic, UI
  styles.css          # Tailwind 4 import + base body styles
  router.tsx          # TanStack Router instance (scroll restoration)
public/               # Static assets
netlify.toml          # Build: vite build → dist/client, dev on port 3000
vite.config.ts        # Vite plugins: TanStack Start, Netlify, Tailwind
tsconfig.json         # Strict TS, @/* alias → src/*
```

## Key Concepts

### Exchange Data (`src/routes/index.tsx`)

Each exchange is an object in the `exchanges` array with:
- `timezone` — IANA timezone string used by `Intl` APIs
- `openHour / openMinute / closeHour / closeMinute` — local 24-hour trading window
- `flag`, `country`, `mic` — display metadata

### Open/Closed Logic

`isOpen(exchange)` converts the current UTC time into the exchange's local timezone via `Date.toLocaleString`, checks weekday (no weekend trading), then compares minutes-since-midnight against the open/close window. No external dependencies.

### Live Clock

A `setInterval` in `StockExchanges` sets a `tick` counter every second, causing a re-render. `formatLocalTime` uses `Intl` (via `toLocaleTimeString`) to format each exchange's local time on each render.

### Ad Slots

`<AdSlot>` renders a dashed placeholder `<div>`. Replace its contents with an ad network script tag (Google AdSense, etc.) to monetize.

## Conventions

- **No external data fetching** — all exchange metadata is hardcoded; open/closed state is computed client-side from system time.
- **Tailwind 4 utility classes** — no custom CSS beyond `styles.css` base import.
- **TypeScript strict mode** — all types explicit, `type` keyword for type-only imports.
- **`@/` path alias** maps to `src/`.
- **File-based routing** — add new pages as files under `src/routes/`.

## Adding / Editing Exchanges

Append entries to the `exchanges` array in `src/routes/index.tsx`. Required fields: `name`, `country`, `timezone` (IANA), `openHour`, `openMinute`, `closeHour`, `closeMinute`, `flag` (emoji), `mic` (short code).

Note: The current implementation does not handle exchange-specific lunch breaks (e.g., Shanghai/Shenzhen 11:30–13:00 pause) or public holidays.
