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
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-3 border-b border-sidebar-border/80 mb-2">
              <div className="flex flex-col leading-tight">
                <div className="flex items-center gap-1 font-extrabold text-sm tracking-tight">
                  <span className="text-foreground">MAKTech</span>
                  <span className="text-sky-400">Business</span>
                </div>
                <span className="text-xs font-bold text-violet-400 tracking-wider">OS</span>
              </div>
              <button
                onClick={onClose}
                className="h-8 w-8 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Logged in user block */}
            <div className="px-3 py-2 border border-border/60 rounded-xl bg-muted/20 mb-3">
              <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/80">
                LOGGED IN AS
              </p>
              <p className="text-xs font-bold text-foreground truncate mt-0.5">
                MAHEDI HASAN RIAD
              </p>
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                TEAM MEMBER
              </p>
            </div>

            {/* Navigation sections */}
            <div className="flex-1 overflow-y-auto space-y-3.5 pr-1">
              {NAV_SECTIONS.map((section, idx) => {
                const SectionIcon = sectionIconMap[section.icon] || Home;

                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between px-2 py-1 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <SectionIcon className="h-3.5 w-3.5 text-muted-foreground" />
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
                              'flex w-full items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-medium transition-colors',
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

            {/* Sign Out at bottom */}
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
