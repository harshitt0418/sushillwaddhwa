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
    // Prepare direct mailto
    const subject = encodeURIComponent(`Executive Enquiry: ${formData.interest} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@platinumworld.net?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative w-full bg-obsidian text-ivory py-20 md:py-28 border-t border-bronze/20">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 sm:mb-18 border-b border-bronze/25 pb-6">
          <div>
            <span className="font-subheading text-[10px] sm:text-xs tracking-super-wide text-bronze uppercase font-medium block mb-2">
              05 • Communications
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal">
              Direct Coordinates
            </h2>
          </div>
          <div className="font-subheading text-xs text-stone tracking-widest uppercase">
            info@platinumworld.net
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal mb-2">
                Sushill Waddhwa
              </h3>
              <p className="font-subheading text-xs sm:text-sm uppercase tracking-wider text-bronze font-medium">
                Founder & CMD, Platinum World Grroup
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-bronze/20">
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[1px] bg-navy border border-bronze/30 flex items-center justify-center flex-shrink-0 text-bronze">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-subheading text-[10px] uppercase tracking-widest text-stone block font-mono">
                    Email
                  </span>
                  <a
                    href="mailto:info@platinumworld.net"
                    className="font-sans text-sm sm:text-base text-ivory hover:text-bronze transition-colors"
                  >
                    info@platinumworld.net
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[1px] bg-navy border border-bronze/30 flex items-center justify-center flex-shrink-0 text-bronze">
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
                    className="font-sans text-sm sm:text-base text-ivory hover:text-bronze transition-colors"
                  >
                    @sushillwaddhwa
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[1px] bg-navy border border-bronze/30 flex items-center justify-center flex-shrink-0 text-bronze">
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
                    className="font-sans text-sm sm:text-base text-ivory hover:text-bronze transition-colors"
                  >
                    Sushill Waddhwa
                  </a>
                </div>
              </div>

            </div>

            <div className="p-6 bg-navy border border-bronze/20 text-xs text-stone font-light leading-relaxed">
              Enquiries regarding hotel buyouts, group travel, WedTalks forum, strategic investments, and selective brand collaborations are handled directly by the executive office.
            </div>
          </div>

          {/* Right Column: Professional Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 bg-navy border border-bronze/25">
              <span className="font-subheading text-[10px] uppercase tracking-widest text-bronze block mb-2 font-mono">
                Direct Dialogue
              </span>
              <h3 className="font-serif text-2xl text-ivory font-normal mb-6">
                Submit an Enquiry
              </h3>

              {submitted ? (
                <div className="p-8 bg-obsidian border border-bronze/40 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-bronze/20 text-bronze flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl text-ivory">Thank You</h4>
                  <p className="font-sans text-xs sm:text-sm text-stone max-w-md mx-auto font-light">
                    Your message has been initiated. If your mail client did not open automatically, please send your inquiry directly to <a href="mailto:info@platinumworld.net" className="text-bronze underline">info@platinumworld.net</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-subheading block text-[10px] uppercase tracking-widest text-stone mb-1 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-obsidian border border-bronze/30 px-3.5 py-2.5 text-xs text-ivory placeholder-stone/50 focus:border-bronze focus:outline-none rounded-[1px]"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label className="font-subheading block text-[10px] uppercase tracking-widest text-stone mb-1 font-medium">
                        Organization / Brand
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-obsidian border border-bronze/30 px-3.5 py-2.5 text-xs text-ivory placeholder-stone/50 focus:border-bronze focus:outline-none rounded-[1px]"
                        placeholder="Company or Brand"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-subheading block text-[10px] uppercase tracking-widest text-stone mb-1 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-obsidian border border-bronze/30 px-3.5 py-2.5 text-xs text-ivory placeholder-stone/50 focus:border-bronze focus:outline-none rounded-[1px]"
                        placeholder="name@organization.com"
                      />
                    </div>
                    <div>
                      <label className="font-subheading block text-[10px] uppercase tracking-widest text-stone mb-1 font-medium">
                        Enquiry Type
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-obsidian border border-bronze/30 px-3.5 py-2.5 text-xs text-ivory focus:border-bronze focus:outline-none rounded-[1px]"
                      >
                        <option value="Hospitality & Hotel Buyouts">Hospitality & Hotel Buyouts</option>
                        <option value="Brand Collaboration">Brand Collaboration</option>
                        <option value="WedTalks & Events">WedTalks & Events</option>
                        <option value="Media & Speaking">Media & Speaking</option>
                        <option value="Investments">Investments</option>
                        <option value="General Executive Dialogue">General Executive Dialogue</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-subheading block text-[10px] uppercase tracking-widest text-stone mb-1 font-medium">
                      Brief Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-obsidian border border-bronze/30 px-3.5 py-2.5 text-xs text-ivory placeholder-stone/50 focus:border-bronze focus:outline-none rounded-[1px] resize-none"
                      placeholder="Outline your proposal or discussion focus..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="font-subheading w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs tracking-widest uppercase bg-bronze text-ink hover:bg-bronze-light transition-colors font-semibold rounded-[1px]"
                  >
                    <span>Send Message to Executive Office</span>
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
