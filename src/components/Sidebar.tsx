import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BarChart3,
  FolderKanban,
  CheckSquare,
  Users,
  CreditCard,
  Layers,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  Sparkles,
} from 'lucide-react';
import { NAV_SECTIONS, type NavItem } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  BarChart3,
  FolderKanban,
  CheckSquare,
  Users,
  CreditCard,
  Layers,
  Settings,
  HelpCircle,
};

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  activeRoute: string;
  setActiveRoute: (route: string) => void;
  onOpenQuickAction?: () => void;
}

export function Sidebar({
  isCollapsed,
  setIsCollapsed,
  activeRoute,
  setActiveRoute,
  onOpenQuickAction,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        'relative hidden md:flex flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300 ease-in-out select-none z-30 h-screen sticky top-0',
        isCollapsed ? 'w-[76px]' : 'w-64'
      )}
    >
      {/* Brand Header */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border/80">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-violet-500 text-white shadow-glow-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              className="flex flex-col leading-none"
            >
              <span className="font-bold text-base tracking-tight text-foreground">DevFlow</span>
              <span className="text-[11px] font-medium text-muted-foreground">Admin Workspace</span>
            </motion.div>
          )}
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shadow-subtle"
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {NAV_SECTIONS.map((section, idx) => (
          <div key={idx} className="space-y-1">
            {!isCollapsed && section.title && (
              <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80 mb-2">
                {section.title}
              </p>
            )}

            {section.items.map((item: NavItem) => {
              const IconComponent = iconMap[item.icon] || LayoutDashboard;
              const isActive = activeRoute === item.href;

              return (
                <button
                  key={item.href}
                  onClick={() => setActiveRoute(item.href)}
                  className={cn(
                    'group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/30 font-semibold'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  )}
                  title={isCollapsed ? item.title : undefined}
                >
                  <IconComponent
                    className={cn(
                      'h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110',
                      isActive ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-primary'
                    )}
                  />

                  {!isCollapsed && (
                    <span className="flex-1 text-left truncate">{item.title}</span>
                  )}

                  {!isCollapsed && item.badge && (
                    <Badge
                      variant={
                        isActive
                          ? 'default'
                          : item.badgeColor === 'warning'
                          ? 'warning'
                          : 'default'
                      }
                      className={cn(
                        'ml-auto text-[10px] px-1.5 py-0 h-4 min-w-4 flex items-center justify-center font-bold',
                        isActive && 'bg-white/20 text-white border-white/20'
                      )}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Pro Plan Card or Quick Action */}
      {!isCollapsed ? (
        <div className="p-3 border-t border-sidebar-border/80">
          <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-3.5 shadow-subtle">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-white">
                <Zap className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs font-bold text-foreground">Upgrade to Pro</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed mb-3">
              Unlock real-time cloud analytics & limitless team seats.
            </p>
            <button
              onClick={onOpenQuickAction}
              className="w-full rounded-lg bg-primary py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-primary-hover transition-colors"
            >
              Quick Action
            </button>
          </div>
        </div>
      ) : (
        <div className="p-3 border-t border-sidebar-border/80 flex justify-center">
          <button
            onClick={onOpenQuickAction}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-subtle"
            title="Quick Action"
          >
            <Zap className="h-4 w-4" />
          </button>
        </div>
      )}
    </aside>
  );
}
