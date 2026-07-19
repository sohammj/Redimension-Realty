import type { Metadata } from "next";
import { notFound } from "next/navigation";

import DetailPageTemplate from "@/src/components/detail/DetailPageTemplate";
import {
  featuredProjects,
  getProjectBySlug,
} from "@/src/data/site";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Redimension Realty",
    };
  }

  return {
    title: `${project.name} | Redimension Realty`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = featuredProjects
    .filter((item) => item.slug !== project.slug)
    .map((item) => ({
      label: item.name,
      href: item.href,
      description: item.navDescription,
    }));

  return (
    <DetailPageTemplate
      eyebrow="Projects"
      label={project.status}
      title={project.name}
      intro={project.intro}
      image={project.image}
      imageAlt={`${project.name} project`}
      facts={project.facts}
      sections={project.sections}
      backHref="/projects"
      backLabel="All projects"
      relatedTitle="Other selected projects"
      relatedLinks={relatedProjects}
      ctaTitle="Have a similar project requirement?"
      ctaBody="Speak with our team about regulatory, institutional and execution support for your proposed development."
    />
  );
}