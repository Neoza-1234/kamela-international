
import React from "react";
import { Book, Settings, BriefcaseBusiness, Medal } from "lucide-react";

interface CardProps {
  title: string;
  subtitle: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const Journey = () => {
  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card
          title="1.Theory Modules"
          subtitle="EISA Preparation Test"
          Icon={Book}
        />
        <Card
          title="2.Practical Training"
          subtitle="Workbook, Observation & Assessment"
          Icon={Settings}
        />
        <Card
          title="3.Workplace Modules"
          subtitle="Observation & Logbook"
          Icon={BriefcaseBusiness}
        />
        <Card
          title="4.External Integrated Summative Assessment"
          subtitle="Final Exam"
          Icon={Medal}
        />
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, subtitle, Icon }) => {
  return (
    <a className="w-full p-4 rounded-3xl border-2 border-slate-300 relative overflow-hidden group hover:border-blue-600 transition duration-300">
      <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-[0%] transition-transform duration-500" />
      <Icon className="mb-3 text-blue-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-black group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-500 group-hover:text-white relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default Journey;
