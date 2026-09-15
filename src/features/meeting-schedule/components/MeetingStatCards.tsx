import { Calendar, Clock, CheckSquare, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { type MeetingStats } from '@/features/meeting-schedule/types';

interface MeetingStatCardsProps {
  stats?: MeetingStats;
}

export function MeetingStatCards({
  stats = {
    meetingsToday: 0,
    upcoming24h: 0,
    totalDone: 0,
    totalMeetings: 0,
    totalCancelled: 0,
  },
}: MeetingStatCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* 1. MEETINGS TODAY */}
      <Card className="relative p-5 border border-border/70 bg-card hover:border-border transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 text-emerald-500" />
            <span>MEETINGS TODAY</span>
          </div>
          <Search className="h-3.5 w-3.5 text-muted-foreground/60" />
        </div>

        <div className="mt-3 text-3xl font-extrabold text-emerald-500 dark:text-emerald-400 tracking-tight">
          {stats.meetingsToday}
        </div>

        <div className="mt-1 text-xs text-muted-foreground font-medium">
          Click for team breakdown
        </div>
      </Card>

      {/* 2. UPCOMING (NEXT 24H) - Highlighted Warm Amber Card */}
      <div className="relative rounded-xl p-5 bg-[#fef08a] dark:bg-[#fde047] text-[#1c1917] border border-amber-300 shadow-sm transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#78350f]">
            <Clock className="h-3.5 w-3.5 text-[#b45309]" />
            <span>UPCOMING (NEXT 24H)</span>
          </div>
          <Search className="h-3.5 w-3.5 text-[#78350f]/70" />
        </div>

        <div className="mt-3 text-3xl font-extrabold text-[#78350f] tracking-tight">
          {stats.upcoming24h}
        </div>

        <div className="mt-1 text-xs text-[#78350f]/80 font-medium">
          Reminders fire automatically
        </div>
      </div>

      {/* 3. TOTAL DONE */}
      <Card className="relative p-5 border border-border/70 bg-card hover:border-border transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            <CheckSquare className="h-3.5 w-3.5 text-sky-500" />
            <span>TOTAL DONE</span>
          </div>
          <Search className="h-3.5 w-3.5 text-muted-foreground/60" />
        </div>

        <div className="mt-3 text-3xl font-extrabold text-sky-500 dark:text-sky-400 tracking-tight">
          {stats.totalDone}
        </div>

        <div className="mt-1 text-xs text-muted-foreground font-medium">
          {stats.totalMeetings} total · {stats.totalCancelled} cancelled
        </div>
      </Card>
    </div>
  );
}
