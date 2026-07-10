"use client";

import CardNav from "@/src/components/ui/CardNav";

const cardNavItems = [
  {
    label: "Explore",
    bgColor: "#0F5A2D",
    textColor: "#ffffff",
    links: [
      { label: "Home", href: "/", ariaLabel: "Go to home page" },
      {
        label: "About",
        href: "/about-us",
        ariaLabel: "Learn about Redimension Realty",
      },
      {
        label: "Projects",
        href: "/projects",
        ariaLabel: "View projects",
      },
      {
        label: "Services",
        href: "/services",
        ariaLabel: "View services",
      },
    ],
  },
  {
    label: "Company",
    bgColor: "#C99A2E",
    textColor: "#031126",
    links: [
      {
        label: "Sectors",
        href: "/sectors-we-serve",
        ariaLabel: "View sectors served",
      },
      { label: "Clients", href: "/clients", ariaLabel: "View clients" },
      { label: "Careers", href: "/careers", ariaLabel: "View careers" },
      { label: "Gallery", href: "/gallery", ariaLabel: "View gallery" },
      {
        label: "Blog",
        href: "/blog",
        ariaLabel: "Read blog insights",
      },
    ],
  },
];

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <CardNav
        logo="/logo/redimension-logo.png"
        logoAlt="Redimension Realty Private Limited"
        items={cardNavItems}
        baseColor="#ffffff"
        menuColor="#070707"
        buttonBgColor="#C99A2E"
        buttonTextColor="#031126"
        ctaLabel="Enquire"
        ctaHref="/contact-us"
      />
    </header>
  );
}
