import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { RouteSEO } from '@/components/common/RouteSEO';
import { Home } from '@/pages/Home';

export const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Ensure body overflow has no lingering inline locks
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }

    // Initialize Lenis for luxurious smooth scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // If initial landing has hash, scroll to it
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          lenis.scrollTo(target, { offset: -70 });
        }, 200);
      }
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-obsidian text-ivory selection:bg-bronze selection:text-ink font-sans relative overflow-x-clip w-full">
      {/* Subtle Editorial Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.025] mix-blend-screen bg-noise" />
      
      <RouteSEO />
      <ScrollToTop />
      <Header />
      
      <main className="flex-grow min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Legacy route redirects to section anchors on the single-page site */}
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/business" element={<Navigate to="/#business" replace />} />
          <Route path="/hospitality" element={<Navigate to="/#business" replace />} />
          <Route path="/lifestyle" element={<Navigate to="/#about" replace />} />
          <Route path="/collaborate" element={<Navigate to="/#collaborations" replace />} />
          <Route path="/media" element={<Navigate to="/#media" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
