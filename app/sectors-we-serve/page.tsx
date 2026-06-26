import { CheckCircle2 } from "lucide-react";
import { sectors } from "@/src/data/site";

export const metadata = {
  title: "Sectors We Serve",
  description:
    "Environmental consulting, infrastructure, real estate, government projects, coastal developments and industrial sectors served by Redimension Realty.",
};

export default function SectorsWeServePage() {
  return (
    <main className="pt-28">
      <section className="section-padding">
        <div className="container-shell">
          <p className="eyebrow">Sectors We Serve</p>
          <h1 className="section-title mt-4 max-w-5xl">
            Advisory and execution support across high-compliance sectors.
          </h1>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <div key={sector} className="premium-card rounded-[2rem] p-7">
                <CheckCircle2 className="text-[#0f5a2d]" />
                <h2 className="mt-5 text-2xl font-black tracking-[-0.05em]">{sector}</h2>
                <p className="mt-4 text-sm leading-7 text-[#526174]">
                  Regulatory strategy, documentation, compliance coordination and project facilitation support.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
