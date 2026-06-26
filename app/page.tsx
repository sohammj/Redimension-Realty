import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  ShieldCheck,
} from "lucide-react";
import {
  approach,
  businessSegments,
  coreServices,
  featuredProjects,
  sectors,
  siteConfig,
  values,
} from "@/src/data/site";

export default function Home() {
  const clientLogos = [
    { name: "Afcons Infrastructure", src: "/logo/afcons.png" },
    { name: "BMC", src: "/logo/bmc.png" },
    { name: "Dalmia Cement", src: "/logo/dalmia.png" },
    { name: "Godrej Properties", src: "/logo/godrej.png" },
    { name: "Mahindra", src: "/logo/mahindra.png" },
    { name: "MMRDA", src: "/logo/mmrda.png" },
    { name: "Shapoorji Pallonji", src: "/logo/shapoorji-pallonji.svg" },
  ];

  const loopClients = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-[#031126] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/images/redimension-hero.png')" }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#031126]/95 via-[#031126]/65 to-[#031126]/20" /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#031126] via-transparent to-transparent" />

        <div className="container-shell relative flex min-h-screen items-center pt-28">
          <div className="max-w-3xl">

            {/* <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.075em] sm:text-6xl lg:text-8xl">
              Enabling sustainable development with regulatory clarity.
            </h1> */}

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              {siteConfig.shortName} supports real estate, infrastructure, hospitality,
              industrial and public-sector projects with environmental, forest, coastal and
              statutory approval advisory across India.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#c99a2e] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#031126] transition hover:bg-[#f5e7bd]"
              >
                Request Consultation <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>

            {/* <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["18+", "Years Experience"],
                ["25–30+", "Companies Advised"],
                ["Pan-India", "Advisory"],
                ["BMC/MMRDA", "Govt. Exposure"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur">
                  <p className="text-xl font-black text-white">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/45">{label}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">Company Snapshot</p>
              <h2 className="section-title mt-4">A specialist advisory firm for complex approvals.</h2>
            </div>
            <p className="section-subtitle">
              Redimension Realty operates at the intersection of regulatory governance,
              sustainable development and project facilitation — combining technical documentation,
              institutional coordination and execution-focused liaisoning.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {businessSegments.map((segment, index) => (
              <div key={segment.title} className="premium-card rounded-[2rem] p-6">
                <p className="text-sm font-black text-[#c99a2e]">0{index + 1}</p>
                <h3 className="mt-5 text-xl font-black tracking-[-0.04em] text-[#031126]">
                  {segment.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#526174]">{segment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding coastal-pattern bg-[#fbfaf5]">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Core Services</p>
            <h2 className="section-title mt-4">Regulatory strategy, documentation and approvals support.</h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <Link
                href="/services"
                key={service.title}
                className="group rounded-[2rem] border border-[#c99a2e]/20 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-7 grid h-14 w-14 place-items-center rounded-full bg-[#0f5a2d]/10 text-[#0f5a2d]">
                  <Leaf />
                </div>
                <h3 className="text-xl font-black tracking-[-0.04em] text-[#031126]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#526174]">{service.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#0f5a2d]">
                  Learn more <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#031126] text-white">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">Our Approach</p>
              <h2 className="mt-4 text-5xl font-black leading-none tracking-[-0.06em]">
                Structured, compliant and execution-driven.
              </h2>
              <p className="mt-6 text-white/60 leading-8">
                Every engagement is designed to reduce approval ambiguity, align stakeholders and
                support responsible development outcomes.
              </p>
            </div>

            <div className="grid gap-4">
              {approach.map((step, index) => (
                <div key={step} className="flex items-center gap-5 rounded-full border border-white/10 bg-white/5 p-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#c99a2e] font-black text-[#031126]">
                    {index + 1}
                  </span>
                  <span className="font-bold text-white/82">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Why Choose Us</p>
              <h2 className="section-title mt-4">Domain depth with institutional credibility.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-[#071b3a]/10 p-6">
                  <ShieldCheck className="text-[#0f5a2d]" />
                  <h3 className="mt-5 text-xl font-black tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#526174]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       <section className="overflow-hidden py-16">
        <div className="container-shell">
          <div className="text-center">
            <p className="eyebrow">Trusted By</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">
              Associated with leading developers, infrastructure groups and public institutions.
            </h2>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden py-10">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-white to-transparent" />

          <div className="logo-loop items-center gap-20">
            {loopClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex h-20 min-w-40 items-center justify-center"
              >
                <Image
                  src={client.src}
                  alt={`${client.name} logo`}
                  width={180}
                  height={80}
                  unoptimized
                  className="max-h-14 w-auto object-contain opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#fbfaf5]">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Featured Projects</p>
              <h2 className="section-title mt-4">Project and institutional exposure.</h2>
            </div>
            <Link href="/projects" className="font-black uppercase tracking-[0.14em] text-[#0f5a2d]">
              View Projects →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <div key={project.name} className="glass-card rounded-[2rem] p-7">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c99a2e]">
                  {project.status}
                </p>
                <h3 className="mt-4 text-2xl font-black tracking-[-0.05em]">{project.name}</h3>
                <div className="mt-5 space-y-2 text-sm leading-7 text-[#526174]">
                  <p><strong>Location:</strong> {project.location}</p>
                  <p><strong>Client:</strong> {project.client}</p>
                  <p><strong>Service:</strong> {project.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* 
      <section className="overflow-hidden bg-white py-16">
        <div className="container-shell">
          <div className="text-center">
            <p className="eyebrow">Trusted By</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">
              Associated with leading developers, infrastructure groups and public institutions.
            </h2>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden border-y border-[#071b3a]/10 bg-[#fbfaf5] py-7">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#fbfaf5] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#fbfaf5] to-transparent" />

          <div className="logo-loop items-center gap-6">
            {loopClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="mx-3 flex h-24 min-w-56 items-center justify-center rounded-3xl border border-[#071b3a]/10 bg-white px-8 shadow-sm"
              >
                <Image
                  src={client.src}
                  alt={`${client.name} logo`}
                  width={180}
                  height={80}
                  unoptimized
                  className="max-h-14 w-auto object-contain transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* <section className="section-padding bg-[#031126] text-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow">Sectors Served</p>
              <h2 className="mt-4 text-5xl font-black leading-none tracking-[-0.06em]">
                Built for complex development environments.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {sectors.map((sector) => (
                <div key={sector} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-4">
                  <CheckCircle2 className="text-[#c99a2e]" size={18} />
                  <span className="text-sm font-bold text-white/72">{sector}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-[2.5rem] bg-white p-8 text-[#031126] md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="eyebrow">Get In Touch</p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">
                  Need regulatory clarity for your next project?
                </h2>
              </div>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0f5a2d] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white"
              >
                Contact Team <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}