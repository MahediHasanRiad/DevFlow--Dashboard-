import { Search } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface MetricStatCardsProps {
  monthlyTarget?: number;
  earnedThisMonth?: number;
  bonusAccumulated?: number;
  teamName?: string;
}

export function MetricStatCards({
  monthlyTarget = 0,
  earnedThisMonth = 0,
  bonusAccumulated = 0,
  teamName = 'No team',
}: MetricStatCardsProps) {
  const cards = [
    {
      title: 'MONTHLY TARGET',
      value: `$${monthlyTarget}`,
      subtitle: 'Personal earning goal',
    },
    {
      title: 'EARNED THIS MONTH',
      value: `$${earnedThisMonth}`,
      subtitle: `${monthlyTarget > 0 ? ((earnedThisMonth / monthlyTarget) * 100).toFixed(0) : 0}% of target`,
    },
    {
      title: 'BONUS ACCUMULATED',
      value: `$${bonusAccumulated}`,
      subtitle: 'Surplus above target',
    },
    {
      title: 'TEAM',
      value: '—',
      subtitle: teamName,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, idx) => (
        <Card
          key={idx}
          className="relative overflow-hidden p-5 border border-border/70 bg-card hover:border-border transition-all duration-150"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-wider uppercase text-muted-foreground">
              {card.title}
            </span>
            <button
              className="text-muted-foreground/60 hover:text-foreground transition-colors p-1"
              aria-label="Filter or view metric details"
            >
              <Search className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Main Value */}
          <div className="mt-3 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            {card.value}
          </div>

          {/* Subtitle */}
          <div className="mt-1 text-xs text-muted-foreground font-medium">
            {card.subtitle}
          </div>
        </Card>
      ))}
    </div>
  );
}
