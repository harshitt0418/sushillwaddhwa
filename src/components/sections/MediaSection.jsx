import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const MediaSection = () => {
  return (
    <section
      id="media"
      className="relative w-full bg-obsidian-deep text-ivory py-24 md:py-32 border-t border-bronze/25"
    >
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-20 border-b border-bronze/20 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-subheading text-[10px] tracking-super-wide text-bronze uppercase font-mono">
                CHAPTER 04
              </span>
              <span className="text-stone/40 font-mono text-xs">//</span>
              <span className="font-subheading text-[10px] tracking-super-wide text-stone uppercase">
                EDITORIAL RECORD
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight">
              Press • Interviews • Articles
            </h2>
          </div>
          <div className="font-subheading text-xs text-stone tracking-widest uppercase font-mono">
            Curated Coverage
          </div>
        </div>

        {/* Mandatory Copy from Brief */}
        <div className="max-w-3xl mb-14">
          <p className="font-sans text-base sm:text-lg text-ivory/90 font-light leading-relaxed">
            A curated selection of press coverage, interviews and articles featuring Sushill Waddhwa.
          </p>
        </div>

        {/* Minimal, Clean & Honest Editorial Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="p-8 sm:p-12 bg-navy border border-bronze/25 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-stone font-mono text-[10px]">
                <span className="text-bronze uppercase tracking-widest">[ ARCHIVE & DOSSIER ]</span>
                <span>PRESS INQUIRIES</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
                Accredited Media & Interviews
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed font-light">
                Official press archive, high-resolution photography, and executive commentary regarding global hospitality, luxury hotel buyouts, and destination tourism are available upon request to accredited publications.
              </p>
            </div>

            <div className="pt-8 border-t border-bronze/15 mt-8">
              <a
                href="mailto:info@platinumworld.net?subject=Media%20and%20Press%20Inquiry%20-%20Sushill%20Waddhwa"
                className="font-subheading inline-flex items-center gap-2 text-xs tracking-wider uppercase text-bronze hover:text-bronze-light transition-colors font-medium"
              >
                <span>Request Press Materials</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-bronze" />
              </a>
            </div>
          </div>

          <div className="p-8 sm:p-12 bg-navy border border-bronze/25 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-stone font-mono text-[10px]">
                <span className="text-bronze uppercase tracking-widest">[ DIALOGUE FORUMS ]</span>
                <span>KEYNOTES & SPEAKING</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
                WedTalks & Industry Keynotes
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed font-light">
                Sushill Waddhwa actively curates intellectual forums including the WedTalks Forum, bringing together tourism boards, hoteliers, and international planners.
              </p>
            </div>

            <div className="pt-8 border-t border-bronze/15 mt-8">
              <a
                href="#contact"
                className="font-subheading inline-flex items-center gap-2 text-xs tracking-wider uppercase text-bronze hover:text-bronze-light transition-colors font-medium"
              >
                <span>Speaking Dialogue</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-bronze" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MediaSection;
