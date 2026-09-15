## Purpose

Provides a responsive and structured dashboard layout shell with navigation, header controls, and theme preferences.

## ADDED Requirements

### Requirement: Responsive Dashboard Layout
The application SHALL provide a responsive multi-column dashboard structure consisting of a sidebar navigation drawer, a top header bar, and a main scrollable content area that adapts seamlessly across desktop, tablet, and mobile viewports.

#### Scenario: Desktop viewport rendering
- **WHEN** the dashboard is loaded on a desktop screen (width >= 1024px)
- **THEN** the sidebar is expanded by default alongside the header and main content area

#### Scenario: Mobile viewport responsive adaptation
- **WHEN** the dashboard is loaded on a mobile screen (width < 768px)
- **THEN** the sidebar is collapsed into an off-canvas overlay drawer accessible via a hamburger toggle button

### Requirement: Sidebar Navigation Menu
The system SHALL provide a sidebar navigation menu containing organized navigation links with icons, route labels, active state styling, and a toggle to expand or collapse the sidebar width.

#### Scenario: Navigating between views
- **WHEN** a user clicks an inactive navigation item in the sidebar
- **THEN** the clicked item becomes active with visual indicator highlighting, and the previous active item is deactivated

#### Scenario: Collapsing the sidebar
- **WHEN** a user clicks the sidebar collapse toggle button on desktop
- **THEN** the sidebar transitions into a mini/compact icon-only view and main content expands to fill the available space

### Requirement: Top Navigation Bar and Controls
The system SHALL provide a top navigation bar containing a search bar input, a notifications indicator button with badge counter, a theme toggle switch, and a user profile avatar trigger.

#### Scenario: Interacting with search input
- **WHEN** a user focuses and types into the global search bar
- **THEN** the input accepts keystrokes and provides a visual focus ring and clear button

#### Scenario: Opening user profile menu
- **WHEN** a user clicks the user profile avatar or trigger button in the top bar
- **THEN** a dropdown menu displays user details, profile link, account settings, and logout action

### Requirement: Theme Customization (Dark and Light Mode)
The application SHALL support dark mode and light mode themes with CSS variables and allow users to toggle themes, persisting the preference in local storage.

#### Scenario: Switching between themes
- **WHEN** a user clicks the theme toggle button
- **THEN** the color scheme transitions between dark and light themes smoothly without layout shift, and the selected theme is persisted
