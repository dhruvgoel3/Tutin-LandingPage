import React, { useState } from 'react';
import { GraduationCap, UserCheck, ShieldCheck, Check, ArrowRight, Zap, Award, BellRing, Sparkles } from 'lucide-react';

export default function PersonaComparison({ onOpenDownload, onOpenTeacherModal }) {
  const [activePersona, setActivePersona] = useState('tutors'); // 'tutors' | 'students'

  const tutorPoints = [
    { title: 'Dignified Fee Reminders', desc: 'No awkward phone calls to parents. Tutin sends polite WhatsApp notices and auto-generates branded receipts.' },
    { title: 'Zero Commission Forever', desc: 'Keep 100% of your earnings. Direct UPI/Cash from parents without middlemen cuts.' },
    { title: 'Digital Profile & Local Discovery', desc: 'A shareable link (tutin.me/@you) with your badges, student reviews, and QR code to attract neighborhood students.' },
    { title: 'One Hub For All Batches', desc: 'Separate Class 10, 11, 12, JEE batches. Timetable, notes, and attendance in one dashboard.' },
  ];

  const studentPoints = [
    { title: 'All Tutors In One Place', desc: 'Physics, Chemistry, Maths, Biology—view all your coaching batches and schedules in a unified daily timeline.' },
    { title: 'Transparent Fee Receipts', desc: 'Parents receive instant digital receipts on every payment with clean balance tracking.' },
    { title: 'Instant Access To Study Notes', desc: 'No more lost WhatsApp documents. Chapter notes, DPPs, and formula sheets are always 1 click away.' },
    { title: 'Find Verified Local Tutors', desc: 'Search top-rated tutors near your pin code by board (CBSE, ICSE), class, and subject reviews.' },
  ];

  return (
    <section id="personas" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" /> Built For Both Sides of the Classroom
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Tailored Excellence For{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-tealAccent-400">
              Teachers & Students
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Whether you teach 10 students at home or manage hundreds in an institute, Tutin keeps everyone aligned.
          </p>
        </div>

        {/* Persona Switcher on mobile/tablets */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-2">
            <button
              onClick={() => setActivePersona('tutors')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activePersona === 'tutors'
                  ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>For Tutors & Coaching</span>
            </button>
            <button
              onClick={() => setActivePersona('students')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activePersona === 'students'
                  ? 'bg-gradient-to-r from-tealAccent-600 to-teal-500 text-white shadow-lg shadow-tealAccent-600/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>For Students & Parents</span>
            </button>
          </div>
        </div>

        {/* Persona Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card: For Tutors */}
          <div className={`p-8 sm:p-10 rounded-3xl bg-slate-900/80 border transition-all duration-300 flex flex-col justify-between ${
            activePersona === 'tutors'
              ? 'border-indigo-500/60 shadow-2xl shadow-indigo-950/40 ring-1 ring-indigo-500/30'
              : 'border-slate-800 opacity-90'
          }`}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  Educator Suite
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-display">
                  For Independent Tutors & Coaching Centers
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Reclaim 6+ hours every week spent on messaging parents, tracking who paid, and resharing lost documents.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {tutorPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{point.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800/80">
              <button
                onClick={onOpenTeacherModal}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Register as a Tutor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card: For Students & Parents */}
          <div className={`p-8 sm:p-10 rounded-3xl bg-slate-900/80 border transition-all duration-300 flex flex-col justify-between ${
            activePersona === 'students'
              ? 'border-tealAccent-500/60 shadow-2xl shadow-teal-950/40 ring-1 ring-tealAccent-500/30'
              : 'border-slate-800 opacity-90'
          }`}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-tealAccent-400 flex items-center justify-center">
                  <UserCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                  Student & Parent Portal
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-display">
                  For School & College Students & Parents
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Never miss a lecture note, timetable change, or wonder if your monthly tuition payment went through.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {studentPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-tealAccent-500/20 text-tealAccent-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{point.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800/80">
              <button
                onClick={onOpenDownload}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-tealAccent-600 to-teal-500 hover:from-tealAccent-500 hover:to-teal-400 text-white font-semibold text-sm shadow-lg shadow-tealAccent-600/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Download Student App</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
