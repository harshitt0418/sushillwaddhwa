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
      className="relative w-full bg-obsidian text-ivory py-28 sm:py-36 md:py-44 border-t border-bronze/20 z-40"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14">
        
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 sm:mb-28 border-b border-bronze/20 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-subheading text-[10px] tracking-[0.24em] text-bronze uppercase font-mono">
                CHAPTER 03
              </span>
              <span className="text-stone/40 font-mono text-xs">//</span>
              <span className="font-subheading text-[10px] tracking-[0.24em] text-stone uppercase">
                STRATEGIC ALIGNMENTS
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-normal tracking-tight">
              Selected Brand Collaborations
            </h2>
          </div>
          <div className="font-subheading text-xs text-stone tracking-[0.2em] uppercase font-mono text-right">
            Curated Global Campaigns
          </div>
        </div>

        {/* Master Statement (Oversized Serif Italic Quote) */}
        <div className="max-w-4xl mb-20 sm:mb-28">
          <p className="font-serif text-2xl sm:text-4xl md:text-5xl text-ivory/95 font-normal leading-[1.25] italic">
            “Sushill Waddhwa collaborates selectively with luxury, hospitality, travel and lifestyle brands on destination campaigns, editorial content, brand films, ambassadorial partnerships and curated experiences.”
          </p>
        </div>

        {/* REFINED TYPOGRAPHIC RIBBON: 9 Categories (No generic cards) */}
        <div className="mb-24 sm:mb-32 border-y border-bronze/30 py-8 bg-navy/30">
          <div className="flex items-center justify-between mb-6">
            <span className="font-subheading text-[10px] uppercase tracking-[0.22em] text-bronze font-mono">
              Partnership Spectrum — Nine Focus Categories
            </span>
            <span className="font-subheading text-[10px] uppercase tracking-[0.22em] text-stone font-mono">
              [ 01 — 09 ]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            {CATEGORIES.map((category, idx) => (
              <div key={category} className="flex items-baseline gap-3 py-1 group">
                <span className="font-mono text-xs text-bronze/60">0{idx + 1}.</span>
                <span className="font-subheading text-xs sm:text-sm text-stone group-hover:text-ivory transition-colors uppercase tracking-[0.14em] font-medium">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LUXURY EDITORIAL ROSTER & VERIFIED CLIENT VISUAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 sm:mb-28">
          
          {/* Editorial Roster Table */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-bronze/30 pb-4">
              <span className="font-subheading text-[10px] uppercase tracking-[0.2em] text-bronze font-mono">
                Selected Campaigns Roster
              </span>
              <span className="font-subheading text-[10px] uppercase tracking-[0.2em] text-stone font-mono">
                Six Verified Destinations
              </span>
            </div>

            <div className="divide-y divide-bronze/15">
              {SELECTED_CAMPAIGNS.map((camp, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={camp.name}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => setActiveIdx(idx)}
                    className={`group py-5 sm:py-6 flex items-baseline justify-between cursor-pointer transition-all duration-300 ${
                      isActive ? 'pl-4 border-l-2 border-bronze bg-navy/40' : 'hover:pl-2'
                    }`}
                  >
                    <div className="flex items-baseline gap-5 sm:gap-8">
                      <span className="font-mono text-xs sm:text-sm text-bronze/70">
                        {camp.id}
                      </span>
                      <div>
                        <h4 className={`font-serif text-xl sm:text-3xl font-normal transition-colors duration-300 ${
                          isActive ? 'text-ivory' : 'text-stone group-hover:text-ivory'
                        }`}>
                          {camp.name}
                        </h4>
                        <span className="font-sans text-xs text-stone/80 block mt-1 font-light">
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

          {/* Large Verified Client Visual */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative aspect-[4/5] overflow-hidden bg-navy border border-bronze/30 shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
              <img
                src={collaborationImg}
                alt="Sushill Waddhwa — Luxury hospitality and destination collaboration"
                className="w-full h-full object-cover filter contrast-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-obsidian/90 backdrop-blur-md border border-bronze/20">
                <span className="font-subheading text-[9px] uppercase tracking-[0.24em] text-bronze block font-mono font-medium">
                  Active Campaign Spotlight
                </span>
                <span className="font-serif text-lg sm:text-xl text-ivory block mt-1 font-normal">
                  {SELECTED_CAMPAIGNS[activeIdx].name}
                </span>
                <span className="font-sans text-xs text-stone block font-light mt-0.5">
                  {SELECTED_CAMPAIGNS[activeIdx].location} • {SELECTED_CAMPAIGNS[activeIdx].highlight}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Refined Collaboration Action */}
        <div className="border-t border-bronze/30 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-subheading text-[10px] uppercase tracking-[0.2em] text-bronze font-mono">
              Direct Partnership Inquiry
            </span>
            <p className="font-serif text-2xl text-ivory font-normal">
              Brand Alignments & Ambassadorial Dialogues
            </p>
          </div>
          <a
            href="mailto:info@platinumworld.net?subject=Brand%20Collaboration%20Inquiry%20-%20Sushill%20Waddhwa"
            className="font-subheading inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase bg-bronze text-ink hover:bg-bronze-light transition-colors font-semibold shadow-lg whitespace-nowrap"
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
