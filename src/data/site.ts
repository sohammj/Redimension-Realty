export const siteConfig = {
  name: "Redimension Realty Private Limited",
  shortName: "Redimension Realty",
  tagline: "Enabling Sustainable Development",
  description:
    "Mumbai-headquartered environmental, forest and coastal regulatory consulting firm enabling compliant, sustainable and execution-ready development across India.",
  phone: "+91 98700 07130",
  landline: "022 2318 60946",
  email: "director@redimensionrealty.com",
  website: "www.redimensionrealty.com",
  address:
    "213, 2nd Floor, Makers Chamber - 5, Nariman Point, Mumbai - 400021, Maharashtra, India",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Sectors", href: "/sectors-we-serve" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact-us" },
] as const;

export type DetailFact = {
  label: string;
  value: string;
};

export type DetailSection = {
  title: string;
  body: string;
  items?: readonly string[];
};

export type ServiceItem = {
  slug: string;
  href: string;
  title: string;
  navLabel: string;
  navDescription: string;
  label: string;
  summary: string;
  intro: string;
  cta: string;
  image: string;
  facts: readonly DetailFact[];
  sections: readonly DetailSection[];
};

export type ProjectItem = {
  slug: string;
  href: string;
  name: string;
  navLabel: string;
  navDescription: string;
  status: string;
  location: string;
  client: string;
  service: string;
  summary: string;
  intro: string;
  image: string;
  facts: readonly DetailFact[];
  sections: readonly DetailSection[];
};

export const coreServices = [
  {
    slug: "environmental-forest-clearance",
    href: "/services/environmental-forest-clearance",
    title: "Environmental and Forest Clearance",
    navLabel: "Environmental & Forest Clearance",
    navDescription:
      "EIA, EMP, forest-diversion proposals, pollution-control consents and continuing compliance.",
    label: "Environmental approvals",
    summary:
      "Support for environmental-clearance applicability, EIA and EMP coordination, forest-diversion proposals, Stage I and Stage II forest-clearance processes, pollution-control consents and post-clearance compliance.",
    intro:
      "Integrated advisory support for projects navigating environmental and forest approval requirements, from initial applicability review through statutory submissions and continuing compliance.",
    cta: "Explore Environmental and Forest Clearance",
    image:
      "https://images.unsplash.com/photo-1767917920879-dca2df5f1868?auto=format&fit=crop&w=1800&q=85",
    facts: [
      {
        label: "Practice area",
        value: "Environment and forest",
      },
      {
        label: "Support stage",
        value: "Pre-approval to compliance",
      },
      {
        label: "Core work",
        value: "EIA, EMP and forest proposals",
      },
    ],
    sections: [
      {
        title: "Applicability and regulatory strategy",
        body:
          "We review the project site, proposed development and current approval status to identify applicable environmental and forest requirements and establish a coordinated regulatory pathway.",
        items: [
          "Environmental-clearance applicability review",
          "Environmental due diligence",
          "Regulatory pathway and approval sequencing",
          "Project-risk and dependency mapping",
        ],
      },
      {
        title: "Technical and statutory coordination",
        body:
          "Our support connects technical studies, statutory documentation and institutional coordination into one structured programme of work.",
        items: [
          "EIA and EMP coordination",
          "Forest-diversion proposals",
          "Stage I and Stage II forest-clearance support",
          "Pollution-control consent documentation",
        ],
      },
      {
        title: "Post-clearance compliance",
        body:
          "We help project proponents understand and address approval conditions, compliance reporting obligations and continuing statutory requirements.",
        items: [
          "Clearance-condition tracking",
          "Compliance documentation",
          "Authority coordination",
          "Post-clearance reporting support",
        ],
      },
    ],
  },
  {
    slug: "crz-coastal-regulatory-advisory",
    href: "/services/crz-coastal-regulatory-advisory",
    title: "CRZ and Coastal Regulatory Advisory",
    navLabel: "CRZ & Coastal Advisory",
    navDescription:
      "Coastal classification, CZMP interpretation, due diligence and regulatory coordination.",
    label: "Coastal regulation",
    summary:
      "Coastal applicability and classification review, Coastal Zone Management Plan interpretation, coastal due diligence, statutory documentation and coordination with coastal regulatory authorities.",
    intro:
      "Specialist regulatory support for projects located within or near coastal areas where classification, mapping and statutory interpretation can directly affect feasibility and approvals.",
    cta: "Explore CRZ and Coastal Advisory",
    image:
      "https://images.unsplash.com/photo-1750715832891-01d5bd941cf8?auto=format&fit=crop&w=1800&q=85",
    facts: [
      {
        label: "Practice area",
        value: "CRZ and coastal regulation",
      },
      {
        label: "Core review",
        value: "Applicability and classification",
      },
      {
        label: "Support",
        value: "Due diligence to coordination",
      },
    ],
    sections: [
      {
        title: "Coastal applicability review",
        body:
          "We assess the site context, applicable coastal notification provisions and available mapping information to identify the regulatory position of the project.",
        items: [
          "CRZ applicability assessment",
          "Coastal classification review",
          "Site and proposal screening",
          "Development-constraint identification",
        ],
      },
      {
        title: "CZMP interpretation and due diligence",
        body:
          "Coastal Zone Management Plans and related statutory records are reviewed to clarify development conditions, restrictions and submission requirements.",
        items: [
          "CZMP interpretation",
          "Coastal due diligence",
          "Regulatory-risk review",
          "Approval dependency mapping",
        ],
      },
      {
        title: "Documentation and authority coordination",
        body:
          "We support preparation, organisation and coordination of the documentation required for engagement with relevant coastal regulatory authorities.",
        items: [
          "Statutory documentation",
          "Submission coordination",
          "Authority follow-up support",
          "Coastal compliance strategy",
        ],
      },
    ],
  },
  {
    slug: "bmc-mmrda-public-infrastructure",
    href: "/services/bmc-mmrda-public-infrastructure",
    title: "BMC/MMRDA and Public Infrastructure",
    navLabel: "BMC/MMRDA & Infrastructure",
    navDescription:
      "Approval tracking and stakeholder coordination for municipal and public-utility assignments.",
    label: "Public infrastructure",
    summary:
      "Documentation, approval tracking, stakeholder coordination and project facilitation for municipal, metropolitan and public-utility assignments.",
    intro:
      "Coordinated project support for assignments involving municipal bodies, metropolitan authorities, public utilities and multidisciplinary infrastructure stakeholders.",
    cta: "Explore Infrastructure Support",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85",
    facts: [
      {
        label: "Sector",
        value: "Public infrastructure",
      },
      {
        label: "Institutions",
        value: "BMC and MMRDA",
      },
      {
        label: "Support",
        value: "Documentation and coordination",
      },
    ],
    sections: [
      {
        title: "Institutional project mapping",
        body:
          "We identify the authorities, approvals, stakeholder interfaces and documentation dependencies affecting municipal and metropolitan assignments.",
        items: [
          "Approval pathway mapping",
          "Stakeholder identification",
          "Documentation planning",
          "Project-interface review",
        ],
      },
      {
        title: "Approval tracking and coordination",
        body:
          "The approval programme is organised around clear responsibilities, submission status and structured institutional follow-up.",
        items: [
          "Submission tracking",
          "Authority coordination",
          "Stakeholder follow-up",
          "Project-status reporting",
        ],
      },
      {
        title: "Project facilitation",
        body:
          "We support communication between project proponents, consultants, contractors and institutional stakeholders to help maintain programme momentum.",
        items: [
          "Multidisciplinary coordination",
          "Technical-document collation",
          "Institutional communication",
          "Execution-stage support",
        ],
      },
    ],
  },
  {
    slug: "redevelopment-sra-construction",
    href: "/services/redevelopment-sra-construction",
    title: "Redevelopment, SRA and Construction",
    navLabel: "Redevelopment, SRA & Construction",
    navDescription:
      "Regulatory mapping for urban renewal, housing and construction projects.",
    label: "Urban redevelopment",
    summary:
      "Regulatory mapping and coordination for urban renewal, affordable housing, redevelopment and construction projects, including environmental and coastal interfaces where applicable.",
    intro:
      "Integrated regulatory support for redevelopment and construction projects where planning, environmental, coastal and institutional requirements must be addressed together.",
    cta: "Explore Redevelopment Support",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
    facts: [
      {
        label: "Sector",
        value: "Urban redevelopment",
      },
      {
        label: "Project types",
        value: "SRA, housing and construction",
      },
      {
        label: "Coverage",
        value: "Planning and regulatory interfaces",
      },
    ],
    sections: [
      {
        title: "Regulatory mapping",
        body:
          "We review the project configuration, site context and development programme to identify the statutory and institutional requirements affecting delivery.",
        items: [
          "Approval dependency mapping",
          "Environmental-interface review",
          "Coastal-interface review",
          "Development-risk identification",
        ],
      },
      {
        title: "Redevelopment and SRA coordination",
        body:
          "Support is structured around the multidisciplinary and institutional requirements commonly associated with urban renewal and rehabilitation projects.",
        items: [
          "Redevelopment documentation support",
          "SRA-related coordination",
          "Stakeholder-interface management",
          "Submission and approval tracking",
        ],
      },
      {
        title: "Construction-stage support",
        body:
          "We help project teams maintain clarity around regulatory obligations and continuing coordination as projects move from approvals into execution.",
        items: [
          "Compliance tracking",
          "Consultant coordination",
          "Authority follow-up",
          "Execution-stage documentation",
        ],
      },
    ],
  },
] satisfies readonly ServiceItem[];

export const businessSegments = [
  {
    title: "Environmental, Forest & Coastal Regulatory Consulting",
    description:
      "Pan-India advisory services for real estate developers, infrastructure proponents and government agencies navigating multi-layered environmental regulations.",
  },
  {
    title: "BMC / MMRDA Public Infrastructure",
    description:
      "Public utility infrastructure, multi-level automated parking towers, civil construction and turnkey project management.",
  },
  {
    title: "Redevelopment & SRA Housing",
    description:
      "Urban redevelopment, SRA-approved budget housing projects and Mumbai Metropolitan Region redevelopment opportunities.",
  },
  {
    title: "AMRUT Urban Infrastructure",
    description:
      "Urban irrigation, water infrastructure and government-backed urban development projects under AMRUT-related frameworks.",
  },
] as const;

export const sectors = [
  "Environmental Consulting",
  "Infrastructure & Civil Works",
  "Real Estate & Redevelopment",
  "Government Projects",
  "Coastal & CRZ Developments",
  "Hospitality & Industrial Projects",
] as const;

export const clients = [
  "Godrej Properties",
  "K Raheja Corp",
  "Mahindra MHRIL",
  "Shapoorji Pallonji",
  "Joyville",
  "Afcons Infrastructure",
  "Dalmia Cement",
  "Lotus Developers",
  "Platinum Corp",
  "Paradigm Realty",
  "Suraj Estate Developers",
  "Baya Developers",
  "Regency Group",
  "Puravankara",
  "Embassy Developments",
] as const;

export const approach = [
  "Understand Project Vision",
  "Assess & Strategize",
  "Prepare & Coordinate",
  "Facilitate Approvals",
  "Ensure Long-term Sustainability",
] as const;

export const values = [
  {
    title: "Regulatory Intelligence",
    description:
      "Deep understanding of environmental, forest, CRZ and urban approval frameworks.",
  },
  {
    title: "Execution Orientation",
    description:
      "Structured project support from advisory to documentation, liaisoning and approval follow-through.",
  },
  {
    title: "Institutional Credibility",
    description:
      "Experience with leading corporates, developers, infrastructure stakeholders and government bodies.",
  },
  {
    title: "Sustainable Development",
    description:
      "A balanced approach that aligns growth, compliance and environmental responsibility.",
  },
] as const;

export const blogPosts = [
  {
    title: "Understanding CRZ Approvals for Coastal Development Projects",
    category: "Coastal Regulation",
    excerpt:
      "A practical overview of how project proponents can approach CRZ approvals, documentation and authority coordination.",
  },
  {
    title: "Why Early Environmental Due Diligence Matters",
    category: "Environmental Advisory",
    excerpt:
      "How pre-project regulatory assessment can reduce approval risk and improve project execution timelines.",
  },
  {
    title: "Sustainable Development and Statutory Compliance in India",
    category: "Sustainability",
    excerpt:
      "Balancing growth, governance and ecological responsibility across real estate and infrastructure projects.",
  },
] as const;

export const featuredProjects = [
  {
    slug: "multi-level-automated-parking-infrastructure",
    href: "/projects/multi-level-automated-parking-infrastructure",
    name: "Multi-Level Automated Parking Infrastructure",
    navLabel: "BMC Automated Parking",
    navDescription:
      "Public-utility parking infrastructure and institutional project support.",
    status: "Institutional Project",
    location: "Mumbai, Maharashtra",
    client: "BMC",
    service: "Public utility infrastructure and project execution.",
    summary:
      "An institutional infrastructure engagement supporting the development of modern multi-level automated parking facilities in Mumbai.",
    intro:
      "Project exposure involving public-utility infrastructure, statutory coordination, institutional interfaces and execution support for automated parking development.",
    image: "/projects/bmc-parking.jpg",
    facts: [
      {
        label: "Client / authority",
        value: "BMC",
      },
      {
        label: "Location",
        value: "Mumbai, Maharashtra",
      },
      {
        label: "Project type",
        value: "Public utility infrastructure",
      },
    ],
    sections: [
      {
        title: "Project context",
        body:
          "Multi-level automated parking infrastructure responds to the need for more efficient use of limited urban land while supporting organised public parking capacity.",
      },
      {
        title: "Scope of support",
        body:
          "The engagement involves project documentation, institutional coordination, regulatory interfaces and execution-oriented project facilitation.",
        items: [
          "Project documentation",
          "Authority coordination",
          "Approval tracking",
          "Execution support",
        ],
      },
      {
        title: "Institutional engagement",
        body:
          "The assignment requires structured communication across municipal, technical and project-delivery stakeholders.",
      },
    ],
  },
  {
    slug: "urban-infrastructure-development",
    href: "/projects/urban-infrastructure-development",
    name: "Urban Infrastructure Development",
    navLabel: "MMRDA Urban Infrastructure",
    navDescription:
      "Metropolitan infrastructure development and statutory coordination.",
    status: "Government Engagement",
    location: "Mumbai Metropolitan Region",
    client: "MMRDA",
    service:
      "Urban infrastructure development and statutory coordination.",
    summary:
      "Metropolitan infrastructure engagement involving institutional coordination, project documentation and development support.",
    intro:
      "Project exposure supporting urban infrastructure assignments connected with metropolitan development and public-sector stakeholder coordination.",
    image: "/projects/mmrda-infrastructure.jpg",
    facts: [
      {
        label: "Client / authority",
        value: "MMRDA",
      },
      {
        label: "Location",
        value: "Mumbai Metropolitan Region",
      },
      {
        label: "Project type",
        value: "Urban infrastructure",
      },
    ],
    sections: [
      {
        title: "Project context",
        body:
          "Metropolitan infrastructure projects require coordinated engagement across planning, engineering, regulatory and institutional workstreams.",
      },
      {
        title: "Scope of support",
        body:
          "Support includes documentation organisation, approval monitoring, stakeholder coordination and project facilitation.",
        items: [
          "Institutional coordination",
          "Approval tracking",
          "Technical-document support",
          "Project facilitation",
        ],
      },
      {
        title: "Development coordination",
        body:
          "The work helps connect project proponents, consultants and public authorities through a structured communication and documentation process.",
      },
    ],
  },
  {
    slug: "sra-housing-development",
    href: "/projects/sra-housing-development",
    name: "SRA Housing Development",
    navLabel: "SRA Housing Development",
    navDescription:
      "Affordable housing, rehabilitation and urban redevelopment support.",
    status: "Redevelopment",
    location: "Mumbai Metropolitan Region",
    client: "Maharashtra Housing Department",
    service:
      "Affordable housing, rehabilitation and development execution.",
    summary:
      "An urban rehabilitation and affordable-housing engagement involving redevelopment coordination and institutional interfaces.",
    intro:
      "Project exposure supporting housing rehabilitation and redevelopment within the institutional and regulatory framework applicable to SRA projects.",
    image: "/projects/sra-housing.jpg",
    facts: [
      {
        label: "Client / authority",
        value: "Maharashtra Housing Department",
      },
      {
        label: "Location",
        value: "Mumbai Metropolitan Region",
      },
      {
        label: "Project type",
        value: "SRA and affordable housing",
      },
    ],
    sections: [
      {
        title: "Project context",
        body:
          "SRA housing projects combine rehabilitation, housing delivery, planning requirements and multiple institutional stakeholder interfaces.",
      },
      {
        title: "Scope of support",
        body:
          "The engagement includes regulatory mapping, project coordination, documentation support and execution-focused facilitation.",
        items: [
          "Redevelopment coordination",
          "Regulatory mapping",
          "Institutional communication",
          "Execution support",
        ],
      },
      {
        title: "Housing and rehabilitation",
        body:
          "The project supports the delivery of structured rehabilitation and affordable-housing development within the Mumbai Metropolitan Region.",
      },
    ],
  },
] satisfies readonly ProjectItem[];

export function getServiceBySlug(slug: string) {
  return coreServices.find((service) => service.slug === slug);
}

export function getProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}