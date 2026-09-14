import React from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DashboardOverview } from './components/dashboard-overview';
import { useDashboard } from './hooks/use-dashboard';

export const DashboardPage: React.FC = () => {
  const { activeNavId, activeNavLabel, activeCategory, handleNavigate } = useDashboard();

  return (
    <DashboardLayout
      activeNavId={activeNavId}
      onNavigate={handleNavigate}
      pageTitle={activeNavLabel}
      categoryTitle={activeCategory}
    >
      <DashboardOverview activeNavLabel={activeNavLabel} />
    </DashboardLayout>
  );
};

export default DashboardPage;
