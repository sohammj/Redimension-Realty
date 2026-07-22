import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Construction,
  Factory,
  Landmark,
  Leaf,
  Waves,
  type LucideIcon,
} from "lucide-react";

import { featuredProjects } from "@/src/data/site";

export const metadata = {
  title: "Projects by Sector",
  description:
    "Explore Redimension Realty's environmental, infrastructure, redevelopment, government, coastal, hospitality and industrial project experience.",
};

type Project = (typeof featuredProjects)[number];

type Sector = {
  id: string;
  name: string;
  label: string;
  description: string;
  capabilities: string;
  icon: LucideIcon;
  keywords: string[];
};

const sectors: Sector[] = [
  {
    id: "environment-compliance",
    name: "Environmental Consulting",
    label: "Environment & Compliance",
    description:
      "Environmental clearance, impact assessment, forest permissions and regulatory strategy for complex development proposals.",
    capabilities: "EIA · EC · Forest clearance",
    icon: Leaf,
    keywords: [
      "environment",
      "eia",
      "forest",
      "clearance",
      "compliance",
      "pollution",
    ],
  },
  {
    id: "public-infrastructure",
    name: "Infrastructure & Civil Works",
    label: "Public Infrastructure",
    description:
      "Approval coordination and statutory support for roads, transport systems, utilities and large-scale civil infrastructure.",
    capabilities: "BMC · MMRDA · AMRUT",
    icon: Construction,
    keywords: [
      "infrastructure",
      "civil",
      "road",
      "transport",
      "utility",
      "bmc",
      "mmrda",
      "amrut",
    ],
  },
  {
    id: "urban-development",
    name: "Real Estate & Redevelopment",
    label: "Urban Development",
    description:
      "Regulatory and execution advisory for residential development, redevelopment, rehabilitation and mixed-use projects.",
    capabilities: "SRA · Redevelopment · Housing",
    icon: Building2,
    keywords: [
      "real estate",
      "redevelopment",
      "residential",
      "housing",
      "sra",
      "rehabilitation",
      "mixed-use",
    ],
  },
  {
    id: "institutional-engagement",
    name: "Government Projects",
    label: "Institutional Engagement",
    description:
      "Documentation, departmental coordination and project facilitation for government authorities and public-sector initiatives.",
    capabilities: "Liaisoning · NOCs · Coordination",
    icon: Landmark,
    keywords: [
      "government",
      "public sector",
      "authority",
      "institutional",
      "municipal",
    ],
  },
  {
    id: "coastal-regulation",
    name: "Coastal & CRZ Developments",
    label: "Coastal Regulation",
    description:
      "CRZ assessment, CZMA submissions, coastal compliance strategy and approval support for sensitive development locations.",
    capabilities: "CRZ · CZMA · Coastal NOCs",
    icon: Waves,
    keywords: ["coastal", "coast", "crz", "czma", "shore", "waterfront"],
  },
  {
    id: "commercial-development",
    name: "Hospitality & Industrial Projects",
    label: "Commercial Development",
    description:
      "Integrated environmental and statutory advisory for hospitality, commercial, manufacturing and industrial developments.",
    capabilities: "Approvals · Compliance · Execution",
    icon: Factory,
    keywords: [
      "hospitality",
      "hotel",
      "resort",
      "industrial",
      "manufacturing",
      "commercial",
      "factory",
    ],
  },
];

function searchableProjectText(project: Project) {
  return [
    project.name,
    project.location,
    project.service,
    project.client,
    "sector" in project ? String(project.sector) : "",
  ]
    .join(" ")
    .toLowerCase();
}

function projectsForSector(sector: Sector) {
  return featuredProjects.filter((project) => {
    const text = searchableProjectText(project);
    return sector.keywords.some((keyword) => text.includes(keyword));
  });
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex min-h-full flex-col overflow-hidden border border-[#031126]/10 bg-[#fffdf9] text-[#031126] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(3,17,38,0.12)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#d9d8d1]">
        <Image
          src={project.image}
          alt={`${project.name} project`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 420px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(3,17,38,0.32)_100%)]" />
        <span className="absolute left-4 top-4 bg-[#fffdf9]/95 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.17em] text-[#7f5d1b] backdrop-blur-sm">
          {project.status}
        </span>
      </div>

      <div className="h-1 bg-[#c99a2e]" />

      <div className="flex min-h-[285px] flex-1 flex-col p-6 sm:p-7">
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#7b8490]">
          {project.location}
        </p>
        <h3 className="mt-4 max-w-[340px] font-[var(--font-cormorant)] text-[1.9rem] font-semibold leading-[0.96] tracking-[-0.04em] sm:text-[2.1rem]">
          {project.name}
        </h3>
        <p className="mt-5 text-[13px] leading-6 text-[#647080] sm:text-[14px]">
          {project.service}
        </p>

        <div className="mt-auto flex items-end justify-between gap-5 pt-8">
          <div className="min-w-0">
            <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#9097a0]">
              Client / Authority
            </p>
            <p className="mt-2 text-[13px] font-semibold leading-5 text-[#263142]">
              {project.client}
            </p>
          </div>
          <Link
            href={project.href}
            aria-label={`View ${project.name}`}
            className="grid h-11 w-11 shrink-0 place-items-center bg-[#031126] text-white transition duration-300 group-hover:bg-[#c99a2e] group-hover:text-[#031126]"
          >
            <ArrowUpRight size={18} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsBySectorPage() {
  return (
    <main className="bg-[#faf9f4] pt-20">
      <section
        className="relative min-h-[650px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg1.jpg')" }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031126]/85 via-[#031126]/55 to-[#031126]/20" />

        <div className="container-shell relative z-10 flex min-h-[650px] items-center">
          <div className="max-w-6xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d29a2e]">
              Sectors & Projects
            </p>

            <h1 className="mt-5 max-w-5xl font-[var(--font-cormorant)] text-[clamp(2.8rem,5vw,5.3rem)] font-medium leading-[0.92] tracking-[-0.055em] text-white">
              Project experience shaped around each sector
            </h1>

            <p className="mt-7 max-w-3xl text-[16px] leading-7 text-white/75">
              Explore our sector-specific regulatory expertise and the projects
              supported through environmental assessment, statutory approvals,
              institutional coordination and disciplined execution.
            </p>
          </div>
        </div>
      </section>

      {sectors.map((sector, index) => {
        const Icon = sector.icon;
        const projects = projectsForSector(sector);

        return (
          <section
            key={sector.id}
            id={sector.id}
            className="scroll-mt-28 border-t border-[#031126]/10 px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
          >
            <div className="container-shell">
              <div className="grid gap-8 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.8fr)] lg:gap-14">
                {/* <header className="lg:sticky lg:top-36 lg:self-start"> */}
                <header className="self-start">
                  <div className="flex items-center justify-between gap-5">
                    <span className="grid h-12 w-12 place-items-center border border-[#031126]/10 bg-[#f6f2e8] text-[#0f5a2d]">
                      <Icon size={21} strokeWidth={1.7} />
                    </span>
                    <span className="font-[var(--font-cormorant)] text-xl font-semibold text-[#c99a2e]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.19em] text-[#8a6b27]">
                    {sector.label}
                  </p>
                  <h2 className="mt-4 font-[var(--font-cormorant)] text-[clamp(2.25rem,3.4vw,3.65rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-[#031126]">
                    {sector.name}
                  </h2>
                  <p className="mt-5 max-w-md text-[14px] leading-7 text-[#647080]">
                    {sector.description}
                  </p>
                  <div className="mt-7 border-t border-[#031126]/10 pt-5">
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#939aa3]">
                      Core capabilities
                    </p>
                    <p className="mt-2 text-[12px] font-semibold leading-5 text-[#374152]">
                      {sector.capabilities}
                    </p>
                  </div>
                </header>

                {projects.length > 0 ? (
                  <div className="grid gap-5 md:grid-cols-2">
                    {projects.map((project) => (
                      <ProjectCard key={project.slug} project={project} />
                    ))}
                  </div>
                ) : (
                  <div className="flex min-h-[300px] flex-col items-start justify-center border border-dashed border-[#031126]/20 bg-[#f7f5ee] p-8 sm:p-12">
                    <p className="font-[var(--font-cormorant)] text-3xl font-semibold tracking-[-0.035em] text-[#031126]">
                      Project details coming soon
                    </p>
                    <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#647080]">
                      We support projects in this sector. Detailed case studies
                      will be published once the project information and client
                      permissions are available.
                    </p>
                    <Link
                      href="/contact-us"
                      className="mt-7 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0f5a2d]"
                    >
                      Discuss a project <ArrowUpRight size={16} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-t border-[#031126]/10 bg-[#f7f5ee] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-8 rounded-[2rem] bg-[#f1e6b8] px-7 py-9 sm:px-10 sm:py-11 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-12">
            <div className="max-w-2xl">
              <p className="font-[var(--font-cormorant)] text-[clamp(1.8rem,2.5vw,2.5rem)] leading-[1.05] tracking-[-0.025em] text-[#173426]">
                Planning a project in a regulated sector?
              </p>
              <p className="mt-3 max-w-xl text-[14px] leading-7 text-[#536159] sm:text-[15px]">
                Speak with our team about the environmental, regulatory and
                development requirements for your project.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="group inline-flex min-h-[52px] w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#173426] px-7 text-[12px] font-semibold text-white transition duration-300 hover:bg-[#0f5a2d] sm:w-auto"
            >
              Start a conversation
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
