"use client";

import Link from "next/link";
import Image from "next/image";
import CourseSection from "@/app/Solutions/courses/coursecategories";
import { ArrowUpRight, Medal, Handshake, Lightbulb, BookOpen, Rocket, Globe } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

/* ─── Brand tokens ────────────────────────────────────────────── */
const BRAND = {
  orange: "#ff4500",
  blue: "#0866ff",
} as const;

/* ─── Types ───────────────────────────────────────────────────── */
type TabId = "ict" | "business" | "governance" | "sales";

/* ─── Why Choose Us data ──────────────────────────────────────── */
const whyCards = [
  {
    icon: Medal,
    title: "Accredited Training Provider",
    body: "Achieve certification with nationally recognised qualifications from MICT SETA, W&R SETA, TETA and SERVICES SETA.",
    accent: BRAND.orange,
  },
  {
    icon: Handshake,
    title: "Job Readiness Support",
    body: "Our occupational training provides job readiness support to equip you with the skills and confidence for workplace success.",
    accent: BRAND.blue,
  },
  {
    icon: Lightbulb,
    title: "Flexible Financing",
    body: "We offer flexible financing for occupational qualifications, allowing budget-friendly investment in your future.",
    accent: BRAND.orange,
  },
  {
    icon: BookOpen,
    title: "Diverse Course Catalogue",
    body: "Accredited programmes including QCTO qualifications and global certifications to equip you with industry-relevant skills.",
    accent: BRAND.blue,
  },
  {
    icon: Rocket,
    title: "Flexible Learning",
    body: "Study anywhere with a mix of online learning, blended classes, and face-to-face support (programme dependent).",
    accent: BRAND.orange,
  },
  {
    icon: Globe,
    title: "Inclusivity",
    body: "Equitable access to education for youth, unemployed individuals, rural communities, professionals, and people of all backgrounds.",
    accent: BRAND.blue,
  },
];

/* ─── Page ────────────────────────────────────────────────────── */
export default function Study() {
  const searchParams = useSearchParams();

  const getInitialTab = (): TabId => {
    const tab = searchParams.get("tab") as TabId;
    return tab && ["ict", "business", "governance", "sales"].includes(tab)
      ? tab
      : "ict";
  };

  const [activeTab] = useState<TabId>(getInitialTab);

  return (
    <div className="min-h-screen w-full flex flex-col">

      {/* ── Breadcrumb ── */}
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500 font-medium mt-30 px-10 md:px-16 lg:px-24 xl:px-32 mb-3"
      >
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span aria-hidden className="text-gray-300">/</span>
        <span>Solutions</span>
        <span aria-hidden className="text-gray-300">/</span>
        <span style={{ color: BRAND.orange }} className="font-semibold">Study</span>
      </nav>

      {/* ── Hero ── */}
      <header className="relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 md:px-16 lg:px-24 xl:px-20 px-5 pt-15 pb-0 max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center md:items-start max-w-xl">
            <h1
              className="sm:text-5xl leading-tight text-start md:text-left"
              style={{ color: "#0d0d14" }}
            >
              A Supportive,{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND.orange}, ${BRAND.blue})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Future-Ready
              </span>{" "}
              Learning Community
            </h1>

            <p className="text-start md:text-left leading-relaxed mt-6 max-w-lg">
              At Kamela International, students are our priority. We deliver an engaging,
              supportive, and flexible learning experience — combining technology, mentorship,
              and industry-aligned qualifications to equip you with the skills and confidence
              for success in the modern workforce.
            </p>

            

            <div className="flex flex-wrap items-center gap-4 mt-8">
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

          {/* Right — image*/}
          <div className="relative shrink-0 w-full md:w-auto flex justify-center">
            <Image
              src="/icons/study-hero-img.png"
              alt="Kamela International students in a future-ready learning environment"
              width={520}
              height={440}
              priority
              sizes="(max-width: 768px) 90vw, 480px"
              className="relative z-10 w-full max-w-130 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* ── Course Section ── */}
      <div id="courses" className="py-20">
        <CourseSection initialTab={activeTab} />
      </div>

      {/* ── Why Choose Us ── */}
      <section
        aria-labelledby="why-heading"
        className="relative overflow-hidden py-20 px-4"
        style={{ background: "#06060a" }}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2
              id="why-heading"
              className="sm:text-4xl text-white leading-tight"
            >
              Built for Every Learner
            </h2>
            <p className="text-white/80 mt-3 max-w-md mx-auto leading-relaxed">
              Six reasons thousands of South Africans choose Kamela International to build their future.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyCards.map(({ icon: Icon, title, body, accent }, i) => (
              <WhyCard
                key={title}
                icon={Icon}
                title={title}
                body={body}
                accent={accent}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        aria-labelledby="cta-heading"
        className="container mx-auto px-6 py-20 flex justify-center items-center"
      >
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center w-full max-w-4xl"
          style={{ background: "#09090f" }}
        >
          <div className="relative z-10">
            <h2
              id="cta-heading"
              className="sm:text-4xl font-black text-white mb-4 leading-tight"
            >
              Ready to Shape Your Future?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
              Whether you're a student eager to learn or a professional looking to grow, our
              programmes are designed to help you succeed. Let's build your future together.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Why Card ────────────────────────────────────────────────── */
function WhyCard({
  icon: Icon,
  title,
  body,
  accent,
  index,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
  accent: string;
  index: number;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#0d0d16",
        borderColor: "rgba(255,255,255,0.06)",
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* CSS-only hover border overlay */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}45` }}
      />
      {/* Hover glow spot */}
      <div
        aria-hidden
        className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{ background: accent }}
      />

      {/* Icon badge */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: `${accent}15`,
          border: `1px solid ${accent}25`,
        }}
      >
        <Icon className="w-5 h-5" style={{ color: accent }} aria-hidden />
      </div>

      <p className="font-bold text-white relative z-10">{title}</p>
      <p className="text-white/80 leading-relaxed relative z-10">{body}</p>
    </div>
  );
}