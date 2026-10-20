import React, { useState } from 'react';
import { Smartphone, Image as ImageIcon, Sparkles, CheckCircle2, ChevronRight, Eye } from 'lucide-react';

export default function ScreenshotsGallery() {
  const [selectedScreen, setSelectedScreen] = useState(0);

  const screens = [
    {
      title: 'Batch Hub & Schedules',
      caption: 'Organize batches, attendance, and instant QR enrollments in seconds.',
      badge: 'Teacher View',
      color: 'from-brand-600 to-indigo-600',
      image: null, // Will use app screenshot if provided, otherwise renders clean vector UI
      ui: {
        header: 'Rajesh Sharma • 4 Batches',
        tag: 'CBSE Physics & JEE',
        stat1: '68 Students',
        stat2: '₹94,000 Collected',
        bullet1: 'Class 12 Physics (MWF 5:00 PM)',
        bullet2: 'Class 11 Foundation (TTS 4:00 PM)',
        status: 'Active Batch Timetable'
      }
    },
    {
      title: 'Zero-Fee Cycle Tracker',
      caption: 'Track who has paid, who is pending, and send polite receipts automatically.',
      badge: 'Fee Records',
      color: 'from-emerald-600 to-teal-600',
      image: null,
      ui: {
        header: 'October 2026 Collection Cycle',
        tag: '92% Recovery Rate',
        stat1: '₹94,000 Paid',
        stat2: '₹8,000 Pending',
        bullet1: 'Aarav Sharma — ₹3,000 Received (UPI)',
        bullet2: 'Rhea Sengupta — ₹3,500 Received (Cash)',
        status: 'Automated WhatsApp Receipts'
      }
    },
    {
      title: 'Digital Visiting Card',
      caption: 'Your verified public profile with credentials, student results, and reviews.',
      badge: 'Identity',
      color: 'from-purple-600 to-indigo-600',
      image: null,
      ui: {
        header: 'tutin.me/@dr_sharma',
        tag: 'Top Rated Physics Educator',
        stat1: '4.9 ★ (84 Reviews)',
        stat2: '12+ Yrs Exp',
        bullet1: 'M.Sc Physics (Delhi University)',
        bullet2: 'CBSE Board Toppers & 99+ Percentilers',
        status: 'Shareable on WhatsApp'
      }
    },
    {
      title: 'Student Notes & Portal',
      caption: 'Students access batch study materials, test dates, and fee receipts smoothly.',
      badge: 'Student View',
      color: 'from-sky-600 to-cyan-600',
      image: null,
      ui: {
        header: 'Aarav Sharma • Class 12',
        tag: '3 Enrolled Batches',
        stat1: '28 Notes Files',
        stat2: '100% Attendance',
        bullet1: 'DPP-04 Capacitors & Dielectrics.pdf',
        bullet2: 'Optics Formula Mastery Sheet.pdf',
        status: 'Offline Ready Viewer'
      }
    }
  ];

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-slate-900/40 border-y border-slate-800/80">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5" /> Mobile Experience First
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Designed To Look & Feel{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tealAccent-400 via-sky-300 to-indigo-400">
              Effortless
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Built natively with Flutter for lightning-fast responsiveness on iOS and Android devices of every screen size.
          </p>
        </div>

        {/* 4 Cards Grid with Clean Phone Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {screens.map((screen, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-3xl bg-slate-950/80 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 ${
                selectedScreen === idx
                  ? 'border-indigo-500/60 shadow-xl shadow-indigo-600/20'
                  : 'border-slate-800/90 hover:border-slate-700'
              }`}
              onClick={() => setSelectedScreen(idx)}
            >
              {/* Card Meta */}
              <div className="mb-4 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                    {screen.badge}
                  </span>
                  <span className="text-xs text-indigo-400 font-semibold">0{idx + 1}</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {screen.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {screen.caption}
                </p>
              </div>

              {/* Realistic Mobile Device Frame */}
              <div className="relative rounded-[28px] p-2 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border border-slate-700/60 shadow-lg my-2">
                <div className="rounded-[22px] bg-slate-950 p-3 overflow-hidden text-left border border-slate-800 min-h-[300px] flex flex-col justify-between">
                  
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[9px] text-slate-400 pb-2 border-b border-slate-800/60 font-semibold">
                    <span>9:41</span>
                    <div className="w-12 h-2.5 bg-slate-900 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-indigo-500"></div>
                    </div>
                    <span>100%</span>
                  </div>

                  {/* Device Screen Interior */}
                  <div className="py-2.5 space-y-2">
                    <div className="text-[11px] font-bold text-white truncate">
                      {screen.ui.header}
                    </div>
                    <div className="text-[9px] font-semibold text-tealAccent-400">
                      {screen.ui.tag}
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 pt-1">
                      <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-[8px] text-slate-400">Metrics</div>
                        <div className="text-[10px] font-bold text-white truncate">{screen.ui.stat1}</div>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-[8px] text-slate-400">Status</div>
                        <div className="text-[10px] font-bold text-emerald-400 truncate">{screen.ui.stat2}</div>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-[9px] text-slate-300">
                        • {screen.ui.bullet1}
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-[9px] text-slate-300">
                        • {screen.ui.bullet2}
                      </div>
                    </div>
                  </div>

                  {/* Screen Footer status */}
                  <div className="pt-2 border-t border-slate-800/60 text-[9px] font-medium text-indigo-300 flex items-center justify-between">
                    <span>{screen.ui.status}</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  </div>

                </div>
              </div>

              {/* Bottom action indicator */}
              <div className="mt-3 text-center">
                <span className="text-[11px] font-medium text-slate-400 group-hover:text-indigo-300 transition-colors flex items-center justify-center gap-1">
                  <span>Interactive Frame</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
