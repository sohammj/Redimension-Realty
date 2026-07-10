"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

type Project = {
  name: string;
  status: string;
  location: string;
  client: string;
  service: string;
  image?: string;
};

type FeaturedProjectsSectionProps = {
  projects: readonly Project[];
};

export default function FeaturedProjectsSection({
  projects,
}: FeaturedProjectsSectionProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const loopedProjects = [...projects, ...projects, ...projects];

  const getCardStep = () => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | null;

    if (!track || !firstCard) return 0;

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(
      styles.columnGap || styles.gap || "0",
    );

    return firstCard.getBoundingClientRect().width + gap;
  };

  const getSetWidth = () => getCardStep() * projects.length;

  useEffect(() => {
    const track = trackRef.current;

    if (!track || projects.length === 0) return;

    const positionInMiddleSet = () => {
      track.scrollLeft = getSetWidth();
    };

    const frame = window.requestAnimationFrame(positionInMiddleSet);

    const resizeObserver = new ResizeObserver(() => {
      positionInMiddleSet();
    });

    resizeObserver.observe(track);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();

      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, [projects.length]);

  const normaliseLoop = () => {
    const track = trackRef.current;
    const setWidth = getSetWidth();

    if (!track || !setWidth) return;

    const currentBehaviour = track.style.scrollBehavior;
    track.style.scrollBehavior = "auto";

    if (track.scrollLeft < setWidth * 0.5) {
      track.scrollLeft += setWidth;
    } else if (track.scrollLeft > setWidth * 1.5) {
      track.scrollLeft -= setWidth;
    }

    track.style.scrollBehavior = currentBehaviour;
  };

  const handleScroll = () => {
    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }

    scrollTimerRef.current = setTimeout(normaliseLoop, 120);
  };

  const scrollProjects = (direction: "previous" | "next") => {
    const track = trackRef.current;
    const step = getCardStep();

    if (!track || !step) return;

    track.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  if (projects.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[#345b38] py-16 text-white sm:py-20 lg:py-24">
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24%] opacity-[0.1] lg:block"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(185,216,103,0.42) 1px, transparent 1px), linear-gradient(-45deg, rgba(185,216,103,0.2) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d8b64c] sm:text-[11px]">
              Selected Work
            </p>

            <h2 className="mt-4 max-w-[600px] font-[var(--font-cormorant)] text-[clamp(2.8rem,4.8vw,4.9rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-[#f7f3e9]">
              Featured projects.
            </h2>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <p className="max-w-[510px] text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-8">
              Selected engagements across regulatory advisory, urban
              redevelopment, public infrastructure and institutional
              development.
            </p>

          </div>
        </div>

        {/* Contained carousel: exactly 3 desktop cards */}
        <div className="mt-11 overflow-hidden sm:mt-14">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="
              flex snap-x snap-mandatory gap-4 overflow-x-auto
              pb-3 sm:gap-5
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {loopedProjects.map((project, index) => (
              <article
                key={`${project.name}-${index}`}
                className="
                  group flex shrink-0 snap-start flex-col overflow-hidden
                  bg-[#efeee4] text-[#172219]
                  transition-transform duration-500
                  w-full
                  sm:w-[calc((100%-1.25rem)/2)]
                  lg:w-[calc((100%-2.5rem)/3)]
                "
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#d9ddcf]">
                  <Image
                    src={
                      project.image ??
                      "/images/redimension-hero.png"
                    }
                    alt={`${project.name} project`}
                    fill
                    sizes="
                      (max-width: 639px) 100vw,
                      (max-width: 1023px) 50vw,
                      420px
                    "
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(3,17,38,0.2)_100%)]" />

                  <span className="absolute left-4 top-4 bg-[#f5f1e8]/95 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.17em] text-[#0f5a2d] backdrop-blur-sm">
                    {project.status}
                  </span>
                </div>

                <div className="h-[4px] bg-[#c6e53f]" />

                {/* Content */}
                <div className="flex min-h-[245px] flex-1 flex-col p-6 sm:min-h-[260px] sm:p-7">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#6c786b]">
                    {project.location}
                  </p>

                  <h3 className="mt-4 max-w-[330px] font-[var(--font-cormorant)] text-[1.85rem] font-semibold leading-[0.96] tracking-[-0.04em] text-[#172219] sm:text-[2rem]">
                    {project.name}
                  </h3>

                  <p className="mt-4 line-clamp-2 text-[13px] leading-6 text-[#687066] sm:text-[14px]">
                    {project.service}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                    <div className="min-w-0">
                      <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#8a9187]">
                        Client / Authority
                      </p>

                      <p className="mt-2 truncate text-[13px] font-semibold text-[#30392f]">
                        {project.client}
                      </p>
                    </div>

                    <Link
                      href="/projects"
                      aria-label={`View ${project.name}`}
                      className="grid h-10 w-10 shrink-0 place-items-center bg-white text-[#213127] transition duration-300 group-hover:bg-[#c6e53f]"
                    >
                      <ArrowUpRight
                        size={17}
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
        <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollProjects("previous")}
                aria-label="Previous project"
                className="grid h-11 w-11 place-items-center border border-white/20 text-white transition duration-300 hover:border-[#c5df70] hover:bg-[#c5df70] hover:text-[#17361f]"
              >
                <ArrowLeft size={18} strokeWidth={1.6} />
              </button>

              <button
                type="button"
                onClick={() => scrollProjects("next")}
                aria-label="Next project"
                className="grid h-11 w-11 place-items-center border border-white/20 text-white transition duration-300 hover:border-[#c5df70] hover:bg-[#c5df70] hover:text-[#17361f]"
              >
                <ArrowRight size={18} strokeWidth={1.6} />
              </button>
            </div>

        <div className="mt-6 flex justify-end">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.19em] text-[#d8b64c]"
          >
            Explore all projects

            <ArrowUpRight
              size={16}
              strokeWidth={1.6}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}