import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import FeatureShowcase from './components/FeatureShowcase';
import ScreenshotsGallery from './components/ScreenshotsGallery';
import PersonaComparison from './components/PersonaComparison';
import FeeCalculator from './components/FeeCalculator';
import TutorDiscovery from './components/TutorDiscovery';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import { DownloadModal, TeacherModal } from './components/Modals';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [teacherModalOpen, setTeacherModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-brand-900/60 via-indigo-900/50 to-tealAccent-900/40 border-b border-indigo-500/20 py-2 px-4 text-center text-xs text-indigo-200">
        <span className="inline-block px-2 py-0.5 rounded-full bg-indigo-500/30 text-white font-bold mr-2 text-[10px]">
          NEW
        </span>
        <strong>Tutin 2.0 is live!</strong> Zero-commission tuition fee tracking & verified digital visiting cards.{' '}
        <a href="#features" className="underline underline-offset-2 hover:text-white ml-1 font-semibold">
          Explore features &rarr;
        </a>
      </div>

      {/* Navigation Header */}
      <Navbar
        onOpenDownload={() => setDownloadModalOpen(true)}
        onOpenTeacherModal={() => setTeacherModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenDownload={() => setDownloadModalOpen(true)}
        />

        <StatsBanner />

        <FeatureShowcase />

        <ScreenshotsGallery />

        <PersonaComparison
          onOpenDownload={() => setDownloadModalOpen(true)}
          onOpenTeacherModal={() => setTeacherModalOpen(true)}
        />

        <FeeCalculator
          onOpenDownload={() => setDownloadModalOpen(true)}
        />

        <TutorDiscovery
          onOpenDownload={() => setDownloadModalOpen(true)}
          onOpenTeacherModal={() => setTeacherModalOpen(true)}
        />

        <Testimonials />

        <FaqSection />

        <CtaBanner
          onOpenDownload={() => setDownloadModalOpen(true)}
          onOpenTeacherModal={() => setTeacherModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenDownload={() => setDownloadModalOpen(true)}
        onOpenTeacherModal={() => setTeacherModalOpen(true)}
      />

      {/* Global Interactive Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      <TeacherModal
        isOpen={teacherModalOpen}
        onClose={() => setTeacherModalOpen(false)}
      />
    </div>
  );
}
