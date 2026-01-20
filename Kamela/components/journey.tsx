
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
          subtitle="EISA Preperation Test"
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

const Card: React.FC<CardProps> = ({ title, subtitle, Icon,}) => {
  return (
    <a
      className="w-full p-4 rounded-3xl border border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-secondary transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-secondary group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-black group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-white relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default Journey;