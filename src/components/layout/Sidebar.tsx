import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  Wrench,
  Briefcase,
  Contact,
  Play,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { NAV_SECTIONS, type NavItem } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const sectionIconMap: Record<string, React.ElementType> = {
  Home,
  Wrench,
  Briefcase,
  Contact,
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

      {/* Navigation Sections & Tabs */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        {NAV_SECTIONS.map((section, idx) => {
          const SectionIcon = sectionIconMap[section.icon] || Home;

          return (
            <div key={idx} className="space-y-1">
              {!isCollapsed ? (
                <div className="flex items-center justify-between px-3 py-1.5 text-muted-foreground/90 hover:text-foreground cursor-pointer transition-colors group">
                  <div className="flex items-center gap-2">
                    <SectionIcon className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">
                      {section.title}
                    </span>
                  </div>
                  <ChevronDown className="h-3.5 w-3.5 text-muted-foreground/70 group-hover:text-foreground transition-transform" />
                </div>
              ) : (
                <div className="flex justify-center py-1">
                  <SectionIcon className="h-4 w-4 text-muted-foreground" title={section.title} />
                </div>
              )}

              <div className="space-y-0.5 pt-0.5">
                {section.items.map((item: NavItem) => {
                  const isActive = activeRoute === item.href;

                  return (
                    <button
                      key={item.href}
                      onClick={() => setActiveRoute(item.href)}
                      className={cn(
                        'group relative flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium transition-all duration-150',
                        isActive
                          ? 'bg-[#2b244d] dark:bg-[#2b244d] text-white shadow-sm border border-violet-500/30 font-semibold'
                          : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground'
                      )}
                      title={isCollapsed ? item.title : undefined}
                    >
                      <Play
                        className={cn(
                          'h-2 w-2 shrink-0 fill-current transition-transform duration-150',
                          isActive
                            ? 'text-violet-400 scale-110'
                            : 'text-muted-foreground/60 group-hover:text-foreground group-hover:translate-x-0.5'
                        )}
                      />

                      {!isCollapsed && (
                        <span className="flex-1 text-left truncate">{item.title}</span>
                      )}

                      {!isCollapsed && item.hasSubmenu && (
                        <ChevronDown className="h-3 w-3 text-muted-foreground/60 ml-auto" />
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
            </div>
          );
        })}
      </div>

      {/* Sign Out Button at Bottom */}
      <div className="p-3 border-t border-sidebar-border/80">
        <button
          className={cn(
            'w-full flex items-center justify-center gap-2 rounded-xl border border-border bg-card/60 py-2.5 text-xs font-semibold text-foreground hover:bg-muted transition-all shadow-subtle',
            isCollapsed && 'px-0'
          )}
          title="Sign Out"
        >
          <LogOut className="h-4 w-4 text-muted-foreground" />
          {!isCollapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}
