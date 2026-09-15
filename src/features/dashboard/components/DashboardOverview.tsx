import { METRIC_CARDS } from '@/lib/constants';
import { MetricCard } from './MetricCard';
import { AnalyticsCharts } from './AnalyticsCharts';
import { ActivityFeed } from './ActivityFeed';
import { Button } from '@/components/ui/button';
import { Sparkles, Download } from 'lucide-react';

interface DashboardOverviewProps {
  onOpenQuickAction?: () => void;
}

export function DashboardOverview({ onOpenQuickAction }: DashboardOverviewProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground flex items-center gap-2.5">
            Engineering & Operations Overview
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary border border-primary/20">
              <Sparkles className="h-3 w-3" /> Live
            </span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Monitor real-time system performance, deployments, traffic metrics, and sprint progress.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button variant="outline" size="sm" className="gap-2 text-xs shadow-subtle">
            <Download className="h-3.5 w-3.5" />
            <span>Export Report</span>
          </Button>
          <Button
            size="sm"
            onClick={onOpenQuickAction}
            className="gap-2 text-xs shadow-sm hover:shadow-glow-primary"
          >
            <span>+ New Project</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {METRIC_CARDS.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      <AnalyticsCharts />

      <ActivityFeed />
    </div>
  );
}
