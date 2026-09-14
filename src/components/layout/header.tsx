import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  currentCategory: string;
  currentPageTitle: string;
  onOpenMobileNav: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  currentPageTitle,
  onOpenMobileNav,
}) => {
  return (
    <header className="h-16 min-h-16 px-6 lg:px-8 flex items-center justify-between border-b border-gray-200 bg-white z-20">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onOpenMobileNav}
          className="lg:hidden p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
          aria-label="Open Navigation Drawer"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>{currentCategory}</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">{currentPageTitle}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Semantic Status Badge */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-[11px] font-medium text-emerald-700">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Operational</span>
        </div>
      </div>
    </header>
  );
};
