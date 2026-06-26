import { featuredProjects } from "@/src/data/site";

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
    </main>
  );
}
