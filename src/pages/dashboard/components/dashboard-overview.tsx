import React from 'react';

interface DashboardOverviewProps {
  activeNavLabel: string;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  activeNavLabel,
}) => {
  return (
    <div className="w-full bg-white border border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center text-center gap-3 shadow-xs">
      <h1 className="text-xl font-bold text-gray-900 tracking-tight">{activeNavLabel}</h1>
      <p className="text-xs text-gray-500 max-w-md">
        MAKTech Business OS dashboard layout initialized following the minimal white and gray design system.
      </p>
    </div>
  );
};
