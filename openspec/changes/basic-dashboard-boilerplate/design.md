## Context

This project initializes a modern, responsive, and standalone dashboard boilerplate in the workspace. See `proposal.md` for motivation and background. The architecture requires a lightweight, zero-bloat, highly maintainable design system with rich visual aesthetics and dark/light theme support.

## Goals / Non-Goals

**Goals:**
- Provide a modular, zero-dependency HTML/CSS/JavaScript dashboard boilerplate ready for instant preview and development.
- Build a robust design system using CSS custom properties (`tokens.css`, `layout.css`, `components.css`, `main.css`).
- Deliver a premium responsive layout: collapsible sidebar navigation, top header bar with user menu & search, and mobile-friendly drawer.
- Include interactive KPI metric stat cards, SVG analytics chart visualizations, and recent activity feeds with mock data.
- Support persistent dark and light theme switching via localStorage.

**Non-Goals:**
- Backend database or API server implementation (data will be client-side mock models).
- Heavy framework lock-in or build tooling dependencies for basic boilerplate usage.

## Decisions

### 1. Architecture: Modular Vanilla CSS & ES Modules
- **Decision**: Use Vanilla CSS organized with CSS custom properties (tokens) and standard ES6 JavaScript modules.
- **Rationale**: Ensures zero build friction, fast loading, complete design flexibility, and easy integration into any future framework (React).
- **Alternatives Considered**: 
  - *Tailwind CSS / Vite*: Adds node build tool requirements for a basic boilerplate.
  - *Single monolithic CSS file*: Poor maintainability and harder to extend tokens.

### 2. Design Tokens & Theme Strategy
- **Decision**: Define semantic color tokens (surface, background, primary, text-primary, text-secondary, borders, shadows) mapped to `[data-theme="dark"]` and `[data-theme="light"]` root attributes.
- **Rationale**: Smooth transition animations, clean dark mode contrast ratios, and easily customizable color palettes.

### 3. Lightweight Visualizations & Icons
- **Decision**: Use inline crisp SVG icons and responsive SVG-based chart visualizers (area/bar trend lines) directly styled with CSS.
- **Rationale**: Eliminates large chart library dependencies while retaining crisp rendering, theme reactivity, and interactivity.

## Risks / Trade-offs

- **[Risk]** Complex chart requirements beyond basic visual analytics.
  - **Mitigation**: Structure the chart cards with clean container slots so external charting libraries (like Chart.js or ECharts) can be dropped in easily if needed later.
- **[Risk]** Mobile viewport sidebar overflow or collision.
  - **Mitigation**: Implement a CSS backdrop overlay and mobile drawer toggle with smooth CSS transform transitions and touch dismissal.

## Tech-stack
- react
- tailwind css
- react-hook-form
- yup
- shadcn/ui
- lucide-react
- framer-motion

## Folder structure

  /src
  |-- /components
  |   |-- /ui (shadcn/ui components, e.g. Button, Card, Input, Badge, Sidebar, etc.)
  |   |-- Layout.tsx
  |   |-- Sidebar.tsx
  |   |-- Navbar.tsx
  |   |-- DashboardOverview.tsx
  |   |-- AnalyticsCharts.tsx
  |   |-- ActivityFeed.tsx
  |   |-- MetricCard.tsx
  |   |-- MobileMenu.tsx
  |-- /hooks
  |   |-- useTheme.ts
  |-- /lib
  |   |-- utils.ts
  |   |-- constants.ts
  |-- /assets
  |   |-- icons.svg (or separate icon files if needed)
  |-- pages
  |   |-- Dashboard.tsx
  |-- App.tsx
  |-- main.tsx