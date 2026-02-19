"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import type { ReactNode } from "react";

/* ─── Brand tokens ────────────────────────────────────────────── */
const BRAND = {
  orange: "#ff4500",
  blue: "#0866ff",
} as const;

interface ParallaxItem {
  id: number;
  tag: string;
  number: string;
  title: ReactNode;
  description: string;
  bg: string;
}

/* ─── Data ────────────────────────────────────────────────────── */
const ParalexData: ParallaxItem[] = [
  {
    id: 1,
    tag: "Workplace Skills Development",
    number: "01",
    title: <>Practical workplace skills that make learners job-ready</>,
    description:
      "We ensure our courses are designed to equip learners with practical skills that can be directly applied in the workplace, enhancing their employability and career prospects.",
    bg: "/paralex-1.jpg",
  },
  {
    id: 2,
    tag: "Building Confidence Through Competence",
    number: "02",
    title: <>Competency-based training</>,
    description:
      "Our competency-based training ensures learners develop the specific skills and knowledge required for their roles, aligning with QCTO standards and expectations.",
    bg: "/paralex-2.jpg",
  },
  {
    id: 3,
    tag: "Adaptive Industry-Integrated Learning",
    number: "03",
    title: <>Industry-integrated learning methods</>,
    description:
      "We integrate industry practices and real-world scenarios into our curriculum, ensuring learners gain relevant experience and insights. This approach helps bridge the gap between education and employment, making our graduates more competitive in the job market.",
    bg: "/paralex-3.jpg",
  },
  {
    id: 4,
    tag: "Advanced Professional Development",
    number: "04",
    title: <>Professional development pathways</>,
    description:
      "We provide clear career progression paths for learners and professionals alike, enabling them to advance in their career journey. We ensure continuous learning and growth, helping individuals reach their full potential.",
    bg: "/paralex-4.jpg",
  },
  {
    id: 5,
    tag: "Community Empowerment Through Education",
    number: "05",
    title: <>Community upliftment initiatives</>,
    description:
      "We are committed to uplifting communities through education and training, ensuring equitable access to accredited qualifications. Our programs are designed to empower individuals and contribute to the socio-economic development of South Africa.",
    bg: "/paralex-5.jpg",
  },
];

export default function Paralex() {
  return (
    <div className="pt-20 sm:py-20">
      <div className="text-center px-6 mb-4">
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          Our Commitment To Exellence
        </h2>
      </div>

      {ParalexData.map((item) => (
        <ParalexSection key={item.id} item={item} />
      ))}
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────── */
function ParalexSection({ item }: { item: ParallaxItem }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div
      ref={ref}
      className="sticky top-0 w-full overflow-hidden"
      style={{ zIndex: item.id }}
    >
      <motion.div
        className="relative w-full"
        style={{
          height: "100vh",
          willChange: "transform",
          scale,
          y: translateY,
        }}
      >
        <Image
          src={item.bg}
          alt={`${item.tag} — Kamela International`}
          fill
          sizes="100vw"
          className="object-cover object-center"
          loading={item.id === 1 ? "eager" : "lazy"}
          priority={item.id === 1}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.65)", zIndex: 1 }}
        />
        <div
          className="absolute inset-0 flex flex-col justify-center px-[6%] sm:px-[8%] py-12 sm:py-16"
          style={{ zIndex: 2 }}
        >
          <div className="flex flex-wrap justify-between items-center gap-3 mb-6 sm:mb-8">
            <span className="text-white border border-white/40 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs sm:text-sm uppercase tracking-wide font-medium">
              {item.tag}
            </span>
            <span
              className="text-2xl sm:text-4xl font-bold"
              style={{ color: BRAND.orange }}
              aria-hidden
            >
              {item.number}
            </span>
          </div>

          <h2
            className="text-white font-black leading-tight mb-4 sm:mb-6"
            style={{
              fontSize: "clamp(1.563rem, 5vw, 3rem)",
              maxWidth: "18ch",
            }}
          >
            {item.title}
          </h2>

          <p
            className="text-white/80 leading-relaxed"
            style={{
              fontSize: "clamp(0.9rem, 1.5vw, 1.125rem)",
              maxWidth: "52ch",
            }}
          >
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
