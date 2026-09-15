import { Flame, Clock, RefreshCw, CheckCircle2, Info } from 'lucide-react';

interface QuickStreakPillsProps {
  deliveryStreakDays?: number;
  avgCycleDays?: number;
  revisionsCount?: number;
  deliveredCount?: number;
  targetPercent?: number;
  bonusEarned?: number;
}

export function QuickStreakPills({
  deliveryStreakDays = 0,
  avgCycleDays = 0,
  revisionsCount = 0,
  deliveredCount = 0,
  targetPercent = 0,
  bonusEarned = 0,
}: QuickStreakPillsProps) {
  return (
    <div className="space-y-3.5">
      {/* Pills Row */}
      <div className="flex flex-wrap items-center gap-2.5">
        {/* Streak Pill */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-500 dark:text-amber-400">
          <Flame className="h-3.5 w-3.5 fill-amber-500/30 text-amber-500" />
          <span>{deliveryStreakDays}-day delivery streak</span>
        </div>

        {/* Avg Cycle Pill */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold text-sky-500 dark:text-sky-400">
          <Clock className="h-3.5 w-3.5 text-sky-500" />
          <span>Avg cycle: {avgCycleDays} days</span>
        </div>

        {/* Revisions Pill */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold text-violet-500 dark:text-violet-400">
          <RefreshCw className="h-3.5 w-3.5 text-violet-500" />
          <span>Revisions: {revisionsCount}</span>
        </div>

        {/* Delivered Pill */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-500 dark:text-emerald-400">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
          <span>Delivered: {deliveredCount}</span>
        </div>
      </div>

      {/* Info Notice Banner */}
      <div className="flex items-center gap-2.5 rounded-xl border border-sky-500/20 bg-sky-500/10 dark:bg-[#0f1d30] px-4 py-2.5 text-xs text-sky-700 dark:text-sky-300">
        <Info className="h-4 w-4 shrink-0 text-sky-500" />
        <span>
          You're at <strong className="font-bold">{targetPercent}%</strong> of your monthly target. Bonus earned so far: <strong className="font-bold">${bonusEarned}</strong>
        </span>
      </div>
    </div>
  );
}
