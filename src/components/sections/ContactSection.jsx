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
    const subject = encodeURIComponent(`Executive Inquiry: ${formData.interest} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nInquiry Focus: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@platinumworld.net?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-obsidian text-ivory py-24 md:py-32 border-t border-bronze/25"
    >
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-20 border-b border-bronze/20 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-subheading text-[10px] tracking-super-wide text-bronze uppercase font-mono">
                CHAPTER 05
              </span>
              <span className="text-stone/40 font-mono text-xs">//</span>
              <span className="font-subheading text-[10px] tracking-super-wide text-stone uppercase">
                EXECUTIVE COMMUNICATIONS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight">
              Direct Coordinates
            </h2>
          </div>
          <div className="font-subheading text-xs text-stone tracking-widest uppercase font-mono">
            info@platinumworld.net
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-subheading text-[10px] uppercase tracking-widest text-bronze font-mono block mb-1">
                Executive Desk
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-normal mb-2">
                Sushill Waddhwa
              </h3>
              <p className="font-subheading text-xs uppercase tracking-wider text-bronze-light font-medium">
                Founder & CMD, Platinum World Grroup
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-bronze/20">
              
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-[1px] bg-navy border border-bronze/30 flex items-center justify-center flex-shrink-0 text-bronze group-hover:border-bronze transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-subheading text-[10px] uppercase tracking-widest text-stone block font-mono">
                    Email
                  </span>
                  <a
                    href="mailto:info@platinumworld.net"
                    className="font-sans text-sm sm:text-base text-ivory hover:text-bronze transition-colors font-light"
                  >
                    info@platinumworld.net
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-[1px] bg-navy border border-bronze/30 flex items-center justify-center flex-shrink-0 text-bronze group-hover:border-bronze transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-subheading text-[10px] uppercase tracking-widest text-stone block font-mono">
                    Instagram
                  </span>
                  <a
                    href="https://www.instagram.com/sushillwaddhwa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm sm:text-base text-ivory hover:text-bronze transition-colors font-light"
                  >
                    @sushillwaddhwa
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-[1px] bg-navy border border-bronze/30 flex items-center justify-center flex-shrink-0 text-bronze group-hover:border-bronze transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-subheading text-[10px] uppercase tracking-widest text-stone block font-mono">
                    LinkedIn
                  </span>
                  <a
                    href="https://www.linkedin.com/in/sushillwaddhwa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm sm:text-base text-ivory hover:text-bronze transition-colors font-light"
                  >
                    Sushill Waddhwa
                  </a>
                </div>
              </div>

            </div>

            <div className="p-6 bg-navy/60 border border-bronze/20 text-xs text-stone font-light leading-relaxed">
              Inquiries regarding hotel buyouts, group travel, WedTalks forum, strategic investments, and selective brand collaborations are handled with professional discretion by the executive office.
            </div>
          </div>

          {/* Right Column: Minimalist Premium Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 bg-navy border border-bronze/30 shadow-2xl">
              <span className="font-subheading text-[10px] uppercase tracking-widest text-bronze block mb-2 font-mono">
                Bespoke Correspondence
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal mb-8">
                Initiate a Conversation
              </h3>

              {submitted ? (
                <div className="p-10 bg-obsidian border border-bronze/40 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-bronze/20 text-bronze flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-ivory font-normal">Inquiry Initiated</h4>
                  <p className="font-sans text-xs sm:text-sm text-stone max-w-md mx-auto font-light leading-relaxed">
                    Your inquiry has been formulated. If your mail client did not open automatically, please send your proposal directly to <a href="mailto:info@platinumworld.net" className="text-bronze underline">info@platinumworld.net</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-subheading block text-[10px] uppercase tracking-widest text-stone mb-2 font-medium">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-obsidian border border-bronze/25 px-4 py-3 text-xs sm:text-sm text-ivory placeholder-stone/40 focus:border-bronze focus:outline-none transition-colors rounded-[1px]"
                        placeholder="e.g. Julian Vance"
                      />
                    </div>
                    <div>
                      <label className="font-subheading block text-[10px] uppercase tracking-widest text-stone mb-2 font-medium">
                        Organization / Brand
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-obsidian border border-bronze/25 px-4 py-3 text-xs sm:text-sm text-ivory placeholder-stone/40 focus:border-bronze focus:outline-none transition-colors rounded-[1px]"
                        placeholder="Company, Group or Label"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-subheading block text-[10px] uppercase tracking-widest text-stone mb-2 font-medium">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-obsidian border border-bronze/25 px-4 py-3 text-xs sm:text-sm text-ivory placeholder-stone/40 focus:border-bronze focus:outline-none transition-colors rounded-[1px]"
                        placeholder="name@organization.com"
                      />
                    </div>
                    <div>
                      <label className="font-subheading block text-[10px] uppercase tracking-widest text-stone mb-2 font-medium">
                        Discussion Area
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-obsidian border border-bronze/25 px-4 py-3 text-xs sm:text-sm text-ivory focus:border-bronze focus:outline-none transition-colors rounded-[1px]"
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

                  <div>
                    <label className="font-subheading block text-[10px] uppercase tracking-widest text-stone mb-2 font-medium">
                      Brief Proposal / Scope *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-obsidian border border-bronze/25 px-4 py-3 text-xs sm:text-sm text-ivory placeholder-stone/40 focus:border-bronze focus:outline-none transition-colors rounded-[1px] resize-none"
                      placeholder="Outline the nature of your inquiry or proposed collaboration..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="font-subheading w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs tracking-widest uppercase bg-bronze text-ink hover:bg-bronze-light transition-colors font-semibold rounded-[1px] shadow-lg"
                  >
                    <span>Transmit Correspondence</span>
                    <Send className="w-3.5 h-3.5 text-ink" />
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
