import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { navigationLinks, headerCTA } from '@/data/navigation';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Section spy
      const sections = ['home', 'about', 'business', 'collaborations', 'media', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -70 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-obsidian/95 backdrop-blur-xl py-3.5 border-b border-bronze/20 shadow-[0_12px_36px_rgba(4,7,13,0.7)]"
            : "bg-obsidian/80 backdrop-blur-md py-4 sm:py-5 border-b border-white/10"
        )}
      >
        <div className="max-w-[1560px] w-full mx-auto px-4 sm:px-6 md:px-8 xl:px-12 flex items-center justify-between gap-4">
          
          {/* Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col flex-shrink-0"
          >
            <span className="font-serif text-lg sm:text-xl xl:text-2xl tracking-[0.16em] font-normal text-ivory group-hover:text-bronze transition-colors duration-300 uppercase">
              Sushill Waddhwa
            </span>
            <span className="font-subheading text-[8px] sm:text-[9px] tracking-super-wide text-bronze uppercase -mt-0.5 truncate font-medium">
              Founder & CMD, Platinum World Grroup
            </span>
          </a>

          {/* Desktop Navigation — Exactly 6 items */}
          <nav className="hidden nav:flex items-center gap-4 xl:gap-6 2xl:gap-8 flex-shrink-0" aria-label="Main Navigation">
            {navigationLinks.map((link, idx) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "font-subheading text-[10px] xl:text-[11px] uppercase tracking-[0.14em] font-medium transition-all duration-300 relative py-1 group",
                    isActive
                      ? "text-ivory font-semibold"
                      : "text-stone hover:text-ivory"
                  )}
                >
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <span className="text-[9px] text-bronze/60 group-hover:text-bronze transition-colors">
                      0{idx + 1}
                    </span>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-bronze" />
                    )}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Header Action Button - Contact */}
          <div className="hidden nav:flex items-center flex-shrink-0">
            <a
              href={headerCTA.href}
              onClick={(e) => handleNavClick(e, headerCTA.href)}
              className="font-subheading px-4 py-2 text-[10px] tracking-widest uppercase border border-bronze/40 text-ivory hover:border-bronze hover:text-bronze transition-colors rounded-[1px] font-medium whitespace-nowrap"
            >
              {headerCTA.label}
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="nav:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-ivory hover:text-bronze transition-colors duration-300 flex-shrink-0 -mr-2"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </>
  );
};

export default Header;
