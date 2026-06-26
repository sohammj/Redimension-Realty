import { clients } from "@/src/data/site";

export const metadata = {
  title: "Clients",
  description:
    "Client associations and notable engagements of Redimension Realty across real estate, infrastructure and industrial sectors.",
};

export default function ClientsPage() {
  return (
    <main className="pt-28">
      <section className="section-padding">
        <div className="container-shell">
          <p className="eyebrow">Clients</p>
          <h1 className="section-title mt-4 max-w-5xl">
            Trusted by leading developers, infrastructure groups and institutional stakeholders.
          </h1>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <div key={client} className="grid min-h-28 place-items-center rounded-[2rem] border border-[#071b3a]/10 bg-white p-6 text-center text-lg font-black tracking-[-0.03em] text-[#071b3a] shadow-sm">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
