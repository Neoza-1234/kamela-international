// Define the BadgeLevel type to represent the different levels of certification badges

export type BadgeLevel =
  | "Foundational"
  | "Associate"
  | "Professional"
  | "Specialty"
  | "Expert"
  | "Core"
  | "Plus"
  | "CE";

// Define the CertificateTheme interface to specify the visual design for each certificate
export interface CertificateTheme {
  layout: "aws" | "azure" | "comptia";

  primaryColor: string;

  accentColor: string;

  background: string;

  headingFont: string;

  bodyFont: string;

  providerLogo: string;
}

// Define the Certificate interface with all necessary properties

export interface Certificate {
  slug: string;

  title: string;

  shortName: string;

  provider: "AWS" | "Azure" | "CompTIA";

  level: BadgeLevel;

  examCode: string;

  tagline: string;

  description: string;

  topics: string[];

  prepHours: number;

  practiceExam: string;

  questionCount: number;

  passingScore: number;

  durationMinutes: number;

  expiryDate?: string;

  examGuideUrl: string;

  badgeImage: string;

  theme: CertificateTheme;
}

// Define themes for each provider

const awsTheme: CertificateTheme = {
  layout: "aws",
  primaryColor: "#FF9900",
  accentColor: "#232F3E",
  background: "linear-gradient(135deg, #0d1117 0%, #1a2332 60%, #0f1923 100%)",
  headingFont: "Rajdhani",
  bodyFont: "IBM Plex Sans",
  providerLogo: "/logos/aws.svg",
};

const azureTheme: CertificateTheme = {
  layout: "azure",
  primaryColor: "#0078D4",
  accentColor: "#50E6FF",
  background: "linear-gradient(160deg, #020b18 0%, #061c38 55%, #040f22 100%)",
  headingFont: "Syne",
  bodyFont: "DM Sans",
  providerLogo: "/logos/azure.svg",
};

const comptiaTheme: CertificateTheme = {
  layout: "comptia",
  primaryColor: "#C8102E",
  accentColor: "#F5A623",
  background: "linear-gradient(145deg, #0a0a0a 0%, #1a0a0a 50%, #0d0d0d 100%)",
  headingFont: "Bebas Neue",
  bodyFont: "Source Sans 3",
  providerLogo: "/logos/comptia.svg",
};


//AWS Certificates




