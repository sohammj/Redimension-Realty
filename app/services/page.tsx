import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { coreServices } from "@/src/data/site";

export const metadata = {
  title: "Services",
  description:
    "Environmental clearance, CRZ approvals, forest clearance, regulatory strategy, statutory documentation and ESG advisory services.",
};

/*
  Temporary Unsplash images.

  The title-based resolver means the correct type of photograph is selected
  even if you rearrange the services inside src/data/site.ts.
*/
// const serviceImages = {
//   environmental:
//     "https://images.unsplash.com/photo-1767917920879-dca2df5f1868?auto=format&fit=crop&w=1600&q=80",

//   forest:
//     "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",

//   coastal:
//     "https://images.unsplash.com/photo-1750715832891-01d5bd941cf8?auto=format&fit=crop&w=1600&q=80",

//   infrastructure:
//     "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",

//   redevelopment:
//     "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",

//   documentation:
//     "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",

//   sustainability:
//     "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1600&q=80",

//   advisory:
//     "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
// } as const;

// function getServiceImage(title: string) {
//   const normalizedTitle = title.toLowerCase();

//   // Forest must come before environmental.
//   if (
//     normalizedTitle.includes("forest") ||
//     normalizedTitle.includes("tree")
//   ) {
//     return serviceImages.forest;
//   }

//   if (
//     normalizedTitle.includes("environment") ||
//     normalizedTitle.includes("eia") ||
//     normalizedTitle.includes("ecology")
//   ) {
//     return serviceImages.environmental;
//   }

//   if (
//     normalizedTitle.includes("crz") ||
//     normalizedTitle.includes("coastal") ||
//     normalizedTitle.includes("czma")
//   ) {
//     return serviceImages.coastal;
//   }

//   if (
//     normalizedTitle.includes("infrastructure") ||
//     normalizedTitle.includes("bmc") ||
//     normalizedTitle.includes("mmrda") ||
//     normalizedTitle.includes("amrut")
//   ) {
//     return serviceImages.infrastructure;
//   }

//   if (
//     normalizedTitle.includes("redevelopment") ||
//     normalizedTitle.includes("sra") ||
//     normalizedTitle.includes("housing")
//   ) {
//     return serviceImages.redevelopment;
//   }

//   if (
//     normalizedTitle.includes("document") ||
//     normalizedTitle.includes("statutory") ||
//     normalizedTitle.includes("compliance")
//   ) {
//     return serviceImages.documentation;
//   }

//   if (
//     normalizedTitle.includes("esg") ||
//     normalizedTitle.includes("sustainability") ||
//     normalizedTitle.includes("sustainable")
//   ) {
//     return serviceImages.sustainability;
//   }

//   return serviceImages.advisory;
// }

// function getServiceLabel(title: string) {
//   const normalizedTitle = title.toLowerCase();

//   if (
//     normalizedTitle.includes("environment") ||
//     normalizedTitle.includes("forest")
//   ) {
//     return "Environmental advisory";
//   }

//   if (
//     normalizedTitle.includes("crz") ||
//     normalizedTitle.includes("coastal")
//   ) {
//     return "Coastal regulation";
//   }

//   if (
//     normalizedTitle.includes("infrastructure") ||
//     normalizedTitle.includes("bmc") ||
//     normalizedTitle.includes("mmrda")
//   ) {
//     return "Public infrastructure";
//   }

//   if (
//     normalizedTitle.includes("redevelopment") ||
//     normalizedTitle.includes("sra")
//   ) {
//     return "Redevelopment advisory";
//   }

//   if (
//     normalizedTitle.includes("document") ||
//     normalizedTitle.includes("statutory")
//   ) {
//     return "Technical documentation";
//   }

//   if (
//     normalizedTitle.includes("esg") ||
//     normalizedTitle.includes("sustainability")
//   ) {
//     return "Sustainability advisory";
//   }

//   return "Regulatory advisory";
// }

export default function ServicesPage() {
  return (
    <main className="bg-[#faf9f4] pt-28">
      {/* Services */}
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-16 sm:px-7 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        {/* Decorative circular lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[620px] w-[24%] opacity-[0.11] lg:block"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 120% 50%, transparent 0 28px, rgba(15,90,45,0.7) 29px 30px)",
          }}
        />

        <div className="container-shell relative z-10">
          {/* Page heading */}
          <div className="max-w-6xl">
            <p className="eyebrow">Services</p>

            <h1
              className="
                mt-5
                max-w-5xl
                font-[var(--font-cormorant)]
                text-[clamp(2.8rem,5vw,5.3rem)]
                font-medium
                leading-[0.92]
                tracking-[-0.055em]
                text-[#031126]
              "
            >
              Regulatory expertise for responsible development
            </h1>

            <p className="section-subtitle mt-7 max-w-3xl">
              Strategic advisory, technical assessment, statutory documentation
              and institutional liaisoning support for complex development
              projects.
            </p>
          </div>

          {/* Service grid */}
          <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 xl:grid-cols-3">
            {coreServices.map((service, index) => (
              <article
                key={service.title}
                className="
                  group
                  flex min-h-full flex-col
                  overflow-hidden
                  border border-[#031126]/10
                  bg-[#fffdf9]
                  text-[#031126]
                  transition duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_24px_60px_rgba(3,17,38,0.12)]
                "
              >
                {/* Service image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#d9d8d1]">
                  {/* <Image
                    src={getServiceImage(service.title)}
                    alt={`${service.title} advisory service`}
                    fill
                    sizes="
                      (max-width: 767px) 100vw,
                      (max-width: 1279px) 50vw,
                      420px
                    "
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  /> */}
                  <Image
                    src={service.image}
                    alt={`${service.title} service`}
                    fill
                    sizes="
                      (max-width: 767px) 100vw,
                      (max-width: 1279px) 50vw,
                      420px
                    "
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(3,17,38,0.32)_100%)]" />

                  <span className="absolute left-4 top-4 bg-[#fffdf9]/95 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.17em] text-[#7f5d1b] backdrop-blur-sm">
                    {/* {getServiceLabel(service.title)} */}
                    {service.label}
                  </span>

                  <span className="absolute bottom-4 right-4 text-[10px] font-bold tracking-[0.14em] text-white/85">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Gold divider */}
                <div className="h-[4px] bg-[#c99a2e]" />

                {/* Service information */}
                <div className="flex min-h-[285px] flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#7b8490]">
                    Advisory and approvals
                  </p>

                  <h2 className="mt-4 max-w-[340px] font-[var(--font-cormorant)] text-[1.9rem] font-semibold leading-[0.96] tracking-[-0.04em] text-[#031126] sm:text-[2.1rem]">
                    {service.title}
                  </h2>

                  <p className="mt-5 text-[13px] leading-6 text-[#647080] sm:text-[14px]">
                    {service.summary}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-5 pt-8">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#9097a0]">
                        Redimension Realty
                      </p>

                      <p className="mt-2 text-[13px] font-semibold text-[#263142]">
                        End-to-end project support
                      </p>
                    </div>

                    <Link
                      href="/contact-us"
                      aria-label={`Discuss ${service.title}`}
                      className="
                        grid h-11 w-11 shrink-0 place-items-center
                        bg-[#031126] text-white
                        transition duration-300
                        group-hover:bg-[#c99a2e]
                        group-hover:text-[#031126]
                      "
                    >
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.6}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#031126]/10 bg-[#f7f5ee] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28">
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