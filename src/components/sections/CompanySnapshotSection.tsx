"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, Landmark, Leaf, Waves } from "lucide-react";
import CardSwap, { Card } from "@/src/components/ui/CardSwap";
import { businessSegments } from "@/src/data/site";

const icons = [Leaf, Building2, Waves, Landmark];

export default function CompanySnapshotSection() {
  const snapshotItems = businessSegments.slice(0, 4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-[640px]">
            <p className="eyebrow">Company Snapshot</p>

            <h2 className="mt-5 max-w-[590px] text-[clamp(2.35rem,3.75vw,4.35rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#031126]">
              Environmental, forest & coastal regulatory consulting.
            </h2>

            <p className="mt-6 max-w-[560px] text-[1rem] leading-8 text-[#536276]">
              Redimension Realty Pvt. Ltd. is a Mumbai-headquartered statutory
              advisory and regulatory consulting firm supporting project
              proponents across India with environmental governance, statutory
              clearance strategy and compliance-led project facilitation.
            </p>

            <p className="mt-5 max-w-[560px] text-[0.96rem] leading-8 text-[#536276]">
              The firm works across the full approval lifecycle - from
              pre-project environmental due diligence and regulatory feasibility
              assessment to technical documentation, inter-agency coordination,
              statutory submissions and post-clearance compliance oversight.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 text-[13px] font-black uppercase tracking-[0.16em] text-[#0f5a2d] transition hover:gap-4"
              >
                Explore services
                <ArrowRight size={16} />
              </Link>

              <span className="hidden h-px w-10 bg-[#071b3a]/15 sm:block" />

              <Link
                href="/about-us"
                className="inline-flex items-center gap-3 text-[13px] font-black uppercase tracking-[0.16em] text-[#031126]/65 transition hover:text-[#031126]"
              >
                About the firm
              </Link>
            </div>
          </div>

          <div className="relative h-[430px] md:min-h-[560px]">
            <div
              className="
                absolute left-1/2 top-16 -translate-x-1/2
                md:bottom-8 md:left-auto md:right-8 md:top-auto md:translate-x-0
              "
            >
              <CardSwap
                key={isMobile ? "mobile-card-swap" : "desktop-card-swap"}
                width={isMobile ? 420 : 500}
                height={isMobile ? 330 : 430}
                cardDistance={isMobile ? 18 : 42}
                verticalDistance={isMobile ? 14 : 46}
                delay={4200}
                pauseOnHover={false}
                easing="elastic"
                skewAmount={isMobile ? 0 : 4}
              >
                {snapshotItems.map((segment, index) => {
                  const Icon = icons[index] ?? Leaf;

                  return (
                    <Card key={segment.title}>
                      <div className="flex h-full flex-col justify-between rounded-[2rem] bg-[#f7f7f4] px-8 py-7 shadow-[0_24px_60px_rgba(3,17,38,0.11)] md:rounded-[2.35rem] md:p-8 md:shadow-[0_28px_75px_rgba(3,17,38,0.10)]">
                        <div>
                          <div className="flex items-center justify-between gap-4 md:gap-5">
                            <span className="text-xs font-black tracking-[0.12em] text-[#c99a2e]">
                              0{index + 1}
                            </span>

                            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#0f5a2d] md:h-12 md:w-12">
                              <Icon size={isMobile ? 19 : 21} />
                            </span>
                          </div>

                          <h3 className="mt-5 max-w-[360px] text-[1.9rem] font-extrabold leading-[0.96] tracking-[-0.055em] text-[#031126] md:mt-9 md:max-w-[380px] md:text-[clamp(1.65rem,2.1vw,2.35rem)]">
                            {segment.title}
                          </h3>

                          <p className="mt-3 max-w-[350px] text-sm leading-6 text-[#536276] md:mt-5 md:max-w-[420px] md:leading-7">
                            {segment.description}
                          </p>
                        </div>

                        <p className="mt-4 text-[10px] font-black uppercase tracking-[0.14em] text-[#0f5a2d] md:mt-8 md:text-[11px] md:tracking-[0.16em]">
                          Advisory • Liaisoning • Documentation
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
