'use client';

import Head from 'next/head';


export default function SeoMetadata() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "InfinHues",
    "image": "https://yourdomain.com/logo.png", 
    "url": "https://infinhues.vercel.app/", 
    "telephone": "+91-1234567890", 
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Panaji", 
      "addressRegion": "Goa",
      "postalCode": "403001", 
      "addressCountry": "IN"
    },
    "description": "InfinHues provides professional painting services in Goa including residential, commercial, and artistic wall designs. Interior, exterior, waterproofing, and custom murals.",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": "Goa",
    "sameAs": [
      "https://www.instagram.com/", 
      "https://www.facebook.com/"
    ]
  };

  return (
    <Head>
      <title>Best Painting Contractors in Goa | InfinHues – Professional Painting Services in Goa | Residential, Commercial, Artistic Walls</title> 
      <meta
        name="description"
        content="InfinHues offers expert painting services in North and South Goa. Interior and exterior painting, wall designs, murals, waterproofing, and more." // ✅ Descriptive, keyword-rich
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://infinhues.vercel.app/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}