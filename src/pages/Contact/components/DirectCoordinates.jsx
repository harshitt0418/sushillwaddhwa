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
      <div className="bg-midnight p-6 sm:p-10 border border-gold/30 space-y-8 shadow-2xl rounded-[1px]">
        <div>
          <span className="text-[10px] uppercase tracking-super-wide text-gold block mb-1 font-mono">
            Official Channels
          </span>
          <h3 className="font-serif text-2xl text-porcelain font-normal">
            Executive Office
          </h3>
        </div>

        <div className="space-y-6 text-sm">
          {/* Email */}
          <div className="flex items-start justify-between gap-4 group">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-[1px] bg-sapphire/60 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-warmstone block font-mono">
                  Official Inquiries
                </span>
                <a
                  href={`mailto:${siteConfig.contact.executiveDesk}`}
                  className="font-mono text-xs text-porcelain mt-0.5 hover:text-gold transition-colors block"
                >
                  {siteConfig.contact.executiveDesk}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="text-warmstone hover:text-gold transition-colors p-1 text-[11px] flex items-center gap-1 font-mono"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-gold" />
                  <span className="text-[10px] text-gold">Copied</span>
                </>
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Response Commitment */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-[1px] bg-sapphire/60 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-warmstone block font-mono">
                Response Time
              </span>
              <p className="text-xs text-warmstone mt-0.5 font-light">
                All business, speaking and brand collaboration inquiries receive direct attention from the executive office.
              </p>
            </div>
          </div>
        </div>

        {/* Public Verified Profiles */}
        <div className="pt-6 border-t border-gold/20 space-y-3">
          <span className="text-[10px] uppercase tracking-widest text-gold block font-mono">
            Public Profiles & Thought Leadership
          </span>

          <div className="flex flex-col gap-2.5">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-obsidian border border-gold/20 hover:border-gold hover:text-gold transition-colors text-xs text-porcelain group shadow-md"
            >
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-gold" />
                <span className="font-medium">Instagram Profile</span>
                <span className="text-[10px] text-warmstone/75 font-mono">@sushillwaddhwa</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-warmstone group-hover:text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-obsidian border border-gold/20 hover:border-gold hover:text-gold transition-colors text-xs text-porcelain group shadow-md"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-gold" />
                <span className="font-medium">LinkedIn Network</span>
                <span className="text-[10px] text-warmstone/75 font-mono">/in/sushillwaddhwa</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-warmstone group-hover:text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Discretion statement card */}
      <div className="p-6 bg-sapphire/35 border border-gold/30 space-y-3 shadow-xl rounded-[1px]">
        <div className="flex items-center gap-2 text-gold">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-[10px] uppercase tracking-super-wide block font-mono">
            Professional Discretion
          </span>
        </div>
        <p className="text-xs text-warmstone font-light leading-relaxed">
          {siteConfig.contact.confidentialityClause}
        </p>
      </div>
    </motion.div>
  );
};

export default DirectCoordinates;
