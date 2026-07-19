import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { coreServices } from "@/src/data/site";

export const metadata = {
  title: "Services",
  description:
    "Environmental clearance, CRZ approvals, forest clearance, public infrastructure and redevelopment advisory services.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#faf9f4] pt-28">
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-16 sm:px-7 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[620px] w-[24%] opacity-[0.11] lg:block"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 120% 50%, transparent 0 28px, rgba(15,90,45,0.7) 29px 30px)",
          }}
        />

        <div className="container-shell relative z-10">
          <div className="max-w-6xl">
            <p className="eyebrow">Services</p>

            <h1 className="mt-5 max-w-5xl font-[var(--font-cormorant)] text-[clamp(2.8rem,5vw,5.3rem)] font-medium leading-[0.92] tracking-[-0.055em] text-[#031126]">
              Regulatory expertise for responsible development
            </h1>

            <p className="section-subtitle mt-7 max-w-3xl">
              Strategic advisory, technical assessment, statutory documentation
              and institutional coordination for complex development projects.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2">
            {coreServices.map((service, index) => (
              <article
                key={service.slug}
                className="
                  group flex min-h-full flex-col overflow-hidden
                  border border-[#031126]/10 bg-[#fffdf9]
                  text-[#031126] transition duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_24px_60px_rgba(3,17,38,0.12)]
                "
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#d9d8d1]">
                  <Image
                    src={service.image}
                    alt={`${service.title} service`}
                    fill
                    sizes="
                      (max-width: 767px) 100vw,
                      (max-width: 1279px) 50vw,
                      620px
                    "
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(3,17,38,0.32)_100%)]" />

                  <span className="absolute left-4 top-4 bg-[#fffdf9]/95 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.17em] text-[#7f5d1b] backdrop-blur-sm">
                    {service.label}
                  </span>

                  <span className="absolute bottom-4 right-4 text-[10px] font-bold tracking-[0.14em] text-white/85">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="h-[4px] bg-[#c99a2e]" />

                <div className="flex min-h-[310px] flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#7b8490]">
                    Advisory and approvals
                  </p>

                  <h2 className="mt-4 max-w-[480px] font-[var(--font-cormorant)] text-[1.9rem] font-semibold leading-[0.96] tracking-[-0.04em] text-[#031126] sm:text-[2.1rem]">
                    {service.title}
                  </h2>

                  <p className="mt-5 text-[13px] leading-6 text-[#647080] sm:text-[14px]">
                    {service.summary}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-5 pt-8">
                    <div className="max-w-[270px]">
                      <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#9097a0]">
                        Service expertise
                      </p>

                      <p className="mt-2 text-[12px] font-semibold leading-5 text-[#263142]">
                        {service.cta}
                      </p>
                    </div>

                    <Link
                      href={service.href}
                      aria-label={service.cta}
                      className="
                        grid h-11 w-11 shrink-0 place-items-center
                        bg-[#031126] text-white transition duration-300
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
              className="group inline-flex min-h-[52px] w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#173426] px-7 text-[12px] font-semibold text-white transition duration-300 hover:bg-[#0f5a2d] sm:w-auto"
            >
              Start a conversation

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}