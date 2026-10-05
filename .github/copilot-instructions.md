# Copilot Instructions

Project: `E_Commerce_Project_` - Playwright TypeScript test automation framework.

## Hard Rules

### Adding or modifying tests under `src/tests/**`

After any test file change, you MUST run:

```sh
npm run typecheck
npm run lint
```

Both commands must exit with code 0 before reporting the work complete. Fix failures caused by the change and rerun both checks. Clearly report any remaining failures or blockers. Follow [`rules/test-quality-checks.md`](../rules/test-quality-checks.md) for the full test quality rule. `npm run format:check` is optional but recommended.

## Project Structure

- `src/api/` - API clients
- `src/config/` - environment and application configuration
- `src/fixtures/` - Playwright fixtures
- `src/pages/` - Page Object models
- `src/testdata/` - CSV, JSON, XLSX, and other test data
- `src/tests/` - Playwright test cases
- `src/utils/` - shared utilities, logging, and reporting
- `playwright.config.ts` - Playwright runner and project configuration
- `tsconfig.json` - TypeScript compiler options and path aliases
- `rules/` - repository development rules
- `playwright-report/` - generated HTML test report output
