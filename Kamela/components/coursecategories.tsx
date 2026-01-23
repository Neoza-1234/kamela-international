"use client"

import  { useState, useEffect } from "react";
import Link from "next/link";
import { coursesData } from "@/data/courses";
import Image from "next/image";

type TabId = "ict" | "business" | "governance" | "sales";

const tabs: { id: TabId; label: string }[] = [
  { id: "ict", label: "ICT" },
  { id: "business", label: "Business Management & Admin" },
  { id: "governance", label: "Governance & Operations" },
  { id: "sales", label: "Sales, Retail & Customer Experience" },
];

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

const CourseSection = ({ initialTab = "ict" }: { initialTab?: TabId }) => {
  const [activeTab, setActiveTab] = useState<TabId>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const courses = groupCoursesByCategory(coursesData);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-3">Explore Our Courses</h1>
          <p>Choose a category to discover accredited qualifications</p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap gap-3 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 shadow-sm"
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
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col"
            >
              <div className="p-5 flex flex-col grow">
                {/* Course Name */}
                <h3 className=" text-slate-900 mb-3 line-clamp-2 min-h-14">
                  {course.name}
                </h3>

                {/* Icon Section */}
                <div className="w-25 h-25 mx-auto mb-4 rounded-xl p-3 flex items-center justify-center">
                  <Image
                    src={course.icon}
                    alt={course.name}
                    width={100}
                    height={100}
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
