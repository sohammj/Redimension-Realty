import { ArrowRight, Leaf } from "lucide-react";
import { coreServices } from "@/src/data/site";

export const metadata = {
  title: "Services",
  description:
    "Environmental clearance, CRZ approvals, forest clearance, regulatory strategy, statutory documentation and ESG advisory services.",
};

export default function ServicesPage() {
  return (
    <main className="pt-28">
      <section className="section-padding">
        <div className="container-shell">
          <p className="eyebrow">Services</p>
          <h1 className="section-title mt-4 max-w-5xl">
            End-to-end regulatory advisory for environmental, forest and coastal approvals.
          </h1>
          <p className="section-subtitle mt-7 max-w-4xl">
            Redimension Realty provides strategic advisory, technical assessment, statutory
            documentation and institutional liaisoning support for complex development projects.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {coreServices.map((service, index) => (
              <div key={service.title} className="premium-card rounded-[2rem] p-8">
                <div className="flex items-start justify-between gap-6">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-[#0f5a2d]/10 text-[#0f5a2d]">
                    <Leaf />
                  </div>
                  <span className="text-sm font-black text-[#c99a2e]">0{index + 1}</span>
                </div>
                <h2 className="mt-7 text-2xl font-black tracking-[-0.05em]">{service.title}</h2>
                <p className="mt-4 leading-8 text-[#526174]">{service.summary}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-[#0f5a2d]">
                  Consultation available <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
