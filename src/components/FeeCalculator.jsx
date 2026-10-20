import React, { useState } from 'react';
import { Calculator, IndianRupee, Clock, TrendingUp, Sparkles, ShieldAlert, ArrowRight } from 'lucide-react';

export default function FeeCalculator({ onOpenDownload }) {
  const [studentCount, setStudentCount] = useState(45);
  const [feePerStudent, setFeePerStudent] = useState(2500);

  const monthlyGross = studentCount * feePerStudent;
  const recoveredDues = Math.round(monthlyGross * 0.14); // 14% typical forgotten dues recovered
  const hoursSaved = Math.round(studentCount * 0.35); // hours saved from phone calls & reconciliations

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-slate-900/30 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" /> Interactive Tuition ROI Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            See How Much Tutin{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
              Saves & Recovers
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Independent tutors routinely lose 10–18% of their rightful revenue due to awkward follow-ups and forgotten fee cycles.
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="max-w-5xl mx-auto p-6 sm:p-10 lg:p-12 rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Input Sliders */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Slider 1: Total Enrolled Students */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="studentSlider" className="text-sm font-semibold text-slate-200">
                    Total Enrolled Students
                  </label>
                  <span className="px-3 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 font-bold text-base">
                    {studentCount} Students
                  </span>
                </div>
                <input
                  id="studentSlider"
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                  <span>5 Students (Home tutor)</span>
                  <span>100 Students</span>
                  <span>200+ (Coaching center)</span>
                </div>
              </div>

              {/* Slider 2: Average Monthly Fee per Student */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="feeSlider" className="text-sm font-semibold text-slate-200">
                    Average Fee Per Student (Monthly)
                  </label>
                  <span className="px-3 py-1 rounded-xl bg-teal-500/20 text-tealAccent-300 font-bold text-base">
                    {formatINR(feePerStudent)}
                  </span>
                </div>
                <input
                  id="feeSlider"
                  type="range"
                  min="500"
                  max="15000"
                  step="250"
                  value={feePerStudent}
                  onChange={(e) => setFeePerStudent(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                  <span>₹500 / mo</span>
                  <span>₹5,000 / mo</span>
                  <span>₹15,000 / mo</span>
                </div>
              </div>

              {/* Pro Tip Alert */}
              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 flex items-start gap-3 text-xs text-indigo-200">
                <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Zero Platform Commission:</strong> Tutin does NOT take 10% or 20% of your earnings. Parents pay directly to your Google Pay, PhonePe, Paytm, or Cash.
                </p>
              </div>

            </div>

            {/* Right: Real-Time Results Card */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-6">
              
              <div>
                <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                  Estimated Monthly Tuition Volume
                </span>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1">
                  {formatINR(monthlyGross)}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {studentCount} students × {formatINR(feePerStudent)} / mo
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-4">
                
                {/* Metric 1: Recovered Dues */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Recovered Dues</div>
                      <div className="text-[10px] text-slate-400">Via automated WhatsApp alerts</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-bold text-emerald-400">+{formatINR(recoveredDues)}</span>
                    <span className="block text-[10px] text-emerald-500/80">per month</span>
                  </div>
                </div>

                {/* Metric 2: Hours Saved */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Time Saved</div>
                      <div className="text-[10px] text-slate-400">Manual tracking & messages</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-bold text-indigo-300">~{hoursSaved} hrs</span>
                    <span className="block text-[10px] text-indigo-400">saved every month</span>
                  </div>
                </div>

              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDownload}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Start Tracking Zero-Commission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
