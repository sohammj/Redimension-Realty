import { ArrowRight, Leaf } from "lucide-react";
import { coreServices } from "@/src/data/site";
import Link from "next/link";

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
          <p><br/></p>
          <h1 className="font-[var(--font-cormorant)] text-[clamp(3.5rem,5.8vw,6.4rem)] font-medium leading-[0.88] tracking-[-0.045em] drop-shadow-[0_5px_24px_rgba(3,17,38,0.32)]">
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
