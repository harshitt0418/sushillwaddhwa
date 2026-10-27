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
        <AboutSection />
        <BusinessSection />
        <CollaborationsSection />
        <MediaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
