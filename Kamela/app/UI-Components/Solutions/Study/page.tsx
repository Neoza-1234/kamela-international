"use client"

import Link from "next/link";
import Image from "next/image";
import CourseSection from "@/components/coursecategories";


import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
 

type TabId = "ict" | "business" | "governance" | "sales";

export default function Study() {

  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabId>("ict");

  useEffect(() => {
    const tab = searchParams.get("tab") as TabId;
    if (tab && ["ict", "business", "governance", "sales"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <>
      <div className="min-h-screen w-full flex flex-col">
        <div className="flex flex-wrap justify-start items-center space-x-2 text-sm text-gray-500 font-medium mt-30 px-10 md:px-16 lg:px-24 xl:px-32 mb-3">
          <button type="button" aria-label="Home">
            <Link href="/#">Home</Link>
          </button>
          <i className="ri-arrow-drop-right-line"></i>
          <a href="#">Solutions</a>
          <i className="ri-arrow-drop-right-line"></i>
          <div className="text-(--prime) font-semibold">Study</div>
        </div>

        {/* Hero Section */}

        <svg
          className="size-full absolute -z-10 inset-0"
          width="1440"
          height="720"
          viewBox="0 0 1440 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="#D9D9D9"
            strokeOpacity=".7"
            d="M-15.227 702.342H1439.7"
          />
          <circle
            cx="711.819"
            cy="372.562"
            r="308.334"
            stroke="#E2E8F0"
            strokeOpacity=".7"
          />
          <circle
            cx="16.942"
            cy="20.834"
            r="308.334"
            stroke="#D9D9D9"
            strokeOpacity=".7"
          />
          <path
            stroke="#D9D9D9"
            strokeOpacity=".7"
            d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7"
          />
          <circle
            cx="782.595"
            cy="411.166"
            r="308.334"
            stroke="#D9D9D9"
            strokeOpacity=".7"
          />
        </svg>

        <div className="study-bg text-white flex flex-col">
          <main className="flex flex-col max-md:gap-20 md:flex-row  items-center justify-between mt-15 px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-center md:text-left md:text-5xl max-w-xl text-(--prime) font-bold leading-tight">
                A Supportive,Future-Ready Learning Community
              </h1>
              <p className="text-center md:text-left text-sm text-slate-700 max-w-lg mt-10">
                At Kamela International, students are our priority. We aim to
                provide an engaging, supportive, and flexible learning
                experience for all learners, whether unemployed, employed, or
                transitioning careers. Our approach combines technology,
                mentorship, and industry-aligned qualifications to equip
                students with the necessary skills and confidence for success in
                the modern workforce.
              </p>
              <div className="flex items-center gap-4 mt-8 text-sm"></div>
            </div>
            <div className="hero-img-container relative flex justify-around items-center">
              <Image
                src="/icons/deco.svg"
                alt="Hero Image"
                width={500}
                height={500}
                className="hero-bg-elm absolute -right-10 -left-1 w-125 h-125 z-[-1]"
              />

              <Image
                src="/hero2.png"
                alt="Hero Image"
                width={600}
                height={500}
                className="hero-img rounded-lg pb-8"
              />
            </div>
          </main>
        </div>
        <CourseSection initialTab={activeTab}/>


        
      </div>
    </>
  );
}
