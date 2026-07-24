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
    <section className="overflow-hidden bg-[#f5f1e8] py-6">
      <div className="relative mt-0 overflow-hidden py-4">
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