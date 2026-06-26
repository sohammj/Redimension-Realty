export const metadata = {
  title: "Gallery",
  description:
    "Photo and media gallery for Redimension Realty projects, site visits and completed work.",
};

export default function GalleryPage() {
  return (
    <main className="pt-28">
      <section className="section-padding">
        <div className="container-shell">
          <p className="eyebrow">Gallery</p>
          <h1 className="section-title mt-4 max-w-5xl">
            Project photos, site visits and visual documentation.
          </h1>
          <p className="section-subtitle mt-7 max-w-4xl">
            This section is ready for CMS-managed galleries. Once client photos are shared,
            images can be grouped by project, location, category and completion status.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {["Project Sites", "Coastal Assets", "Infrastructure Works", "Team Visits", "Completed Work", "Documentation"].map((item) => (
              <div key={item} className="grid aspect-[4/3] place-items-center rounded-[2rem] border border-dashed border-[#c99a2e]/40 bg-white text-center font-black text-[#071b3a]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
