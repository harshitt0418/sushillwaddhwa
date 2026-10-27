import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import BusinessSection from '@/components/sections/BusinessSection';
import CollaborationsSection from '@/components/sections/CollaborationsSection';
import MediaSection from '@/components/sections/MediaSection';
import ContactSection from '@/components/sections/ContactSection';

export default function App() {
  return (
    <div className="bg-ivory text-ink overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <div className="stack-panel relative z-10"><AboutSection /></div>
        <div className="stack-panel relative z-20"><BusinessSection /></div>
        <div className="stack-panel relative z-30"><CollaborationsSection /></div>
        <div className="stack-panel relative z-40"><MediaSection /></div>
        <div className="stack-panel relative z-50"><ContactSection /></div>
      </main>
      <Footer />
    </div>
  );
}
