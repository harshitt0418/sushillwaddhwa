import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import pwgImg from '@/assets/images/editorial/editorial-resort-buyout.jpg';
import artosoImg from '@/assets/images/editorial/editorial-artoso-feature.jpg';
import picturesImg from '@/assets/images/editorial/editorial-destination-cinema.jpg';
import lifestyleImg from '@/assets/images/editorial/sushill-maldives-villa.jpg';

export const BusinessSection = () => {
  const containerRef = useRef(null);

  return (
    <section
      id="business"
      ref={containerRef}
      className="relative w-full bg-obsidian-deep text-ivory py-24 md:py-32 border-t border-bronze/25"
    >
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-20 sm:mb-24 border-b border-bronze/20 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-subheading text-[10px] tracking-super-wide text-bronze uppercase font-mono">
                CHAPTER 02
              </span>
              <span className="text-stone/40 font-mono text-xs">//</span>
              <span className="font-subheading text-[10px] tracking-super-wide text-stone uppercase">
                PORTFOLIO LEDGER
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight">
              Business Ventures
            </h2>
          </div>
          <div className="font-subheading text-xs text-stone tracking-widest uppercase font-mono">
            Global Footprint • Five Commercial Pillars
          </div>
        </div>

        {/* 5 Distinct Editorial Venture Chapters (Portfolio Ledger Experience) */}
        <div className="space-y-24 sm:space-y-32">

          {/* VENTURE 01: Platinum World Grroup */}
          <div className="relative border-t border-bronze/30 pt-10 sm:pt-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3 text-stone font-mono text-xs">
                  <span className="text-bronze font-bold">01 // 05</span>
                  <span>—</span>
                  <span className="font-subheading text-[10px] uppercase tracking-super-wide text-stone">
                    Flagship Hospitality B2B
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal tracking-tight leading-[1.08]">
                  Platinum World Grroup
                </h3>

                <div className="inline-block py-1 px-3 bg-navy border border-bronze/30 text-bronze-light font-subheading text-[11px] sm:text-xs tracking-wider uppercase font-medium">
                  500+ Destinations | 100+ Countries | One Call Away
                </div>

                <div className="space-y-4 font-sans text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
                  <p>
                    A global B2B company serving events, wedding, celebration and travel planners through luxury hotel buyouts, group bookings, destination services and experiences across India, Sri Lanka, Asia, Dubai, Middle East, Monaco, Europe, the UK and beyond.
                  </p>
                  <p className="text-xs sm:text-sm text-stone">
                    PWG specialises in hotel buyouts and group deals for destination weddings, celebrations and MICE groups, working closely with hotels, destinations and tourism boards. Its intellectual properties include WedTalks Forum, launched in Colombo and expanding internationally, and the forthcoming Global Wedding Festival.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://platinumworld.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-subheading inline-flex items-center gap-2 px-6 py-3 text-xs tracking-widest uppercase bg-ivory text-ink hover:bg-bronze hover:text-ink transition-colors font-medium rounded-[1px]"
                  >
                    <span>More Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-navy border border-bronze/35 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  <img
                    src={pwgImg}
                    alt="Platinum World Grroup — Hotel buyouts and destination services"
                    className="w-full h-full object-cover filter contrast-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 bg-obsidian/90 px-2.5 py-1 border border-bronze/20 text-[9px] font-subheading uppercase tracking-widest text-bronze font-mono">
                    Hotel Buyouts & Destination Logistics
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* VENTURE 02: Artoso Hospitality Corp (Alternating Layout: Image Left, Text Right) */}
          <div className="relative border-t border-bronze/30 pt-10 sm:pt-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-navy border border-bronze/35 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  <img
                    src={artosoImg}
                    alt="Artoso Hospitality Corp — Innovative boutique hotels worldwide"
                    className="w-full h-full object-cover filter contrast-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 bg-obsidian/90 px-2.5 py-1 border border-bronze/20 text-[9px] font-subheading uppercase tracking-widest text-bronze font-mono">
                    AI-Powered Lifestyle & Boutique Hotels
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3 text-stone font-mono text-xs">
                  <span className="text-bronze font-bold">02 // 05</span>
                  <span>—</span>
                  <span className="font-subheading text-[10px] uppercase tracking-super-wide text-stone">
                    Modern Boutique Concepts
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal tracking-tight leading-[1.08]">
                  Artoso Hospitality Corp
                </h3>

                <div className="inline-block py-1 px-3 bg-navy border border-bronze/30 text-bronze-light font-subheading text-[11px] sm:text-xs tracking-wider uppercase font-medium">
                  Global Footprint. Local Flair. Luxury Boutique Hotels Worldwide.
                </div>

                <p className="font-sans text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
                  An AI-powered lifestyle company focused on redefining luxury hospitality through innovative boutique hotels and resorts in key destinations worldwide, creating distinctive experiences beyond conventional hospitality.
                </p>
              </div>

            </div>
          </div>

          {/* VENTURE 03: Platinum World Pictures (Cinematic Horizontal Frame) */}
          <div className="relative border-t border-bronze/30 pt-10 sm:pt-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3 text-stone font-mono text-xs">
                  <span className="text-bronze font-bold">03 // 05</span>
                  <span>—</span>
                  <span className="font-subheading text-[10px] uppercase tracking-super-wide text-stone">
                    Visual Media & Digital Assets
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal tracking-tight leading-[1.08]">
                  Platinum World Pictures
                </h3>

                <div className="inline-block py-1 px-3 bg-navy border border-bronze/30 text-bronze-light font-subheading text-[11px] sm:text-xs tracking-wider uppercase font-medium">
                  Creating content that drives business
                </div>

                <div className="space-y-4 font-sans text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
                  <p>
                    A media, film and entertainment venture producing premium content and AI-powered videos for luxury brands, hotels, tourism boards and event companies.
                  </p>
                  <p className="text-xs sm:text-sm text-stone">
                    Services include brand campaigns, destination films, wedding films, social media content and digital marketing assets. Vertical-format micro web series are also in development.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-navy border border-bronze/35 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  <img
                    src={picturesImg}
                    alt="Platinum World Pictures — Destination films and premium content"
                    className="w-full h-full object-cover filter contrast-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 bg-obsidian/90 px-2.5 py-1 border border-bronze/20 text-[9px] font-subheading uppercase tracking-widest text-bronze font-mono">
                    Premium Visual Media & Series
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* VENTURE 04: Platinum World Lifestyle */}
          <div className="relative border-t border-bronze/30 pt-10 sm:pt-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-navy border border-bronze/35 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  <img
                    src={lifestyleImg}
                    alt="Platinum World Lifestyle — Private aviation, yachts, and luxury real estate"
                    className="w-full h-full object-cover filter contrast-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 bg-obsidian/90 px-2.5 py-1 border border-bronze/20 text-[9px] font-subheading uppercase tracking-widest text-bronze font-mono">
                    UHNW Advisory & Solutions
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3 text-stone font-mono text-xs">
                  <span className="text-bronze font-bold">04 // 05</span>
                  <span>—</span>
                  <span className="font-subheading text-[10px] uppercase tracking-super-wide text-stone">
                    Discreet UHNW Advisory
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal tracking-tight leading-[1.08]">
                  Platinum World Lifestyle
                </h3>

                <div className="inline-block py-1 px-3 bg-navy border border-bronze/30 text-bronze-light font-subheading text-[11px] sm:text-xs tracking-wider uppercase font-medium">
                  Advisory for Lifestyle solutions.
                </div>

                <p className="font-sans text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
                  A discreet UHNW lifestyle advisory service connecting ultra-high-net-worth individuals with trusted specialists for private aviation, superyachts, luxury real estate, citizenship and residency advisory, and bespoke lifestyle concierge services.
                </p>
              </div>

            </div>
          </div>

          {/* VENTURE 05: Investments (Typographic Ledger Chapter) */}
          <div className="relative border-t border-bronze/30 pt-10 sm:pt-14">
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-3 text-stone font-mono text-xs">
                <span className="text-bronze font-bold">05 // 05</span>
                <span>—</span>
                <span className="font-subheading text-[10px] uppercase tracking-super-wide text-stone">
                  Capital & Strategic Holdings
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal tracking-tight leading-[1.08]">
                Investments
              </h3>

              <div className="inline-block py-1 px-3 bg-navy border border-bronze/30 text-bronze-light font-subheading text-[11px] sm:text-xs tracking-wider uppercase font-medium">
                Real Estate, Equities, Start-ups
              </div>

              <p className="font-sans text-sm sm:text-base text-ivory/85 leading-relaxed font-light max-w-2xl">
                An active portfolio of real estate holdings and investments across hospitality, energy, technology, AI, finance and other sectors, with an ongoing interest in new investment opportunities.
              </p>

              {/* Typographic Asset Sector Ledger */}
              <div className="pt-4 border-t border-bronze/20">
                <span className="font-subheading text-[10px] uppercase tracking-widest text-bronze font-mono block mb-3">
                  Sectors of Active Deployment
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Real Estate Holdings",
                    "Hospitality Assets",
                    "Energy",
                    "Technology & Platforms",
                    "Artificial Intelligence",
                    "Finance & Equities",
                    "Early-Stage Start-ups"
                  ].map((sector) => (
                    <span
                      key={sector}
                      className="font-subheading text-[11px] uppercase tracking-wider px-3.5 py-1.5 bg-navy border border-bronze/20 text-stone"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BusinessSection;
