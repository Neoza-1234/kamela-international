import React, { useState } from "react";

type TabId = "ict" | "business" | "governance" | "sales";

const CourseSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("ict");

  const courses = {
    ict: [
      {
        name: "Occupational Certificate: Cloud Administrator ",
        icon: "/icons/cloud-admin.svg",
        description:
          "Cloud administration fundamentals, including deployment, configuration, and management of cloud environments.",
        nqfLevel: 4,
        saqaid: "118699",
        credits: 149,
        duration: "12 months",
        courseUrl: "/courses/cloud-administrator"
      },
      {
        name: "Occupational Certificate: Software Developer ",
        icon: "/icons/software-development.svg",
        description:
          "Software development fundamentals, including programming languages, application design, and database integration.",
        nqfLevel: 6,
        saqaid: "118707",
        credits: 220,
        duration: "24 months",
        courseUrl: "/courses/software-developer"
      },
      {
        name: "Occupational Certificate: Cybersecurity Analyst",
        icon: "/icons/cyber-security.svg",
        description:
          "Essential security principles, threat management, and network protection for modern digital environments.",
        nqfLevel: 5,
        saqaid: "118986",
        credits: 173,
        duration: "10 months",
        courseUrl: "/courses/cybersecurity-analyst"
      },
      {
        name: "Occupational Certificate: Computer Technician",
        icon: "/icons/computer-technician.svg",
        description:
          "Hardware and software troubleshooting, maintenance, and repair for computer systems.",
        nqfLevel: 5,
        saqaid: "101408",
        credits: 282,
        duration: "15 months",
        courseUrl: "/courses/computer-technician"
      },
      {
        name: "Occupational Certificate: Data Science Practitioner",
        icon: "/icons/data-science.svg",
        description:
          "Data analysis, statistical modeling, and machine learning techniques for extracting insights from complex datasets.",
        nqfLevel: 5,
        saqaid: "118708",
        credits: 185,
        duration: "12 months",
        courseUrl: "/courses/data-science-practitioner"
      },
    ],
    business: [
      {
        name: "Occupational Certificate: Project Manager ",
        icon: "/icons/project-management.svg",
        description:
          "Project planning, execution, and monitoring using industry-standard methodologies and tools.",
        nqfLevel: 5,
        saqaid: "101869",
        credits: 240,
        duration: "24 months",
        courseUrl: "/courses/project-manager"
      },
      {
        name: "Occupational Certificate: Contact Centre Manager",
        icon: "/icons/contact-center-management.svg",
        description:
          "Contact centre operations, customer service excellence, and performance management.",
        nqfLevel: 5,
        saqaid: "99687",
        credits: 285,
        duration: "14 months",
        courseUrl: "/courses/contact-centre-manager"
      },
      {
        name: "Occupational Certificate: Supply Chain Practitioner ",
        icon: "/icons/supply-chain.svg",
        description:
          "Supply chain operations, logistics management, and inventory control for efficient distribution.",
        nqfLevel: 5,
        saqaid: "110942",
        credits: 145,
        duration: "12 months",
        courseUrl: "/courses/supply-chain-practitioner"
      },
      {
        name: "Occupational Certificate: Supply Chain Manager",
        icon: "/icons/supply-chain-management.svg",
        description:
          "Oversight of the entire supply chain, including procurement, logistics, and distribution.",
        nqfLevel: 6,
        saqaid: "111357",
        credits: 180,
        duration: "13 months",
        courseUrl: "/courses/supply-chain-manager"
      },
      {
        name: "Occupational Certificate: Office Administrator",
        icon: "/icons/office-admin.svg",
        description:
          "Office administration, document management, and administrative support for efficient office operations.",
        nqfLevel: 6,
        saqaid: "1021161",
        credits: 175,
        duration: "13 months",
        courseUrl: "/courses/office-administrator"
      },
      {
        name: "Occupational Certificate: Office Supervisor",
        icon: "/icons/office-supervisor.svg",
        description:
          "Office supervision, team leadership, and administrative oversight for efficient office operations.",
        nqfLevel: 5,
        saqaid: "118740",
        credits: 240,
        duration: "13 months",
        courseUrl: "/courses/office-supervisor"
      },
      {
        name: "HOC: Human Resource Management Administrator",
        icon: "/icons/hr-management.svg",
        description: "Administration knowledge .",
        nqfLevel: 6,
        saqaid: "121150",
        credits: 120,
        duration: "12 months",
        courseUrl: "/courses/hr-management-administrator"
      },
    ],
    governance: [
      {
        name: "Occupational Certificate: Quality Assurer ",
        icon: "/icons/quality-assurer.svg",
        description:
          "Quality assurance principles, inspection techniques, and compliance verification for product and service delivery.",
        nqfLevel: 5,
        saqaid: "118769",
        credits: 106,
        duration: "10 months",
        courseUrl: "/courses/quality-assurer"
      },
    ],
    sales: [
      {
        name: "Occupational Certificate: Marketing Coordinator ",
        icon: "/icons/marketing-coordinator.svg",
        description: ".",
        nqfLevel: 5,
        saqaid: "118706",
        credits: 175,
        duration: "10 months",
        courseUrl: "/courses/marketing-coordinator"
      },
      {
        name: "National Occupational Certificate: Sales Representative ",
        icon: "/icons/sales-representative.svg",
        description: ".",
        nqfLevel: 4,
        saqaid: "121792",
        credits: 155,
        duration: "10 months",
        courseUrl: "/courses/sales-representative"
      },
      {
        name: "Occupational Certificate: Retail Supervisor",
        icon: "/icons/retail-supervisor.svg",
        description:
          "Retail operations, inventory management, and customer service excellence in retail environments.",
        nqfLevel: 5,
        saqaid: "99573",
        credits: 100,
        duration: "18 months",
        courseUrl: "/courses/retail-supervisor"
      },
    ],
  };

  const tabs: { id: TabId; label: string }[] = [
    { id: "ict", label: "ICT" },
    { id: "business", label: "Business Management & Admin" },
    { id: "governance", label: "Governance & Operations" },
    { id: "sales", label: "Sales, Retail & Customer Experience" },
  ];

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
          {courses[activeTab].map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col"
            >
              <div className="p-5 flex flex-col grow">
                {/* Course Name */}
                <h3 className=" text-slate-900 mb-3 line-clamp-2 min-h-14">
                  {course.name}
                </h3>

                {/* Icon Section */}
                <div className="w-25 h-25 mx-auto mb-4 rounded-xl p-3 flex items-center justify-center">
                  <img
                    src={course.icon}
                    alt={course.name}
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
                <a
                  href={course.courseUrl}
                  className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm text-center block"
                >
                  View Full Course
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
