import { useState } from 'react';
import { PerformanceBanner } from './PerformanceBanner';
import { QuickStreakPills } from './QuickStreakPills';
import { MetricStatCards } from './MetricStatCards';
import { RecentAssignedOrders } from './RecentAssignedOrders';
import { DayFocusTasks } from './DayFocusTasks';
import { ActivitiesToday } from './ActivitiesToday';
import { type AssignedOrder, type DayTask, type UserActivity } from '@/features/my-dashboard/types';

export function MyDashboardView() {
  const [orders] = useState<AssignedOrder[]>([]);
  const [activities, setActivities] = useState<UserActivity[]>([]);

  const handleTaskAdded = (task: DayTask) => {
    const newActivity: UserActivity = {
      id: Date.now().toString(),
      text: `Added task: "${task.text}"`,
      time: task.createdAt,
      type: 'task',
    };
    setActivities((prev) => [newActivity, ...prev]);
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-7xl mx-auto">
      {/* 1. Performance Welcome Banner */}
      <PerformanceBanner
        userName="MAHEDI"
        targetPercent={0}
        currentEarning={0}
        monthlyTarget={0}
      />

      {/* 2. Quick Streak Pills & Info Notice */}
      <QuickStreakPills
        deliveryStreakDays={0}
        avgCycleDays={0}
        revisionsCount={0}
        deliveredCount={0}
        targetPercent={0}
        bonusEarned={0}
      />

      {/* 3. 4-Column Metric Stat Cards */}
      <MetricStatCards
        monthlyTarget={0}
        earnedThisMonth={0}
        bonusAccumulated={0}
        teamName="No team"
      />

      {/* 4. Recent Assigned Orders Table */}
      <RecentAssignedOrders orders={orders} />

      {/* 5. Bottom Section: Day Focus Tasks + Activities Today */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DayFocusTasks onTaskAdded={handleTaskAdded} />
        <ActivitiesToday activities={activities} />
      </div>
    </div>
  );
}
