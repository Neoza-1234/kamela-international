
export type BadgeLevel =
  | "Foundational"
  | "Associate"
  | "Professional"
  | "Specialty"
  | "Expert"
  | "Core"
  | "Plus"
  | "CE";

export type LearningType = "Self-paced online" | "Blended (online + in-person)";

export type AssessmentFormat =
  | "Multiple choice"
  | "Multiple response"
  | "Drag-and-drop"
  | "Performance-based"
  | "Case study"
  | "Pass/Fail";

// ---------------------------------------------------------------------------
// Theme — drives per-provider visual identity within the shared layout
// ---------------------------------------------------------------------------

export interface CertificateTheme {
  /** Primary brand colour (hex) */
  primaryColor: string;
  /** Accent / highlight colour */
  accentColor: string;
  /** Hero & section background (CSS gradient or solid colour) */
  background: string;
  /** Google Font name for headings */
  headingFont: string;
  /** Google Font name for body text */
  bodyFont: string;
  /** Provider logo path inside /public/logos/ */
  providerLogo: string;
  /** Badge / ribbon colour for level pill */
  levelColor: string;
}

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------

export interface CertificatePricing {
  currency: "ZAR";
  symbol: "R";
  /** Once-off fee for full course & lesson access */
  coursePrice: number;
  /** Official exam voucher fee (converted from USD at ~R16/USD) */
  examFee: number;
  /** coursePrice + examFee */
  totalCost: number;
  /** totalCost / 6, rounded to nearest R10 — 0% interest instalment plan */
  monthlyInstalment: number;
  instalmentMonths: 6;
  /** Short note on what course price covers */
  coursePriceNote: string;
  /** Short note on exam fee source & testing provider */
  examFeeNote: string;
}

// ---------------------------------------------------------------------------
// What Students Will Learn — 4 cards, each with an inline SVG icon
// ---------------------------------------------------------------------------

export interface LearningCard {
  /** Card heading (short, 3-6 words) */
  title: string;
  /** One-sentence explanation */
  description: string;
  /**
   * Inline SVG string (viewBox="0 0 24 24", stroke-based, no fill).
   * Rendered directly with dangerouslySetInnerHTML in the layout component.
   */
  iconSvg: string;
}

// ---------------------------------------------------------------------------
// Module — one item in the course curriculum
// ---------------------------------------------------------------------------

export interface CourseModule {
  /** Module number (1-based) */
  number: number;
  /** Module title */
  title: string;
  /** Key topics or sub-topics covered in this module */
  topics: string[];
  /** Approximate duration in hours */
  durationHours: number;
}

// ---------------------------------------------------------------------------
// Assessment Details
// ---------------------------------------------------------------------------

export interface AssessmentDetails {
  /** Question formats used in the exam */
  formats: AssessmentFormat[];
  /** Total number of questions */
  questionCount: number;
  /** Exam duration in minutes */
  durationMinutes: number;
  /** Passing score — numeric (AWS/Azure out of 1000, CompTIA out of 900) or "Pass/Fail" */
  passingScore: number | "Pass/Fail";
  /** Testing delivery options */
  deliveryOptions: string[];
  /** Languages the exam is available in */
  languages: string[];
  /** Validity period of the certification once earned */
  validityYears: number | "Does not expire";
  /** Any prerequisites required before sitting the exam */
  prerequisites: string[];
}

// ---------------------------------------------------------------------------
// Why Choose Kamela — three fixed highlight cards
// ---------------------------------------------------------------------------

export interface KamelaHighlight {
  /** Card heading */
  title: string;
  /** 1-2 sentence supporting copy */
  description: string;
  /** Inline SVG icon string (viewBox="0 0 24 24", stroke-based) */
  iconSvg: string;
}

// ---------------------------------------------------------------------------
// Root Certificate interface
// ---------------------------------------------------------------------------

export interface Certificate {
  /** URL-safe slug for /certifications/[slug] routing */
  slug: string;
  /** Full official certification name */
  fullName: string;
  /** Short display title used in cards and navigation */
  title: string;
  /** Cloud / IT vendor */
  provider: "AWS" | "Azure" | "CompTIA";
  /** Difficulty / badge tier */
  level: BadgeLevel;
  /** Official exam code */
  examCode: string;
  /** Approximate total preparation hours */
  prepHours: number;
  /** Available learning delivery modes */
  learningTypes: LearningType[];
  /**
   * Hero image path inside /public/heroes/.
   * Displayed as the full-width banner at the top of the cert page.
   */
  heroImage: string;
  /** 3-4 sentence marketing description shown beneath the hero */
  description: string;
  /** Four learning outcome cards shown in the "What You'll Learn" section */
  learningCards: [LearningCard, LearningCard, LearningCard, LearningCard];
  /** Bullet list of practical skills gained — shown as tags or a list */
  skillsGained: string[];
  /** Entry requirements or recommended experience before enrolling */
  admissionRequirements: string[];
  /** Full course curriculum broken into modules */
  modules: CourseModule[];
  /** Exam structure and assessment breakdown */
  assessment: AssessmentDetails;
  /** Three "Why Choose Kamela" highlight cards */
  whyKamela: [KamelaHighlight, KamelaHighlight, KamelaHighlight];
  /** Pricing in ZAR */
  pricing: CertificatePricing;
  /** Visual theme — colours, fonts, logo */
  theme: CertificateTheme;
}

// ---------------------------------------------------------------------------
// Shared Provider Themes
// ---------------------------------------------------------------------------

const awsTheme: CertificateTheme = {
  primaryColor: "#FF9900",
  accentColor: "#232F3E",
  background: "linear-gradient(135deg, #0d1117 0%, #1a2332 60%, #0f1923 100%)",
  headingFont: "Rajdhani",
  bodyFont: "IBM Plex Sans",
  providerLogo: "/logos/aws.svg",
  levelColor: "#FF9900",
};

const azureTheme: CertificateTheme = {
  primaryColor: "#0078D4",
  accentColor: "#50E6FF",
  background: "linear-gradient(160deg, #020b18 0%, #061c38 55%, #040f22 100%)",
  headingFont: "Syne",
  bodyFont: "DM Sans",
  providerLogo: "/logos/azure.svg",
  levelColor: "#0078D4",
};

const comptiaTheme: CertificateTheme = {
  primaryColor: "#C8102E",
  accentColor: "#F5A623",
  background: "linear-gradient(145deg, #0a0a0a 0%, #1a0a0a 50%, #0d0d0d 100%)",
  headingFont: "Bebas Neue",
  bodyFont: "Source Sans 3",
  providerLogo: "/logos/comptia.svg",
  levelColor: "#C8102E",
};

// ---------------------------------------------------------------------------
// Shared "Why Choose Kamela" cards — identical across all certifications
// ---------------------------------------------------------------------------

const whyKamela: [KamelaHighlight, KamelaHighlight, KamelaHighlight] = [
  {
    title: "Expert Instructors",
    description:
      "Learn from certified professionals with real-world industry experience who guide you from theory to hands-on practice.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14c3.314 0 6-2.686 6-6S15.314 2 12 2 6 4.686 6 8s2.686 6 6 6z"/><path d="M3 21c0-3.866 4.029-7 9-7s9 3.134 9 7"/><path d="M16 8h2M18 6v4"/></svg>`,
  },
  {
    title: "Hands-On Labs & Projects",
    description:
      "Every course includes practical labs, sandbox environments, and real-world scenarios so you graduate job-ready, not just exam-ready.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4"/><path d="M9 3v18M15 3h4a2 2 0 012 2v4"/><path d="M14 14l7-7m0 0h-4m4 0v4"/></svg>`,
  },
  {
    title: "Flexible Payment Plans",
    description:
      "Spread the cost of your certification over 6 months with our interest-free instalment plan — no large upfront commitment required.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4M14 15h4"/></svg>`,
  },
];

// ---------------------------------------------------------------------------
// AWS Certifications
// ---------------------------------------------------------------------------

const awsCertificates: Certificate[] = [
  // ── AWS Cloud Practitioner ─────────────────────────────────────────────
  {
    slug: "aws-cloud-practitioner",
    fullName: "AWS Certified Cloud Practitioner",
    title: "Cloud Practitioner",
    provider: "AWS",
    level: "Foundational",
    examCode: "CLF-C02",
    prepHours: 40,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/aws-cloud-practitioner.jpg",
    description:
      "The AWS Certified Cloud Practitioner is the ideal entry point into the world of cloud computing. This course provides a broad overview of AWS Cloud concepts, core services, security, architecture, pricing, and support. Whether you are new to IT or an experienced professional moving into the cloud, this certification establishes the foundational knowledge needed to confidently engage with AWS technologies. No prior technical experience is required — just curiosity and commitment.",
    learningCards: [
      {
        title: "Cloud Fundamentals",
        description: "Understand core cloud concepts including IaaS, PaaS, SaaS, and the AWS global infrastructure.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 110-14h.5"/><path d="M17 5.5A4.5 4.5 0 0121.5 10v.5A3.5 3.5 0 0118 14h-1"/></svg>`,
      },
      {
        title: "Core AWS Services",
        description: "Explore key services like EC2, S3, RDS, and Lambda that power modern cloud applications.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
      },
      {
        title: "Security & Compliance",
        description: "Learn the shared responsibility model, IAM basics, and AWS compliance frameworks.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      },
      {
        title: "Billing & Pricing",
        description: "Navigate AWS pricing models, cost management tools, and support plan tiers with confidence.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v2m0 8v2M9 9h4a2 2 0 010 4H9"/></svg>`,
      },
    ],
    skillsGained: [
      "Cloud computing concepts and value proposition",
      "AWS global infrastructure and regions",
      "Core compute, storage, and networking services",
      "Identity and access management (IAM)",
      "AWS pricing calculator and billing dashboard",
      "Cloud security best practices",
      "AWS Well-Architected Framework basics",
      "Support plans and service SLAs",
    ],
    admissionRequirements: [
      "No prior IT or cloud experience required",
      "Basic computer literacy recommended",
      "Suitable for business stakeholders, sales, and technical beginners",
    ],
    modules: [
      { number: 1, title: "Introduction to Cloud Computing", topics: ["What is cloud computing", "Cloud deployment models", "Benefits of AWS Cloud"], durationHours: 4 },
      { number: 2, title: "AWS Global Infrastructure", topics: ["Regions & Availability Zones", "Edge locations", "AWS Local Zones"], durationHours: 3 },
      { number: 3, title: "Core AWS Services", topics: ["EC2 compute basics", "S3 storage", "RDS & databases", "Lambda intro"], durationHours: 8 },
      { number: 4, title: "Security & Compliance", topics: ["Shared responsibility model", "IAM users, groups & policies", "AWS compliance programs"], durationHours: 6 },
      { number: 5, title: "Billing, Pricing & Support", topics: ["AWS Free Tier", "Pricing calculator", "Cost Explorer", "Support plan tiers"], durationHours: 5 },
      { number: 6, title: "Exam Preparation", topics: ["Practice questions", "Mock exams", "Exam tips & strategy"], durationHours: 6 },
    ],
    assessment: {
      formats: ["Multiple choice", "Multiple response"],
      questionCount: 65,
      durationMinutes: 90,
      passingScore: 700,
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English", "Japanese", "Korean", "Simplified Chinese", "Spanish", "French", "German", "Italian", "Portuguese"],
      validityYears: 3,
      prerequisites: ["None"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 1800, examFee: 1600,
      totalCost: 3400, monthlyInstalment: 570,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to video lessons, practice exams & study notes",
      examFeeNote: "$100 USD exam voucher via Pearson VUE (converted at ~R16/USD)",
    },
    theme: awsTheme,
  },

  // ── AWS Solutions Architect Associate ──────────────────────────────────
  {
    slug: "aws-solutions-architect-associate",
    fullName: "AWS Certified Solutions Architect – Associate",
    title: "Solutions Architect Associate",
    provider: "AWS",
    level: "Associate",
    examCode: "SAA-C03",
    prepHours: 100,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/aws-solutions-architect-associate.jpg",
    description:
      "The AWS Certified Solutions Architect – Associate is one of the most sought-after cloud certifications in the industry. This course teaches you how to design and deploy resilient, high-performing, secure, and cost-optimised architectures on AWS. You will work through real-world scenarios covering multi-tier applications, disaster recovery strategies, networking design, and security integration. This certification is your gateway to a career as a cloud architect or senior cloud engineer.",
    learningCards: [
      {
        title: "Resilient Architecture Design",
        description: "Design fault-tolerant systems using Elastic Load Balancing, Auto Scaling, and multi-AZ deployments.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      },
      {
        title: "High-Performance Networking",
        description: "Build VPCs, configure Route 53 routing policies, and implement CloudFront distributions for global performance.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>`,
      },
      {
        title: "Secure Applications",
        description: "Apply IAM roles, KMS encryption, Security Groups, and ACM certificates to protect workloads end-to-end.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
      },
      {
        title: "Cost Optimisation",
        description: "Evaluate Reserved Instances, Savings Plans, and Spot Instances to architect cost-efficient solutions.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v2m0 8v2M9 9h4a2 2 0 010 4H9"/></svg>`,
      },
    ],
    skillsGained: [
      "Designing multi-tier AWS architectures",
      "VPC design with subnets, route tables, and gateways",
      "Auto Scaling and Elastic Load Balancing",
      "S3 storage classes and lifecycle policies",
      "RDS Multi-AZ and read replicas",
      "CloudFront CDN configuration",
      "IAM policies, roles and cross-account access",
      "Disaster recovery strategies and RPO/RTO planning",
      "AWS Cost Explorer and Trusted Advisor",
    ],
    admissionRequirements: [
      "AWS Cloud Practitioner certification or equivalent knowledge recommended",
      "At least 1 year of hands-on experience with AWS services is beneficial",
      "Basic understanding of networking (IP addressing, DNS, HTTP) required",
      "Familiarity with Linux or Windows server administration helpful",
    ],
    modules: [
      { number: 1, title: "IAM & AWS CLI", topics: ["IAM users, roles & policies", "MFA setup", "AWS CLI basics", "Access keys best practices"], durationHours: 6 },
      { number: 2, title: "EC2 & Compute", topics: ["Instance types", "Launch templates", "Placement groups", "Elastic IPs", "Spot & Reserved Instances"], durationHours: 12 },
      { number: 3, title: "Storage Solutions", topics: ["S3 buckets, versioning & replication", "EBS volume types", "EFS & FSx", "Storage Gateway"], durationHours: 10 },
      { number: 4, title: "Databases on AWS", topics: ["RDS Multi-AZ", "Aurora clusters", "DynamoDB", "ElastiCache", "Redshift basics"], durationHours: 10 },
      { number: 5, title: "Networking & VPC", topics: ["VPC design", "Subnets & routing", "NAT Gateway", "VPC Peering", "PrivateLink", "Direct Connect"], durationHours: 12 },
      { number: 6, title: "High Availability & Scaling", topics: ["ALB & NLB", "Auto Scaling Groups", "Route 53 policies", "CloudFront distributions"], durationHours: 10 },
      { number: 7, title: "Security & Encryption", topics: ["KMS", "ACM", "WAF & Shield", "Secrets Manager", "GuardDuty"], durationHours: 8 },
      { number: 8, title: "Exam Preparation", topics: ["Full practice exams", "Architecture scenario drills", "Exam strategy"], durationHours: 8 },
    ],
    assessment: {
      formats: ["Multiple choice", "Multiple response"],
      questionCount: 65,
      durationMinutes: 130,
      passingScore: 720,
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English", "Japanese", "Korean", "Simplified Chinese", "Spanish", "French", "German", "Italian", "Portuguese"],
      validityYears: 3,
      prerequisites: ["No formal prerequisite — Cloud Practitioner knowledge recommended"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 2400, examFee: 2400,
      totalCost: 4800, monthlyInstalment: 800,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to full SAA-C03 course with hands-on labs",
      examFeeNote: "$150 USD exam voucher via Pearson VUE (converted at ~R16/USD)",
    },
    theme: awsTheme,
  },

  // ── AWS Developer Associate ────────────────────────────────────────────
  {
    slug: "aws-developer-associate",
    fullName: "AWS Certified Developer – Associate",
    title: "Developer Associate",
    provider: "AWS",
    level: "Associate",
    examCode: "DVA-C02",
    prepHours: 80,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/aws-developer-associate.jpg",
    description:
      "The AWS Certified Developer – Associate validates your ability to develop, deploy, and debug cloud-native applications on AWS. This course dives deep into serverless architecture, CI/CD pipelines, messaging services, and the AWS SDKs that developers use every day. You will build real applications using Lambda, API Gateway, DynamoDB, and CodePipeline, leaving you equipped to integrate AWS deeply into your development workflow and deliver production-grade cloud applications.",
    learningCards: [
      {
        title: "Serverless Development",
        description: "Build event-driven applications with Lambda, API Gateway, and the Serverless Application Model (SAM).",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      },
      {
        title: "CI/CD Pipelines",
        description: "Automate build, test, and deploy workflows using CodeCommit, CodeBuild, CodeDeploy, and CodePipeline.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 009 9"/></svg>`,
      },
      {
        title: "NoSQL & Caching",
        description: "Store and retrieve data efficiently with DynamoDB and improve performance with ElastiCache.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
      },
      {
        title: "Messaging & Eventing",
        description: "Decouple applications using SQS queues, SNS topics, EventBridge, and Step Functions orchestration.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
      },
    ],
    skillsGained: [
      "Building and deploying serverless applications with Lambda",
      "REST API design and deployment with API Gateway",
      "DynamoDB data modelling and query optimisation",
      "AWS SDK usage in Python, Node.js, and Java",
      "CI/CD automation with CodePipeline",
      "Containerisation basics with ECS and ECR",
      "Application monitoring with X-Ray and CloudWatch Logs",
      "Secrets and configuration management with Parameter Store",
    ],
    admissionRequirements: [
      "AWS Cloud Practitioner knowledge or equivalent",
      "At least 1 year of software development experience",
      "Proficiency in at least one programming language (Python, Node.js, Java, or .NET recommended)",
      "Basic understanding of REST APIs and JSON",
    ],
    modules: [
      { number: 1, title: "AWS Fundamentals for Developers", topics: ["IAM for applications", "AWS CLI & SDKs", "Environment setup"], durationHours: 5 },
      { number: 2, title: "Serverless with Lambda", topics: ["Function configuration", "Event sources", "Layers", "SAM framework", "Lambda@Edge"], durationHours: 12 },
      { number: 3, title: "API Gateway", topics: ["REST vs HTTP APIs", "Authorisers", "Stages & deployments", "CORS configuration"], durationHours: 6 },
      { number: 4, title: "DynamoDB", topics: ["Table design & partition keys", "GSI & LSI", "DynamoDB Streams", "TTL", "DAX caching"], durationHours: 8 },
      { number: 5, title: "CI/CD on AWS", topics: ["CodeCommit", "CodeBuild buildspec", "CodeDeploy strategies", "CodePipeline workflows"], durationHours: 8 },
      { number: 6, title: "Containers on AWS", topics: ["Docker basics", "ECR repositories", "ECS task definitions", "Fargate deployments"], durationHours: 6 },
      { number: 7, title: "Messaging Services", topics: ["SQS standard vs FIFO", "SNS fan-out", "EventBridge rules", "Step Functions state machines"], durationHours: 8 },
      { number: 8, title: "Monitoring & Security", topics: ["CloudWatch metrics & alarms", "X-Ray tracing", "Secrets Manager", "KMS for developers"], durationHours: 6 },
      { number: 9, title: "Exam Preparation", topics: ["Practice exams", "Developer scenario drills", "Common pitfalls"], durationHours: 7 },
    ],
    assessment: {
      formats: ["Multiple choice", "Multiple response"],
      questionCount: 65,
      durationMinutes: 130,
      passingScore: 720,
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English", "Japanese", "Korean", "Simplified Chinese"],
      validityYears: 3,
      prerequisites: ["No formal prerequisite — Cloud Practitioner knowledge recommended"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 2200, examFee: 2400,
      totalCost: 4600, monthlyInstalment: 770,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to DVA-C02 course with serverless labs",
      examFeeNote: "$150 USD exam voucher via Pearson VUE (converted at ~R16/USD)",
    },
    theme: awsTheme,
  },

  // ── AWS SysOps Administrator Associate ────────────────────────────────
  {
    slug: "aws-sysops-administrator-associate",
    fullName: "AWS Certified SysOps Administrator – Associate",
    title: "SysOps Administrator Associate",
    provider: "AWS",
    level: "Associate",
    examCode: "SOA-C02",
    prepHours: 90,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/aws-sysops-administrator-associate.jpg",
    description:
      "The AWS Certified SysOps Administrator – Associate is designed for systems administrators and operations engineers who deploy, manage, and operate workloads on AWS. This course covers monitoring, logging, automation, security, and networking in depth, with a strong focus on troubleshooting real-world issues. You will learn how to maintain operational health, respond to incidents, and automate repetitive tasks using Systems Manager and CloudFormation.",
    learningCards: [
      {
        title: "Monitoring & Observability",
        description: "Set up CloudWatch dashboards, alarms, and log groups to maintain full visibility over your AWS environment.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      },
      {
        title: "Storage Management",
        description: "Manage EBS volumes, EFS file systems, and S3 storage policies for performance and cost efficiency.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
      },
      {
        title: "Networking Operations",
        description: "Configure VPCs, manage Direct Connect and VPN connections, and troubleshoot network connectivity issues.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M5 8v4h14V8M12 12v4"/></svg>`,
      },
      {
        title: "Automation & IaC",
        description: "Automate infrastructure provisioning with CloudFormation and streamline operations using Systems Manager.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
      },
    ],
    skillsGained: [
      "CloudWatch metrics, alarms, dashboards and log insights",
      "CloudTrail audit logging and AWS Config rules",
      "EC2 instance management and patching with Systems Manager",
      "EBS snapshot strategies and lifecycle manager",
      "VPC Flow Logs and network troubleshooting",
      "CloudFormation stack management and drift detection",
      "Auto Scaling lifecycle hooks",
      "Cost allocation tags and billing reports",
    ],
    admissionRequirements: [
      "AWS Cloud Practitioner certification or equivalent knowledge",
      "At least 1 year of experience managing systems on AWS",
      "Familiarity with Linux and Windows server administration",
      "Basic understanding of networking and TCP/IP",
    ],
    modules: [
      { number: 1, title: "Monitoring & Logging", topics: ["CloudWatch metrics & dashboards", "CloudWatch Logs Insights", "CloudTrail", "AWS Config"], durationHours: 8 },
      { number: 2, title: "EC2 & Compute Management", topics: ["Instance management", "AMIs & snapshots", "Systems Manager Patch Manager", "EC2 Image Builder"], durationHours: 10 },
      { number: 3, title: "Storage Operations", topics: ["EBS volume management", "EFS configuration", "S3 lifecycle rules", "Storage Gateway"], durationHours: 8 },
      { number: 4, title: "Networking & VPC", topics: ["VPC troubleshooting", "VPC Flow Logs", "Direct Connect & VPN", "Route 53 health checks"], durationHours: 10 },
      { number: 5, title: "Security & Compliance", topics: ["IAM policies", "AWS Security Hub", "Inspector", "Trusted Advisor"], durationHours: 8 },
      { number: 6, title: "Automation", topics: ["CloudFormation", "Systems Manager Automation", "EventBridge rules"], durationHours: 10 },
      { number: 7, title: "High Availability & Disaster Recovery", topics: ["Multi-AZ RDS", "ALB health checks", "Backup & restore strategies", "Route 53 failover"], durationHours: 8 },
      { number: 8, title: "Exam Preparation", topics: ["Practice exams", "Scenario-based troubleshooting", "Exam tips"], durationHours: 8 },
    ],
    assessment: {
      formats: ["Multiple choice", "Multiple response", "Performance-based"],
      questionCount: 65,
      durationMinutes: 180,
      passingScore: 720,
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English", "Japanese", "Korean", "Simplified Chinese"],
      validityYears: 3,
      prerequisites: ["No formal prerequisite — Cloud Practitioner knowledge recommended"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 2200, examFee: 2400,
      totalCost: 4600, monthlyInstalment: 770,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to SOA-C02 course with CloudWatch & automation labs",
      examFeeNote: "$150 USD exam voucher via Pearson VUE (converted at ~R16/USD)",
    },
    theme: awsTheme,
  },

  // ── AWS Solutions Architect Professional ──────────────────────────────
  {
    slug: "aws-solutions-architect-professional",
    fullName: "AWS Certified Solutions Architect – Professional",
    title: "Solutions Architect Professional",
    provider: "AWS",
    level: "Professional",
    examCode: "SAP-C02",
    prepHours: 160,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/aws-solutions-architect-professional.jpg",
    description:
      "The AWS Certified Solutions Architect – Professional is the pinnacle of AWS architecture certifications. This advanced course challenges you to design complex, large-scale enterprise solutions on AWS covering multi-account strategies, hybrid connectivity, advanced networking, migration planning, and cost governance at scale. You will evaluate trade-offs across real-world architectural scenarios and develop the judgement needed to design solutions that meet strict business, technical, and compliance requirements.",
    learningCards: [
      {
        title: "Enterprise Architecture",
        description: "Design multi-account AWS environments using AWS Organizations, Control Tower, and Service Control Policies.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      },
      {
        title: "Advanced Networking",
        description: "Implement Transit Gateway, AWS PrivateLink, and complex Direct Connect topologies for enterprise connectivity.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>`,
      },
      {
        title: "Migration Strategies",
        description: "Plan and execute complex cloud migrations using the 6 Rs framework, DMS, and Application Migration Service.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
      },
      {
        title: "Disaster Recovery at Scale",
        description: "Architect multi-region DR strategies with strict RTO and RPO requirements using Pilot Light, Warm Standby, and Active-Active patterns.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18.364 5.636a9 9 0 010 12.728M15.536 8.464a5 5 0 010 7.072M3 12a9 9 0 0114.83-6.83"/><polyline points="3 3 3 9 9 9"/></svg>`,
      },
    ],
    skillsGained: [
      "Multi-account AWS governance with Organizations and Control Tower",
      "Advanced VPC design and inter-region connectivity",
      "Transit Gateway and hub-spoke network topologies",
      "Workload migration using AWS Migration Hub and DMS",
      "Cost optimisation strategies at enterprise scale",
      "Disaster recovery architectures: Pilot Light, Warm Standby, Active-Active",
      "Security automation with Config Rules and Security Hub",
      "Well-Architected Framework reviews and trade-off analysis",
    ],
    admissionRequirements: [
      "AWS Solutions Architect – Associate certification required",
      "Minimum 2 years of hands-on experience designing AWS architectures",
      "Strong understanding of networking, security, and enterprise IT",
      "Experience with infrastructure as code (CloudFormation or Terraform)",
    ],
    modules: [
      { number: 1, title: "Organisational Design & Governance", topics: ["AWS Organizations", "Service Control Policies", "Control Tower", "Landing Zones"], durationHours: 12 },
      { number: 2, title: "Advanced Networking", topics: ["Transit Gateway", "PrivateLink", "Direct Connect advanced", "Network Firewall"], durationHours: 16 },
      { number: 3, title: "Advanced Storage & Data Management", topics: ["S3 replication strategies", "DataSync", "Storage Gateway", "Lake Formation"], durationHours: 12 },
      { number: 4, title: "Migration & Transfer", topics: ["6 Rs framework", "Application Migration Service", "Database Migration Service", "Snowball Edge"], durationHours: 14 },
      { number: 5, title: "Disaster Recovery & Business Continuity", topics: ["Multi-region architectures", "Pilot Light & Warm Standby", "Elastic Disaster Recovery", "RTO/RPO analysis"], durationHours: 14 },
      { number: 6, title: "Cost Optimisation at Scale", topics: ["Savings Plans", "Compute Optimiser", "Cost allocation", "Reserved capacity planning"], durationHours: 10 },
      { number: 7, title: "Security & Compliance at Scale", topics: ["AWS Config aggregator", "Security Hub", "Macie", "SCPs vs IAM policies"], durationHours: 12 },
      { number: 8, title: "Architecture Trade-off Analysis", topics: ["Well-Architected reviews", "Scenario-based decision making", "Case study walkthroughs"], durationHours: 12 },
      { number: 9, title: "Exam Preparation", topics: ["Full-length practice exams", "Scenario drills", "Exam technique"], durationHours: 12 },
    ],
    assessment: {
      formats: ["Multiple choice", "Multiple response"],
      questionCount: 75,
      durationMinutes: 180,
      passingScore: 750,
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English", "Japanese", "Korean", "Simplified Chinese"],
      validityYears: 3,
      prerequisites: ["AWS Solutions Architect – Associate (or equivalent experience)"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 3200, examFee: 4800,
      totalCost: 8000, monthlyInstalment: 1340,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to advanced SAP-C02 course with architecture deep-dives",
      examFeeNote: "$300 USD exam voucher via Pearson VUE (converted at ~R16/USD)",
    },
    theme: awsTheme,
  },
];

// ---------------------------------------------------------------------------
// Azure Certifications
// ---------------------------------------------------------------------------

const azureCertificates: Certificate[] = [
  // ── Azure Fundamentals ────────────────────────────────────────────────
  {
    slug: "azure-fundamentals",
    fullName: "Microsoft Certified: Azure Fundamentals",
    title: "Azure Fundamentals",
    provider: "Azure",
    level: "Foundational",
    examCode: "AZ-900",
    prepHours: 35,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/azure-fundamentals.jpg",
    description:
      "Microsoft Azure Fundamentals is the starting point for your Microsoft cloud journey. This certification validates your understanding of cloud concepts, Azure services, pricing, SLAs, and the Azure lifecycle. It is ideal for professionals across all roles — from business decision-makers to aspiring cloud engineers — who want to demonstrate a foundational understanding of cloud computing and how Microsoft Azure delivers it.",
    learningCards: [
      {
        title: "Cloud Concepts",
        description: "Understand cloud computing principles including service models, deployment types, and the benefits of moving to the cloud.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 110-14h.5"/><path d="M17 5.5A4.5 4.5 0 0121.5 10v.5A3.5 3.5 0 0118 14h-1"/></svg>`,
      },
      {
        title: "Azure Architecture",
        description: "Explore Azure regions, availability zones, resource groups, and the management hierarchy that underpins the platform.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
      },
      {
        title: "Core Azure Services",
        description: "Get hands-on with Azure VMs, App Service, Blob Storage, Azure SQL, and the services that power millions of applications.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
      },
      {
        title: "Pricing & SLAs",
        description: "Understand Azure pricing models, the TCO calculator, cost management tools, and how SLAs are structured across services.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v2m0 8v2M9 9h4a2 2 0 010 4H9"/></svg>`,
      },
    ],
    skillsGained: [
      "Cloud computing principles: IaaS, PaaS, SaaS",
      "Azure global infrastructure and geography",
      "Azure portal, CLI, and PowerShell navigation",
      "Core Azure compute and storage services",
      "Azure networking: Virtual Networks, VPN Gateway",
      "Azure security fundamentals: Entra ID, RBAC",
      "Azure pricing calculator and Cost Management",
      "Azure compliance and trust centre",
    ],
    admissionRequirements: [
      "No prior cloud or IT experience required",
      "Basic general technology literacy is helpful",
      "Suitable for all roles including business, marketing, and sales teams",
    ],
    modules: [
      { number: 1, title: "Cloud Computing Concepts", topics: ["What is cloud computing", "IaaS vs PaaS vs SaaS", "Public, private & hybrid cloud"], durationHours: 4 },
      { number: 2, title: "Azure Architecture & Services", topics: ["Regions & availability zones", "Resource groups & subscriptions", "Azure Resource Manager"], durationHours: 5 },
      { number: 3, title: "Compute & Networking", topics: ["Azure VMs", "App Service", "Azure Container Instances", "Virtual Networks", "VPN Gateway"], durationHours: 7 },
      { number: 4, title: "Storage Solutions", topics: ["Blob, Queue, Table & File Storage", "Storage tiers", "Azure SQL & Cosmos DB basics"], durationHours: 5 },
      { number: 5, title: "Identity, Security & Compliance", topics: ["Microsoft Entra ID", "RBAC", "Zero Trust", "Azure compliance offerings"], durationHours: 5 },
      { number: 6, title: "Cost Management & SLAs", topics: ["Pricing calculator", "TCO calculator", "Azure Cost Management", "SLA concepts"], durationHours: 4 },
      { number: 7, title: "Exam Preparation", topics: ["Practice questions", "Mock exam", "Exam tips"], durationHours: 5 },
    ],
    assessment: {
      formats: ["Multiple choice", "Multiple response", "Drag-and-drop"],
      questionCount: 60,
      durationMinutes: 85,
      passingScore: 700,
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English", "Japanese", "Korean", "Simplified Chinese", "Traditional Chinese", "Spanish", "French", "German", "Italian", "Portuguese", "Arabic"],
      validityYears: "Does not expire",
      prerequisites: ["None"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 1600, examFee: 1600,
      totalCost: 3200, monthlyInstalment: 540,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to AZ-900 course + Microsoft Learn free path",
      examFeeNote: "$99 USD exam voucher via Pearson VUE (converted at ~R16/USD)",
    },
    theme: azureTheme,
  },

  // ── Azure Administrator Associate ─────────────────────────────────────
  {
    slug: "azure-administrator-associate",
    fullName: "Microsoft Certified: Azure Administrator Associate",
    title: "Azure Administrator",
    provider: "Azure",
    level: "Associate",
    examCode: "AZ-104",
    prepHours: 110,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/azure-administrator-associate.jpg",
    description:
      "The Microsoft Azure Administrator certification validates expertise in implementing, managing, and monitoring Azure environments. This course covers the full spectrum of administrator responsibilities including identity management, governance, storage configuration, compute provisioning, and virtual networking. You will gain the practical skills to manage Azure subscriptions at scale and serve as the go-to Azure administrator within your organisation.",
    learningCards: [
      {
        title: "Identity & Governance",
        description: "Configure Microsoft Entra ID, manage RBAC roles, and implement governance policies with Azure Policy and Blueprints.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      },
      {
        title: "Virtual Networking",
        description: "Design and manage Virtual Networks, NSGs, peering, VPN Gateways, and ExpressRoute connections.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M5 8v4h14V8M12 12v4"/></svg>`,
      },
      {
        title: "Storage Management",
        description: "Create and manage storage accounts, configure Blob lifecycle policies, and implement Azure File Shares and backups.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
      },
      {
        title: "Monitoring & Alerts",
        description: "Configure Azure Monitor, Log Analytics workspaces, and Application Insights for full observability.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      },
    ],
    skillsGained: [
      "Microsoft Entra ID user, group, and device management",
      "Azure RBAC and custom role definitions",
      "Azure Policy, initiatives, and management groups",
      "Virtual Network design with subnets and NSGs",
      "Azure VPN Gateway and ExpressRoute configuration",
      "Storage account management and data protection",
      "Azure VM deployment, scaling, and availability sets",
      "Azure Monitor, Log Analytics, and Alerts",
    ],
    admissionRequirements: [
      "Azure Fundamentals (AZ-900) certification or equivalent knowledge",
      "At least 6 months of hands-on Azure administration experience recommended",
      "Familiarity with PowerShell or Azure CLI is beneficial",
      "Basic networking and Active Directory knowledge required",
    ],
    modules: [
      { number: 1, title: "Identity & Access Management", topics: ["Microsoft Entra ID", "Users & groups", "RBAC", "Conditional Access", "MFA"], durationHours: 10 },
      { number: 2, title: "Governance & Compliance", topics: ["Azure Policy", "Management groups", "Blueprints", "Cost management & budgets"], durationHours: 8 },
      { number: 3, title: "Azure Storage", topics: ["Storage accounts", "Blob storage tiers", "Azure Files", "Lifecycle management", "Storage security"], durationHours: 10 },
      { number: 4, title: "Compute Management", topics: ["Azure VMs", "Availability sets & zones", "VM Scale Sets", "Azure Dedicated Hosts"], durationHours: 12 },
      { number: 5, title: "Virtual Networking", topics: ["VNet design", "NSGs & ASGs", "VNet peering", "Azure DNS", "Private DNS zones"], durationHours: 12 },
      { number: 6, title: "Network Connectivity", topics: ["VPN Gateway", "ExpressRoute", "Azure Bastion", "Azure Load Balancer", "Application Gateway"], durationHours: 10 },
      { number: 7, title: "Monitoring & Backup", topics: ["Azure Monitor", "Log Analytics", "Application Insights", "Azure Backup", "Site Recovery"], durationHours: 10 },
      { number: 8, title: "Exam Preparation", topics: ["Practice labs", "Mock exams", "Common admin scenarios"], durationHours: 8 },
    ],
    assessment: {
      formats: ["Multiple choice", "Multiple response", "Drag-and-drop", "Case study"],
      questionCount: 60,
      durationMinutes: 120,
      passingScore: 700,
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English", "Japanese", "Korean", "Simplified Chinese", "Traditional Chinese", "Spanish", "French", "German"],
      validityYears: 1,
      prerequisites: ["AZ-900 recommended but not required"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 2400, examFee: 2650,
      totalCost: 5050, monthlyInstalment: 850,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to AZ-104 course with hands-on Azure labs",
      examFeeNote: "$165 USD exam voucher via Pearson VUE (converted at ~R16/USD)",
    },
    theme: azureTheme,
  },

  // ── Azure Developer Associate ──────────────────────────────────────────
  {
    slug: "azure-developer-associate",
    fullName: "Microsoft Certified: Azure Developer Associate",
    title: "Azure Developer",
    provider: "Azure",
    level: "Associate",
    examCode: "AZ-204",
    prepHours: 100,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/azure-developer-associate.jpg",
    description:
      "The Microsoft Azure Developer Associate certification validates your ability to design, build, test, and maintain cloud applications on Azure. This course covers the full Azure developer toolkit including serverless functions, containerised deployments, Cosmos DB, API Management, and secure application integration. You will graduate with the practical skills to build production-ready Azure applications using modern development patterns and the Azure SDK.",
    learningCards: [
      {
        title: "Serverless & Functions",
        description: "Build event-driven applications with Azure Functions, Durable Functions, and Azure Logic Apps.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      },
      {
        title: "Containerised Apps",
        description: "Deploy and scale applications using Azure Container Apps, Azure Kubernetes Service, and Azure Container Registry.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>`,
      },
      {
        title: "Data & Storage",
        description: "Work with Cosmos DB, Azure SQL, Blob Storage, and Azure Cache for Redis to build performant data-driven apps.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
      },
      {
        title: "Secure Integration",
        description: "Protect applications with Azure Key Vault, Managed Identity, API Management, and OAuth 2.0 authentication.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
      },
    ],
    skillsGained: [
      "Azure Functions development with multiple triggers and bindings",
      "Cosmos DB data modelling and consistency levels",
      "Azure App Service deployment slots and auto-scaling",
      "Azure Container Apps and AKS deployment",
      "Key Vault secrets, certificates, and managed identity",
      "API Management policies and developer portal",
      "Azure Service Bus, Event Hubs, and Event Grid",
      "Application Insights telemetry and distributed tracing",
    ],
    admissionRequirements: [
      "Azure Fundamentals (AZ-900) or equivalent knowledge",
      "1-2 years of software development experience",
      "Proficiency in C#, Python, JavaScript, or Java recommended",
      "Familiarity with REST APIs and basic cloud architecture",
    ],
    modules: [
      { number: 1, title: "Azure App Service & Web Apps", topics: ["App Service plans", "Deployment slots", "Custom domains & TLS", "WebJobs"], durationHours: 8 },
      { number: 2, title: "Azure Functions", topics: ["Function triggers & bindings", "Durable Functions patterns", "SAM framework", "Cold start optimisation"], durationHours: 10 },
      { number: 3, title: "Blob Storage & CDN", topics: ["Blob tiers & lifecycle", "SAS tokens", "Azure CDN", "Static website hosting"], durationHours: 6 },
      { number: 4, title: "Cosmos DB", topics: ["Partition key design", "SQL API queries", "Change feed", "Consistency levels"], durationHours: 10 },
      { number: 5, title: "Containers & Kubernetes", topics: ["Docker basics", "ACR build & push", "Container Apps", "AKS deployment & scaling"], durationHours: 10 },
      { number: 6, title: "Authentication & Security", topics: ["Managed identity", "Key Vault integration", "MSAL & OAuth 2.0", "App registrations"], durationHours: 8 },
      { number: 7, title: "API Management & Messaging", topics: ["APIM policies", "Event Grid", "Service Bus queues & topics", "Event Hubs"], durationHours: 8 },
      { number: 8, title: "Monitoring & Performance", topics: ["Application Insights SDK", "Log-based metrics", "Availability tests", "Smart detection"], durationHours: 6 },
      { number: 9, title: "Exam Preparation", topics: ["Practice exams", "Scenario walkthroughs", "SDK quick-reference"], durationHours: 6 },
    ],
    assessment: {
      formats: ["Multiple choice", "Multiple response", "Case study"],
      questionCount: 60,
      durationMinutes: 120,
      passingScore: 700,
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English", "Japanese", "Korean", "Simplified Chinese", "French", "German", "Spanish"],
      validityYears: 1,
      prerequisites: ["AZ-900 recommended — no formal prerequisite"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 2200, examFee: 2650,
      totalCost: 4850, monthlyInstalment: 810,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to AZ-204 course with Azure SDK labs",
      examFeeNote: "$165 USD exam voucher via Pearson VUE (converted at ~R16/USD)",
    },
    theme: azureTheme,
  },

  // ── Azure Security Engineer Associate ─────────────────────────────────
  {
    slug: "azure-security-engineer-associate",
    fullName: "Microsoft Certified: Azure Security Engineer Associate",
    title: "Azure Security Engineer",
    provider: "Azure",
    level: "Associate",
    examCode: "AZ-500",
    prepHours: 120,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/azure-security-engineer-associate.jpg",
    description:
      "The Azure Security Engineer Associate certification validates expertise in implementing security controls, managing identity and access, and protecting data, applications, and networks within Microsoft Azure. This course takes a hands-on approach to Azure Defender, Microsoft Sentinel, Key Vault, and network security architecture, equipping you to build and maintain a hardened Azure environment that meets enterprise security and compliance standards.",
    learningCards: [
      {
        title: "Identity & Access Security",
        description: "Implement Conditional Access, Privileged Identity Management (PIM), and Microsoft Entra ID B2B/B2C for zero-trust identity.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14c3.314 0 6-2.686 6-6S15.314 2 12 2 6 4.686 6 8s2.686 6 6 6z"/><path d="M3 21c0-3.866 4.029-7 9-7s9 3.134 9 7"/></svg>`,
      },
      {
        title: "Threat Detection & SIEM",
        description: "Deploy and configure Microsoft Sentinel, Defender for Cloud, and Defender XDR for advanced threat detection and response.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
      },
      {
        title: "Network Security",
        description: "Harden Azure environments with Azure Firewall, WAF, DDoS Protection, Private Endpoints, and NSG flow logs.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M5 8v4h14V8M12 12v4"/></svg>`,
      },
      {
        title: "Data & Key Management",
        description: "Protect sensitive data with Azure Key Vault, disk encryption, Azure Information Protection, and Microsoft Purview.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1"/></svg>`,
      },
    ],
    skillsGained: [
      "Microsoft Entra ID Conditional Access and PIM",
      "Azure Key Vault management and access policies",
      "Defender for Cloud secure score and recommendations",
      "Microsoft Sentinel workbooks, KQL queries, and analytics rules",
      "Azure Firewall and Application Gateway WAF configuration",
      "DDoS Standard protection plans",
      "Azure Policy for regulatory compliance",
      "Microsoft Purview data classification and labelling",
    ],
    admissionRequirements: [
      "Azure Administrator (AZ-104) or equivalent hands-on experience",
      "Strong understanding of networking, identity, and security concepts",
      "Experience with Azure CLI or PowerShell for security operations",
      "Familiarity with scripting (Python or PowerShell) is beneficial",
    ],
    modules: [
      { number: 1, title: "Identity & Access Security", topics: ["Conditional Access", "PIM", "Entra ID B2B & B2C", "Identity Protection", "Access Reviews"], durationHours: 12 },
      { number: 2, title: "Platform Security", topics: ["Azure Policy", "Management lock", "Defender for Cloud plans", "Regulatory compliance"], durationHours: 10 },
      { number: 3, title: "Data & Application Security", topics: ["Key Vault HSM", "Disk encryption", "SQL TDE", "App Service security", "Container security"], durationHours: 12 },
      { number: 4, title: "Network Security", topics: ["Azure Firewall Premium", "WAF policies", "DDoS Protection", "Private Link & Endpoints", "NSG flow logs"], durationHours: 14 },
      { number: 5, title: "Microsoft Sentinel", topics: ["Workspace setup", "Data connectors", "Analytics rules", "KQL queries", "Playbooks & SOAR"], durationHours: 16 },
      { number: 6, title: "Security Operations", topics: ["Incident management", "Defender XDR", "Secure score", "Vulnerability assessment", "Just-in-time VM access"], durationHours: 12 },
      { number: 7, title: "Exam Preparation", topics: ["Practice exams", "Security scenario labs", "Exam strategy"], durationHours: 8 },
    ],
    assessment: {
      formats: ["Multiple choice", "Multiple response", "Case study", "Performance-based"],
      questionCount: 60,
      durationMinutes: 120,
      passingScore: 700,
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English", "Japanese", "Korean", "Simplified Chinese", "French", "German"],
      validityYears: 1,
      prerequisites: ["AZ-104 or equivalent recommended"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 2600, examFee: 2650,
      totalCost: 5250, monthlyInstalment: 880,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to AZ-500 course with Defender & Sentinel labs",
      examFeeNote: "$165 USD exam voucher via Pearson VUE (converted at ~R16/USD)",
    },
    theme: azureTheme,
  },

  // ── Azure Solutions Architect Expert ──────────────────────────────────
  {
    slug: "azure-solutions-architect-expert",
    fullName: "Microsoft Certified: Azure Solutions Architect Expert",
    title: "Azure Solutions Architect Expert",
    provider: "Azure",
    level: "Expert",
    examCode: "AZ-305",
    prepHours: 150,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/azure-solutions-architect-expert.jpg",
    description:
      "The Azure Solutions Architect Expert is the highest-level Azure design certification, validating your ability to translate complex business requirements into secure, scalable, and cost-effective Azure solutions. This course covers enterprise identity, governance, storage architecture, compute strategy, network topology, business continuity, and monitoring at scale. You will develop the architectural judgement to design solutions across hybrid, multi-cloud, and greenfield Azure environments.",
    learningCards: [
      {
        title: "Identity Architecture",
        description: "Design enterprise identity solutions using Entra ID B2B, B2C, hybrid identity with AD Connect, and external identity providers.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
      },
      {
        title: "Business Continuity",
        description: "Architect disaster recovery and high availability solutions using Azure Site Recovery, Backup, and geo-redundant deployments.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18.364 5.636a9 9 0 010 12.728M15.536 8.464a5 5 0 010 7.072M3 12a9 9 0 0114.83-6.83"/><polyline points="3 3 3 9 9 9"/></svg>`,
      },
      {
        title: "Infrastructure Design",
        description: "Design landing zones, hub-and-spoke topologies, and enterprise-scale architectures aligned to the Azure Cloud Adoption Framework.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      },
      {
        title: "Data Storage Architecture",
        description: "Select and design appropriate storage solutions for relational, NoSQL, analytical, and archival data at enterprise scale.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
      },
    ],
    skillsGained: [
      "Azure landing zone and hub-spoke network design",
      "Enterprise-scale identity with Entra ID and hybrid AD",
      "Azure Site Recovery and Backup architecture",
      "Multi-region high availability design patterns",
      "Azure Storage account architecture and data tiering",
      "Governance design with Management Groups and Policy",
      "Azure Kubernetes Service architecture and networking",
      "Cost governance and resource tagging strategies",
    ],
    admissionRequirements: [
      "Azure Administrator (AZ-104) certification required",
      "Minimum 2 years of experience designing Azure solutions",
      "Deep understanding of networking, identity, storage, and security on Azure",
      "Experience with ARM templates, Bicep, or Terraform is strongly recommended",
    ],
    modules: [
      { number: 1, title: "Identity & Access Architecture", topics: ["Entra ID B2B & B2C design", "Hybrid identity & AD Connect", "PIM design patterns", "External identity providers"], durationHours: 14 },
      { number: 2, title: "Governance Architecture", topics: ["Management group hierarchy", "Azure Policy at scale", "Cost management design", "Tagging strategies"], durationHours: 10 },
      { number: 3, title: "Infrastructure Architecture", topics: ["Landing zone design", "Hub-and-spoke topology", "Azure VMware Solution", "AVS networking"], durationHours: 16 },
      { number: 4, title: "Storage Architecture", topics: ["Storage account selection", "Data Lake design", "Azure NetApp Files", "Archival strategies"], durationHours: 10 },
      { number: 5, title: "Compute Architecture", topics: ["VM selection framework", "Container strategy (AKS vs ACA)", "App Service architecture", "HPC on Azure"], durationHours: 14 },
      { number: 6, title: "Network Architecture", topics: ["Enterprise network topology", "Azure Virtual WAN", "ExpressRoute design", "Azure DNS architecture"], durationHours: 14 },
      { number: 7, title: "Business Continuity", topics: ["Azure Site Recovery design", "Backup vault architecture", "Multi-region patterns", "RTO/RPO trade-offs"], durationHours: 12 },
      { number: 8, title: "Monitoring Architecture", topics: ["Azure Monitor design", "Log Analytics workspace strategy", "Workbook design", "Cost of monitoring"], durationHours: 8 },
      { number: 9, title: "Exam Preparation", topics: ["Full practice exams", "Architecture case studies", "Trade-off analysis workshops"], durationHours: 12 },
    ],
    assessment: {
      formats: ["Multiple choice", "Multiple response", "Case study"],
      questionCount: 60,
      durationMinutes: 120,
      passingScore: 700,
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English", "Japanese", "Korean", "Simplified Chinese", "French", "German"],
      validityYears: 1,
      prerequisites: ["AZ-104 Azure Administrator Associate required"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 3000, examFee: 2650,
      totalCost: 5650, monthlyInstalment: 950,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to AZ-305 architect course with enterprise design scenarios",
      examFeeNote: "$165 USD exam voucher via Pearson VUE (converted at ~R16/USD)",
    },
    theme: azureTheme,
  },
];

// ---------------------------------------------------------------------------
// CompTIA Certifications
// ---------------------------------------------------------------------------

const comptiaCertificates: Certificate[] = [
  // ── CompTIA ITF+ ──────────────────────────────────────────────────────
  {
    slug: "comptia-itf-plus",
    fullName: "CompTIA IT Fundamentals+",
    title: "IT Fundamentals+",
    provider: "CompTIA",
    level: "Foundational",
    examCode: "FC0-U61",
    prepHours: 30,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/comptia-itf-plus.jpg",
    description:
      "CompTIA IT Fundamentals+ is the perfect starting point for anyone considering a career in information technology. This course introduces you to the core concepts that underpin all IT disciplines — hardware, software, networking, databases, and security — without requiring any prior technical background. Whether you are a recent school leaver, a career changer, or a business professional wanting to speak the language of IT, ITF+ gives you the vocabulary and foundational knowledge to take the next step with confidence.",
    learningCards: [
      {
        title: "IT Concepts & Devices",
        description: "Understand the basic principles of computing devices, input/output components, and how modern IT infrastructure fits together.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
      },
      {
        title: "Software & Applications",
        description: "Explore how operating systems, productivity software, and web applications work and interact in a typical IT environment.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      },
      {
        title: "Networking Basics",
        description: "Learn how devices connect and communicate, from LAN and Wi-Fi fundamentals through to basic internet and cloud concepts.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>`,
      },
      {
        title: "Security Awareness",
        description: "Develop foundational awareness of cybersecurity threats, safe computing practices, and data protection principles.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      },
    ],
    skillsGained: [
      "Basic computing concepts and terminology",
      "Hardware components and peripheral devices",
      "Operating system fundamentals: Windows, macOS, Linux",
      "File management and productivity software usage",
      "Introduction to networking and internet connectivity",
      "Database concepts: tables, queries, and relationships",
      "Software development lifecycle awareness",
      "Cybersecurity threats and safe practices",
    ],
    admissionRequirements: [
      "No prior IT experience or qualifications required",
      "Basic reading and computer literacy is sufficient",
      "Ideal for school leavers and career changers",
    ],
    modules: [
      { number: 1, title: "IT Concepts & Terminology", topics: ["Notational systems", "Data types", "Computing units", "IT infrastructure types"], durationHours: 4 },
      { number: 2, title: "Infrastructure & Hardware", topics: ["Device types", "Input/output devices", "Internal components", "Peripheral connectivity"], durationHours: 5 },
      { number: 3, title: "Applications & Software", topics: ["Operating systems", "Productivity suites", "Web browsers", "Application management"], durationHours: 5 },
      { number: 4, title: "Software Development Basics", topics: ["Programming concepts", "SDLC overview", "Version control basics", "Web development intro"], durationHours: 4 },
      { number: 5, title: "Database Fundamentals", topics: ["Relational database concepts", "Basic SQL", "Database structures", "Data types"], durationHours: 4 },
      { number: 6, title: "Security Awareness", topics: ["Threat types", "Password management", "Safe browsing", "Physical security"], durationHours: 4 },
      { number: 7, title: "Exam Preparation", topics: ["Practice questions", "Mock exam", "Revision tips"], durationHours: 4 },
    ],
    assessment: {
      formats: ["Multiple choice"],
      questionCount: 75,
      durationMinutes: 60,
      passingScore: 650,
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English"],
      validityYears: "Does not expire",
      prerequisites: ["None"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 1200, examFee: 2200,
      totalCost: 3400, monthlyInstalment: 570,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to ITF+ fundamentals course",
      examFeeNote: "~$138 USD exam voucher via Pearson VUE (converted at ~R16/USD)",
    },
    theme: comptiaTheme,
  },

  // ── CompTIA A+ ────────────────────────────────────────────────────────
  {
    slug: "comptia-a-plus",
    fullName: "CompTIA A+",
    title: "A+",
    provider: "CompTIA",
    level: "Core",
    examCode: "220-1101 / 220-1102",
    prepHours: 120,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/comptia-a-plus.jpg",
    description:
      "CompTIA A+ is the world's most recognised entry-level IT certification and the gold standard for IT support professionals. This comprehensive course prepares you for both Core 1 and Core 2 exams, covering hardware, operating systems, networking, mobile devices, virtualisation, cloud fundamentals, and cybersecurity. Trusted by employers globally and approved by the US Department of Defense, A+ opens the door to helpdesk, desktop support, and junior systems administrator roles.",
    learningCards: [
      {
        title: "Hardware & Devices",
        description: "Identify, install, and troubleshoot desktops, laptops, mobile devices, printers, and peripheral equipment.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
      },
      {
        title: "Operating Systems",
        description: "Install, configure, and troubleshoot Windows, macOS, Linux, Android, and iOS in desktop and enterprise environments.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>`,
      },
      {
        title: "Networking & Security",
        description: "Configure wired and wireless networks, implement basic security measures, and troubleshoot connectivity issues.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg>`,
      },
      {
        title: "Virtualisation & Cloud",
        description: "Understand virtualisation concepts, cloud computing models, and basic cloud service deployment for modern IT environments.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 110-14h.5"/><path d="M17 5.5A4.5 4.5 0 0121.5 10v.5A3.5 3.5 0 0118 14h-1"/></svg>`,
      },
    ],
    skillsGained: [
      "PC hardware assembly, disassembly, and component identification",
      "Windows 10/11 installation and configuration",
      "macOS and Linux desktop support fundamentals",
      "Mobile device management and troubleshooting",
      "TCP/IP networking and Wi-Fi configuration",
      "Basic cybersecurity: malware removal, MFA, encryption",
      "Virtualisation with Hyper-V and VMware basics",
      "IT operational procedures and documentation",
    ],
    admissionRequirements: [
      "CompTIA ITF+ or 9-12 months of IT hands-on experience recommended",
      "Basic familiarity with computers and operating systems",
      "Two exams required: Core 1 (220-1101) and Core 2 (220-1102)",
    ],
    modules: [
      { number: 1, title: "Mobile Devices", topics: ["Laptop components", "Mobile device connectivity", "Mobile OS features", "Synchronisation"], durationHours: 8 },
      { number: 2, title: "Networking", topics: ["TCP/IP basics", "Wireless standards", "SOHO networking", "Network troubleshooting"], durationHours: 10 },
      { number: 3, title: "Hardware", topics: ["PC components", "RAM & storage types", "Power supplies", "Printers & multifunction devices"], durationHours: 12 },
      { number: 4, title: "Virtualisation & Cloud", topics: ["Hypervisor types", "VM setup", "Cloud deployment models", "Cloud storage concepts"], durationHours: 8 },
      { number: 5, title: "Hardware & Network Troubleshooting", topics: ["Troubleshooting methodology", "PC hardware issues", "Display issues", "Network problems"], durationHours: 10 },
      { number: 6, title: "Operating Systems", topics: ["Windows installation", "Active Directory basics", "macOS features", "Linux command line basics"], durationHours: 14 },
      { number: 7, title: "Security", topics: ["Malware types & removal", "Wireless security", "Workstation security", "Data destruction methods"], durationHours: 10 },
      { number: 8, title: "Software Troubleshooting", topics: ["OS troubleshooting", "App installation issues", "Browser & cloud issues", "Remote access tools"], durationHours: 8 },
      { number: 9, title: "Operational Procedures", topics: ["Documentation", "Change management", "Disaster recovery basics", "Professional conduct"], durationHours: 6 },
      { number: 10, title: "Exam Preparation", topics: ["Core 1 mock exam", "Core 2 mock exam", "Test-taking strategy"], durationHours: 8 },
    ],
    assessment: {
      formats: ["Multiple choice", "Multiple response", "Drag-and-drop", "Performance-based"],
      questionCount: 90,
      durationMinutes: 90,
      passingScore: 675,
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English", "German", "Japanese", "Portuguese", "Thai"],
      validityYears: 3,
      prerequisites: ["ITF+ or 9-12 months hands-on experience recommended"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 2000, examFee: 7900,
      totalCost: 9900, monthlyInstalment: 1650,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to A+ Core 1 & Core 2 course bundle",
      examFeeNote: "2 × $246 USD exam vouchers (Core 1 + Core 2) via Pearson VUE (converted at ~R16/USD)",
    },
    theme: comptiaTheme,
  },

  // ── CompTIA Network+ ──────────────────────────────────────────────────
  {
    slug: "comptia-network-plus",
    fullName: "CompTIA Network+",
    title: "Network+",
    provider: "CompTIA",
    level: "Plus",
    examCode: "N10-009",
    prepHours: 90,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/comptia-network-plus.jpg",
    description:
      "CompTIA Network+ is the leading vendor-neutral certification for networking professionals. This course gives you the skills to configure, manage, and troubleshoot both wired and wireless networks in enterprise environments. You will develop a deep understanding of network protocols, switching and routing, cloud networking, network security, and disaster recovery — the complete toolkit for a career in network administration or infrastructure engineering.",
    learningCards: [
      {
        title: "Network Architecture",
        description: "Design and implement network topologies including LAN, WAN, WLAN, and cloud-based network architectures.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M5 8v4h14V8M12 12v4"/></svg>`,
      },
      {
        title: "Routing & Switching",
        description: "Configure VLANs, Spanning Tree Protocol, static and dynamic routing, and inter-VLAN routing on enterprise switches and routers.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 009 9"/></svg>`,
      },
      {
        title: "Network Security",
        description: "Implement firewalls, IDS/IPS, VPNs, NAC, and network hardening techniques to protect enterprise network infrastructure.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      },
      {
        title: "Troubleshooting",
        description: "Apply a structured troubleshooting methodology to diagnose and resolve complex network connectivity and performance issues.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
      },
    ],
    skillsGained: [
      "OSI and TCP/IP model in-depth understanding",
      "IPv4 and IPv6 subnetting and addressing",
      "VLAN configuration and inter-VLAN routing",
      "Spanning Tree Protocol and link aggregation",
      "OSPF and BGP routing fundamentals",
      "Wi-Fi standards and wireless security (WPA3)",
      "VPN technologies: IPSec, SSL/TLS, MPLS",
      "Network monitoring with SNMP, NetFlow, and syslog",
    ],
    admissionRequirements: [
      "CompTIA A+ certification or 9-12 months of networking experience recommended",
      "Basic understanding of TCP/IP and network hardware",
      "Familiarity with subnetting concepts is beneficial",
    ],
    modules: [
      { number: 1, title: "Networking Concepts", topics: ["OSI & TCP/IP models", "Ports & protocols", "Network topologies", "Cable types & connectors"], durationHours: 10 },
      { number: 2, title: "Network Implementations", topics: ["Switching concepts", "VLANs & trunking", "Wireless standards", "WAN connectivity types"], durationHours: 12 },
      { number: 3, title: "Network Operations", topics: ["IP addressing & subnetting", "DNS & DHCP", "Network documentation", "Monitoring tools"], durationHours: 12 },
      { number: 4, title: "Network Security", topics: ["Common attacks", "Firewalls & IDS/IPS", "VPN types", "Network hardening", "Zero trust networking"], durationHours: 12 },
      { number: 5, title: "Network Troubleshooting", topics: ["Troubleshooting methodology", "Copper & fibre issues", "Wireless troubleshooting", "Network service issues"], durationHours: 14 },
      { number: 6, title: "Cloud & Virtualisation Networking", topics: ["SDN concepts", "Virtual switching", "Cloud connectivity", "NFV basics"], durationHours: 8 },
      { number: 7, title: "Exam Preparation", topics: ["Practice exams", "Subnetting drills", "Scenario labs"], durationHours: 10 },
    ],
    assessment: {
      formats: ["Multiple choice", "Multiple response", "Drag-and-drop", "Performance-based"],
      questionCount: 90,
      durationMinutes: 90,
      passingScore: 720,
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English", "Japanese"],
      validityYears: 3,
      prerequisites: ["A+ recommended — no formal prerequisite"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 2000, examFee: 5750,
      totalCost: 7750, monthlyInstalment: 1300,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to Network+ N10-009 course with networking labs",
      examFeeNote: "$358 USD exam voucher via Pearson VUE (converted at ~R16/USD)",
    },
    theme: comptiaTheme,
  },

  // ── CompTIA Security+ ─────────────────────────────────────────────────
  {
    slug: "comptia-security-plus",
    fullName: "CompTIA Security+",
    title: "Security+",
    provider: "CompTIA",
    level: "Plus",
    examCode: "SY0-701",
    prepHours: 100,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/comptia-security-plus.jpg",
    description:
      "CompTIA Security+ is the most widely adopted cybersecurity certification in the world and the benchmark for proving core security skills. This course covers threats, vulnerabilities, cryptography, identity management, network security, incident response, and governance — everything you need to launch or advance a cybersecurity career. Security+ is approved by the US Department of Defense (DoD 8570) and recognised globally as proof of security competency.",
    learningCards: [
      {
        title: "Threats & Vulnerabilities",
        description: "Identify and analyse modern attack techniques including social engineering, ransomware, supply chain attacks, and APTs.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
      },
      {
        title: "Cryptography & PKI",
        description: "Implement cryptographic protocols, digital certificates, PKI hierarchies, and secure communication standards.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1"/></svg>`,
      },
      {
        title: "Identity & Access",
        description: "Apply IAM concepts including MFA, SSO, federation, privileged access management, and Zero Trust architecture.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14c3.314 0 6-2.686 6-6S15.314 2 12 2 6 4.686 6 8s2.686 6 6 6z"/><path d="M3 21c0-3.866 4.029-7 9-7s9 3.134 9 7"/></svg>`,
      },
      {
        title: "Incident Response",
        description: "Execute incident response procedures, perform digital forensics, and apply security orchestration to contain and recover from breaches.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      },
    ],
    skillsGained: [
      "Threat intelligence and attack framework awareness (MITRE ATT&CK)",
      "Vulnerability scanning and penetration testing concepts",
      "Cryptographic algorithms and certificate management",
      "IAM: MFA, SSO, SAML, OAuth, PAM",
      "Network security: firewalls, IDS/IPS, SIEM",
      "Cloud security fundamentals and shared responsibility",
      "Incident response lifecycle and digital forensics",
      "Risk management and compliance frameworks (NIST, ISO 27001)",
    ],
    admissionRequirements: [
      "CompTIA Network+ or 2 years of IT administration experience recommended",
      "Basic understanding of networking and operating systems required",
      "Familiarity with cybersecurity concepts is beneficial",
    ],
    modules: [
      { number: 1, title: "General Security Concepts", topics: ["Security controls", "Cryptography fundamentals", "PKI & certificates", "Authentication protocols"], durationHours: 10 },
      { number: 2, title: "Threats, Vulnerabilities & Mitigations", topics: ["Threat actor types", "Social engineering", "Malware categories", "Vulnerability scanning"], durationHours: 14 },
      { number: 3, title: "Security Architecture", topics: ["Cloud security design", "Network segmentation", "Zero Trust architecture", "ICS/SCADA security"], durationHours: 12 },
      { number: 4, title: "Security Operations", topics: ["Identity management", "Alert monitoring", "Endpoint security", "SIEM & log analysis"], durationHours: 14 },
      { number: 5, title: "Security Program Management", topics: ["Risk management frameworks", "Data privacy regulations", "Third-party risk", "Security policies"], durationHours: 10 },
      { number: 6, title: "Incident Response", topics: ["IR lifecycle", "Digital forensics", "Evidence handling", "Business continuity"], durationHours: 10 },
      { number: 7, title: "Exam Preparation", topics: ["Practice exams", "PBQ walkthroughs", "Exam technique & timing"], durationHours: 10 },
    ],
    assessment: {
      formats: ["Multiple choice", "Multiple response", "Performance-based"],
      questionCount: 90,
      durationMinutes: 90,
      passingScore: 750,
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English", "Japanese"],
      validityYears: 3,
      prerequisites: ["Network+ or 2 years IT experience recommended"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 2200, examFee: 6300,
      totalCost: 8500, monthlyInstalment: 1420,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to Security+ SY0-701 course with cybersecurity labs",
      examFeeNote: "$392 USD exam voucher via Pearson VUE (converted at ~R16/USD)",
    },
    theme: comptiaTheme,
  },

  // ── CompTIA Cloud+ ────────────────────────────────────────────────────
  {
    slug: "comptia-cloud-plus",
    fullName: "CompTIA Cloud+",
    title: "Cloud+",
    provider: "CompTIA",
    level: "Plus",
    examCode: "CV0-004",
    prepHours: 110,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/comptia-cloud-plus.jpg",
    description:
      "CompTIA Cloud+ is the only vendor-neutral cloud certification that validates the skills needed to deploy, secure, and automate cloud environments across AWS, Azure, and Google Cloud. This course covers cloud architecture, migration strategies, security, automation, and operations — giving you a platform-agnostic perspective that makes you valuable across any cloud environment. It is the ideal next step after Security+ or Network+ for professionals targeting cloud infrastructure and DevOps roles.",
    learningCards: [
      {
        title: "Cloud Architecture",
        description: "Design cloud infrastructure using compute, storage, networking, and containerisation across multiple cloud platforms.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 110-14h.5"/><path d="M17 5.5A4.5 4.5 0 0121.5 10v.5A3.5 3.5 0 0118 14h-1"/></svg>`,
      },
      {
        title: "Cloud Security",
        description: "Apply IAM, encryption, network security groups, and compliance controls to protect cloud workloads across providers.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      },
      {
        title: "Automation & DevOps",
        description: "Implement infrastructure as code, CI/CD pipelines, and cloud automation tools to streamline deployment and operations.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 009 9"/></svg>`,
      },
      {
        title: "Cloud Operations",
        description: "Monitor cloud performance, manage capacity, respond to incidents, and optimise costs across multi-cloud deployments.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
      },
    ],
    skillsGained: [
      "Cloud deployment models and service types",
      "Infrastructure as Code with Terraform and CloudFormation basics",
      "Container orchestration with Kubernetes fundamentals",
      "Cloud security: IAM, encryption, compliance scanning",
      "Cloud monitoring, logging, and performance optimisation",
      "Backup, replication, and disaster recovery in the cloud",
      "Cloud cost management and right-sizing strategies",
      "Multi-cloud and hybrid cloud networking",
    ],
    admissionRequirements: [
      "CompTIA Network+ or Security+ certification recommended",
      "2-3 years of IT systems administration or networking experience",
      "Basic familiarity with at least one major cloud platform (AWS, Azure, or GCP)",
    ],
    modules: [
      { number: 1, title: "Cloud Architecture & Design", topics: ["Cloud service models", "Cloud deployment options", "Compute & storage design", "Cloud networking design"], durationHours: 12 },
      { number: 2, title: "Cloud Security", topics: ["IAM in cloud", "Encryption at rest & in transit", "Security scanning", "Compliance & audit"], durationHours: 12 },
      { number: 3, title: "Deployment & Migration", topics: ["Migration strategies", "Application porting", "Data migration techniques", "Testing & validation"], durationHours: 12 },
      { number: 4, title: "Operations & Support", topics: ["Monitoring & alerting", "Performance tuning", "Incident response in cloud", "Capacity management"], durationHours: 10 },
      { number: 5, title: "Automation & Optimisation", topics: ["IaC with Terraform", "CI/CD pipelines", "Scripting for cloud ops", "Cost optimisation"], durationHours: 12 },
      { number: 6, title: "High Availability & DR", topics: ["Cloud HA patterns", "RTO/RPO in cloud", "Backup strategies", "Multi-region deployments"], durationHours: 10 },
      { number: 7, title: "Exam Preparation", topics: ["Practice exams", "Multi-cloud scenario labs", "Exam strategy"], durationHours: 10 },
    ],
    assessment: {
      formats: ["Multiple choice", "Multiple response", "Performance-based"],
      questionCount: 90,
      durationMinutes: 90,
      passingScore: 750,
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English"],
      validityYears: 3,
      prerequisites: ["Network+ or Security+ recommended"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 2400, examFee: 5900,
      totalCost: 8300, monthlyInstalment: 1390,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to Cloud+ CV0-004 course with multi-cloud labs",
      examFeeNote: "$369 USD exam voucher via Pearson VUE (converted at ~R16/USD)",
    },
    theme: comptiaTheme,
  },

  // ── CompTIA CASP+ ─────────────────────────────────────────────────────
  {
    slug: "comptia-casp-plus",
    fullName: "CompTIA Advanced Security Practitioner (CASP+)",
    title: "CASP+",
    provider: "CompTIA",
    level: "CE",
    examCode: "CAS-004",
    prepHours: 150,
    learningTypes: ["Self-paced online", "Blended (online + in-person)"],
    heroImage: "/heroes/comptia-casp-plus.jpg",
    description:
      "CompTIA CASP+ is the highest-level CompTIA cybersecurity certification and the benchmark for advanced security practitioners. Unlike management-focused certifications, CASP+ is designed for hands-on technical professionals who architect, engineer, and implement enterprise security solutions. This course covers advanced cryptography, security engineering, risk management, incident response, and the integration of security across complex hybrid environments. CASP+ is DoD 8570 approved at the IAT Level III and IASAE Level I/II.",
    learningCards: [
      {
        title: "Security Architecture",
        description: "Design and implement enterprise security architectures across cloud, on-premises, and hybrid environments using Zero Trust principles.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      },
      {
        title: "Advanced Cryptography",
        description: "Apply advanced cryptographic techniques including PKI design, HSM deployment, quantum-resistant algorithms, and key lifecycle management.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1"/></svg>`,
      },
      {
        title: "Risk & Compliance",
        description: "Lead enterprise risk management programmes, conduct security assessments, and align security strategy with regulatory frameworks.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
      },
      {
        title: "Security Operations",
        description: "Lead threat hunting, advanced incident response, digital forensics, and security automation across enterprise-scale environments.",
        iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      },
    ],
    skillsGained: [
      "Enterprise security architecture design with Zero Trust",
      "Advanced PKI design and HSM integration",
      "Post-quantum cryptography awareness",
      "Security engineering for ICS/SCADA and IoT environments",
      "Advanced threat hunting and threat intelligence integration",
      "Enterprise incident response programme leadership",
      "Risk management programme design and board-level reporting",
      "Security automation with SOAR and scripting",
    ],
    admissionRequirements: [
      "CompTIA Security+ and a minimum of 10 years IT administration experience required",
      "At least 5 years of hands-on technical security experience",
      "Strong foundation in network security, cryptography, and risk management",
      "Experience in enterprise architecture or security engineering roles",
    ],
    modules: [
      { number: 1, title: "Security Architecture", topics: ["Zero Trust design", "Reference architecture", "Security for cloud & hybrid", "Micro-segmentation"], durationHours: 18 },
      { number: 2, title: "Security Engineering", topics: ["ICS/SCADA security", "Embedded systems", "IoT security", "Hardware security"], durationHours: 16 },
      { number: 3, title: "Cryptography & PKI", topics: ["Advanced cryptographic protocols", "PKI hierarchy design", "HSM deployment", "Certificate lifecycle management"], durationHours: 16 },
      { number: 4, title: "Risk Management", topics: ["Risk quantification (FAIR)", "Third-party risk", "Regulatory frameworks", "Business impact analysis"], durationHours: 14 },
      { number: 5, title: "Enterprise Security Operations", topics: ["Threat intelligence programme", "Advanced threat hunting", "SOAR implementation", "Purple teaming"], durationHours: 18 },
      { number: 6, title: "Incident Response Leadership", topics: ["IR programme design", "Advanced forensics", "Legal & regulatory considerations", "Crisis communication"], durationHours: 14 },
      { number: 7, title: "Security Integration", topics: ["DevSecOps integration", "API security", "Secure SDLC", "Security automation"], durationHours: 12 },
      { number: 8, title: "Exam Preparation", topics: ["Performance-based practice", "Scenario walkthroughs", "Written response strategy"], durationHours: 12 },
    ],
    assessment: {
      formats: ["Multiple choice", "Multiple response", "Performance-based"],
      questionCount: 90,
      durationMinutes: 165,
      passingScore: "Pass/Fail",
      deliveryOptions: ["Pearson VUE test centre", "Online proctored exam"],
      languages: ["English"],
      validityYears: 3,
      prerequisites: ["Security+ required — 10 years IT experience & 5 years security experience recommended"],
    },
    whyKamela,
    pricing: {
      currency: "ZAR", symbol: "R",
      coursePrice: 3000, examFee: 8150,
      totalCost: 11150, monthlyInstalment: 1860,
      instalmentMonths: 6,
      coursePriceNote: "Lifetime access to CASP+ CAS-004 advanced security course",
      examFeeNote: "$509 USD exam voucher via Pearson VUE (converted at ~R16/USD)",
    },
    theme: comptiaTheme,
  },
];

// ---------------------------------------------------------------------------
// Combined exports
// ---------------------------------------------------------------------------

export const certificates: Certificate[] = [
  ...awsCertificates,
  ...azureCertificates,
  ...comptiaCertificates,
];

/** Look up a single certificate by slug — use in generateStaticParams and page components */
export function getCertBySlug(slug: string): Certificate | undefined {
  return certificates.find((c) => c.slug === slug);
}

/** Get all certificates for a specific provider */
export function getCertsByProvider(provider: Certificate["provider"]): Certificate[] {
  return certificates.filter((c) => c.provider === provider);
}

/** Get all slugs — use in generateStaticParams for static generation */
export function getAllCertSlugs(): string[] {
  return certificates.map((c) => c.slug);
}