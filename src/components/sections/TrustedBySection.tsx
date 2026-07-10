import Image from "next/image";

type Client = {
  name: string;
  src: string;
};

type TrustedBySectionProps = {
  clients: Client[];
};

export default function TrustedBySection({
  clients,
}: TrustedBySectionProps) {
  const loopClients = [...clients, ...clients];

  return (
    <section className="overflow-hidden py-16 bg-[#f5f1e8]">
      <div className="container-shell">
        <div className="text-center">
          <p className="eyebrow">Trusted By</p>

          <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">
            Associated with leading developers, infrastructure groups and
            public institutions.
          </h2>
        </div>
      </div>

      <div className="relative mt-10 overflow-hidden py-10">
        {/* <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-white to-transparent" />

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-white to-transparent" /> */}

        <div className="logo-loop flex w-max items-center gap-20">
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
  );
}