import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { RECENT_ACTIVITIES } from '@/lib/constants';
import { type ActivityItem } from '@/features/dashboard/types';
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function ActivityFeed() {
  const [filter, setFilter] = useState<'all' | 'completed' | 'in-progress'>('all');

  const filteredActivities = RECENT_ACTIVITIES.filter((item) => {
    if (filter === 'all') return true;
    return item.status === filter;
  });

  const getStatusIcon = (status: ActivityItem['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-amber-500 animate-spin" />;
      case 'failed':
        return <AlertCircle className="h-4 w-4 text-rose-500" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadgeVariant = (status: ActivityItem['status']) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'in-progress':
        return 'warning';
      case 'failed':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="shadow-subtle hover:shadow-premium dark:hover:shadow-premium-dark transition-all duration-200">
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <div>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Live deployment & team event stream</CardDescription>
          </div>
          <Badge variant="default" className="text-[10px]">Realtime</Badge>
        </CardHeader>

        <CardContent className="space-y-4 pt-1">
          <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-border">
            {filteredActivities.map((act) => (
              <div key={act.id} className="relative group">
                <div className="absolute -left-6 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-primary ring-2 ring-background">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>

                <div className="flex flex-col space-y-0.5">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-semibold text-foreground truncate">
                      {act.user.name}
                    </span>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                      {act.time}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-foreground/90 font-medium">{act.action}</span>: {act.target}
                  </p>
                  <div className="pt-1">
                    <Badge variant={getStatusBadgeVariant(act.status as any)} className="text-[9px] px-1.5 py-0">
                      {act.badgeType} • {act.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2 shadow-subtle hover:shadow-premium dark:hover:shadow-premium-dark transition-all duration-200">
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <div>
            <CardTitle>Active Projects & Microservices</CardTitle>
            <CardDescription>Status monitoring for ongoing sprint deliverables</CardDescription>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setFilter('all')}
              className={cn(
                'text-xs px-2.5 py-1 rounded-md transition-colors font-medium',
                filter === 'all' ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              All
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={cn(
                'text-xs px-2.5 py-1 rounded-md transition-colors font-medium',
                filter === 'completed' ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter('in-progress')}
              className={cn(
                'text-xs px-2.5 py-1 rounded-md transition-colors font-medium',
                filter === 'in-progress' ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              In Progress
            </button>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-border/80 text-muted-foreground font-semibold">
                  <th className="pb-3 pt-2 font-medium">Service / Project</th>
                  <th className="pb-3 pt-2 font-medium">Lead</th>
                  <th className="pb-3 pt-2 font-medium">Environment</th>
                  <th className="pb-3 pt-2 font-medium">Status</th>
                  <th className="pb-3 pt-2 text-right font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {[
                  {
                    name: 'Cloudflare Edge Worker API',
                    type: 'Gateway',
                    lead: 'Alex Rivera',
                    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
                    env: 'Production',
                    status: 'completed',
                    progress: 100,
                  },
                  {
                    name: 'GraphQL Realtime Engine',
                    type: 'Backend',
                    lead: 'Elena Rostova',
                    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
                    env: 'Staging',
                    status: 'in-progress',
                    progress: 75,
                  },
                  {
                    name: 'Stripe Billing & Subscriptions',
                    type: 'Payments',
                    lead: 'Sarah Jenkins',
                    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
                    env: 'Production',
                    status: 'completed',
                    progress: 100,
                  },
                  {
                    name: 'Postgres Multi-Region Replica',
                    type: 'Database',
                    lead: 'Marcus Chen',
                    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
                    env: 'Production',
                    status: 'in-progress',
                    progress: 60,
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/40 transition-colors group">
                    <td className="py-3 font-semibold text-foreground">
                      <div className="flex flex-col">
                        <span>{row.name}</span>
                        <span className="text-[10px] text-muted-foreground font-normal">{row.type}</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <Avatar src={row.avatar} fallback={row.lead.slice(0, 2)} size="sm" />
                        <span className="text-foreground">{row.lead}</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <span className="rounded border border-border px-2 py-0.5 text-[10px] font-medium bg-muted/60 text-foreground">
                        {row.env}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-1.5">
                        {getStatusIcon(row.status as any)}
                        <span className="capitalize font-medium">{row.status}</span>
                      </div>
                    </td>
                    <td className="py-3 text-right">
                      <button className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-2.5 py-1 text-[11px] font-medium text-foreground hover:bg-muted transition-colors shadow-subtle">
                        <span>View</span>
                        <ChevronRight className="h-3 w-3 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
