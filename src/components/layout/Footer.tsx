import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/src/data/site";

export function Footer() {
  const footerLinks = navLinks.slice(0, 8);

  return (
    <footer className="border-t border-[#0f5a2d]/10 bg-[#f5f1e8] text-[#031126]">
      <div className="container-shell py-10 sm:py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.75fr] lg:gap-16">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden">
                <img
                  src="/logo/redimension-logo.png"
                  alt={siteConfig.shortName}
                  className="h-full w-full object-contain"
                />
              </div>

              <h2 className="font-[var(--font-cormorant)] text-[20px] font-semibold tracking-[-0.02em] text-[#0f3f2b]">
                {siteConfig.shortName}
              </h2>
            </div>

            <div className="mt-5 max-w-[420px] space-y-3 text-[13px] leading-6 text-[#59665f]">
              <div className="flex gap-3">
                <MapPin
                  size={15}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-[#0f5a2d]"
                />
                <span>{siteConfig.address}</span>
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex w-fit gap-3 transition-colors hover:text-[#0f5a2d]"
              >
                <Mail
                  size={15}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-[#0f5a2d]"
                />
                <span className="break-all">{siteConfig.email}</span>
              </a>

              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex w-fit gap-3 transition-colors hover:text-[#0f5a2d]"
              >
                <Phone
                  size={15}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-[#0f5a2d]"
                />
                <span>{siteConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-[var(--font-cormorant)] text-[15px] font-medium uppercase tracking-[0.08em] text-[#6d716e]">
              Explore
            </h3>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {footerLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-[#38463f] transition-colors hover:text-[#0f5a2d]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* More */}
          <div>
            <h3 className="font-[var(--font-cormorant)] text-[15px] font-medium uppercase tracking-[0.08em] text-[#6d716e]">
              More
            </h3>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {footerLinks.slice(4, 8).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-[#38463f] transition-colors hover:text-[#0f5a2d]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#0f5a2d]/10 pt-5 text-[11px] text-[#7b847f] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Redimension Realty Private Limited.
          </p>

          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}