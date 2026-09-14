---
trigger: always_on
---

# Page-Based Architecture Rules

## Folder Organization

- Organize the application by page/feature.
- Each page must have its own folder inside `src/pages/`.
- Page-specific components must live inside that page's `components/` folder.
- Page-specific hooks must live inside that page's `hooks/` folder.
- Page-specific types must live inside that page's `types.ts` file.
- Shared components must remain in `src/components/`.
- Do not place page-specific components in the global shared folder.

## Naming Convention

- Page components must use the format:
  `{page-name}.page.tsx`

- Task files must use the format:
  `{page-name}.task.md`

- Component files must use kebab-case:
  `{component-name}.tsx`

- Hook files must use:
  `use-{hook-name}.ts`

- Type files must use:
  `types.ts`

## Task File Rules

- Every new page or major page feature must have a corresponding `.task.md` file.
- The task file must be created inside the page folder.
- The task file must contain:
  - Objective
  - Requirements
  - Implementation plan
  - Status
  - Files involved
  - Important decisions
- Update the task file as implementation progresses.
- Mark completed checklist items only after verification.

## Development Rules

- Before implementing a page, inspect existing components and API patterns.
- Reuse shared components whenever possible.
- Do not create duplicate components.
- Keep page components focused on composition.
- Extract complex UI into page-specific components.
- Do not modify unrelated pages.