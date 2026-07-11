import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { SvgPageTransition } from "@/src/components/ui/SvgPageTransition";
import { siteConfig } from "@/src/data/site";
import StickyGetInTouch from "@/src/components/ui/StickyGetInTouch";

export const metadata: Metadata = {
  title: {
    default:
      "Redimension Realty | Environmental, Forest & Coastal Regulatory Consulting",
    template: "%s | Redimension Realty",
  },
  description: siteConfig.description,
  keywords: [
    "Environmental Clearance Consultant India",
    "CRZ Approval Consultant",
    "Forest Clearance Consultant",
    "Environmental Regulatory Consulting",
    "Coastal Regulatory Consulting",
    "Mumbai Environmental Consultant",
    "Redimension Realty",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SvgPageTransition>
          <Navbar />
          {children}
          <StickyGetInTouch showAfterScroll />
          <Footer />
        </SvgPageTransition>
      </body>
    </html>
  );
}