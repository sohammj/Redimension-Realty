// src/components/sections/ContactSection.tsx

"use client";

import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect this to your form API or email service later.
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f5f1e8] py-20 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-40 top-0
          h-[520px] w-[520px] rounded-full
          bg-[#0f5a2d]/[0.06] blur-3xl
        "
      />

      <div className="container-shell relative">
        {/* Heading */}
        {/* Section header */}
        <div
        className="
            mb-12 grid gap-7
            lg:mb-16
            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-end
        "
        >
        <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#9b7426] sm:text-[11px]">
            Contact us
            </p>

            <h2
            className="
                max-w-[680px]
                font-[var(--font-cormorant)]
                text-[clamp(2.8rem,5vw,5rem)]
                font-medium leading-[0.93]
                tracking-[-0.055em]
                text-[#17331f]
            "
            >
            Start a conversation.
            </h2>
        </div>

        <div className="flex flex-col lg:items-end">
            <p
            className="
                max-w-[510px]
                text-[14px] leading-7 text-[#405348]/75
                sm:text-[15px] sm:leading-8
            "
            >
            Speak with our team regarding environmental approvals, regulatory
            liaisoning, redevelopment, construction or infrastructure requirements.
            </p>
        </div>
        </div>

        <div className="grid overflow-hidden border border-[#17331f]/10 bg-white/45 shadow-[0_30px_80px_rgba(3,17,38,0.08)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact form */}
          <div className="p-6 sm:p-9 lg:p-12">
            <div className="mb-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f5a2d]">
                Send an enquiry
              </p>

              <h3 className="mt-3 text-3xl font-medium tracking-[-0.035em] text-[#17331f]">
                Tell us how we can help.
              </h3>
            </div>

            {submitted ? (
              <div className="flex min-h-[410px] flex-col items-start justify-center border border-[#0f5a2d]/15 bg-[#0f5a2d]/[0.05] p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b7426]">
                  Enquiry received
                </p>

                <h3 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-[#17331f]">
                  Thank you for contacting us.
                </h3>

                <p className="mt-4 max-w-md leading-7 text-[#405348]">
                  Our team will review your enquiry and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    id="name"
                    label="Full name"
                    placeholder="Your name"
                  />

                  <FormField
                    id="company"
                    label="Company"
                    placeholder="Company name"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    id="email"
                    label="Email address"
                    placeholder="name@company.com"
                    type="email"
                  />

                  <FormField
                    id="phone"
                    label="Phone number"
                    placeholder="+91"
                    type="tel"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#405348]"
                  >
                    Service required
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="
                      h-14 w-full border border-[#17331f]/15
                      bg-white/55 px-4 text-sm text-[#17331f]
                      outline-none transition
                      focus:border-[#0f5a2d] focus:bg-white/80
                    "
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="environmental-clearance">
                      Environmental clearance
                    </option>

                    <option value="forest-clearance">
                      Forest clearance
                    </option>

                    <option value="coastal-regulation">
                      Coastal regulatory liaisoning
                    </option>

                    <option value="redevelopment">
                      Redevelopment and SRA
                    </option>

                    <option value="construction">
                      Construction and infrastructure
                    </option>

                    <option value="other">Other requirement</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#405348]"
                  >
                    Project details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Briefly describe your project or requirement"
                    className="
                      w-full resize-none border border-[#17331f]/15
                      bg-white/55 px-4 py-4 text-sm text-[#17331f]
                      outline-none transition
                      placeholder:text-[#405348]/50
                      focus:border-[#0f5a2d] focus:bg-white/80
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    group flex h-14 items-center justify-center gap-3
                    bg-[#0f5a2d] px-7
                    text-[11px] font-bold uppercase tracking-[0.18em]
                    text-white transition-all duration-300
                    hover:-translate-y-0.5 hover:bg-[#0b4824]
                    hover:shadow-[0_16px_35px_rgba(15,90,45,0.22)]
                  "
                >
                  Submit enquiry

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </button>
              </form>
            )}
          </div>

          {/* Map and contact information */}
          <div className="relative min-h-[560px] border-t border-[#17331f]/10 lg:border-l lg:border-t-0">
            <iframe
              title="Redimension Realty office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.162950119047!2d72.81974232507162!3d18.92418015672133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d10003883f4f%3A0xceadd4f626d66faf!2sMaker%20Chambers%205!5e0!3m2!1sen!2sin!4v1783715399725!5m2!1sen!2sin"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />

            {/* Information panel */}
            <div
              className="
                absolute inset-x-4 bottom-4
                border border-white/35
                bg-[#f7f5ee]/80 p-6
                shadow-[0_20px_50px_rgba(3,17,38,0.18)]
                backdrop-blur-2xl
                sm:inset-x-6 sm:bottom-6 sm:p-8
              "
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
                Our office
              </p>

              <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#17331f]">
                Redimension Realty Private Limited
              </h3>

              <div className="mt-6 grid gap-5 text-sm text-[#405348] sm:grid-cols-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 hover:text-[#0f5a2d]"
                >
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-[#0f5a2d]"
                  />

                  <span>
                    213, 2nd Floor,
                    Makers Chamber - 5,
                    Nariman Point,
                    Mumbai - 400021,
                    Maharashtra, India
                  </span>
                </a>

                <div className="space-y-4">
                  <a
                    href="tel:+910000000000"
                    className="flex items-center gap-3 hover:text-[#0f5a2d]"
                  >
                    <Phone size={17} className="text-[#0f5a2d]" />
                    +91 00000 00000
                  </a>

                  <a
                    href="mailto:info@redimensionrealty.com"
                    className="flex items-center gap-3 hover:text-[#0f5a2d]"
                  >
                    <Mail size={17} className="text-[#0f5a2d]" />
                    info@redimensionrealty.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
};

function FormField({
  id,
  label,
  placeholder,
  type = "text",
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#405348]"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="
          h-14 w-full border border-[#17331f]/15
          bg-white/55 px-4 text-sm text-[#17331f]
          outline-none transition
          placeholder:text-[#405348]/50
          focus:border-[#0f5a2d] focus:bg-white/80
        "
      />
    </div>
  );
}