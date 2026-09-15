import { useState } from 'react';
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { type MeetingItem, type MeetingFilters } from '@/features/meeting-schedule/types';

interface MeetingScheduleTableProps {
  meetings?: MeetingItem[];
  onAddMeeting?: () => void;
}

export function MeetingScheduleTable({
  meetings = [],
}: MeetingScheduleTableProps) {
  const [filters, setFilters] = useState<MeetingFilters>({
    startDate: '',
    endDate: '',
    searchQuery: '',
    salesStatus: 'all',
    opsStatus: 'all',
    lifecycle: 'all',
  });

  const handleClear = () => {
    setFilters({
      startDate: '',
      endDate: '',
      searchQuery: '',
      salesStatus: 'all',
      opsStatus: 'all',
      lifecycle: 'all',
    });
  };

  return (
    <Card className="border border-border/70 bg-card overflow-hidden">
      {/* Header & Filter Bar Toolbar */}
      <div className="p-4 sm:p-5 border-b border-border/60 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        {/* Left: Title & Legend */}
        <div className="space-y-1">
          <h2 className="text-sm font-bold text-foreground tracking-tight">
            Meeting Schedule ({meetings.length})
          </h2>
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-medium">
            <span>Sales Status color:</span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-rose-500 inline-block" /> &lt;1h
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-amber-400 inline-block" /> &lt;24h
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" /> Done
            </span>
          </div>
        </div>

        {/* Right: Filters Toolbar */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Date range pickers */}
          <div className="flex items-center gap-1.5 bg-muted/40 border border-border/80 rounded-lg px-2 py-1">
            <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              value={filters.startDate}
              onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
              className="bg-transparent text-xs w-20 text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <span className="text-muted-foreground text-[10px]">to</span>
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              value={filters.endDate}
              onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
              className="bg-transparent text-xs w-20 text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Order ID / Team..."
            value={filters.searchQuery}
            onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
            className="h-8 rounded-lg border border-border/80 bg-muted/40 px-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-32 sm:w-36"
          />

          {/* Sales Status dropdown */}
          <div className="relative">
            <select
              value={filters.salesStatus}
              onChange={(e) => setFilters({ ...filters, salesStatus: e.target.value })}
              className="h-8 appearance-none rounded-lg border border-border/80 bg-muted/40 pl-2.5 pr-7 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
            >
              <option value="all">All Sales Status</option>
              <option value="urgent">&lt;1h Urgent</option>
              <option value="upcoming">&lt;24h Upcoming</option>
              <option value="done">Done</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
          </div>

          {/* Ops Status dropdown */}
          <div className="relative">
            <select
              value={filters.opsStatus}
              onChange={(e) => setFilters({ ...filters, opsStatus: e.target.value })}
              className="h-8 appearance-none rounded-lg border border-border/80 bg-muted/40 pl-2.5 pr-7 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
            >
              <option value="all">All Ops Status</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
          </div>

          {/* Lifecycle dropdown */}
          <div className="relative">
            <select
              value={filters.lifecycle}
              onChange={(e) => setFilters({ ...filters, lifecycle: e.target.value })}
              className="h-8 appearance-none rounded-lg border border-border/80 bg-muted/40 pl-2.5 pr-7 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
            >
              <option value="all">All Lifecycle</option>
              <option value="scheduled">Scheduled</option>
              <option value="in-progress">In-Progress</option>
              <option value="completed">Completed</option>
              <option value="verified">Verified</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
          </div>

          {/* Clear Button */}
          <button
            onClick={handleClear}
            className="h-8 px-3 rounded-lg border border-border/80 bg-muted/30 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Table Area */}
      <div className="overflow-x-auto min-h-[300px]">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-border/60 text-muted-foreground font-semibold bg-muted/20 uppercase text-[10px] tracking-wider whitespace-nowrap">
              <th className="py-3 px-4 font-bold">DATE CREATED</th>
              <th className="py-3 px-4 font-bold">CLIENT / ORDER ID</th>
              <th className="py-3 px-4 font-bold">MEETING DATE / TIME</th>
              <th className="py-3 px-4 font-bold">REMAINING TIME</th>
              <th className="py-3 px-4 font-bold">ASSIGNED TEAM</th>
              <th className="py-3 px-4 font-bold">MEETING TYPE</th>
              <th className="py-3 px-4 font-bold">MEETING LINK</th>
              <th className="py-3 px-4 font-bold">SALES STATUS</th>
              <th className="py-3 px-4 font-bold">OPS STATUS</th>
              <th className="py-3 px-4 font-bold">LIFECYCLE</th>
              <th className="py-3 px-4 font-bold">CREATED BY</th>
              <th className="py-3 px-4 font-bold text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {meetings.length === 0 ? (
              <tr>
                <td colSpan={12} className="py-16 text-center">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    {/* Big Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/20 shadow-subtle">
                      <CalendarIcon className="h-7 w-7 text-sky-500" />
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-bold text-foreground">
                        No meetings scheduled
                      </p>
                      <p className="text-xs text-muted-foreground font-medium">
                        Click &quot;+ Add Meeting&quot; to get started.
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            ) : (
              meetings.map((m) => (
                <tr
                  key={m.id}
                  className="border-b border-border/40 hover:bg-muted/30 transition-colors whitespace-nowrap"
                >
                  <td className="py-3 px-4 text-muted-foreground">{m.dateCreated}</td>
                  <td className="py-3 px-4 font-semibold text-foreground">{m.clientOrderId}</td>
                  <td className="py-3 px-4 text-foreground">{m.meetingDateTime}</td>
                  <td className="py-3 px-4 text-muted-foreground">{m.remainingTime}</td>
                  <td className="py-3 px-4 font-medium text-foreground">{m.assignedTeam}</td>
                  <td className="py-3 px-4 text-muted-foreground">{m.meetingType}</td>
                  <td className="py-3 px-4 text-primary underline">{m.meetingLink}</td>
                  <td className="py-3 px-4">{m.salesStatus}</td>
                  <td className="py-3 px-4">{m.opsStatus}</td>
                  <td className="py-3 px-4">{m.lifecycle}</td>
                  <td className="py-3 px-4 text-muted-foreground">{m.createdBy}</td>
                  <td className="py-3 px-4 text-right font-medium">
                    <button className="text-xs text-primary hover:underline">Edit</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
