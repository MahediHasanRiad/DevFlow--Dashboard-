---
trigger: always_on
---

## Tech-stack
- react
- tailwind css
- react-hook-form
- yup
- shadcn/ui
- lucide-react
- framer-motion

## Folder structure

  src/
├── components/
│   ├── layout/                      # Global shell & navigation components
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── MobileMenu.tsx
│   ├── common/                      # Shared feature modals & global dialogs
│   │   └── QuickActionModal.tsx
│   └── ui/                          # shadcn/ui primitive design system
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dropdown.tsx
│       └── input.tsx
├── features/                        # Domain-driven feature modules
│   └── dashboard/
│       ├── components/
│       │   ├── ActivityFeed.tsx
│       │   ├── AnalyticsCharts.tsx
│       │   ├── DashboardOverview.tsx
│       │   └── MetricCard.tsx
│       └── types.ts
├── hooks/
│   └── useTheme.ts
├── lib/
│   ├── constants.ts
│   └── utils.ts
├── pages/
│   └── Dashboard.page.tsx
├── App.tsx
├── index.css
└── main.tsx
