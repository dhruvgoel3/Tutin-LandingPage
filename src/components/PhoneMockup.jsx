import React, { useState } from 'react';
import { 
  CheckCircle2, QrCode, Users, Clock, Calendar, 
  ArrowUpRight, BookOpen, Receipt, Bell, ShieldCheck, 
  ChevronRight, Sparkles, FolderDown, Smartphone, Image as ImageIcon
} from 'lucide-react';

export default function PhoneMockup({ customScreenshot = null }) {
  const [activeTab, setActiveTab] = useState('teacher'); // 'teacher' | 'student'

  return (
    <div className="relative mx-auto max-w-[340px] sm:max-w-[380px]">
      {/* Background ambient neon glow behind phone */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-brand-600/30 via-indigo-500/20 to-tealAccent-500/25 blur-3xl -z-10 rounded-full"></div>

      {/* Floating Status Pill: Top Right */}
      <div className="absolute -top-4 -right-2 sm:-right-8 z-20 hidden xs:flex items-center gap-3 p-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-md animate-float">
        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="text-left text-xs">
          <div className="font-semibold text-white">Fee Recorded</div>
          <div className="text-[11px] text-slate-400">₹3,000 via UPI • Receipt sent</div>
        </div>
      </div>

      {/* Floating Status Pill: Bottom Left */}
      <div className="absolute -bottom-6 -left-2 sm:-left-8 z-20 hidden xs:flex items-center gap-3 p-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-md animate-float [animation-delay:2s]">
        <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
          <QrCode className="w-5 h-5" />
        </div>
        <div className="text-left text-xs">
          <div className="font-semibold text-white">Instant QR Join</div>
          <div className="text-[11px] text-slate-400">Aarav joined Class 12 Physics</div>
        </div>
      </div>

      {/* Smartphone Hardware Frame */}
      <div className="relative rounded-[44px] p-3.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-2xl border border-slate-600/40">
        {/* Outer Ring Reflection */}
        <div className="relative rounded-[36px] bg-slate-950 overflow-hidden border border-slate-800">
          
          {/* Hardware Top Bar & Dynamic Island */}
          <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-slate-300">
            <span>9:41</span>
            <div className="w-20 h-4 bg-slate-900 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-800 mr-2"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/60"></div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <span className="text-[10px]">5G</span>
              <div className="w-4 h-2 rounded-sm border border-slate-400 relative">
                <div className="h-full w-3 bg-emerald-400"></div>
              </div>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="px-4 pt-1 pb-2 bg-slate-950 border-b border-slate-800/80">
            <div className="p-1 rounded-xl bg-slate-900 flex items-center gap-1 text-xs">
              <button
                onClick={() => setActiveTab('teacher')}
                className={`flex-1 py-1.5 rounded-lg font-medium transition-all text-center ${
                  activeTab === 'teacher'
                    ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Teacher View
              </button>
              <button
                onClick={() => setActiveTab('student')}
                className={`flex-1 py-1.5 rounded-lg font-medium transition-all text-center ${
                  activeTab === 'student'
                    ? 'bg-gradient-to-r from-tealAccent-600 to-teal-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Student View
              </button>
            </div>
          </div>

          {/* Screen Body */}
          <div className="p-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-[460px] text-left select-none overflow-y-auto max-h-[500px]">
            {customScreenshot ? (
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-inner">
                <img src={customScreenshot} alt="App Screenshot" className="w-full h-auto object-cover" />
              </div>
            ) : activeTab === 'teacher' ? (
              /* Teacher View Mockup */
              <div className="space-y-3.5">
                {/* Header Profile Bar */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-500 to-tealAccent-400 flex items-center justify-center text-white font-bold text-xs ring-2 ring-indigo-500/30">
                      RS
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Welcome back</div>
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        Rajesh Sharma, M.Sc
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Verified
                  </span>
                </div>

                {/* Collections Highlight Banner */}
                <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-950/80 via-slate-900 to-indigo-900/40 border border-indigo-700/30 shadow-lg">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[11px] text-indigo-300 font-medium">Monthly Collections</span>
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                      92% Collected
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div className="text-xl font-extrabold text-white">₹94,000</div>
                    <span className="text-[10px] text-slate-400">4 Batches • 68 Students</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 mt-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-500 to-tealAccent-400 w-[92%] rounded-full"></div>
                  </div>
                </div>

                {/* Batch Card */}
                <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60 space-y-2.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-tealAccent-400">
                        Physics • Class 12 CBSE
                      </span>
                      <h4 className="text-xs font-bold text-white">Target Board & JEE Main</h4>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" /> 5:00 PM
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-slate-500" /> 28/30 Students
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" /> Mon, Wed, Fri
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 pt-1">
                    <button className="py-1 px-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-semibold flex items-center justify-center gap-1">
                      <QrCode className="w-2.5 h-2.5" /> QR Code
                    </button>
                    <button className="py-1 px-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-[10px] font-medium flex items-center justify-center gap-1">
                      <Receipt className="w-2.5 h-2.5" /> Fees (₹)
                    </button>
                    <button className="py-1 px-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-[10px] font-medium flex items-center justify-center gap-1">
                      <BookOpen className="w-2.5 h-2.5" /> Notes
                    </button>
                  </div>
                </div>

                {/* Pending Admission Request notification */}
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Bell className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-white">Rohan Verma</div>
                      <div className="text-[9px] text-slate-400">Requesting admission (Physics)</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button className="px-2 py-1 rounded bg-indigo-600 text-white text-[10px] font-semibold">Accept</button>
                  </div>
                </div>
              </div>
            ) : (
              /* Student View Mockup */
              <div className="space-y-3.5">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-teal-950/80 via-slate-900 to-slate-900 border border-teal-700/30">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-teal-400">Student Portal</span>
                  <div className="text-xs font-bold text-white mt-0.5">Class 12 Boards • Science Stream</div>
                  <div className="text-[11px] text-slate-400 mt-1">3 Active Batches • Next class today 5:00 PM</div>
                </div>

                {/* Enrolled Batch Card */}
                <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-tealAccent-400">Physics Masters</span>
                      <h4 className="text-xs font-bold text-white">Prof. Rajesh Sharma</h4>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Fee Paid
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-300">
                    <div>Mon, Wed, Fri • 5:00 PM - 6:30 PM</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Model Town Coaching Center</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button className="py-1 px-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-[10px] font-semibold flex items-center justify-center gap-1">
                      <FolderDown className="w-2.5 h-2.5" /> Notes (14 Files)
                    </button>
                    <button className="py-1 px-2 rounded-lg bg-slate-700 text-slate-200 text-[10px] font-medium flex items-center justify-center gap-1">
                      <Receipt className="w-2.5 h-2.5" /> View Receipt
                    </button>
                  </div>
                </div>

                {/* Study Material Notice */}
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-indigo-400 text-[10px] font-bold">
                    <Sparkles className="w-3 h-3" /> New Chapter Notes Added
                  </div>
                  <div className="text-xs font-semibold text-white">Electrostatics & Capacitance DPP-3</div>
                  <div className="text-[10px] text-slate-400">PDF • 3.2 MB • Uploaded 2 hours ago</div>
                </div>
              </div>
            )}
          </div>

          {/* Hardware Bottom Indicator Bar */}
          <div className="py-2 flex justify-center bg-slate-950">
            <div className="w-28 h-1 rounded-full bg-slate-700"></div>
          </div>

        </div>
      </div>
    </div>
  );
}
