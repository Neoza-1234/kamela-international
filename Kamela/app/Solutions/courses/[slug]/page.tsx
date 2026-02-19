import Image from "next/image";
import { notFound } from "next/navigation";
import { getCourseBySlug, getAllCourseSlugs } from "@/data/courses";
import {
  Clock,
  Award,
  BookOpen,
  CheckCircle2,
  IdCard,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import CourseTabs from "@/app/Solutions/courses/CourseTabs";
import Journey from "@/app/Solutions/courses/journey";
import CourseFaq from "@/app/Solutions/courses/coursefaq";

/* ─── Types ──────────────────────────────────────────────────── */
interface Module {
  title: string;
  topics: string[];
}

interface ProgramDetails {
  duration: string;
  learningApproach: string;
  requirements: string[];
}

interface PurposeAndValue {
  purpose: string;
  value: string[];
}

interface Course {
  name: string;
  slug: string;
  category: string;
  description: string;
  fullDescription: string;
  icon: string;
  nqfLevel: string | number;
  credits: string | number;
  duration: string;
  saqaid: string | number;
  purposeAndValue: PurposeAndValue;
  outcomes: string[];
  programDetails: ProgramDetails;
  modules: Module[];
  careerOpportunities: string[];
}

/* ─── Static paths ────────────────────────────────────────────── */
export async function generateStaticParams() {
  const slugs = getAllCourseSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

/* ─── SEO Metadata ────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug) as Course | null;

  if (!course) {
    return { title: "Course Not Found | Kamela International" };
  }

  const pageUrl = `https://kamelatraining.co.za/Solutions/Study/${slug}`;

  return {
    title: `${course.name} | NQF Level ${course.nqfLevel} | Kamela International`,
    description: course.description,
    keywords: [
      course.name,
      `NQF Level ${course.nqfLevel}`,
      `SAQA ID ${course.saqaid}`,
      course.category,
      "learnerships South Africa",
      "accredited qualifications",
      "Kamela International",
      "skills development",
      "SETA accredited",
      "occupational qualifications",
      "career development",
      "workplace learning",
      "courses",
      "training programs",
      "micrososft certications",
      "short courses",
      "blended learning",
      "comptia certifications",
      "azure certifications",
      "online learning",
      "online courses",
    ],
    authors: [
      {
        name: "Kamela International",
        url: "https://kamelatraining.co.za",
      },
    ],
    metadataBase: new URL("https://kamelatraining.co.za"),
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${course.name} | Kamela International`,
      description: course.description,
      url: pageUrl,
      siteName: "Kamela International",
      images: [
        {
          url: course.icon,
          width: 1200,
          height: 630,
          alt: `${course.name} - Kamela International`,
        },
      ],
      locale: "en_ZA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.name} | Kamela International`,
      description: course.description,
      images: [course.icon],
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
}

/* ─── JSON-LD Structured Data ─────────────────────────────────── */
function CourseJsonLd({ course, slug }: { course: Course; slug: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "Kamela International",
      sameAs: "https://kamelatraining.co.za",
    },
    url: `https://kamelatraining.co.za/Solutions/Study/${slug}`,
    educationalLevel: `NQF Level ${course.nqfLevel}`,
    numberOfCredits: course.credits,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "blended",
      duration: course.duration,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ─── Stat Card ───────────────────────────────────────────────── */
function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:bg-indigo-200 hover:border-blue-500 hover:-translate-y-1">
      <Icon className="w-5 h-5 mb-3 text-blue-600" aria-hidden="true" />
      <p className="text-xs font-medium uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug) as Course | null;

  if (!course) notFound();

  return (
    <>
      <CourseJsonLd course={course} slug={slug} />

      <main className="min-h-screen">
        {/* ── Breadcrumb ── */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-4"
        >
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">
              /
            </li>
            <li>
              <Link
                href="/Solutions/Study"
                className="hover:text-blue-600 transition-colors"
              >
                Study
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">
              /
            </li>
            <li className="text-blue-600 font-medium truncate max-w-45">
              {course.name}
            </li>
          </ol>
        </nav>

        {/* ── Hero ── */}
        <header className="relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left */}
              <div className="flex-1">
                <span className="inline-block bg-blue-600 text-white border px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5">
                  {course.category}
                </span>
                <h1 className="lg:text-5xl font-bold mb-5 leading-tight">
                  {course.name}
                </h1>
                <p className="text-lg leading-relaxed max-w-2xl mb-10">
                  {course.fullDescription}
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <StatCard
                    icon={Award}
                    label="NQF Level"
                    value={course.nqfLevel}
                  />
                  <StatCard
                    icon={BookOpen}
                    label="Credits"
                    value={course.credits}
                  />
                  <StatCard
                    icon={Clock}
                    label="Duration"
                    value={course.duration}
                  />
                  <StatCard
                    icon={IdCard}
                    label="SAQA ID"
                    value={course.saqaid}
                  />
                </div>
              </div>

              {/* Right image */}
              <div className="lg:w-80 xl:w-96 shrink-0 w-full">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={course.icon}
                    alt={`${course.name} course illustration`}
                    width={400}
                    height={320}
                    priority
                    sizes="(max-width: 1024px) 100vw, 384px"
                    className="w-full h-72 lg:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Sticky Tab Nav ── */}
        <CourseTabs />

        {/* ── Content ── */}
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* ── Main column ── */}
            <article className="lg:col-span-2 space-y-2">
              {/* Overview */}
              <Section id="section-overview" title="Course Overview">
                <p className="text-slate-600 leading-relaxed">
                  {course.description}
                </p>
              </Section>

              {/* Purpose & Value */}
              <Section id="section-purpose" title="Purpose & Value">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Purpose
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {course.purposeAndValue.purpose}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Value Proposition
                    </h3>
                    <ul className="space-y-2.5">
                      {course.purposeAndValue.value.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2
                            className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Section>

              {/* Outcomes */}
              <Section id="section-outcomes" title="Key Outcomes">
                <p className="text-slate-600 mb-5">
                  Upon successful completion, learners will be able to:
                </p>
                <ol className="space-y-3">
                  {course.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5"
                      >
                        {idx + 1}
                      </span>
                      <span className="text-slate-600 pt-0.5">{outcome}</span>
                    </li>
                  ))}
                </ol>
              </Section>

              {/* Program Details */}
              <Section id="section-program" title="Program Details">
                <div className="grid sm:grid-cols-2 gap-6">
                  <DetailBlock
                    label="Duration"
                    value={course.programDetails.duration}
                  />
                  <DetailBlock
                    label="Learning Approach"
                    value={course.programDetails.learningApproach}
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Entry Requirements
                  </h3>
                  <ul className="space-y-2">
                    {course.programDetails.requirements.map((req, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-slate-600"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"
                        />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>

              {/* Learning Journey */}
              <Section id="section-journey" title="Your Learning Journey">
                <Journey />
              </Section>

              {/* Modules */}
              <Section id="section-curriculum" title="Curriculum Modules">
                <div className="space-y-5">
                  {course.modules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-blue-600 pl-5 py-1 transition-all duration-200"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {mod.title}
                      </h3>
                      <ul className="space-y-1.5">
                        {mod.topics.map((t, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-slate-600 text-sm"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 w-1 h-1 rounded-full bg-slate-400 shrink-0"
                            />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Careers */}
              <Section id="section-careers" title="Career Opportunities">
                <p className="text-slate-600 mb-5">
                  This qualification opens doors to various career opportunities
                  across industries:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.careerOpportunities.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3.5 bg-blue-50 rounded-xl border border-blue-100 transition-colors hover:bg-blue-100"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-blue-600 shrink-0"
                        aria-hidden="true"
                      />
                      <p className="font-medium text-gray-800 text-sm">{c}</p>
                    </div>
                  ))}
                </div>
              </Section>

              {/* FAQ */}
              <CourseFaq
                courseName={course.name}
                nqfLevel={course.nqfLevel}
                duration={course.duration}
                category={course.category}
              />
            </article>

            {/* ── Sidebar ── */}
            <aside className="space-y-5 lg:sticky lg:top-35 lg:self-start">
              {/* CTA card */}
              <div
                id="section-register"
                className="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-600 to-blue-800 p-6 shadow-xl shadow-blue-700/20 scroll-mt-24"
              >
                {/* Decorative circle */}
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-orange-600/80"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-orange-600/80"
                />

                <h3 className="text-lg font-semibold text-white mb-2 relative z-10">
                  Ready to Apply?
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-5 relative z-10">
                  Complete our registration form and our admissions team will
                  reach out to guide you through the next steps.
                </p>
                <Link
                  href="https://forms.office.com/r/XETAfjni01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 w-full inline-block bg-white text-blue-700 text-center py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-sm shadow-sm"
                >
                  Register Now →
                </Link>

                {/* Trust badges */}
                <div className="relative z-10 mt-5 pt-5 border-t border-white/20 grid grid-cols-2 gap-2">
                  <TrustBadge icon={ShieldCheck} label="SAQA Accredited" />
                  <TrustBadge icon={Users} label="Expert Facilitators" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

/* ─── Small shared sub-components ────────────────────────────── */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3 before:block before:w-1 before:h-6 before:rounded-full before:bg-blue-600">
        {title}
      </h2>
      {children}
    </section>
  );
}

function DetailBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
      <p className="text-xs font-semibold text-gray-500 tracking-wider mb-1">
        {label}
      </p>
      <p className="text-slate-700 text-sm leading-relaxed">{value}</p>
    </div>
  );
}

function TrustBadge({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon className="w-3.5 h-3.5 text-blue-200 shrink-0" aria-hidden="true" />
      <span className="text-xs text-blue-100">{label}</span>
    </div>
  );
}
