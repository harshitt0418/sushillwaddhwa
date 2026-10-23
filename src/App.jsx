import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { LuxuryPreloader } from '@/components/layout/LuxuryPreloader';
import { RouteSEO } from '@/components/common/RouteSEO';

import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Business } from '@/pages/Business';
import { Hospitality } from '@/pages/Hospitality';
import { Lifestyle } from '@/pages/Lifestyle';
import { Media } from '@/pages/Media';
import { Collaborate } from '@/pages/Collaborate';
import { Contact } from '@/pages/Contact';

export const App = () => {
  const location = useLocation();
  const [isPreloaderActive, setIsPreloaderActive] = React.useState(true);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsPreloaderActive(false);
      return;
    }

    // Initialize Lenis for luxurious smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-obsidian text-porcelain selection:bg-gold selection:text-obsidian font-sans relative">
      {/* Cinematic Editorial Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.032] mix-blend-screen bg-noise" />
      
      <RouteSEO />
      {isPreloaderActive && (
        <LuxuryPreloader onComplete={() => setIsPreloaderActive(false)} />
      )}
      <ScrollToTop />
      <Header />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/hospitality" element={<Hospitality />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/media" element={<Media />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/private-access" element={<Navigate to="/hospitality" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
