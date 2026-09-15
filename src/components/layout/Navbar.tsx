import { useState, useEffect } from 'react';
import {
  Search,
  Bell,
  Sun,
  Moon,
  Menu,
  LifeBuoy,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Theme } from '@/hooks/useTheme';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  onOpenMobileMenu: () => void;
  title?: string;
}

export function Navbar({
  theme,
  toggleTheme,
  onOpenMobileMenu,
  title = 'My Dashboard',
}: NavbarProps) {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      };
      setCurrentDateTime(now.toLocaleString('en-US', options));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-border/80 bg-background/95 px-4 sm:px-6 backdrop-blur-md">
      {/* Left: Mobile menu toggle + Page Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="flex md:hidden h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Open mobile menu"
        >
          <Menu className="h-4 w-4" />
        </button>

        <h1 className="text-base sm:text-lg font-bold text-foreground tracking-tight whitespace-nowrap">
          {title}
        </h1>
      </div>

      {/* Center: Global Search Input */}
      <div className="hidden sm:flex items-center flex-1 max-w-md mx-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Search people, orders, clients, and more..."
            className="h-8 w-full rounded-xl border border-border/70 bg-card/60 pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground/80 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Right: Date, Support, Theme Switcher, Notifications */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Date / Time string */}
        <div className="hidden lg:flex flex-col text-right leading-none">
          <span className="text-[11px] font-semibold text-muted-foreground">
            {currentDateTime || 'Tue, Sep 15, 2026 12:01 PM'}
          </span>
        </div>

        {/* Support button */}
        <Button
          variant="outline"
          size="sm"
          className="h-8 gap-1.5 text-xs font-semibold px-2.5 rounded-lg border-border/80 bg-card/60 text-muted-foreground hover:text-foreground shadow-subtle"
        >
          <LifeBuoy className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Support</span>
        </Button>

        {/* Theme switcher */}
        <Button
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className="h-8 gap-1.5 text-xs font-semibold px-2.5 rounded-lg border-border/80 bg-card/60 text-muted-foreground hover:text-foreground shadow-subtle"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <>
              <Sun className="h-3.5 w-3.5 text-amber-400" />
              <span className="hidden sm:inline">Light</span>
            </>
          ) : (
            <>
              <Moon className="h-3.5 w-3.5 text-slate-700" />
              <span className="hidden sm:inline">Dark</span>
            </>
          )}
        </Button>

        {/* Notifications Icon with Badge */}
        <button
          className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-card/60 text-muted-foreground hover:text-foreground transition-colors shadow-subtle"
          aria-label="Notifications"
        >
          <Bell className="h-3.5 w-3.5" />
          <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white shadow-sm ring-1 ring-background">
            21
          </span>
        </button>
      </div>
    </header>
  );
}
