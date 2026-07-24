import {
  Building2,
  Construction,
  Factory,
  Landmark,
  Leaf,
  Target,
  UserRound,
  Waves,
  type LucideIcon,
} from "lucide-react";

import {
  coreServices,
  featuredProjects,
} from "@/src/data/site";

export type DropdownLink = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export type DesktopLink = {
  href: string;
  label: string;
  dropdown?: DropdownLink[];
};

const serviceIcons: Record<string, LucideIcon> = {
  "environmental-forest-clearance": Leaf,
  "crz-coastal-regulatory-advisory": Waves,
  "bmc-mmrda-public-infrastructure": Landmark,
  "redevelopment-sra-construction": Building2,
};

const projectIcons: Record<string, LucideIcon> = {
  "multi-level-automated-parking-infrastructure": Landmark,
  "urban-infrastructure-development": Construction,
  "sra-housing-development": Building2,
};

const serviceDropdown: DropdownLink[] = coreServices.map((service) => ({
  label: service.navLabel,
  href: service.href,
  description: service.navDescription,
  icon: serviceIcons[service.slug] ?? Leaf,
}));

const projectDropdown: DropdownLink[] = featuredProjects.map((project) => ({
  label: project.navLabel,
  href: project.href,
  description: project.navDescription,
  icon: projectIcons[project.slug] ?? Building2,
}));

// const sectorDropdown: DropdownLink[] = [
//   {
//     label: "Environmental Consulting",
//     href: "/sectors-we-serve#environmental-consulting",
//     description:
//       "Environmental assessment, approvals and compliance support.",
//     icon: Leaf,
//   },
//   {
//     label: "Infrastructure & Civil Works",
//     href: "/sectors-we-serve#infrastructure-civil-works",
//     description:
//       "Public infrastructure and civil-development coordination.",
//     icon: Construction,
//   },
//   {
//     label: "Real Estate & Redevelopment",
//     href: "/sectors-we-serve#real-estate-redevelopment",
//     description:
//       "Advisory support for development and urban-renewal projects.",
//     icon: Building2,
//   },
//   {
//     label: "Government Projects",
//     href: "/sectors-we-serve#government-projects",
//     description:
//       "Institutional coordination for government assignments.",
//     icon: Landmark,
//   },
//   {
//     label: "Coastal & CRZ Developments",
//     href: "/sectors-we-serve#coastal-crz-developments",
//     description:
//       "Regulatory support for coastal and CRZ-sensitive projects.",
//     icon: Waves,
//   },
//   {
//     label: "Hospitality & Industrial Projects",
//     href: "/sectors-we-serve#hospitality-industrial-projects",
//     description:
//       "Approval and compliance support for commercial developments.",
//     icon: Factory,
//   },
// ];

export const desktopLinks: DesktopLink[] = [
  {
    href: "/about-us",
    label: "About",
  },
  {
    href: "/services",
    label: "Services",
    dropdown: serviceDropdown,
  },
  {
    href: "/projects",
    label: "Projects",
    dropdown: projectDropdown,
  },
//   {
//     href: "/sectors-we-serve",
//     label: "Sectors",
//     dropdown: sectorDropdown,
//   },
  {
    href: "/clients",
    label: "Clients",
  },
  {
    href: "/blog",
    label: "Insights",
  },
  {
    href: "/gallery",
    label: "Gallery",
  },
  {
    href: "/contact-us",
    label: "Contact",
  },
];

export const cardNavItems = [
  {
    label: "Explore",
    bgColor: "#0F5A2D",
    textColor: "#ffffff",
    links: [
      {
        label: "About",
        href: "/about-us",
        ariaLabel: "Learn about Redimension Realty",
      },
      {
        label: "Services",
        href: "/services",
        ariaLabel: "View all services",
        children: coreServices.map((service) => ({
          label: service.navLabel,
          href: service.href,
          ariaLabel: service.cta,
        })),
      },
      {
        label: "Projects",
        href: "/projects",
        ariaLabel: "View all projects",
        children: featuredProjects.map((project) => ({
          label: project.navLabel,
          href: project.href,
          ariaLabel: `View ${project.name}`,
        })),
      },
    ],
  },
  {
    label: "Company",
    bgColor: "#C99A2E",
    textColor: "#031126",
    links: [
    //   {
    //     label: "Sectors",
    //     href: "/sectors-we-serve",
    //     ariaLabel: "View all sectors",
    //     children: sectorDropdown.map((sector) => ({
    //       label: sector.label,
    //       href: sector.href,
    //       ariaLabel: `View ${sector.label}`,
    //     })),
    //   },
      {
        label: "Clients",
        href: "/clients",
        ariaLabel: "View clients",
      },
      {
        label: "Insights",
        href: "/blog",
        ariaLabel: "Read insights",
      },
      {
        label: "Gallery",
        href: "/gallery",
        ariaLabel: "View gallery",
      },
      {
        label: "Careers",
        href: "/careers",
        ariaLabel: "View careers",
      },
    ],
  },
];