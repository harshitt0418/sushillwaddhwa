import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, ArrowUpRight, Mail, Copy, Check, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { fadeIn } from '@/lib/motion';

export const DirectCoordinates = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.executiveDesk);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      variants={fadeIn('up', 0.3)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Editorial Direct Channels */}
      <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-10 border border-champagne/70 space-y-8 shadow-sm rounded-[1px] crosshair-corner">
        <div>
          <span className="text-[10px] uppercase tracking-super-wide text-gold block mb-1 font-mono font-medium">
            Official Channels
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
            Executive Office
          </h3>
        </div>

        <div className="space-y-6 text-sm">
          {/* Email */}
          <div className="flex items-start justify-between gap-4 group">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-[1px] bg-champagne/40 border border-gold/30 flex items-center justify-center text-ink flex-shrink-0 shadow-sm">
                <Mail className="w-4 h-4 text-gold" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-warmgrey block font-mono">
                  Official Inquiries
                </span>
                <a
                  href={`mailto:${siteConfig.contact.executiveDesk}`}
                  className="font-mono text-xs text-ink mt-0.5 hover:text-gold transition-colors block"
                >
                  {siteConfig.contact.executiveDesk}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="text-warmgrey hover:text-gold transition-colors p-1.5 text-[11px] flex items-center gap-1 font-mono"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-gold" />
                  <span className="text-[10px] text-gold font-medium">Copied</span>
                </>
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Response Commitment */}
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-[1px] bg-champagne/40 border border-gold/30 flex items-center justify-center text-ink flex-shrink-0 shadow-sm">
              <Clock className="w-4 h-4 text-gold" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-warmgrey block font-mono">
                Response Time
              </span>
              <p className="text-xs text-warmgrey mt-0.5 font-light leading-relaxed">
                All business, speaking and brand collaboration inquiries receive direct attention from the executive office.
              </p>
            </div>
          </div>
        </div>

        {/* Public Verified Profiles */}
        <div className="pt-6 border-t border-champagne/60 space-y-3">
          <span className="text-[10px] uppercase tracking-widest text-gold block font-mono font-medium">
            Public Profiles & Thought Leadership
          </span>

          <div className="flex flex-col gap-2.5">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 bg-ivory border border-champagne/80 hover:border-gold hover:text-gold transition-colors text-xs text-ink group shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-gold" />
                <span className="font-medium font-sans">Instagram Profile</span>
                <span className="text-[10px] text-warmgrey font-mono">@sushillwaddhwa</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-warmgrey group-hover:text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 bg-ivory border border-champagne/80 hover:border-gold hover:text-gold transition-colors text-xs text-ink group shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-gold" />
                <span className="font-medium font-sans">LinkedIn Network</span>
                <span className="text-[10px] text-warmgrey font-mono">/in/sushillwaddhwa</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-warmgrey group-hover:text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Discretion statement card */}
      <div className="p-6 bg-champagne/30 border border-gold/30 space-y-3 shadow-sm rounded-[1px] crosshair-corner">
        <div className="flex items-center gap-2 text-gold">
          <ShieldCheck className="w-4 h-4 text-gold" />
          <span className="text-[10px] uppercase tracking-super-wide block font-mono font-medium">
            Professional Discretion
          </span>
        </div>
        <p className="text-xs text-warmgrey font-light leading-relaxed">
          {siteConfig.contact.confidentialityClause}
        </p>
      </div>
    </motion.div>
  );
};

export default DirectCoordinates;