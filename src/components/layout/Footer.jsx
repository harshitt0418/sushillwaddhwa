import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { navigationLinks } from '@/data/navigation';

export const Footer = () => {
  return (
    <footer className="bg-obsidian text-ivory pt-20 pb-12 border-t border-gold/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Tier: Brand Statement & Wordmark */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gold/15">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] tracking-super-wide text-gold uppercase block mb-2 font-mono">
                Founder & CMD, Platinum World Grroup · Since 1989
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-ivory tracking-wide uppercase">
                {siteConfig.name}
              </h3>
            </div>
            <p className="font-serif italic text-lg text-ivory/85">
              “{siteConfig.masterTagline}”
            </p>
            <p className="text-warmgrey-light text-xs sm:text-sm leading-relaxed font-light max-w-md">
              {siteConfig.bioSummary}
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] tracking-widest uppercase py-1.5 px-3 border border-gold/40 text-gold-champagne bg-charcoal/60 font-mono">
                Global Hospitality Entrepreneur · Investor · Luxury Lifestyle
              </span>
            </div>
          </div>

          {/* Core Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] tracking-super-wide text-gold uppercase block mb-3 font-mono">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-warmgrey-light hover:text-gold transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-gold/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Ventures */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] tracking-super-wide text-gold uppercase block mb-3 font-mono">
              Ventures
            </span>
            <ul className="space-y-2.5 text-xs">
              {siteConfig.ventures.map((venture) => (
                <li key={venture.name}>
                  <Link
                    to={venture.link}
                    className="text-warmgrey-light hover:text-gold transition-colors block"
                  >
                    <span className="block text-ivory font-medium">{venture.name}</span>
                    <span className="text-[10px] text-warmgrey block font-mono">{venture.role}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinates & Verified Socials */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] tracking-super-wide text-gold uppercase block mb-3 font-mono">
              Connect
            </span>
            <div className="space-y-3 text-xs text-warmgrey-light">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-gold" />
                <span>Instagram Profile</span>
                <ArrowUpRight className="w-3 h-3 text-warmgrey" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-gold" />
                <span>LinkedIn Network</span>
                <ArrowUpRight className="w-3 h-3 text-warmgrey" />
              </a>
            </div>

            <div className="pt-4 border-t border-gold/15 space-y-1 text-[11px] text-warmgrey">
              <p className="text-ivory font-medium">Executive Inquiries:</p>
              <a
                href={`mailto:${siteConfig.contact.executiveDesk}`}
                className="font-mono text-[10px] text-warmgrey-light hover:text-gold transition-colors block"
              >
                {siteConfig.contact.executiveDesk}
              </a>
            </div>
          </div>
        </div>

        {/* Middle Tier: Verified Entities Note */}
        <div className="py-6 border-b border-gold/10 flex flex-wrap items-center justify-between gap-4 text-xs text-warmgrey">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-gold font-mono text-[10px] uppercase">Ecosystem:</span>
            <span className="text-ivory/90">Platinum World Grroup</span>
            <span className="w-1 h-1 rounded-full bg-gold/40" />
            <span className="text-ivory/90">Artoso Hospitality Corp.</span>
            <span className="w-1 h-1 rounded-full bg-gold/40" />
            <span className="text-ivory/90">WedTalks</span>
            <span className="w-1 h-1 rounded-full bg-gold/40" />
            <span className="text-ivory/90">Platinum World Pictures</span>
          </div>
          <div className="text-[11px] text-warmgrey font-mono">
            Global Hospitality · Investments · Luxury Lifestyle
          </div>
        </div>

        {/* Bottom Tier: Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-warmgrey font-light">
          <div>
            © {new Date().getFullYear()} Sushill Waddhwa. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Established 1989</span>
            <span className="w-1 h-1 rounded-full bg-gold/40" />
            <span>Building a world worth experiencing.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
