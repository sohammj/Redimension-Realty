import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/src/data/site";

export const metadata = {
  title: "Blog & Insights",
  description:
    "Regulatory insights, environmental advisory articles and coastal compliance updates from Redimension Realty.",
};

export default function BlogPage() {
  return (
    <main className="overflow-hidden bg-[#faf9f4] pt-28">
      <section className="relative isolate px-5 pb-20 pt-16 sm:px-7 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        {/* Decorative circular lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[620px] w-[24%] opacity-[0.1] lg:block"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 120% 50%, transparent 0 28px, rgba(15,90,45,0.7) 29px 30px)",
          }}
        />

        <div className="container-shell relative z-10">
          {/* Page heading */}
          <div className="max-w-6xl">
            <p className="eyebrow">Blog & Insights</p>

            <h1 className="mt-5 max-w-5xl font-[var(--font-cormorant)] text-[clamp(2.8rem,5vw,5.3rem)] font-medium leading-[0.92] tracking-[-0.055em] text-[#031126]">
              Regulatory intelligence for responsible development
            </h1>

            <p className="section-subtitle mt-7 max-w-3xl">
              Perspectives on environmental clearance, coastal regulation,
              forest approvals, statutory compliance and the evolving
              development landscape.
            </p>
          </div>

          {/* Insights grid */}
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {blogPosts.map((post, index) => {
              const isFeatured = index === 0;

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`
                    group
                    relative
                    flex min-h-[390px] flex-col
                    overflow-hidden
                    border border-[#031126]/10
                    bg-[#fffdf9]
                    p-7
                    text-[#031126]
                    transition duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_24px_60px_rgba(3,17,38,0.1)]
                    sm:p-9
                    ${isFeatured ? "lg:row-span-2 lg:min-h-full" : ""}
                  `}
                >
                  {/* Gold accent */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-[#c99a2e]" />

                  {/* Category and number */}
                  <div className="flex items-start justify-between gap-6">
                    <p className="text-[9px] font-bold uppercase tracking-[0.19em] text-[#a7781e]">
                      {post.category}
                    </p>

                    <span className="font-[var(--font-cormorant)] text-[1.1rem] font-semibold text-[#c99a2e]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {isFeatured && (
                    <p className="mt-14 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8a929d]">
                      Featured insight
                    </p>
                  )}

                  {/* Article title */}
                  <h2
                    className={`
                      max-w-[620px]
                      font-[var(--font-cormorant)]
                      font-semibold
                      tracking-[-0.045em]
                      text-[#031126]
                      transition-colors duration-300
                      group-hover:text-[#0f5a2d]
                      ${
                        isFeatured
                          ? "mt-5 text-[clamp(2.5rem,4.4vw,4.8rem)] leading-[0.92]"
                          : "mt-10 text-[clamp(2rem,3vw,3rem)] leading-[0.96]"
                      }
                    `}
                  >
                    {post.title}
                  </h2>

                  <p className="mt-6 max-w-2xl text-[14px] leading-7 text-[#657080] sm:text-[15px]">
                    {post.excerpt}
                  </p>

                  {/* Card footer */}
                  <div className="mt-auto flex items-end justify-between gap-6 border-t border-[#031126]/10 pt-10">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#9299a2]">
                        Redimension Realty
                      </p>

                      <p className="mt-2 text-[12px] font-semibold text-[#344052]">
                        Regulatory knowledge series
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
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
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Publishing note */}
          <div className="mt-12 flex flex-col gap-5 border-y border-[#031126]/10 py-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-[13px] leading-6 text-[#6c7581]">
              New perspectives on environmental, forest and coastal regulation
              will be added as the knowledge library develops.
            </p>

            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0f5a2d]"
            >
              Request an advisory discussion

              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#031126]/10 bg-[#f7f5ee] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-8 rounded-[2rem] bg-[#f1e6b8] px-7 py-9 sm:px-10 sm:py-11 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-12">
            <div className="max-w-2xl">
              <p className="font-[var(--font-cormorant)] text-[clamp(1.8rem,2.5vw,2.5rem)] leading-[1.05] tracking-[-0.025em] text-[#173426]">
                Need clarity on a regulatory requirement?
              </p>

              <p className="mt-3 max-w-xl text-[14px] leading-7 text-[#536159] sm:text-[15px]">
                Speak with our team about environmental, coastal, forest and
                statutory requirements affecting your project.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="group inline-flex min-h-[52px] w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#173426] px-7 text-[12px] font-semibold tracking-[0.04em] text-white transition duration-300 hover:bg-[#0f5a2d] sm:w-auto"
            >
              <span>Start a conversation</span>

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