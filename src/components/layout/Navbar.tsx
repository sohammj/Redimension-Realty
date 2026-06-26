"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { navLinks } from "@/src/data/site";
import StaggeredMenu from "@/src/components/ui/StaggeredMenu";

const staggeredMenuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about Redimension Realty", link: "/about-us" },
  { label: "Services", ariaLabel: "View services", link: "/services" },
  { label: "Projects", ariaLabel: "View projects", link: "/projects" },
  { label: "Cases", ariaLabel: "View case studies", link: "/case-studies" },
  { label: "Sectors", ariaLabel: "View sectors served", link: "/sectors-we-serve" },
  { label: "Gallery", ariaLabel: "View gallery", link: "/gallery" },
  { label: "Blog", ariaLabel: "Read insights", link: "/blog" },
  { label: "Clients", ariaLabel: "View clients", link: "/clients" },
  { label: "Careers", ariaLabel: "View careers", link: "/careers" },
  { label: "Contact", ariaLabel: "Contact Redimension Realty", link: "/contact-us" },
];

const socialItems = [
  { label: "Email", link: "mailto:director@redimensionrealty.com" },
  { label: "Call", link: "tel:+919870007130" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop navbar */}
      <header className="fixed left-0 right-0 top-4 z-50 hidden px-4 lg:block">
        <motion.nav
          animate={{
            backgroundColor: scrolled
              ? "rgba(3, 17, 38, 0.88)"
              : "rgba(3, 17, 38, 0.96)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 32 }}
          className="mx-auto flex h-16 max-w-[1120px] items-center justify-between rounded-full border border-white/10 px-3 shadow-2xl backdrop-blur-2xl"
        >
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full pr-3"
            aria-label="Redimension Realty Home"
          >
            <span className="grid h-12 w-12 place-items-center">
              <Image
                src="/logo/redimension-logo.png"
                alt="Redimension Realty Logo"
                width={42}
                height={42}
                priority
                className="h-full w-full object-contain"
              />
            </span>

            <span className="hidden leading-tight xl:block">
              <span className="block text-[0.72rem] font-black uppercase tracking-[0.18em] text-white">
                Redimension
              </span>
              <span className="block text-[0.55rem] font-bold uppercase tracking-[0.18em] text-white/50">
                Realty Pvt. Ltd.
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.slice(0, 8).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white/62 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact-us"
            className="hidden items-center gap-2 rounded-full bg-white py-2 pl-4 pr-2 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#031126] transition hover:bg-[#f5e7bd] md:flex"
          >
            Enquire
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0f5a2d] text-white">
              <ArrowRight size={14} />
            </span>
          </Link>
        </motion.nav>
      </header>

      {/* Mobile ReactBits-style staggered menu */}
      <StaggeredMenu
        items={staggeredMenuItems}
        socialItems={socialItems}
        logoUrl="/logo/redimension-logo.png"
        accentColor="#c99a2e"
        colors={["#0f5a2d", "#031126"]}
      />
    </>
  );
}