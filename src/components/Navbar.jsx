import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Smartphone, GraduationCap, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenDownload, onOpenTeacherModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'For Tutors', href: '#personas' },
    { name: 'Screenshots', href: '#gallery' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Find Tutors', href: '#discovery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-slate-900/80 border border-slate-800/80 rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-2xl shadow-indigo-950/20">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-tealAccent-400 p-[1.5px] shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden">
                  <span className="font-display font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-tealAccent-400">
                    T
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-xl text-white tracking-tight">Tutin</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    2.0
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 hidden sm:block -mt-0.5">Digital Tuition Identity</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenTeacherModal}
                className="px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white rounded-xl hover:bg-slate-800 border border-slate-800 transition-all flex items-center gap-1.5"
              >
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>For Tutors</span>
              </button>
              <button
                onClick={onOpenDownload}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                <span>Get App</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={onOpenDownload}
                className="p-2 text-xs font-semibold text-white rounded-lg bg-brand-600"
                aria-label="Download App"
              >
                <Smartphone className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md lg:hidden pt-24 px-4 pb-6 flex flex-col justify-between animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Navigation</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 font-medium flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTeacherModal();
                }}
                className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-200 font-medium text-sm flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                Tutor Registration & Portal
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-500/30"
              >
                <Smartphone className="w-4 h-4" />
                Download Tutin App
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
