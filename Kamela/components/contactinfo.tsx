import React from "react";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

interface CardProps {
  title: string;
  subtitle: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const HoverDevCards = () => {
  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card
          title="Phone Number"
          subtitle="+27 10 634 2180"
          href="#"
          Icon={Phone}
        />
        <Card 
          title="Email" 
          subtitle="applications@kamelatraining.co.za" 
          href="mailto:applications@kamelatraining.co.za" 
          Icon={Mail} 
        />
        <Card 
          title="Address" 
          subtitle="Block A, Wedgefield Office Park, 17 Muswell Rd S, Bryanston, Johannesburg, 2021" 
          href="https://maps.app.goo.gl/EPdvCJ6tEyRbTFim8" 
          Icon={MapPin} 
        />
        <Card
          title="Business Hours"
          subtitle="Monday - Friday: 8:00 AM - 4:00 PM"
          href="#"
          Icon={Calendar}
        />
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded-3xl border border-slate-300 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-(--secondary) translate-y-full group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-secondary transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-secondary group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-black group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-white relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;