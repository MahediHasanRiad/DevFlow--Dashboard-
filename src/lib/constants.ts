export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  badge?: string | number;
  badgeColor?: 'primary' | 'success' | 'warning';
  hasSubmenu?: boolean;
}

export interface NavSection {
  title: string;
  icon: string;
  items: NavItem[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    title: 'OVERVIEW',
    icon: 'Home',
    items: [
      { title: 'My Dashboard', href: '#overview' },
      { title: 'Daily Tracking', href: '#daily-tracking' },
      { title: 'MAKTech ChatBox', href: '#chatbox' },
    ],
  },
  {
    title: 'OPERATIONS',
    icon: 'Wrench',
    items: [
      { title: 'Meeting Scheduling', href: '#meeting-scheduling' },
    ],
  },
  {
    title: 'WORK',
    icon: 'Briefcase',
    items: [
      { title: 'All Orders', href: '#all-orders' },
      { title: 'My Assigned Orders', href: '#assigned-orders' },
      { title: 'Revision Orders', href: '#revision-orders' },
      { title: 'Old Order Revision', href: '#old-order-revision' },
      { title: 'Cancel Page', href: '#cancel-page' },
      { title: 'Dispute Orders', href: '#dispute-orders' },
      { title: 'My Target & Bonus', href: '#target-bonus' },
    ],
  },
  {
    title: 'MAKTECH-HRM',
    icon: 'Contact',
    items: [
      { title: 'My Details', href: '#my-details' },
      { title: 'My HRM Dashboard', href: '#hrm-dashboard' },
      { title: 'My Attendance', href: '#my-attendance' },
      { title: 'My Leaves', href: '#my-leaves' },
      { title: 'Apply for Leave', href: '#apply-leave' },
      { title: 'Compliance Documents', href: '#compliance-documents' },
      { title: 'IT Support Tickets', href: '#it-support-tickets' },
    ],
  },
];

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

export const METRIC_CARDS: MetricData[] = [
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: '$128,450',
    change: '+14.6%',
    isPositive: true,
    timeframe: 'vs last month',
    icon: 'DollarSign',
    colorScheme: 'indigo',
    chartData: [40, 52, 48, 65, 59, 78, 85],
  },
  {
    id: 'active_users',
    title: 'Active Users',
    value: '24,890',
    change: '+8.2%',
    isPositive: true,
    timeframe: 'vs last month',
    icon: 'Users',
    colorScheme: 'emerald',
    chartData: [30, 42, 55, 60, 68, 72, 90],
  },
  {
    id: 'conversions',
    title: 'Conversion Rate',
    value: '3.84%',
    change: '-1.4%',
    isPositive: false,
    timeframe: 'vs last month',
    icon: 'TrendingUp',
    colorScheme: 'amber',
    chartData: [60, 55, 58, 48, 52, 45, 42],
  },
  {
    id: 'deployments',
    title: 'Deployments',
    value: '438',
    change: '+28.5%',
    isPositive: true,
    timeframe: 'vs last month',
    icon: 'Rocket',
    colorScheme: 'sky',
    chartData: [20, 35, 45, 60, 70, 85, 95],
  },
];

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

export const RECENT_ACTIVITIES: ActivityItem[] = [
  {
    id: '1',
    user: {
      name: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      email: 'alex.r@devflow.io',
    },
    action: 'Deployed new release',
    target: 'v2.4.0 Production API',
    time: '5 minutes ago',
    status: 'completed',
    badgeType: 'Production',
  },
  {
    id: '2',
    user: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      email: 'elena.r@devflow.io',
    },
    action: 'Merged pull request #342',
    target: 'feat/auth-redesign',
    time: '24 minutes ago',
    status: 'completed',
    badgeType: 'GitHub',
  },
  {
    id: '3',
    user: {
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      email: 'marcus.c@devflow.io',
    },
    action: 'Database index optimization',
    target: 'PostgreSQL Analytics Cluster',
    time: '2 hours ago',
    status: 'in-progress',
    badgeType: 'Database',
  },
  {
    id: '4',
    user: {
      name: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      email: 'sarah.j@devflow.io',
    },
    action: 'Triggered integration test suite',
    target: 'Billing & Stripe Webhook Service',
    time: '4 hours ago',
    status: 'completed',
    badgeType: 'CI/CD',
  },
  {
    id: '5',
    user: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      email: 'david.k@devflow.io',
    },
    action: 'SSL Certificate Renewal Alert',
    target: 'auth.devflow.cloud',
    time: '6 hours ago',
    status: 'pending',
    badgeType: 'Security',
  },
];
