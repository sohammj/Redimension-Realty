import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Globe2,
  Landmark,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Clients | Redimension Realty",
  description:
    "Client associations and institutional engagements of Redimension Realty across real estate, infrastructure, industrial and public-sector projects.",
};

type ClientCategory =
  | "Real Estate & Developers"
  | "Infrastructure & Industrial"
  | "Hospitality & Housing"
  | "Government & Institutional"
  | "Other Associations";

type ClientLogo = {
  name: string;
  file: string;
  category: ClientCategory;
};

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
];

const categories: ClientCategory[] = [
  "Real Estate & Developers",
  "Infrastructure & Industrial",
  "Hospitality & Housing",
  "Government & Institutional",
  "Other Associations",
];

const categoryDescriptions: Record<ClientCategory, string> = {
  "Real Estate & Developers":
    "Residential, mixed-use and urban development organisations.",
  "Infrastructure & Industrial":
    "Infrastructure contractors, engineering groups and industrial organisations.",
  "Hospitality & Housing":
    "Hospitality, housing and integrated development brands.",
  "Government & Institutional":
    "Municipal, metropolitan and public-sector authorities.",
  "Other Associations":
    "Additional corporate and institutional associations.",
};

const stats = [
  {
    value: "25–30+",
    label: "Leading organisations advised",
    icon: ShieldCheck,
  },
  {
    value: "Pan-India",
    label: "Regulatory advisory reach",
    icon: Globe2,
  },
  {
    value: "Tier-I",
    label: "Corporate and institutional clientele",
    icon: Building2,
  },
  {
    value: "Public Sector",
    label: "BMC, MMRDA and government-linked work",
    icon: Landmark,
  },
];

function getLogoSrc(fileName: string) {
  return `${LOGO_BASE_PATH}/${fileName
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/")}`;
}

export default function ClientsPage() {
  return (
    <main className="overflow-hidden bg-[#faf9f4] pt-28">
      <section className="relative isolate px-5 pb-20 pt-16 sm:px-7 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        {/* Decorative circular lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[620px] w-[24%] opacity-[0.1] lg:block"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 120% 50%, transparent 0 28px, rgba(15,90,45,0.7) 29px 30px)",
          }}
        />

        <div className="container-shell relative z-10">
          {/* Hero */}
          <div className="max-w-6xl">
            <p className="eyebrow">Clients</p>

            <h1 className="mt-5 max-w-5xl font-[var(--font-cormorant)] text-[clamp(2.8rem,5vw,5.3rem)] font-medium leading-[0.92] tracking-[-0.055em] text-[#031126]">
              Trusted by organisations shaping development and infrastructure
            </h1>

            <p className="section-subtitle mt-7 max-w-3xl">
              Redimension Realty works with developers, infrastructure groups,
              industrial organisations and public authorities navigating
              environmental, coastal, forest and statutory approval frameworks.
            </p>
          </div>

          {/* Credibility strip */}
          {/* <div className="mt-14 grid border-y border-[#031126]/10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[#031126]/10">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="group flex min-h-[170px] flex-col justify-between border-b border-[#031126]/10 px-1 py-7 transition sm:px-6 lg:border-b-0 lg:px-7"
                >
                  <div className="flex items-start justify-between gap-5">
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      className="text-[#0f5a2d]"
                    />

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="text-[#c99a2e] opacity-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </div>

                  <div className="mt-8">
                    <p className="font-[var(--font-cormorant)] text-[2rem] font-semibold leading-none tracking-[-0.04em] text-[#031126]">
                      {stat.value}
                    </p>

                    <p className="mt-3 max-w-[220px] text-[12px] font-medium leading-5 text-[#667080]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div> */}

          {/* Associations heading */}
          {/* <div className="mt-20 grid gap-8 border-t border-[#031126]/10 pt-14 sm:mt-24 sm:pt-16 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="eyebrow">Selected Associations</p>

              <h2 className="mt-5 max-w-3xl font-[var(--font-cormorant)] text-[clamp(2.6rem,4.5vw,4.7rem)] font-medium leading-[0.93] tracking-[-0.05em] text-[#031126]">
                A network of respected names across high-compliance sectors
              </h2>
            </div>

            <p className="max-w-[500px] text-[14px] leading-7 text-[#657080] sm:text-[15px] sm:leading-8 lg:justify-self-end">
              The associations below reflect Redimension Realty’s exposure
              across real estate, public infrastructure, industrial,
              hospitality and government assignments.
            </p>
          </div> */}

          {/* Categorised logo directory */}
          <div className="mt-12 border-y border-[#031126]/10">
            {categories.map((category, categoryIndex) => {
              const logos = clientLogos.filter(
                (client) => client.category === category,
              );

              if (!logos.length) return null;

              return (
                <section
                  key={category}
                  className="grid gap-8 border-b border-[#031126]/10 py-10 last:border-b-0 sm:py-12 lg:grid-cols-[230px_1fr] lg:gap-12"
                >
                  {/* Category information */}
                  <div className="lg:sticky lg:top-36 lg:self-start">
                    <p className="text-[10px] font-bold tracking-[0.18em] text-[#c99a2e]">
                      {String(categoryIndex + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-4 max-w-[220px] font-[var(--font-cormorant)] text-[1.75rem] font-semibold leading-[1] tracking-[-0.035em] text-[#031126]">
                      {category}
                    </h3>

                    <p className="mt-4 max-w-[220px] text-[12px] leading-6 text-[#6b7481]">
                      {categoryDescriptions[category]}
                    </p>

                    <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.18em] text-[#0f5a2d]">
                      {logos.length}{" "}
                      {logos.length === 1 ? "association" : "associations"}
                    </p>
                  </div>

                  {/* Logos */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
                    {logos.map((client, index) => (
                      <div
                        key={`${client.name}-${client.file}-${index}`}
                        title={client.name}
                        className="
                          group/logo
                          relative
                          grid min-h-[126px] place-items-center
                          overflow-hidden
                          rounded-[1.25rem]
                          border border-[#031126]/10
                          bg-white/70
                          p-5
                          transition duration-400
                          hover:-translate-y-1
                          hover:border-[#c99a2e]/40
                          hover:bg-white
                          hover:shadow-[0_18px_45px_rgba(3,17,38,0.09)]
                        "
                      >
                        <div className="relative h-16 w-full">
                          <Image
                            src={getLogoSrc(client.file)}
                            alt={`${client.name} logo`}
                            fill
                            sizes="
                              (max-width: 639px) 45vw,
                              (max-width: 1023px) 28vw,
                              180px
                            "
                            className="object-contain transition-transform duration-500 group-hover/logo:scale-[1.04]"
                          />
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-[#c99a2e] transition-transform duration-500 group-hover/logo:scale-x-100" />
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Closing note */}
          <div className="mt-10 flex flex-col gap-4 border-b border-[#031126]/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-[12px] leading-6 text-[#737c88]">
              Client and authority logos represent project associations and
              institutional engagements across different assignments.
            </p>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0f5a2d]"
            >
              View selected projects

              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#031126]/10 bg-[#f7f5ee] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28">
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

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}