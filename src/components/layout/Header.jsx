import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';

const NAV = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'BUSINESS', href: '#business' },
  { label: 'BRAND COLLABORATIONS', href: '#collaborations' },
  { label: 'MEDIA', href: '#media' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(245,241,232,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(185,138,74,0.15)' : 'none',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => handleNav(e, '#home')}
            className="font-cormorant font-light tracking-widest text-[13px] transition-colors duration-300"
            style={{ color: scrolled ? '#111111' : '#F5F1E8', letterSpacing: '0.15em', textShadow: scrolled ? 'none' : '0 1px 12px rgba(0,0,0,0.55)' }}
          >
            SUSHILL WADDHWA
          </a>

          <nav className="hidden nav:flex items-center gap-8">
            {NAV.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="font-manrope text-[10px] tracking-[0.18em] uppercase relative group transition-colors duration-300"
                style={{ color: scrolled ? '#111111' : 'rgba(245,241,232,0.85)' }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#B98A4A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button className="nav:hidden flex flex-col gap-[5px] p-2" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            {[0, 1, 2].map((i) => (
              <span key={i} className="block w-5 h-px transition-colors duration-300" style={{ backgroundColor: scrolled ? '#111111' : '#F5F1E8' }} />
            ))}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileMenu nav={NAV} onClose={() => setMenuOpen(false)} onNav={handleNav} />}
      </AnimatePresence>
    </>
  );
}
