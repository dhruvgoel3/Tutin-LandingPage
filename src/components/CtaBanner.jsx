import React from 'react';
import { Smartphone, GraduationCap, Download, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CtaBanner({ onOpenDownload, onOpenTeacherModal }) {
  return (
    <section id="download" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ambient glow container */}
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-500/30 shadow-2xl overflow-hidden">
          
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-brand-600/30 via-tealAccent-500/10 to-transparent blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-indigo-600/20 blur-3xl -z-0"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-tealAccent-400" />
              <span>Available for Android, iOS & Web</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
              Modernize Your Tuition Identity{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tealAccent-400 via-sky-300 to-indigo-300">
                In Less Than 2 Minutes
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Join over 1,200+ verified tutors and 25,000+ students enjoying transparent fee tracking, smart batch scheduling, and zero-commission peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-600 via-indigo-600 to-tealAccent-600 hover:from-brand-500 hover:to-tealAccent-500 text-white font-bold text-base shadow-xl shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
              >
                <Download className="w-5 h-5" />
                <span>Download Tutin Free</span>
              </button>

              <button
                onClick={onOpenTeacherModal}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700/80 transition-all flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>Register as a Tutor</span>
              </button>
            </div>

            {/* Checklist items */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Free Forever
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No Credit Card Required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant Setup in 2 mins
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
