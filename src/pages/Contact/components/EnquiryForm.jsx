import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Lock, ShieldCheck, Mail, ChevronDown, Copy, Check } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { fadeIn } from '@/lib/motion';

const areasOfInterest = [
  "Business Enquiries",
  "Hospitality Partnerships",
  "Media & Speaking",
  "Brand Collaborations",
  "Other"
];

const contactMethods = [
  "Executive Email",
  "Direct Telephone",
  "WhatsApp / Signal",
  "In-Person Meeting (Mumbai / Dubai / London)"
];

export const EnquiryForm = () => {
  const [searchParams] = useSearchParams();
  const initialInterest = searchParams.get('interest') || "";

  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    interest: "",
    details: "",
    preferredMethod: "Executive Email",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [briefCopied, setBriefCopied] = useState(false);

  useEffect(() => {
    if (initialInterest) {
      const match = areasOfInterest.find(
        (a) => a.toLowerCase().includes(initialInterest.toLowerCase()) || initialInterest.toLowerCase().includes(a.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, interest: match }));
      }
    }
  }, [initialInterest]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randomCode = `SW-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(randomCode);
      setIsModalOpen(true);
    }, 450);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setBriefCopied(false);
    setFormData({
      name: "",
      organisation: "",
      email: "",
      phone: "",
      interest: "",
      details: "",
      preferredMethod: "Executive Email",
    });
  };

  const fullBriefText = `ENQUIRY DOSSIER [Ref: ${referenceId}]
Principal: ${formData.name}
Organisation: ${formData.organisation || 'N/A'}
Email: ${formData.email}
Phone: ${formData.phone}
Area of Interest: ${formData.interest || 'General'}
Preferred Protocol: ${formData.preferredMethod}

Brief:
${formData.details}`;

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(fullBriefText);
    setBriefCopied(true);
    setTimeout(() => setBriefCopied(false), 2500);
  };

  const mailtoLink = `mailto:${siteConfig.contact.executiveDesk}?subject=${encodeURIComponent(`Enquiry: ${formData.interest || 'Partnership'} [Ref: ${referenceId}]`)}&body=${encodeURIComponent(fullBriefText)}`;

  return (
    <>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="bg-bone-light p-8 sm:p-12 md:p-16 border border-stone/30 shadow-sm relative"
      >
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-stone/20">
          <div>
            <span className="text-[10px] uppercase tracking-super-wide text-bronze font-mono block">
              Official Enquiry Form
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal mt-1">
              Connect with Sushill Waddhwa
            </h3>
          </div>
          <div className="flex items-center gap-2 text-stone-dark text-xs">
            <Lock className="w-3.5 h-3.5 text-bronze" />
            <span className="hidden sm:inline font-mono text-[11px]">Direct Executive Desk</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Row 1: Name & Organisation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
                Full Name / Representative <span className="text-bronze">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma / Alexandra Dupont"
                className="w-full bg-transparent border-b border-stone/40 py-3 text-ink text-sm sm:text-base placeholder:text-stone/60 focus:outline-none focus:border-bronze transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
                Company / Organisation / Entity
              </label>
              <input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
                placeholder="e.g. Luxury Brand Group / Hospitality Group"
                className="w-full bg-transparent border-b border-stone/40 py-3 text-ink text-sm sm:text-base placeholder:text-stone/60 focus:outline-none focus:border-bronze transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
                Email Address <span className="text-bronze">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@organisation.com"
                className="w-full bg-transparent border-b border-stone/40 py-3 text-ink text-sm sm:text-base placeholder:text-stone/60 focus:outline-none focus:border-bronze transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
                Phone / Direct Number <span className="text-bronze">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 / +971 / +44 ..."
                className="w-full bg-transparent border-b border-stone/40 py-3 text-ink text-sm sm:text-base placeholder:text-stone/60 focus:outline-none focus:border-bronze transition-colors"
              />
            </div>
          </div>

          {/* Row 3: Area of Interest & Preferred Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
                Area of Interest <span className="text-bronze">*</span>
              </label>
              <div className="relative">
                <select
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-stone/40 py-3 pr-8 text-ink text-sm sm:text-base focus:outline-none focus:border-bronze transition-colors cursor-pointer appearance-none"
                >
                  <option value="" disabled className="bg-bone text-stone-dark">Select Category</option>
                  {areasOfInterest.map((opt) => (
                    <option key={opt} value={opt} className="bg-bone text-ink">
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-stone-dark absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
                Preferred Contact Protocol
              </label>
              <div className="relative">
                <select
                  name="preferredMethod"
                  value={formData.preferredMethod}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-stone/40 py-3 pr-8 text-ink text-sm sm:text-base focus:outline-none focus:border-bronze transition-colors cursor-pointer appearance-none"
                >
                  {contactMethods.map((method) => (
                    <option key={method} value={method} className="bg-bone text-ink">
                      {method}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-stone-dark absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 4: Scope of collaboration */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
              Tell us what you are looking for <span className="text-bronze">*</span>
            </label>
            <textarea
              name="details"
              rows={4}
              required
              value={formData.details}
              onChange={handleChange}
              placeholder="Outline your project scope, hotel buyout requirements, speaking opportunity, brand collaboration or investment conversation..."
              className="w-full bg-transparent border-b border-stone/40 py-3 text-ink text-sm sm:text-base placeholder:text-stone/60 focus:outline-none focus:border-bronze transition-colors resize-none"
            />
          </div>

          {/* Submission and Assurance */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-xs text-stone-dark font-light max-w-sm">
              <ShieldCheck className="w-4 h-4 text-bronze flex-shrink-0" />
              <span>
                All enquiries are handled with utmost discretion and reviewed directly by the office of Sushill Waddhwa.
              </span>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Preparing Enquiry..." : "Submit Enquiry"}
            </Button>
          </div>
        </form>
      </motion.div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Enquiry Prepared for Dispatch"
        message={`Your enquiry dossier (${formData.interest || 'General'}) has been structured under reference code ${referenceId}. You can dispatch directly via your email client or copy the dossier below.`}
        referenceId={referenceId}
      >
        <div className="space-y-4">
          <div className="p-3 bg-white/5 border border-white/10 text-xs font-mono text-stone space-y-1 max-h-36 overflow-y-auto">
            <div><strong className="text-bone">Principal:</strong> {formData.name}</div>
            {formData.organisation && <div><strong className="text-bone">Company:</strong> {formData.organisation}</div>}
            <div><strong className="text-bone">Category:</strong> {formData.interest}</div>
            <div><strong className="text-bone">Channel:</strong> {formData.preferredMethod}</div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={mailtoLink}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-bronze text-white text-xs uppercase tracking-widest hover:bg-bronze-dark transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send via Email Client</span>
            </a>

            <button
              type="button"
              onClick={handleCopyBrief}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 text-bone text-xs uppercase tracking-widest hover:bg-white/20 transition-colors font-medium border border-white/15"
            >
              {briefCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-bronze" />
                  <span>Brief Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Brief</span>
                </>
              )}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EnquiryForm;
