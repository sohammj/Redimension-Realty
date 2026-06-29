"use client";

import Link from "next/link";
import { ArrowRight, Building2, Landmark, Leaf, Waves } from "lucide-react";
import CardSwap, { Card } from "@/src/components/ui/CardSwap";
import { businessSegments } from "@/src/data/site";

const icons = [Leaf, Building2, Waves, Landmark];

// const trustPoints = [
//   {
//     label: "Statutory Advisory",
//     value: "Environmental, forest & coastal governance",
//   },
//   {
//     label: "Regulatory Interface",
//     value: "MoEFCC, SEIAAs, CZMAs, SPCBs & planning authorities",
//   },
//   {
//     label: "Execution Support",
//     value: "Due diligence, documentation, submissions & compliance",
//   },
// ];

export default function CompanySnapshotSection() {
  const snapshotItems = businessSegments.slice(0, 4);

  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          {/* LEFT CONTENT */}
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
              The firm works across the full approval lifecycle — from
              pre-project environmental due diligence and regulatory feasibility
              assessment to technical documentation, inter-agency coordination,
              statutory submissions and post-clearance compliance oversight.
            </p>

            {/* <div className="mt-8 grid max-w-[560px] gap-3">
              {trustPoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-[1.4rem] bg-[#faf8f2] px-5 py-4"
                >
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#c99a2e]">
                    {point.label}
                  </p>

                  <p className="mt-1.5 text-sm font-semibold leading-6 text-[#344256]">
                    {point.value}
                  </p>
                </div>
              ))}
            </div> */}

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

          {/* DESKTOP CARD SWAP */}
          <div className="relative hidden min-h-[560px] md:block">
            <div className="absolute bottom-8 right-8 h-[430px] w-[78%] lg:w-[74%]">
              <CardSwap
                cardDistance={42}
                verticalDistance={46}
                delay={4200}
                pauseOnHover={false}
              >
                {snapshotItems.map((segment, index) => {
                  const Icon = icons[index] ?? Leaf;

                  return (
                    <Card key={segment.title}>
                      <div className="flex h-full flex-col justify-between rounded-[2.35rem] bg-[#f7f7f4] p-8 shadow-[0_28px_75px_rgba(3,17,38,0.10)]">
                        <div>
                          <div className="flex items-center justify-between gap-5">
                            <span className="text-xs font-black tracking-[0.12em] text-[#c99a2e]">
                              0{index + 1}
                            </span>

                            <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#0f5a2d]">
                              <Icon size={21} />
                            </span>
                          </div>

                          <h3 className="mt-9 max-w-[380px] text-[clamp(1.65rem,2.1vw,2.35rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#031126]">
                            {segment.title}
                          </h3>

                          <p className="mt-5 max-w-[420px] text-sm leading-7 text-[#536276]">
                            {segment.description}
                          </p>
                        </div>

                        <p className="mt-8 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f5a2d]">
                          Advisory • Liaisoning • Documentation
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </CardSwap>
            </div>
          </div>

          {/* MOBILE FALLBACK */}
          <div className="grid gap-4 md:hidden">
            {snapshotItems.map((segment, index) => {
              const Icon = icons[index] ?? Leaf;

              return (
                <div
                  key={segment.title}
                  className="rounded-[2rem] bg-[#f7f7f4] p-6 shadow-[0_18px_50px_rgba(3,17,38,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-black text-[#c99a2e]">
                      0{index + 1}
                    </p>

                    <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#0f5a2d]">
                      <Icon size={20} />
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold leading-none tracking-[-0.05em] text-[#031126]">
                    {segment.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#526174]">
                    {segment.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}