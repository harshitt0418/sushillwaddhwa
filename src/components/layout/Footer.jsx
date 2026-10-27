import React from 'react';
import { siteConfig } from '@/data/siteConfig';

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Business', href: '#business' },
  { label: 'Brand Collaborations', href: '#collaborations' },
  { label: 'Media', href: '#media' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-[#111111]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-cormorant font-light text-[#F5F1E8] tracking-[0.1em] text-[18px] mb-1">
              SUSHILL WADDHWA
            </p>
            <p className="font-inter text-[12px] text-[#8C8A85]">
              {siteConfig.title}
            </p>
          </div>
          {/* Nav */}
          <nav className="flex flex-wrap gap-6">
            {NAV.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="font-manrope uppercase tracking-[0.15em] text-[9px] text-[#8C8A85] hover:text-[#B98A4A] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-[rgba(185,138,74,0.1)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-[11px] text-[rgba(140,138,133,0.5)]">
            © {year} Sushill Waddhwa. All rights reserved.
          </p>
          <a
            href="mailto:info@platinumworld.net"
            className="font-inter text-[11px] text-[rgba(140,138,133,0.5)] hover:text-[#B98A4A] transition-colors duration-300"
          >
            info@platinumworld.net
          </a>
        </div>
      </div>
    </footer>
  );
}
