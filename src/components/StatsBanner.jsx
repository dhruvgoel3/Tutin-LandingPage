import React from 'react';
import { Users, GraduationCap, ShieldCheck, BadgePercent, ArrowUpRight } from 'lucide-react';

export default function StatsBanner() {
  const stats = [
    {
      icon: GraduationCap,
      value: '1,200+',
      label: 'Verified Tutors',
      sub: 'Across 30+ Indian cities',
      accent: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      icon: Users,
      value: '25,000+',
      label: 'Active Students',
      sub: 'Enrolled in smart batches',
      accent: 'text-tealAccent-400 bg-tealAccent-500/10 border-tealAccent-500/20',
    },
    {
      icon: ShieldCheck,
      value: '98.5%',
      label: 'On-Time Fee Clarity',
      sub: 'Automated receipt tracking',
      accent: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    },
    {
      icon: BadgePercent,
      value: '0% Cut',
      label: '100% Free Platform',
      sub: 'Direct peer payments to you',
      accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
  ];

  return (
    <section className="py-12 border-y border-slate-800/80 bg-slate-900/40 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${stat.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 group-hover:text-slate-400 transition-colors">
                    Verified
                  </span>
                </div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
