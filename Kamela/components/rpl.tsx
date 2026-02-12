import React from 'react';
import {
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
} from 'lucide-react';

const  RPLqualifications = () => {
  const certificates = [
    {
      icon: Code,
      title: 'Occupational Certificate: Software Developer',
    },
    {
      icon: Computer,
      title: 'Occupational Certificate: Computer Technician',
    },
    {
      icon: FingerprintPattern,
      title: 'Occupational Certificate: Cybersecurity Analyst',
    },
    {
      icon: Database,
      title: 'Occupational Certificate: Data Science Practitioner',
    },
    {
      icon: FolderKanban,
      title: 'Occupational Certificate: Project Manager',
    },
    {
      icon: BookOpenCheck,
      title: 'Occupational Certificate: Quality Assurer',
    },
    {
      icon: Headset,
      title: 'Occupational Certificate: Contact Centre Manager',
    },
    {
      icon: Store,
      title: 'Occupational Certificate: Retail Supervisor',
    },
    {
      icon: Container,
      title: 'Occupational Certificate: Supply Chain Practitioner',
    },
    {
      icon: Forklift,
      title: 'Occupational Certificate: Supply Chain Manager',
    },
    {
      icon: ChartCandlestick,
      title: 'Occupational Certificate: Marketing Coordinator',
    },
    {
      icon: BadgeDollarSign,
      title: 'National Occupational Certificate: Sales Representative',
    },
    {
      icon: Briefcase,
      title: 'Occupational Certificate: Office Administrator',
    },
    {
      icon: Building2,
      title: 'Occupational Certificate: Office Supervisor',
    },
    {
      icon: UsersRound,
      title: 'Higher Occupational Certificate: Human Resource Management Administrator',
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Available Occupational Certificates for RPL
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
           Choose from a wide range of occupational certificates across various industries, all available for Recognition of Prior Learning (RPL) assessment. Whether you're looking to validate your skills in technology, business, or any other field, we have the right certificate for you.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 sm:p-7 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 cursor-pointer"
              >
                {/* Icon Container */}
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-linear-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300">
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-blue-700" />
                </div>

                {/* Title */}
                <p className="font-semibold text-gray-900 text-sm sm:text-base leading-snug group-hover:text-blue-700 transition-colors duration-300">
                  {cert.title}
                </p>

                {/* Decorative Bottom Border */}
                <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-blue-400 to-blue-600 rounded-bl-xl transition-all duration-300 w-0 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RPLqualifications;