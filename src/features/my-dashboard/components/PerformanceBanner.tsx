import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface PerformanceBannerProps {
  userName?: string;
  targetPercent?: number;
  currentEarning?: number;
  monthlyTarget?: number;
}

export function PerformanceBanner({
  userName = 'MAHEDI',
  targetPercent = 0,
  currentEarning = 0,
  monthlyTarget = 0,
}: PerformanceBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0284c7] p-6 sm:p-8 text-white shadow-lg"
    >
      {/* Subtle curved background overlay */}
      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Welcome message */}
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" />
            <span>MY PERFORMANCE</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
            Welcome back, {userName} 🚀
          </h1>

          <p className="text-xs sm:text-sm text-cyan-100/90 font-medium">
            You're crushing it this month. Keep pushing to smash your target!
          </p>
        </div>

        {/* Right Target Box */}
        <div className="flex flex-col items-start md:items-end justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 min-w-[140px] text-right">
          <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-200">
            OF TARGET
          </span>
          <span className="text-3xl font-extrabold text-white tracking-tight">
            {targetPercent}%
          </span>
          <span className="text-[11px] font-medium text-cyan-100/90">
            ${currentEarning} / ${monthlyTarget}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
