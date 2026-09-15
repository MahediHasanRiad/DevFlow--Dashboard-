import { useState } from 'react';
import {
  Search,
  Bell,
  Sun,
  Moon,
  Menu,
  User,
  Settings,
  Shield,
  LogOut,
  Command,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar } from '@/components/ui/avatar';
import { Dropdown, DropdownItem, DropdownSeparator } from '@/components/ui/dropdown';
import { Badge } from '@/components/ui/badge';
import { type Theme } from '@/hooks/useTheme';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  onOpenMobileMenu: () => void;
  onOpenQuickAction?: () => void;
}

export function Navbar({
  theme,
  toggleTheme,
  onOpenMobileMenu,
  onOpenQuickAction,
}: NavbarProps) {
  const [hasNotifications, setHasNotifications] = useState(true);

  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-border/80 bg-background/80 px-4 sm:px-6 backdrop-blur-md">
      <div className="flex items-center gap-3 md:gap-4 flex-1 max-w-lg">
        <button
          onClick={onOpenMobileMenu}
          className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Open mobile menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="relative w-full max-w-sm">
          <Input
            placeholder="Search projects, tasks, metrics... (⌘K)"
            icon={<Search className="h-4 w-4" />}
            className="h-9 bg-card/60 text-xs pr-12 focus-visible:bg-card"
          />
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5 rounded border border-border bg-muted/60 px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
            <Command className="h-2.5 w-2.5" /> K
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Button
          onClick={onOpenQuickAction}
          size="sm"
          className="hidden sm:inline-flex bg-primary font-semibold shadow-sm hover:shadow-glow-primary text-xs"
        >
          + New Project
        </Button>

        <button
          onClick={toggleTheme}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 shadow-subtle active:scale-95"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4 text-amber-400 animate-pulse-subtle" />
          ) : (
            <Moon className="h-4 w-4 text-slate-700" />
          )}
        </button>

        <Dropdown
          align="right"
          className="w-80"
          trigger={
            <button
              className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted transition-all shadow-subtle active:scale-95"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
              {hasNotifications && (
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary ring-2 ring-background animate-ping" />
              )}
              {hasNotifications && (
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
              )}
            </button>
          }
        >
          <div className="p-3 pb-2 border-b border-border/80 flex items-center justify-between">
            <span className="font-bold text-xs text-foreground">Notifications</span>
            <Badge variant="default" className="text-[10px] px-1.5 py-0">3 New</Badge>
          </div>
          <div className="py-1 max-h-60 overflow-y-auto">
            <DropdownItem className="flex flex-col items-start gap-1 py-2">
              <div className="flex items-center justify-between w-full">
                <span className="font-semibold text-xs text-foreground">Production Deployment</span>
                <span className="text-[10px] text-muted-foreground">2m ago</span>
              </div>
              <p className="text-[11px] text-muted-foreground text-left">
                DevFlow v2.4.0 successfully deployed to AWS US-East.
              </p>
            </DropdownItem>
            <DropdownItem className="flex flex-col items-start gap-1 py-2">
              <div className="flex items-center justify-between w-full">
                <span className="font-semibold text-xs text-foreground">New Team Member</span>
                <span className="text-[10px] text-muted-foreground">1h ago</span>
              </div>
              <p className="text-[11px] text-muted-foreground text-left">
                Elena Rostova joined the Frontend Core squad.
              </p>
            </DropdownItem>
          </div>
          <DropdownSeparator />
          <div className="p-1">
            <button
              onClick={() => setHasNotifications(false)}
              className="w-full text-center text-[11px] font-medium text-primary hover:underline py-1"
            >
              Mark all as read
            </button>
          </div>
        </Dropdown>

        <Dropdown
          align="right"
          className="w-56"
          trigger={
            <div className="flex items-center gap-2 cursor-pointer rounded-full p-0.5 hover:ring-2 hover:ring-primary/20 transition-all">
              <Avatar
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                fallback="MH"
                size="md"
                status="online"
              />
            </div>
          }
        >
          <div className="px-3 py-2.5 border-b border-border/80">
            <p className="text-xs font-bold text-foreground truncate">Mahedi Hasan</p>
            <p className="text-[11px] text-muted-foreground truncate">mahedi@devflow.io</p>
            <Badge variant="success" className="mt-1 text-[9px] px-1.5 py-0">Pro Member</Badge>
          </div>
          <div className="py-1">
            <DropdownItem className="gap-2.5">
              <User className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Profile Account</span>
            </DropdownItem>
            <DropdownItem className="gap-2.5">
              <Settings className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Preferences</span>
            </DropdownItem>
            <DropdownItem className="gap-2.5">
              <Shield className="h-3.5 w-3.5 text-muted-foreground" />
              <span>API Security & Keys</span>
            </DropdownItem>
          </div>
          <DropdownSeparator />
          <div className="py-1">
            <DropdownItem destructive className="gap-2.5">
              <LogOut className="h-3.5 w-3.5" />
              <span>Log out</span>
            </DropdownItem>
          </div>
        </Dropdown>
      </div>
    </header>
  );
}
