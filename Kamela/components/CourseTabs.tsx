"use client";

import { useState } from "react";
import { BookOpen, Award, Clock, Users, Briefcase, Mail, Route } from "lucide-react";

export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'purpose', label: 'Purpose & Value', icon: BookOpen },
    { id: 'outcomes', label: 'Key Outcomes', icon: Award },
    { id: 'program', label: 'Program Details', icon: Clock },
    { id: 'journey', label: 'Learning Journey', icon: Route },
    { id: 'curriculum', label: 'Curriculum', icon: Users },
    { id: 'careers', label: 'Careers', icon: Briefcase },
    { id: 'register', label: 'Register', icon: Mail }
  ];

  const scrollToSection = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(`section-${tabId}`);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-20 z-40 bg-white">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-4 whitespace-nowrap font-medium transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}