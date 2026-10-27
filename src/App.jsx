import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import BusinessSection from '@/components/sections/BusinessSection';
import CollaborationsSection from '@/components/sections/CollaborationsSection';
import MediaSection from '@/components/sections/MediaSection';
import ContactSection from '@/components/sections/ContactSection';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let raf;
    function animate(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);
    return () => {
      lenis.destroy();
      cancelAnimationFrame(raf);
    };
  }, []);

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
