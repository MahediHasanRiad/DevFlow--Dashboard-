## 1. Project Setup and Design System

- [x] 1.1 Initialize Vite React + TypeScript project with Tailwind CSS, dependencies (`framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`, `react-hook-form`, `yup`), and verify project builds.
- [x] 1.2 Configure Tailwind CSS and CSS variables for light/dark themes with shadcn-compatible design tokens, verifying font families and color scheme definitions.

## 2. Core Utilities and UI Components

- [x] 2.1 Implement `lib/utils.ts`, `lib/constants.ts`, and theme hook `hooks/useTheme.ts` with local storage persistence, verifying theme toggling works reliably.
- [x] 2.2 Implement reusable UI components (`components/ui/button.tsx`, `card.tsx`, `badge.tsx`, `input.tsx`, `avatar.tsx`, `dropdown.tsx`), verifying their styling and accessibility states.

## 3. Dashboard Layout Shell and Navigation

- [x] 3.1 Implement `components/Sidebar.tsx` with collapsible states, navigation links, section groupings, and Framer Motion transitions, verifying active state routing and collapse toggle.
- [x] 3.2 Implement `components/Navbar.tsx` with search bar input, notification bell with badge counter, theme switcher toggle, and user profile menu, verifying interactive states.
- [x] 3.3 Implement `components/MobileMenu.tsx` and `components/Layout.tsx` providing responsive drawer overlays on mobile (< 768px) and multi-column layout on desktop, verifying responsive layout transitions.

## 4. Dashboard Overview & Analytics Components

- [x] 4.1 Implement `components/MetricCard.tsx` with trend percentages, formatted values, and micro-interactions, verifying responsive KPI grid rendering.
- [x] 4.2 Implement `components/AnalyticsCharts.tsx` featuring responsive visual chart trends (area / bar / donut charts) with time-range tab filters, verifying interactive filter switching.
- [x] 4.3 Implement `components/ActivityFeed.tsx` and recent data table with status badges, action triggers, and mock data, verifying tabular layout and activity feed rendering.

## 5. Page Assembly and Verification

- [x] 5.1 Assemble `pages/Dashboard.tsx`, `App.tsx`, and `main.tsx` tying all components together with quick action modal / form support (using react-hook-form & yup), verifying full integration.
- [x] 5.2 Test across viewports (mobile, tablet, desktop) and light/dark modes, ensuring 0 errors in build (`npm run build`) and strict OpenSpec validation (`openspec validate basic-dashboard-boilerplate --strict`).
