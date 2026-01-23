"use client";

import { useState } from "react";
import Image from "next/image";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface Feature197Props {
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Early-Stage Talent Development",
    image: "/icons/talent-development.svg",
    description:
      "We help organizations transform new entrants into high-performing, work-ready professionals. This includes include workplace readiness, digital literacy, communication & professional conduct, professional writing & reporting, professional writing & reporting, customer service excellence and Basic project management. These programs are ideally suited for interns, graduates, entry-level employees, apprentices and learnership candidates.",
  },
  {
    id: 2,
    title: "Talent Re-Skilling & Up-skilling Solutions",
    image: "/icons/upskilling.svg",
    description:
      "We design re-skilling programmes to help companies adopt new technologies, improve productivity, and remain competitive. Our focus areas include: Information Technology, Business & Administration, Retail & Sales.",
  },
  {
    id: 3,
    title: "BBBEE-aligned Enterprise Development",
    image: "/icons/bbbee.svg",
    description:
      "We support SMMEs with skills development as well as digital up-skilling, helping them to grow and contribute to your BBBEE scorecard.",
  },
  {
    id: 4,
    title: "National Learnership Delivery",
    image: "/icons/learnership.svg",
    description:
      "Full-service implementation including recruitment, hosting, training, mentoring, and compliance.",
  },
  {
    id: 5,
    title: "Work Integrated Learning (WIL) Solutions",
    image: "/icons/wil.svg",
    description:
      "We support employee development and organizational performance through practical, workplace-driven learning experiences. Our focus areas include leadership & supervisory skills, customer service excellence, negotiation & conflict management, project management fundamentals, emotional intelligence, time management, workplace problem solving  and financial literacy.",
  },
  {
    id: 6,
    title: "Recruitment as a Service (RaaS)",
    image: "/icons/recruitment.svg",
    description:
      "We provide end-to-end recruitment and placement tailored for internships, learnerships, graduate programmes and entry-level positions, ensuring a seamless hiring process for organizations seeking fresh talent.",
  },
];

const Feature197 = ({ features = defaultFeatures }: Feature197Props) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0]?.image || "");

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-12 flex w-full items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 no-underline! transition"
                  >
                    <h2
                      className={`text-xl font-semibold ${
                        tab.id === activeTabId
                          ? "text-black"
                          : "text-gray-600"
                      }`}
                    >
                      {tab.title}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-gray-500">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden">
                      <Image
                        src={tab.image}
                        alt={tab.title}
                        height={500}
                        width={500}
                        className="h-full max-h-80 w-full object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-xl md:block">
            <Image
              src={activeImage}
              alt="Feature preview"
              width={500}
              height={500}
              className="aspect-4/3 object-cover pl-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature197 };
