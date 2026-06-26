import { featuredProjects } from "@/src/data/site";

export const metadata = {
  title: "Case Studies",
  description:
    "Case study structure for Redimension Realty project engagements and regulatory advisory outcomes.",
};

export default function CaseStudiesPage() {
  return (
    <main className="pt-28">
      <section className="section-padding">
        <div className="container-shell">
          <p className="eyebrow">Case Studies</p>
          <h1 className="section-title mt-4 max-w-5xl">
            Structured case studies for complex project engagements.
          </h1>
          <p className="section-subtitle mt-7 max-w-4xl">
            Each case study can later include project objective, challenge, regulatory pathway,
            scope of work, authorities involved, status and images.
          </p>

          <div className="mt-12 grid gap-6">
            {featuredProjects.map((item, index) => (
              <article key={item.name} className="premium-card rounded-[2rem] p-8">
                <p className="text-sm font-black text-[#c99a2e]">Case Study 0{index + 1}</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.06em]">{item.name}</h2>
                <p className="mt-4 leading-8 text-[#526174]">
                  A detailed case study for this engagement will be developed once confirmed
                  project data, images and approval milestones are received from the client.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
