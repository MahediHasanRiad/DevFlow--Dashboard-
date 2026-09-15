import { useState } from 'react';
import { MeetingScheduleNotice } from './MeetingScheduleNotice';
import { MeetingStatCards } from './MeetingStatCards';
import { MeetingScheduleTable } from './MeetingScheduleTable';
import { type MeetingItem, type MeetingStats } from '@/features/meeting-schedule/types';

export function MeetingScheduleView() {
  const [meetings] = useState<MeetingItem[]>([]);
  const [stats] = useState<MeetingStats>({
    meetingsToday: 0,
    upcoming24h: 0,
    totalDone: 0,
    totalMeetings: 0,
    totalCancelled: 0,
  });

  return (
    <div className="space-y-6 animate-fade-in max-w-7xl mx-auto">
      {/* 1. Subtitle, Audit View Notice, and Workflow Banner */}
      <MeetingScheduleNotice />

      {/* 2. 3-Card KPI Metrics */}
      <MeetingStatCards stats={stats} />

      {/* 3. Meeting Schedule Table with Filters & Empty State */}
      <MeetingScheduleTable meetings={meetings} />
    </div>
  );
}
