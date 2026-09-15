import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  X,
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
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="fixed inset-y-0 left-0 w-4/5 max-w-xs bg-sidebar border-r border-sidebar-border shadow-2xl flex flex-col z-50 p-4"
          >
            {/* Drawer Header */}
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

            {/* Navigation items */}
            <div className="flex-1 overflow-y-auto space-y-5">
              {NAV_SECTIONS.map((section, idx) => (
                <div key={idx} className="space-y-1">
                  {section.title && (
                    <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1.5">
                      {section.title}
                    </p>
                  )}
                  {section.items.map((item: NavItem) => {
                    const IconComponent = iconMap[item.icon] || LayoutDashboard;
                    const isActive = activeRoute === item.href;

                    return (
                      <button
                        key={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          'flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors',
                          isActive
                            ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                            : 'text-sidebar-foreground hover:bg-sidebar-accent'
                        )}
                      >
                        <IconComponent className="h-4 w-4 shrink-0" />
                        <span className="flex-1 text-left truncate">{item.title}</span>
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
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
