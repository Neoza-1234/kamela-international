import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  CalendarCheck,
  ShieldCheck,
  Monitor,
  Lock,
  Eye,
  FileCheck,
  ClipboardList,
  BookCheck,
  Gavel,
  Send,
  Award,
  ChevronRight,
} from "lucide-react";
import type { Metadata } from "next";

/* ─── Brand tokens ────────────────────────────────────────────── */
const BRAND = {
  orange: "#ff4500",
  blue: "#0866ff",
} as const;

/* ─── SEO ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "QCTO-Accredited Assessment Centre | EISA Dates 2026 | Kamela International",
  description:
    "Book your External Integrated Summative Assessment (EISA) at Kamela International's QCTO-accredited Assessment Centre. View 2026 EISA dates for Contact Centre Manager, Office Administrator, Project Manager, HR Administrator and more.",
  keywords: [
    "QCTO Assessment Centre South Africa",
    "EISA dates 2026",
    "External Integrated Summative Assessment",
    "QCTO accredited assessment centre",
    "EISA booking South Africa",
    "occupational qualifications assessment",
    "QCTO certification",
    "EISA fees South Africa",
    "Contact Centre Manager NQF 5 EISA",
    "Office Administrator NQF 5 EISA",
    "Project Manager NQF 5 EISA",
    "HR Administrator EISA",
    "Marketing Coordinator NQF 5 EISA",
    "Kamela International assessment",
    "QCTO EISA schedule",
    "assessment centre Johannesburg",
  ],
  authors: [
    { name: "Kamela International", url: "https://kamelatraining.co.za" },
  ],
  creator: "Kamela International",
  publisher: "Kamela International",
  metadataBase: new URL("https://kamelatraining.co.za"),
  alternates: { canonical: "/Assessment-Center" },
  openGraph: {
    title:
      "QCTO-Accredited Assessment Centre | EISA 2026 | Kamela International",
    description:
      "View 2026 EISA dates and book your External Integrated Summative Assessment at Kamela International's QCTO-accredited Assessment Centre.",
    url: "https://kamelatraining.co.za/Assessment-Center",
    siteName: "Kamela International",
    images: [
      {
        url: "https://kamelatraining.co.za/Kamela8.jpg",
        width: 1200,
        height: 630,
        alt: "Kamela International QCTO-Accredited Assessment Centre",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QCTO Assessment Centre | EISA Dates 2026 | Kamela International",
    description:
      "Book your EISA at Kamela International's QCTO-accredited Assessment Centre. 2026 dates available for multiple NQF Level 5 occupational qualifications.",
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

/* ─── EISA Schedule data ──────────────────────────────────────── */
const eisaRows = [
  {
    qualification: "OC: Contact Centre Manager",
    nqf: 5,
    saqaId: "99687",
    nextDate: "09-10 Feb 2026",
    upcomingDates: ["4-5 Jun 2026", "3-4 Oct 2026"],
  },
  {
    qualification: "OC: Marketing Coordinator",
    nqf: 5,
    saqaId: "118706",
    nextDate: "05-06 Mar 2026",
    upcomingDates: ["2-3 Jul 2026"],
  },
  {
    qualification: "OC: Office Administrator",
    nqf: 5,
    saqaId: "102161",
    nextDate: "23-24 Mar 2026",
    upcomingDates: ["13-14 May 2026", "28-29 Sep 2026"],
  },
  {
    qualification: "OC: Project Manager",
    nqf: 5,
    saqaId: "1018695",
    nextDate: "12-13 Mar 2026",
    upcomingDates: ["9-10 Nov 2026"],
  },
  {
    qualification: "HOC: Human Resource Management Administrator",
    nqf: 5,
    saqaId: "121150",
    nextDate: "23-24 Mar 2026",
    upcomingDates: ["6-7 Aug 2026"],
  },
];

/* ─── Assessment services data ────────────────────────────────── */
const services = [
  {
    icon: CalendarCheck,
    label: "Assessment Scheduling & Candidate Management",
    accent: BRAND.orange,
  },
  {
    icon: ShieldCheck,
    label: "Verification of Entry Requirements & Internal Assessments",
    accent: BRAND.blue,
  },
  {
    icon: Monitor,
    label:
      "Practical & Knowledge-Based Assessments reflecting real-world workplace scenarios",
    accent: BRAND.orange,
  },
  {
    icon: Lock,
    label: "Digital Assessment Tools & Secure Systems",
    accent: BRAND.blue,
  },
  {
    icon: Eye,
    label: "Assessment Supervision & Monitoring",
    accent: BRAND.orange,
  },
  {
    icon: FileCheck,
    label: "Submission of Results to QCTO for Certification",
    accent: BRAND.blue,
  },
];

/* ─── Process steps data ──────────────────────────────────────── */
const processSteps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Registration & Verification",
    body: "Learners submit documents and proof of internal assessments to confirm eligibility.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Booking & Scheduling",
    body: "Assessment dates are confirmed, communicated, and added to the EISA calendar.",
  },
  {
    icon: BookCheck,
    step: "03",
    title: "Assessment Day",
    body: "Learners complete knowledge and practical assessments at the centre under supervision.",
  },
  {
    icon: Gavel,
    step: "04",
    title: "Moderation & Quality Review",
    body: "Results are independently verified by accredited moderators for accuracy and fairness.",
  },
  {
    icon: Send,
    step: "05",
    title: "Submission to QCTO",
    body: "Final results are captured and submitted to QCTO for official processing.",
  },
  {
    icon: Award,
    step: "06",
    title: "Certification",
    body: "Learners receive a QCTO Occupational Certificate upon successful completion.",
  },
];

/* ─── Page ────────────────────────────────────────────────────── */
export default function AssessmentCenter() {
  return (
    <div className="min-h-screen w-full flex flex-col">
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
        <span style={{ color: BRAND.orange }} className="font-semibold">
          Assessment Centre
        </span>
      </nav>

      {/* ── Hero ── */}
      <header className="relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="sm:text-5xl font-black leading-tight mb-5">
              External Integrated Summative{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND.orange}, ${BRAND.blue})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Assessment Centre
              </span>
            </h1>

            <p className="leading-relaxed max-w-lg mb-8">
              Kamela International is a fully accredited QCTO Assessment Centre,
              authorised to conduct External Integrated Summative Assessments
              (EISA) for selected Occupational Qualifications. Our experienced
              assessors ensure a professional, compliant, and supportive
              environment for candidates to complete their final qualification
              assessments.
            </p>

            <div className="flex flex-wrap items-start gap-4">
              <a
                href="https://forms.office.com/r/Zn5Sa6jdjC"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-(--prime) text-white font-medium inline-flex flex-row justify-between items-center py-3 px-5 rounded-full w-52 border border-(--prime) transition-all duration-200 ease-in-out hover:bg-transparent hover:text-(--prime) cursor-pointer"
              >
                <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-8">
                  Book Your EISA
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

          {/* Right — image */}
          <div className="relative">
            <Image
              src="/Kamela8.jpg"
              alt="Kamela International QCTO-accredited assessment centre facilities"
              width={560}
              height={680}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* ── Why Choose Our Centre ── */}
      <section
        aria-labelledby="why-heading"
        className="px-6 py-16 md:px-16 lg:px-24 xl:px-32"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="why-heading"
            className="sm:text-4xl font-black mb-5"
          >
            Why Choose Our Assessment Centre?
          </h2>
          <p className="leading-relaxed max-w-3xl mx-auto">
            Kamela International provides a fully equipped, compliant, and
            professionally managed environment for learners to complete their
            final qualification assessments. We deliver credible and fair
            assessments through qualified assessors and moderators, modern
            facilities, and excellent support services — ensuring a smooth
            experience for every candidate.
          </p>
        </div>
      </section>

      {/* ── EISA Schedule Table ── */}
      <section
        id="eisa-schedule"
        aria-labelledby="schedule-heading"
        className="py-20 px-5 md:px-16 lg:px-24 xl:px-32"
      >
        <div className="text-center mb-10">
          <h2
            id="schedule-heading"
            className="sm:text-4xl mb-3"
          >
            2026 EISA Dates &amp; Qualifications
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            All assessments are conducted at our accredited centre based in Brynston. Book early
            to secure your preferred sitting date.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table
            className="min-w-full text-sm"
            aria-label="2026 EISA dates and qualifications"
          >
            <thead>
              <tr style={{ background: "#06060a" }}>
                {[
                  "Qualification",
                  "NQF Level",
                  "SAQA ID",
                  "Next EISA Date",
                  "Upcoming Dates",
                ].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-widest text-white whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {eisaRows.map((row, i) => (
                <tr
                  key={row.saqaId}
                  className="hover:bg-slate-50 transition-colors duration-150"
                >
                  <td className="py-4 px-5 font-medium  max-w-x">
                    {row.qualification}
                  </td>
                  <td className="py-4 px-5 text-gray-500">{row.nqf}</td>
                  <td className="py-4 px-5">
                    <span className="font-mono text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      {row.saqaId}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{
                        background: `${BRAND.orange}12`,
                        color: BRAND.orange,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: BRAND.orange }}
                        aria-hidden
                      />
                      {row.nextDate}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex flex-wrap gap-2">
                      {row.upcomingDates.map((d) => (
                        <span
                          key={d}
                          className="text-xs px-2.5 py-1 rounded-full border"
                          style={{
                            borderColor: `${BRAND.blue}30`,
                            color: BRAND.blue,
                            background: `${BRAND.blue}08`,
                          }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          Dates are subject to change. Contact us to confirm availability before
          booking.
        </p>
      </section>

      {/* ── Assessment Services ── */}
      <section
        aria-labelledby="services-heading"
        className="relative overflow-hidden py-20 px-4"
        style={{ background: "#06060a" }}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="services-heading"
              className="sm:text-4xl text-white leading-tight"
            >
              Full Suite of Assessment Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, label, accent }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl border p-6 flex items-start gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: "#0d0d16",
                  borderColor: "rgba(255,255,255,0.06)",
                }}
              >
               
                <div
                  aria-hidden
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ background: accent }}
                />
               
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${accent}50` }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${accent}15`,
                    border: `1px solid ${accent}25`,
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: accent }}
                    aria-hidden
                  />
                </div>
                <p className="text-white/90 text-sm leading-relaxed relative z-10">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment Fees ── */}
      <section
        aria-labelledby="fees-heading"
        className="py-16 px-5 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="fees-heading"
            className="mb-4">
            Assessment Centre Fees
          </h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            Fees are reviewed periodically and subject to change. Please contact
            our team for the latest fee structure before booking your assessment
            sitting.
          </p>
        </div>
      </section>

      {/* ── Assessment Process ── */}
      <section
        aria-labelledby="process-heading"
        className="py-20 px-4"
        style={{ background: "#06060a" }}
      >

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl font-black text-white leading-tight"
            >
              Assessment Process Overview
            </h2>
            <p className="text-white/80 text-sm mt-3 max-w-md mx-auto">
              Our streamlined six-step process ensures a smooth, compliant
              experience for every candidate.
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processSteps.map(({ icon: Icon, step, title, body }, i) => {
              const accent = i % 2 === 0 ? BRAND.orange : BRAND.blue;
              return (
                <li
                  key={step}
                  className="group relative overflow-hidden rounded-2xl border p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "#0d0d16",
                    borderColor: "rgba(255,255,255,0.06)",
                  }}
                >
                  {/* CSS-only hover border overlay — no JS event handlers */}
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1px ${accent}50` }}
                  />
                  {/* Hover glow spot */}
                  <div
                    aria-hidden
                    className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    style={{ background: accent }}
                  />

                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-black font-mono"
                      style={{ color: accent }}
                    >
                      {step}
                    </span>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${accent}15`,
                        border: `1px solid ${accent}25`,
                      }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: accent }}
                        aria-hidden
                      />
                    </div>
                  </div>
                  <h3 className="text-white font-bold relative z-10">
                    {title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed relative z-10">
                    {body}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        aria-labelledby="cta-heading"
        className="container mx-auto px-6 py-20 flex justify-center"
      >
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center w-full max-w-3xl"
          style={{ background: "#09090f" }}
        >
          <div className="relative z-10">
            <h2
              id="cta-heading"
              className="sm:text-4xl text-white mb-4 leading-tight"
            >
              Book Your Assessment Today
            </h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto leading-relaxed">
              Ensure your learners complete their qualifications in a
              professional and supportive environment. Seats are limited —
              register early to secure your preferred EISA date.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://forms.office.com/r/Zn5Sa6jdjC"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-blue-700 text-white font-medium inline-flex flex-row justify-between items-center py-3 px-5 rounded-full w-52 border border-blue-700 transition-all duration-200 ease-in-out hover:bg-transparent hover:text-white"
              >
                <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-8">
                  Book Your EISA
                </span>
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-all duration-200 ease-in-out group-hover:-translate-x-35 group-hover:rotate-45 group-hover:bg-black">
                  <ArrowUpRight
                    className="w-4 h-4 text-black transition-colors duration-200 ease-in-out group-hover:text-white"
                    strokeWidth={1.67}
                  />
                </div>
              </a>

              <Link
                href="/Contact"
                className="group bg-blue-700 text-white font-medium inline-flex flex-row justify-between items-center py-3 px-5 rounded-full w-52 border border-blue-700 transition-all duration-200 ease-in-out hover:bg-transparent hover:text-white"
              >
                <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-8">
                  Contact Us
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
        </div>
      </section>
    </div>
  );
}
