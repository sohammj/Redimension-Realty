import { blogPosts } from "@/src/data/site";

export const metadata = {
  title: "Blog & Insights",
  description:
    "Regulatory insights, environmental advisory articles and coastal compliance updates from Redimension Realty.",
};

export default function BlogPage() {
  return (
    <main className="pt-28">
      <section className="section-padding">
        <div className="container-shell">
          <p className="eyebrow">Blog / Insights</p>
          <h1 className="section-title mt-4 max-w-5xl">
            Regulatory insights for sustainable development.
          </h1>
          <p className="section-subtitle mt-7 max-w-4xl">
            Articles can later be managed through Sanity CMS for SEO-focused publishing around
            EC, CRZ, forest clearance, environmental due diligence and sustainability topics.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="premium-card rounded-[2rem] p-7">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c99a2e]">{post.category}</p>
                <h2 className="mt-4 text-2xl font-black tracking-[-0.05em]">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#526174]">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
