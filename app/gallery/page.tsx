import GalleryBento from "@/src/components/sections/GalleryBento";

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

          {/* <h1 className="section-title mt-4 max-w-5xl">
            Project photos, site visits.
          </h1> */}
          <GalleryBento />
        </div>
      </section>
    </main>
  );
}