import { DashboardOverview } from '@/features/dashboard/components/DashboardOverview';

interface DashboardPageProps {
  activeRoute?: string;
  onOpenQuickAction: () => void;
}

export function DashboardPage({ onOpenQuickAction }: DashboardPageProps) {
  return (
    <div>
      <DashboardOverview onOpenQuickAction={onOpenQuickAction} />
    </div>
  );
}

export default DashboardPage;
