import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Redimension Realty | Environmental Advisory Mumbai",
  description:
    "Learn about Redimension Realty’s environmental, forest, coastal and infrastructure regulatory advisory practice, approach and leadership in Mumbai.",
};

const companyFacts = [
  {
    label: "Headquartered",
    value: "Mumbai, Maharashtra",
  },
  {
    label: "Project reach",
    value: "Advisory across India",
  },
  {
    label: "Core practice",
    value: "Environment, forest & CRZ",
  },
  {
    label: "Leadership",
    value: "18+ years of experience",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Understand the project context",
    description:
      "We review the site, development programme, approval status and the regulatory questions that can affect feasibility, sequencing and delivery.",
  },
  {
    number: "02",
    title: "Map every dependency",
    description:
      "Environmental, forest, coastal, planning and infrastructure workstreams are connected into one coordinated pathway rather than treated as isolated approvals.",
  },
  {
    number: "03",
    title: "Move the programme forward",
    description:
      "We support technical studies, statutory documentation, stakeholder coordination and compliance so project teams can act with greater clarity and confidence.",
  },
];

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
    title: "Responsible development",
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
  },
  {
    name: "Mumbai Metropolitan Region Development Authority",
    shortName: "MMRDA",
  },
  {
    name: "Slum Rehabilitation Authority, Maharashtra",
    shortName: "SRA",
  },
  {
    name: "Atal Mission for Rejuvenation and Urban Transformation",
    shortName: "AMRUT",
  },
];

export default function AboutUsPage() {
  return (
    <main className="overflow-hidden bg-[#f7f5ee] pt-[108px] text-[#031126] lg:pt-[88px]">
      {/* Hero */}
      <section
        id="overview"
        className="relative scroll-mt-32 border-b border-[#173426]/10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-24 hidden h-60 w-60 rotate-45 border-[42px] border-[#173426]/[0.035] xl:block"
        />

        <div className="container-shell px-5 pb-16 pt-10 sm:px-7 sm:pb-20 sm:pt-14 lg:px-10 lg:pb-24 lg:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative z-10 lg:col-span-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9b7426]">
                About Redimension Realty
              </p>

              <h1 className="mt-6 max-w-[660px] font-[var(--font-cormorant)] text-[clamp(3.4rem,5.4vw,6rem)] font-medium leading-[0.9] tracking-[-0.055em] text-[#173426]">
                Clarity for projects shaped by complex regulation.
              </h1>

              <p className="mt-8 max-w-[620px] text-[17px] leading-[1.8] text-[#435066]">
                Redimension Realty Private Limited is a Mumbai-based advisory
                practice helping development and infrastructure teams navigate
                environmental, forest, coastal and related statutory
                requirements across India.
              </p>

              <div className="mt-9 flex flex-col gap-5 border-t border-[#173426]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[470px] text-[14px] leading-7 text-[#596679]">
                  We connect regulatory strategy, technical documentation,
                  authority coordination and project implementation into one
                  practical programme of work.
                </p>

                <Link
                  href="/contact-us"
                  className="group inline-flex shrink-0 items-center gap-3 text-[11px] font-bold uppercase tracking-[0.17em] text-[#173426]"
                >
                  Discuss a project
                  <span
                    aria-hidden="true"
                    className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative ml-auto max-w-[610px]">
                <div
                  className="relative aspect-[5/6] overflow-hidden bg-[#dedbd1] sm:aspect-[4/5] lg:aspect-[5/6]"
                  style={{
                    clipPath: "polygon(9% 0, 100% 0, 100% 100%, 0 100%, 0 9%)",
                  }}
                >
                  <Image
                    src="/images/about/about-hero.jpg"
                    alt="Environmental and development advisory team reviewing a project"
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 46vw"
                    className="object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#031126]/30 via-transparent to-transparent" />

                  {/* <div className="absolute bottom-5 left-5 right-5 border border-white/30 bg-[#0d2f22]/85 px-5 py-4 text-white backdrop-blur-sm sm:left-6 sm:right-auto sm:max-w-[330px]">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e1bf70]">
                      Integrated advisory
                    </p>
                    <p className="mt-2 font-[var(--font-cormorant)] text-[1.55rem] leading-[1.05]">
                      Environment, forest, coast and infrastructure.
                    </p>
                  </div> */}
                </div>

                <div className="flex items-center justify-between border-b border-[#173426]/15 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b7426]">
                    Regulatory advisory grounded in delivery
                  </p>
                  <span className="text-[10px] font-medium tracking-[0.12em] text-[#173426]/45">
                    01
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid border-l border-t border-[#173426]/15 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {companyFacts.map((fact) => (
              <article
                key={fact.label}
                className="border-b border-r border-[#173426]/15 px-5 py-6 sm:px-6 lg:min-h-[132px] lg:py-7"
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
                  {fact.label}
                </p>
                <p className="mt-4 font-[var(--font-cormorant)] text-[1.55rem] leading-tight tracking-[-0.02em] text-[#173426]">
                  {fact.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Company story and operating approach */}
      <section
        id="company-story"
        className="scroll-mt-32 bg-[#fbfaf6] py-20 sm:py-24 lg:py-32"
      >
        <div className="container-shell px-5 sm:px-7 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9b7426]">
                  How we work
                </p>

                <h2 className="mt-5 max-w-[570px] font-[var(--font-cormorant)] text-[clamp(2.8rem,4.2vw,4.8rem)] leading-[0.94] tracking-[-0.055em] text-[#031126]">
                  Built around the realities of complex approvals.
                </h2>

                <p className="mt-7 max-w-[500px] text-[15px] leading-8 text-[#596679]">
                  Complex projects rarely face a single approval question. Our
                  role is to make overlapping requirements understandable,
                  coordinated and actionable for the people responsible for
                  delivery.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="border-t border-[#173426]/15">
                {approachSteps.map((step) => (
                  <article
                    key={step.number}
                    className="grid gap-5 border-b border-[#173426]/15 py-8 sm:grid-cols-[64px_220px_1fr] sm:gap-7 lg:py-9"
                  >
                    <p className="text-[10px] font-bold tracking-[0.18em] text-[#9b7426]">
                      {step.number}
                    </p>

                    <h3 className="font-[var(--font-cormorant)] text-[2rem] leading-[1.02] tracking-[-0.03em] text-[#173426]">
                      {step.title}
                    </h3>

                    <p className="text-[14px] leading-7 text-[#596679]">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section
        id="vision-mission-values"
        className="scroll-mt-32 border-y border-[#173426]/10 bg-[#f7f5ee] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-shell px-5 sm:px-7 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9b7426]">
                Our direction
              </p>
              <h2 className="mt-5 max-w-[470px] font-[var(--font-cormorant)] text-[clamp(2.8rem,4vw,4.6rem)] leading-[0.95] tracking-[-0.055em] text-[#031126]">
                Purpose shaped by responsibility.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
              <article className="flex min-h-[490px] flex-col border border-[#173426]/15 bg-[#fbfaf6] p-7 sm:p-9">
                <div className="min-h-[220px]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
                    01 — Mission
                  </p>

                  <h3 className="mt-10 max-w-[320px] font-[var(--font-cormorant)] text-[clamp(2.4rem,3.2vw,3.6rem)] leading-[0.96] tracking-[-0.04em] text-[#173426]">
                    Deliver clarity and confidence.
                  </h3>
                </div>

                <p className="mt-10 text-[14px] leading-7 text-[#596679]">
                  To provide precise, timely and commercially practical regulatory advice
                  that helps project teams assess exposure, prepare credible submissions,
                  coordinate stakeholders and maintain compliance throughout the
                  development lifecycle.
                </p>
              </article>

              <article className="flex min-h-[490px] flex-col border border-[#173426]/15 bg-[#fbfaf6] p-7 sm:p-9">
                <div className="min-h-[220px]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
                    02 — Vision
                  </p>

                  <h3 className="mt-10 max-w-[320px] font-[var(--font-cormorant)] text-[clamp(2.4rem,3.2vw,3.6rem)] leading-[0.96] tracking-[-0.04em] text-[#173426]">
                    Enable responsible growth.
                  </h3>
                </div>

                <p className="mt-10 text-[14px] leading-7 text-[#596679]">
                  To support responsible development across India through clear,
                  technically grounded and governance-aligned regulatory advice.
                </p>
              </article>
            </div>
          </div>

          <div className="mt-20 border-t border-[#173426]/15 pt-16 lg:mt-24 lg:pt-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9b7426]">
                  Our values
                </p>
                <h2 className="mt-5 max-w-[470px] font-[var(--font-cormorant)] text-[clamp(2.7rem,3.8vw,4.4rem)] leading-[0.96] tracking-[-0.055em] text-[#031126]">
                  The principles behind every engagement.
                </h2>
                <p className="mt-7 max-w-[430px] text-[15px] leading-8 text-[#596679]">
                  Our approach is defined by professional judgement, clear
                  accountability, client confidentiality and a consistent focus
                  on practical, well-documented outcomes.
                </p>
              </div>

              <div className="grid border-l border-t border-[#173426]/15 sm:grid-cols-2 lg:col-span-8">
                {companyValues.map((value) => (
                  <article
                    key={value.title}
                    className="group min-h-[260px] border-b border-r border-[#173426]/15 p-7 transition-colors duration-300 hover:bg-[#efe9d9] sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-bold tracking-[0.18em] text-[#9b7426]">
                        {value.number}
                      </p>
                      <span className="h-2 w-2 rounded-full bg-[#c99a2e] opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    <h3 className="mt-10 font-[var(--font-cormorant)] text-[2.25rem] leading-none tracking-[-0.035em] text-[#173426]">
                      {value.title}
                    </h3>

                    <p className="mt-5 max-w-[320px] text-[14px] leading-7 text-[#596679]">
                      {value.description}
                    </p>
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
        className="scroll-mt-32 bg-[#fbfaf6] py-20 sm:py-24 lg:py-32"
      >
        <div className="container-shell px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <p className="border-b border-[#173426]/15 pb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#9b7426]">
                  Leadership
                </p>

                {/* Photo */}
                <div className="relative mt-8 aspect-[4/5] w-full max-w-[520px] overflow-hidden bg-[#e8e4da]">
                  <Image
                    src="/images/leadership/tejas-ajgaonkar.jpg"
                    alt="Tejas Ajgaonkar, Director of Redimension Realty"
                    fill
                    sizes="(max-width: 1023px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* Cards directly under photo */}
                {/* <div className="grid w-full max-w-[520px] gap-px bg-[#173426]/15 sm:grid-cols-2">
                  <div className="bg-[#f1e6b8] p-7 sm:min-h-[180px]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
                      Experience
                    </p>

                    <p className="mt-5 font-[var(--font-cormorant)] text-[3.4rem] leading-none tracking-[-0.05em] text-[#173426]">
                      18+
                    </p>

                    <p className="mt-2 text-[13px] leading-6 text-[#536159]">
                      Years across regulatory advisory and development.
                    </p>
                  </div>

                  <div className="bg-[#173426] p-7 text-white sm:min-h-[180px]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d6ad54]">
                      Leadership focus
                    </p>

                    <p className="mt-5 font-[var(--font-cormorant)] text-[2rem] leading-[1.05]">
                      Strategy, coordination and project delivery.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
                Director
              </p>

              <h2 className="mt-5 font-[var(--font-cormorant)] text-[clamp(3.7rem,6vw,6.4rem)] font-medium leading-[0.87] tracking-[-0.06em] text-[#173426]">
                Tejas
                <br />
                Ajgaonkar
              </h2>

              <div className="mt-10 space-y-6 text-[16px] leading-[1.85] text-[#4c596d]">
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
              {/* <div className="mt-10 border-t border-[#173426]/15">
                {leadershipExperience.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[48px_1fr] border-b border-[#173426]/15 py-5"
                  >
                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#9b7426]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[14px] font-medium leading-6 text-[#26372d]">
                      {item}
                    </p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Clients and institutional experience */}
      {/* <section
        id="clients-and-associations"
        className="scroll-mt-32 border-y border-[#031126]/10 bg-[#173426] py-20 text-white sm:py-24 lg:py-28"
      >
        <div className="container-shell px-5 sm:px-7 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d6ad54]">
                Clients &amp; associations
              </p>

              <h2 className="mt-5 max-w-[500px] font-[var(--font-cormorant)] text-[clamp(2.8rem,4vw,4.7rem)] leading-[0.94] tracking-[-0.055em]">
                Experience across private development and public infrastructure.
              </h2>
              <h2 className="mt-5 max-w-[500px] font-[var(--font-cormorant)] text-[clamp(2.8rem,4vw,4.7rem)] leading-[0.94] tracking-[-0.055em]">
                Private development.
                <br />
                Public infrastructure.
              </h2>

              <p className="mt-7 max-w-[430px] text-[15px] leading-8 text-white/65">
                Our portfolio includes regulatory advisory and project
                coordination experience across real estate, infrastructure,
                hospitality and industry, alongside institutional and urban
                development assignments.
              </p>

              <Link
                href="/clients"
                className="group mt-9 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#e1bf70] transition-colors hover:text-white"
              >
                View all clients
                <span
                  aria-hidden="true"
                  className="text-base transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            <div className="lg:col-span-8">
              <p className="border-b border-white/20 pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d6ad54]">
                Selected client experience
              </p>

              <div className="grid sm:grid-cols-2">
                {selectedClients.map((client, index) => (
                  <div
                    key={client}
                    className="flex min-h-[74px] items-center gap-4 border-b border-white/15 py-5 sm:odd:border-r sm:odd:pr-7 sm:even:pl-7"
                  >
                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#d6ad54]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[14px] font-medium leading-6 text-white/90">
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
                    className="border-b border-white/15 py-6 sm:min-h-[150px] sm:odd:border-r sm:odd:pr-7 sm:even:pl-7"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-[10px] font-bold tracking-[0.15em] text-[#d6ad54]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="font-[var(--font-cormorant)] text-[2rem] leading-none text-[#e1bf70]">
                        {association.shortName}
                      </p>
                    </div>

                    <h3 className="mt-4 pl-[38px] text-[14px] font-semibold leading-6 text-white">
                      {association.name}
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Closing CTA */}
      <section className="bg-[#f7f5ee] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#f1e6b8] px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[44px] border-[#173426]/[0.045]"
            />

            <div className="relative z-10 flex flex-col gap-9 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b7426]">
                  Start a conversation
                </p>
                <h2 className="mt-4 max-w-[720px] font-[var(--font-cormorant)] text-[clamp(2.2rem,3.6vw,4.1rem)] leading-[0.95] tracking-[-0.045em] text-[#173426]">
                  Need a clearer regulatory pathway for your project?
                </h2>
                <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#536159] sm:text-[15px]">
                  Speak with our team about environmental clearance, forest,
                  CRZ, infrastructure or redevelopment requirements affecting
                  your site and project programme.
                </p>
              </div>

              <Link
                href="/contact-us"
                className="group inline-flex min-h-[56px] w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#173426] px-8 text-[12px] font-semibold tracking-[0.04em] text-white transition duration-300 hover:bg-[#0f5a2d] sm:w-auto"
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
        </div>
      </section>
    </main>
  );
}
