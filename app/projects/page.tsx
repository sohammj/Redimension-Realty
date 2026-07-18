import { featuredProjects } from "@/src/data/site";
import Link from "next/link";

export const metadata = {
  title: "Projects",
  description:
    "Project exposure across environmental advisory, BMC/MMRDA infrastructure, SRA housing and AMRUT urban infrastructure.",
};

export default function ProjectsPage() {
  return (
    <main className="pt-28">
      <section className="section-padding">
        <div className="container-shell">
          <p className="eyebrow">Projects</p>
          <h1 className="section-title mt-4 max-w-5xl">
            Project portfolio across advisory, infrastructure and redevelopment.
          </h1>
          <p className="section-subtitle mt-7 max-w-4xl">
            Detailed project photos, completion status and individual project case studies can be
            added later through the CMS once the client shares confirmed project assets.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article key={project.name} className="glass-card rounded-[2rem] p-8">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c99a2e]">
                  {project.status}
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.06em]">{project.name}</h2>
                <div className="mt-6 space-y-3 text-sm leading-7 text-[#526174]">
                  <p><strong>Location:</strong> {project.location}</p>
                  <p><strong>Client:</strong> {project.client}</p>
                  <p><strong>Service Provided:</strong> {project.service}</p>
                  <p><strong>Scope:</strong> Advisory, documentation, coordination and execution support.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
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
