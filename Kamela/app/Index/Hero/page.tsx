"use client";

import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const statsData = [
  {
    value: "16",
    suffix: "+",
    title: "Accredited Courses",
    desc: "Accredited by QCTO and recognized across Africa.",
  },
  {
    value: "3000",
    suffix: "+",
    title: "Students Empowered",
    desc: "Transforming lives through quality education and skills development.",
  },
  {
    value: "50",
    suffix: "+",
    title: "Corporate Clients",
    desc: "Trusted by leading organizations across the South Africa.",
  },
  {
    value: "10",
    suffix: "+",
    title: "Years of Excellence",
    desc: "Consistent delivery of high-quality training and development programs.",
  },
];

export default function Hero() {
  return (
    <>
      {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container mx-auto px-6 pt-27 pb-10 grid grid-cols-1 md:grid-cols-2 gaps-12 items-center relative z-10"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="hero-content">
            <h1 className="hero-title leading-tight">
              Empowering Africa's Workforce Through{" "}
              <span className="text-(--prime)">
                Skills, Technology, and Innovation
              </span>
            </h1>
            <p className="hero-description mt-6 text-lg/8">
              Unlocking Africa's potential by equipping people and organizations
              with high-impact skills, digital capabilities, leadership
              excellence, and meaningful training opportunities.
            </p>
            <div className=" flex justify-start items-center gap-3 flex-wrap mt-6">
              <Link
                href="/Solutions/Study"
                className="group bg-(--prime) text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-64 w-52 md:py-3 border border-(--prime) transition-all duration-200 ease-in-out hover:bg-transparent hover:text-(--prime)"
              >
                <span className="flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-13">
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
      <div className="px-[8%] lg:px-[12%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="text-(--prime) font-bold text-4xl">
              <CountUp
                start={0}
                end={parseInt(stat.value)}
                duration={2.5}
                enableScrollSpy
              />
              {stat.suffix}
            </h2>
            <h3 className="font-semibold mt-2">{stat.title}</h3>
            <p className="text-gray-500 mt-1">{stat.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
