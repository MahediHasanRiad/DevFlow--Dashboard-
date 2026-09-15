import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';
import { useTheme } from '@/hooks/useTheme';

interface LayoutProps {
  children: React.ReactNode;
  activeRoute: string;
  setActiveRoute: (route: string) => void;
  onOpenQuickAction?: () => void;
}

export function Layout({
  children,
  activeRoute,
  setActiveRoute,
  onOpenQuickAction,
}: LayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-row">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
        onOpenQuickAction={onOpenQuickAction}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          onOpenQuickAction={onOpenQuickAction}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
}
