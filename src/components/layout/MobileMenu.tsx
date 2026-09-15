import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Wrench,
  Briefcase,
  Contact,
  Play,
  ChevronDown,
  X,
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

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeRoute: string;
  setActiveRoute: (route: string) => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  activeRoute,
  setActiveRoute,
}: MobileMenuProps) {
  const handleNavClick = (href: string) => {
    setActiveRoute(href);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="fixed inset-y-0 left-0 w-4/5 max-w-xs bg-sidebar border-r border-sidebar-border shadow-2xl flex flex-col z-50 p-4"
          >
            <div className="flex items-center justify-between pb-4 border-b border-sidebar-border/80 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-violet-500 text-white shadow-glow-primary">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-foreground">DevFlow</span>
                  <span className="text-[10px] text-muted-foreground">Admin Workspace</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="h-8 w-8 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              {NAV_SECTIONS.map((section, idx) => {
                const SectionIcon = sectionIconMap[section.icon] || Home;

                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between px-3 py-1 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <SectionIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">
                          {section.title}
                        </span>
                      </div>
                      <ChevronDown className="h-3 w-3 text-muted-foreground/70" />
                    </div>

                    <div className="space-y-0.5 pt-0.5">
                      {section.items.map((item: NavItem) => {
                        const isActive = activeRoute === item.href;

                        return (
                          <button
                            key={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className={cn(
                              'flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium transition-colors',
                              isActive
                                ? 'bg-[#2b244d] text-white font-semibold border border-violet-500/30'
                                : 'text-sidebar-foreground hover:bg-sidebar-accent'
                            )}
                          >
                            <Play
                              className={cn(
                                'h-2 w-2 shrink-0 fill-current',
                                isActive ? 'text-violet-400' : 'text-muted-foreground/60'
                              )}
                            />
                            <span className="flex-1 text-left truncate">{item.title}</span>
                            {item.hasSubmenu && (
                              <ChevronDown className="h-3 w-3 text-muted-foreground/60 ml-auto" />
                            )}
                            {item.badge && (
                              <Badge
                                variant={isActive ? 'default' : 'secondary'}
                                className="text-[10px] px-1.5 py-0"
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

            <div className="pt-3 border-t border-sidebar-border/80 mt-2">
              <button
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-border bg-card/60 py-2.5 text-xs font-semibold text-foreground hover:bg-muted transition-all"
              >
                <LogOut className="h-4 w-4 text-muted-foreground" />
                <span>Sign Out</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
