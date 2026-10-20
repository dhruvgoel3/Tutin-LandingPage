import React from 'react';
import { Heart, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer({ onOpenDownload, onOpenTeacherModal }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-tealAccent-400 p-[1.5px] shadow-lg shadow-brand-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center">
                  <span className="font-display font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-tealAccent-400">
                    T
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-xl text-white tracking-tight">Tutin</span>
                <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  2.0
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              India's leading digital tuition identity ecosystem for independent tutors, coaching centers, students, and parents. Managing batches, transparent fee tracking, and verified reputations.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Commission-Free & Encrypted</span>
            </div>
          </div>

          {/* Col 2: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Smart Batches</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Fee Cycles & Receipts</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Digital Visiting Cards</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">App Screens & UI</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">ROI & Fee Calculator</a></li>
            </ul>
          </div>

          {/* Col 3: Community */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">For Educators</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><button onClick={onOpenTeacherModal} className="hover:text-white transition-colors text-left">Teacher Registration</button></li>
              <li><a href="#discovery" className="hover:text-white transition-colors">Tutor Directory</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Tutor Success Stories</a></li>
              <li><button onClick={onOpenDownload} className="hover:text-white transition-colors text-left">Get Mobile App</button></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Tutor FAQ</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Support & Trust</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-center gap-2 text-xs text-slate-400">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>support@tutin.in</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-tealAccent-400" />
                <span>New Delhi, India</span>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Tutin Platform Technologies. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for India’s educators and students.
          </p>
        </div>

      </div>
    </footer>
  );
}
