---
name: dashboard-page-development
description: Implement dashboard pages following the project's page-based folder structure, naming conventions, UI patterns, and verification process.
---

# Dashboard Page Development

## Before Implementation

1. Read the project rules.
2. Inspect the existing page structure.
3. Search for reusable components.
4. Identify existing API and state-management patterns.
5. Determine whether the page folder already exists.

## Task File

- Create or update `{page-name}.task.md` inside the page folder.
- Record the objective, requirements, implementation plan, and status.
- Keep the task file updated as work progresses.

## Folder Structure

Each page should follow:

src/pages/{PageName}/
├── {page-name}.page.tsx
├── {page-name}.task.md
├── components/
├── hooks/
└── types.ts

## Implementation

- Reuse existing shared components.
- Follow existing Redux / RTK Query patterns.
- Keep page-specific components inside the page folder.
- Follow the project's naming conventions.
- Do not modify unrelated pages.

## Verification

1. Run typecheck.
2. Run lint.
3. Run tests if available.
4. Run production build.
5. Verify the page in the browser.
6. Check responsive behavior.
7. Update the task file.