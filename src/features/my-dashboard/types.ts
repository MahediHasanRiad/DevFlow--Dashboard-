export interface AssignedOrder {
  id: string;
  orderNumber: string;
  type: string;
  client: string;
  total: string;
  deadline: string;
  remaining: string;
  status: 'pending' | 'in-progress' | 'delivered' | 'revision' | 'cancelled';
}

export interface DayTask {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

export interface UserActivity {
  id: string;
  text: string;
  time: string;
  type: 'order' | 'task' | 'meeting' | 'system';
}

export interface UserPerformance {
  userName: string;
  role: string;
  targetPercent: number;
  currentEarning: number;
  monthlyTarget: number;
  bonusEarned: number;
  deliveryStreakDays: number;
  avgCycleDays: number;
  revisionsCount: number;
  deliveredCount: number;
}
