import React from 'react';
import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { navigationLinks } from '@/data/navigation';

export const Footer = () => {
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
    <footer className="bg-obsidian-deep text-ivory pt-16 pb-12 border-t border-bronze/30">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-bronze/20">
          
          {/* Identity & Closing Statement */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-subheading text-[10px] tracking-super-wide text-bronze uppercase block mb-1.5 font-medium">
                Founder & CMD, Platinum World Grroup • Since 1989
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-ivory tracking-wide uppercase">
                {siteConfig.name}
              </h3>
            </div>
            
            <p className="font-serif italic text-lg text-bronze-light">
              “{siteConfig.closingLine}”
            </p>

            <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed font-light max-w-md">
              {siteConfig.bioSummary}
            </p>
          </div>

          {/* Quick Section Anchors */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-subheading text-[10px] tracking-super-wide text-bronze uppercase block mb-3 font-medium">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-subheading text-stone hover:text-ivory transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-bronze opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Ventures */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-subheading text-[10px] tracking-super-wide text-bronze uppercase block mb-3 font-medium">
              Ventures
            </span>
            <ul className="space-y-2 text-xs">
              {siteConfig.ventures.map((v) => (
                <li key={v.name}>
                  <a
                    href="#business"
                    onClick={(e) => handleNavClick(e, '#business')}
                    className="font-sans text-stone hover:text-ivory transition-colors block"
                  >
                    {v.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinates */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-subheading text-[10px] tracking-super-wide text-bronze uppercase block mb-3 font-medium">
              Connect
            </span>
            <div className="space-y-2.5 text-xs">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-subheading flex items-center gap-2 text-stone hover:text-bronze transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-bronze" />
                <span>@sushillwaddhwa</span>
              </a>
              <a
                href={siteConfig.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-subheading flex items-center gap-2 text-stone hover:text-bronze transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-bronze" />
                <span>Sushill Waddhwa</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-subheading block pt-2 text-stone hover:text-ivory text-[11px] truncate"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone font-subheading">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Sushill Waddhwa. All rights reserved.
          </div>
          <div className="text-[10px] sm:text-xs tracking-wider uppercase text-bronze/80 text-center font-medium">
            {siteConfig.attributesLine}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
