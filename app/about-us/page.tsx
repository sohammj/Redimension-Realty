import { Landmark, Leaf, ShieldCheck, Target } from "lucide-react";
import { values } from "@/src/data/site";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Redimension Realty Private Limited, a Mumbai-based environmental, forest and coastal regulatory consulting company.",
};

export default function AboutUsPage() {
  return (
    <main className="pt-28">
      <section className="section-padding">
        <div className="container-shell">
          <p className="eyebrow">About Us</p>
          <h1 className="section-title mt-4 max-w-5xl">
            A Mumbai-based advisory firm operating at the intersection of regulation, sustainability and development.
          </h1>
          <p className="section-subtitle mt-7 max-w-4xl">
            Redimension Realty Private Limited provides strategic environmental, coastal and
            infrastructure-related compliance solutions across India. The company supports complex
            and high-value developments through regulatory strategy, statutory compliance management,
            technical documentation, institutional coordination and execution support.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="premium-card rounded-[2rem] p-7 lg:col-span-2">
              <h2 className="text-3xl font-black tracking-[-0.05em]">Company Story</h2>
              <p className="mt-5 leading-8 text-[#526174]">
                The firm works with real estate developers, infrastructure project proponents,
                hospitality groups, industrial developments, ports, coastal assets and urban
                redevelopment initiatives. Its role is to help stakeholders navigate India’s
                evolving approval frameworks through a structured, compliance-driven and
                execution-oriented approach.
              </p>
              <p className="mt-5 leading-8 text-[#526174]">
                Redimension Realty combines technical proficiency, regulatory intelligence and
                stakeholder management capabilities to mitigate compliance risks and facilitate
                smoother project execution.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#031126] p-7 text-white">
              <Landmark className="text-[#c99a2e]" />
              <h2 className="mt-5 text-2xl font-black tracking-[-0.04em]">Leadership</h2>
              <p className="mt-4 leading-7 text-white/65">
                Led by Mr. Tejas Ajgaonkar, Director, with over 18 years of experience in real
                estate development and environmental, forest and coastal regulatory consulting.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="glass-card rounded-[2rem] p-7">
              <Target className="text-[#0f5a2d]" />
              <h3 className="mt-5 text-2xl font-black tracking-[-0.04em]">Mission</h3>
              <p className="mt-4 leading-7 text-[#526174]">
                To deliver precise, compliant and timely regulatory solutions to developers,
                project proponents and government bodies while supporting responsible and
                sustainable development outcomes.
              </p>
            </div>

            <div className="glass-card rounded-[2rem] p-7">
              <Leaf className="text-[#0f5a2d]" />
              <h3 className="mt-5 text-2xl font-black tracking-[-0.04em]">Vision</h3>
              <p className="mt-4 leading-7 text-[#526174]">
                To be recognised as a trusted end-to-end environmental regulatory advisory and
                responsible development partner enabling growth in harmony with environmental sustainability.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-[2rem] border border-[#071b3a]/10 bg-white p-6">
                <ShieldCheck className="text-[#0f5a2d]" />
                <h3 className="mt-5 text-xl font-black tracking-[-0.04em]">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#526174]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
