import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.shortName} — Haute Optique & Lunetterie Abidjan (Plateau & Marcory)`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Opticien Abidjan",
    "Lunettes de vue Abidjan",
    "Lunettes de soleil Côte d'Ivoire",
    "Examen de vue Plateau",
    "Opticien Marcory Montigny",
    "Henry Jullien Abidjan",
    "Lunettes anti lumière bleue",
    "Opticien agréé assurances ASCOMA NSIA SAHAM SUNU"
  ],
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fr_CI",
    url: siteConfig.url,
    title: `${siteConfig.shortName} — Haute Lunetterie & Bilan Visuel Abidjan`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/editorial/GL_CLP_VTO_D_03_NEW.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
