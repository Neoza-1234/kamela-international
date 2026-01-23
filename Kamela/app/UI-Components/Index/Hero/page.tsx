"use client";

import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";

const statsData = [
  {
    value: "16",
    suffix: "",
    title: "Accredited Courses",
    desc: "Accredited by QCTO and recognized across Africa.",
  },
  {
    value: "3000",
    suffix: "",
    title: "Students Empowered",
    desc: "Transforming lives through quality education and skills development.",
  },
  {
    value: "50",
    suffix: "",
    title: "Corporate Clients",
    desc: "Trusted by leading organizations across the South Africa.",
  },
  {
    value: "10",
    suffix: "",
    title: "Years of Excellence",
    desc: "Consistent delivery of high-quality training and development programs.",
  },
];

export default function Hero() {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
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
            stroke="#D9D9D9"
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
            <div className=" flex justify-start items-center gap-3 flex-wrap mt-6">
              <button className="mt-9 border-(--prime) border-2 px-3 py-3 rounded-full text-(--prime) font-semibold hover:bg-(--prime) hover:text-white transition-all duration-300 flex items-center gap-6">
                <Link href="/UI-Components/Solutions/Study">
                  Explore Courses<i className="bi bi-arrow-right ps-1"></i>
                </Link>
              </button>

              <button className="mt-9 border-(--prime) border-2 px-3 py-3 rounded-full text-(--prime) font-semibold hover:bg-(--prime) hover:text-white transition-all duration-300 flex items-center gap-6">
                <Link href="/UI-Components/Solutions/Enterprise">
                  Corporate Solutions <i className="bi bi-arrow-right ps-1"></i>
                </Link>
              </button>
            </div>
          </div>

          <div className="hero-img-container relative flex justify-around items-center">
            <Image
              src="/icons/hero-img.png"
              alt="Hero Image"
              width={400}
              height={400}
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
