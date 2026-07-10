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
import {
  approach,
  coreServices,
  featuredProjects,
  values,
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

      <section className="section-padding coastal-pattern bg-[#fbfaf5]">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Core Services</p>

            <h2 className="section-title mt-4">
              Regulatory strategy, documentation and approvals support.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <Link
                href="/services"
                key={service.title}
                className="group rounded-[2rem] border border-[#c99a2e]/20 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-7 grid h-14 w-14 place-items-center rounded-full bg-[#0f5a2d]/10 text-[#0f5a2d]">
                  <Leaf />
                </div>

                <h3 className="text-xl font-black tracking-[-0.04em] text-[#031126]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#526174]">
                  {service.summary}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#0f5a2d]">
                  Learn more

                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#031126] text-white">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">Our Approach</p>

              <h2 className="mt-4 text-5xl font-black leading-none tracking-[-0.06em]">
                Structured, compliant and execution-driven.
              </h2>

              <p className="mt-6 leading-8 text-white/60">
                Every engagement is designed to reduce approval ambiguity,
                align stakeholders and support responsible development
                outcomes.
              </p>
            </div>

            <div className="grid gap-4">
              {approach.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-5 rounded-full border border-white/10 bg-white/5 p-4"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#c99a2e] font-black text-[#031126]">
                    {index + 1}
                  </span>

                  <span className="font-bold text-white/82">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Why Choose Us</p>

              <h2 className="section-title mt-4">
                Domain depth with institutional credibility.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#071b3a]/10 p-6"
                >
                  <ShieldCheck className="text-[#0f5a2d]" />

                  <h3 className="mt-5 text-xl font-black tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#526174]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-16">
        <div className="container-shell">
          <div className="text-center">
            <p className="eyebrow">Trusted By</p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">
              Associated with leading developers, infrastructure groups and
              public institutions.
            </h2>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden py-10">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-white to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-white to-transparent" />

          <div className="logo-loop items-center gap-20">
            {loopClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex h-20 min-w-40 items-center justify-center"
              >
                <Image
                  src={client.src}
                  alt={`${client.name} logo`}
                  width={180}
                  height={80}
                  unoptimized
                  className="max-h-14 w-auto object-contain opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#fbfaf5]">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Featured Projects</p>

              <h2 className="section-title mt-4">
                Project and institutional exposure.
              </h2>
            </div>

            <Link
              href="/projects"
              className="font-black uppercase tracking-[0.14em] text-[#0f5a2d]"
            >
              View Projects →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <div
                key={project.name}
                className="glass-card rounded-[2rem] p-7"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c99a2e]">
                  {project.status}
                </p>

                <h3 className="mt-4 text-2xl font-black tracking-[-0.05em]">
                  {project.name}
                </h3>

                <div className="mt-5 space-y-2 text-sm leading-7 text-[#526174]">
                  <p>
                    <strong>Location:</strong> {project.location}
                  </p>

                  <p>
                    <strong>Client:</strong> {project.client}
                  </p>

                  <p>
                    <strong>Service:</strong> {project.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}