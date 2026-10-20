import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';

export default function Testimonials() {
  const [filter, setFilter] = useState('all');

  const testimonials = [
    {
      category: 'tutor',
      name: 'Dr. Arvind Sharma',
      role: 'Senior Physics Faculty (14 Yrs)',
      location: 'Model Town, Delhi',
      quote: 'Before Tutin, tracking fee payments for 110 students across 4 batches was a monthly nightmare. Now, parents receive receipts automatically, and my collections are 98% on-time without awkward follow-ups.',
      rating: 5,
      avatarColor: 'from-brand-600 to-indigo-600',
      initials: 'AS',
      metric: 'Saved 8 hrs/mo on accounts'
    },
    {
      category: 'student',
      name: 'Aarav Sharma',
      role: 'Class 12 CBSE (JEE Aspirant)',
      location: 'South City, Gurugram',
      quote: 'Having all my coaching notes, assignments, and test schedules in one app instead of 10 different WhatsApp groups is a lifesaver. No more missing assignments or searching through chat history.',
      rating: 5,
      avatarColor: 'from-teal-600 to-emerald-600',
      initials: 'AS',
      metric: 'Scored 96% in Physics Midterm'
    },
    {
      category: 'parent',
      name: 'Sunita Rao',
      role: 'Parent of Class 10 Student',
      location: 'Indiranagar, Bengaluru',
      quote: 'I love the transparent digital receipts. Whenever I pay my daughter’s tuition fee via UPI, I get an instant confirmed receipt on WhatsApp. Tutin makes private tuition feel truly professional.',
      rating: 5,
      avatarColor: 'from-purple-600 to-indigo-600',
      initials: 'SR',
      metric: '100% Fee Clarity'
    },
    {
      category: 'tutor',
      name: 'Rajesh Patel',
      role: 'Mathematics Coaching Director',
      location: 'Navrangpura, Ahmedabad',
      quote: 'The shareable digital visiting card (tutin.me) helped me attract 22 new students this academic session. Parents trust the verified reviews and curriculum badges right away.',
      rating: 5,
      avatarColor: 'from-amber-600 to-rose-600',
      initials: 'RP',
      metric: '+22 New Enrollments'
    },
    {
      category: 'student',
      name: 'Kritika Joshi',
      role: 'NEET 2026 Aspirant',
      location: 'Vasant Kunj, Delhi',
      quote: 'The offline PDF viewer for chapter notes is incredible. I can study while commuting without eating up mobile data. Best app for private tuition students.',
      rating: 5,
      avatarColor: 'from-sky-600 to-blue-600',
      initials: 'KJ',
      metric: 'Accesses 30+ chapter DPPs'
    },
    {
      category: 'tutor',
      name: 'Vikas Malhotra',
      role: 'Chemistry Faculty (Ex-Kota)',
      location: 'Vigyan Nagar, Kota',
      quote: 'Zero commission was the deciding factor. Other platforms take a cut of my hard-earned tuition fees. Tutin is 100% transparent and respects the tutor.',
      rating: 5,
      avatarColor: 'from-emerald-600 to-cyan-600',
      initials: 'VM',
      metric: '0% Platform Deduction'
    }
  ];

  const filtered = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === filter);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-900/30 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <ThumbsUp className="w-3.5 h-3.5" /> Real Verified Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Loved By 1,200+ Educators &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tealAccent-400 via-sky-300 to-indigo-400">
              Thousands of Families
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See how Tutin is transforming independent education across India every single day.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-12">
          {['all', 'tutor', 'student', 'parent'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Stories' : `${cat}s`}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-slate-950/80 border border-slate-800/90 hover:border-slate-700 transition-all hover:-translate-y-1.5 shadow-lg flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                    {item.category}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.avatarColor} flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-sm`}>
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white group-hover:text-indigo-300 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400">{item.role}</p>
                    <p className="text-[10px] text-slate-500">{item.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
