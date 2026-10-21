import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, ChevronDown, Check, ExternalLink } from 'lucide-react';
import { fadeIn } from '@/lib/motion';

const enquiryTypes = [
  "Business Enquiries",
  "Hospitality Partnerships",
  "Media & Speaking",
  "Brand Collaborations",
  "Other"
];

const contactMethods = [
  "Email",
  "Telephone",
  "WhatsApp",
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
    enquiryType: "",
    message: "",
    preferredMethod: "Email",
  });

  const [draftOpened, setDraftOpened] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialInterest) {
      const match = enquiryTypes.find(
        (a) => a.toLowerCase().includes(initialInterest.toLowerCase()) || initialInterest.toLowerCase().includes(a.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, enquiryType: match }));
      }
    }
  }, [initialInterest]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.organisation.trim()) newErrors.organisation = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.enquiryType) newErrors.enquiryType = true;
    if (!formData.preferredMethod) newErrors.preferredMethod = true;
    if (!formData.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Build subject and body per exact specification
    const subject = `New Website Enquiry — ${formData.enquiryType} — ${formData.name.trim()}`;
    const body = `Name: ${formData.name.trim()}
Organisation: ${formData.organisation.trim()}
Email: ${formData.email.trim()}
Phone: ${formData.phone.trim()}
Enquiry Type: ${formData.enquiryType}
Preferred Contact Method: ${formData.preferredMethod}

Message:
${formData.message.trim()}

Submitted via: sushillwaddhwa.vercel.app`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=office%40sushillwaddhwa.com&su=${encodedSubject}&body=${encodedBody}`;

    // Open Gmail compose in new browser tab
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    setDraftOpened(true);
  };

  return (
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
            Executive Dialogue
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal mt-1">
            Connect with Sushill Waddhwa
          </h3>
        </div>
        <div className="flex items-center gap-2 text-stone-dark text-xs">
          <span className="font-mono text-[11px] text-bronze uppercase tracking-wider">Executive Office</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-8">
        {/* Row 1: Name & Organisation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
              Name <span className="text-bronze">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className={`w-full bg-transparent border-b py-3 text-ink text-sm sm:text-base placeholder:text-stone/60 focus:outline-none transition-colors ${
                errors.name ? 'border-red-500' : 'border-stone/40 focus:border-bronze'
              }`}
            />
            {errors.name && (
              <p className="text-[11px] text-red-600 font-sans">Please enter your name.</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
              Organisation <span className="text-bronze">*</span>
            </label>
            <input
              type="text"
              name="organisation"
              required
              value={formData.organisation}
              onChange={handleChange}
              placeholder="e.g. Luxury Brand Group / Hospitality Advisory"
              className={`w-full bg-transparent border-b py-3 text-ink text-sm sm:text-base placeholder:text-stone/60 focus:outline-none transition-colors ${
                errors.organisation ? 'border-red-500' : 'border-stone/40 focus:border-bronze'
              }`}
            />
            {errors.organisation && (
              <p className="text-[11px] text-red-600 font-sans">Please enter your organisation or company.</p>
            )}
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
              Email <span className="text-bronze">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@organisation.com"
              className={`w-full bg-transparent border-b py-3 text-ink text-sm sm:text-base placeholder:text-stone/60 focus:outline-none transition-colors ${
                errors.email ? 'border-red-500' : 'border-stone/40 focus:border-bronze'
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-600 font-sans">Please enter a valid email address.</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
              Phone <span className="text-bronze">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 / +971 / +44 ..."
              className={`w-full bg-transparent border-b py-3 text-ink text-sm sm:text-base placeholder:text-stone/60 focus:outline-none transition-colors ${
                errors.phone ? 'border-red-500' : 'border-stone/40 focus:border-bronze'
              }`}
            />
            {errors.phone && (
              <p className="text-[11px] text-red-600 font-sans">Please enter your phone number.</p>
            )}
          </div>
        </div>

        {/* Row 3: Enquiry Type & Preferred Contact Method */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
              Enquiry Type <span className="text-bronze">*</span>
            </label>
            <div className="relative">
              <select
                name="enquiryType"
                required
                value={formData.enquiryType}
                onChange={handleChange}
                className={`w-full bg-transparent border-b py-3 pr-8 text-ink text-sm sm:text-base focus:outline-none transition-colors cursor-pointer appearance-none ${
                  errors.enquiryType ? 'border-red-500' : 'border-stone/40 focus:border-bronze'
                }`}
              >
                <option value="" disabled className="bg-bone text-stone-dark">Select Enquiry Type</option>
                {enquiryTypes.map((opt) => (
                  <option key={opt} value={opt} className="bg-bone text-ink">
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-stone-dark absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            {errors.enquiryType && (
              <p className="text-[11px] text-red-600 font-sans">Please select an enquiry type.</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
              Preferred Contact Method <span className="text-bronze">*</span>
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

        {/* Row 4: Message */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-stone-dark font-medium block">
            Message <span className="text-bronze">*</span>
          </label>
          <textarea
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Share details regarding your initiative, hotel partnership, speaking engagement or brand collaboration..."
            className={`w-full bg-transparent border-b py-3 text-ink text-sm sm:text-base placeholder:text-stone/60 focus:outline-none transition-colors resize-none ${
              errors.message ? 'border-red-500' : 'border-stone/40 focus:border-bronze'
            }`}
          />
          {errors.message && (
            <p className="text-[11px] text-red-600 font-sans">Please share your message.</p>
          )}
        </div>

        {/* Submission Button and Actions */}
        <div className="pt-4 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-xs text-stone-dark font-light max-w-sm">
              <ShieldCheck className="w-4 h-4 text-bronze flex-shrink-0" />
              <span>
                Enquiries are received directly by the executive office of Sushill Waddhwa.
              </span>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
            >
              Compose Enquiry in Gmail
            </Button>
          </div>

          {/* Visible fallback link below submit button */}
          <div className="pt-2 text-xs text-stone-dark flex items-center gap-1.5 font-light">
            <span>Prefer your email app?</span>
            <a
              href="mailto:office@sushillwaddhwa.com"
              className="text-ink font-medium hover:text-bronze underline underline-offset-4 transition-colors"
            >
              Email office@sushillwaddhwa.com
            </a>
          </div>
        </div>

        {/* Success / Gmail draft opened notification directly below form */}
        {draftOpened && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 bg-bone border border-bronze/40 text-ink text-sm space-y-2"
          >
            <div className="flex items-center gap-2.5 text-bronze font-medium">
              <Check className="w-4 h-4" />
              <span className="font-serif text-base">Gmail Draft Prepared</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-dark leading-relaxed">
              Your email draft has opened in Gmail. Please review it and click Send to complete your enquiry.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href="mailto:office@sushillwaddhwa.com"
                className="text-bronze hover:underline inline-flex items-center gap-1"
              >
                <span>Open default mail app instead</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default EnquiryForm;
