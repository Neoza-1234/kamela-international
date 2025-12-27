"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParalexData = [
  {
    id: 1,
    tag: "Workplace skills development",
    number: "01",
    title: <>Practical workplace skills that make learners job-ready</>,
    description:
      "We ensure our courses are designed to equip learners with practical skills that can be directly applied in the workplace, enhancing their employability and career prospects.",
    bg: "/paralex-1.jpg",
  },
  {
    id: 2,
    tag: "Building Confidence through Competence",
    number: "02",
    title: <>Competency-based training</>,
    description:
      "Our competency-based training ensures learners develop the specific skills and knowledge required for their roles, aligning with QCTO standards and expectations.",
    bg: "/paralex-2.jpg",
  },
  {
    id: 3,
    tag: "Adaptive industry-integrated learning",
    number: "03",
    title: <>Industry-integrated learning methods</>,
    description:
      "We integrate industry practices and real-world scenarios into our curriculum, ensuring learners gain relevant experience and insights.",
    bg: "/paralex-3.jpg",
  },
  {
    id: 4,
    tag: "Advanced professional development",
    number: "04",
    title: <>Professional development pathways</>,
    description:
      "We provide clear career progression paths for learners and professionals alike, enabling them to advance in their career journey.",
    bg: "/paralex-4.jpg",
  },
  {
    id: 5,
    tag: "Community empowerment through education",
    number: "05",
    title: <>Community upliftment initiatives</>,
    description:
      "We are committed to uplifting communities through education and training, ensuring equitable access to accredited qualifications.",
    bg: "/paralex-5.jpg",
  },
];

export default function Paralex() {
  return (
    <div className="mb-10 paralex-container">
        <div className="text-center">
          <h2 className="mt-1">
            Our Commitment{" "}
            <span className="text-(--prime)">To Excellence</span>
          </h2>
        </div>
      {ParalexData.map((item) => (
        <ParalexSection key={item.id} item={item} />
      ))}
    </div>
  );
}

function ParalexSection({ item }: { item: any }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <motion.div
      ref={ref}
      className="Paralex-wrap sticky top-0 left-0 h-full"
      style={{
        backgroundImage: `url(${item.bg})`,
        scale,
        y: translateY,
        zIndex: item.id * 1,
      }}
    >
        
      <div className="Paralex-content flex flex-col justify-center px[8%] py-20">
        <div className="flex justify-between items-center gap-5 py-7 px-15">
          <span className="text-white border border-gray-300 px-4 p-2 rounded-full uppercase">
            {item.tag}
          </span>
          <h2 className="text-(--prime)">{item.number}</h2>
        </div>
        <div className="text-white py-7 px-15 max-w-4xl">
          <h1 className="md:text-8xl mt-5 mb-5">{item.title}</h1>
          <p className="mt-3 max-w-2xl">{item.description}</p>
        </div>
      </div>
    </motion.div>
  )
}
