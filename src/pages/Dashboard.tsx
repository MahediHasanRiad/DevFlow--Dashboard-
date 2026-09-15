import { DashboardOverview } from '@/components/DashboardOverview';

interface DashboardPageProps {
  activeRoute?: string;
  onOpenQuickAction: () => void;
}

export function Dashboard({ onOpenQuickAction }: DashboardPageProps) {
  return (
    <div>
      <DashboardOverview onOpenQuickAction={onOpenQuickAction} />
    </div>
  );
}
