import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { allRoutes } from '@/data/navigation';

export const Footer = () => {
  return (
    <footer className="bg-ivory text-ink pt-20 pb-12 border-t-2 border-gold/40 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Tier: Brand Statement & Wordmark */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-champagne/80">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] tracking-super-wide text-gold uppercase block mb-2 font-mono font-medium">
                Founder & CMD, Platinum World Grroup · Since 1989
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-ink tracking-wide uppercase">
                {siteConfig.name}
              </h3>
            </div>
            <p className="font-serif italic text-lg text-ink/85">
              “{siteConfig.masterTagline}”
            </p>
            <p className="text-warmgrey text-xs sm:text-sm leading-relaxed font-light max-w-md">
              {siteConfig.bioSummary}
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] tracking-widest uppercase py-1.5 px-3 border border-gold/40 text-ink bg-champagne/40 font-mono font-medium">
                Global Hospitality Entrepreneur · Investor · Luxury Lifestyle
              </span>
            </div>
          </div>

          {/* Core Navigation - All Routes Cleanly Linked */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] tracking-super-wide text-gold uppercase block mb-3 font-mono font-medium">
              Explore Routes
            </span>
            <ul className="space-y-2.5 text-xs">
              {allRoutes.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-warmgrey hover:text-ink hover:text-gold transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-gold/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Ventures */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] tracking-super-wide text-gold uppercase block mb-3 font-mono font-medium">
              Ventures
            </span>
            <ul className="space-y-2.5 text-xs">
              {siteConfig.ventures.map((venture) => (
                <li key={venture.name}>
                  <Link
                    to={venture.link}
                    className="text-warmgrey hover:text-ink transition-colors block"
                  >
                    <span className="block text-ink font-medium">{venture.name}</span>
                    <span className="text-[10px] text-warmgrey block font-mono">{venture.role}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinates & Verified Socials */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] tracking-super-wide text-gold uppercase block mb-3 font-mono font-medium">
              Connect
            </span>
            <div className="space-y-3 text-xs text-warmgrey">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-gold" />
                <span className="text-ink">Instagram Profile</span>
                <ArrowUpRight className="w-3 h-3 text-warmgrey" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-gold" />
                <span className="text-ink">LinkedIn Network</span>
                <ArrowUpRight className="w-3 h-3 text-warmgrey" />
              </a>
            </div>

            <div className="pt-4 border-t border-champagne/80 space-y-1 text-[11px] text-warmgrey">
              <p className="text-ink font-medium">Executive Inquiries:</p>
              <a
                href={`mailto:${siteConfig.contact.executiveDesk}`}
                className="font-mono text-xs text-ink hover:text-gold transition-colors block"
              >
                {siteConfig.contact.executiveDesk}
              </a>
            </div>
          </div>
        </div>

        {/* Middle Tier: Verified Entities Note */}
        <div className="py-6 border-b border-champagne/80 flex flex-wrap items-center justify-between gap-4 text-xs text-warmgrey">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <span className="text-gold font-mono text-[10px] uppercase font-medium">Ecosystem:</span>
            <span className="text-ink font-medium">Platinum World Grroup</span>
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            <span className="text-ink font-medium">Artoso Hospitality Corp.</span>
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            <span className="text-ink font-medium">WedTalks</span>
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            <span className="text-ink font-medium">Platinum World Pictures</span>
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
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            <span>Building a world worth experiencing.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;