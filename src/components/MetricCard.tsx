import React from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
  Users,
  TrendingUp,
  TrendingDown,
  Rocket,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { type MetricData } from '@/lib/constants';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  DollarSign,
  Users,
  TrendingUp,
  Rocket,
};

const colorStyles = {
  indigo: {
    bg: 'bg-primary/10 text-primary',
    glow: 'group-hover:border-primary/40',
    line: 'stroke-primary',
    gradient: 'from-primary/20 to-transparent',
  },
  emerald: {
    bg: 'bg-emerald-500/10 text-emerald-500',
    glow: 'group-hover:border-emerald-500/40',
    line: 'stroke-emerald-500',
    gradient: 'from-emerald-500/20 to-transparent',
  },
  amber: {
    bg: 'bg-amber-500/10 text-amber-500',
    glow: 'group-hover:border-amber-500/40',
    line: 'stroke-amber-500',
    gradient: 'from-amber-500/20 to-transparent',
  },
  sky: {
    bg: 'bg-sky-500/10 text-sky-500',
    glow: 'group-hover:border-sky-500/40',
    line: 'stroke-sky-500',
    gradient: 'from-sky-500/20 to-transparent',
  },
};

export function MetricCard({ metric }: { metric: MetricData }) {
  const IconComponent = iconMap[metric.icon] || TrendingUp;
  const style = colorStyles[metric.colorScheme] || colorStyles.indigo;

  // Generate SVG Sparkline coordinates
  const points = metric.chartData;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const width = 100;
  const height = 36;
  const pathData = points
    .map((val, idx) => {
      const x = (idx / (points.length - 1)) * width;
      const y = height - ((val - min) / range) * (height - 8) - 4;
      return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  const areaData = `${pathData} L ${width} ${height} L 0 ${height} Z`;

  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      className="h-full"
    >
      <Card className={cn('group p-5 relative overflow-hidden transition-all duration-200 hover:shadow-premium dark:hover:shadow-premium-dark', style.glow)}>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {metric.title}
            </span>
            <div className="text-2xl font-bold tracking-tight text-foreground">
              {metric.value}
            </div>
          </div>

          <div className={cn('flex h-10 w-10 items-center justify-center rounded-xl shadow-subtle transition-transform group-hover:scale-110', style.bg)}>
            <IconComponent className="h-5 w-5" />
          </div>
        </div>

        {/* Trend Indicator & Sparkline */}
        <div className="mt-4 flex items-end justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span
              className={cn(
                'inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold',
                metric.isPositive
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                  : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
              )}
            >
              {metric.isPositive ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {metric.change}
            </span>
            <span className="text-[11px] text-muted-foreground">{metric.timeframe}</span>
          </div>

          {/* Sparkline Graphic */}
          <div className="w-24 h-9 relative">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id={`grad-${metric.id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" className={cn('text-primary', style.line)} stopColor="currentColor" stopOpacity="0.25" />
                  <stop offset="100%" className={cn('text-primary', style.line)} stopColor="currentColor" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path d={areaData} fill={`url(#grad-${metric.id})`} />
              <path
                d={pathData}
                fill="none"
                className={cn('stroke-2', style.line)}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
