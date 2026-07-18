import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Globe2, Landmark } from "lucide-react";

export const metadata = {
  title: "Clients | Redimension Realty",
  description:
    "Client associations and institutional engagements of Redimension Realty across real estate, infrastructure, industrial and public-sector projects.",
};

type ClientLogo = {
  name: string;
  file: string;
  category:
    | "Real Estate & Developers"
    | "Infrastructure & Industrial"
    | "Hospitality & Housing"
    | "Government & Institutional"
    | "Other Associations";
};

// const LOGO_BASE_PATH = "/clients";
const LOGO_BASE_PATH = "/logo";

const clientLogos: ClientLogo[] = [
  {
    name: "Godrej Properties",
    file: "godrej.png",
    category: "Real Estate & Developers",
  },
  {
    name: "K Raheja Corp",
    file: "k-raheja-corp.png",
    category: "Real Estate & Developers",
  },
  {
    name: "Puravankara",
    file: "pruvankara.jpeg",
    category: "Real Estate & Developers",
  },
  {
    name: "Paradigm Realty",
    file: "pardigm.png",
    category: "Real Estate & Developers",
  },
  {
    name: "Platinum Corp",
    file: "platinum-corp.png",
    category: "Real Estate & Developers",
  },
  {
    name: "Suraj Estate Developers",
    file: "suraj.png",
    category: "Real Estate & Developers",
  },
  {
    name: "Baya Developers",
    file: "baya.png",
    category: "Real Estate & Developers",
  },
  {
    name: "Regency Group",
    file: "regency.png",
    category: "Real Estate & Developers",
  },
  {
    name: "Lotus Developers",
    file: "lotus.png",
    category: "Real Estate & Developers",
  },
  {
    name: "Afcons",
    file: "afcons.png",
    category: "Infrastructure & Industrial",
  },
  {
    name: "Dalmia Cement",
    file: "dalmia.png",
    category: "Infrastructure & Industrial",
  },
  {
    name: "Shapoorji Pallonji",
    file: "shapoorji-pallonji.svg",
    category: "Infrastructure & Industrial",
  },
  {
    name: "Mahindra",
    file: "mahindra.png",
    category: "Hospitality & Housing",
  },
  {
    name: "Joyville",
    file: "joyvile.png",
    category: "Hospitality & Housing",
  },
  {
    name: "BMC",
    file: "bmc.png",
    category: "Government & Institutional",
  },
  {
    name: "MMRDA",
    file: "mmrda.png",
    category: "Government & Institutional",
  },
  // {
  //   name: "Client Association",
  //   file: "logo1.png",
  //   category: "Other Associations",
  // },
  // {
  //   name: "Client Association",
  //   file: "logo2.png",
  //   category: "Other Associations",
  // },
  // {
  //   name: "Client Association",
  //   file: "logo3.png",
  //   category: "Other Associations",
  // },
];

const categories: ClientLogo["category"][] = [
  "Real Estate & Developers",
  "Infrastructure & Industrial",
  "Hospitality & Housing",
  "Government & Institutional",
  "Other Associations",
];

const stats = [
  {
    value: "25–30+",
    label: "Leading companies advised",
    icon: CheckCircle2,
  },
  {
    value: "Pan-India",
    label: "Regulatory advisory reach",
    icon: Globe2,
  },
  {
    value: "Tier-I",
    label: "Corporate & institutional clientele",
    icon: Building2,
  },
  {
    value: "Public Sector",
    label: "BMC, MMRDA & government-linked work",
    icon: Landmark,
  },
];

const engagements = [
  "Environmental & Coastal Regulatory Advisory",
  "Forest and CRZ Clearance Support",
  "EIA, Statutory Documentation & Compliance",
  "Regulatory Strategy & Institutional Coordination",
];

function getLogoSrc(fileName: string) {
  return `${LOGO_BASE_PATH}/${fileName
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/")}`;
}

export default function ClientsPage() {
  return (
    <main className="overflow-hidden bg-[#f7faf7] pt-28">
      {/* Hero */}
      <section className="relative section-padding">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#0f5a2d]/10 blur-3xl" />
          <div className="absolute right-[-10rem] top-10 h-[26rem] w-[26rem] rounded-full bg-[#d9a520]/10 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0f5a2d]/20 to-transparent" />
        </div>

        <div className="container-shell relative">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="eyebrow">Clients</p>

              <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-[-0.07em] text-[#031126] sm:text-6xl lg:text-7xl">
                Trusted by leading developers, infrastructure groups and public-sector stakeholders.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#526070]">
                Redimension Realty works with project proponents across real estate,
                infrastructure, industrial, hospitality and public utility sectors,
                supporting them through complex environmental, coastal, forest and
                statutory approval frameworks.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#071b3a]/10 bg-white/70 p-6 shadow-[0_24px_80px_rgba(3,17,38,0.08)] backdrop-blur-xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f5a2d]">
                Client Confidence
              </p>

              <p className="mt-4 text-2xl font-black tracking-[-0.04em] text-[#031126]">
                Associations built on regulatory clarity, discretion and execution-focused advisory.
              </p>

              <div className="mt-6 grid gap-3">
                {engagements.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#071b3a]/10 bg-white px-4 py-3"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0f5a2d]/10 text-[#0f5a2d]">
                      <CheckCircle2 size={17} />
                    </span>
                    <span className="text-sm font-bold text-[#243145]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-[1.75rem] border border-[#071b3a]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-[#031126] text-white">
                    <Icon size={20} />
                  </div>

                  <p className="text-2xl font-black tracking-[-0.05em] text-[#031126]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-[#667085]">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logo Wall */}
      <section className="section-padding pt-0">
        <div className="container-shell">
          <div className="rounded-[2.5rem] border border-[#071b3a]/10 bg-white p-4 shadow-[0_30px_100px_rgba(3,17,38,0.08)] sm:p-6 lg:p-8">
            <div className="mb-8 flex flex-col gap-4 border-b border-[#071b3a]/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="eyebrow">Selected Associations</p>
                <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.06em] text-[#031126] sm:text-5xl">
                  A network of respected names across development and infrastructure.
                </h2>
              </div>

              <p className="max-w-md text-sm font-medium leading-7 text-[#667085]">
                The client wall is organised by sector to communicate the breadth
                of Redimension Realty’s advisory and institutional engagement.
              </p>
            </div>

            <div className="space-y-10">
              {categories.map((category) => {
                const logos = clientLogos.filter(
                  (client) => client.category === category
                );

                if (!logos.length) return null;

                return (
                  <div key={category}>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px flex-1 bg-[#071b3a]/10" />
                      <h3 className="text-center text-xs font-black uppercase tracking-[0.2em] text-[#0f5a2d]">
                        {category}
                      </h3>
                      <span className="h-px flex-1 bg-[#071b3a]/10" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                      {logos.map((client, index) => (
                        <div
                          key={`${client.name}-${client.file}-${index}`}
                          className="grid min-h-[128px] place-items-center rounded-[1.5rem] border border-[#071b3a]/10 bg-[#fbfcfb] p-5"
                          >
                          <div className="relative h-16 w-full">
                            <Image
                              src={getLogoSrc(client.file)}
                              alt={`${client.name} logo`}
                              fill
                              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 180px"
                              className="object-contain opacity-100"
                              ></Image>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="section-padding pt-0">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">Nature of Engagements</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-[#031126] sm:text-5xl">
                Advisory support across the complete statutory approval lifecycle.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {engagements.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[2rem] border border-[#071b3a]/10 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d7a329]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-6 text-2xl font-black tracking-[-0.04em] text-[#031126]">
                    {item}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-[#667085]">
                    Structured support for project proponents navigating
                    documentation, authority coordination, technical submissions and
                    compliance-driven execution.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f5ee] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-8 rounded-[2rem] bg-[#f1e6b8] px-7 py-9 sm:px-10 sm:py-11 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-12">
            <div className="max-w-2xl">
              <p className="font-[var(--font-cormorant)] text-[clamp(1.8rem,2.5vw,2.5rem)] leading-[1.05] tracking-[-0.025em] text-[#173426]">
                Have a project that requires regulatory clarity?
              </p>

              <p className="mt-3 max-w-xl text-[14px] leading-7 text-[#536159] sm:text-[15px]">
                Speak with our team about environmental, regulatory and
                development requirements for your project.
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