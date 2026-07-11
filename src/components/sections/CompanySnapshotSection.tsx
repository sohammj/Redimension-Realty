"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Landmark,
  Leaf,
  Waves,
} from "lucide-react";

import CardSwap, {
  Card,
} from "@/src/components/ui/CardSwap";

import { businessSegments } from "@/src/data/site";

const segmentProfiles = [
  {
    priority: 1,
    match: /environment|forest|coastal|crz/i,
    icon: Leaf,
    description:
      "End-to-end advisory for EIA, CRZ, forest clearances, statutory documentation and approval coordination across India.",
    footer: "EIA • CRZ • Forest • Compliance",
  },
  {
    priority: 2,
    match: /redevelopment|sra|building|real estate/i,
    icon: Building2,
    description:
      "Urban redevelopment, tenanted-building and SRA housing projects across Mumbai MMR, from approvals through project execution.",
    footer: "Redevelopment • SRA • Housing",
  },
  {
    priority: 3,
    match: /bmc|mmrda|public infrastructure/i,
    icon: Landmark,
    description:
      "Multi-level automated parking towers, civil construction and public-utility infrastructure for BMC and MMRDA.",
    footer: "BMC • MMRDA • Public Utility",
  },
  {
    priority: 4,
    match: /amrut|water|urban/i,
    icon: Waves,
    description:
      "AMRUT-linked water supply, sewerage, storm-water and urban infrastructure projects for municipal bodies.",
    footer: "AMRUT • Water • Urban Infrastructure",
  },
];

export default function CompanySnapshotSection() {
  const [isMobile, setIsMobile] = useState(false);

  const snapshotItems = businessSegments
    .slice(0, 4)
    .map((segment, originalIndex) => ({
      segment,
      profile:
        segmentProfiles.find((profile) =>
          profile.match.test(segment.title),
        ) ??
        segmentProfiles[originalIndex] ??
        segmentProfiles[0],
    }))
    .sort(
      (first, second) =>
        first.profile.priority - second.profile.priority,
    );

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 767px)",
    );

    const updateViewport = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateViewport();

    mediaQuery.addEventListener(
      "change",
      updateViewport,
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateViewport,
      );
    };
  }, []);

  return (
    <section
      className="
        section-padding relative overflow-hidden
        bg-[#f5f1e8] text-[#031126]
      "
    >
      <div
        className="
          pointer-events-none absolute inset-y-0
          right-0 w-[68%] opacity-[0.13]
        "
        style={{
          backgroundImage:
            "linear-gradient(45deg, #0f5a2d 1px, transparent 1px), linear-gradient(-45deg, #0f5a2d 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          WebkitMaskImage:
            "linear-gradient(to left, black 18%, rgba(0,0,0,0.7) 55%, transparent 100%)",
          maskImage:
            "linear-gradient(to left, black 18%, rgba(0,0,0,0.7) 55%, transparent 100%)",
        }}
      />

      <div
        className="
          pointer-events-none absolute -left-48
          bottom-[-12rem] h-[440px] w-[440px]
          rounded-full border-[70px]
          border-[#0f5a2d]/[0.035]
        "
      />

      <div className="container-shell relative">
        <div
          className="
            grid gap-14
            lg:grid-cols-[0.92fr_1.08fr]
            lg:items-center
          "
        >
          {/* Left-side content */}
          <div className="max-w-[650px]">
            <h2
              className="
                mt-5 max-w-[600px]
                text-[clamp(2.4rem,3.75vw,4.35rem)]
                font-[var(--font-cormorant)]
                leading-[0.97]
                tracking-[-0.055em]
                text-[#031126]
              "
            >
              Where environmental intelligence meets
              responsible development.
            </h2>

            <p
              className="
                mt-7 max-w-[590px]
                text-[1.05rem] leading-8
                text-[#526174]
              "
            >
              Redimension Realty Private Limited operates
              at the intersection of environmental, forest
              and coastal regulatory consulting and
              responsible real estate development. Its
              flagship advisory practice supports
              developers, infrastructure companies and
              government bodies across India.
            </p>

            <p
              className="
                mt-6 max-w-[580px]
                border-l-2 border-[#c99a2e]
                pl-5 text-[1.08rem]
                font-[var(--font-cormorant)]
                leading-8 text-[#183427]
              "
            >
              Backed by execution capabilities across
              redevelopment, SRA housing, BMC/MMRDA public
              infrastructure and AMRUT water-resource
              projects.
            </p>

            <div className="mt-8 flex">
              <Link
                href="/about-us"
                className="
                  group inline-flex min-h-[50px]
                  items-center gap-4 rounded-[2px]
                  bg-[#0f5a2d] px-5
                  text-[13px] font-black
                  tracking-[0.14em] text-white
                  transition hover:bg-[#174f31]
                "
              >
                About Redimension

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>

          {/* Right-side cards and statistics */}
          <div className="min-w-0">
            <div
              className="
                relative left-1/2
                h-[420px] w-screen
                -translate-x-1/2
                overflow-visible

                md:left-auto
                md:min-h-[560px]
                md:w-auto
                md:translate-x-0
              "
            >
              <div
                className="
                  absolute left-1/2 top-14
                  -translate-x-1/2

                  md:bottom-8
                  md:left-auto
                  md:right-8
                  md:top-auto
                  md:translate-x-0
                "
              >
                <CardSwap
                  key={
                    isMobile
                      ? "mobile-card-swap"
                      : "desktop-card-swap"
                  }
                  width={isMobile ? "calc(100vw - 20px)" : 500}
                  height={isMobile ? 340 : 430}
                  cardDistance={isMobile ? 9 : 42}
                  verticalDistance={
                    isMobile ? 15 : 46
                  }
                  delay={4200}
                  pauseOnHover={false}
                  easing="elastic"
                  direction={
                    isMobile ? "left" : "right"
                  }
                  skewAmount={isMobile ? 0 : 4}
                >
                  {snapshotItems.map(
                    (
                      { segment, profile },
                      index,
                    ) => {
                      const Icon = profile.icon;

                      return (
                        <Card key={segment.title}>
                          <div
                            className="
                              flex h-full flex-col
                              justify-between
                              rounded-[1.75rem]
                              border
                              border-[#0f5a2d]/[0.08]
                              bg-[#fffdf8]
                              px-7 py-7
                              shadow-[0_24px_65px_rgba(3,17,38,0.13)]

                              md:rounded-[2.35rem]
                              md:p-8
                              md:shadow-[0_28px_75px_rgba(3,17,38,0.15)]
                            "
                          >
                            <div>
                              <div
                                className="
                                  flex items-center
                                  justify-between
                                  gap-4 md:gap-5
                                "
                              >
                                <span
                                  className="
                                    text-xs font-black
                                    tracking-[0.12em]
                                    text-[#c99a2e]
                                  "
                                >
                                  0{index + 1}
                                </span>

                                <span
                                  className="
                                    grid h-10 w-10
                                    place-items-center
                                    rounded-full bg-white
                                    text-[#0f5a2d]

                                    md:h-12 md:w-12
                                  "
                                >
                                  <Icon
                                    size={
                                      isMobile
                                        ? 19
                                        : 21
                                    }
                                  />
                                </span>
                              </div>

                              <h3
                                className="
                                  mt-5 max-w-[360px]
                                  text-[1.9rem]
                                  font-[var(--font-cormorant)]
                                  leading-[0.96]
                                  tracking-[-0.055em]
                                  text-[#031126]

                                  md:mt-9
                                  md:max-w-[380px]
                                  md:text-[clamp(1.65rem,2.1vw,2.35rem)]
                                "
                              >
                                {segment.title}
                              </h3>

                              <p
                                className="
                                  mt-3 max-w-[350px]
                                  text-sm leading-6
                                  text-[#536276]

                                  md:mt-5
                                  md:max-w-[420px]
                                  md:leading-7
                                "
                              >
                                {profile.description}
                              </p>
                            </div>

                            <p
                              className="
                                mt-4 text-[10px]
                                font-black uppercase
                                tracking-[0.14em]
                                text-[#0f5a2d]

                                md:mt-8
                                md:text-[11px]
                                md:tracking-[0.16em]
                              "
                            >
                              {profile.footer}
                            </p>
                          </div>
                        </Card>
                      );
                    },
                  )}
                </CardSwap>
              </div>
            </div>

            {/* Statistics */}
            <div
              className="
                mx-auto mt-4 grid
                max-w-[560px] grid-cols-3
                divide-x divide-[#0f5a2d]/15
                border-y border-[#0f5a2d]/15
                bg-[#f5f1e8]/70 py-5

                md:mt-1
              "
            >
              <div className="pr-3 sm:pr-4">
                <p
                  className="
                    text-[1.35rem] font-extrabold
                    tracking-[-0.04em]
                    text-[#0f5a2d]
                    sm:text-2xl
                  "
                >
                  18+
                </p>

                <p
                  className="
                    mt-1 text-[9px]
                    font-bold uppercase
                    leading-4 tracking-[0.1em]
                    text-[#526174]

                    sm:text-[10px]
                    sm:tracking-[0.12em]
                  "
                >
                  Years of industry experience
                </p>
              </div>

              <div className="px-3 sm:px-4">
                <p
                  className="
                    text-[1.35rem] font-extrabold
                    tracking-[-0.04em]
                    text-[#0f5a2d]
                    sm:text-2xl
                  "
                >
                  30+
                </p>

                <p
                  className="
                    mt-1 text-[9px]
                    font-bold uppercase
                    leading-4 tracking-[0.1em]
                    text-[#526174]

                    sm:text-[10px]
                    sm:tracking-[0.12em]
                  "
                >
                  Leading companies advised
                </p>
              </div>

              <div className="pl-3 sm:pl-4">
                <p
                  className="
                    whitespace-nowrap
                    text-[1.15rem] font-extrabold
                    tracking-[-0.04em]
                    text-[#0f5a2d]

                    sm:text-2xl
                  "
                >
                  Pan-India
                </p>

                <p
                  className="
                    mt-1 text-[9px]
                    font-bold uppercase
                    leading-4 tracking-[0.1em]
                    text-[#526174]

                    sm:text-[10px]
                    sm:tracking-[0.12em]
                  "
                >
                  Regulatory advisory reach
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}