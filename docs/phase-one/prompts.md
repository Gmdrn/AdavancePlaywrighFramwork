# Phase One: Prompts and Project Context

This file records the project decisions and reusable prompts from the initial framework setup conversation.

## Project Context

- This is an advanced Playwright and TypeScript test automation framework.
- Playwright tests are located under `src/tests/`.
- The configured browser projects are Chromium, Firefox, WebKit, and mobile Chrome.
- The Playwright config loads `.env` with `dotenv`; `BASE_URL` defaults to `http://localhost:3000`.
- HTML reports are written to `playwright-report/`; JSON results are written to `test-results/results.json`.

## Decisions and Working Rules

- After adding or modifying any test under `src/tests/`, run `npm run typecheck` and `npm run lint` from the project root.
- Both required checks must pass before reporting the test change complete. Fix failures caused by the change and rerun both checks; report any remaining failures or blockers.
- `npm run format:check` is optional but recommended. The complete rule is in [test-quality-checks.md](../../rules/test-quality-checks.md).
- Keep local environment values in the root `.env`; the root `.gitignore` excludes it. Do not put credentials in tracked files.
- Keep project guidance in `.github/copilot-instructions.md` and detailed test quality requirements in `rules/test-quality-checks.md`.
- The root README documents setup, commands, reports, and repository structure.
- A TypeScript configuration load error was discussed earlier. Inspect the current `tsconfig.json` before changing it, and preserve any user edits.

## Reusable Prompts

### Add or Modify a Playwright Test

```text
Add or modify the requested Playwright test under src/tests. Follow the project conventions and rules/test-quality-checks.md. Then run npm run typecheck and npm run lint from the project root, fix failures caused by the change, rerun both checks, and report their results.
```

### Diagnose a TypeScript Configuration Error

```text
Inspect the current tsconfig.json and the error output first. Identify the smallest root-cause fix, preserve existing user changes, then run the narrowest relevant typecheck and report any remaining errors.
```

### Update Project Documentation

```text
Inspect the current project structure and package scripts before editing documentation. Keep the root README accurate, and record reusable project decisions in docs/phase-one/prompts.md.
```