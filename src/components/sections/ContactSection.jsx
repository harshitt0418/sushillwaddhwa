import React, { useState } from 'react';
import { Mail, Instagram, Linkedin, Send, Check } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    interest: 'General Executive Dialogue',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`Executive Correspondence: ${formData.interest} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nTopic: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@platinumworld.net?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#F5F1E8] text-[#111111] py-24 sm:py-32 md:py-40 border-t border-[#111111]/10 z-50"
    >
      <div className="max-w-[1480px] mx-auto px-6 sm:px-10 md:px-14">
        
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24 border-b border-[#111111]/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-subheading text-[10px] sm:text-xs tracking-[0.24em] text-bronze uppercase font-mono font-semibold">
                CHAPTER 05
              </span>
              <span className="text-stone/60 font-mono text-xs">//</span>
              <span className="font-subheading text-[10px] sm:text-xs tracking-[0.24em] text-bronze uppercase font-mono font-semibold">
                EXECUTIVE COORDINATES
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#111111] font-normal tracking-tight">
              Initiate Dialogue
            </h2>
          </div>
          <div className="font-subheading text-xs text-[#6B6966] tracking-[0.2em] uppercase font-mono text-left md:text-right">
            Direct Executive Channel
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="font-mono text-xs text-bronze uppercase tracking-widest block mb-2 font-semibold">
                EXECUTIVE OFFICE
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl text-[#111111] font-normal tracking-tight mb-2">
                Sushill Waddhwa
              </h3>
              <p className="font-subheading text-sm uppercase tracking-[0.18em] text-bronze font-semibold">
                Founder & CMD, Platinum World Grroup
              </p>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#6B6966] font-light leading-relaxed">
              Inquiries regarding hotel buyouts, group travel, WedTalks forum, strategic investments, and selective brand collaborations are handled with complete professional discretion.
            </p>

            <div className="space-y-6 pt-6 border-t border-[#111111]/10">
              
              {/* Email */}
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-[#FAF7F2] border border-bronze/40 flex items-center justify-center flex-shrink-0 text-bronze group-hover:border-bronze group-hover:bg-[#111111] group-hover:text-[#F5F1E8] transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-subheading text-[9px] uppercase tracking-[0.2em] text-[#8C8A85] block font-mono font-medium">
                    Official Email
                  </span>
                  <a
                    href="mailto:info@platinumworld.net"
                    className="font-sans text-base sm:text-lg text-[#111111] hover:text-bronze transition-colors font-normal"
                  >
                    info@platinumworld.net
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-[#FAF7F2] border border-bronze/40 flex items-center justify-center flex-shrink-0 text-bronze group-hover:border-bronze group-hover:bg-[#111111] group-hover:text-[#F5F1E8] transition-all">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-subheading text-[9px] uppercase tracking-[0.2em] text-[#8C8A85] block font-mono font-medium">
                    Instagram Profile
                  </span>
                  <a
                    href="https://www.instagram.com/sushillwaddhwa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-base sm:text-lg text-[#111111] hover:text-bronze transition-colors font-normal"
                  >
                    @sushillwaddhwa
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-[#FAF7F2] border border-bronze/40 flex items-center justify-center flex-shrink-0 text-bronze group-hover:border-bronze group-hover:bg-[#111111] group-hover:text-[#F5F1E8] transition-all">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-subheading text-[9px] uppercase tracking-[0.2em] text-[#8C8A85] block font-mono font-medium">
                    LinkedIn Network
                  </span>
                  <a
                    href="https://www.linkedin.com/in/sushillwaddhwa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-base sm:text-lg text-[#111111] hover:text-bronze transition-colors font-normal"
                  >
                    Sushill Waddhwa
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Editorial Form on Warm Ivory */}
          <div className="lg:col-span-7">
            <div className="border border-bronze/30 bg-[#FAF7F2] p-8 sm:p-12 shadow-sm">
              
              <div className="mb-8">
                <span className="font-subheading text-[10px] uppercase tracking-[0.2em] text-bronze block mb-2 font-mono font-semibold">
                  Bespoke Communication
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#111111] font-normal">
                  Send an Inquiry
                </h3>
              </div>

              {submitted ? (
                <div className="py-14 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-bronze/20 text-bronze flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-3xl text-[#111111] font-normal">Inquiry Initiated</h4>
                  <p className="font-sans text-sm sm:text-base text-[#6B6966] max-w-md mx-auto font-light leading-relaxed">
                    Your correspondence has been prepared. If your email application did not launch automatically, please send your note directly to <a href="mailto:info@platinumworld.net" className="text-bronze underline font-medium">info@platinumworld.net</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="font-subheading block text-[10px] uppercase tracking-[0.2em] text-[#6B6966] mb-2 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-[#111111]/20 focus:border-bronze py-2.5 text-base text-[#111111] placeholder-stone/60 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="relative">
                      <label className="font-subheading block text-[10px] uppercase tracking-[0.2em] text-[#6B6966] mb-2 font-semibold">
                        Organization / Brand
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-transparent border-b border-[#111111]/20 focus:border-bronze py-2.5 text-base text-[#111111] placeholder-stone/60 focus:outline-none transition-colors"
                        placeholder="Organization"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="font-subheading block text-[10px] uppercase tracking-[0.2em] text-[#6B6966] mb-2 font-semibold">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-[#111111]/20 focus:border-bronze py-2.5 text-base text-[#111111] placeholder-stone/60 focus:outline-none transition-colors"
                        placeholder="name@organization.com"
                      />
                    </div>
                    <div className="relative">
                      <label className="font-subheading block text-[10px] uppercase tracking-[0.2em] text-[#6B6966] mb-2 font-semibold">
                        Focus Area
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-[#FAF7F2] border-b border-[#111111]/20 focus:border-bronze py-2.5 text-sm sm:text-base text-[#111111] focus:outline-none transition-colors"
                      >
                        <option value="Hospitality & Hotel Buyouts">Hospitality & Hotel Buyouts</option>
                        <option value="Selective Brand Collaboration">Selective Brand Collaboration</option>
                        <option value="WedTalks Forum & Global Events">WedTalks Forum & Global Events</option>
                        <option value="Media & Speaking Inquiries">Media & Speaking Inquiries</option>
                        <option value="Strategic Investments">Strategic Investments</option>
                        <option value="General Executive Dialogue">General Executive Dialogue</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="font-subheading block text-[10px] uppercase tracking-[0.2em] text-[#6B6966] mb-2 font-semibold">
                      Inquiry Narrative *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-[#111111]/20 focus:border-bronze py-2.5 text-base text-[#111111] placeholder-stone/60 focus:outline-none transition-colors resize-none"
                      placeholder="Outline your proposal or discussion focus..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="font-subheading w-full inline-flex items-center justify-center gap-3 py-4 text-xs tracking-[0.24em] uppercase bg-[#111111] text-[#F5F1E8] hover:bg-bronze hover:text-[#111111] transition-colors font-semibold shadow-md"
                  >
                    <span>Transmit Message to Executive Office</span>
                    <Send className="w-3.5 h-3.5 text-bronze" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
