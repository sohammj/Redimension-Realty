import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/src/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#0f5a2d]/10 bg-[#f5f1e8] text-[#031126]">
      <div className="container-shell py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b38322]">
              {siteConfig.shortName}
            </p>

            <h2 className="mt-4 max-w-[460px] font-[var(--font-cormorant)] text-[clamp(2rem,3vw,3rem)] font-semibold leading-[1] tracking-[-0.035em] text-[#0f3f2b]">
              Regulatory clarity for responsible development.
            </h2>

            <p className="mt-5 max-w-[470px] text-[13px] leading-6 text-[#61706a] sm:text-[14px] sm:leading-7">
              Environmental, forest and coastal regulatory advisory with
              capabilities across redevelopment and public infrastructure.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
              Pages
            </h3>

            <nav className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {navLinks.slice(0, 8).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-[13px] text-[#59665f] transition-colors hover:text-[#0f5a2d]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-[13px] leading-6 text-[#59665f]">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex gap-3 transition-colors hover:text-[#0f5a2d]"
              >
                <Phone
                  size={16}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-[#0f5a2d]"
                />

                <span>
                  {siteConfig.phone}
                  <br />
                  {siteConfig.landline}
                </span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex gap-3 transition-colors hover:text-[#0f5a2d]"
              >
                <Mail
                  size={16}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-[#0f5a2d]"
                />

                <span className="break-all">{siteConfig.email}</span>
              </a>

              <div className="flex gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-[#0f5a2d]"
                />

                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#0f5a2d]/10 pt-5 text-[11px] text-[#7b847f]">
          © {new Date().getFullYear()} Redimension Realty Private Limited. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}