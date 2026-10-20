import React, { useState } from 'react';
import { Search, MapPin, Star, ShieldCheck, BookOpen, GraduationCap, ArrowRight, Filter } from 'lucide-react';

export default function TutorDiscovery({ onOpenTeacherModal, onOpenDownload }) {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedCity, setSelectedCity] = useState('Delhi NCR');
  const [searchQuery, setSearchQuery] = useState('');

  const subjects = ['All', 'Physics', 'Mathematics', 'Chemistry', 'Biology', 'Commerce'];
  const cities = ['Delhi NCR', 'Mumbai', 'Bengaluru', 'Kota', 'Hyderabad', 'Pune'];

  const tutors = [
    {
      name: 'Dr. Rajesh Sharma',
      degrees: 'M.Sc (Physics), Ph.D • 12+ Yrs Exp',
      subject: 'Physics',
      level: 'Class 11, 12, JEE Main & NEET',
      location: 'Model Town & North Campus, Delhi NCR',
      city: 'Delhi NCR',
      rating: '4.9',
      reviewCount: '84',
      badge: 'Verified Master',
      fee: '₹2,500/mo',
      studentsCount: '68 active students',
      avatarColor: 'from-brand-600 to-indigo-600',
    },
    {
      name: 'Pooja Aggarwal',
      degrees: 'B.Tech, M.Tech (IIT Delhi) • 8+ Yrs Exp',
      subject: 'Mathematics',
      level: 'Class 10 & 12 Boards (CBSE / ICSE)',
      location: 'Indirapuram & Noida, Delhi NCR',
      city: 'Delhi NCR',
      rating: '4.95',
      reviewCount: '112',
      badge: 'Board Specialist',
      fee: '₹3,000/mo',
      studentsCount: '92 active students',
      avatarColor: 'from-teal-600 to-emerald-600',
    },
    {
      name: 'Dr. Vivek Menon',
      degrees: 'MBBS (AIIMS) • NEET Faculty',
      subject: 'Biology',
      level: 'NEET UG & Class 12 Botany/Zoology',
      location: 'Koramangala, Bengaluru',
      city: 'Bengaluru',
      rating: '4.88',
      reviewCount: '76',
      badge: 'NEET Mentor',
      fee: '₹3,500/mo',
      studentsCount: '54 active students',
      avatarColor: 'from-purple-600 to-indigo-600',
    },
    {
      name: 'Anand Kulkarni',
      degrees: 'M.Sc Organic Chemistry • Ex-Kota Faculty',
      subject: 'Chemistry',
      level: 'JEE Advanced & NEET Prep',
      location: 'Vigyan Nagar, Kota',
      city: 'Kota',
      rating: '4.92',
      reviewCount: '94',
      badge: 'Rank Producer',
      fee: '₹3,200/mo',
      studentsCount: '85 active students',
      avatarColor: 'from-amber-600 to-rose-600',
    },
  ];

  const filteredTutors = tutors.filter((tutor) => {
    const matchesSubject = selectedSubject === 'All' || tutor.subject.toLowerCase() === selectedSubject.toLowerCase();
    const matchesCity = selectedCity === 'All' || tutor.city === selectedCity;
    const matchesSearch = tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tutor.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tutor.level.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && (selectedCity === 'All' || matchesCity) && matchesSearch;
  });

  return (
    <section id="discovery" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Search className="w-3.5 h-3.5" /> Hyperlocal Directory
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Find Top Verified Tutors{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-tealAccent-400">
              In Your Neighborhood
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No random broker calls or hidden middleman cuts. Connect directly with educators verified for credentials, parent feedback, and past board scores.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="max-w-4xl mx-auto mb-12 p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by tutor name, subject (e.g. Physics), or exam..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* City Selector */}
            <div className="relative sm:w-48">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <select
                aria-label="Filter tutors by city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500 appearance-none cursor-pointer"
              >
                <option value="All">All Cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Subject Chips */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Subjects:
            </span>
            {subjects.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedSubject === sub
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredTutors.length > 0 ? (
            filteredTutors.map((tutor, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Tutor Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${tutor.avatarColor} flex items-center justify-center text-white font-bold text-base shadow-md`}>
                        {tutor.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-bold text-base text-white group-hover:text-indigo-300 transition-colors">
                            {tutor.name}
                          </h3>
                          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        </div>
                        <div className="text-xs text-slate-400">{tutor.degrees}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {tutor.badge}
                    </span>
                  </div>

                  {/* Level & Location */}
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{tutor.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-tealAccent-400 shrink-0" />
                      <span>{tutor.location}</span>
                    </div>
                  </div>

                  {/* Rating & Fee Strip */}
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-white">{tutor.rating}</span>
                      <span className="text-slate-500">({tutor.reviewCount} reviews)</span>
                    </div>
                    <div className="font-bold text-tealAccent-300">
                      {tutor.fee}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    {tutor.studentsCount}
                  </span>
                  <button
                    onClick={onOpenDownload}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-600/90 hover:bg-indigo-600 text-white font-medium text-xs flex items-center gap-1.5 transition-all"
                  >
                    <span>View Profile & Batches</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <p className="text-slate-400 text-sm">No tutors found matching your current filter.</p>
              <button
                onClick={() => { setSelectedSubject('All'); setSelectedCity('All'); setSearchQuery(''); }}
                className="mt-3 px-4 py-2 rounded-xl bg-slate-800 text-indigo-300 text-xs font-semibold hover:bg-slate-700"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Join as Tutor Prompt */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Are you a tutor or coaching center?{' '}
            <button
              onClick={onOpenTeacherModal}
              className="font-semibold text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
            >
              Get listed on Tutin & create your digital profile &rarr;
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
