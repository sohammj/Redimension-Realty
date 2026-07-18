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
];

export const coreServices = [
  {
    title: "Environmental and Forest Clearance",
    label: "Environmental approvals",
    summary:
      "Support for environmental-clearance applicability, EIA and EMP coordination, forest-diversion proposals, Stage I and Stage II forest-clearance processes, pollution-control consents and post-clearance compliance.",
    cta: "Explore Environmental and Forest Clearance",
    href: "/services/environmental-forest-clearance",
    image:
      "https://images.unsplash.com/photo-1767917920879-dca2df5f1868?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "CRZ and Coastal Regulatory Advisory",
    label: "Coastal regulation",
    summary:
      "Coastal applicability and classification review, Coastal Zone Management Plan interpretation, coastal due diligence, statutory documentation and coordination with coastal regulatory authorities.",
    cta: "Explore CRZ and Coastal Advisory",
    href: "/services/crz-coastal-regulatory-advisory",
    image:
      "https://images.unsplash.com/photo-1750715832891-01d5bd941cf8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "BMC/MMRDA and Public Infrastructure",
    label: "Public infrastructure",
    summary:
      "Documentation, approval tracking, stakeholder coordination and project facilitation for municipal, metropolitan and public-utility assignments.",
    cta: "Explore Infrastructure Support",
    href: "/services/public-infrastructure",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Redevelopment, SRA and Construction",
    label: "Urban redevelopment",
    summary:
      "Regulatory mapping and coordination for urban renewal, affordable housing, redevelopment and construction projects, including environmental and coastal interfaces where applicable.",
    cta: "Explore Redevelopment Support",
    href: "/services/redevelopment-sra-construction",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  },
] as const;
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
];

export const sectors = [
  "Environmental Consulting",
  "Infrastructure & Civil Works",
  "Real Estate & Redevelopment",
  "Government Projects",
  "Coastal & CRZ Developments",
  "Hospitality & Industrial Projects",
];

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
];

export const approach = [
  "Understand Project Vision",
  "Assess & Strategize",
  "Prepare & Coordinate",
  "Facilitate Approvals",
  "Ensure Long-term Sustainability",
];

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
];


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
];



export const featuredProjects = [
  {
    name: "Multi-Level Automated Parking Infrastructure",
    status: "Institutional Project",
    location: "Mumbai, Maharashtra",
    client: "BMC",
    service: "Public utility infrastructure and project execution.",
    image: "/projects/bmc-parking.jpg",
  },
  {
    name: "Urban Infrastructure Development",
    status: "Government Engagement",
    location: "Mumbai Metropolitan Region",
    client: "MMRDA",
    service: "Urban infrastructure development and statutory coordination.",
    image: "/projects/mmrda-infrastructure.jpg",
  },
  {
    name: "SRA Housing Development",
    status: "Redevelopment",
    location: "Mumbai Metropolitan Region",
    client: "Maharashtra Housing Department",
    service: "Affordable housing, rehabilitation and development execution.",
    image: "/projects/sra-housing.jpg",
  },
];