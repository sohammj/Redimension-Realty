import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { siteConfig } from "@/src/data/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Redimension Realty for environmental clearance, CRZ approval, forest clearance, redevelopment and regulatory advisory consultation.",
};

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.162950119047!2d72.81974232507162!3d18.92418015672133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d10003883f4f%3A0xceadd4f626d66faf!2sMaker%20Chambers%205!5e0!3m2!1sen!2sin!4v1783715399725!5m2!1sen!2sin";

function createTelephoneLink(value: string) {
  return `tel:${value.replace(/[^\d+]/g, "")}`;
}

export default function ContactUsPage() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteConfig.address,
  )}`;

  return (
    <main className="overflow-hidden bg-[#f5f1e8]">
      <section className="section-padding relative">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[620px] w-[24%] opacity-[0.11] lg:block"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 120% 50%, transparent 0 28px, rgba(15,90,45,0.7) 29px 30px)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#0f5a2d]/[0.055] blur-3xl"
        />

        <div className="container-shell relative">
          {/* Page heading */}
          <div className="border-b border-[#17331f]/10 pb-8 lg:pb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9b7426] sm:text-[11px]">
              Contact us
            </p>
          </div>

          {/* Form + Map */}
          <div className="mt-8 grid overflow-hidden rounded-[28px] border border-[#17331f]/10 bg-white/40 shadow-[0_30px_90px_rgba(3,17,38,0.07)] lg:mt-10 lg:h-[680px] lg:grid-cols-[0.95fr_1.05fr]">
            {/* =========================
                ENQUIRY FORM
            ========================== */}
            <div className="overflow-y-auto p-6 sm:p-8 lg:p-9 xl:p-10">
              <div className="mb-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0f5a2d]">
                  Send an enquiry
                </p>

                <h2 className="mt-3 max-w-[500px] font-[var(--font-cormorant)] text-[clamp(2.2rem,3.5vw,3.4rem)] font-medium leading-[0.95] tracking-[-0.04em] text-[#17331f]">
                  Tell us how we can help.
                </h2>
              </div>

              <form className="space-y-4">
                {/* Name + Company */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    id="name"
                    label="Full name"
                    placeholder="Your name"
                    autoComplete="name"
                  />

                  <FormField
                    id="company"
                    label="Company"
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    id="email"
                    label="Email address"
                    placeholder="name@company.com"
                    type="email"
                    autoComplete="email"
                  />

                  <FormField
                    id="phone"
                    label="Phone number"
                    placeholder="+91"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.17em] text-[#405348]"
                  >
                    Service required
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="h-12 w-full appearance-none rounded-xl border border-[#17331f]/15 bg-white/60 px-4 text-sm text-[#17331f] outline-none transition duration-300 focus:border-[#0f5a2d] focus:bg-white"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="environmental-regulatory">
                      Environmental and regulatory advisory
                    </option>

                    <option value="forest-clearance">
                      Forest clearance
                    </option>

                    <option value="coastal-regulation">
                      Coastal regulatory liaisoning
                    </option>

                    <option value="redevelopment">
                      Redevelopment and SRA projects
                    </option>

                    <option value="infrastructure">
                      Construction and infrastructure
                    </option>

                    <option value="other">
                      Other requirement
                    </option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.17em] text-[#405348]"
                  >
                    Project details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Briefly describe your project or requirement"
                    className="w-full resize-none rounded-xl border border-[#17331f]/15 bg-white/60 px-4 py-3 text-sm leading-6 text-[#17331f] outline-none transition duration-300 placeholder:text-[#405348]/45 focus:border-[#0f5a2d] focus:bg-white"
                  />
                </div>

                {/* Submit */}
                <button
                  type="button"
                  className="group flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#0f5a2d] px-7 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#0b4824] hover:shadow-[0_16px_35px_rgba(15,90,45,0.2)]"
                >
                  Submit enquiry

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </form>
            </div>

            {/* =========================
                OFFICE MAP
            ========================== */}
            <div className="relative min-h-[500px] border-t border-[#17331f]/10 sm:min-h-[520px] lg:min-h-0 lg:border-l lg:border-t-0">
              <iframe
                title="Redimension Realty office location"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0 grayscale-[15%]"
              />

              {/* Map gradient */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031126]/25 via-transparent to-transparent"
              />

              {/* =========================
                  OFFICE INFORMATION CARD
              ========================== */}
              <div className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/40 bg-[#f8f5ec]/90 p-5 shadow-[0_20px_60px_rgba(3,17,38,0.2)] backdrop-blur-2xl sm:inset-x-6 sm:bottom-6 sm:p-6">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  {/* Office details */}
                  <div className="max-w-[340px]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
                      Our office
                    </p>

                    <h2 className="mt-3 font-[var(--font-cormorant)] text-3xl font-medium leading-none tracking-[-0.035em] text-[#17331f]">
                      Redimension Realty
                    </h2>

                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-4 flex items-start gap-3 text-sm leading-6 text-[#405348] transition-colors hover:text-[#0f5a2d]"
                    >
                      <MapPin
                        size={18}
                        strokeWidth={1.7}
                        className="mt-0.5 shrink-0 text-[#0f5a2d]"
                      />

                      <span>{siteConfig.address}</span>
                    </a>
                  </div>

                  {/* Contact details */}
                  <div className="space-y-3 border-t border-[#17331f]/10 pt-5 text-sm sm:min-w-[220px] sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                    <a
                      href={createTelephoneLink(siteConfig.phone)}
                      className="flex items-center gap-3 text-[#405348] transition-colors hover:text-[#0f5a2d]"
                    >
                      <Phone
                        size={17}
                        strokeWidth={1.7}
                        className="shrink-0 text-[#0f5a2d]"
                      />

                      <span>{siteConfig.phone}</span>
                    </a>

                    <a
                      href={createTelephoneLink(siteConfig.landline)}
                      className="flex items-center gap-3 text-[#405348] transition-colors hover:text-[#0f5a2d]"
                    >
                      <Phone
                        size={17}
                        strokeWidth={1.7}
                        className="shrink-0 text-[#0f5a2d]"
                      />

                      <span>{siteConfig.landline}</span>
                    </a>

                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-start gap-3 break-all text-[#405348] transition-colors hover:text-[#0f5a2d]"
                    >
                      <Mail
                        size={17}
                        strokeWidth={1.7}
                        className="mt-0.5 shrink-0 text-[#0f5a2d]"
                      />

                      <span>{siteConfig.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
};

function FormField({
  id,
  label,
  placeholder,
  type = "text",
  autoComplete,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.17em] text-[#405348]"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-[#17331f]/15 bg-white/60 px-4 text-sm text-[#17331f] outline-none transition duration-300 placeholder:text-[#405348]/45 focus:border-[#0f5a2d] focus:bg-white"
      />
    </div>
  );
}