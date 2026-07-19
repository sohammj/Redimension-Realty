"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import {
  cardNavItems,
  desktopLinks,
  type DesktopLink,
} from "@/src/config/navigation";

import CardNav from "@/src/components/ui/CardNav";

function isRouteActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
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
                          <span className="flex items-center justify-between gap-4 text-[14px] font-semibold text-[#10251a]">
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

                          <span className="mt-1 block text-[12px] leading-[1.55] text-[#536159]">
                            {dropdownLink.description}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-2 border-t border-[#0f5a2d]/10 px-2 pt-2">
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