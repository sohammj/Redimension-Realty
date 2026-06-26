"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type MenuItem = {
  label: string;
  ariaLabel: string;
  link: string;
};

type SocialItem = {
  label: string;
  link: string;
};

type StaggeredMenuProps = {
  items: MenuItem[];
  socialItems?: SocialItem[];
  logoUrl: string;
  accentColor?: string;
  colors?: string[];
};

const listVariants: Variants = {
  open: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.25,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.035,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  closed: {
    y: 80,
    opacity: 0,
    rotateX: -20,
    filter: "blur(10px)",
  },
  open: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function StaggeredMenu({
  items,
  socialItems = [],
  logoUrl,
  accentColor = "#c99a2e",
  colors = ["#0f5a2d", "#031126"],
}: StaggeredMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <div className="fixed left-4 right-4 top-4 z-[70] flex items-center justify-between">
        <Link
          href="/"
          aria-label="Redimension Realty Home"
          className="grid h-16 w-16 place-items-center"
        >
          <Image
            src={logoUrl}
            alt="Redimension Realty Logo"
            width={48}
            height={48}
            priority
            className="h-full w-full object-contain"
          />
        </Link>

        <button
          onClick={() => setOpen((value) => !value)}
          className="relative grid h-14 w-14 place-items-center rounded-full bg-[#031126] shadow-2xl"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative h-4 w-6">
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="absolute left-0 top-0 h-[2px] w-6 rounded-full bg-white"
            />
            <motion.span
              animate={open ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
              className="absolute left-0 top-2 h-[2px] w-6 rounded-full bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="absolute bottom-0 left-0 h-[2px] w-6 rounded-full bg-white"
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[60] overflow-hidden text-white"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              style={{ backgroundColor: colors[0] }}
              className="absolute inset-0"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.58, delay: 0.07, ease: "easeOut" }}
              style={{ backgroundColor: colors[1] }}
              className="absolute inset-0 rounded-l-[3rem]"
            />

            <div className="relative z-10 flex h-full flex-col px-6 pb-8 pt-28">
              <motion.div
                variants={listVariants}
                className="flex-1 overflow-y-auto"
              >
                {items.map((item, index) => (
                  <motion.div
                    key={item.link}
                    variants={itemVariants}
                    className="origin-left"
                  >
                    <Link
                      href={item.link}
                      aria-label={item.ariaLabel}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-white/10 py-4"
                    >
                      <span className="flex items-start gap-4">
                        <span
                          className="mt-2 text-xs font-black"
                          style={{ color: accentColor }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-[clamp(2.4rem,11vw,5.2rem)] font-black uppercase leading-[0.82] tracking-[-0.09em] text-white">
                          {item.label}
                        </span>
                      </span>

                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-white/35">
                        <ArrowUpRight size={18} />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ delay: 0.55, duration: 0.3 }}
                className="pt-6"
              >
                <div className="flex flex-wrap gap-3">
                  {socialItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.link}
                      className="rounded-full border border-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/60"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <Link
                  href="/contact-us"
                  onClick={() => setOpen(false)}
                  className="mt-5 flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#031126]"
                >
                  Request Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}