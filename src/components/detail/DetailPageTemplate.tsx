import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
} from "lucide-react";

import type {
  DetailFact,
  DetailSection,
} from "@/src/data/site";

type RelatedLink = {
  label: string;
  href: string;
  description: string;
};

type DetailPageTemplateProps = {
  eyebrow: string;
  label: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  facts: readonly DetailFact[];
  sections: readonly DetailSection[];
  backHref: string;
  relatedTitle: string;
  relatedLinks: readonly RelatedLink[];
  ctaTitle: string;
  ctaBody: string;
};

export default function DetailPageTemplate({
  eyebrow,
  label,
  title,
  intro,
  image,
  imageAlt,
  facts,
  sections,
  backHref,
  relatedTitle,
  relatedLinks,
  ctaTitle,
  ctaBody,
}: DetailPageTemplateProps) {
  return (
    <main className="overflow-hidden bg-[#faf9f4] pt-28 text-[#031126]">
      {/* Hero */}
      <section className="relative isolate px-5 pb-20 pt-12 sm:px-7 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[620px] w-[24%] opacity-[0.1] lg:block"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 120% 50%, transparent 0 28px, rgba(15,90,45,0.7) 29px 30px)",
          }}
        />

        <div className="container-shell relative z-10">
          {/* <Link
            href={backHref}
            className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0f5a2d]"
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

          </Link> */}

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow">{eyebrow}</p>

              <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
                {label}
              </p>

              <h1 className="mt-5 max-w-[850px] font-[var(--font-cormorant)] text-[clamp(3rem,5.4vw,6rem)] font-medium leading-[0.9] tracking-[-0.058em] text-[#031126]">
                {title}
              </h1>

              <p className="mt-8 max-w-[720px] text-[16px] leading-8 text-[#596679] sm:text-[17px]">
                {intro}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#ddd9cf]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031126]/30 via-transparent to-transparent" />
              </div>

              <div className="h-[4px] bg-[#c99a2e]" />
            </div>
          </div>

          {/* Facts */}
          <div className="mt-14 grid border-l border-t border-[#031126]/10 sm:grid-cols-3 lg:mt-20">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="min-h-[130px] border-b border-r border-[#031126]/10 p-6"
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9b7426]">
                  {fact.label}
                </p>

                <p className="mt-4 font-[var(--font-cormorant)] text-[1.65rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#173426]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="border-y border-[#031126]/10 bg-[#fffdf9] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28">
        <div className="container-shell">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow">Scope of support</p>

                <h2 className="mt-5 max-w-[460px] font-[var(--font-cormorant)] text-[clamp(2.6rem,4vw,4.6rem)] font-medium leading-[0.94] tracking-[-0.05em]">
                  A coordinated approach from review to execution
                </h2>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-[#031126]/10">
                {sections.map((section, index) => (
                  <article
                    key={section.title}
                    className="border-b border-[#031126]/10 py-9 sm:py-11"
                  >
                    <div className="grid gap-6 sm:grid-cols-[54px_1fr]">
                      <p className="text-[10px] font-bold tracking-[0.18em] text-[#c99a2e]">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <div>
                        <h2 className="font-[var(--font-cormorant)] text-[clamp(2rem,3vw,3.25rem)] font-semibold leading-[0.97] tracking-[-0.04em] text-[#173426]">
                          {section.title}
                        </h2>

                        <p className="mt-6 max-w-[720px] text-[14px] leading-8 text-[#596679] sm:text-[15px]">
                          {section.body}
                        </p>

                        {section.items && section.items.length > 0 && (
                          <div className="mt-7 grid gap-3 sm:grid-cols-2">
                            {section.items.map((item) => (
                              <div
                                key={item}
                                className="flex items-start gap-3 border-t border-[#031126]/10 pt-3"
                              >
                                <Check
                                  size={15}
                                  strokeWidth={1.8}
                                  className="mt-1 shrink-0 text-[#0f5a2d]"
                                />

                                <p className="text-[13px] leading-6 text-[#4f5c6e]">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related content */}
      {relatedLinks.length > 0 && (
        <section className="px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28">
          <div className="container-shell">
            <p className="eyebrow">Continue exploring</p>

            <h2 className="mt-5 font-[var(--font-cormorant)] text-[clamp(2.5rem,4vw,4.5rem)] font-medium leading-[0.94] tracking-[-0.05em]">
              {relatedTitle}
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex min-h-[220px] flex-col border border-[#031126]/10 bg-[#fffdf9] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(3,17,38,0.09)]"
                >
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.6}
                    className="ml-auto text-[#c99a2e] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                  <h3 className="mt-auto font-[var(--font-cormorant)] text-[1.9rem] font-semibold leading-[0.98] tracking-[-0.035em]">
                    {item.label}
                  </h3>

                  <p className="mt-4 text-[12px] leading-6 text-[#667080]">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-[#031126]/10 bg-[#f7f5ee] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-8 rounded-[2rem] bg-[#f1e6b8] px-7 py-9 sm:px-10 sm:py-11 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-12">
            <div className="max-w-2xl">
              <p className="font-[var(--font-cormorant)] text-[clamp(1.8rem,2.5vw,2.5rem)] leading-[1.05] tracking-[-0.025em] text-[#173426]">
                {ctaTitle}
              </p>

              <p className="mt-3 max-w-xl text-[14px] leading-7 text-[#536159] sm:text-[15px]">
                {ctaBody}
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