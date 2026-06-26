export const metadata = {
  title: "Careers",
  description:
    "Careers at Redimension Realty for regulatory, environmental, liaisoning and project coordination roles.",
};

export default function CareersPage() {
  return (
    <main className="pt-28">
      <section className="section-padding">
        <div className="container-shell">
          <p className="eyebrow">Careers</p>
          <h1 className="section-title mt-4 max-w-5xl">
            Join a specialist team working at the intersection of compliance and development.
          </h1>
          <p className="section-subtitle mt-7 max-w-4xl">
            Career openings can be managed through CMS later. For now, this page can invite
            environmental consultants, documentation specialists, liaisoning professionals and
            project coordinators to share their profile.
          </p>

          <div className="mt-12 rounded-[2rem] bg-[#031126] p-8 text-white">
            <h2 className="text-3xl font-black tracking-[-0.05em]">Send your profile</h2>
            <p className="mt-4 text-white/65">
              Interested candidates can share their CV at director@redimensionrealty.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
