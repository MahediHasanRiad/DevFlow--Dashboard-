# Dashboard Layout Task (`dashboard.task.md`)

## Objective
Design and implement the core dashboard shell layout featuring a responsive sidebar with MAKTech Business OS branding, user profile block, categorized collapsible navigation hierarchy matching the reference structure, and a clean viewport layout adhering strictly to the minimal white and gray color palette.

## Requirements
1. **Header Branding**: Display `MAKTech Business OS` with clean typography.
2. **User Context Badge**:
   - `LOGGED IN AS`
   - `MAHEDI HASAN RIAD`
   - `TEAM MEMBER`
3. **Sidebar Navigation**:
   - **OVERVIEW**: `My Dashboard` (active), `Daily Tracking`, `MAKTech ChatBox`
   - **OPERATIONS**: `Meeting Scheduling`
   - **WORK**: `All Orders`, `My Assigned Orders`, `Revision Orders`, `Old Order Revision`, `Cancel Page`, `Dispute Orders`, `My Target & Bonus`
   - **MAKTECH-HRM**: `My Details`, `My HRM Dashboard`
4. **Footer Action**: `Sign Out` button with exit icon.
5. **Color Guidelines Compliance**:
   - Monochromatic minimal white and gray color system.
   - Background: White / light gray (`#f9fafb`).
   - Surface / Card: White (`#ffffff`).
   - Primary text: Dark gray / near-black (`#111827`).
   - Secondary text: Medium gray (`#4b5563` / `#6b7280`).
   - Borders & Dividers: Light gray (`#e5e7eb`).
   - Hover states: Light gray (`#f3f4f6`).
   - Active state: Light gray (`#f3f4f6` / `#e5e7eb`).
   - Semantic color (green) reserved solely for status indicators.
6. **Strict Page Architecture**: Adhere to `src/pages/dashboard/` architecture (`dashboard.page.tsx`, `components/`, `hooks/`, `types.ts`, `dashboard.task.md`).

## Implementation Plan
- [x] 1. Apply monochromatic white and gray color tokens in `src/index.css` and `tailwind.config.js`.
- [x] 2. Update layout components (`sidebar.tsx`, `header.tsx`, `dashboard-layout.tsx`) to white/gray styling.
- [x] 3. Update dashboard page components to white surface / light gray border styles.
- [x] 4. Verify TypeScript type checking (`npm run typecheck`).
- [x] 5. Verify production build (`npm run build`).

## Status
- **Status**: Completed & Verified ✓

## Files Involved
- `src/components/layout/sidebar.tsx`
- `src/components/layout/header.tsx`
- `src/components/layout/dashboard-layout.tsx`
- `src/pages/dashboard/dashboard.page.tsx`
- `src/pages/dashboard/dashboard.task.md`
- `src/pages/dashboard/types.ts`
- `src/pages/dashboard/components/dashboard-overview.tsx`
- `src/pages/dashboard/hooks/use-dashboard.ts`
- `src/App.tsx`
- `src/main.tsx`
- `src/index.css`
- `tailwind.config.js`
- `index.html`

## Important Decisions
- All decorative/arbitrary colors were removed in strict compliance with the dashboard color rules.
- High-contrast minimal white & gray surfaces maintain clean hierarchy across sidebar, header, and content slots.
