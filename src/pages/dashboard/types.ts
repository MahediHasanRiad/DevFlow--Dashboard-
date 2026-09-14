export interface DashboardViewState {
  activeNavId: string;
  activeNavLabel: string;
  activeCategory: string;
}

export interface DashboardMetricSummary {
  id: string;
  title: string;
  value: string;
  change?: string;
}
