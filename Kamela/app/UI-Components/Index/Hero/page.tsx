"use client";

import CountUp from "react-countup";

import Image from "next/image";
import Link from "next/link";
import { desc } from "framer-motion/client";

const statsData = [
  {
    value: "20+",
    suffix: "",
    title: "Accredited Courses",
    desc: "Accredited by QCTO and recognized across Africa.",
  },
  {
    value: "3000+",
    suffix: "",
    title: "Students Empowered",
    desc: "Transforming lives through quality education and skills development.",
  },
  {
    value: "50+",
    suffix: "",
    title: "Corporate Clients",
    desc: "Trusted by leading organizations across the South Africa.",
  },
  {
    value: "10+",
    suffix: "",
    title: "Years of Excellence",
    desc: "Consistent delivery of high-quality training and development programs.",
  },
];

export default function page() {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container mx-auto px-6 py-50 grid grid-cols-1 md:grid-cols-2 gaps-12 items-center relative z-10"
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
            <div className=" flex justify-start items-center gap-6 flex-wrap">
              <button className="mt-9 border-(--prime) border-2 px-3 py-3 rounded-full text-(--prime) font-semibold hover:bg-(--prime) hover:text-white transition-all duration-300 flex items-center gap-6">
                <Link href="/UI-Components/solutions/study">
                  Explore Courses<i className="bi bi-arrow-right ps-1"></i>
                </Link>
              </button>

              <button className="mt-9 border-(--prime) border-2 px-3 py-3 rounded-full text-(--prime) font-semibold hover:bg-(--prime) hover:text-white transition-all duration-300 flex items-center gap-6">
                <Link href="/UI-Components/solutions/enterprise">
                  Corporate Solutions <i className="bi bi-arrow-right ps-1"></i>
                </Link>
              </button>
            </div>
          </div>

          <div className="hero-img-container relative flex justify-around items-center">
            <Image
              src="/Underlay-2.png"
              alt="Hero Image"
              width={500}
              height={500}
              className="hero-bg-elm absolute -right-30 -left-1 w-[500px] h-[500px] z-[-1]"
            />
            <Image
              src="/hero.png"
              alt="Hero Image"
              width={360}
              height={360}
              className="hero-img rounded-lg pb-10"
            />
          </div>
        </div>
      </section>
      
        <div className="px-[8%] lg:px-[12%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
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
              <h3 className="font-semibold text-xl mt-2">{stat.title}</h3>
              <p className="text-gray-600 mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>
    </>
  );
}
