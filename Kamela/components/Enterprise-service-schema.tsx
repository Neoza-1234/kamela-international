export default function EnterpriseServicesSchema() {
  const organization = {
    "@id": "https://kamelatraining.co.za/#organization",
    name: "Kamela International",
    url: "https://kamelatraining.co.za",
  };

  const services = [
    {
      "@type": "Service",
      "@id": "https://kamelatraining.co.za/Solutions/Enterprise#enterprise-services",
      name: "Learnership Programme Delivery",
      alternateName: "Learnership Implementation and Management",
      description:
        "End-to-end learnership programme delivery for South African corporates and government entities. Kamela manages learnership recruitment, registration, workplace-based learning facilitation, QCTO assessments and EISA — nationally across all nine provinces.",
      serviceType: "Learnership Programme Delivery",
      provider: organization,
      areaServed: {
        "@type": "Country",
        name: "South Africa",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Corporates, large employers, government departments, host employers",
      },
      url: "https://kamelatraining.co.za/Solutions/Enterprise",
      offers: {
        "@type": "Offer",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
        areaServed: "ZA",
      },
    },
    {
      "@type": "Service",
      "@id": "https://kamelatraining.co.za/Solutions/Enterprise#enterprise-services",
      name: "B-BBEE Skills Development & Scorecard Optimisation",
      alternateName: "B-BBEE Compliant Training Solutions",
      description:
        "Accredited B-BBEE skills development programmes designed to maximise your skills development spend and improve your B-BBEE scorecard. Includes Section 18A learnership tax incentive facilitation, SETA-aligned training and transformation reporting for South African companies.",
      serviceType: "B-BBEE Skills Development",
      provider: organization,
      areaServed: {
        "@type": "Country",
        name: "South Africa",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "South African companies seeking B-BBEE scorecard improvement, HR and transformation managers",
      },
      url: "https://kamelatraining.co.za/Solutions/Enterprise",
      offers: {
        "@type": "Offer",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
        areaServed: "ZA",
      },
    },
    {
      "@type": "Service",
      "@id": "https://kamelatraining.co.za/Solutions/Enterprise#enterprise-services",
      name: "SMME & Enterprise Development",
      alternateName: "Small Business and Supplier Development",
      description:
        "Structured enterprise and supplier development programmes that build the capacity of SMMEs and township enterprises. Kamela designs and delivers accredited business skills training, mentorship, and development initiatives aligned to B-BBEE enterprise development spend requirements.",
      serviceType: "Enterprise and Supplier Development",
      provider: organization,
      areaServed: {
        "@type": "Country",
        name: "South Africa",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "SMMEs, township enterprises, corporates with enterprise development obligations",
      },
      url: "https://kamelatraining.co.za/Solutions/Enterprise",
      offers: {
        "@type": "Offer",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
        areaServed: "ZA",
      },
    },
    {
      "@type": "Service",
      "@id": "https://kamelatraining.co.za/Solutions/Enterprise#enterprise-services",
      name: "Recruitment as a Service",
      alternateName: "Learnership Candidate Recruitment and Talent Sourcing",
      description:
        "End-to-end recruitment solutions for South African employers. Kamela sources, screens and places learnership candidates, graduates and entry-level talent — building sustainable talent pipelines for companies running learnerships or graduate programmes nationally.",
      serviceType: "Recruitment as a Service",
      provider: organization,
      areaServed: {
        "@type": "Country",
        name: "South Africa",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "HR managers, talent acquisition teams, companies running learnership programmes",
      },
      url: "https://kamelatraining.co.za/Solutions/Enterprise",
      offers: {
        "@type": "Offer",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
        areaServed: "ZA",
      },
    },
    {
      "@type": "Service",
      "@id": "https://kamelatraining.co.za/Solutions/Enterprise#enterprise-services",
      name: "Early-Stage Talent Development",
      alternateName: "Graduate and Youth Development Programmes",
      description:
        "Structured early-stage talent development programmes that prepare school leavers, graduates and young professionals for the workplace. Includes work readiness training, work integrated learning, and accredited occupational qualifications designed to build South Africa's next generation workforce.",
      serviceType: "Early-Stage Talent Development",
      provider: organization,
      areaServed: {
        "@type": "Country",
        name: "South Africa",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "School leavers, graduates, young professionals, companies building youth talent pipelines",
      },
      url: "https://kamelatraining.co.za/Solutions/Enterprise",
      offers: {
        "@type": "Offer",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
        areaServed: "ZA",
      },
    },
    {
      "@type": "Service",
      "@id": "https://kamelatraining.co.za/Solutions/Enterprise#enterprise-services",
      name: "Talent Re-Skilling & Up-Skilling Solutions",
      alternateName: "Corporate Workforce Upskilling and Reskilling",
      description:
        "Accredited re-skilling and up-skilling programmes for existing employees. Kamela designs blended learning solutions — combining digital and facilitated learning — to close skills gaps, develop management capability and future-proof workforces for South African companies, nationally.",
      serviceType: "Workforce Re-Skilling and Up-Skilling",
      provider: organization,
      areaServed: {
        "@type": "Country",
        name: "South Africa",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "L&D managers, HR directors, corporates investing in employee development",
      },
      url: "https://kamelatraining.co.za/Solutions/Enterprise",
      offers: {
        "@type": "Offer",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
        areaServed: "ZA",
      },
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": services,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}