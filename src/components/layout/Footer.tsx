import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/src/data/site";

export function Footer() {
  return (
    <footer className="bg-[#031126] text-white">
      <div className="container-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c99a2e]">
              {siteConfig.shortName}
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-black tracking-[-0.06em]">
              Enabling sustainable development through regulatory clarity.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
              Environmental, forest and coastal regulatory consulting for real estate,
              infrastructure, hospitality, industrial and public-sector development projects.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white/80">
              Pages
            </h3>
            <div className="mt-5 grid gap-3">
              {navLinks.slice(0, 7).map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-white/55 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white/80">
              Contact
            </h3>
            <div className="mt-5 space-y-4 text-sm text-white/62">
              <p className="flex gap-3">
                <Phone size={18} className="shrink-0 text-[#c99a2e]" />
                <span>{siteConfig.phone} / {siteConfig.landline}</span>
              </p>
              <p className="flex gap-3">
                <Mail size={18} className="shrink-0 text-[#c99a2e]" />
                <span>{siteConfig.email}</span>
              </p>
              <p className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-[#c99a2e]" />
                <span>{siteConfig.address}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Redimension Realty Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
