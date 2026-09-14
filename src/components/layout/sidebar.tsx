import React, { useState } from 'react';
import {
  Home,
  Wrench,
  FolderArchive,
  Contact,
  ChevronDown,
  LogOut,
  Play
} from 'lucide-react';
import { NavGroup, NavItem, UserProfile } from '@/types/navigation';

export const navigationConfig: NavGroup[] = [
  {
    id: 'overview',
    title: 'OVERVIEW',
    icon: <Home className="w-4 h-4 text-gray-500" />,
    items: [
      { id: 'my-dashboard', label: 'My Dashboard' },
      { id: 'daily-tracking', label: 'Daily Tracking' },
      { id: 'maktech-chatbox', label: 'MAKTech ChatBox' },
    ],
  },
  {
    id: 'operations',
    title: 'OPERATIONS',
    icon: <Wrench className="w-4 h-4 text-gray-500" />,
    items: [
      { id: 'meeting-scheduling', label: 'Meeting Scheduling' },
    ],
  },
  {
    id: 'work',
    title: 'WORK',
    icon: <FolderArchive className="w-4 h-4 text-gray-500" />,
    items: [
      { id: 'all-orders', label: 'All Orders' },
      { id: 'my-assigned-orders', label: 'My Assigned Orders' },
      { id: 'revision-orders', label: 'Revision Orders' },
      { id: 'old-order-revision', label: 'Old Order Revision' },
      { id: 'cancel-page', label: 'Cancel Page' },
      { id: 'dispute-orders', label: 'Dispute Orders' },
      { id: 'my-target-bonus', label: 'My Target & Bonus' },
    ],
  },
  {
    id: 'hrm',
    title: 'MAKTECH-HRM',
    icon: <Contact className="w-4 h-4 text-gray-500" />,
    items: [
      { id: 'my-details', label: 'My Details' },
      { id: 'my-hrm-dashboard', label: 'My HRM Dashboard' },
    ],
  },
];

export const defaultUserProfile: UserProfile = {
  badgeLabel: 'LOGGED IN AS',
  name: 'MAHEDI HASAN RIAD',
  role: 'TEAM MEMBER',
};

interface SidebarProps {
  activeItemId: string;
  onSelectItem: (item: NavItem, groupTitle: string) => void;
  isOpen: boolean;
  onClose: () => void;
  userProfile?: UserProfile;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeItemId,
  onSelectItem,
  isOpen,
  onClose,
  userProfile = defaultUserProfile,
}) => {
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (groupId: string) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  const handleSignOut = () => {
    alert(`Signed out of MAKTech Business OS (${userProfile.name})`);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-[280px] bg-white border-r border-gray-200 flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:h-screen select-none ${
          isOpen ? 'translate-x-0 shadow-lg' : '-translate-x-full'
        }`}
        aria-label="Sidebar Navigation"
      >
        {/* Brand Header */}
        <div className="pt-6 pb-4 px-5 flex flex-col border-b border-gray-100">
          <div className="text-[20px] font-extrabold tracking-tight leading-tight text-gray-900">
            <span>MAKTech </span>
            <span className="text-gray-700">Business</span>
            <div className="text-gray-700">OS</div>
          </div>
        </div>

        {/* User Context Badge */}
        <div className="py-3.5 px-5 border-b border-gray-100 flex flex-col bg-gray-50/50">
          <span className="text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1">
            {userProfile.badgeLabel}
          </span>
          <span className="text-[13.5px] font-bold tracking-tight text-gray-900 uppercase leading-snug">
            {userProfile.name}
          </span>
          <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase mt-0.5">
            {userProfile.role}
          </span>
        </div>

        {/* Categorized Scrollable Navigation */}
        <nav className="flex-1 overflow-y-auto px-3.5 py-4 flex flex-col gap-4 custom-scrollbar">
          {navigationConfig.map((group) => {
            const isCollapsed = collapsedGroups[group.id] || false;
            return (
              <div key={group.id} className="flex flex-col">
                {/* Category Header */}
                <button
                  type="button"
                  onClick={() => toggleGroup(group.id)}
                  aria-expanded={!isCollapsed}
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors group cursor-pointer text-left w-full"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-gray-500 group-hover:text-gray-800 transition-colors">
                      {group.icon}
                    </span>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-gray-600 group-hover:text-gray-900">
                      {group.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition-transform duration-200 ${
                      isCollapsed ? '-rotate-90' : 'rotate-0'
                    }`}
                  />
                </button>

                {/* Submenu Items */}
                {!isCollapsed && (
                  <div className="flex flex-col gap-1 mt-1">
                    {group.items.map((item) => {
                      const isActive = item.id === activeItemId;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => onSelectItem(item, group.title)}
                          className={`flex items-center gap-3 px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all text-left w-full cursor-pointer ${
                            isActive
                              ? 'bg-gray-100 text-gray-900 font-bold border border-gray-200 shadow-xs'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                        >
                          <Play
                            className={`w-2 h-2 fill-current transition-transform ${
                              isActive
                                ? 'text-gray-900 scale-110'
                                : 'text-gray-400 group-hover:text-gray-600'
                            }`}
                          />
                          <span className="truncate flex-1">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Sidebar Footer Action */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <button
            type="button"
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2.5 py-2 px-4 bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 rounded-lg text-[13px] font-semibold text-gray-700 hover:text-gray-900 transition-all cursor-pointer active:scale-[0.99]"
          >
            <LogOut className="w-4 h-4 text-gray-500" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};
