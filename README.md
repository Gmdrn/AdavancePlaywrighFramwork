# E_Commerce_Project_

Playwright and TypeScript test automation framework for web applications. The configured browser projects cover Chromium, Firefox, WebKit, and mobile Chrome.

## Prerequisites

- Node.js and npm
- The application under test running locally or at a reachable URL

## Setup

Install project dependencies and Playwright browsers:

```sh
npm ci
npx playwright install
```

The Playwright configuration loads environment values from `.env`. Set `BASE_URL` to the application URL; if it is omitted, the framework uses `http://localhost:3000`.

```dotenv
BASE_URL=http://localhost:3000
```

Keep credentials and other local environment values out of version control. The root `.env` file is ignored by Git.

## Running Tests

```sh
npm test
```

Run a specific browser project or use the Playwright UI:

```sh
npm run test:chromium
npm run test:firefox
npm run test:webkit
npm run test:ui
```

## Quality Checks

After adding or modifying tests under `src/tests/`, run both required checks:

```sh
npm run typecheck
npm run lint
```

Both commands must pass. `npm run format:check` is optional but recommended. See [rules/test-quality-checks.md](rules/test-quality-checks.md) for the full rule.

## Test Steps and Logging

Use `test.step()` to break a test into logical stages and make the report easier to read. Combine it with the shared logger to capture meaningful progress messages for each step.

```ts
import {expect, test} from '@playwright/test';
import {createLogger} from '../utils/logger';

const log = createLogger('LoginSpec');

test('login flow', async ({page}) => {
  await test.step('Login with valid credentials', async () => {
    log.info('Attempting login with valid credentials');
    await page.goto('/login');
  });

  await test.step('Verify login success', async () => {
    log.info('Checking the logged-in state');
    await expect(page.locator('[data-test="login-button"]')).toBeHidden();
  });
});
```

This keeps the Playwright output structured and gives clearer console and log-file traces.

## Reports

The configured HTML report is written to `playwright-report/`. The JSON report is written to `test-results/results.json`.

## Project Structure

- `src/api/` - API clients
- `src/config/` - environment and application configuration
- `src/fixtures/` - Playwright fixtures
- `src/pages/` - Page Object models
- `src/testdata/` - CSV, JSON, XLSX, and other test data
- `src/tests/` - Playwright test cases
- `src/utils/` - shared utilities, logging, and reporting
- `docs/phase-one/prompts.md` - Phase One project context and reusable prompts
- `rules/` - repository development rules
- `playwright.config.ts` - Playwright runner and project configuration
- `tsconfig.json` - TypeScript compiler options and path aliases

## Documentation

See [docs/phase-one/prompts.md](docs/phase-one/prompts.md) for the initial project decisions and reusable prompts.
