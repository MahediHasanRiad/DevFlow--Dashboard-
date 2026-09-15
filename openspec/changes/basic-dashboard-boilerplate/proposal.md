## Why

Developers and teams building web applications often need a clean, responsive, and modern dashboard foundation to visualize analytics, manage resources, and navigate multi-page administrative features. Creating a dashboard shell from scratch repeatedly is time-consuming. Building a standardized, highly polished basic dashboard boilerplate accelerates feature development with ready-to-use navigation, KPI widgets, responsive layouts, and modern UI aesthetic patterns.

## What Changes

- Create a responsive dashboard boilerplate application structure featuring a modern UI with dark/light mode support, clean typography, and CSS design system.
- Implement a collapsible sidebar navigation with active route highlights, icon indicators, and section groupings (e.g., Overview, Analytics, Projects, Settings).
- Implement a top navigation bar with search bar, notifications indicator, theme switcher, and user avatar dropdown menu.
- Implement a dashboard overview / home view with summary KPI stat cards (e.g., total users, active projects, revenue, task completion rate), analytical chart container components, and a recent activities/data table list.
- Provide a clean and modular component-based codebase adhering to vanilla CSS/JS or modern standard web practices with zero bloat.

## Capabilities

### New Capabilities
- `dashboard-layout`: Responsive dashboard shell consisting of a collapsible sidebar, top navigation bar, theme toggle, and main content viewport.
- `dashboard-overview`: Overview analytics view featuring KPI metric cards, chart visualization areas, recent activity feed, and responsive data grid.

### Modified Capabilities
<!-- None -->

## Impact

- **New Files**: Setup core application assets (HTML, CSS tokens, JavaScript module structure).
- **Dependencies**: Minimal/standard modern setup (modern Vanilla JS/CSS or lightweight dev setup).
- **Extensibility**: Provides reusable component styles, design tokens, and modular layouts for building out further dashboard sections.
