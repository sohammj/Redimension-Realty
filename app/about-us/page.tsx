import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Redimension Realty | Environmental Advisory Mumbai",
  description:
    "Learn about Redimension Realty’s environmental, forest, coastal and infrastructure regulatory advisory practice, approach and leadership in Mumbai.",
};

const companyValues = [
  {
    number: "01",
    title: "Integrity",
    description:
      "Candid, confidential advice grounded in statutory requirements, professional responsibility and sound judgement.",
  },
  {
    number: "02",
    title: "Precision",
    description:
      "Careful analysis, disciplined documentation and close attention to every regulatory dependency and project requirement.",
  },
  {
    number: "03",
    title: "Accountability",
    description:
      "Clear ownership of responsibilities, communication and the work entrusted to our team throughout an engagement.",
  },
  {
    number: "04",
    title: "Responsible Development",
    description:
      "Enabling growth that respects environmental safeguards, institutional processes and the communities projects serve.",
  },
];

const leadershipExperience = [
  "Environmental and forest regulatory advisory",
  "CRZ and coastal regulatory consulting",
  "Real estate and infrastructure development",
  "Authority and multidisciplinary stakeholder coordination",
];

const selectedClients = [
  "Godrej Properties",
  "K Raheja Corp",
  "Mahindra Holidays & Resorts India",
  "Shapoorji Pallonji Group",
  "Afcons Infrastructure",
  "Dalmia Cement",
  "Puravankara",
  "Embassy Developments",
];

const institutionalAssociations = [
  {
    name: "Brihanmumbai Municipal Corporation",
    shortName: "BMC",
    // context: "Public-utility and urban infrastructure projects",
  },
  {
    name: "Mumbai Metropolitan Region Development Authority",
    shortName: "MMRDA",
    // context: "Metropolitan infrastructure project coordination",
  },
  {
    name: "Slum Rehabilitation Authority, Maharashtra",
    shortName: "SRA",
    // context: "Urban redevelopment and affordable-housing initiatives",
  },
  {
    name: "Atal Mission for Rejuvenation and Urban Transformation",
    shortName: "AMRUT",
    // context: "Urban water and municipal infrastructure initiatives",
  },
];

export default function AboutUsPage() {
  return (
    <main className="overflow-hidden bg-[#f7f5ee] pt-[108px] text-[#031126] lg:pt-[88px]">
      {/* Overview and company purpose */}
      <section
        id="overview"
        className="relative scroll-mt-32 overflow-hidden border-b border-[#031126]/10 bg-[#f7f5ee]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-36 hidden h-52 w-52 rotate-45 border-[38px] border-[#173426]/[0.035] lg:block"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-2 top-[440px] hidden h-14 w-44 bg-[#173426]/[0.035] lg:block"
        />

        <div className="container-shell px-5 pb-20 pt-14 sm:px-7 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Editorial copy */}
            <div className="relative z-10 lg:col-span-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9b7426]">
                About Redimension Realty
              </p>

              <h1 className="mt-6 max-w-[610px] font-[var(--font-cormorant)] text-[clamp(3.15rem,4.9vw,5.35rem)] font-medium leading-[0.94] tracking-[-0.05em] text-[#173426]">
                Regulatory advice grounded in project realities.
              </h1>

              <div
                id="company-story"
                className="mt-9 max-w-[620px] scroll-mt-32 space-y-6 text-[16px] leading-[1.82] text-[#435066]"
              >
                <p>
                  Redimension Realty Private Limited is a Mumbai-based
                  environmental consultancy supporting environmental, forest,
                  coastal and infrastructure-related regulatory requirements
                  for complex development projects across India.
                </p>

                <p>
                  We work with developers, project proponents, infrastructure
                  organisations and multidisciplinary teams that need a clearer
                  route through regulatory assessment, technical studies,
                  statutory documentation, authority coordination and ongoing
                  compliance.
                </p>

                <p>
                  Because complex projects rarely face a single approval
                  question, we connect environmental, forest, coastal, planning
                  and implementation workstreams. This coordinated approach
                  helps teams understand dependencies, strengthen submissions
                  and make informed decisions at every stage.
                </p>
              </div>

              {/* <div className="mt-10 max-w-[590px] border-l-2 border-[#c99a2e] pl-6">
                <p className="font-[var(--font-cormorant)] text-[1.35rem] leading-[1.4] tracking-[-0.015em] text-[#173426] sm:text-[1.6rem]">
                  Our role is to turn overlapping regulatory requirements into
                  a clear, coordinated and actionable programme of work.
                </p>
              </div> */}
            </div>

            {/* Editorial image */}
            <div className="lg:col-span-6 lg:pt-10">
              <div
                className="relative ml-auto aspect-[4/5] w-full max-w-[540px] overflow-hidden"
                style={{
                  clipPath:
                    "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 10%)",
                }}
              >
                <Image
                  src="/images/about/about-hero.jpg"
                  alt="Environmental and development advisory"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#031126]/15 via-transparent to-transparent" />
              </div>

              <div className="ml-auto flex max-w-[540px] items-start justify-between gap-6 border-b border-[#031126]/15 py-4">
                <p className="max-w-[370px] text-[10px] font-bold uppercase leading-5 tracking-[0.18em] text-[#9b7426]">
                  Environmental, forest, coastal and infrastructure advisory
                </p>

                <span className="text-[10px] font-medium tracking-[0.12em] text-[#173426]/45">
                  01
                </span>
              </div>
            </div>
          </div>

          {/* Company facts */}
          <div className="mt-16 grid border-l border-t border-[#031126]/15 sm:grid-cols-3 lg:mt-24">
            <div className="border-b border-r border-[#031126]/15 px-5 py-7 sm:px-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
                Headquartered
              </p>

              <p className="mt-3 font-[var(--font-cormorant)] text-2xl text-[#173426]">
                Mumbai, Maharashtra
              </p>
            </div>

            <div className="border-b border-r border-[#031126]/15 px-5 py-7 sm:px-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
                Project Reach
              </p>

              <p className="mt-3 font-[var(--font-cormorant)] text-2xl text-[#173426]">
                Advisory across India
              </p>
            </div>

            <div className="border-b border-r border-[#031126]/15 px-5 py-7 sm:px-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
                Leadership
              </p>

              <p className="mt-3 font-[var(--font-cormorant)] text-2xl text-[#173426]">
                18+ years of experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, vision and values */}
      <section
        id="vision-mission-values"
        className="scroll-mt-32 bg-[#fbfaf6] py-20 sm:py-24 lg:py-32"
      >
        <div className="container-shell px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 border-b border-[#031126]/15 pb-16 lg:grid-cols-12 lg:gap-16 lg:pb-24">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9b7426]">
                Our Direction
              </p>

              <h2 className="mt-5 max-w-[600px] font-[var(--font-cormorant)] text-[clamp(2.4rem,3.75vw,4.35rem)] leading-[0.97] tracking-[-0.055em] text-[#031126]">
                Purpose shaped by responsibility.
              </h2>
            </div>

            <div className="grid gap-12 sm:grid-cols-2 sm:gap-10 lg:col-span-7">
              <article>
                <p className="border-b border-[#031126]/15 pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
                  01 — Mission
                </p>

                <h3 className="mt-7 font-[var(--font-cormorant)] text-[2.4rem] font-medium leading-[1] tracking-[-0.035em] text-[#173426]">
                  Deliver clarity and confidence.
                </h3>

                <p className="mt-6 text-[15px] leading-[1.8] text-[#4c596d]">
                  To provide precise, timely and commercially practical
                  regulatory advice that helps project teams assess exposure,
                  prepare credible submissions, coordinate stakeholders and
                  maintain compliance throughout the development lifecycle.
                </p>
              </article>

              <article>
                <p className="border-b border-[#031126]/15 pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
                  02 — Vision
                </p>

                <h3 className="mt-7 font-[var(--font-cormorant)] text-[2.4rem] font-medium leading-[1] tracking-[-0.035em] text-[#173426]">
                  Enable responsible growth.
                </h3>

                <p className="mt-6 text-[15px] leading-[1.8] text-[#4c596d]">
                  To support responsible development across India through
                  clear, technically grounded and governance-aligned regulatory
                  advice.
                </p>
              </article>
            </div>
          </div>

          <div className="pt-16 lg:pt-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9b7426]">
                  Our Values
                </p>

                <h2 className="mt-5 max-w-[600px] font-[var(--font-cormorant)] text-[clamp(2.4rem,3.75vw,4.35rem)] leading-[0.97] tracking-[-0.055em] text-[#031126]">
                  The principles behind every engagement.
                </h2>

                <p className="mt-7 max-w-md text-[15px] leading-8 text-[#5b6677]">
                  Our approach is defined by professional judgement, clear
                  accountability, client confidentiality and a consistent focus
                  on practical, well-documented project outcomes.
                </p>
              </div>

              <div className="border-t border-[#031126]/15 lg:col-span-7">
                {companyValues.map((value) => (
                  <article
                    key={value.title}
                    className="grid gap-5 border-b border-[#031126]/15 py-7 sm:grid-cols-[60px_180px_1fr] sm:items-start sm:gap-6"
                  >
                    <p className="text-[10px] font-bold tracking-[0.18em] text-[#9b7426]">
                      {value.number}
                    </p>

                    <h3 className="font-[var(--font-cormorant)] text-3xl font-medium leading-none tracking-[-0.025em] text-[#173426]">
                      {value.title}
                    </h3>

                    <p className="text-sm leading-7 text-[#596679]">
                      {value.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected clients and institutional experience */}
      <section
        id="clients-and-associations"
        className="scroll-mt-32 border-y border-[#031126]/10 bg-[#173426] py-20 text-white sm:py-24 lg:py-28"
      >
        <div className="container-shell px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d6ad54]">
                Clients &amp; Associations
              </p>

              <h2 className="mt-5 max-w-[600px] font-[var(--font-cormorant)] text-[clamp(2.5rem,3.8vw,4.4rem)] leading-[0.97] tracking-[-0.055em]">
                Experience across private development and public infrastructure.
              </h2>

              <p className="mt-7 max-w-md text-[15px] leading-8 text-white/65">
                Our company portfolio includes regulatory advisory and project
                coordination experience involving leading organisations across
                real estate, infrastructure, hospitality and industry, together
                with institutional and urban-development assignments.
              </p>

              <Link
                href="/clients"
                className="mt-8 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#e1bf70] transition-colors hover:text-white"
              >
                View our clients <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="lg:col-span-7">
              <p className="border-b border-white/20 pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d6ad54]">
                Selected client experience
              </p>

              <div className="grid sm:grid-cols-2">
                {selectedClients.map((client, index) => (
                  <div
                    key={client}
                    className="flex items-center gap-4 border-b border-white/15 py-5 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
                  >
                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#d6ad54]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-medium leading-6 text-white/90">
                      {client}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-12 border-b border-white/20 pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d6ad54]">
                Government &amp; institutional associations
              </p>

              <div className="grid sm:grid-cols-2">
                {institutionalAssociations.map((association, index) => (
                  <article
                    key={association.shortName}
                    className="border-b border-white/15 py-5 sm:min-h-[142px] sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-[10px] font-bold tracking-[0.15em] text-[#d6ad54]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="font-[var(--font-cormorant)] text-2xl text-[#e1bf70]">
                        {association.shortName}
                      </p>
                    </div>

                    <div className="mt-3 pl-[38px]">
                      <h3 className="text-sm font-semibold leading-6 text-white">
                        {association.name}
                      </h3>
                      {/* <p className="mt-1 text-sm leading-6 text-white/55">
                        {association.context}
                      </p> */}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        id="leadership"
        className="scroll-mt-32 bg-[#f7f5ee] py-20 sm:py-24 lg:py-32"
      >
        <div className="container-shell px-5 sm:px-7 lg:px-10">
          <div className="border-b border-[#031126]/15 pb-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9b7426]">
              Leadership
            </p>
          </div>

          <div className="grid gap-12 pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-16">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full max-w-[530px] overflow-hidden bg-[#e8e4da]">
                <Image
                  src="/images/leadership/tejas-ajgaonkar.jpg"
                  alt="Tejas Ajgaonkar, Director of Redimension Realty"
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
                Director
              </p>

              <h2 className="mt-5 font-[var(--font-cormorant)] text-[clamp(3.5rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.05em] text-[#173426]">
                Tejas Ajgaonkar
              </h2>

              <div className="mt-9 space-y-6 text-[16px] leading-[1.85] text-[#4c596d]">
                <p>
                  Tejas Ajgaonkar is the Director of Redimension Realty Private
                  Limited and brings more than 18 years of experience across
                  real estate development and environmental, forest and coastal
                  regulatory consulting.
                </p>

                <p>
                  He leads client relationships, regulatory strategy and project
                  coordination. His experience connects development priorities
                  with practical knowledge of statutory processes, technical
                  workstreams, institutional interfaces and project execution.
                </p>
              </div>

              <div className="mt-10 border-y border-[#031126]/15 py-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9b7426]">
                  Over 18 years of professional and industry experience
                </p>
              </div>

              <div className="border-t border-[#031126]/15">
                {leadershipExperience.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[45px_1fr] border-b border-[#031126]/15 py-5"
                  >
                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#9b7426]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm font-medium leading-6 text-[#26372d]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#f7f5ee] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-8 rounded-[2rem] bg-[#f1e6b8] px-7 py-9 sm:px-10 sm:py-11 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-12">
            <div className="max-w-2xl">
              <p className="font-[var(--font-cormorant)] text-[clamp(1.8rem,2.5vw,2.5rem)] leading-[1.05] tracking-[-0.025em] text-[#173426]">
                Need a clearer regulatory pathway for your project?
              </p>

              <p className="mt-3 max-w-xl text-[14px] leading-7 text-[#536159] sm:text-[15px]">
                Speak with our team about environmental clearance, forest, CRZ,
                infrastructure or redevelopment requirements affecting your
                site and project programme.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="group inline-flex min-h-[52px] w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#173426] px-7 text-[12px] font-semibold tracking-[0.04em] text-white transition duration-300 hover:bg-[#0f5a2d] sm:w-auto"
            >
              <span>Discuss your project</span>

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
