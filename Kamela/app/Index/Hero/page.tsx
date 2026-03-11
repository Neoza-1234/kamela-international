"use client";

import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* ─── Brand tokens ────────────────────────────────────────────── */
const BRAND = {
  orange: "#ff4500",
  blue: "#0866ff",
} as const;

const statsData = [
  {
    value: "16",
    suffix: "+",
    title: "Accredited Courses",
  },
  {
    value: "3000",
    suffix: "+",
    title: "Students Empowered",
  },
  {
    value: "50",
    suffix: "+",
    title: "Corporate Clients",
  },
  {
    value: "10",
    suffix: "+",
    title: "Years of Excellence",
  },
];

export default function Hero() {
  return (
    <>
      {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
      <section
        id="hero"
        className="d-flex align-items-center min-h-screen relative"
      >
        <div
          className="container mx-auto px-6 pt-27 pb-10 grid grid-cols-1 md:grid-cols-2 gaps-12 items-center relative z-10"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="hero-content">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-blue-600"
                aria-hidden
              />
              Accredited Training Provider
            </div>
            <h1
              className="sm:text-5xl leading-tight text-start md:text-left"
              
            >
              Empowering Africa Through{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND.orange}, ${BRAND.blue})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Accredited Training
              </span> {" "}
              & Workforce Development
            </h1>
            <p className="hero-description mt-8 text-lg/8">
              Unlocking Africa's potential by equipping individuals and
              organizations with industry-aligned skills, digital expertise,
              leadership capability, and accredited learning solutions that
              drive measurable growth and transformation
            </p>
            <div className=" flex justify-start items-center gap-3 flex-wrap mt-8">
              <Link
                href="/Solutions/Study"
                className="group bg-(--prime) text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-64 w-52 md:py-3 border border-(--prime) transition-all duration-200 ease-in-out hover:bg-transparent hover:text-(--prime)"
              >
                <span className="flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-9">
                  Explore Courses
                </span>
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-all duration-200 ease-in-out group-hover:-translate-x-37 group-hover:rotate-45 group-hover:bg-black">
                  <ArrowUpRight
                    className="w-4 h-4 text-black transition-colors duration-200 ease-in-out group-hover:text-white"
                    strokeWidth={1.67}
                  />
                </div>
              </Link>

              <Link
                href="/Solutions/Enterprise"
                className="group bg-(--prime) text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-64 w-57 md:py-3 border border-(--prime) transition-all duration-200 ease-in-out hover:bg-transparent hover:text-(--prime)"
              >
                <span className="flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-8">
                  Corporate Solutions
                </span>
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-all duration-200 ease-in-out group-hover:-translate-x-41 group-hover:rotate-45 group-hover:bg-black">
                  <ArrowUpRight
                    className="w-4 h-4 text-black transition-colors duration-200 ease-in-out group-hover:text-white"
                    strokeWidth={1.67}
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="hero-img-container relative flex justify-around items-center">
            <Image
              src="/icons/hero-img.png"
              alt="Hero Image"
              width={500}
              height={500}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
      {/* ─── STATISTICS SECTION ──────────────────────────────────────────────── */}
      <div className="bg-black max-w-6xl py-8 rounded-3xl flex flex-col items-center mx-auto justify-center mt-10 px-6 mb-20">
        <div className="px-[8%] lg:px-[12%] sm:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="text-white font-extrabold">
                <CountUp
                  start={0}
                  end={parseInt(stat.value)}
                  duration={2.5}
                  enableScrollSpy
                />
                {stat.suffix}
              </h2>
              <h3 className="text-gray-300 mt-2">{stat.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
