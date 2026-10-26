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
  { id: "01", name: "One&Only One Za’abeel", location: "Dubai", label: "Destination Campaign" },
  { id: "02", name: "Six Senses Zighy Bay", location: "Oman", label: "Luxury Resort Showcase" },
  { id: "03", name: "Cinnamon Bentota Beach", location: "Sri Lanka", label: "Hospitality Alignment" },
  { id: "04", name: "Cinnamon Life at City of Dreams", location: "Colombo", label: "Landmark Resort Experience" },
  { id: "05", name: "ITC Ratnadipa", location: "Colombo", label: "Luxury Destination Initiative" },
  { id: "06", name: "Kahanda Kanda", location: "Sri Lanka", label: "Boutique Experience" },
];

export const CollaborationsSection = () => {
  const [activeCampaign, setActiveCampaign] = useState(0);

  return (
    <section
      id="collaborations"
      className="relative w-full bg-obsidian text-ivory py-24 md:py-32 border-t border-bronze/25"
    >
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-20 border-b border-bronze/20 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-subheading text-[10px] tracking-super-wide text-bronze uppercase font-mono">
                CHAPTER 03
              </span>
              <span className="text-stone/40 font-mono text-xs">//</span>
              <span className="font-subheading text-[10px] tracking-super-wide text-stone uppercase">
                STRATEGIC ALIGNMENTS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight">
              Selected Brand Collaborations
            </h2>
          </div>
          <div className="font-subheading text-xs text-stone tracking-widest uppercase font-mono">
            Discerning Global Partnerships
          </div>
        </div>

        {/* Master Copy Statement (DM Serif Display quotation) */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory/95 font-normal leading-[1.3] italic">
            “Sushill Waddhwa collaborates selectively with luxury, hospitality, travel and lifestyle brands on destination campaigns, editorial content, brand films, ambassadorial partnerships and curated experiences.”
          </p>
        </div>

        {/* REFINED TYPOGRAPHIC RIBBON: 9 Categories (Not generic cards) */}
        <div className="mb-20 sm:mb-24 border-y border-bronze/30 py-6 sm:py-8 bg-navy/40">
          <div className="flex items-center justify-between mb-4">
            <span className="font-subheading text-[10px] uppercase tracking-super-wide text-bronze font-mono">
              Partnership Spectrum — Nine Categories
            </span>
            <span className="font-subheading text-[10px] uppercase tracking-widest text-stone font-mono">
              [ 01 — 09 ]
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6">
            {CATEGORIES.map((category, idx) => (
              <div key={category} className="flex items-baseline gap-2.5 group">
                <span className="font-mono text-[10px] text-bronze/60">
                  0{idx + 1}.
                </span>
                <span className="font-subheading text-xs sm:text-sm text-stone group-hover:text-ivory transition-colors font-medium">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE-LED EDITORIAL CAMPAIGN INDEX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          
          {/* Left Column: Editorial Campaign Index Register */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b border-bronze/20 pb-3 mb-4">
              <span className="font-subheading text-[10px] uppercase tracking-widest text-bronze font-mono">
                Verified Initiatives
              </span>
              <span className="font-subheading text-[10px] uppercase tracking-widest text-stone font-mono">
                Selected Campaigns
              </span>
            </div>

            <div className="divide-y divide-bronze/15">
              {SELECTED_CAMPAIGNS.map((camp, idx) => {
                const isSelected = activeCampaign === idx;
                return (
                  <div
                    key={camp.name}
                    onMouseEnter={() => setActiveCampaign(idx)}
                    onClick={() => setActiveCampaign(idx)}
                    className={`group py-4 sm:py-5 flex items-center justify-between cursor-pointer transition-all duration-300 ${
                      isSelected ? 'pl-2 bg-navy/50 border-l-2 border-bronze' : 'hover:pl-2'
                    }`}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs sm:text-sm text-bronze/70">
                        {camp.id}
                      </span>
                      <div>
                        <h4 className={`font-serif text-lg sm:text-2xl transition-colors duration-300 font-normal ${
                          isSelected ? 'text-ivory' : 'text-stone group-hover:text-ivory'
                        }`}>
                          {camp.name}
                        </h4>
                        <span className="font-sans text-[11px] text-stone/80 block mt-0.5">
                          {camp.location}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-subheading text-[10px] uppercase tracking-wider text-bronze font-mono hidden sm:inline-block">
                        {camp.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Large Verified Client Campaign Visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-navy border border-bronze/35 shadow-[0_24px_70px_rgba(0,0,0,0.7)]">
              <img
                src={collaborationImg}
                alt="Sushill Waddhwa — Luxury hospitality and destination collaboration"
                className="w-full h-full object-cover filter contrast-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-obsidian/90 backdrop-blur-md border border-bronze/25">
                <span className="font-subheading text-[9px] uppercase tracking-super-wide text-bronze block font-mono font-medium">
                  Curated Destination Showcase
                </span>
                <span className="font-serif text-sm sm:text-base text-ivory block mt-0.5">
                  {SELECTED_CAMPAIGNS[activeCampaign].name}
                </span>
                <span className="font-sans text-[11px] text-stone block font-light">
                  {SELECTED_CAMPAIGNS[activeCampaign].location}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Clear Collaboration Contact Dialogue */}
        <div className="p-8 sm:p-10 bg-navy border border-bronze/35 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="font-subheading text-[10px] uppercase tracking-widest text-bronze font-mono font-medium">
              Selective Inquiries
            </span>
            <p className="font-serif text-2xl text-ivory font-normal">
              Brand Alignments & Campaigns
            </p>
            <p className="font-sans text-xs sm:text-sm text-stone font-light">
              Connect regarding destination campaigns, brand films, and curated experiences.
            </p>
          </div>
          <a
            href="mailto:info@platinumworld.net?subject=Brand%20Collaboration%20Inquiry"
            className="font-subheading inline-flex items-center gap-2.5 px-6 py-3.5 text-xs tracking-widest uppercase bg-bronze text-ink hover:bg-bronze-light transition-colors font-semibold rounded-[1px] whitespace-nowrap"
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
