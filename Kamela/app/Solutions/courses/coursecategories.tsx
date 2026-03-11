"use client"

import  { useState, useEffect } from "react";
import Link from "next/link";
import { coursesData } from "@/data/courses";
import Image from "next/image";

/* ─── Types ───────────────────────────────────────────────────── */
type TabId = "ict" | "business" | "governance" | "sales";


/* ─── Tab config ──────────────────────────────────────────────── */
const tabs: { id: TabId; label: string }[] = [
  { id: "ict", label: "ICT" },
  { id: "business", label: "Business Management & Admin" },
  { id: "governance", label: "Governance & Operations" },
  { id: "sales", label: "Sales, Retail & Customer Experience" },
];


/* ─── Group courses by tab ────────────────────────────────────── */
function groupCoursesByCategory(data: typeof coursesData) {
  const grouped: Record<TabId, typeof coursesData> = {
    ict: [],
    business: [],
    governance: [],
    sales: [],
  };
  data.forEach(course => {
    if (grouped[course.category as TabId]) {
      grouped[course.category as TabId].push(course);
    }
  });
  return grouped;
}



const groupedCourses = groupCoursesByCategory(coursesData);


/* ─── Main component ──────────────────────────────────────────── */

const CourseSection = ({ initialTab = "ict" }: { initialTab?: TabId }) => {
  const [activeTab, setActiveTab] = useState<TabId>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const courses = groupCoursesByCategory(coursesData);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="mb-3">Explore Our Courses</h2>
          <p className="text-gray-500">Choose a category to discover accredited qualifications</p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap gap-5 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-3xl border-2 border-black text-black transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none flex flex-col ${
                activeTab === tab.id
                  ? "bg-black text-white scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:text-black cursor-pointer"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {courses[activeTab].map((course) => (
            <div
              key={course.slug}
              className="rounded-3xl border-2 border-black text-black transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none flex flex-col"
            >
              <div className="p-5 flex flex-col grow">
                {/* Course Name */}
                <h3 className="mb-3 line-clamp-2 min-h-14 font-bold">
                  {course.name}
                </h3>

                {/* Icon Section */}
                <div className="w-25 h-25 mx-auto mb-4 rounded-xl p-3 flex items-center justify-center">
                  <Image
                    src={course.icon}
                    alt={course.name}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-4 line-clamp-3 grow">
                  {course.description}
                </p>

                {/* Course Details */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center justify-between py-1.5 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-500">
                      NQF Level
                    </span>
                    <span className="text-sm font-bold text-blue-600">
                      {course.nqfLevel}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-500">
                      SAQA ID
                    </span>
                    <span className="text-sm font-bold text-blue-600">
                      {course.saqaid}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-500">
                      Credits
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      {course.credits}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-500">
                      Duration
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/Solutions/courses/${course.slug}`}
                  className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm text-center block"
                >
                  View Full Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
