import React, { useState } from 'react';
import { X, Smartphone, QrCode, CheckCircle2, GraduationCap, ArrowRight, Send, Star, ShieldCheck } from 'lucide-react';

export function DownloadModal({ isOpen, onClose }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sentLink, setSentLink] = useState(false);

  if (!isOpen) return null;

  const handleSendLink = (e) => {
    e.preventDefault();
    if (phoneNumber.trim().length >= 10) {
      setSentLink(true);
      setTimeout(() => {
        setSentLink(false);
        setPhoneNumber('');
      }, 4000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-center space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
            <Smartphone className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white">Get the Tutin App</h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Scan the QR code or send an instant download link to your mobile number.
          </p>
        </div>

        {/* QR Code Frame */}
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 inline-block mx-auto shadow-inner">
          <div className="w-44 h-44 rounded-xl bg-white p-3 flex flex-col items-center justify-center mx-auto shadow-md">
            {/* Clean SVG Vector QR Representation */}
            <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-900">
              <path d="M0,0 h30 v30 h-30 z M10,10 h10 v10 h-10 z" />
              <path d="M70,0 h30 v30 h-30 z M80,10 h10 v10 h-10 z" />
              <path d="M0,70 h30 v30 h-30 z M10,80 h10 v10 h-10 z" />
              <rect x="40" y="10" width="10" height="20" />
              <rect x="10" y="40" width="20" height="10" />
              <rect x="40" y="40" width="20" height="20" rx="3" fill="#4F46E5" />
              <rect x="70" y="40" width="10" height="15" />
              <rect x="50" y="70" width="15" height="10" />
              <rect x="70" y="70" width="12" height="12" />
              <rect x="85" y="85" width="15" height="15" />
            </svg>
            <span className="text-[10px] font-bold text-slate-800 tracking-wider mt-1 uppercase">Scan with Camera</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Compatible with Android & iOS</p>
        </div>

        {/* SMS / WhatsApp Phone Link */}
        <form onSubmit={handleSendLink} className="space-y-3">
          <label className="block text-xs font-medium text-slate-300 text-left">
            Or receive download link on WhatsApp / SMS:
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-semibold">+91</span>
              <input
                type="tel"
                placeholder="Enter 10-digit mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                maxLength={10}
                required
                className="w-full pl-12 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-1.5"
            >
              <span>Send Link</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
          {sentLink && (
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Download link sent successfully to {phoneNumber}!</span>
            </div>
          )}
        </form>

        <div className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Zero spam guaranteed. 100% free app.</span>
        </div>

      </div>
    </div>
  );
}

export function TeacherModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Physics',
    city: '',
    students: '10-30',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-left space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" /> Educator Onboarding
          </div>
          <h3 className="text-2xl font-display font-bold text-white">Register as a Verified Tutor</h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Build your digital tuition identity, get listed locally, and track fees with 0% commission.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Registration Received!</h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xs mx-auto">
              Welcome to Tutin! Our team will activate your verified educator profile within 2 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Rajesh Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Mobile Number</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="Physics">Physics</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="Commerce">Commerce / Accounts</option>
                  <option value="English">English / Humanities</option>
                  <option value="Other">Other Subjects</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">City / Neighborhood</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. North Delhi"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Current Students Count</label>
                <select
                  value={formData.students}
                  onChange={(e) => setFormData({ ...formData, students: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="1-10">1 - 10 students (Home)</option>
                  <option value="10-30">10 - 30 students</option>
                  <option value="30-80">30 - 80 students</option>
                  <option value="80+">80+ students (Coaching)</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-tealAccent-600 hover:from-brand-500 hover:to-tealAccent-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Tutor Profile for Verification</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-slate-500 text-center">
              100% Free • No commission cuts • Direct student discovery
            </p>
          </form>
        )}

      </div>
    </div>
  );
}
