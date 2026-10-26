import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import pwgImg from '@/assets/images/editorial/editorial-resort-buyout.jpg';
import artosoImg from '@/assets/images/editorial/editorial-artoso-feature.jpg';
import picturesImg from '@/assets/images/editorial/editorial-destination-cinema.jpg';
import lifestyleImg from '@/assets/images/editorial/sushill-maldives-villa.jpg';

export const BusinessSection = () => {
  const containerRef = useRef(null);

  // Subtle parallax for large venture visuals
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="business"
      ref={containerRef}
      className="relative w-full bg-obsidian-deep text-ivory py-28 sm:py-36 md:py-44 border-t border-bronze/20 z-30"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14">
        
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24 sm:mb-32 border-b border-bronze/20 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-subheading text-[10px] tracking-[0.24em] text-bronze uppercase font-mono">
                CHAPTER 02
              </span>
              <span className="text-stone/40 font-mono text-xs">//</span>
              <span className="font-subheading text-[10px] tracking-[0.24em] text-stone uppercase">
                COMMERCIAL PORTFOLIO
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-normal tracking-tight">
              Business Ventures
            </h2>
          </div>
          <div className="font-subheading text-xs text-stone tracking-[0.2em] uppercase font-mono text-right">
            Five Global Pillars • Est. 1989
          </div>
        </div>

        {/* 5 Distinct Editorial Chapters (Portfolio Ledger System) */}
        <div className="space-y-36 sm:space-y-48">

          {/* ------------------------------------------------------------- */}
          {/* VENTURE 01: PLATINUM WORLD GRROUP (Full-Width Cinematic Spread) */}
          {/* ------------------------------------------------------------- */}
          <div className="space-y-10 border-t border-bronze/30 pt-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <span className="font-mono text-xs sm:text-sm text-bronze tracking-widest block mb-2">
                  01 // 05 — GLOBAL B2B HOSPITALITY
                </span>
                <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory font-normal tracking-tight">
                  Platinum World Grroup
                </h3>
              </div>
              <div className="inline-block py-2 px-4 bg-navy border border-bronze/30 text-bronze-light font-subheading text-xs sm:text-sm tracking-[0.16em] uppercase font-medium">
                500+ Destinations | 100+ Countries | One Call Away
              </div>
            </div>

            {/* Widescreen Cinematic Image with Subtle Parallax */}
            <motion.div
              style={{ y: parallaxY }}
              className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-navy border border-bronze/30 shadow-[0_30px_90px_rgba(0,0,0,0.8)]"
            >
              <img
                src={pwgImg}
                alt="Platinum World Grroup — Luxury hotel buyouts and destination experiences"
                className="w-full h-full object-cover filter contrast-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-stone font-mono">
                <span className="bg-obsidian/90 px-3 py-1 border border-bronze/20 text-bronze uppercase tracking-widest text-[10px]">
                  Hotel Buyouts & Group Bookings
                </span>
                <span className="hidden sm:inline text-ivory/60">Monaco • Dubai • India • Sri Lanka • Europe</span>
              </div>
            </motion.div>

            {/* Dual Column Narrative */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
              <div className="lg:col-span-8 space-y-4 font-sans text-base sm:text-lg text-ivory/85 leading-relaxed font-light">
                <p>
                  A global B2B company serving events, wedding, celebration and travel planners through luxury hotel buyouts, group bookings, destination services and experiences across India, Sri Lanka, Asia, Dubai, Middle East, Monaco, Europe, the UK and beyond.
                </p>
                <p className="text-sm sm:text-base text-stone">
                  PWG specialises in hotel buyouts and group deals for destination weddings, celebrations and MICE groups, working closely with hotels, destinations and tourism boards. Its intellectual properties include WedTalks Forum, launched in Colombo and expanding internationally, and the forthcoming Global Wedding Festival.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right pt-2">
                <a
                  href="https://platinumworld.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-subheading inline-flex items-center gap-3 px-7 py-3.5 text-xs tracking-[0.2em] uppercase bg-ivory text-ink hover:bg-bronze hover:text-ink transition-colors font-semibold"
                >
                  <span>More Details</span>
                  <ArrowUpRight className="w-4 h-4 text-ink" />
                </a>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* VENTURE 02: ARTOSO HOSPITALITY CORP (Asymmetric Offset Layout) */}
          {/* ------------------------------------------------------------- */}
          <div className="border-t border-bronze/30 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative aspect-[3/4] overflow-hidden bg-navy border border-bronze/30 shadow-2xl">
                  <img
                    src={artosoImg}
                    alt="Artoso Hospitality Corp — Innovative boutique hotels worldwide"
                    className="w-full h-full object-cover filter contrast-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4">
                    <span className="font-subheading text-[9px] uppercase tracking-widest text-bronze bg-obsidian/90 px-3 py-1 border border-bronze/20 font-mono">
                      AI-Powered Lifestyle
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <span className="font-mono text-xs sm:text-sm text-bronze tracking-widest block">
                  02 // 05 — LUXURY BOUTIQUE HOTELS
                </span>
                
                <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight leading-[1.04]">
                  Artoso Hospitality Corp
                </h3>

                <div className="inline-block py-1.5 px-3.5 bg-navy border border-bronze/30 text-bronze-light font-subheading text-xs tracking-wider uppercase font-medium">
                  Global Footprint. Local Flair. Luxury Boutique Hotels Worldwide.
                </div>

                <p className="font-sans text-base sm:text-lg text-ivory/85 leading-relaxed font-light max-w-2xl">
                  An AI-powered lifestyle company focused on redefining luxury hospitality through innovative boutique hotels and resorts in key destinations worldwide, creating distinctive experiences beyond conventional hospitality.
                </p>
              </div>

            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* VENTURE 03: PLATINUM WORLD PICTURES (Cinematic Media Spread) */}
          {/* ------------------------------------------------------------- */}
          <div className="border-t border-bronze/30 pt-12 space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <span className="font-mono text-xs sm:text-sm text-bronze tracking-widest block mb-2">
                  03 // 05 — CINEMATIC MEDIA & FILM
                </span>
                <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory font-normal tracking-tight">
                  Platinum World Pictures
                </h3>
              </div>
              <div className="inline-block py-2 px-4 bg-navy border border-bronze/30 text-bronze-light font-subheading text-xs sm:text-sm tracking-[0.16em] uppercase font-medium">
                Creating content that drives business
              </div>
            </div>

            <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-navy border border-bronze/30 shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
              <img
                src={picturesImg}
                alt="Platinum World Pictures — Premium content and destination films"
                className="w-full h-full object-cover filter contrast-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-obsidian/90 px-3 py-1 border border-bronze/20 text-bronze uppercase tracking-widest text-[10px] font-mono">
                  Brand Campaigns • Destination Films • AI Videos
                </span>
              </div>
            </div>

            <div className="max-w-3xl space-y-4 font-sans text-base sm:text-lg text-ivory/85 leading-relaxed font-light">
              <p>
                A media, film and entertainment venture producing premium content and AI-powered videos for luxury brands, hotels, tourism boards and event companies.
              </p>
              <p className="text-sm sm:text-base text-stone">
                Services include brand campaigns, destination films, wedding films, social media content and digital marketing assets. Vertical-format micro web series are also in development.
              </p>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* VENTURE 04: PLATINUM WORLD LIFESTYLE (UHNW Advisory Spread) */}
          {/* ------------------------------------------------------------- */}
          <div className="border-t border-bronze/30 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="font-mono text-xs sm:text-sm text-bronze tracking-widest block">
                  04 // 05 — BESPOKE UHNW SOLUTIONS
                </span>

                <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight leading-[1.04]">
                  Platinum World Lifestyle
                </h3>

                <div className="inline-block py-1.5 px-3.5 bg-navy border border-bronze/30 text-bronze-light font-subheading text-xs tracking-wider uppercase font-medium">
                  Advisory for Lifestyle solutions.
                </div>

                <p className="font-sans text-base sm:text-lg text-ivory/85 leading-relaxed font-light max-w-2xl">
                  A discreet UHNW lifestyle advisory service connecting ultra-high-net-worth individuals with trusted specialists for private aviation, superyachts, luxury real estate, citizenship and residency advisory, and bespoke lifestyle concierge services.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] overflow-hidden bg-navy border border-bronze/30 shadow-2xl">
                  <img
                    src={lifestyleImg}
                    alt="Platinum World Lifestyle — Private aviation, yachts, and luxury real estate"
                    className="w-full h-full object-cover filter contrast-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4">
                    <span className="font-subheading text-[9px] uppercase tracking-widest text-bronze bg-obsidian/90 px-3 py-1 border border-bronze/20 font-mono">
                      Private Aviation & Marine
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* VENTURE 05: INVESTMENTS (Monumental Typographic Ledger) */}
          {/* ------------------------------------------------------------- */}
          <div className="border-t border-bronze/30 pt-12 space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <span className="font-mono text-xs sm:text-sm text-bronze tracking-widest block mb-2">
                  05 // 05 — STRATEGIC CAPITAL DEPLOYMENT
                </span>
                <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory font-normal tracking-tight">
                  Investments
                </h3>
              </div>
              <div className="inline-block py-2 px-4 bg-navy border border-bronze/30 text-bronze-light font-subheading text-xs sm:text-sm tracking-[0.16em] uppercase font-medium">
                Real Estate, Equities, Start-ups
              </div>
            </div>

            <p className="font-sans text-base sm:text-xl text-ivory/90 leading-relaxed font-light max-w-3xl">
              An active portfolio of real estate holdings and investments across hospitality, energy, technology, AI, finance and other sectors, with an ongoing interest in new investment opportunities.
            </p>

            {/* Haute-Finance Ledger Register */}
            <div className="border-t border-bronze/20 divide-y divide-bronze/15 pt-2">
              {[
                { sector: "Real Estate Holdings", description: "Global prime residential and hospitality real estate" },
                { sector: "Hospitality Assets", description: "Boutique resorts, hotel buyouts and operating platforms" },
                { sector: "Energy & Infrastructure", description: "Strategic transitions and sustainable power initiatives" },
                { sector: "Technology & AI", description: "Next-generation platforms, automated workflows and artificial intelligence" },
                { sector: "Finance & Equities", description: "Active liquid positions, private equity and institutional funds" },
                { sector: "Early-Stage Start-ups", description: "Selective seed and growth opportunities across emerging industries" },
              ].map((item, idx) => (
                <div key={item.sector} className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-bronze/60">0{idx + 1}.</span>
                    <span className="font-serif text-lg sm:text-xl text-ivory font-normal group-hover:text-bronze transition-colors">
                      {item.sector}
                    </span>
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-stone font-light sm:text-right">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BusinessSection;
