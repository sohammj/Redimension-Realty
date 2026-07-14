"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import {
  ArrowUpRight,
  Building2,
  ChevronDown,
  Landmark,
  Leaf,
  Target,
  UserRound,
  Waves,
  type LucideIcon,
} from "lucide-react";

import CardNav from "@/src/components/ui/CardNav";

type DropdownLink = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

type DesktopLink = {
  href: string;
  label: string;
  dropdown?: DropdownLink[];
};

const desktopLinks: DesktopLink[] = [
  {
    href: "/about-us",
    label: "About",
    dropdown: [
      {
        label: "Overview",
        href: "/about-us#overview",
        description:
          "An introduction to Redimension Realty and its advisory approach.",
        icon: Building2,
      },
      {
        label: "Vision, Mission & Values",
        href: "/about-us#vision-mission-values",
        description:
          "The direction and principles guiding every engagement.",
        icon: Target,
      },
      {
        label: "Leadership",
        href: "/about-us#leadership",
        description:
          "The experience and professional direction behind the company.",
        icon: UserRound,
      },
    ],
  },

  {
    href: "/services",
    label: "Services",
    dropdown: [
      {
        label: "Environmental & Regulatory",
        href: "/services#environmental-regulatory",
        description:
          "Environmental, forest, CRZ and statutory approval advisory.",
        icon: Leaf,
      },
      {
        label: "Redevelopment & SRA",
        href: "/services#redevelopment-sra",
        description:
          "End-to-end support for redevelopment and rehabilitation projects.",
        icon: Building2,
      },
      {
        label: "Public Infrastructure",
        href: "/services#public-infrastructure",
        description:
          "Institutional coordination for civic and infrastructure projects.",
        icon: Landmark,
      },
    ],
  },
  {
    href: "/projects",
    label: "Projects",
    dropdown: [
      {
        label: "Environmental Projects",
        href: "/projects#environmental",
        description:
          "Regulatory, environmental and coastal development engagements.",
        icon: Leaf,
      },
      {
        label: "Redevelopment Projects",
        href: "/projects#redevelopment",
        description:
          "SRA, housing, rehabilitation and urban redevelopment assignments.",
        icon: Building2,
      },
      {
        label: "Infrastructure Projects",
        href: "/projects#infrastructure",
        description:
          "Public utility, mobility and institutional infrastructure works.",
        icon: Landmark,
      },
    ],
  },
  {
    href: "/sectors-we-serve",
    label: "Sectors",
    dropdown: [
      {
        label: "Real Estate & Developers",
        href: "/sectors-we-serve#real-estate",
        description:
          "Advisory and project support for builders and developers.",
        icon: Building2,
      },
      {
        label: "Government & Infrastructure",
        href: "/sectors-we-serve#government-infrastructure",
        description: "Coordination with civic bodies and public institutions.",
        icon: Landmark,
      },
      {
        label: "Coastal & Environmental",
        href: "/sectors-we-serve#coastal-environmental",
        description:
          "Specialist support for sensitive coastal and environmental projects.",
        icon: Waves,
      },
    ],
  },
  {
    href: "/clients",
    label: "Clients",
  },
  {
    href: "/blog",
    label: "Insights",
  },
  {
    href: "/gallery",
    label: "Gallery",
  },
  {
    href: "/contact-us",
    label: "Contact",
  },
];

const cardNavItems = [
  {
    label: "Explore",
    bgColor: "#0F5A2D",
    textColor: "#ffffff",
    links: [
      {
        label: "About",
        href: "/about-us",
        ariaLabel: "Learn about Redimension Realty",
        children: [
          {
            label: "Overview",
            href: "/about-us#overview",
            ariaLabel: "View the Redimension Realty overview",
          },
          {
            label: "Company Story",
            href: "/about-us#company-story",
            ariaLabel: "Read the Redimension Realty company story",
          },
          {
            label: "Vision, Mission & Values",
            href: "/about-us#vision-mission-values",
            ariaLabel: "View the company vision, mission and values",
          },
          {
            label: "Our Strengths",
            href: "/about-us#strengths",
            ariaLabel: "View Redimension Realty strengths",
          },
          {
            label: "Leadership",
            href: "/about-us#leadership",
            ariaLabel: "View Redimension Realty leadership",
          },
        ],
      },
      {
        label: "Services",
        href: "/services",
        ariaLabel: "View all services",
        children: [
          {
            label: "Environmental & Regulatory",
            href: "/services#environmental-regulatory",
            ariaLabel: "View environmental and regulatory services",
          },
          {
            label: "Redevelopment & SRA",
            href: "/services#redevelopment-sra",
            ariaLabel: "View redevelopment and SRA services",
          },
          {
            label: "Public Infrastructure",
            href: "/services#public-infrastructure",
            ariaLabel: "View public infrastructure services",
          },
        ],
      },
      {
        label: "Projects",
        href: "/projects",
        ariaLabel: "View all projects",
        children: [
          {
            label: "Environmental Projects",
            href: "/projects#environmental",
            ariaLabel: "View environmental projects",
          },
          {
            label: "Redevelopment Projects",
            href: "/projects#redevelopment",
            ariaLabel: "View redevelopment projects",
          },
          {
            label: "Infrastructure Projects",
            href: "/projects#infrastructure",
            ariaLabel: "View infrastructure projects",
          },
        ],
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
        ariaLabel: "View all sectors served",
        children: [
          {
            label: "Real Estate & Developers",
            href: "/sectors-we-serve#real-estate",
            ariaLabel: "View real estate and developer sectors",
          },
          {
            label: "Government & Infrastructure",
            href: "/sectors-we-serve#government-infrastructure",
            ariaLabel: "View government and infrastructure sectors",
          },
          {
            label: "Coastal & Environmental",
            href: "/sectors-we-serve#coastal-environmental",
            ariaLabel: "View coastal and environmental sectors",
          },
        ],
      },
      {
        label: "Clients",
        href: "/clients",
        ariaLabel: "View clients",
      },
      {
        label: "Insights",
        href: "/blog",
        ariaLabel: "Read insights",
      },
      {
        label: "Gallery",
        href: "/gallery",
        ariaLabel: "View gallery",
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
    ],
  },
];

function isRouteActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

function DesktopDropdown({
  item,
  pathname,
}: {
  item: DesktopLink;
  pathname: string;
}) {
  const isActive = isRouteActive(pathname, item.href);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelScheduledClose = () => {
    if (!closeTimerRef.current) return;

    clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };

  useEffect(() => {
    return () => {
      cancelScheduledClose();
    };
  }, []);

  return (
    <Popover className="relative">
      {({ open, close }) => {
        const openDropdown = () => {
          cancelScheduledClose();

          if (!open) {
            buttonRef.current?.click();
          }
        };

        const scheduleDropdownClose = () => {
          cancelScheduledClose();

          closeTimerRef.current = setTimeout(() => {
            close();
            closeTimerRef.current = null;
          }, 240);
        };

        return (
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleDropdownClose}
          >
            <PopoverButton
              ref={buttonRef}
              className={`
                group relative flex items-center gap-1.5 py-2
                text-[14px] font-medium tracking-[-0.01em]
                outline-none transition-colors duration-300

                after:absolute
                after:bottom-0
                after:left-0
                after:h-[1.5px]
                after:bg-[#0f5a2d]
                after:transition-all
                after:duration-300

                ${
                  isActive || open
                    ? "text-[#0f5a2d] after:w-full"
                    : `
                      text-[#17231c]
                      after:w-0
                      hover:text-[#0f5a2d]
                      hover:after:w-full
                    `
                }
              `}
            >
              <span>{item.label}</span>

              <ChevronDown
                size={14}
                strokeWidth={1.8}
                className={`
                  transition-transform duration-300
                  ${open ? "rotate-180" : ""}
                `}
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="
                absolute left-1/2 top-full z-[100]
                w-[430px] -translate-x-1/2
                origin-top pt-4

                transition duration-200 ease-out

                data-closed:-translate-y-2
                data-closed:scale-[0.97]
                data-closed:opacity-0
              "
            >
              <div
                className="
                  overflow-hidden rounded-[22px]
                  border border-white/60
                  bg-[#f7f5ee]/95 p-2.5
                  shadow-[0_24px_70px_rgba(3,17,38,0.16)]
                  backdrop-blur-2xl
                "
              >
                <div className="space-y-1">
                  {item.dropdown?.map((dropdownLink) => {
                    const Icon = dropdownLink.icon;

                    return (
                      <Link
                        key={dropdownLink.href}
                        href={dropdownLink.href}
                        onClick={() => close()}
                        className="
                          group flex items-start gap-4
                          rounded-[16px] px-4 py-3.5
                          transition-colors duration-300
                          hover:bg-white/80
                        "
                      >
                        <span
                          className="
                            mt-0.5 flex h-10 w-10 shrink-0
                            items-center justify-center rounded-full
                            border border-[#0f5a2d]/10
                            bg-[#0f5a2d]/[0.07]
                            text-[#0f5a2d]
                            transition duration-300

                            group-hover:bg-[#0f5a2d]
                            group-hover:text-white
                          "
                        >
                          <Icon size={18} strokeWidth={1.7} />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span
                            className="
                              flex items-center justify-between gap-4
                              text-[14px] font-semibold text-[#10251a]
                            "
                          >
                            {dropdownLink.label}

                            <ArrowUpRight
                              size={15}
                              className="
                                shrink-0 text-[#0f5a2d]
                                transition-transform duration-300

                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                              "
                            />
                          </span>

                          <span
                            className="
                              mt-1 block text-[12px]
                              leading-[1.55] text-[#536159]
                            "
                          >
                            {dropdownLink.description}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>

                <div
                  className="
                    mt-2 border-t border-[#0f5a2d]/10
                    px-2 pt-2
                  "
                >
                  <Link
                    href={item.href}
                    onClick={() => close()}
                    className="
                      flex items-center justify-between
                      rounded-[14px] px-3 py-3
                      text-[12px] font-bold uppercase
                      tracking-[0.14em] text-[#0f5a2d]
                      transition hover:bg-[#0f5a2d]/[0.06]
                    "
                  >
                    View all {item.label}
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </PopoverPanel>
          </div>
        );
      }}
    </Popover>
  );
}

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
      {/* Mobile and tablet navigation */}
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

      {/* Laptop and desktop navigation */}
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
                h-[74px] w-[74px] object-contain
                drop-shadow-[0_2px_8px_rgba(3,17,38,0.08)]

                xl:h-[80px] xl:w-[80px]
              "
            />
          </Link>

          <PopoverGroup className="flex items-center gap-7 xl:gap-9">
            {desktopLinks.map((item) => {
              if (item.dropdown?.length) {
                return (
                  <DesktopDropdown
                    key={item.href}
                    item={item}
                    pathname={pathname}
                  />
                );
              }

              const isActive = isRouteActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
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
                        ? "text-[#0f5a2d] after:w-full"
                        : `
                          text-[#17231c]
                          after:w-0
                          hover:text-[#0f5a2d]
                          hover:after:w-full
                        `
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </PopoverGroup>
        </nav>
      </header>
    </>
  );
}
