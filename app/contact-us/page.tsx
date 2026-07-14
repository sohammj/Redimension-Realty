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
    <main className="overflow-hidden bg-[#f5f1e8] pt-24 sm:pt-28">
      <section className="section-padding relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#0f5a2d]/[0.055] blur-3xl"
        />

        <div className="container-shell relative">
          {/* Page heading */}
          <div className="grid gap-6 border-b border-[#17331f]/10 pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-14">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9b7426] sm:text-[11px]">
                Contact us
              </p>

              {/* <h1 className="mt-5 max-w-[760px] font-[var(--font-cormorant)] text-[clamp(3.2rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.055em] text-[#17331f]">
                Start a conversation about your project.
              </h1> */}
            </div>

            {/* <div className="lg:flex lg:justify-end">
              <p className="max-w-[520px] text-[14px] leading-7 text-[#405348]/80 sm:text-[15px] sm:leading-8">
                Speak with our team regarding environmental approvals,
                regulatory liaisoning, redevelopment, construction or
                infrastructure requirements.
              </p>
            </div> */}
          </div>

          {/* Form and map */}
          <div className="mt-10 grid overflow-hidden border border-[#17331f]/10 bg-white/40 shadow-[0_30px_90px_rgba(3,17,38,0.07)] lg:mt-14 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Enquiry form */}
            <div className="p-6 sm:p-9 lg:p-12 xl:p-14">
              <div className="mb-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0f5a2d]">
                  Send an enquiry
                </p>

                <h2 className="mt-3 font-[var(--font-cormorant)] text-[clamp(2.2rem,3.5vw,3.4rem)] font-medium leading-none tracking-[-0.04em] text-[#17331f]">
                  Tell us how we can help.
                </h2>
              </div>

              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
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

                <div className="grid gap-6 sm:grid-cols-2">
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
                    className="h-14 w-full appearance-none border border-[#17331f]/15 bg-white/60 px-4 text-sm text-[#17331f] outline-none transition duration-300 focus:border-[#0f5a2d] focus:bg-white"
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
                    rows={6}
                    required
                    placeholder="Briefly describe your project or requirement"
                    className="w-full resize-none border border-[#17331f]/15 bg-white/60 px-4 py-4 text-sm leading-6 text-[#17331f] outline-none transition duration-300 placeholder:text-[#405348]/45 focus:border-[#0f5a2d] focus:bg-white"
                  />
                </div>

                <button
                  type="button"
                  className="group flex h-14 w-full items-center justify-center gap-3 bg-[#0f5a2d] px-7 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#0b4824] hover:shadow-[0_16px_35px_rgba(15,90,45,0.2)]"
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

            {/* Office map */}
            <div className="relative min-h-[620px] border-t border-[#17331f]/10 sm:min-h-[570px] lg:min-h-full lg:border-l lg:border-t-0">
              <iframe
                title="Redimension Realty office location"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0 grayscale-[15%]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031126]/25 via-transparent to-transparent"
              />

              {/* Contact information */}
              <div className="absolute inset-x-4 bottom-4 border border-white/40 bg-[#f8f5ec]/90 p-6 shadow-[0_20px_60px_rgba(3,17,38,0.2)] backdrop-blur-2xl sm:inset-x-6 sm:bottom-6 sm:p-8">
                <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
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
                      className="group mt-5 flex items-start gap-3 text-sm leading-6 text-[#405348] transition-colors hover:text-[#0f5a2d]"
                    >
                      <MapPin
                        size={18}
                        strokeWidth={1.7}
                        className="mt-0.5 shrink-0 text-[#0f5a2d]"
                      />

                      <span>{siteConfig.address}</span>
                    </a>
                  </div>

                  <div className="space-y-4 border-t border-[#17331f]/10 pt-6 text-sm sm:min-w-[220px] sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
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
        className="h-14 w-full border border-[#17331f]/15 bg-white/60 px-4 text-sm text-[#17331f] outline-none transition duration-300 placeholder:text-[#405348]/45 focus:border-[#0f5a2d] focus:bg-white"
      />
    </div>
  );
}