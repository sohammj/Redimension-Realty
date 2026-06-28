"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, type Transition } from "framer-motion";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

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
          .map((char) => char + char)
          .join("")
      : clean;

  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const mobileOpenHidden = "M100,0 Q50,0 0,0 L0,0 L100,0 Z";
const mobileOpenBulge = "M100,44 Q50,86 0,44 L0,0 L100,0 Z";
const mobileOpenFull = "M100,100 Q50,100 0,100 L0,0 L100,0 Z";

const mobileCloseStart = "M100,0 Q50,0 0,0 L0,100 L100,100 Z";
const mobileCloseBulge = "M100,58 Q50,22 0,58 L0,100 L100,100 Z";
const mobileCloseHidden = "M100,100 Q50,100 0,100 L0,100 L100,100 Z";

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

  const openRef = useRef(false);
  const mobileTimelineRef = useRef<gsap.core.Timeline | null>(null);

  const mobileOverlayRef = useRef<HTMLDivElement | null>(null);
  const mobilePathRef = useRef<SVGPathElement | null>(null);
  const mobileContentRef = useRef<HTMLDivElement | null>(null);
  const mobileLogoRef = useRef<HTMLAnchorElement | null>(null);
  const mobileInfoRef = useRef<HTMLDivElement | null>(null);

  const mobileLinks = useMemo(
    () =>
      items.flatMap((item) =>
        item.links.map((link) => ({
          ...link,
          group: item.label,
        }))
      ),
    [items]
  );

  const resolvedEase = useMemo<Transition["ease"]>(() => {
    if (ease === "power3.out") return [0.22, 1, 0.36, 1];
    if (ease === "power2.out") return [0.16, 1, 0.3, 1];
    return "easeOut";
  }, [ease]);

  const transition: Transition = {
    duration: 0.55,
    ease: resolvedEase,
  };

  const textColor = theme === "dark" ? "#ffffff" : menuColor;

  const navBackground =
    theme === "dark"
      ? "rgba(3, 17, 38, 0.28)"
      : hexToRgba(baseColor, 0.22);

  const setOpenState = (value: boolean) => {
    openRef.current = value;
    setOpen(value);
  };

  const isMobileViewport = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 767px)").matches;
  };

  const getMobileChars = () =>
    mobileOverlayRef.current?.querySelectorAll(".mobile-menu-char") ?? [];

  const getMobileRows = () =>
    mobileOverlayRef.current?.querySelectorAll(".mobile-menu-row") ?? [];

  const stopMobileAnimation = () => {
    mobileTimelineRef.current?.kill();
    mobileTimelineRef.current = null;

    const chars = getMobileChars();
    const rows = getMobileRows();

    gsap.killTweensOf([
      mobilePathRef.current,
      mobileContentRef.current,
      mobileLogoRef.current,
      mobileInfoRef.current,
      chars,
      rows,
    ]);
  };

  const openMobileMenu = () => {
    if (!mobileOverlayRef.current || !mobilePathRef.current) return;

    stopMobileAnimation();

    const chars = getMobileChars();
    const rows = getMobileRows();

    gsap.set(mobileOverlayRef.current, {
      pointerEvents: "auto",
    });

    gsap.set(mobileContentRef.current, {
      autoAlpha: 1,
    });

    gsap.set(mobilePathRef.current, {
      attr: { d: mobileOpenHidden },
    });

    gsap.set(chars, {
      opacity: 0,
      x: "150%",
    });

    gsap.set(rows, {
      opacity: 1,
    });

    gsap.set(mobileLogoRef.current, {
      opacity: 0,
    });

    gsap.set(mobileInfoRef.current, {
      opacity: 0,
      y: 100,
    });

    const tl = gsap.timeline();

    mobileTimelineRef.current = tl;

    tl.to(mobilePathRef.current, {
      duration: 0.5,
      attr: { d: mobileOpenBulge },
      ease: "power4.in",
    }).to(mobilePathRef.current, {
      duration: 0.5,
      attr: { d: mobileOpenFull },
      ease: "power4.out",
    });

    tl.to(
      mobileLogoRef.current,
      {
        duration: 0.1,
        opacity: 1,
        ease: "none",
      },
      "-=0.75"
    );

    tl.to(
      mobileInfoRef.current,
      {
        duration: 0.75,
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      "-=0.35"
    );

    tl.to(
      chars,
      {
        duration: 1.5,
        x: "0%",
        ease: "elastic.out(1, 0.25)",
        stagger: 0.01,
      },
      0.45
    );

    tl.to(
      chars,
      {
        duration: 0.75,
        opacity: 1,
        ease: "power2.out",
        stagger: 0.01,
      },
      0.45
    );
  };

  const closeMobileMenu = () => {
    if (!mobileOverlayRef.current || !mobilePathRef.current) return;

    stopMobileAnimation();

    const chars = getMobileChars();
    const rows = getMobileRows();

    gsap.set(mobilePathRef.current, {
      attr: { d: mobileCloseStart },
    });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(mobileOverlayRef.current, {
          pointerEvents: "none",
        });

        gsap.set(mobileContentRef.current, {
          autoAlpha: 0,
        });

        gsap.set(mobilePathRef.current, {
          attr: { d: mobileOpenHidden },
        });

        gsap.set(chars, {
          opacity: 0,
          x: "150%",
        });

        gsap.set(rows, {
          opacity: 1,
        });

        gsap.set(mobileLogoRef.current, {
          opacity: 0,
        });

        gsap.set(mobileInfoRef.current, {
          opacity: 0,
          y: 100,
        });

        mobileTimelineRef.current = null;
      },
    });

    mobileTimelineRef.current = tl;

    tl.to(mobileLogoRef.current, {
      duration: 0.3,
      opacity: 0,
      ease: "none",
    });

    tl.to(
      rows,
      {
        duration: 0.3,
        opacity: 0,
        ease: "none",
      },
      "<"
    );

    tl.to(
      mobileInfoRef.current,
      {
        duration: 0.3,
        opacity: 0,
        ease: "none",
      },
      "<"
    );

    tl.to(
      mobilePathRef.current,
      {
        duration: 0.5,
        attr: { d: mobileCloseBulge },
        ease: "power3.in",
      },
      "<"
    ).to(mobilePathRef.current, {
      duration: 0.5,
      attr: { d: mobileCloseHidden },
      ease: "power3.out",
    });
  };

  const closeNavigation = () => {
    if (!openRef.current) return;

    setOpenState(false);

    if (isMobileViewport()) {
      closeMobileMenu();
      return;
    }
  };

  const handleToggle = () => {
    if (isMobileViewport()) {
      const nextOpen = !openRef.current;

      setOpenState(nextOpen);

      if (nextOpen) {
        openMobileMenu();
      } else {
        closeMobileMenu();
      }

      return;
    }

    setOpenState(!openRef.current);
  };

  useEffect(() => {
    gsap.set(mobilePathRef.current, {
      attr: { d: mobileOpenHidden },
    });

    gsap.set(mobileOverlayRef.current, {
      pointerEvents: "none",
    });

    gsap.set(mobileContentRef.current, {
      autoAlpha: 0,
    });

    gsap.set(getMobileChars(), {
      opacity: 0,
      x: "150%",
    });

    gsap.set(getMobileRows(), {
      opacity: 1,
    });

    gsap.set(mobileLogoRef.current, {
      opacity: 0,
    });

    gsap.set(mobileInfoRef.current, {
      opacity: 0,
      y: 100,
    });
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeNavigation();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const renderAnimatedLabel = (label: string) => (
    <span className="inline-flex overflow-hidden leading-none">
      {label.split("").map((char, index) => (
        <span key={`${label}-${index}`} className="mobile-menu-char inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );

  return (
    <div className={`mx-auto w-full max-w-[1180px] ${className}`}>
      <motion.nav
        layout
        className="
          relative z-[70] isolate overflow-hidden rounded-[2rem]
          border border-white/35
          shadow-[0_18px_55px_rgba(3,17,38,0.14),inset_0_1px_0_rgba(255,255,255,0.55)]
          backdrop-blur-[26px] backdrop-saturate-150
        "
        style={{
          backgroundColor: navBackground,
          WebkitBackdropFilter: "blur(26px) saturate(150%)",
          backdropFilter: "blur(26px) saturate(150%)",
        }}
        transition={transition}
      >
        <div className="relative z-10 flex h-[76px] items-center justify-between px-4 sm:px-5">
          <button
            type="button"
            onClick={handleToggle}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="
              group flex h-12 min-w-12 touch-manipulation items-center gap-3 rounded-full px-3
              transition hover:bg-white/25
            "
            style={{ color: textColor }}
          >
            <span className="relative h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-[2px] w-6 rounded-full transition duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
                style={{ backgroundColor: menuColor }}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-6 rounded-full transition duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
                style={{ backgroundColor: menuColor }}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-6 rounded-full transition duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
                style={{ backgroundColor: menuColor }}
              />
            </span>

            <span className="hidden text-xs font-black uppercase tracking-[0.18em] sm:block">
              {open ? "Close" : "Menu"}
            </span>
          </button>

          <Link
            href="/"
            aria-label={logoAlt}
            className="
              absolute left-1/2 top-1/2 z-20 flex
              h-[52px] w-[205px]
              -translate-x-1/2 -translate-y-1/2
              items-center justify-center sm:w-[235px]
            "
            onClick={closeNavigation}
          >
            <Image
              src={logo}
              alt={logoAlt}
              width={620}
              height={200}
              priority
              quality={100}
              sizes="235px"
              className="
                h-auto max-h-[42px] w-full object-contain
                drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]
              "
            />
          </Link>

          {isExternalHref(ctaHref) ? (
            <a
              href={ctaHref}
              className="
                flex h-12 items-center gap-2 rounded-full px-4
                text-xs font-black uppercase tracking-[0.14em]
                transition hover:scale-[1.02]
                shadow-[0_12px_28px_rgba(3,17,38,0.18),inset_0_1px_0_rgba(255,255,255,0.18)]
              "
              style={{
                backgroundColor: hexToRgba(buttonBgColor, 0.9),
                color: buttonTextColor,
              }}
            >
              <span className="hidden sm:inline">{ctaLabel}</span>
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <Link
              href={ctaHref}
              className="
                flex h-12 items-center gap-2 rounded-full px-4
                text-xs font-black uppercase tracking-[0.14em]
                transition hover:scale-[1.02]
                shadow-[0_12px_28px_rgba(3,17,38,0.18),inset_0_1px_0_rgba(255,255,255,0.18)]
              "
              style={{
                backgroundColor: hexToRgba(buttonBgColor, 0.9),
                color: buttonTextColor,
              }}
              onClick={closeNavigation}
            >
              <span className="hidden sm:inline">{ctaLabel}</span>
              <ArrowUpRight size={16} />
            </Link>
          )}
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="card-nav-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={transition}
              className="relative z-10 hidden overflow-hidden md:block"
            >
              <div className="grid gap-3 p-3 pt-0 md:grid-cols-3">
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
                      relative min-h-[190px] overflow-hidden rounded-[1.5rem] p-5
                      border border-white/20
                      shadow-[0_18px_45px_rgba(3,17,38,0.14),inset_0_1px_0_rgba(255,255,255,0.22)]
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

                    <div className="relative z-10 grid gap-2">
                      {item.links.map((link) =>
                        isExternalHref(link.href) ? (
                          <a
                            key={`${item.label}-${link.href}`}
                            href={link.href}
                            aria-label={link.ariaLabel}
                            className="
                              group flex items-center justify-between rounded-full
                              border border-white/20 bg-white/10 px-4 py-3
                              text-sm font-bold transition hover:bg-white/20
                            "
                            onClick={closeNavigation}
                          >
                            <span>{link.label}</span>

                            <ArrowUpRight
                              size={15}
                              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </a>
                        ) : (
                          <Link
                            key={`${item.label}-${link.href}`}
                            href={link.href}
                            aria-label={link.ariaLabel}
                            className="
                              group flex items-center justify-between rounded-full
                              border border-white/20 bg-white/10 px-4 py-3
                              text-sm font-bold transition hover:bg-white/20
                            "
                            onClick={closeNavigation}
                          >
                            <span>{link.label}</span>

                            <ArrowUpRight
                              size={15}
                              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </Link>
                        )
                      )}
                    </div>
                  </motion.section>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div
        ref={mobileOverlayRef}
        className="fixed inset-0 z-[60] md:hidden"
        aria-hidden={!open}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path ref={mobilePathRef} fill="#fbfaf5" d={mobileOpenHidden} />
        </svg>

        <div
          ref={mobileContentRef}
          className="relative z-10 invisible flex min-h-screen flex-col justify-between px-6 pb-8 pt-28 text-[#031126] opacity-0"
        >
          <Link
            ref={mobileLogoRef}
            href="/"
            aria-label={logoAlt}
            className="block w-[230px]"
            onClick={closeNavigation}
          >
            <Image
              src={logo}
              alt={logoAlt}
              width={620}
              height={200}
              priority
              quality={100}
              sizes="230px"
              className="h-auto w-full object-contain"
            />
          </Link>

          <div className="mt-10 flex flex-1 flex-col justify-center">
            <div className="space-y-3">
              {mobileLinks.map((link, index) => {
                const content = (
                  <>
                    <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#0F5A2D]/70">
                      {link.group}
                    </span>

                    <span className="mt-1 flex items-center justify-between gap-5 text-[clamp(2.25rem,13vw,4.5rem)] font-black leading-none tracking-[-0.08em] text-[#031126]">
                      {renderAnimatedLabel(link.label)}

                      <ArrowUpRight
                        size={24}
                        className="shrink-0 text-[#C99A2E]"
                      />
                    </span>
                  </>
                );

                return isExternalHref(link.href) ? (
                  <a
                    key={`${link.href}-${index}`}
                    href={link.href}
                    aria-label={link.ariaLabel}
                    className="mobile-menu-row block border-b border-[#031126]/10 py-3"
                    onClick={closeNavigation}
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    key={`${link.href}-${index}`}
                    href={link.href}
                    aria-label={link.ariaLabel}
                    className="mobile-menu-row block border-b border-[#031126]/10 py-3"
                    onClick={closeNavigation}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>

          <div ref={mobileInfoRef} className="grid gap-3 text-sm text-[#031126]/70">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#063B8F]">
              Environmental, Forests & Coastal Regulatory Consulting
            </p>

            <Link
              href="/contact-us"
              className="inline-flex w-max items-center gap-2 rounded-full bg-[#C99A2E] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#031126]"
              onClick={closeNavigation}
            >
              Request Consultation <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}