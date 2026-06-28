"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Leaf, ShieldCheck } from "lucide-react";
import {
  approach,
  businessSegments,
  coreServices,
  featuredProjects,
  siteConfig,
  values,
} from "@/src/data/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        gsap.to(".hero-zoom-bg", {
          yPercent: -5,
          scale: 1.2,
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
    { scope: heroRef }
  );

  const clientLogos = [
    { name: "Afcons Infrastructure", src: "/logo/afcons.png" },
    { name: "BMC", src: "/logo/bmc.png" },
    { name: "Dalmia Cement", src: "/logo/dalmia.png" },
    { name: "Godrej Properties", src: "/logo/godrej.png" },
    { name: "Mahindra", src: "/logo/mahindra.png" },
    { name: "MMRDA", src: "/logo/mmrda.png" },
    { name: "Shapoorji Pallonji", src: "/logo/shapoorji-pallonji.svg" },
  ];

  const loopClients = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <main>
      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden bg-[#031126] text-white"
      >
        <div
          className="hero-zoom-bg absolute inset-0 bg-cover bg-center opacity-70 will-change-transform"
          style={{ backgroundImage: "url('/images/redimension-hero.png')" }}
        />



        <div className="container-shell relative flex min-h-screen items-center pt-28">
          <div className="max-w-3xl">
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              {siteConfig.shortName} supports real estate, infrastructure,
              hospitality, industrial and public-sector projects with
              environmental, forest, coastal and statutory approval advisory
              across India.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#c99a2e] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#031126] transition hover:bg-[#f5e7bd]"
              >
                Request Consultation <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">Company Snapshot</p>
              <h2 className="section-title mt-4">
                A specialist advisory firm for complex approvals.
              </h2>
            </div>

            <p className="section-subtitle">
              Redimension Realty operates at the intersection of regulatory
              governance, sustainable development and project facilitation —
              combining technical documentation, institutional coordination and
              execution-focused liaisoning.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {businessSegments.map((segment, index) => (
              <div key={segment.title} className="premium-card rounded-[2rem] p-6">
                <p className="text-sm font-black text-[#c99a2e]">
                  0{index + 1}
                </p>

                <h3 className="mt-5 text-xl font-black tracking-[-0.04em] text-[#031126]">
                  {segment.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#526174]">
                  {segment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  Learn more{" "}
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
                Every engagement is designed to reduce approval ambiguity, align
                stakeholders and support responsible development outcomes.
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
              <div key={project.name} className="glass-card rounded-[2rem] p-7">
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