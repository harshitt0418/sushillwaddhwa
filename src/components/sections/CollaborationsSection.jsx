import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import collaborationImg from '@/assets/images/editorial/sushill-ocean-pavilion.jpg';

const CATEGORIES = [
  "Luxury hotels and resorts",
  "Tourism boards and destinations",
  "Travel",
  "Automotive",
  "Watches",
  "Fashion",
  "Eyewear",
  "Wellness",
  "Lifestyle",
];

const SELECTED_CAMPAIGNS = [
  { name: "One&Only One Za’abeel", location: "Dubai" },
  { name: "Six Senses Zighy Bay", location: "Oman" },
  { name: "Cinnamon Bentota Beach", location: "Sri Lanka" },
  { name: "Cinnamon Life at City of Dreams", location: "Colombo" },
  { name: "ITC Ratnadipa", location: "Colombo" },
  { name: "Kahanda Kanda", location: "Sri Lanka" },
];

export const CollaborationsSection = () => {
  return (
    <section id="collaborations" className="relative w-full bg-obsidian text-ivory py-20 md:py-28 border-t border-bronze/20">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 sm:mb-18 border-b border-bronze/25 pb-6">
          <div>
            <span className="font-subheading text-[10px] sm:text-xs tracking-super-wide text-bronze uppercase font-medium block mb-2">
              03 • Selective Partnerships
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal">
              Selected Brand Collaborations
            </h2>
          </div>
          <div className="font-subheading text-xs text-stone tracking-widest uppercase">
            Curated Alignments
          </div>
        </div>

        {/* Introduction & Mandatory Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <p className="font-sans text-base sm:text-lg md:text-xl text-ivory font-light leading-relaxed">
              “Sushill Waddhwa collaborates selectively with luxury, hospitality, travel and lifestyle brands on destination campaigns, editorial content, brand films, ambassadorial partnerships and curated experiences.”
            </p>

            {/* 9 Categories List */}
            <div className="pt-4 border-t border-bronze/20">
              <span className="font-subheading text-xs uppercase tracking-widest text-bronze block mb-4 font-medium">
                Collaboration Categories
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {CATEGORIES.map((cat, idx) => (
                  <div
                    key={cat}
                    className="p-3 bg-navy border border-bronze/20 flex items-center gap-3"
                  >
                    <span className="font-subheading text-[10px] text-bronze font-mono">
                      0{idx + 1}
                    </span>
                    <span className="font-sans text-xs text-stone font-light">
                      {cat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Curated Client Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-navy border border-bronze/30 shadow-2xl">
              <img
                src={collaborationImg}
                alt="Sushill Waddhwa — Luxury hospitality and destination collaboration"
                className="w-full h-full object-cover filter contrast-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-obsidian/85 backdrop-blur-sm border border-bronze/25 text-center">
                <span className="font-subheading text-[10px] uppercase tracking-widest text-bronze font-mono block">
                  Curated Destination Showcase
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Campaigns Showcase: Text-Led Editorial Cards */}
        <div className="bg-navy p-6 sm:p-10 lg:p-12 border border-bronze/25 mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-bronze/20 pb-4">
            <div>
              <span className="font-subheading text-[10px] uppercase tracking-widest text-bronze block font-mono">
                Verified Initiatives
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
                Selected Campaigns
              </h3>
            </div>
            <span className="font-subheading text-xs text-stone tracking-wider font-light">
              Luxury Destinations & Resorts
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SELECTED_CAMPAIGNS.map((camp) => (
              <div
                key={camp.name}
                className="p-5 sm:p-6 bg-obsidian border border-bronze/25 hover:border-bronze transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-subheading text-[10px] uppercase tracking-wider text-bronze font-mono block mb-2">
                    {camp.location}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl text-ivory font-normal leading-snug">
                    {camp.name}
                  </h4>
                </div>
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-stone font-subheading">
                  <span className="uppercase tracking-widest text-[9px] text-stone/80">Campaign Showcase</span>
                  <span className="text-bronze text-xs">•</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Enquiries Contact Card */}
        <div className="p-6 sm:p-8 bg-obsidian-deep border border-bronze/35 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-subheading text-[10px] uppercase tracking-widest text-bronze font-mono">
              Direct Dialogue
            </span>
            <p className="font-serif text-xl sm:text-2xl text-ivory font-normal">
              Collaboration Enquiries
            </p>
            <p className="font-sans text-xs sm:text-sm text-stone font-light">
              Connect regarding destination campaigns, brand alignments, and curated experiences.
            </p>
          </div>
          <a
            href="mailto:info@platinumworld.net"
            className="font-subheading inline-flex items-center gap-2.5 px-6 py-3 text-xs tracking-widest uppercase bg-bronze text-ink hover:bg-bronze-light transition-colors font-medium rounded-[1px] whitespace-nowrap"
          >
            <Mail className="w-4 h-4 text-ink" />
            <span>info@platinumworld.net</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default CollaborationsSection;
