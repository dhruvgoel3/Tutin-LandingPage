import React, { useState } from 'react';
import { 
  Users, Receipt, Contact2, BookOpen, CheckCircle, 
  ArrowRight, ShieldCheck, Sparkles, QrCode, Share2, 
  FileText, Smartphone, BellRing, Lock
} from 'lucide-react';

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 'batches',
      title: 'Smart Batches & Admissions',
      tagline: 'No more confusing spreadsheets or lost student lists',
      icon: Users,
      color: 'from-indigo-500 to-brand-600',
      description: 'Organize students by subject, standard, and schedule. Generate custom QR codes for frictionless admissions and keep student rosters structured with zero overhead.',
      highlights: [
        'Instant batch joining via scanned QR code or invite link',
        'Capacity caps to maintain optimal teacher-to-student ratios',
        'Automatic timetable scheduling with reminder alerts',
        'Batch-specific announcements & broadcast notifications'
      ],
      previewCard: {
        title: 'Batch Management Hub',
        badge: 'Live Status',
        metric: '4 Active Batches',
        items: [
          { name: 'Class 12 Physics (CBSE / JEE)', count: '28 / 30 Students', time: 'Mon, Wed, Fri • 5:00 PM' },
          { name: 'Class 10 Science (Board Prep)', count: '18 / 20 Students', time: 'Tue, Thu, Sat • 4:00 PM' },
          { name: 'NEET Droppers Chemistry', count: '14 / 15 Students', time: 'Daily • 11:00 AM' }
        ]
      }
    },
    {
      id: 'fees',
      title: 'Transparent Fee Tracking',
      tagline: 'Zero-commission tracking that preserves your dignity',
      icon: Receipt,
      color: 'from-teal-500 to-emerald-600',
      description: 'Never feel awkward asking parents for tuition fees again. Tutin logs payments, sends polite automated receipts via WhatsApp, and provides transparent accounts.',
      highlights: [
        '100% Commission-Free: Students pay directly to your UPI ID or cash',
        'Instant branded digital receipts with receipt number & tax details',
        'Automated reminder notifications for overdue fee cycles',
        'Export monthly revenue reports in PDF & Excel formats'
      ],
      previewCard: {
        title: 'Fee Cycle Overview',
        badge: 'Zero Commission',
        metric: '₹94,000 / ₹1,02,000',
        items: [
          { name: 'Aarav Sharma', amount: '₹3,000 Paid', status: 'Verified UPI', success: true },
          { name: 'Rhea Sengupta', amount: '₹3,500 Paid', status: 'Cash Logged', success: true },
          { name: 'Kavya Nair', amount: '₹3,000 Due', status: 'Due in 2 days', success: false }
        ]
      }
    },
    {
      id: 'card',
      title: 'Digital Visiting Card & Profile',
      tagline: 'Your professional tuition brand in every parent’s pocket',
      icon: Contact2,
      color: 'from-purple-500 to-indigo-600',
      description: 'Create your sleek, verified digital visiting card with subjects, credentials, center location, and parent reviews. Share it on WhatsApp with 1 tap.',
      highlights: [
        'Custom web URL: tutin.me/@yourname with QR code generator',
        'Verified badge for credentials, degrees & experience',
        'Showcase student toppers, test scores & testimonials',
        'Hyperlocal discovery: parents in your pincode can find you'
      ],
      previewCard: {
        title: 'Dr. Rajesh Sharma, M.Sc (Physics)',
        badge: 'Top Rated Tutor',
        metric: '4.9 ★ (84 Reviews)',
        items: [
          { name: 'Subjects', detail: 'Physics (Class 11, 12, JEE Main, NEET)' },
          { name: 'Location', detail: 'Model Town & North Campus, Delhi' },
          { name: 'Experience', detail: '12+ Years • Ex-Allen Faculty' }
        ]
      }
    },
    {
      id: 'notes',
      title: 'Organized Study Materials',
      tagline: 'End the "Sir, please send notes" WhatsApp chaos',
      icon: BookOpen,
      color: 'from-sky-500 to-blue-600',
      description: 'Upload chapter notes, formula cheat-sheets, and DPP assignments directly into respective batches. Students access them securely inside their app.',
      highlights: [
        'Chapter-wise categorized repositories for each batch',
        'Secure in-app PDF viewer with offline caching',
        'Students never lose track of homework or previous exam papers',
        'Instant push notification when new study material is published'
      ],
      previewCard: {
        title: 'Batch Material Repository',
        badge: '28 Files Available',
        metric: 'Physics Class 12',
        items: [
          { name: 'Electrostatics Complete Theory & Formulae.pdf', size: '3.4 MB', tag: 'Notes' },
          { name: 'DPP-04 Capacitance & Dielectrics.pdf', size: '1.2 MB', tag: 'Assignment' },
          { name: 'Last 10 Years CBSE Board Question Bank.pdf', size: '8.1 MB', tag: 'Reference' }
        ]
      }
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Complete Tuition Operating System
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Engineered For The Way You{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-tealAccent-400">
              Actually Teach
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Everything an educator or coaching center needs to build a solid local reputation, streamline operations, and eliminate administrative headaches.
          </p>
        </div>

        {/* Feature Tabs Selector */}
        <div className="flex items-center justify-start sm:justify-center gap-2 pb-4 overflow-x-auto no-scrollbar mb-10">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={feat.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white border-indigo-500/50 shadow-lg shadow-indigo-600/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border-slate-800 hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{feat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Active Content Card */}
        {(() => {
          const current = features[activeTab];
          const Icon = current.icon;
          return (
            <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-slate-900/70 border border-slate-800/80 shadow-2xl backdrop-blur-xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Description */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${current.color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-tealAccent-400 uppercase tracking-wider">
                        {current.tagline}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                        {current.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {current.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {current.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm text-slate-200 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href="#download"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 group"
                    >
                      <span>See how it works in the app</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Right Interactive Card Preview */}
                <div className="lg:col-span-6">
                  <div className="p-5 sm:p-7 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <div className="text-xs text-slate-400">{current.previewCard.title}</div>
                        <div className="text-base font-bold text-white">{current.previewCard.metric}</div>
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {current.previewCard.badge}
                      </span>
                    </div>

                    {/* Preview item list */}
                    <div className="space-y-2.5">
                      {current.previewCard.items.map((item, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-between text-xs"
                        >
                          <div className="space-y-0.5">
                            <div className="font-semibold text-white">{item.name}</div>
                            {item.count && <div className="text-slate-400">{item.count}</div>}
                            {item.time && <div className="text-slate-500">{item.time}</div>}
                            {item.detail && <div className="text-slate-300">{item.detail}</div>}
                            {item.size && <div className="text-slate-400">{item.size}</div>}
                          </div>

                          {item.amount && (
                            <div className="text-right">
                              <div className="font-bold text-white">{item.amount}</div>
                              <div className={`text-[10px] ${item.success ? 'text-emerald-400' : 'text-amber-400'}`}>
                                {item.status}
                              </div>
                            </div>
                          )}

                          {item.tag && (
                            <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-semibold">
                              {item.tag}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Footer badge */}
                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Lock className="w-3 h-3 text-emerald-400" /> End-to-end encrypted data
                      </span>
                      <span className="text-indigo-400 font-semibold">Tutin Sync Active</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
