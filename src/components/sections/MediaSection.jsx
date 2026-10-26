import React from 'react';
import { Newspaper, ArrowUpRight, Mail } from 'lucide-react';

export const MediaSection = () => {
  return (
    <section id="media" className="relative w-full bg-obsidian-deep text-ivory py-20 md:py-28 border-t border-bronze/20">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 sm:mb-18 border-b border-bronze/25 pb-6">
          <div>
            <span className="font-subheading text-[10px] sm:text-xs tracking-super-wide text-bronze uppercase font-medium block mb-2">
              04 • Editorial Record
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal">
              Press • Interviews • Articles
            </h2>
          </div>
          <div className="font-subheading text-xs text-stone tracking-widest uppercase">
            Curated Coverage
          </div>
        </div>

        {/* Mandatory Copy from Brief */}
        <div className="max-w-3xl mb-12">
          <p className="font-sans text-base sm:text-lg text-ivory/90 font-light leading-relaxed">
            A curated selection of press coverage, interviews and articles featuring Sushill Waddhwa.
          </p>
        </div>

        {/* Clean Editorial Cards (Zero Invented Publications or Fake Headlines) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          <div className="p-8 sm:p-10 bg-navy border border-bronze/25 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-subheading text-[10px] uppercase tracking-widest text-bronze font-mono">
                Press & Media Kit
              </span>
              <h3 className="font-serif text-2xl text-ivory font-normal">
                Media Inquiries & Executive Statements
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed font-light">
                Official press archive, high-resolution photography, and executive commentary regarding global hospitality, luxury hotel buyouts, and destination tourism are available to accredited publications.
              </p>
            </div>
            <div className="pt-8">
              <a
                href="mailto:info@platinumworld.net?subject=Press%20and%20Media%20Inquiry"
                className="font-subheading inline-flex items-center gap-2 text-xs tracking-wider uppercase text-bronze hover:text-bronze-light transition-colors font-medium"
              >
                <span>Request Media Kit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="p-8 sm:p-10 bg-navy border border-bronze/25 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-subheading text-[10px] uppercase tracking-widest text-bronze font-mono">
                Keynotes & Forums
              </span>
              <h3 className="font-serif text-2xl text-ivory font-normal">
                WedTalks & Hospitality Dialogues
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed font-light">
                Sushill Waddhwa actively curates intellectual forums including the WedTalks Forum, bringing together tourism boards, hoteliers, and international planners.
              </p>
            </div>
            <div className="pt-8">
              <a
                href="#contact"
                className="font-subheading inline-flex items-center gap-2 text-xs tracking-wider uppercase text-bronze hover:text-bronze-light transition-colors font-medium"
              >
                <span>Speaking Inquiries</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MediaSection;
