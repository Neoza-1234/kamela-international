import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileText,
  Search,
  Award,
  Code,
  Computer,
  FingerprintPattern,
  Database,
  FolderKanban,
  BookOpenCheck,
  Headset,
  Store,
  Container,
  Forklift,
  ChartCandlestick,
  BadgeDollarSign,
  Briefcase,
  Building2,
  UsersRound,
} from "lucide-react";
import type { Metadata } from "next";

/* ─── SEO ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Recognition of Prior Learning (RPL) Services | Kamela International",
  description:
    "Get your existing skills and experience formally recognized with Kamela International's RPL services. Earn accredited qualifications faster — no traditional study required. Available across South Africa.",
  keywords: [
    "Recognition of Prior Learning",
    "RPL South Africa",
    "RPL qualifications",
    "prior learning assessment",
    "accredited RPL services",
    "RPL certification",
    "skills recognition South Africa",
    "RPL for experienced workers",
    "SAQA RPL",
    "Kamela International RPL",
    "QCTO",
  ],
  authors: [
    { name: "Kamela International", url: "https://kamelatraining.co.za" },
  ],
  creator: "Kamela International",
  publisher: "Kamela International",
  metadataBase: new URL("https://kamelatraining.co.za"),
  alternates: { canonical: "/Solutions/RPL" },
  openGraph: {
    title:
      "Recognition of Prior Learning (RPL) Services | Kamela International",
    description:
      "Have your real-world skills and experience formally recognized. Kamela International's RPL services help you earn accredited qualifications based on what you already know.",
    url: "https://kamelatraining.co.za/Solutions/RPL",
    siteName: "Kamela International",
    images: [
      {
        url: "https://kamelatraining.co.za/recognitionpl.png",
        width: 1200,
        height: 630,
        alt: "Recognition of Prior Learning Services - Kamela International",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recognition of Prior Learning (RPL) | Kamela International",
    description:
      "Turn your work experience into an accredited qualification. Kamela International offers expert RPL services across South Africa.",
    images: ["https://kamelatraining.co.za/recognitionpl.png"],
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

/* ─── Brand Colors ───────────────────────────────────────────── */

const BRAND = {
  orange: "#ff4500",
  blue: "#0866ff",
} as const;


/* ─── Data ────────────────────────────────────────────────────── */
const benefits = [
  {
    title: "Faster achievement of a qualification",
    body: "RPL lets you gain qualifications more quickly by recognising your existing skills and knowledge — skipping modules you've already mastered.",
  },
  {
    title: "Reduced training time and cost",
    body: "Avoid redundant training by having prior learning recognised, saving significant time and money on your path to qualification.",
  },
  {
    title: "Recognition of real experience",
    body: "RPL validates skills gained through practical experience, strengthening your CV and improving employability and career prospects.",
  },
  {
    title: "Supports promotions and career mobility",
    body: "Formally recognised competencies can help you qualify for promotions, new roles, or specialisations you've been working towards.",
  },
  {
    title: "Ideal for experienced workers",
    body: "Especially beneficial for those with extensive work experience who lack formal certifications to demonstrate what they know.",
  },
  {
    title: "Increases confidence and self-esteem",
    body: "Having your prior learning officially acknowledged validates your expertise and builds confidence in your professional abilities.",
  },
];

const journeySteps = [
  {
    icon: Search,
    step: "01",
    title: "Initial Consultation",
    body: "Discuss your prior learning experiences and career goals with our RPL experts to map out the best qualification pathway.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Documentation",
    body: "Gather and submit a portfolio of evidence — work samples, references, and supporting documents that demonstrate your competence.",
  },
  {
    icon: Award,
    step: "03",
    title: "Assessment",
    body: "Our assessors review your portfolio and may conduct interviews or practical demonstrations to determine your level of recognition.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Outcome",
    body: "Receive your SAQA-registered qualification or formal certification based on the assessment results.",
  },
  {
    icon: Clock,
    step: "05",
    title: "Further Development",
    body: "Explore additional training or education opportunities to continue building on your newly recognised foundation.",
  },
];

const eligibilityItems = [
  "You must have relevant prior learning experiences that can be documented and assessed.",
  "A comprehensive portfolio of evidence — including work samples, references, and supporting documents — is typically required.",
  "You should be prepared to undergo an assessment process, which may include interviews or practical skills demonstrations.",
  "RPL is suitable for individuals seeking qualifications in vocational education, professional certifications, and academic degrees.",
  "Employer validation may be required to confirm the authenticity of your prior learning experiences.",
];

const certificates = [
  {
    icon: Code,
    title: "Occupational Certificate: Software Developer",
  },
  {
    icon: Computer,
    title: "Occupational Certificate: Computer Technician",
  },
  {
    icon: FingerprintPattern,
    title: "Occupational Certificate: Cybersecurity Analyst",
  },
  {
    icon: Database,
    title: "Occupational Certificate: Data Science Practitioner",
  },
  {
    icon: FolderKanban,
    title: "Occupational Certificate: Project Manager",
  },
  {
    icon: BookOpenCheck,
    title: "Occupational Certificate: Quality Assurer",
  },
  {
    icon: Headset,
    title: "Occupational Certificate: Contact Centre Manager",
  },
  {
    icon: Store,
    title: "Occupational Certificate: Retail Supervisor",
  },
  {
    icon: Container,
    title: "Occupational Certificate: Supply Chain Practitioner",
  },
  {
    icon: Forklift,
    title: "Occupational Certificate: Supply Chain Manager",
  },
  {
    icon: ChartCandlestick,
    title: "Occupational Certificate: Marketing Coordinator",
  },
  {
    icon: BadgeDollarSign,
    title: "National Occupational Certificate: Sales Representative",
  },
  {
    icon: Briefcase,
    title: "Occupational Certificate: Office Administrator",
  },
  {
    icon: Building2,
    title: "Occupational Certificate: Office Supervisor",
  },
  {
    icon: UsersRound,
    title:
      "Higher Occupational Certificate: Human Resource Management Administrator",
  },
];

/* ─── Page ────────────────────────────────────────────────────── */
export default function RPL() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500 font-medium mt-30 px-10 md:px-16 lg:px-24 xl:px-32 mb-3"
      >
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <span aria-hidden className="text-gray-300">
          /
        </span>
        <span>Solutions</span>
        <span aria-hidden className="text-gray-300">
          /
        </span>
        <span className="text-(--prime) font-semibold">RPL</span>
      </nav>

      {/* ── Hero ── */}
      <header className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1
              className="sm:text-5xl leading-tight text-start md:text-left"
              style={{ color: "#0d0d14" }}
            >
              Your Experience{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND.orange}, ${BRAND.blue})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Deserves Recognition 
              </span>{" "}
              Through RPL Services
            </h1>

          <p className="mt-6 leading-relaxed max-w-lg">
            At Kamela International, we specialise in RPL services that empower
            individuals to have their existing skills formally recognised —
            earning accredited qualifications based on what you already know,
            whether through work, life, or informal training.
          </p>

          <div className="mt-8 items-center ">
            <Link
              href="/Contact"
              className="group bg-(--prime) text-white font-medium inline-flex flex-row justify-between items-center py-3 px-5 rounded-full w-52 border border-(--prime) transition-all duration-200 ease-in-out hover:bg-transparent hover:text-(--prime) cursor-pointer"
            >
              <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-8">
                Consult with Us
              </span>
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-all duration-200 ease-in-out group-hover:-translate-x-35 group-hover:rotate-45 group-hover:bg-black">
                <ArrowUpRight
                  className="w-4 h-4 text-black transition-colors duration-200 ease-in-out group-hover:text-white"
                  strokeWidth={1.67}
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Decorative blob behind image */}
          <Image
            src="/recognitionpl.png"
            alt="Kamela International Recognition of Prior Learning services"
            width={560}
            height={560}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>
      </header>

      {/* ── What Is RPL ── */}
      <section aria-labelledby="about-rpl-heading">
        <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 md:order-1">
            <div aria-hidden className="absolute -inset-3 rounded-3xl  -z-10" />
            <Image
              src="/rpl2.jpg"
              alt="RPL assessment and documentation process at Kamela International"
              width={540}
              height={620}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2
              id="about-rpl-heading"
              className="sm:text-4xl leading-tight mb-6"
            >
              Understanding Recognition of Prior Learning
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Recognition of Prior Learning (RPL) is a process that allows
                individuals to have their existing skills, knowledge, and
                competencies formally assessed and recognised — regardless of
                how they were acquired. RPL acknowledges that learning can occur
                through work experience, informal training, volunteering, and
                life experiences.
              </p>
              <p>
                Through RPL, individuals can obtain accredited qualifications
                without having to undergo traditional education or training
                programmes from scratch. It is particularly beneficial for those
                who have significant practical experience but lack formal
                qualifications to demonstrate their capabilities.
              </p>
              <p>
                At Kamela International, we bridge the gap between experience
                and formal education — enabling you to advance your career,
                enhance employability, and access further training
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section
        aria-labelledby="benefits-heading"
        className="container mx-auto px-6 py-20"
      >
        <div className="text-center mb-12">
          <h2 id="benefits-heading" className="sm:text-4xl mb-3">
            Benefits of RPL
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Formal recognition of your prior learning opens doors that
            experience alone cannot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(({ title, body }) => (
            <div
              key={title}
              className="group border border-slate-200 rounded-2xl p-6 space-y-3 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:border-blue-200"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <CheckCircle2
                  className="w-4.5 h-4.5 text-blue-600"
                  aria-hidden
                />
              </div>
              <p className="font-bold">{title}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RPL Journey ── */}
      <section
        aria-labelledby="journey-heading"
        className="bg-black py-20 px-4 overflow-hidden relative"
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="journey-heading" className="sm:text-4xl text-white">
              Your RPL Journey with Kamela
            </h2>
          </div>
          <ol className="relative">
            <div
              aria-hidden
              className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-linear-to-b from-blue-600/60 via-blue-600/30 to-transparent -translate-x-1/2"
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {journeySteps.map(({ icon: Icon, step, title, body }) => (
                <li
                  key={step}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="relative mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                      <Icon
                        className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300"
                        aria-hidden
                      />
                    </div>
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                      {step}
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-2">{title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {body}
                  </p>
                </li>
              ))}
            </div>
          </ol>
        </div>
      </section>

      {/* ── Eligibility ── */}
      <section
        aria-labelledby="eligibility-heading"
        className="container mx-auto px-6 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="eligibility-heading" className="sm:text-4xl mb-3">
              RPL Eligibility &amp; Requirements
            </h2>
            <p className="text-gray-500">
              Check whether you qualify to begin your RPL journey.
            </p>
          </div>

          <ul className="space-y-3">
            {eligibilityItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-blue-200 hover:bg-blue-50/40 transition-colors duration-200"
              >
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                  {i + 1}
                </div>
                <p className="leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Approved Qualifications ── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4">
              Available Occupational Certificates for RPL
            </h2>
            <p className="sm:text-lg text-gray-500 max-w-2xl mx-auto">
              Choose from a wide range of occupational certificates across
              various industries, all available for Recognition of Prior
              Learning (RPL) assessment. Whether you're looking to validate your
              skills in technology, business, or any other field, we have the
              right certificate for you.
            </p>
          </div>

          {/* RPL Certificates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
            {certificates.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-xl p-6 sm:p-7 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-linear-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-blue-700" />
                  </div>

                  <p className="font-semibold  sm:text-base leading-snug group-hover:text-blue-700 transition-colors duration-300">
                    {cert.title}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-blue-400 to-blue-600 rounded-bl-xl transition-all duration-300 w-0 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        aria-labelledby="cta-heading"
        className="container mx-auto px-6 py-20"
      >
        <div className="relative overflow-hidden bg-black rounded-3xl p-10 md:p-14 text-center">
          <div className="relative z-10">
            <h2
              id="cta-heading"
              className="sm:text-4xl font-black text-white mb-4"
            >
              Ready to Start Your RPL Journey?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
              Apply for Recognition of Prior Learning today and take the next
              step in your career. Our team will guide you through every stage
              of the process.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/Contact"
                className="group bg-blue-700 text-white font-medium inline-flex flex-row justify-between items-center py-3 px-5 rounded-full w-52 border border-blue-700 transition-all duration-200 ease-in-out hover:bg-transparent hover:text-white"
              >
                <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-8">
                  Consult with Us
                </span>
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-all duration-200 ease-in-out group-hover:-translate-x-35 group-hover:rotate-45 group-hover:bg-black">
                  <ArrowUpRight
                    className="w-4 h-4 text-black transition-colors duration-200 ease-in-out group-hover:text-white"
                    strokeWidth={1.67}
                  />
                </div>
              </Link>

              <a
                href="https://forms.office.com/r/4BMZTXFiEb"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-blue-700 text-white font-medium inline-flex flex-row justify-between items-center py-3 px-5 rounded-full w-52 border border-blue-700 transition-all duration-200 ease-in-out hover:bg-transparent hover:text-white"
              >
                <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-8">
                  Register Now
                </span>
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-all duration-200 ease-in-out group-hover:-translate-x-35 group-hover:rotate-45 group-hover:bg-black">
                  <ArrowUpRight
                    className="w-4 h-4 text-black transition-colors duration-200 ease-in-out group-hover:text-white"
                    strokeWidth={1.67}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
