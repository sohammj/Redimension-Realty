"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import CompanySnapshotSection from "@/src/components/sections/CompanySnapshotSection";
import CoreServicesSection from "@/src/components/sections/CoreServicesSection";
import WhyChooseUsSection from "@/src/components/sections/WhyChooseUsSection";
import TrustedBySection from "@/src/components/sections/TrustedBySection";
import FeaturedProjectsSection from "@/src/components/sections/FeaturedProjectsSection";
import {
  featuredProjects,
} from "@/src/data/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});



gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        gsap.to(".hero-zoom-bg", {
          yPercent: -4,
          scale: 1.12,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: heroRef },
  );

  const clientLogos = [
    { name: "Afcons Infrastructure", src: "/logo/afcons.png" },
    { name: "BMC", src: "/logo/bmc.png" },
    { name: "Dalmia Cement", src: "/logo/dalmia.png" },
    { name: "Godrej Properties", src: "/logo/godrej.png" },
    { name: "Mahindra", src: "/logo/mahindra.png" },
    { name: "MMRDA", src: "/logo/mmrda.png" },
    {
      name: "Shapoorji Pallonji",
      src: "/logo/shapoorji-pallonji.svg",
    },
    { name: "Suraj Estate Developers", src: "/logo/suraj.png" },
    { name: "Puravankara", src: "/logo/pruvankara.jpeg" },
    { name: "Regency Group", src: "/logo/regency.png" },
    { name: "Lotus", src: "/logo/lotus.png" },
    { name: "Baya", src: "/logo/baya.png" },
    { name: "Paradigm Realty", src: "/logo/pardigm.png" },
    { name: "Platinum Corp", src: "/logo/platinum-corp.png" },
    { name: "K Raheja Corp", src: "/logo/k-raheja-corp.png" },
    { name: "Joyville", src: "/logo/joyvile.png" },
  ];

  const loopClients = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <main className={`${manrope.variable} ${cormorant.variable}`}>
      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden bg-[#061424] text-white"
      >
        <video
          className="hero-zoom-bg absolute inset-0 h-full w-full object-cover opacity-95 will-change-transform"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/redimension-hero.png"
          aria-hidden="true"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Left-to-right readability overlay */}
        {/* <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(3,14,28,0.92)_0%,rgba(3,16,32,0.72)_31%,rgba(3,17,38,0.34)_58%,rgba(3,17,38,0.08)_100%)]" /> */}

        {/* Vertical cinematic depth */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,38,0.24)_0%,transparent_34%,rgba(3,17,38,0.22)_66%,rgba(3,17,38,0.65)_100%)]" />

        {/* Slightly mute the video without hiding it */}
        {/* <div className="pointer-events-none absolute inset-0 bg-[#061424]/5" /> */}
        
        <div className="container-shell relative flex min-h-screen items-center pt-24 sm:pt-28">
          <div className="max-w-[820px]">
            <h1 className="font-[var(--font-cormorant)] text-[clamp(3.5rem,5.8vw,6.4rem)] font-medium leading-[0.88] tracking-[-0.045em] text-[#f7f3e9] drop-shadow-[0_5px_24px_rgba(3,17,38,0.32)]">
              <span className="block">Turning regulatory</span>

              <span className="block">complexity into</span>

              <span className="block font-normal italic text-[#d8b86d]">
                project certainty.
              </span>
            </h1>

            <div className="mt-8 flex">
              <Link
                href="/services"
                className="group inline-flex min-h-[54px] items-center justify-center gap-8 border border-[#d8b86d] bg-[#d8b86d] px-7 py-3 font-[var(--font-manrope)] text-[11px] font-bold uppercase tracking-[0.14em] text-[#071729] transition-all duration-300 hover:border-[#ead39b] hover:bg-[#ead39b]"
              >
                Explore Services

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CompanySnapshotSection />
      <CoreServicesSection />
      <WhyChooseUsSection />
      <TrustedBySection clients={clientLogos} />
      <FeaturedProjectsSection projects={featuredProjects} />
    </main>
  );
}