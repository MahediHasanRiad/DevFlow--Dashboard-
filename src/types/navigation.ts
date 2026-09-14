import { ReactNode } from 'react';

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  badge?: string | number;
}

export interface NavGroup {
  id: string;
  title: string;
  icon: ReactNode;
  items: NavItem[];
}

export interface UserProfile {
  name: string;
  role: string;
  badgeLabel: string;
}
