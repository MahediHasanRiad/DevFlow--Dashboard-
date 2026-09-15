export interface MetricData {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  timeframe: string;
  icon: string;
  colorScheme: 'indigo' | 'emerald' | 'amber' | 'sky';
  chartData: number[];
}

export interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatar: string;
    email: string;
  };
  action: string;
  target: string;
  time: string;
  status: 'completed' | 'in-progress' | 'failed' | 'pending';
  badgeType: string;
}
