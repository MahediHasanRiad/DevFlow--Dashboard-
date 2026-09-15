import { Eye, Calendar } from 'lucide-react';

export function MeetingScheduleNotice() {
  return (
    <div className="space-y-3">
      {/* Page Subtitle */}
      <p className="text-xs text-muted-foreground font-medium">
        Coordinate client meetings between Sales and the assigned project team
      </p>

      {/* 1. Audit View Banner */}
      <div className="flex items-start sm:items-center gap-2.5 rounded-xl border border-sky-500/30 bg-[#0b1728] dark:bg-[#081220] px-4 py-2.5 text-xs text-sky-400">
        <Eye className="h-4 w-4 shrink-0 text-sky-400 mt-0.5 sm:mt-0" />
        <span className="leading-relaxed">
          <strong className="font-bold text-sky-300">Audit View.</strong> You have view-only access to Meeting Scheduling. The 8 operational roles (Sales/Ops/PC/Team Leader/BD) schedule, update, and cancel meetings. You can browse and audit the schedule, KPIs, and team-by-team breakdowns.
        </span>
      </div>

      {/* 2. Workflow Banner */}
      <div className="flex items-start sm:items-center gap-2.5 rounded-xl border border-sky-400/40 bg-[#dbeafe] dark:bg-[#112340] px-4 py-2.5 text-xs text-[#1e3a8a] dark:text-[#93c5fd] shadow-sm">
        <Calendar className="h-4 w-4 shrink-0 text-[#2563eb] dark:text-[#60a5fa] mt-0.5 sm:mt-0" />
        <span className="leading-relaxed">
          <strong className="font-bold">Meeting Scheduling.</strong> Coordinate client meetings between Sales and the assigned project team. Sales schedules → Ops marks meeting Done → Sales verifies. Reminders fire automatically under 24h to meeting time.
        </span>
      </div>
    </div>
  );
}
