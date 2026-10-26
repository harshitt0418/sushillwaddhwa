import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { navigationLinks } from '@/data/navigation';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scrollspy
      const sections = ['home', 'about', 'business', 'collaborations', 'media', 'contact'];
      const scrollPosition = window.scrollY + 250;

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
        window.lenis.scrollTo(target, { offset: 0 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
          isScrolled
            ? "bg-obsidian/90 backdrop-blur-xl py-4 border-b border-white/5 shadow-[0_16px_40px_rgba(0,0,0,0.8)]"
            : "bg-gradient-to-b from-obsidian/80 via-obsidian/30 to-transparent py-6 sm:py-8"
        )}
      >
        <div className="max-w-[1720px] w-full mx-auto px-6 sm:px-10 md:px-14 flex items-center justify-between gap-6">
          
          {/* Masthead Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col flex-shrink-0"
          >
            <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.14em] font-normal text-ivory group-hover:text-bronze transition-colors duration-400 uppercase">
              Sushill Waddhwa
            </span>
            <span className="font-subheading text-[8px] sm:text-[9px] tracking-[0.24em] text-bronze uppercase font-medium">
              Founder & CMD • Platinum World Grroup
            </span>
          </a>

          {/* Editorial Desktop Navigation */}
          <nav className="hidden nav:flex items-center gap-6 xl:gap-9 flex-shrink-0" aria-label="Main Navigation">
            {navigationLinks.map((link, idx) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "font-subheading text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-300 relative py-1 group",
                    isActive
                      ? "text-ivory font-semibold"
                      : "text-stone/75 hover:text-ivory"
                  )}
                >
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <span className="font-mono text-[9px] text-bronze/50 group-hover:text-bronze transition-colors">
                      0{idx + 1}
                    </span>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-bronze" />
                    )}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Minimalist Contact Cue */}
          <div className="hidden nav:flex items-center flex-shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="font-subheading px-5 py-2 text-[10px] tracking-[0.2em] uppercase border border-bronze/40 text-ivory hover:border-bronze hover:text-bronze transition-all duration-300 font-medium"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="nav:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-ivory hover:text-bronze transition-colors duration-300 flex-shrink-0 -mr-2"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6 stroke-[1.25]" />
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
