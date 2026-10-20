import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { navigationLinks } from '@/data/navigation';
import { serviceCategories } from '@/data/services';

export const Footer = () => {
  return (
    <footer className="bg-ink text-bone pt-20 pb-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Tier: Brand Statement & Wordmark */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] tracking-super-wide text-bronze uppercase block mb-2">
                A Private Access House
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-bone tracking-wide uppercase">
                {siteConfig.name}
              </h3>
            </div>
            <p className="text-stone text-sm leading-relaxed font-light max-w-md">
              Connecting exceptional hospitality, global opportunity and considered relationships — creating possibilities where discretion matters.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] tracking-widest uppercase py-1.5 px-3 border border-bronze/40 text-bronze">
                Verified Global Hospitality Leader
              </span>
            </div>
          </div>

          {/* Pillars Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] tracking-super-wide text-stone uppercase block mb-3">
              Private Access
            </span>
            <ul className="space-y-2.5 text-xs">
              {serviceCategories.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/private-access#${service.id}`}
                    className="text-stone hover:text-bronze transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <span className="text-[10px] text-stone/50 font-mono">{service.number}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] tracking-super-wide text-stone uppercase block mb-3">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-stone hover:text-bronze transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinates & Verified Socials */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] tracking-super-wide text-stone uppercase block mb-3">
              Channels
            </span>
            <div className="space-y-3 text-xs text-stone">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-bronze transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram Profile</span>
                <ArrowUpRight className="w-3 h-3 text-stone/60" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-bronze transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Network</span>
                <ArrowUpRight className="w-3 h-3 text-stone/60" />
              </a>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-1 text-[11px] text-stone/80">
              <p className="text-stone-light font-medium">Inquiry Desk:</p>
              <p className="font-mono text-[10px]">{siteConfig.contactPlaceholders.privateDeskEmail}</p>
            </div>
          </div>
        </div>

        {/* Middle Tier: Verified Entities Note */}
        <div className="py-8 border-b border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-stone/70">
          <div className="flex flex-wrap items-center gap-6">
            <span>Associated Platforms:</span>
            <span className="text-stone-light">Platinum World Group / Platinum World Lifestyle</span>
            <span className="w-1 h-1 rounded-full bg-stone/40" />
            <span className="text-stone-light">Artoso Hospitality Corp.</span>
          </div>
          <div className="text-[11px] text-stone/60 italic">
            Discreet representation across luxury hospitality & assets
          </div>
        </div>

        {/* Bottom Tier: Legal & Architecture */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone/60 font-light">
          <div>
            © {new Date().getFullYear()} Sushill Waddhwa. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Private Access Protocol</span>
            <span className="w-1 h-1 rounded-full bg-stone/40" />
            <span>Designed for private access.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
