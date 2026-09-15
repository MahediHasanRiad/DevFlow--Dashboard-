import { FileText, Clock, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { type UserActivity } from '@/features/my-dashboard/types';

interface ActivitiesTodayProps {
  activities?: UserActivity[];
}

export function ActivitiesToday({ activities = [] }: ActivitiesTodayProps) {
  return (
    <Card className="relative overflow-hidden border border-border/70 bg-card p-5 h-full flex flex-col justify-between">
      {/* Emerald left accent border highlight */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l" />

      <div>
        {/* Header */}
        <div className="flex items-start justify-between pb-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
              <FileText className="h-4 w-4 text-emerald-500" />
              <span>Activities Today</span>
            </div>
            <p className="text-[11px] text-muted-foreground font-medium">
              My completed tasks + activities logged today
            </p>
          </div>
        </div>

        {/* Content list or Empty State */}
        {activities.length === 0 ? (
          <div className="py-14 flex items-center justify-center text-center text-xs text-muted-foreground italic font-medium">
            No activities logged today yet.
          </div>
        ) : (
          <div className="space-y-3 pt-2 max-h-56 overflow-y-auto">
            {activities.map((act) => (
              <div
                key={act.id}
                className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 px-3 py-2 text-xs"
              >
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>{act.text}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{act.time}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
