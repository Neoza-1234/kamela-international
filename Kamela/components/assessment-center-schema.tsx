export default function AssessmentCentreSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    name: "Kamela International — QCTO Assessment Centre",
    alternateName: "Kamela International",
    description:
      "QCTO-accredited Assessment Centre in Sandton offering External Integrated Summative Assessments (EISA) for NQF Level 5 occupational qualifications. Serving learnership candidates, training providers and employers across Johannesburg and Gauteng.",
    url: "https://kamelatraining.co.za/Assessment-Center",
    telephone: "+27106342180",
    image: "https://kamelatraining.co.za/Kamela8.jpg",
    logo: "https://kamelatraining.co.za/favicon.ico",
    priceRange: "$$",
    currenciesAccepted: "ZAR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 Muswell Rd S, Wedgefield Office Park",
      addressLocality: "Bryanston",
      addressRegion: "Gauteng",
      postalCode: "2191",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.0574,
      longitude: 28.0138,
    },
    hasMap: "https://maps.google.com/?q=17+Muswell+Rd+S+Bryanston+Sandton+2191",
    areaServed: [
      {
        "@type": "City",
        name: "Johannesburg",
      },
      {
        "@type": "City",
        name: "Sandton",
      },
      {
        "@type": "AdministrativeArea",
        name: "Gauteng",
      },
      {
        "@type": "Country",
        name: "South Africa",
      },
    ],
    knowsAbout: [
      "QCTO Assessments",
      "External Integrated Summative Assessment",
      "EISA",
      "Occupational Qualifications",
      "NQF Level 5 Learnerships",
      "Contact Centre Manager NQF 5",
      "Office Administrator NQF 5",
      "Project Manager NQF 5",
      "HR Administrator",
      "Marketing Coordinator NQF 5",
      "Skills Development",
      "B-BBEE Learnerships",
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
    sameAs: [
      "https://kamelatraining.co.za",
      "https://www.linkedin.com/in/kamela-international-60510b315/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}