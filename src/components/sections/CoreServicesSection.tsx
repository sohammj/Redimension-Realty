"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import TextType from "@/src/components/ui/TextType";
const services = [
  {
    title: "Environmental & Regulatory Advisory",
    text:
      "Environmental clearances, forest clearances, coastal regulatory liaisoning and statutory compliance support.",
    href: "/services/environmental-forest-clearance",
  },
  {
    title: "Redevelopment & SRA Projects",
    text:
      "Redevelopment, SRA housing and building construction projects across the Mumbai Metropolitan Region.",
    href: "/services/redevelopment-sra-construction",
  },
  {
    title: "BMC / MMRDA Infrastructure",
    text:
      "BMC, MMRDA and government-backed construction, infrastructure and urban development projects.",
    href: "/services/bmc-mmrda-public-infrastructure",
  },
];

export default function CoreServicesSection() {
  const router = useRouter();

  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (
    event: React.MouseEvent<HTMLElement>,
    href: string,
  ) => {
    event.currentTarget.classList.add("is-active");

    window.setTimeout(() => {
      router.push(href);
    }, 220);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#345b38] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[26%] opacity-[0.12] lg:block"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(185,216,103,0.38) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Left: Heading */}
          <div className="relative">
            {/* Invisible text reserves the final heading height */}
            <h2
              aria-hidden="true"
              className="
                invisible
                max-w-[760px]
                font-[var(--font-cormorant)]
                text-[clamp(2.4rem,3.75vw,4.35rem)]
                leading-[1.07]
                tracking-[-0.04em]
              "
            >
              Integrated expertise across environment, infrastructure and
              development.
            </h2>

            {/* Typing animation sits over the reserved space */}
            {hasEnteredView && (
              <div className="absolute inset-0">
                <TextType
                  text="Integrated expertise across environment, infrastructure and development."
                  typingSpeed={30}
                  showCursor
                  cursorCharacter="|"
                  cursorBlinkDuration={0.5}
                  loop={false}
                  className="
                    block
                    max-w-[760px]
                    font-[var(--font-cormorant)]
                    text-[clamp(2.4rem,3.75vw,4.35rem)]
                    leading-[1.07]
                    tracking-[-0.04em]
                    text-[#f8f5ed]
                  "
                />
              </div>
            )}
          </div>

          {/* Right: Description */}
          <div className="flex lg:justify-end">
            <p className="max-w-[510px] text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-8">
              From regulatory approvals and environmental clearances to
              redevelopment and public infrastructure, our services support
              projects through every stage of complexity.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="mt-10 grid auto-rows-fr gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              role="link"
              tabIndex={0}
              aria-label={`View ${service.title}`}
              onClick={(event) =>
                handleCardClick(event, service.href)
              }
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  router.push(service.href);
                }
              }}
              className="
                service-card
                group
                relative
                h-full
                min-h-[270px]
                cursor-pointer
                bg-white/20
                p-px
                outline-none
                [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]
                transition-[clip-path,background-color]
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:bg-[#b9d867]
                hover:[clip-path:polygon(0_0,100%_0,100%_82%,84%_100%,0_100%)]
                focus-visible:bg-[#b9d867]
                sm:min-h-[285px]
                lg:min-h-[300px]
                [&.is-active]:bg-[#b9d867]
                [&.is-active]:[clip-path:polygon(0_0,100%_0,100%_82%,84%_100%,0_100%)]
              "
            >
              <div
                className="
                  flex
                  h-full
                  w-full
                  flex-col
                  bg-[#345b38]
                  p-6
                  [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]
                  transition-[clip-path,background-color]
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:bg-[#365f3a]
                  group-hover:[clip-path:polygon(0_0,100%_0,100%_82%,84%_100%,0_100%)]
                  sm:p-7
                  lg:p-8
                  group-[.is-active]:bg-[#365f3a]
                  group-[.is-active]:[clip-path:polygon(0_0,100%_0,100%_82%,84%_100%,0_100%)]
                "
              >
                {/* Number */}
                <span className="text-[10px] font-semibold tracking-[0.24em] text-[#d8b64c] sm:text-[11px]">
                  0{index + 1}
                </span>

                {/* Content */}
                <div className="mt-auto pt-10 sm:pt-12">
                  <h3
                    className="
                      max-w-[320px]
                      font-serif
                      text-[1.5rem]
                      leading-[1.08]
                      tracking-[-0.025em]
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[#c4df72]
                      sm:text-[1.65rem]
                      lg:text-[1.75rem]
                      group-[.is-active]:text-[#c4df72]
                    "
                  >
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-[340px] text-[13px] leading-6 text-white/70 sm:mt-5 sm:text-[14px] sm:leading-7">
                    {service.text}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 inline-flex text-[#b9d867] sm:mt-7">
                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.5}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-[.is-active]:-translate-y-0.5
                        group-[.is-active]:translate-x-0.5
                      "
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="mt-10 flex justify-end sm:mt-12">
          <button
            onClick={() => router.push("/services")}
            className="
              group
              inline-flex
              items-center
              gap-4
              border-b
              border-[#b9d867]
              pb-2
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#f8f5ed]
              transition-colors
              duration-300
              hover:text-[#c4df72]
            "
          >
            View All Services

            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
}