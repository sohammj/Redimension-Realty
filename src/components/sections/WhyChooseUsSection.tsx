import Link from "next/link";
import {
  ArrowUpRight,
  FileCheck2,
  Landmark,
  Network,
  Scale,
} from "lucide-react";

const reasons = [
  {
    title: "Deep regulatory expertise",
    description:
      "Specialised knowledge across environmental clearances, EIA, CRZ, forest approvals and statutory compliance.",
    icon: Scale,
  },
  {
    title: "End-to-end ownership",
    description:
      "One accountable team from feasibility and documentation through authority coordination and final approvals.",
    icon: FileCheck2,
  },
  {
    title: "Institutional credibility",
    description:
      "Experience working across leading developers, infrastructure companies and government authorities.",
    icon: Network,
  },
];

const proofPoints = [
  {
    value: "18+",
    label: "Years of experience",
  },
  {
    value: "30+",
    label: "Companies advised",
  },
  {
    value: "Pan-India",
    label: "Advisory reach",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f1e8] py-16 text-[#031126] sm:py-20 lg:py-24">
      {/* Decorative contour lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 hidden h-full w-[18%] opacity-[0.12] lg:block"
        style={{
          backgroundImage:
             "repeating-radial-gradient(circle at -20% 50%, transparent 0 28px, rgba(15,90,45,0.7) 29px 30px)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-24 h-[420px] w-[420px] rounded-full border border-[#0f5a2d]/15"
      >
        <div className="absolute inset-12 rounded-full border border-[#0f5a2d]/10" />
      </div>

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-[860px] text-center">
          {/* <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#b3821e] sm:text-[11px]">
            Why Choose Us
          </p> */}

          <h2 className="mt-4 font-[var(--font-cormorant)] text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#031126]">
            The expertise to navigate complexity.
          </h2>

          <p className="mx-auto mt-6 max-w-[670px] text-[15px] leading-7 text-[#5a6777] sm:text-base sm:leading-8">
            Redimension combines regulatory intelligence, institutional
            coordination and execution capability to move complex projects
            forward with clarity and confidence.
          </p>

          <Link
            href="/contact-us"
            className="group mt-7 inline-flex min-h-[48px] items-center gap-3 rounded-[2px] bg-[#0f5a2d] px-5 text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#174f31]"
          >
            Request a consultation
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Reasons */}
        <div className="mt-12 grid auto-rows-fr gap-4 md:grid-cols-3 sm:mt-14">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group flex h-full min-h-[220px] flex-col border border-[#0f5a2d]/10 bg-[#fffdf8] p-6 transition duration-400 hover:-translate-y-1 hover:border-[#c99a2e]/35 hover:shadow-[0_20px_55px_rgba(3,17,38,0.08)] sm:min-h-[235px] sm:p-7"
              >
                <div className="flex items-center gap-3 text-[#0f5a2d]">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0f5a2d]/[0.07]">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>
                </div>

                <div className="mt-auto pt-10">
                  <h3 className="font-[var(--font-cormorant)] text-[1.65rem] font-semibold leading-[1] tracking-[-0.035em] text-[#031126] sm:text-[1.8rem]">
                    {reason.title}
                  </h3>

                  <p className="mt-4 max-w-[320px] text-[13px] leading-6 text-[#617081] sm:text-[14px] sm:leading-7">
                    {reason.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Credibility strip */}
        {/* <div className="mt-5 grid overflow-hidden border border-[#0f5a2d]/15 bg-[#103e2b] text-white md:grid-cols-[1.25fr_0.75fr]">
          <div className="p-7 sm:p-8 lg:p-9">
            <div className="flex items-center gap-3 text-[#d8b64c]">
              <Landmark size={18} strokeWidth={1.6} />

              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Proven across institutions
              </span>
            </div>

            <h3 className="mt-5 max-w-[580px] font-[var(--font-cormorant)] text-[clamp(2rem,3.4vw,3.4rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
              Trusted across corporate, government and infrastructure projects.
            </h3>

            <p className="mt-5 max-w-[620px] text-[13px] leading-6 text-white/68 sm:text-[14px] sm:leading-7">
              Experience with leading developers, BMC, MMRDA, SRA and
              government-supported urban programmes brings practical insight
              across both approvals and execution.
            </p>
          </div>

          <div className="grid border-t border-white/10 sm:grid-cols-3 md:grid-cols-1 md:border-l md:border-t-0">
            {proofPoints.map((point, index) => (
              <div
                key={point.label}
                className={`p-5 sm:p-6 ${
                  index !== proofPoints.length - 1
                    ? "border-b border-white/10 sm:border-b-0 sm:border-r md:border-b md:border-r-0"
                    : ""
                }`}
              >
                <p className="font-[var(--font-cormorant)] text-[2.25rem] font-semibold leading-none tracking-[-0.04em] text-[#e0bd69]">
                  {point.value}
                </p>

                <p className="mt-2 text-[9px] font-black uppercase tracking-[0.15em] text-white/55 sm:text-[10px]">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}