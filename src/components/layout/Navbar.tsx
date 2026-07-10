"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CardNav from "@/src/components/ui/CardNav";

const desktopLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/sectors-we-serve", label: "Sectors" },
  { href: "/clients", label: "Clients" },
  { href: "/blog", label: "Insights" },
  { href: "/contact-us", label: "Contact" },
];

const cardNavItems = [
  {
    label: "Explore",
    bgColor: "#0F5A2D",
    textColor: "#ffffff",
    links: [
      {
        label: "Home",
        href: "/",
        ariaLabel: "Go to home page",
      },
      {
        label: "About",
        href: "/about-us",
        ariaLabel: "Learn about Redimension Realty",
      },
      {
        label: "Projects",
        href: "/projects",
        ariaLabel: "View projects",
      },
      {
        label: "Services",
        href: "/services",
        ariaLabel: "View services",
      },
    ],
  },
  {
    label: "Company",
    bgColor: "#C99A2E",
    textColor: "#031126",
    links: [
      {
        label: "Sectors",
        href: "/sectors-we-serve",
        ariaLabel: "View sectors served",
      },
      {
        label: "Clients",
        href: "/clients",
        ariaLabel: "View clients",
      },
      {
        label: "Careers",
        href: "/careers",
        ariaLabel: "View careers",
      },
      {
        label: "Gallery",
        href: "/gallery",
        ariaLabel: "View gallery",
      },
      {
        label: "Blog",
        href: "/blog",
        ariaLabel: "Read blog insights",
      },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile and tablet pill navbar */}
      <header className="fixed inset-x-0 top-4 z-50 px-4 lg:hidden">
        <CardNav
          logo="/logo/redimension-logo.png"
          logoAlt="Redimension Realty Private Limited"
          items={cardNavItems}
          baseColor="#ffffff"
          menuColor="#070707"
          buttonBgColor="#C99A2E"
          buttonTextColor="#031126"
          ctaLabel="Enquire"
          ctaHref="/contact-us"
        />
      </header>

      {/* Desktop navbar */}
      <header
        className={`
          fixed inset-x-0 top-0 z-50 hidden
          transition-all duration-500 lg:block
          ${
            scrolled
              ? `
                border-b border-white/30
                bg-[#f7f5ee]/70
                shadow-[0_8px_30px_rgba(3,17,38,0.08)]
                backdrop-blur-xl
              `
              : "border-b border-transparent bg-transparent"
          }
        `}
      >
        <nav
          className="
            mx-auto flex h-[88px] max-w-[1440px]
            items-center justify-between px-8
            xl:px-12 2xl:px-16
          "
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Redimension Realty home"
            className="flex h-[88px] shrink-0 items-center"
          >
            <Image
              src="/logo/redimension-logo.png"
              alt="Redimension Realty Private Limited"
              width={500}
              height={500}
              priority
              quality={100}
              className="
                h-[66px] w-[66px]
                object-contain
                xl:h-[72px] xl:w-[72px]
              "
            />
          </Link>

          {/* Desktop links */}
          <div className="flex items-center gap-7 xl:gap-9">
            {desktopLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative py-2
                    text-[14px] font-medium
                    tracking-[-0.01em]
                    transition-colors duration-300

                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-[1.5px]
                    after:bg-[#0f5a2d]
                    after:transition-all
                    after:duration-300

                    ${
                      isActive
                        ? `
                          text-[#0f5a2d]
                          after:w-full
                        `
                        : `
                          text-[#17231c]
                          after:w-0
                          hover:text-[#0f5a2d]
                          hover:after:w-full
                        `
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
}