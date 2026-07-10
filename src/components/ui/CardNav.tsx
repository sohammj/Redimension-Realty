"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, type Transition } from "framer-motion";
import { ArrowUpRight, ChevronRight, Search } from "lucide-react";

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel?: string;
};

type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

type CardNavProps = {
  logo: string | StaticImageData;
  logoAlt: string;
  items: CardNavItem[];
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  ease?: string;
  theme?: "light" | "dark";
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

const isExternalHref = (href: string) =>
  href.startsWith("http") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:");

const hexToRgba = (hex: string, alpha: number) => {
  if (!hex.startsWith("#")) return hex;

  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((character) => character + character)
          .join("")
      : clean;

  const red = parseInt(full.slice(0, 2), 16);
  const green = parseInt(full.slice(2, 4), 16);
  const blue = parseInt(full.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

export default function CardNav({
  logo,
  logoAlt,
  items,
  baseColor = "#ffffff",
  menuColor = "#031126",
  buttonBgColor = "#031126",
  buttonTextColor = "#ffffff",
  ease = "power3.out",
  theme = "light",
  ctaLabel = "Enquire",
  ctaHref = "/contact-us",
  className = "",
}: CardNavProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openRef = useRef(false);
  const hoverCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mobileLinks = useMemo(() => {
    const allowedLabels = new Set([
      "About",
      "Projects",
      "Services",
      "Sectors",
      "Clients",
      "Careers",
      "Gallery",
      "Blog",
      "Contact",
    ]);

    const links = items
      .flatMap((item) => item.links)
      .filter((link) => allowedLabels.has(link.label));

    if (!links.some((link) => link.href === ctaHref)) {
      links.push({
        label: "Contact",
        href: ctaHref,
        ariaLabel: "Contact Redimension Realty",
      });
    }

    return links;
  }, [ctaHref, items]);

  const filteredMobileLinks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return mobileLinks;

    return mobileLinks.filter((link) =>
      link.label.toLowerCase().includes(query),
    );
  }, [mobileLinks, searchQuery]);

  const resolvedEase = useMemo<Transition["ease"]>(() => {
    if (ease === "power3.out") return [0.22, 1, 0.36, 1];
    if (ease === "power2.out") return [0.16, 1, 0.3, 1];
    return "easeOut";
  }, [ease]);

  const transition: Transition = {
    duration: 0.5,
    ease: resolvedEase,
  };

  const textColor = theme === "dark" ? "#ffffff" : menuColor;
  const navBackground =
    theme === "dark" ? "rgba(3, 17, 38, 0.28)" : hexToRgba(baseColor, 0.22);

  const setOpenState = (value: boolean) => {
    openRef.current = value;
    setOpen(value);

    if (!value) setSearchQuery("");
  };

  const isDesktopViewport = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 768px)").matches;
  };

  const cancelHoverClose = () => {
    if (!hoverCloseTimerRef.current) return;

    clearTimeout(hoverCloseTimerRef.current);
    hoverCloseTimerRef.current = null;
  };

  const openDesktopNavigation = () => {
    if (!isDesktopViewport()) return;

    cancelHoverClose();
    if (!openRef.current) setOpenState(true);
  };

  const scheduleDesktopClose = () => {
    if (!isDesktopViewport()) return;

    cancelHoverClose();
    hoverCloseTimerRef.current = setTimeout(() => {
      setOpenState(false);
      hoverCloseTimerRef.current = null;
    }, 180);
  };

  const closeNavigation = () => {
    cancelHoverClose();
    setOpenState(false);
  };

  const handleToggle = () => {
    cancelHoverClose();
    setOpenState(!openRef.current);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeNavigation();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!open || isDesktopViewport()) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    return () => cancelHoverClose();
  }, []);

  return (
    <div
      className={`mx-auto w-full ${
        items.length <= 2 ? "max-w-[980px]" : "max-w-[1180px]"
      } ${className}`}
      onMouseEnter={cancelHoverClose}
      onMouseLeave={scheduleDesktopClose}
    >
      <nav
        className={`
          relative z-[70] isolate overflow-hidden border border-white/35
          shadow-[0_18px_55px_rgba(3,17,38,0.14),inset_0_1px_0_rgba(255,255,255,0.55)]
          backdrop-blur-[26px] backdrop-saturate-150
          transition-[height,border-radius,box-shadow] duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            open
              ? "max-md:h-[calc(100dvh-2rem)] max-md:rounded-[1.75rem] max-md:shadow-[0_24px_70px_rgba(3,17,38,0.24)]"
              : "max-md:h-[76px] max-md:rounded-[2rem]"
          }
          md:rounded-[2rem]
        `}
        style={{
          backgroundColor: navBackground,
          WebkitBackdropFilter: "blur(26px) saturate(150%)",
          backdropFilter: "blur(26px) saturate(150%)",
        }}
        aria-label="Main navigation"
      >
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[#fbfaf5] md:hidden"
          initial={false}
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: open ? 0.38 : 0.2, ease: resolvedEase }}
        />

        <div
          className={`
            relative z-20 flex h-[76px] items-center border-b px-4
            transition-colors duration-300 sm:px-6 md:h-[88px] md:justify-between md:border-transparent
            ${open ? "max-md:border-[#24372a]/10" : "max-md:border-transparent"}
          `}
        >
          <button
            type="button"
            onClick={handleToggle}
            onMouseEnter={openDesktopNavigation}
            onFocus={openDesktopNavigation}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation-panel"
            className="
              group order-3 ml-auto flex h-12 min-w-12 touch-manipulation
              items-center justify-center gap-3 rounded-full px-3 transition
              hover:bg-black/5 md:order-1 md:ml-0 md:justify-start md:hover:bg-white/25
            "
            style={{ color: textColor }}
          >
            <span className="relative h-4 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-[2px] w-6 rounded-full transition duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
                style={{ backgroundColor: textColor }}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-6 rounded-full transition duration-200 ${
                  open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
                style={{ backgroundColor: textColor }}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-6 rounded-full transition duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
                style={{ backgroundColor: textColor }}
              />
            </span>
{/* 
            <span className="hidden text-xs font-black uppercase tracking-[0.18em] md:block">
              {open ? "Close" : "Menu"}
            </span> */}
          </button>

          <Link
            href="/"
            aria-label={logoAlt}
            className="
              order-1 z-20 flex h-[58px] w-[190px] items-center justify-start
              min-[380px]:w-[225px]
              md:absolute md:left-1/2 md:top-1/2 md:h-[76px] md:w-[340px]
              md:-translate-x-1/2 md:-translate-y-1/2 md:justify-center
            "
            onClick={closeNavigation}
          >
            <Image
              src={logo}
              alt={logoAlt}
              width={900}
              height={300}
              priority
              quality={100}
              sizes="(max-width: 379px) 190px, (max-width: 767px) 225px, 340px"
              className="
                h-auto max-h-[50px] w-full object-contain object-left
                drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]
                md:max-h-[64px] md:object-center
              "
            />
          </Link>

          {isExternalHref(ctaHref) ? (
            <a
              href={ctaHref}
              className="
                hidden h-12 items-center gap-2 rounded-full px-4 text-xs
                font-black uppercase tracking-[0.14em] shadow-[0_12px_28px_rgba(3,17,38,0.18),inset_0_1px_0_rgba(255,255,255,0.18)]
                transition hover:scale-[1.02] md:flex
              "
              style={{
                backgroundColor: hexToRgba(buttonBgColor, 0.9),
                color: buttonTextColor,
              }}
            >
              <span>{ctaLabel}</span>
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <Link
              href={ctaHref}
              className="
                hidden h-12 items-center gap-2 rounded-full px-4 text-xs
                font-black uppercase tracking-[0.14em] shadow-[0_12px_28px_rgba(3,17,38,0.18),inset_0_1px_0_rgba(255,255,255,0.18)]
                transition hover:scale-[1.02] md:flex
              "
              style={{
                backgroundColor: hexToRgba(buttonBgColor, 0.9),
                color: buttonTextColor,
              }}
              onClick={closeNavigation}
            >
              <span>{ctaLabel}</span>
              <ArrowUpRight size={16} />
            </Link>
          )}
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="mobile-navigation-panel"
              key="mobile-navigation-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: open ? 0.46 : 0.18,
                delay: open ? 0.14 : 0,
                ease: resolvedEase,
              }}
              className="
                relative z-10 h-[calc(100dvh-108px)] overflow-y-auto
                overscroll-contain px-5 pb-8 text-[#24372a] md:hidden
              "
            >
              <div className="mx-auto w-full max-w-xl">
                <div className="pb-7 pt-6">
                  <label className="relative block">
                    <span className="sr-only">Search pages</span>
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search..."
                      className="
                        h-16 w-full rounded-none border border-[#24372a]/15
                        bg-white/70 px-5 pr-16 text-xl font-normal text-[#24372a]
                        outline-none transition placeholder:text-[#24372a]/65
                        focus:border-[#0F5A2D] focus:bg-white
                      "
                    />
                    <Search
                      size={27}
                      strokeWidth={1.55}
                      className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2"
                    />
                  </label>
                </div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#8aae45]">
                  Explore Redimension
                </p>

                <nav className="border-t border-[#24372a]/15">
                  {filteredMobileLinks.map((link, index) => {
                    const rowClassName = `
                      group flex min-h-[64px] items-center justify-between gap-5
                      border-b border-[#24372a]/15 py-3.5
                      text-[clamp(1.25rem,5.6vw,1.65rem)] font-normal
                      leading-tight tracking-[-0.025em] text-[#344f39]
                      transition-colors hover:text-[#0F5A2D]
                    `;

                    const rowContent = (
                      <>
                        <span>{link.label}</span>
                        <ChevronRight
                          size={21}
                          strokeWidth={1.45}
                          className="shrink-0 text-[#456149] transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    );

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.38,
                          delay: 0.18 + index * 0.035,
                          ease: resolvedEase,
                        }}
                      >
                        {isExternalHref(link.href) ? (
                          <a
                            href={link.href}
                            aria-label={link.ariaLabel}
                            className={rowClassName}
                            onClick={closeNavigation}
                          >
                            {rowContent}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            aria-label={link.ariaLabel}
                            className={rowClassName}
                            onClick={closeNavigation}
                          >
                            {rowContent}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}

                  {filteredMobileLinks.length === 0 && (
                    <p className="border-b border-[#24372a]/15 py-8 text-lg text-[#24372a]/65">
                      No matching page found.
                    </p>
                  )}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="desktop-navigation-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={transition}
              className="relative z-10 hidden overflow-hidden md:block"
            >
              <div
                className={`grid gap-3 p-3 pt-0 ${
                  items.length <= 2 ? "md:grid-cols-2" : "md:grid-cols-3"
                }`}
              >
                {items.map((item, index) => (
                  <motion.section
                    key={item.label}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 16, opacity: 0 }}
                    transition={{
                      ...transition,
                      delay: index * 0.06,
                    }}
                    className="
                      relative min-h-[165px] overflow-hidden rounded-[1.5rem]
                      border border-white/20 p-4 shadow-[0_18px_45px_rgba(3,17,38,0.14),inset_0_1px_0_rgba(255,255,255,0.22)]
                      backdrop-blur-[22px] backdrop-saturate-150
                    "
                    style={{
                      backgroundColor: hexToRgba(item.bgColor, 0.72),
                      color: item.textColor,
                      WebkitBackdropFilter: "blur(22px) saturate(150%)",
                      backdropFilter: "blur(22px) saturate(150%)",
                    }}
                  >
                    <div className="relative z-10 mb-8 flex items-center justify-between">
                      <p className="text-xs font-black uppercase tracking-[0.18em] opacity-70">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="text-sm font-black uppercase tracking-[0.16em]">
                        {item.label}
                      </p>
                    </div>

                    <div
                      className={`relative z-10 grid gap-2 ${
                        item.links.length > 4 ? "sm:grid-cols-2" : ""
                      }`}
                    >
                      {item.links.map((link) => {
                        const desktopLinkClassName = `
                          group flex items-center justify-between rounded-full
                          border border-white/20 bg-white/10 px-4 py-3
                          text-sm font-bold transition hover:bg-white/20
                        `;

                        const desktopLinkContent = (
                          <>
                            <span>{link.label}</span>
                            <ArrowUpRight
                              size={15}
                              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </>
                        );

                        return isExternalHref(link.href) ? (
                          <a
                            key={link.href}
                            href={link.href}
                            aria-label={link.ariaLabel}
                            className={desktopLinkClassName}
                            onClick={closeNavigation}
                          >
                            {desktopLinkContent}
                          </a>
                        ) : (
                          <Link
                            key={link.href}
                            href={link.href}
                            aria-label={link.ariaLabel}
                            className={desktopLinkClassName}
                            onClick={closeNavigation}
                          >
                            {desktopLinkContent}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.section>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
