import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { LuxuryPreloader } from '@/components/layout/LuxuryPreloader';

import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Business } from '@/pages/Business';
import { Hospitality } from '@/pages/Hospitality';
import { Lifestyle } from '@/pages/Lifestyle';
import { Media } from '@/pages/Media';
import { Collaborate } from '@/pages/Collaborate';
import { Contact } from '@/pages/Contact';

const pageTitles = {
  '/': 'Sushill Waddhwa — Global Hospitality Entrepreneur · Investor · Luxury Lifestyle',
  '/about': 'About Sushill Waddhwa — Founder & CMD, Platinum World Grroup | Since 1989',
  '/business': 'Business & Ventures — Sushill Waddhwa | Platinum World Grroup & Artoso Hospitality',
  '/hospitality': 'Hospitality Leadership — Sushill Waddhwa | Luxury Hotels & Buyouts',
  '/lifestyle': 'Curated Lifestyle — Sushill Waddhwa | Travel, Culture & Wellbeing',
  '/media': 'Media & Keynotes — Sushill Waddhwa | Speaking, WedTalks & Screen Storytelling',
  '/collaborate': 'Selective Collaborations — Sushill Waddhwa | Luxury Brand Partnerships',
  '/contact': 'Contact Executive Office — Sushill Waddhwa | Inquiries & Strategic Dialogue',
};

export const App = () => {
  const location = useLocation();
  const [isPreloaderActive, setIsPreloaderActive] = React.useState(true);

  // Dynamic route-based title updates for SEO
  useEffect(() => {
    const title = pageTitles[location.pathname] || 'Sushill Waddhwa — Global Hospitality Entrepreneur';
    document.title = title;
  }, [location.pathname]);

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
    <div className="min-h-screen flex flex-col bg-bone text-ink selection:bg-bronze selection:text-bone font-sans">
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
