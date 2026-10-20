import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Is Tutin really 100% free with zero commission on tuition fees?',
      a: 'Yes! Tutin does not take 10% or 20% commission cuts from your hard-earned tuition fees. Parents and students pay you directly through their preferred payment mode (Google Pay, PhonePe, Paytm, Bank Transfer, or Cash). Tutin simply tracks records and sends automated receipts.'
    },
    {
      q: 'How does the fee tracking and digital receipt system work?',
      a: 'You define monthly, quarterly, or course-based fee cycles for each batch. When a payment is made or received, simply tap "Record Payment" or scan student QR. Tutin instantly generates a verified digital receipt that can be automatically shared with parents via WhatsApp or viewed inside the student app.'
    },
    {
      q: 'Can I use Tutin if I am an independent home tutor with only 10–15 students?',
      a: 'Absolutely! Tutin was designed specifically for independent home tutors as well as growing coaching centers. Whether you have 5 students or 500 students, Tutin eliminates paperwork, streamlines scheduling, and elevates your professional tuition brand.'
    },
    {
      q: 'How do students and parents join my batch?',
      a: 'Each batch has a unique QR Code and shareable invite link. When students scan your QR Code with their camera or the Tutin app, they can submit an instant admission request. Once you approve, they are automatically enrolled and receive all batch materials.'
    },
    {
      q: 'Is student contact data and phone numbers private and secure?',
      a: 'Yes. Student and tutor privacy is strictly protected. Contact info is never sold or broadcast to third-party telemarketers. Only authorized teachers and their enrolled students can see batch schedules.'
    },
    {
      q: 'What formats of study materials can I upload?',
      a: 'You can upload PDF lecture notes, practice papers (DPPs), formula cheat sheets, assignments, and sample test papers. Students can read them seamlessly with Tutin’s in-app document viewer, with offline caching support.'
    },
    {
      q: 'What platforms is Tutin available on?',
      a: 'Tutin is built natively for Android (Google Play Store) and iOS (Apple App Store), alongside a fast web companion dashboard for educators to manage batches on desktop computers or tablets.'
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Got Questions?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-tealAccent-400">
              We’ve Got Answers
            </span>
          </h2>
          <p className="text-slate-300 text-base">
            Everything you need to know about setting up batches, fee records, and the Tutin ecosystem.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-white hover:text-indigo-300 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-indigo-600/30 text-indigo-400' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/40 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
