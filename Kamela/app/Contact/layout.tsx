import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Us | Get in Touch with Kamela International | Sandton, Johannesburg",
  description:
    "Contact Kamela International — South Africa's QCTO-accredited training provider and assessment centre. Reach us at applications@kamelatraining.co.za or call 010 634 2180. Located in Bryanston, Sandton. Enquiries welcome from learnership candidates, corporates and training providers nationally.",
  keywords: [
    // Direct contact searches
    "contact Kamela International",
    "Kamela International phone number",
    "Kamela International email",
    "Kamela International Sandton contact",
    "Kamela International Bryanston",
    "Kamela International enquiry",
    "Kamela training contact details",

    // Corporate / training provider audience
    "contact training provider South Africa",
    "learnership provider contact Johannesburg",
    "QCTO assessment centre contact",
    "corporate training enquiry South Africa",
    "B-BBEE training provider enquiry",
    "learnership programme enquiry South Africa",
    "skills development provider contact",
    "accredited training provider Sandton",
    "enterprise training solutions enquiry",

    // Learnership candidate audience
    "apply for learnership South Africa",
    "learnership application South Africa",
    "EISA booking enquiry",
    "study enquiry Kamela International",
    "NQF learnership application",
    "accredited course enquiry South Africa",
    "online learning enquiry South Africa",
    "youth skills development enquiry",

    // Local
    "training provider Sandton contact",
    "training centre Bryanston contact",
    "skills development Johannesburg contact",
    "Kamela International Wedgefield Office Park",
  ],
  authors: [
    { name: "Kamela International", url: "https://kamelatraining.co.za" },
  ],
  creator: "Kamela International",
  publisher: "Kamela International",
  metadataBase: new URL("https://kamelatraining.co.za"),
  alternates: {
    canonical: "https://kamelatraining.co.za/contact",
  },
  openGraph: {
    title: "Contact Kamela International | Training Provider & Assessment Centre",
    description:
      "Get in touch with Kamela International. Email applications@kamelatraining.co.za or call 010 634 2180. Enquiries from learnership candidates, corporates and training providers welcome — we operate nationally across South Africa.",
    url: "https://kamelatraining.co.za/contact",
    siteName: "Kamela International",
    images: [
      {
        url: "https://kamelatraining.co.za/Kamela8.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Kamela International — QCTO-Accredited Training Provider in Sandton",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kamela International | Sandton, South Africa",
    description:
      "Reach Kamela International at applications@kamelatraining.co.za or 010 634 2180. Learnership applications, corporate training enquiries and EISA bookings welcome.",
    images: ["https://kamelatraining.co.za/Kamela8.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}