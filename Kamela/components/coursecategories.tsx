import React, { useState } from 'react';


type TabId = 'ict' | 'business' | 'governance' | 'sales';

const CourseSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>('ict');

  const courses = {
    ict: [
      {
        name: "Occupational Certificate: Cloud Administrator ",
        icon: "/icons/cloud-admin.svg",
        description: "Cloud administration fundamentals, including deployment, configuration, and management of cloud environments.",
        nqfLevel: 4,
        saqaid: "118699",
        credits: 149,
        duration: "12 months"
      },
      {
        name: "Occupational Certificate: Software Developer ",
        icon: "/icons/software-development.svg",
        description: "Software development fundamentals, including programming languages, application design, and database integration.",
        nqfLevel: 6,
        saqaid: "118707",
        credits: 220,
        duration: "24 months"
      },
      {
        name: "Occupational Certificate: Cybersecurity Analyst",
        icon: "/icons/cyber-security.svg",
        description: "Essential security principles, threat management, and network protection for modern digital environments.",
        nqfLevel: 5,
        saqaid: "118986",
        credits: 173,
        duration: "10 months"
      },
      {
        name: "Occupational Certificate: Computer Technician",
        icon: "/icons/computer-technician.svg",
        description: "Hardware and software troubleshooting, maintenance, and repair for computer systems.",
        nqfLevel: 5,
        saqaid: "101408",
        credits: 282,
        duration: "15 months"
      },
      {
        name: "Occupational Certificate: Data Science Practitioner",
        icon: "/icons/data-science.svg",
        description: "Data analysis, statistical modeling, and machine learning techniques for extracting insights from complex datasets.",
        nqfLevel: 5,
        saqaid: "118708",
        credits: 185,
        duration: "12 months"
      },
      
    ],
    business: [
      {
        name: "Occupational Certificate: Project Manager ",
        icon: "/icons/project-management.svg",
        description: "Project planning, execution, and monitoring using industry-standard methodologies and tools.",
        nqfLevel: 5,
        credits: 240,
        saqaid: "101869",
        duration: "24 months"
      },
      {
        name: "Occupational Certificate: Quality Assurer ",
        icon: "/icons/quality-assurance.svg",
        description: "Essential administrative skills, office procedures, and professional communication for modern workplaces.",
        nqfLevel: 4,
        credits: 120,
        duration: "10 months"
      },
      {
        name: "Advanced Certificate in Project Management",
        icon: "/icons/project-mgmt.svg",
        description: "Project planning, execution, and monitoring using industry-standard methodologies and tools.",
        nqfLevel: 6,
        credits: 180,
        duration: "14 months"
      },
      {
        name: "Diploma in Human Resource Management",
        icon: "/icons/hr-mgmt.svg",
        description: "Comprehensive HR practices including recruitment, employee relations, and performance management.",
        nqfLevel: 6,
        credits: 240,
        duration: "18 months"
      },
      {
        name: "Certificate in Business Analytics",
        icon: "/icons/business-analytics.svg",
        description: "Data-driven business insights, forecasting techniques, and strategic decision support systems.",
        nqfLevel: 5,
        credits: 140,
        duration: "12 months"
      },
      {
        name: "Certificate in Supply Chain Management",
        icon: "/icons/supply-chain.svg",
        description: "Logistics, inventory management, and supply chain optimization for efficient operations.",
        nqfLevel: 5,
        credits: 160,
        duration: "13 months"
      }
    ],
    governance: [
      {
        name: "Diploma in Corporate Governance",
        icon: "/icons/corporate-gov.svg",
        description: "Board responsibilities, compliance frameworks, and ethical leadership in corporate environments.",
        nqfLevel: 6,
        credits: 240,
        duration: "18 months"
      },
      {
        name: "Certificate in Risk Management",
        icon: "/icons/risk-mgmt.svg",
        description: "Risk identification, assessment, and mitigation strategies for organizational resilience.",
        nqfLevel: 5,
        credits: 140,
        duration: "11 months"
      },
      {
        name: "Advanced Certificate in Compliance Management",
        icon: "/icons/compliance.svg",
        description: "Regulatory compliance, legal frameworks, and corporate policy implementation.",
        nqfLevel: 6,
        credits: 180,
        duration: "15 months"
      },
      {
        name: "Certificate in Operations Management",
        icon: "/icons/operations.svg",
        description: "Process optimization, quality control, and operational efficiency in production environments.",
        nqfLevel: 5,
        credits: 150,
        duration: "12 months"
      },
      {
        name: "Diploma in Public Sector Management",
        icon: "/icons/public-sector.svg",
        description: "Public administration, policy development, and service delivery in government organizations.",
        nqfLevel: 6,
        credits: 300,
        duration: "20 months"
      },
      {
        name: "Certificate in Internal Auditing",
        icon: "/icons/auditing.svg",
        description: "Audit procedures, internal controls, and compliance verification for organizational integrity.",
        nqfLevel: 5,
        credits: 130,
        duration: "10 months"
      }
    ],
    sales: [
      {
        name: "National Certificate: Retail Operations",
        icon: "/icons/retail-ops.svg",
        description: "Store operations, inventory management, and customer service excellence in retail environments.",
        nqfLevel: 4,
        credits: 120,
        duration: "10 months"
      },
      {
        name: "Diploma in Sales Management",
        icon: "/icons/sales-mgmt.svg",
        description: "Sales strategies, team leadership, and performance optimization for revenue growth.",
        nqfLevel: 6,
        credits: 240,
        duration: "18 months"
      },
      {
        name: "Certificate in Customer Experience Management",
        icon: "/icons/customer-exp.svg",
        description: "Customer journey mapping, satisfaction metrics, and service design for exceptional experiences.",
        nqfLevel: 5,
        credits: 140,
        duration: "11 months"
      },
      {
        name: "Advanced Certificate in Digital Marketing",
        icon: "/icons/digital-marketing.svg",
        description: "Online marketing strategies, social media management, and e-commerce optimization.",
        nqfLevel: 6,
        credits: 180,
        duration: "14 months"
      },
      {
        name: "Certificate in Retail Merchandising",
        icon: "/icons/merchandising.svg",
        description: "Product selection, visual merchandising, and inventory planning for retail success.",
        nqfLevel: 4,
        credits: 130,
        duration: "10 months"
      },
      {
        name: "Diploma in Customer Relationship Management",
        icon: "/icons/crm.svg",
        description: "CRM systems, customer retention strategies, and relationship building for long-term loyalty.",
        nqfLevel: 5,
        credits: 200,
        duration: "16 months"
      }
    ]
  };

  const tabs: { id: TabId; label: string }[] = [
    { id: 'ict', label: 'ICT' },
    { id: 'business', label: 'Business Management & Admin' },
    { id: 'governance', label: 'Governance & Operations' },
    { id: 'sales', label: 'Sales, Retail & Customer Experience' }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Explore Our Courses</h1>
          <p className="text-lg text-slate-600">Choose a category to discover accredited qualifications</p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap gap-3 justify-center">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 shadow-sm'
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
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col"
            >
              <div className="p-5 flex flex-col grow">
                {/* Course Name */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 min-h-14">
                  {course.name}
                </h3>

                {/* Icon Section */}
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-xl p-3 flex items-center justify-center">
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
                    <span className="text-xs font-medium text-slate-500">NQF Level</span>
                    <span className="text-sm font-bold text-blue-600">{course.nqfLevel}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-500">Credits</span>
                    <span className="text-sm font-bold text-slate-700">{course.credits}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-500">Duration</span>
                    <span className="text-sm font-bold text-slate-700">{course.duration}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                  View Full Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;