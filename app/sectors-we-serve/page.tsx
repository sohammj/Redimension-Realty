import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Construction,
  Factory,
  Landmark,
  Leaf,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { sectors } from "@/src/data/site";

export const metadata = {
  title: "Sectors We Serve",
  description:
    "Environmental consulting, infrastructure, real estate, government projects, coastal developments and industrial sectors served by Redimension Realty.",
};

type SectorDetails = {
  label: string;
  description: string;
  capabilities: string;
  icon: LucideIcon;
};

const sectorDetails: Record<string, SectorDetails> = {
  "Environmental Consulting": {
    label: "Environment & Compliance",
    description:
      "Environmental clearance, impact assessment, forest permissions and regulatory strategy for complex development proposals.",
    capabilities: "EIA · EC · Forest clearance",
    icon: Leaf,
  },

  "Infrastructure & Civil Works": {
    label: "Public Infrastructure",
    description:
      "Approval coordination and statutory support for roads, transport systems, utilities and large-scale civil infrastructure.",
    capabilities: "BMC · MMRDA · AMRUT",
    icon: Construction,
  },

  "Real Estate & Redevelopment": {
    label: "Urban Development",
    description:
      "Regulatory and execution advisory for residential development, redevelopment, rehabilitation and mixed-use projects.",
    capabilities: "SRA · Redevelopment · Housing",
    icon: Building2,
  },

  "Government Projects": {
    label: "Institutional Engagement",
    description:
      "Documentation, departmental coordination and project facilitation for government authorities and public-sector initiatives.",
    capabilities: "Liaisoning · NOCs · Coordination",
    icon: Landmark,
  },

  "Coastal & CRZ Developments": {
    label: "Coastal Regulation",
    description:
      "CRZ assessment, CZMA submissions, coastal compliance strategy and approval support for sensitive development locations.",
    capabilities: "CRZ · CZMA · Coastal NOCs",
    icon: Waves,
  },

  "Hospitality & Industrial Projects": {
    label: "Commercial Development",
    description:
      "Integrated environmental and statutory advisory for hospitality, commercial, manufacturing and industrial developments.",
    capabilities: "Approvals · Compliance · Execution",
    icon: Factory,
  },
};

const fallbackDetails: SectorDetails = {
  label: "Regulatory Advisory",
  description:
    "Regulatory strategy, documentation, compliance coordination and project facilitation support.",
  capabilities: "Strategy · Documentation · Coordination",
  icon: Building2,
};

export default function SectorsWeServePage() {
  return (
    <main className="bg-[#faf9f4] pt-28">
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-16 sm:px-7 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        {/* Decorative circular lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[620px] w-[24%] opacity-[0.11] lg:block"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 120% 50%, transparent 0 28px, rgba(15,90,45,0.7) 29px 30px)",
          }}
        />

        {/* Subtle lower-left grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-[45%] w-[20%] opacity-[0.04] lg:block"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(3,17,38,0.5) 1px, transparent 1px), linear-gradient(-45deg, rgba(201,154,46,0.4) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="container-shell relative z-10">
          {/* Page heading */}
          <div className="max-w-6xl">
            <p className="eyebrow">Sectors We Serve</p>

            <h1 className="mt-5 max-w-5xl font-[var(--font-cormorant)] text-[clamp(2.8rem,5vw,5.3rem)] font-medium leading-[0.92] tracking-[-0.055em] text-[#031126]">
              Advisory and execution support across high-compliance sectors
            </h1>

            <p className="section-subtitle mt-7 max-w-3xl">
              Sector-specific regulatory expertise for developments that require
              environmental assessment, statutory approvals, institutional
              coordination and disciplined project execution.
            </p>
          </div>

          {/* Sector grid */}
          <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 xl:grid-cols-3">
            {sectors.map((sector, index) => {
              const details = sectorDetails[sector] ?? fallbackDetails;
              const Icon = details.icon;

              return (
                <article
                  key={sector}
                  className="
                    group
                    relative
                    flex min-h-[330px] flex-col
                    overflow-hidden
                    border border-[#031126]/10
                    bg-[#fffdf9]
                    p-7
                    text-[#031126]
                    transition duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_24px_60px_rgba(3,17,38,0.11)]
                    sm:p-8
                  "
                >
                  {/* Gold top detail */}
                  <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#c99a2e] transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex items-start justify-between gap-6">
                    <div className="grid h-12 w-12 place-items-center border border-[#031126]/10 bg-[#f6f2e8] text-[#0f5a2d] transition duration-300 group-hover:border-[#c99a2e]/30 group-hover:bg-[#f1e6b8]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <span className="font-[var(--font-cormorant)] text-[1.2rem] font-semibold text-[#c99a2e]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-8 text-[9px] font-bold uppercase tracking-[0.19em] text-[#8a6b27]">
                    {details.label}
                  </p>

                  <h2 className="mt-4 max-w-[320px] font-[var(--font-cormorant)] text-[2rem] font-semibold leading-[0.98] tracking-[-0.04em] text-[#031126]">
                    {sector}
                  </h2>

                  <p className="mt-5 text-[14px] leading-7 text-[#647080]">
                    {details.description}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-5 border-t border-[#031126]/10 pt-6">
                    <div className="min-w-0">
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#939aa3]">
                        Core capabilities
                      </p>

                      <p className="mt-2 text-[12px] font-semibold leading-5 text-[#374152]">
                        {details.capabilities}
                      </p>
                    </div>

                    <Link
                      href="/contact-us"
                      aria-label={`Discuss your ${sector} project`}
                      className="grid h-11 w-11 shrink-0 place-items-center bg-[#031126] text-white transition duration-300 group-hover:bg-[#c99a2e] group-hover:text-[#031126]"
                    >
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.6}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#031126]/10 bg-[#f7f5ee] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-8 rounded-[2rem] bg-[#f1e6b8] px-7 py-9 sm:px-10 sm:py-11 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-12">
            <div className="max-w-2xl">
              <p className="font-[var(--font-cormorant)] text-[clamp(1.8rem,2.5vw,2.5rem)] leading-[1.05] tracking-[-0.025em] text-[#173426]">
                Planning a project in a regulated sector?
              </p>

              <p className="mt-3 max-w-xl text-[14px] leading-7 text-[#536159] sm:text-[15px]">
                Speak with our team about the approvals, documentation and
                institutional coordination required for your development.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="group inline-flex min-h-[52px] w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#173426] px-7 text-[12px] font-semibold tracking-[0.04em] text-white transition duration-300 hover:bg-[#0f5a2d] sm:w-auto"
            >
              <span>Start a conversation</span>

              <span
                aria-hidden="true"
                className="text-base transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}