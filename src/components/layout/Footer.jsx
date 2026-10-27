import React from 'react';
import { Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { navigationLinks } from '@/data/navigation';

export const Footer = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: 0 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#111111] text-[#F5F1E8] py-16 sm:py-20 border-t border-bronze/25 z-50 relative">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14">
        
        {/* Top Minimalist Editorial Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-12 border-b border-bronze/15">
          
          <div className="space-y-3">
            <span className="font-serif text-2xl sm:text-3xl text-[#F5F1E8] font-normal tracking-wide uppercase">
              {siteConfig.name}
            </span>
            <p className="font-subheading text-[10px] tracking-[0.22em] text-bronze uppercase font-medium">
              Global Hospitality Entrepreneur • Investor • Founder & CMD, Platinum World Grroup
            </p>
          </div>

          {/* Minimalist Anchors */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8" aria-label="Footer Navigation">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-subheading text-xs tracking-[0.18em] uppercase text-stone/80 hover:text-[#F5F1E8] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Scroll to Top Cue */}
          <div>
            <button
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 text-xs font-subheading uppercase tracking-[0.2em] text-stone hover:text-bronze transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-bronze group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Metadata Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone font-subheading">
          <div>
            © {new Date().getFullYear()} Sushill Waddhwa. All rights reserved.
          </div>
          <div className="text-[10px] sm:text-xs tracking-[0.22em] uppercase text-bronze text-center font-medium">
            {siteConfig.attributesLine}
          </div>
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone hover:text-bronze transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone hover:text-bronze transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
