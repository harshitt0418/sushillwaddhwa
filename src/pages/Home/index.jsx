import React, { useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { BusinessSection } from '@/components/sections/BusinessSection';
import { CollaborationsSection } from '@/components/sections/CollaborationsSection';
import { MediaSection } from '@/components/sections/MediaSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const Home = () => {
  useEffect(() => {
    // Check if there is an anchor hash in URL on initial load or navigation
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          if (window.lenis) {
            window.lenis.scrollTo(el, { offset: -70 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 150);
    }
  }, []);

  return (
    <div className="w-full">
      {/* 01. HOME: Hero Slideshow with 6 synced attribute words & intro */}
      <HeroSection />

      {/* 02. ABOUT: Verified career narrative, 1989, 82 countries, 2,040+ hotels */}
      <AboutSection />

      {/* 03. BUSINESS: 5 Exact Venture Blocks */}
      <BusinessSection />

      {/* 04. BRAND COLLABORATIONS: Selected campaigns & verified categories */}
      <CollaborationsSection />

      {/* 05. MEDIA: Press, Interviews, Articles */}
      <MediaSection />

      {/* 06. CONTACT: Direct coordinates & executive enquiry */}
      <ContactSection />
    </div>
  );
};

export default Home;
