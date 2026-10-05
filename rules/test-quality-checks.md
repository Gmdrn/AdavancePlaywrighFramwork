# Rule: Test Quality Checks

**Scope:** Every new or modified Playwright test case under `src/tests/**`.

## Mandatory Pre-Commit Steps

After adding or modifying any test file, run both checks from the repository root.

### 1. Type Check

```sh
npm run typecheck
```

The command must exit successfully with no TypeScript errors.

### 2. Lint Check

```sh
npm run lint
```

The command must exit successfully with no ESLint errors.

### 3. Format Check (Optional, Recommended)

```sh
npm run format:check
```

Run this check when practical, especially when the test change affects formatting.

## Completion Criteria

- Fix issues caused by the test change and rerun both mandatory checks.
- Do not report a check as passed unless it completed successfully.
- Clearly report any remaining failure or blocker, including pre-existing failures that prevent a clean result.