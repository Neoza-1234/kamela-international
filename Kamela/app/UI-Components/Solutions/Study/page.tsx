"use client";

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
              <p className="text-center md:text-left text-sm text-black max-w-lg mt-10">
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
                src="/icons/hero2.png"
                alt="Hero Image"
                width={600}
                height={500}
                className="hero-img rounded-lg pb-8"
              />
            </div>
          </main>
        </div>
        <CourseSection initialTab={activeTab} />

        {/* Why Choose Us Section */}

        <section className="py-10 px-4 flex flex-col justify-center items-center gap-6">
          <h2 className=" md:text-[40px]/12 max-w-lg text-center leading-tight">
            Why Choose Us
          </h2>
          <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <i className="ri-medal-fill text-white w-30 h-30 pb-3"></i>
              <p className=" text-gray-100">Accredited Training Provider </p>
              <p className=" text-gray-200">
                Achieve Certification with Nationally Recognized Qualifications
                from MICT SETA, W&R SETA, TETA and SERVICES SETA.
              </p>
            </div>
            <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <i className="ri-shake-hands-fill text-white w-30 h-30 pb-3"></i>
              <p className=" text-gray-100">Job Readiness Support</p>
              <p className=" text-gray-200">
                Our occupational training provides job readiness support to
                equip you with the skills and confidence for workplace success.
              </p>
            </div>
            <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <i className="ri-lightbulb-ai-fill text-white w-30 h-30 pb-3"></i>
              <p className=" text-gray-100">Flexible Financing </p>
              <p className=" text-gray-200">
                We offer flexible financing for occupational qualifications,
                allowing budget-friendly investment in your future.
              </p>
            </div>
            <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <i className="ri-team-fill text-white w-30 h-30 pb-3"></i>
              <p className=" text-gray-100">Diverse Course Catalogue</p>
              <p className=" text-gray-200">
                We offer accredited training programs, including QCTO
                qualifications and global certifications, to equip you with
                industry-relevant skills.
              </p>
            </div>
            <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <i className="ri-rocket-2-fill text-white w-30 h-30 pb-3"></i>
              <p className=" text-gray-100">Flexable Learning</p>
              <p className=" text-gray-200">
                Study anywhere with a mix of online learning, blended classes
                and face-to-face support (program dependent)
              </p>
            </div>
            <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <i className="ri-earth-fill text-white w-30 h-30 pb-3"></i>
              <p className=" text-gray-100">Inclusivity</p>
              <p className=" text-gray-200">
                We provide equitable access to education for youth, unemployed
                individuals, rural communities, professionals, and people with
                diverse abilities and backgrounds
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <div className="container mx-auto px-6 py-20">
          <div className="bg-black rounded-3xl p-8 text-center">
            <h2 className="text-white mb-4">Ready to take the next step?</h2>
            <p className="text-white mb-6">
              Whether you're a student eager to learn or a professional looking
              to grow, our courses are designed to help you succeed. After
              exploring our programs, contact us today—let's shape your future
              together!
            </p>
            <Link href="/UI-Components/Contact">
              <button className="bg-white text-primary font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300 cursor-pointer">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
