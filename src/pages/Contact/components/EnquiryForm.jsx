import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Lock, ShieldCheck } from 'lucide-react';
import { fadeIn } from '@/lib/motion';

const areasOfInterest = [
  "Hospitality & Hotel Buyouts",
  "Luxury Real Estate",
  "Private Aviation",
  "Yachts & Lifestyle Access",
  "Hotel Vision & Development",
  "Strategic Partnership / Other"
];

const contactMethods = [
  "Confidential Email",
  "Direct Telephone",
  "WhatsApp / Signal",
  "In-Person Meeting (Dubai / London)"
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
    preferredMethod: "Confidential Email",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [referenceId, setReferenceId] = useState("");

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

    // Simulate luxury response latency
    setTimeout(() => {
      setIsSubmitting(false);
      const randomCode = `SW-${Math.floor(100000 + Math.random() * 900000)}-CONF`;
      setReferenceId(randomCode);
      setIsModalOpen(true);
      // Reset form
      setFormData({
        name: "",
        organisation: "",
        email: "",
        phone: "",
        interest: "",
        details: "",
        preferredMethod: "Confidential Email",
      });
    }, 600);
  };

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
              Confidential Transmission Protocol
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal mt-1">
              Private Inquiry Dossier
            </h3>
          </div>
          <div className="flex items-center gap-2 text-stone-dark text-xs">
            <Lock className="w-3.5 h-3.5 text-bronze" />
            <span className="hidden sm:inline font-mono text-[11px]">Strict NDA Applied</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Row 1: Name & Organisation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
                Principal / Representative Name <span className="text-bronze">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Lord Alistair Vance"
                className="w-full bg-transparent border-b border-stone/40 py-3 text-ink text-sm sm:text-base placeholder:text-stone/60 focus:outline-none focus:border-bronze transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
                Family Office / Entity Name
              </label>
              <input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
                placeholder="e.g. Vance Holdings / Independent"
                className="w-full bg-transparent border-b border-stone/40 py-3 text-ink text-sm sm:text-base placeholder:text-stone/60 focus:outline-none focus:border-bronze transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
                Direct Email Address <span className="text-bronze">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="principal@domain.com"
                className="w-full bg-transparent border-b border-stone/40 py-3 text-ink text-sm sm:text-base placeholder:text-stone/60 focus:outline-none focus:border-bronze transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
                Direct Telephone / Mobile <span className="text-bronze">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+971 50 000 0000"
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
              <select
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-stone/40 py-3 text-ink text-sm sm:text-base focus:outline-none focus:border-bronze transition-colors cursor-pointer"
              >
                <option value="" disabled className="bg-bone text-stone-dark">Select Primary Mandate</option>
                {areasOfInterest.map((opt) => (
                  <option key={opt} value={opt} className="bg-bone text-ink">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
                Preferred Contact Protocol
              </label>
              <select
                name="preferredMethod"
                value={formData.preferredMethod}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-stone/40 py-3 text-ink text-sm sm:text-base focus:outline-none focus:border-bronze transition-colors cursor-pointer"
              >
                {contactMethods.map((method) => (
                  <option key={method} value={method} className="bg-bone text-ink">
                    {method}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Tell us what you are looking for */}
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
              placeholder="Outline parameters: destination, dates, privacy needs, guest count, or asset specifics..."
              className="w-full bg-transparent border-b border-stone/40 py-3 text-ink text-sm sm:text-base placeholder:text-stone/60 focus:outline-none focus:border-bronze transition-colors resize-none"
            />
          </div>

          {/* Submission and Assurance */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-xs text-stone-dark font-light max-w-sm">
              <ShieldCheck className="w-4 h-4 text-bronze flex-shrink-0" />
              <span>
                Submissions are received directly by the executive office and treated under institutional confidentiality.
              </span>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Transmitting Brief..." : "Transmit Private Enquiry"}
            </Button>
          </div>
        </form>
      </motion.div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Thank you. Your enquiry has been prepared for review."
        message="Your transmission has been logged into the secure desk of Sushill Waddhwa. Given the high-profile nature of our hospitality and private access mandates, our office exercises thorough due diligence before initiating direct communications."
        referenceId={referenceId}
      />
    </>
  );
};
