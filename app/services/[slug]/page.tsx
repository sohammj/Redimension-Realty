import type { Metadata } from "next";
import { notFound } from "next/navigation";

import DetailPageTemplate from "@/src/components/detail/DetailPageTemplate";
import {
  coreServices,
  getServiceBySlug,
} from "@/src/data/site";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return coreServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Redimension Realty",
    };
  }

  return {
    title: `${service.title} | Redimension Realty`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = coreServices
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3)
    .map((item) => ({
      label: item.title,
      href: item.href,
      description: item.navDescription,
    }));

  return (
    <DetailPageTemplate
      eyebrow="Services"
      label={service.label}
      title={service.title}
      intro={service.intro}
      image={service.image}
      imageAlt={`${service.title} service`}
      facts={service.facts}
      sections={service.sections}
      backHref="/services"
      backLabel="All services"
      relatedTitle="Related regulatory services"
      relatedLinks={relatedServices}
      ctaTitle="Discuss your project requirements"
      ctaBody="Speak with our team about the regulatory pathway, documentation and institutional coordination required for your project."
    />
  );
}