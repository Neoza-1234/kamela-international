import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study | Accredited Online & Blended Learning Programmes | Kamela International",
  description:
    "Explore Kamela International's accredited study programmes in ICT, Business, Governance, and Sales. MICT SETA, W&R SETA, TETA & SERVICES SETA recognised qualifications — available online, blended, or face-to-face across South Africa.",
  keywords: [
    "accredited online courses South Africa",
    "MICT SETA courses",
    "W&R SETA qualifications",
    "TETA training programmes",
    "SERVICES SETA courses",
    "online learning",
    "business administration courses",
    "governance training South Africa",
    "sales and marketing qualifications",
    "QCTO qualifications",
    "blended learning South Africa",
    "online study South Africa",
    "NQF qualifications",
    "SAQA accredited courses",
    "learnership programmes",
    "Kamela International study",
    "skills development South Africa",
    "career training programmes",
    "unemployed learner courses",
    "youth skills development",
    "aws certifications",
    "azure certifications",
    "comptia certifications",
    "business management courses",
    "it courses",
    "cloud administrator course",
    "software developer course",
    "cybersecurity analyst course",
    "computer technician",
    "data science practitioner",
    "project manager",
    "contact centre manager",
    "supply chain practitioner",
    "supply chain manager",
    "office administrator",
    "office supervisor",
    "human resource management administrator",
    "retail supervisor",
    "quality assurer",
    "sales representative",
    "marketing coordinator",
    "kamela international",
    "kamela training",
    "occupational qualification assessment NQF 5",
    

  ],
  authors: [{ name: "Kamela International", url: "https://kamelatraining.co.za" }],
  creator: "Kamela International",
  publisher: "Kamela International",
  metadataBase: new URL("https://kamelatraining.co.za"),
  alternates: {
    canonical: "https://kamelatraining.co.za/Solutions/Study",
  },
  openGraph: {
    title: "Study | Accredited Learning Programmes | Kamela International",
    description:
      "MICT SETA, W&R SETA, TETA & SERVICES SETA accredited programmes in ICT, Business, Governance, and Sales. Study online, blended, or face-to-face across all 9 provinces.",
    url: "https://kamelatraining.co.za/Solutions/Study",
    siteName: "Kamela International",
    images: [
      {
        url: "https://kamelatraining.co.za/icons/study-hero.png",
        width: 1200,
        height: 630,
        alt: "Kamela International — Future-Ready Learning Community",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Accredited Programmes | Kamela International",
    description:
      "ICT, Business, Governance & Sales qualifications — SETA accredited, available online or blended across South Africa.",
    images: ["https://kamelatraining.co.za/icons/study-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function StudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
