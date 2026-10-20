import React from 'react';
import { ArrowRight, Star, CheckCircle, Shield, Sparkles, Download, Play, Users } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

export default function Hero({ onOpenDownload }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-brand-600/20 via-indigo-500/15 to-tealAccent-500/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-12 left-10 w-72 h-72 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-tealAccent-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-tealAccent-400 animate-pulse"></span>
              <span>India's Smartest Tuition Ecosystem</span>
              <span className="text-slate-500">•</span>
              <span className="text-tealAccent-300 font-semibold">100% Commission-Free</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
              Your Digital Tuition Identity.{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-tealAccent-400">
                Teaching Reimagined.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Say goodbye to messy WhatsApp groups, forgotten fee dues, and scattered notes. Tutin empowers independent tutors and coaching centers to manage batches, track fees transparently, distribute study materials, and attract verified local students.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-2">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 via-indigo-600 to-tealAccent-600 hover:from-brand-500 hover:to-tealAccent-500 text-white font-semibold text-base shadow-xl shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 group"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4 text-indigo-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#features"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 hover:text-white font-medium text-base border border-slate-700/80 shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Features</span>
              </a>
            </div>

            {/* Social Proof & Rating Cluster */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 border-t border-slate-800/80">
              <div className="flex -space-x-2.5 overflow-hidden">
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-950 bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white">
                  AG
                </div>
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-950 bg-gradient-to-tr from-teal-500 to-emerald-500 flex items-center justify-center text-xs font-bold text-white">
                  RK
                </div>
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-950 bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white">
                  PS
                </div>
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-950 bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-xs font-bold text-white">
                  SD
                </div>
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-slate-950 bg-slate-800 text-xs font-bold text-indigo-300">
                  +15k
                </div>
              </div>

              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-white">4.9 / 5</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Trusted by 10,000+ students & 1,200+ verified tutors across India
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
