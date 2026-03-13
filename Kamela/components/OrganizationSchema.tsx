export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    "@id": "https://kamelatraining.co.za/#organization",
    name: "Kamela International",
    legalName: "Kamela International",
    url: "https://kamelatraining.co.za",
    logo: {
      "@type": "ImageObject",
      url: "https://kamelatraining.co.za/favicon.ico",
      width: 112,
      height: 112,
    },
    image: "https://kamelatraining.co.za/Kamela8.jpg",
    description:
      "Kamela International is a nationally operating, QCTO-accredited training provider and assessment centre based in Sandton, South Africa. Founded in 2015, Kamela partners with corporates, large employers, government entities and SMMEs to deliver accredited learnerships, B-BBEE skills development, workforce upskilling, enterprise development and recruitment as a service.",
    foundingDate: "2015",
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 Muswell Rd S, Wedgefield Office Park",
      addressLocality: "Bryanston",
      addressRegion: "Gauteng",
      postalCode: "2191",
      addressCountry: "ZA",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+27106342180",
        contactType: "customer service",
        areaServed: "ZA",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+27106342180",
        contactType: "sales",
        areaServed: "ZA",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/kamela-international-60510b315/",
    ],
    knowsAbout: [
      "Learnership Programme Delivery",
      "QCTO Accredited Training",
      "B-BBEE Skills Development",
      "External Integrated Summative Assessment",
      "Occupational Qualifications",
      "Workforce Development",
      "SMME Development",
      "Enterprise Development",
      "Recruitment as a Service",
      "Talent Pipeline Development",
      "Skills Development Facilitation",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "QCTO Accreditation",
      recognizedBy: {
        "@type": "Organization",
        name: "Quality Council for Trades and Occupations",
        alternateName: "QCTO",
        url: "https://www.qcto.org.za",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
