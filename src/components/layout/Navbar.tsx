"use client";

import CardNav from "@/src/components/ui/CardNav";

// const cardNavItems = [
//   {
//     label: "Company",
//     bgColor: "#031126",
//     textColor: "#ffffff",
//     links: [
//       { label: "Home", href: "/", ariaLabel: "Go to home page" },
//       { label: "About", href: "/about-us", ariaLabel: "Learn about Redimension Realty" },
//       { label: "Clients", href: "/clients", ariaLabel: "View clients" },
//       { label: "Careers", href: "/careers", ariaLabel: "View careers" },
//     ],
//   },
//   {
//     label: "Expertise",
//     bgColor: "#0f5a2d",
//     textColor: "#ffffff",
//     links: [
//       { label: "Services", href: "/services", ariaLabel: "View services" },
//       { label: "Projects", href: "/projects", ariaLabel: "View projects" },
//       { label: "Cases", href: "/case-studies", ariaLabel: "View case studies" },
//       { label: "Sectors", href: "/sectors-we-serve", ariaLabel: "View sectors served" },
//     ],
//   },
//   {
//     label: "Media",
//     bgColor: "#2f293a",
//     textColor: "#ffffff",
//     links: [
//       { label: "Gallery", href: "/gallery", ariaLabel: "View gallery" },
//       { label: "Blog", href: "/blog", ariaLabel: "Read insights" },
//       { label: "Contact", href: "/contact-us", ariaLabel: "Contact Redimension Realty" },
//     ],
//   },
// ];
// const cardNavItems = [
//   {
//     label: "Company",
//     bgColor: "#0F5A2D", // logo green
//     textColor: "#ffffff",
//     links: [
//       { label: "Home", href: "/", ariaLabel: "Go to home page" },
//       { label: "About", href: "/about-us", ariaLabel: "Learn about Redimension Realty" },
//       { label: "Clients", href: "/clients", ariaLabel: "View clients" },
//       { label: "Careers", href: "/careers", ariaLabel: "View careers" },
//     ],
//   },
//   {
//     label: "Expertise",
//     bgColor: "#C99A2E", // logo gold
//     textColor: "#031126",
//     links: [
//       { label: "Services", href: "/services", ariaLabel: "View services" },
//       { label: "Projects", href: "/projects", ariaLabel: "View projects" },
//       { label: "Sectors", href: "/sectors-we-serve", ariaLabel: "View sectors served" },
//     ],
//   },
//   {
//     label: "Connect",
//     bgColor: "#063B8F", // logo navy/blue
//     textColor: "#ffffff",
//     links: [
//       { label: "Gallery", href: "/gallery", ariaLabel: "View gallery" },
//       { label: "Blog", href: "/blog", ariaLabel: "Read blog insights" },
//       { label: "Contact", href: "/contact-us", ariaLabel: "Contact Redimension Realty" },
//     ],
//   },
// ];
// const cardNavItems = [
//   {
//     label: "Company",
//     bgColor: "#0F5A2D",
//     textColor: "#ffffff",
//     links: [
//       { label: "Home", href: "/", ariaLabel: "Go to home page" },
//       { label: "About", href: "/about-us", ariaLabel: "Learn about Redimension Realty" },
//       { label: "Clients", href: "/clients", ariaLabel: "View clients" },
//       { label: "Careers", href: "/careers", ariaLabel: "View careers" },
//     ],
//   },
//   {
//     label: "Explore",
//     bgColor: "#C99A2E",
//     textColor: "#031126",
//     links: [
//       { label: "Services", href: "/services", ariaLabel: "View services" },
//       { label: "Projects", href: "/projects", ariaLabel: "View projects" },
//       { label: "Sectors", href: "/sectors-we-serve", ariaLabel: "View sectors served" },
//       { label: "Gallery", href: "/gallery", ariaLabel: "View gallery" },
//       { label: "Blog", href: "/blog", ariaLabel: "Read blog insights" },
//       { label: "Contact", href: "/contact-us", ariaLabel: "Contact Redimension Realty" },
//     ],
//   },
// ];
const cardNavItems = [
  {
    label: "Explore",
    bgColor: "#0F5A2D",
    textColor: "#ffffff",
    links: [
      { label: "Home", href: "/", ariaLabel: "Go to home page" },
      { label: "About", href: "/about-us", ariaLabel: "Learn about Redimension Realty" },
      { label: "Projects", href: "/projects", ariaLabel: "View projects" },
      { label: "Services", href: "/services", ariaLabel: "View services" },
      
    ],
  },
  {
    label: "Company",
    bgColor: "#C99A2E",
    textColor: "#031126",
    links: [
      { label: "Sectors", href: "/sectors-we-serve", ariaLabel: "View sectors served" },
      { label: "Clients", href: "/clients", ariaLabel: "View clients" },
      { label: "Careers", href: "/careers", ariaLabel: "View careers" },
    
      { label: "Gallery", href: "/gallery", ariaLabel: "View gallery" },
      { label: "Blog", href: "/blog", ariaLabel: "Read blog insights" },
    ],
  },
];
export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      {/* <CardNav
        logo="/logo/redimension-logo.png"
        logoAlt="Redimension Realty Logo"
        items={cardNavItems}
        baseColor="#ffffff"
        menuColor="#031126"
        buttonBgColor="#031126"
        buttonTextColor="#ffffff"
        ease="power3.out"
        theme="light"
        ctaLabel="Enquire"
        ctaHref="/contact-us" */}
      {/* /> */}
      <CardNav
        logo="/logo/redimension-logo.png"
        logoAlt="Redimension Realty Private Limited"
        items={cardNavItems}
        baseColor="#ffffff"
        menuColor="#070707"
        buttonBgColor="#C99A2E"
        buttonTextColor="#031126"
      />
    </header>
  );
}
