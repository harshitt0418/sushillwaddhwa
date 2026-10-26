import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const MediaSection = () => {
  return (
    <section
      id="media"
      className="relative w-full bg-obsidian-deep text-ivory py-28 sm:py-36 md:py-44 border-t border-bronze/20 z-40"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14">
        
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 sm:mb-28 border-b border-bronze/20 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-subheading text-[10px] tracking-[0.24em] text-bronze uppercase font-mono">
                CHAPTER 04
              </span>
              <span className="text-stone/40 font-mono text-xs">//</span>
              <span className="font-subheading text-[10px] tracking-[0.24em] text-stone uppercase">
                EDITORIAL RECORD
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-normal tracking-tight">
              Press • Interviews • Articles
            </h2>
          </div>
          <div className="font-subheading text-xs text-stone tracking-[0.2em] uppercase font-mono text-right">
            Curated Coverage
          </div>
        </div>

        {/* Mandatory Copy from Brief */}
        <div className="max-w-4xl mb-20 sm:mb-24">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory/90 font-light leading-relaxed">
            A curated selection of press coverage, interviews and articles featuring Sushill Waddhwa.
          </p>
        </div>

        {/* Minimal, Clean, Truthful Editorial Spread (Zero fake logos or articles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 border-t border-bronze/25 pt-12">
          
          <div className="space-y-6">
            <span className="font-mono text-xs text-bronze uppercase tracking-widest block">
              [ 01 ] — ACCREDITED MEDIA & PRESS INQUIRIES
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
              Official Press Archive & Executive Statements
            </h3>
            <p className="font-sans text-sm sm:text-base text-stone leading-relaxed font-light">
              Official press dossiers, high-resolution portraiture, and executive commentary regarding global hospitality, luxury hotel buyouts, and destination tourism are coordinated directly through the executive office for accredited publications and media partners.
            </p>
            <div className="pt-4">
              <a
                href="mailto:info@platinumworld.net?subject=Media%20and%20Press%20Inquiry%20-%20Sushill%20Waddhwa"
                className="font-subheading inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-bronze hover:text-bronze-light transition-colors font-medium"
              >
                <span>Request Media Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-bronze" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <span className="font-mono text-xs text-bronze uppercase tracking-widest block">
              [ 02 ] — KEYNOTES & FORUM DIALOGUES
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
              WedTalks & Industry Summits
            </h3>
            <p className="font-sans text-sm sm:text-base text-stone leading-relaxed font-light">
              Sushill Waddhwa curates international forums including the WedTalks Forum, bringing together tourism boards, hoteliers, and international planners to discuss destination tourism and hotel buyouts across key global corridors.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="font-subheading inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-bronze hover:text-bronze-light transition-colors font-medium"
              >
                <span>Speaking Inquiries</span>
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
