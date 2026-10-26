import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import pwgImg from '@/assets/images/editorial/editorial-resort-buyout.jpg';
import artosoImg from '@/assets/images/editorial/editorial-artoso-feature.jpg';
import picturesImg from '@/assets/images/editorial/editorial-destination-cinema.jpg';
import lifestyleImg from '@/assets/images/editorial/sushill-maldives-villa.jpg';

export const BusinessSection = () => {
  return (
    <section id="business" className="relative w-full bg-obsidian-deep text-ivory py-20 md:py-28 border-t border-bronze/20">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 sm:mb-18 border-b border-bronze/25 pb-6">
          <div>
            <span className="font-subheading text-[10px] sm:text-xs tracking-super-wide text-bronze uppercase font-medium block mb-2">
              02 • Commercial Ecosystem
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal">
              Business Ventures
            </h2>
          </div>
          <div className="font-subheading text-xs text-stone tracking-widest uppercase">
            Global Footprint • Established 1989
          </div>
        </div>

        {/* 5 Exact Venture Blocks */}
        <div className="space-y-16 lg:space-y-24">

          {/* 1. Platinum World Grroup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-navy p-6 sm:p-10 lg:p-12 border border-bronze/25">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-subheading text-[10px] tracking-widest uppercase text-bronze font-mono">
                  [ Venture 01 ]
                </span>
                <span className="w-6 h-[1px] bg-bronze/40" />
                <span className="font-subheading text-[10px] tracking-widest uppercase text-stone">
                  Flagship Enterprise • Est. 1989
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ivory font-normal">
                Platinum World Grroup
              </h3>

              <div className="inline-block py-1.5 px-3 bg-obsidian border border-bronze/30 text-bronze-light font-subheading text-xs tracking-wider uppercase font-medium">
                500+ Destinations | 100+ Countries | One Call Away
              </div>

              <p className="font-sans text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
                A global B2B company serving events, wedding, celebration and travel planners through luxury hotel buyouts, group bookings, destination services and experiences across India, Sri Lanka, Asia, Dubai, Middle East, Monaco, Europe, the UK and beyond.
              </p>

              <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed">
                PWG specialises in hotel buyouts and group deals for destination weddings, celebrations and MICE groups, working closely with hotels, destinations and tourism boards. Its intellectual properties include WedTalks Forum, launched in Colombo and expanding internationally, and the forthcoming Global Wedding Festival.
              </p>

              <div className="pt-2">
                <a
                  href="https://platinumworld.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-subheading inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase bg-ivory text-ink hover:bg-bronze hover:text-ink transition-colors font-medium rounded-[1px]"
                >
                  <span>More Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-obsidian border border-bronze/30 shadow-xl">
                <img
                  src={pwgImg}
                  alt="Platinum World Grroup — Luxury hotel buyouts and destination experiences"
                  className="w-full h-full object-cover filter contrast-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-[10px] font-subheading uppercase tracking-widest text-bronze/90 bg-obsidian/80 px-2 py-1 font-mono">
                  Hotel Buyouts & Group Bookings
                </div>
              </div>
            </div>
          </div>

          {/* 2. Artoso Hospitality Corp */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-navy p-6 sm:p-10 lg:p-12 border border-bronze/25">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-subheading text-[10px] tracking-widest uppercase text-bronze font-mono">
                  [ Venture 02 ]
                </span>
                <span className="w-6 h-[1px] bg-bronze/40" />
                <span className="font-subheading text-[10px] tracking-widest uppercase text-stone">
                  AI-Powered Lifestyle & Hotels
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ivory font-normal">
                Artoso Hospitality Corp
              </h3>

              <div className="inline-block py-1.5 px-3 bg-obsidian border border-bronze/30 text-bronze-light font-subheading text-xs tracking-wider uppercase font-medium">
                Global Footprint. Local Flair. Luxury Boutique Hotels Worldwide.
              </div>

              <p className="font-sans text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
                An AI-powered lifestyle company focused on redefining luxury hospitality through innovative boutique hotels and resorts in key destinations worldwide, creating distinctive experiences beyond conventional hospitality.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-obsidian border border-bronze/30 shadow-xl">
                <img
                  src={artosoImg}
                  alt="Artoso Hospitality Corp — Boutique hotels worldwide"
                  className="w-full h-full object-cover filter contrast-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-[10px] font-subheading uppercase tracking-widest text-bronze/90 bg-obsidian/80 px-2 py-1 font-mono">
                  Luxury Boutique Properties
                </div>
              </div>
            </div>
          </div>

          {/* 3. Platinum World Pictures */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-navy p-6 sm:p-10 lg:p-12 border border-bronze/25">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-subheading text-[10px] tracking-widest uppercase text-bronze font-mono">
                  [ Venture 03 ]
                </span>
                <span className="w-6 h-[1px] bg-bronze/40" />
                <span className="font-subheading text-[10px] tracking-widest uppercase text-stone">
                  Media & Visual Storytelling
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ivory font-normal">
                Platinum World Pictures
              </h3>

              <div className="inline-block py-1.5 px-3 bg-obsidian border border-bronze/30 text-bronze-light font-subheading text-xs tracking-wider uppercase font-medium">
                Creating content that drives business
              </div>

              <p className="font-sans text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
                A media, film and entertainment venture producing premium content and AI-powered videos for luxury brands, hotels, tourism boards and event companies.
              </p>

              <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed">
                Services include brand campaigns, destination films, wedding films, social media content and digital marketing assets. Vertical-format micro web series are also in development.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-obsidian border border-bronze/30 shadow-xl">
                <img
                  src={picturesImg}
                  alt="Platinum World Pictures — Premium content and destination films"
                  className="w-full h-full object-cover filter contrast-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-[10px] font-subheading uppercase tracking-widest text-bronze/90 bg-obsidian/80 px-2 py-1 font-mono">
                  Cinematic Content & Media
                </div>
              </div>
            </div>
          </div>

          {/* 4. Platinum World Lifestyle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-navy p-6 sm:p-10 lg:p-12 border border-bronze/25">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-subheading text-[10px] tracking-widest uppercase text-bronze font-mono">
                  [ Venture 04 ]
                </span>
                <span className="w-6 h-[1px] bg-bronze/40" />
                <span className="font-subheading text-[10px] tracking-widest uppercase text-stone">
                  Discreet UHNW Advisory
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ivory font-normal">
                Platinum World Lifestyle
              </h3>

              <div className="inline-block py-1.5 px-3 bg-obsidian border border-bronze/30 text-bronze-light font-subheading text-xs tracking-wider uppercase font-medium">
                Advisory for Lifestyle solutions.
              </div>

              <p className="font-sans text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
                A discreet UHNW lifestyle advisory service connecting ultra-high-net-worth individuals with trusted specialists for private aviation, superyachts, luxury real estate, citizenship and residency advisory, and bespoke lifestyle concierge services.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-obsidian border border-bronze/30 shadow-xl">
                <img
                  src={lifestyleImg}
                  alt="Platinum World Lifestyle — Private aviation, yachts, and luxury real estate"
                  className="w-full h-full object-cover filter contrast-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-[10px] font-subheading uppercase tracking-widest text-bronze/90 bg-obsidian/80 px-2 py-1 font-mono">
                  Discreet Lifestyle Solutions
                </div>
              </div>
            </div>
          </div>

          {/* 5. Investments */}
          <div className="bg-navy p-6 sm:p-10 lg:p-12 border border-bronze/25">
            <div className="max-w-3xl space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-subheading text-[10px] tracking-widest uppercase text-bronze font-mono">
                  [ Venture 05 ]
                </span>
                <span className="w-6 h-[1px] bg-bronze/40" />
                <span className="font-subheading text-[10px] tracking-widest uppercase text-stone">
                  Strategic Capital Deployment
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ivory font-normal">
                Investments
              </h3>

              <div className="inline-block py-1.5 px-3 bg-obsidian border border-bronze/30 text-bronze-light font-subheading text-xs tracking-wider uppercase font-medium">
                Real Estate, Equities, Start-ups
              </div>

              <p className="font-sans text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
                An active portfolio of real estate holdings and investments across hospitality, energy, technology, AI, finance and other sectors, with an ongoing interest in new investment opportunities.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BusinessSection;
