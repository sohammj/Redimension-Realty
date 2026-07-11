"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type StickyGetInTouchProps = {
  showAfterScroll?: boolean;
};

export default function StickyGetInTouch({
  showAfterScroll = true,
}: StickyGetInTouchProps) {
  const [visible, setVisible] = useState(!showAfterScroll);
  const router = useRouter();

  useEffect(() => {
    if (!showAfterScroll) return;

    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.9;
      setVisible(window.scrollY > heroHeight);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAfterScroll]);

  return (
    <motion.div
        initial={false}
        animate={{
            opacity: visible ? 1 : 0,
            y: visible ? 0 : 18,
            scale: visible ? 1 : 0.9,
        }}
        transition={{
            duration: 0.35,
            ease: "easeOut",
        }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        style={{
            pointerEvents: visible ? "auto" : "none",
        }}
        className="
            fixed bottom-5 right-5 z-40
            rounded-full
            bg-transparent
            p-0
            drop-shadow-[0_8px_18px_rgba(3,17,38,0.28)]
            md:bottom-7 md:right-7
        "
        >
        <Link href="/contact-us" aria-label="Get in touch">
            <Image
            src="/utility/g-removebg-preview.png"
            alt=""
            width={58}
            height={58}
            className="h-[54px] w-[54px] object-contain transition-opacity hover:opacity-90 md:h-[62px] md:w-[62px]"
            />
        </Link>
        </motion.div>
    // <motion.button
    //   type="button"
    //   initial={false}
    //   animate={{
    //     opacity: visible ? 1 : 0,
    //     y: visible ? 0 : 18,
    //     scale: visible ? 1 : 0.9,
    //   }}
    //   transition={{
    //     duration: 0.35,
    //     ease: "easeOut",
    //   }}
    //   whileHover={{ scale: 1.06 }}
    //   whileTap={{ scale: 0.94 }}
    //   onClick={() => router.push("/contact-us")}
    //   style={{
    //     pointerEvents: visible ? "auto" : "none",
    //   }}
    //   className="
    //     fixed bottom-5 right-5 z-40
    //     rounded-full
    //     bg-transparent
    //     p-0
    //     drop-shadow-[0_8px_18px_rgba(3,17,38,0.28)]
    //     md:bottom-7 md:right-7
    //   "
    //   aria-label="Get in touch"
    // >
    //   <Image
    //     src="/utility/g-removebg-preview.png"
    //     alt=""
    //     width={58}
    //     height={58}
    //     className="h-[54px] w-[54px] object-contain transition-opacity hover:opacity-90 md:h-[62px] md:w-[62px]"
    //   />
    // </motion.button>
  );
}