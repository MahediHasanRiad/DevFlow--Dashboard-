import React, { useState, ReactNode } from 'react';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { NavItem } from '@/types/navigation';

interface DashboardLayoutProps {
  children?: ReactNode;
  activeNavId?: string;
  onNavigate?: (navId: string) => void;
  pageTitle?: string;
  categoryTitle?: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  activeNavId = 'my-dashboard',
  onNavigate,
  pageTitle = 'My Dashboard',
  categoryTitle = 'OVERVIEW',
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleSelectItem = (item: NavItem, groupTitle: string) => {
    setIsMobileNavOpen(false);
    if (onNavigate) {
      onNavigate(item.id);
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-50 text-gray-900 overflow-hidden relative">
      {/* Persistent Sidebar */}
      <Sidebar
        activeItemId={activeNavId}
        onSelectItem={handleSelectItem}
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />

      {/* Main Viewport Slot */}
      <div className="flex-1 h-screen flex flex-col bg-gray-50 overflow-hidden relative">
        <Header
          currentCategory={categoryTitle}
          currentPageTitle={pageTitle}
          onOpenMobileNav={() => setIsMobileNavOpen(true)}
        />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 flex flex-col">
          <div className="max-w-[1400px] w-full mx-auto flex flex-col gap-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
