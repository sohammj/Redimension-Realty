import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Construction,
  Leaf,
  type LucideIcon,
} from "lucide-react";

import { featuredProjects } from "@/src/data/site";

export const metadata = {
  title: "Projects by Sector",
  description:
    "Explore Redimension Realty's experience across environmental and coastal regulation, redevelopment and SRA projects, and BMC, MMRDA and infrastructure development.",
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
    id: "environmental-coastal-regulatory",
    name: "Environmental & Coastal Regulation",
    label: "Sector 01 · Environment & Regulation",
    description:
      "Environmental clearances, forest permissions, coastal regulation and statutory approvals for projects operating within complex regulatory environments.",
    capabilities:
      "Environmental Clearance · Forest Clearance · CRZ · Regulatory Liaisoning",
    icon: Leaf,
    keywords: [
      "environment",
      "environmental",
      "eia",
      "forest",
      "clearance",
      "crz",
      "coastal",
      "czma",
      "compliance",
      "pollution",
    ],
  },
  {
    id: "redevelopment-sra-construction",
    name: "Redevelopment & Construction",
    label: "Sector 02 · Urban Development",
    description:
      "Regulatory advisory and institutional coordination for redevelopment, SRA, residential and building construction projects across Mumbai's evolving urban landscape.",
    capabilities:
      "Redevelopment · SRA · Building Construction · Housing",
    icon: Building2,
    keywords: [
      "redevelopment",
      "residential",
      "housing",
      "sra",
      "rehabilitation",
      "construction",
      "building",
      "real estate",
      "mixed-use",
    ],
  },
  {
    id: "bmc-mmrda-infrastructure",
    name: "BMC, MMRDA & Infrastructure",
    label: "Sector 03 · Public Infrastructure",
    description:
      "Project support, statutory coordination and regulatory liaisoning for public infrastructure, civil construction and large-scale development initiatives.",
    capabilities:
      "BMC · MMRDA · Infrastructure · Civil Construction",
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
      "municipal",
      "government",
      "public",
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
    <main className="overflow-hidden bg-[#faf9f4] pt-28">
      {/* Page Introduction */}
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-16 sm:px-7 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[620px] w-[24%] opacity-[0.1] lg:block"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 120% 50%, transparent 0 28px, rgba(15,90,45,0.7) 29px 30px)",
          }}
        />

        <div className="container-shell relative z-10">
          <div className="max-w-6xl">
            <p className="eyebrow">Sectors & Projects</p>

            <h1 className="mt-5 max-w-5xl font-[var(--font-cormorant)] text-[clamp(2.8rem,5vw,5.3rem)] font-medium leading-[0.92] tracking-[-0.055em] text-[#031126]">
              Experience across the sectors shaping development
            </h1>

            <p className="section-subtitle mt-7 max-w-3xl">
              From environmental and coastal regulation to urban redevelopment
              and public infrastructure, our work is shaped around the
              regulatory complexity of each project.
            </p>
          </div>

          {/* Sector Navigation */}
          <div className="mt-12 grid gap-3 border-y border-[#031126]/10 py-5 sm:grid-cols-3">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;

              return (
                <a
                  key={sector.id}
                  href={`#${sector.id}`}
                  className="group flex items-center gap-4 border border-transparent px-4 py-4 transition hover:border-[#031126]/10 hover:bg-[#fffdf9]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#f1ead9] text-[#0f5a2d]">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[8px] font-bold uppercase tracking-[0.16em] text-[#a7781e]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="mt-1 block font-[var(--font-cormorant)] text-[1.25rem] font-semibold leading-none tracking-[-0.025em] text-[#031126]">
                      {sector.name}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="ml-auto shrink-0 text-[#9ca2a9] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c99a2e]"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sector Sections */}
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
              <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.8fr)] lg:gap-16">
                {/* Sector Information */}
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

                {/* Projects */}
                {projects.length > 0 ? (
                  <div className="grid gap-5 md:grid-cols-2">
                    {projects.map((project) => (
                      <ProjectCard
                        key={project.slug}
                        project={project}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex min-h-[300px] flex-col items-start justify-center border border-dashed border-[#031126]/20 bg-[#f7f5ee] p-8 sm:p-12">
                    <p className="font-[var(--font-cormorant)] text-3xl font-semibold tracking-[-0.035em] text-[#031126]">
                      Project details coming soon
                    </p>

                    <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#647080]">
                      We support projects in this sector. Detailed case studies
                      will be published as project information becomes
                      available.
                    </p>

                    <Link
                      href="/contact-us"
                      className="mt-7 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0f5a2d]"
                    >
                      Discuss a project
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
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