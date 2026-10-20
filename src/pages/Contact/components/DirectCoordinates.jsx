import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { fadeIn } from '@/lib/motion';

export const DirectCoordinates = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.3)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="space-y-12"
    >
      {/* Editorial Direct Channels */}
      <div className="bg-bone-light p-8 sm:p-10 border border-stone/30 space-y-8">
        <div>
          <span className="text-[10px] uppercase tracking-super-wide text-bronze-dim block mb-1">
            Official Channels
          </span>
          <h3 className="font-serif text-2xl text-ink font-normal">
            Private Executive Desk
          </h3>
        </div>

        <div className="space-y-6 text-sm">
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-none bg-bone-dim flex items-center justify-center text-bronze flex-shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-dark block">
                Confidential Inquiries
              </span>
              <p className="font-mono text-xs text-ink mt-0.5">
                {siteConfig.contactPlaceholders.privateDeskEmail}
              </p>
            </div>
          </div>

          {/* Telephone */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-none bg-bone-dim flex items-center justify-center text-bronze flex-shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-dark block">
                Direct Line
              </span>
              <p className="font-mono text-xs text-ink mt-0.5">
                {siteConfig.contactPlaceholders.directPhone}
              </p>
            </div>
          </div>

          {/* Geographic Hubs */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-none bg-bone-dim flex items-center justify-center text-bronze flex-shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-dark block">
                Primary Corridors
              </span>
              <p className="text-xs text-ink mt-0.5">
                {siteConfig.contactPlaceholders.headquarters}
              </p>
            </div>
          </div>
        </div>

        {/* Public Verified Profiles */}
        <div className="pt-6 border-t border-stone/20 space-y-3">
          <span className="text-[10px] uppercase tracking-widest text-stone-dark block">
            Public Profiles & Thought Leadership
          </span>

          <div className="flex flex-col gap-2.5">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-bone border border-stone/20 hover:border-bronze hover:text-bronze transition-colors text-xs text-ink group"
            >
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-bronze" />
                <span className="font-medium">Instagram Profile</span>
                <span className="text-[10px] text-stone-dark font-mono">@sushillwaddhwa</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-dark group-hover:text-bronze transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-bone border border-stone/20 hover:border-bronze hover:text-bronze transition-colors text-xs text-ink group"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-bronze" />
                <span className="font-medium">LinkedIn Network</span>
                <span className="text-[10px] text-stone-dark font-mono">/in/sushillwaddhwa</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-dark group-hover:text-bronze transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Discretion statement card */}
      <div className="p-6 bg-ink text-bone border border-white/10 space-y-3">
        <span className="text-[10px] uppercase tracking-super-wide text-bronze block">
          Non-Disclosure Guarantee
        </span>
        <p className="text-xs text-stone font-light leading-relaxed">
          {siteConfig.contactPlaceholders.confidentialityClause}
        </p>
      </div>
    </motion.div>
  );
};
