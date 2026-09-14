import React from 'react';
import { siteConfig } from '@/config/site';

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Optician",
    "name": siteConfig.name,
    "image": `${siteConfig.url}/images/brand/logo.png`,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": [siteConfig.contactPlateau, siteConfig.contactMarcory],
    "email": siteConfig.email,
    "priceRange": "$$",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Avenue Chardy / Boulevard de la République",
        "addressLocality": "Abidjan",
        "addressRegion": "Plateau",
        "addressCountry": "CI"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Rue A55 Montigny",
        "addressLocality": "Abidjan",
        "addressRegion": "Marcory",
        "addressCountry": "CI"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 5.3261,
      "longitude": -4.0197
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.instagram
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
