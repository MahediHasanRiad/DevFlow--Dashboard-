import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

type TimeRange = '7d' | '30d' | '90d' | '12m';

export function AnalyticsCharts() {
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');
  const [activeDataIndex, setActiveDataIndex] = useState<number | null>(4);

  const chartDataSets: Record<TimeRange, { label: string; value: number; secondary: number }[]> = {
    '7d': [
      { label: 'Mon', value: 34, secondary: 22 },
      { label: 'Tue', value: 45, secondary: 28 },
      { label: 'Wed', value: 58, secondary: 36 },
      { label: 'Thu', value: 52, secondary: 30 },
      { label: 'Fri', value: 68, secondary: 45 },
      { label: 'Sat', value: 74, secondary: 50 },
      { label: 'Sun', value: 85, secondary: 62 },
    ],
    '30d': [
      { label: 'Week 1', value: 42, secondary: 28 },
      { label: 'Week 2', value: 65, secondary: 40 },
      { label: 'Week 3', value: 55, secondary: 48 },
      { label: 'Week 4', value: 88, secondary: 60 },
      { label: 'Week 5', value: 96, secondary: 72 },
    ],
    '90d': [
      { label: 'Jan', value: 120, secondary: 85 },
      { label: 'Feb', value: 160, secondary: 110 },
      { label: 'Mar', value: 210, secondary: 145 },
    ],
    '12m': [
      { label: 'Q1', value: 380, secondary: 240 },
      { label: 'Q2', value: 450, secondary: 310 },
      { label: 'Q3', value: 540, secondary: 390 },
      { label: 'Q4', value: 690, secondary: 480 },
    ],
  };

  const currentData = chartDataSets[timeRange];
  const maxValue = Math.max(...currentData.map((d) => Math.max(d.value, d.secondary))) * 1.15;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 shadow-subtle hover:shadow-premium dark:hover:shadow-premium-dark transition-all duration-200">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <CardTitle>Performance & Revenue Overview</CardTitle>
              <Badge variant="success" className="gap-1 text-[10px] hidden sm:inline-flex">
                <ArrowUpRight className="h-3 w-3" /> +24.8% YoY
              </Badge>
            </div>
            <CardDescription>
              Comparing direct revenue generated vs operational cloud costs.
            </CardDescription>
          </div>

          <div className="flex items-center rounded-lg border border-border bg-muted/60 p-1 text-xs">
            {(['7d', '30d', '90d', '12m'] as TimeRange[]).map((range) => (
              <button
                key={range}
                onClick={() => {
                  setTimeRange(range);
                  setActiveDataIndex(0);
                }}
                className={cn(
                  'rounded-md px-2.5 py-1 font-semibold transition-all capitalize',
                  timeRange === range
                    ? 'bg-card text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {range}
              </button>
            ))}
          </div>
        </CardHeader>

        <CardContent>
          <div className="h-64 w-full pt-4">
            <div className="relative h-48 w-full flex items-end justify-between gap-2 sm:gap-6 px-2 border-b border-border/80">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                <div className="border-b border-dashed border-border w-full" />
                <div className="border-b border-dashed border-border w-full" />
                <div className="border-b border-dashed border-border w-full" />
                <div className="border-b border-dashed border-border w-full" />
              </div>

              {currentData.map((item, idx) => {
                const heightPrimary = (item.value / maxValue) * 100;
                const heightSecondary = (item.secondary / maxValue) * 100;
                const isHovered = activeDataIndex === idx;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveDataIndex(idx)}
                    className="relative flex-1 flex flex-col items-center justify-end h-full group cursor-pointer z-10"
                  >
                    {isHovered && (
                      <div className="absolute -top-12 z-20 flex flex-col items-center rounded-lg bg-foreground text-background px-2.5 py-1 shadow-lg text-[11px] font-semibold whitespace-nowrap animate-fade-in">
                        <span>Revenue: ${item.value}k</span>
                        <span className="text-[9px] opacity-80">Cost: ${item.secondary}k</span>
                        <div className="absolute -bottom-1 h-2 w-2 rotate-45 bg-foreground" />
                      </div>
                    )}

                    <div className="w-full max-w-[42px] flex items-end justify-center gap-1.5 h-full">
                      <div
                        style={{ height: `${heightSecondary}%` }}
                        className={cn(
                          'w-1/2 rounded-t-md bg-secondary/80 transition-all duration-300 group-hover:bg-secondary',
                          isHovered && 'bg-violet-400/40 dark:bg-violet-500/40'
                        )}
                      />
                      <div
                        style={{ height: `${heightPrimary}%` }}
                        className={cn(
                          'w-1/2 rounded-t-md bg-primary transition-all duration-300 group-hover:bg-primary-hover shadow-sm',
                          isHovered && 'shadow-glow-primary scale-y-[1.02]'
                        )}
                      />
                    </div>

                    <span
                      className={cn(
                        'mt-3 text-xs font-medium transition-colors',
                        isHovered ? 'text-primary font-bold' : 'text-muted-foreground'
                      )}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-primary" />
                <span className="font-medium text-foreground">Gross Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-secondary border border-border" />
                <span>Operating Expenses</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-subtle hover:shadow-premium dark:hover:shadow-premium-dark transition-all duration-200">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle>Traffic Channels</CardTitle>
            <button className="text-muted-foreground hover:text-foreground">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
          <CardDescription>Breakdown by incoming referral traffic.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-5 pt-2">
          <div className="flex justify-center items-center py-2">
            <div className="relative flex items-center justify-center h-36 w-36">
              <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  className="text-muted/40"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="transparent"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3.5"
                  strokeDasharray="48 52"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="transparent"
                  stroke="#10b981"
                  strokeWidth="3.5"
                  strokeDasharray="32 68"
                  strokeDashoffset="-48"
                  strokeLinecap="round"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="transparent"
                  stroke="#f59e0b"
                  strokeWidth="3.5"
                  strokeDasharray="20 80"
                  strokeDashoffset="-80"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-xl font-bold text-foreground">68.4k</span>
                <span className="text-[10px] text-muted-foreground font-medium">Total Visits</span>
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="font-medium text-foreground">Organic Search</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground">48%</span>
                <span className="text-muted-foreground text-[11px]">(32.8k)</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="font-medium text-foreground">Direct Traffic</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground">32%</span>
                <span className="text-muted-foreground text-[11px]">(21.9k)</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                <span className="font-medium text-foreground">Social & Referrals</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground">20%</span>
                <span className="text-muted-foreground text-[11px]">(13.7k)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
