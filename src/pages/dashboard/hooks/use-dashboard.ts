import { useState, useMemo } from 'react';
import { DashboardViewState } from '../types';
import { navigationConfig } from '@/components/layout/sidebar';

export const useDashboard = () => {
  const [activeNavId, setActiveNavId] = useState<string>('my-dashboard');

  const activeDetails = useMemo<DashboardViewState>(() => {
    for (const group of navigationConfig) {
      const found = group.items.find((item) => item.id === activeNavId);
      if (found) {
        return {
          activeNavId: found.id,
          activeNavLabel: found.label,
          activeCategory: group.title,
        };
      }
    }
    return {
      activeNavId: 'my-dashboard',
      activeNavLabel: 'My Dashboard',
      activeCategory: 'OVERVIEW',
    };
  }, [activeNavId]);

  const handleNavigate = (navId: string) => {
    setActiveNavId(navId);
  };

  return {
    activeNavId,
    activeNavLabel: activeDetails.activeNavLabel,
    activeCategory: activeDetails.activeCategory,
    handleNavigate,
  };
};
