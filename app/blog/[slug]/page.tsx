import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { blogPosts } from "@/src/data/site";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find(
    (item) => item.slug === slug,
  );

  if (!post) {
    return {
      title: "Article Not Found | Redimension Realty",
    };
  }

  return {
    title: `${post.title} | Redimension Realty`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const post = blogPosts.find(
    (item) => item.slug === slug,
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#faf9f4] pt-28">

      {/* Article Header */}
      <section className="relative overflow-hidden border-b border-[#031126]/10 px-5 pb-16 pt-16 sm:px-7 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">

        {/* Decorative pattern */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            hidden
            h-[620px]
            w-[24%]
            opacity-[0.1]
            lg:block
          "
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 120% 50%, transparent 0 28px, rgba(15,90,45,0.7) 29px 30px)",
          }}
        />

        <div className="container-shell relative z-10">


          {/* Category */}
          <p className="mt-14 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a7781e]">
            {post.category}
          </p>

          {/* Title */}
          <h1
            className="
              mt-5
              max-w-5xl
              font-[var(--font-cormorant)]
              text-[clamp(2.8rem,6vw,6.5rem)]
              font-medium
              leading-[0.9]
              tracking-[-0.06em]
              text-[#031126]
            "
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-medium text-[#697381]">
            <span>{post.date}</span>

            <span className="h-1 w-1 rounded-full bg-[#c99a2e]" />

            <span>{post.readTime}</span>

            <span className="h-1 w-1 rounded-full bg-[#c99a2e]" />

            <span>{post.author}</span>
          </div>

          {/* Intro */}
          <p className="mt-10 max-w-3xl text-[16px] leading-8 text-[#596474] sm:text-[18px] sm:leading-9">
            {post.excerpt}
          </p>

        </div>
      </section>

      {/* Article Content */}
      <section className="px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="container-shell">

          <div className="grid gap-14 lg:grid-cols-[minmax(0,760px)_260px] lg:justify-between">

            {/* Content */}
            <article className="max-w-3xl">

              {post.content.map((section) => (
                <section
                  key={section.heading}
                  className="mb-14 last:mb-0"
                >
                  <h2
                    className="
                      font-[var(--font-cormorant)]
                      text-[clamp(2rem,3vw,3rem)]
                      font-semibold
                      leading-[0.95]
                      tracking-[-0.04em]
                      text-[#031126]
                    "
                  >
                    {section.heading}
                  </h2>

                  <div className="mt-6 space-y-5">
                    {section.paragraphs.map(
                      (paragraph) => (
                        <p
                          key={paragraph}
                          className="
                            text-[15px]
                            leading-8
                            text-[#596474]
                            sm:text-[16px]
                            sm:leading-9
                          "
                        >
                          {paragraph}
                        </p>
                      ),
                    )}
                  </div>
                </section>
              ))}

            </article>

            {/* Article Sidebar */}
            <aside className="hidden lg:block">

              <div className="sticky top-32 border-t border-[#031126]/15 pt-5">

                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8c949e]">
                  Article
                </p>

                <p className="mt-3 text-[14px] font-semibold leading-6 text-[#263142]">
                  {post.category}
                </p>

                <div className="mt-8 h-px bg-[#031126]/10" />

                <Link
                  href="/contact-us"
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#0f5a2d]
                  "
                >
                  Discuss your project

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.6}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </Link>

              </div>

            </aside>

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
              className="
                group
                inline-flex
                min-h-[52px]
                w-full
                shrink-0
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#173426]
                px-7
                text-[12px]
                font-semibold
                tracking-[0.04em]
                text-white
                transition
                duration-300
                hover:bg-[#0f5a2d]
                sm:w-auto
              "
            >
              <span>Start a conversation</span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-1
                "
              />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}