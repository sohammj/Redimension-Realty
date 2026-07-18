import { CheckCircle2 } from "lucide-react";
import { sectors } from "@/src/data/site";
import Link from "next/link";

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
