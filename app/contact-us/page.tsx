import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/src/data/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Redimension Realty for environmental clearance, CRZ approval, forest clearance and regulatory advisory consultation.",
};

export default function ContactUsPage() {
  return (
    <main className="pt-28">
      <section className="section-padding">
        <div className="container-shell">
          <p className="eyebrow">Contact Us</p>
          <h1 className="section-title mt-4 max-w-5xl">
            Start a conversation about your project approvals.
          </h1>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-[#031126] p-8 text-white">
              <h2 className="text-3xl font-black tracking-[-0.05em]">Contact Details</h2>
              <div className="mt-8 space-y-6 text-white/70">
                <p className="flex gap-4">
                  <Phone className="shrink-0 text-[#c99a2e]" />
                  <span>{siteConfig.phone} / {siteConfig.landline}</span>
                </p>
                <p className="flex gap-4">
                  <Mail className="shrink-0 text-[#c99a2e]" />
                  <span>{siteConfig.email}</span>
                </p>
                <p className="flex gap-4">
                  <MapPin className="shrink-0 text-[#c99a2e]" />
                  <span>{siteConfig.address}</span>
                </p>
              </div>
            </div>

            <form className="premium-card rounded-[2rem] p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <input className="rounded-2xl border border-[#071b3a]/10 px-5 py-4 outline-none" placeholder="Full Name" />
                <input className="rounded-2xl border border-[#071b3a]/10 px-5 py-4 outline-none" placeholder="Company Name" />
                <input className="rounded-2xl border border-[#071b3a]/10 px-5 py-4 outline-none" placeholder="Email" />
                <input className="rounded-2xl border border-[#071b3a]/10 px-5 py-4 outline-none" placeholder="Phone" />
              </div>
              <input className="mt-5 w-full rounded-2xl border border-[#071b3a]/10 px-5 py-4 outline-none" placeholder="Service Required" />
              <textarea className="mt-5 min-h-40 w-full rounded-2xl border border-[#071b3a]/10 px-5 py-4 outline-none" placeholder="Tell us about your project" />
              <button type="button" className="mt-5 rounded-full bg-[#0f5a2d] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white">
                Submit Enquiry
              </button>
              <p className="mt-4 text-xs text-[#526174]">
                Form backend with Resend will be connected later.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
