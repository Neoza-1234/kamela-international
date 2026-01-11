"use client";

import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    description: "",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    description: "",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    description: "",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    description: "",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    description: "",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    description: "",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    description: "",
    id: 7,
  },
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjust transform values for better control
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-4 sm:px-8">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: { url: string; title: string; description: string; id: number } }) => {
  return (
    <div className="group relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px] shrink-0 overflow-hidden rounded-lg">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center bg-linear-to-br from-black/40 to-black/20">
        <p className="bg-linear-to-br from-white/30 to-white/10 p-4 sm:p-6 lg:p-8 text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white backdrop-blur-lg rounded-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center text-gray-800 mt-10 sm:mt-20 px-4 md:px-0 text-center">
      <h3 className="text-lg sm:text-xl font-semibold mb-2">Testimonials</h3>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl mb-8 sm:mb-12">
        Discover Our Success Stories
      </h1>
      <div className="w-full">
        <HorizontalScrollCarousel />
      </div>
    </div>
  );
}
