import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/data/courses";
import {
  ArrowLeft,
  Clock,
  Award,
  BookOpen,
  CheckCircle2,
  IdCard,
} from "lucide-react";
import Link from "next/link";
import CourseTabs from "@/components/CourseTabs";
import Journey from "@/components/journey";

// Generate static paths for all courses
export async function generateStaticParams() {
  const mod = await import("@/data/courses");
  const slugs = await Promise.resolve(mod.getAllCourseSlugs());
  return slugs.map((slug: string) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.name} | Kamela`,
    description: course.description,
  };
}

export default async function Page(
  props: { params: { slug: string } } | { params: Promise<{ slug: string }> },
) {
  const { params } = await Promise.resolve(props);
  const resolvedParams = await Promise.resolve(params);

  const { coursesData } = await import("@/data/courses");
  const course = coursesData.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen mt-30">
      {/* Background SVG */}
      <svg
        className="size-full absolute -z-10 inset-0"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="#E2E8F0" strokeOpacity=".7" d="M-15.227 702.342H1439.7" />
        <circle
          cx="711.819"
          cy="372.562"
          r="308.334"
          stroke="#E2E8F0"
          strokeOpacity=".7"
        />
        <circle
          cx="16.942"
          cy="20.834"
          r="308.334"
          stroke="#d9d9d9"
          strokeOpacity=".7"
        />
        <path
          stroke="#d9d9d9"
          strokeOpacity=".7"
          d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7"
        />
        <circle
          cx="782.595"
          cy="411.166"
          r="308.334"
          stroke="#d9d9d9"
          strokeOpacity=".7"
        />
      </svg>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/UI-Components/Solutions/Study"
          className="inline-flex items-center gap-2 text-black hover:text-blue-700 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Study
        </Link>
      </div>

      {/* Hero Section */}
      <div className="text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Content */}
            <div className="flex-1">
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                {course.category.toUpperCase()}
              </div>
              <h1 className="text-3xl lg:text-5xl mb-4 leading-tight font-bold">
                {course.name}
              </h1>
              <p className="mb-8 text-gray-600">{course.fullDescription}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-xl p-4 bg-white shadow-sm">
                  <Award className="w-6 h-6 mb-2 text-blue-600" />
                  <div className="text-sm text-gray-600">NQF Level</div>
                  <div className="text-2xl font-bold">{course.nqfLevel}</div>
                </div>
                <div className="rounded-xl p-4 bg-white shadow-sm">
                  <BookOpen className="w-6 h-6 mb-2 text-blue-600" />
                  <div className="text-sm text-gray-600">Credits</div>
                  <div className="text-2xl font-bold">{course.credits}</div>
                </div>
                <div className="rounded-xl p-4 bg-white shadow-sm">
                  <Clock className="w-6 h-6 mb-2 text-blue-600" />
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="text-2xl font-bold">{course.duration}</div>
                </div>
                <div className="rounded-xl p-4 bg-white shadow-sm">
                  <IdCard className="w-6 h-6 mb-2 text-blue-600" />
                  <div className="text-sm text-gray-600">SAQA ID</div>
                  <div className="text-2xl font-bold">{course.saqaid}</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-96 shrink-0">
              <div className="rounded-xl p-2">
                <img
                  src={course.icon}
                  alt={course.name}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Tab Navigation */}
      <CourseTabs />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Course Overview */}
            <section
              id="section-overview"
              className="bg-white rounded-2xl p-6 shadow-sm scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
              <p className="text-slate-700">{course.description}</p>
            </section>

            {/* Purpose & Value */}
            <section
              id="section-purpose"
              className="bg-white rounded-2xl p-6 shadow-sm scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold mb-4">Purpose & Value</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Purpose
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {course.purposeAndValue.purpose}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Value Proposition
                  </h3>
                  <ul className="space-y-2">
                    {course.purposeAndValue.value.map(
                      (item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </section>

            {/* Key Outcomes */}
            <section
              id="section-outcomes"
              className="bg-white rounded-2xl p-6 shadow-sm scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold mb-4">Key Outcomes</h2>
              <p className="text-slate-700 mb-4">
                Upon successful completion, learners will be able to:
              </p>
              <ul className="space-y-2">
                {course.outcomes.map((outcome: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm font-semibold mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Program Details */}
            <section
              id="section-program"
              className="bg-white rounded-2xl p-6 shadow-sm scroll-mt-24"
            >
              <h2 className="mb-4">Program Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Duration
                  </h3>
                  <p className="text-slate-700">
                    {course.programDetails.duration}
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 mb-2">
                    Learning Approach
                  </h3>
                  <p className="text-slate-700">
                    {course.programDetails.learningApproach}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Entry Requirements
                  </h3>
                  <ul className="list-disc list-inside text-slate-700 space-y-1">
                    {course.programDetails.requirements.map(
                      (req: string, idx: number) => (
                        <li key={idx}>{req}</li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </section>

            {/* Learning Journey */}

            <section id="section-journey" className="p-6">
              <h2 className="my-4">How Your Learning Journey Will Look Like</h2>
              <Journey />
            </section>

            {/* Modules */}
            <section
              id="section-curriculum"
              className="bg-white rounded-2xl p-6 shadow-sm scroll-mt-24"
            >
              <h2 className="mb-4">
                Curriculum Modules
              </h2>
              <div className="space-y-4">
                {course.modules.map((mod: any, idx: number) => (
                  <div key={idx} className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-lg mb-2">{mod.title}</h3>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                      {mod.topics.map((t: string, i: number) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Career Opportunities */}
            <section
              id="section-careers"
              className="bg-white rounded-2xl p-6 shadow-sm scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold mb-4">
                Career Opportunities
              </h2>
              <p className="text-slate-700 mb-4">
                This qualification opens doors to various career opportunities
                across industries:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.careerOpportunities.map((c: string, i: number) => (
                  <div
                    key={i}
                    className="p-3 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <p className="font-medium text-gray-800">{c}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Side Info */}
          <aside className="space-y-6">
            <div
              id="section-register"
              className="bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-sm text-white scroll-mt-24"
            >
              <h3 className="text-lg font-medium mb-3">Ready to Apply?</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Take the next step in your career journey. Complete this
                registration form and our admissions team will contact you once
                completed.
              </p>
              <Link
                href="https://forms.office.com/r/XETAfjni01"
                className="w-full inline-block bg-white text-blue-700 text-center py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Register Now
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
