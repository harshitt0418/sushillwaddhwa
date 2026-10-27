import React, { useState } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
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
  { id: "01", name: "One&Only One Za’abeel", location: "Dubai", highlight: "Destination Campaign & Global Launch" },
  { id: "02", name: "Six Senses Zighy Bay", location: "Oman", highlight: "Ultra-Luxury Hideaway Experience" },
  { id: "03", name: "Cinnamon Bentota Beach", location: "Sri Lanka", highlight: "Geoffrey Bawa Architectural Heritage" },
  { id: "04", name: "Cinnamon Life at City of Dreams", location: "Colombo", highlight: "Integrated City Resort Landmark" },
  { id: "05", name: "ITC Ratnadipa", location: "Colombo", highlight: "Premier Luxury Hospitality Initiative" },
  { id: "06", name: "Kahanda Kanda", location: "Sri Lanka", highlight: "Curated Boutique Estate Sanctuary" },
];

export const CollaborationsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="collaborations"
      className="relative w-full bg-[#F5F1E8] text-[#111111] py-24 sm:py-32 md:py-40 border-t border-[#111111]/10 z-40"
    >
      <div className="max-w-[1480px] mx-auto px-6 sm:px-10 md:px-14">
        
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24 border-b border-[#111111]/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-subheading text-[10px] sm:text-xs tracking-[0.24em] text-bronze uppercase font-mono font-semibold">
                CHAPTER 03
              </span>
              <span className="text-stone/60 font-mono text-xs">//</span>
              <span className="font-subheading text-[10px] sm:text-xs tracking-[0.24em] text-bronze uppercase font-mono font-semibold">
                STRATEGIC ALIGNMENTS
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#111111] font-normal tracking-tight">
              Selected Brand Collaborations
            </h2>
          </div>
          <div className="font-subheading text-xs text-[#6B6966] tracking-[0.2em] uppercase font-mono text-left md:text-right">
            Curated Global Campaigns
          </div>
        </div>

        {/* Master Statement: Oversized Cormorant Garamond Italic Quote */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <p className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#111111] font-normal leading-[1.25] italic">
            “Sushill Waddhwa collaborates selectively with luxury, hospitality, travel and lifestyle brands on destination campaigns, editorial content, brand films, ambassadorial partnerships and curated experiences.”
          </p>
        </div>

        {/* 9 Focus Categories Typographic List */}
        <div className="mb-20 sm:mb-28 border-y border-bronze/30 py-8 bg-[#FAF7F2]">
          <div className="flex items-center justify-between mb-6">
            <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-[0.22em] text-bronze font-mono font-semibold">
              Partnership Spectrum — Nine Focus Categories
            </span>
            <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#6B6966] font-mono">
              [ 01 — 09 ]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            {CATEGORIES.map((category, idx) => (
              <div key={category} className="flex items-baseline gap-3 py-1 group">
                <span className="font-mono text-xs text-bronze font-semibold">0{idx + 1}.</span>
                <span className="font-subheading text-xs sm:text-sm text-[#444444] group-hover:text-[#111111] transition-colors uppercase tracking-[0.14em] font-medium">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Roster & Sticky Client Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 sm:mb-28">
          
          {/* Editorial Roster Table */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-[#111111]/15 pb-4">
              <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-bronze font-mono font-semibold">
                Selected Campaigns Roster
              </span>
              <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#6B6966] font-mono">
                Six Verified Destinations
              </span>
            </div>

            <div className="divide-y divide-[#111111]/10">
              {SELECTED_CAMPAIGNS.map((camp, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={camp.name}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => setActiveIdx(idx)}
                    className={`group py-5 sm:py-6 flex items-baseline justify-between cursor-pointer transition-all duration-300 ${
                      isActive ? 'pl-4 border-l-2 border-bronze bg-[#FAF7F2]' : 'hover:pl-2'
                    }`}
                  >
                    <div className="flex items-baseline gap-5 sm:gap-8">
                      <span className="font-mono text-xs sm:text-sm text-bronze font-semibold">
                        {camp.id}
                      </span>
                      <div>
                        <h4 className={`font-serif text-xl sm:text-3xl font-normal transition-colors duration-300 ${
                          isActive ? 'text-[#111111]' : 'text-[#6B6966] group-hover:text-[#111111]'
                        }`}>
                          {camp.name}
                        </h4>
                        <span className="font-sans text-xs text-[#8C8A85] block mt-1 font-light">
                          {camp.location} • {camp.highlight}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight className={`w-4 h-4 transition-all duration-300 ${
                      isActive ? 'text-bronze opacity-100' : 'opacity-0 group-hover:opacity-60 text-stone'
                    }`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Large Sticky Client Visual */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#EDE8DD] border border-bronze/30 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <img
                src={collaborationImg}
                alt="Sushill Waddhwa — Luxury hospitality and destination collaboration"
                className="w-full h-full object-cover filter contrast-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#111111]/90 backdrop-blur-md border border-bronze/30 text-[#F5F1E8]">
                <span className="font-subheading text-[9px] uppercase tracking-[0.24em] text-bronze block font-mono font-semibold">
                  Active Campaign Spotlight
                </span>
                <span className="font-serif text-lg sm:text-xl text-[#F5F1E8] block mt-1 font-normal">
                  {SELECTED_CAMPAIGNS[activeIdx].name}
                </span>
                <span className="font-sans text-xs text-stone block font-light mt-0.5">
                  {SELECTED_CAMPAIGNS[activeIdx].location} • {SELECTED_CAMPAIGNS[activeIdx].highlight}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Refined Collaboration CTA */}
        <div className="border-t border-[#111111]/10 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-bronze font-mono font-semibold">
              Direct Partnership Inquiry
            </span>
            <p className="font-serif text-2xl sm:text-3xl text-[#111111] font-normal">
              Brand Alignments & Ambassadorial Dialogues
            </p>
          </div>
          <a
            href="mailto:info@platinumworld.net?subject=Brand%20Collaboration%20Inquiry%20-%20Sushill%20Waddhwa"
            className="font-subheading inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase bg-[#111111] text-[#F5F1E8] hover:bg-bronze hover:text-[#111111] transition-colors font-semibold shadow-md whitespace-nowrap"
          >
            <Mail className="w-4 h-4 text-bronze" />
            <span>info@platinumworld.net</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default CollaborationsSection;
