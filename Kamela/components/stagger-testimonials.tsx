"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const testimonials = [
  {
    tempId: 0,
    testimonial: "Kamela has highly competent training facilitators who are passionate and eager to train for a positive changing environment and business improvement.",
    by: "NTOMBIZODIDI NDLOVU",
    title: "HCM Manager at Alteram",
    imgSrc: "/icons/alteram.png"
  },
  {
    tempId: 1,
    testimonial: "Kamela International did work for the University, they delivered on their mandate with dedication and professionalism.",
    by: "Dr Phasoane Mokgobu",
    title: "Vice-Principal of Institutional Development at UNISA",
    imgSrc: "/icons/unisa.jpg"
  },
  {
    tempId: 2,
    testimonial: "Kamela has been providing soft skills training services to our organization for the past 5 years with exceptional results.",
    by: "MM Ngiba",
    title: "Manager at Makhophila",
    imgSrc: "/icons/makhophila.png"
  },
  {
    tempId: 3,
    testimonial: "Kamela International conducts themselves with the highest level of professionalism and integrity during training initiatives.",
    by: "Donna-Lisa Mac Minn",
    title: "Acting Deputy Director - Specialized Operation at Wits",
    imgSrc: "/icons/wits.png"
  },
  {
    tempId: 4,
    testimonial: "We wish to acknowledge Kamela International for their outstanding professionalism and good work ethic.",
    by: "Glynn Schlemmer",
    title: "Senior HRD Officer at RAF",
    imgSrc: "/icons/raf.jpg"
  },
  {
    tempId: 5,
    testimonial: "We have worked with Kamela for the past 6 years and we can confirm that they are industry leaders, their ability to identify training needs analysis and recommend relevant and adequate training programmes is exceptional.",
    by: "Tsepo Nthebe",
    title: "Head of Skills at Marshalls World of Sport",
    imgSrc: "/icons/marshalls.jpg"
  },
  {
    tempId: 6,
    testimonial: "Kamela's software development program gave me the foundation I needed to enter the IT field.",
    by: "Neo Chuene",
    title: "Student",
    imgSrc: "/icons/learner.png"
  },
  {
    tempId: 7,
    testimonial: "The Director is always professional and goes out of his way to ensure that we are always satisfied",
    by: "G THULUKANAM",
    title: "Human Resources Development Consultant at Wits",
    imgSrc: "/icons/wits.png"
  },
  {
    tempId: 8,
    testimonial: "I appreciated the flexible schedule that allowed me to balance studies and work when I was in Kamela's project management program.",
    by: "Jessica",
    title: "Student",
    imgSrc: "/icons/learner.png"
  },
  {
    tempId: 9,
    testimonial: "I found the interactive sessions engaging and career-focused. I also appreciate the team in how they handled the training sessions the whole time.",
    by: "Lunga Makhubu",
    title: "Student",
    imgSrc: "/icons/learner.png"
  },
  {
    tempId: 10,
    testimonial: "For the past two years, Kamela has been our go-to training provider for such as HPE Blade Administration, CompTiA Security+, Fortigate, Risk Management and other essential topics.",
    by: "Busani Hadebe",
    title: "22KA Training and Consulting (Pty) Ltd",
    imgSrc: "/icons/22ka.png"
  },
  {
    tempId: 11,
    testimonial: "Kamela's training programs are comprehensive and practical, helping me develop both technical and soft skills. I also appreciate the support from their workplace readiness program.",
    by: "Boitumelo",
    title: "Student",
    imgSrc: "/icons/learner.png"
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: { width: number; height: number };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 transition-all duration-500 ease-in-out flex flex-col",
        isCenter 
          ? "z-10 bg-black text-white border-black shadow-[0_8px_0_4px_hsl(var(--gray))]" 
          : "z-0 bg-white text-card-grey border-border hover:border-blue-500"
      )}
      style={{
        width: cardSize.width,
        height: cardSize.height,
        borderRadius: 20,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize.width / 1.2) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
      }}
    >
      {/* Logo Container  */}
      <div className="shrink-0 p-4 sm:p-6">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg overflow-hidden shadow-md">
          <Image
            src={testimonial.imgSrc}
            alt={`${testimonial.by} logo`}
            fill
            className="object-contain p-2"
            sizes="80px"
          />
        </div>
      </div>

      {/* Testimonial Text */}
      <div className="flex-1 px-4 sm:px-6 pb-20 sm:pb-24 overflow-y-auto">
        <blockquote className="relative">
          <span className={cn(
            "absolute -top-2 -left-1 text-4xl sm:text-5xl opacity-30 font-serif",
            isCenter ? "text-white" : "text-gray-400"
          )}>
            "
          </span>
          <p className={cn(
            "text-sm sm:text-base leading-relaxed pl-4",
            isCenter ? "text-gray-100" : "text-gray-700"
          )}>
            {testimonial.testimonial}
          </p>
        </blockquote>
      </div>

      
      <div className={cn(
        "absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t-2",
        isCenter 
          ? "border-gray-700 bg-linear-to-t from-black to-transparent" 
          : "border-gray-100 bg-linear-to-t from-white to-transparent"
      )}>
        <p className={cn(
          "text-xs sm:text-sm font-semibold",
          isCenter ? "text-white" : "text-gray-900"
        )}>
          {testimonial.by}
        </p>
        <p className={cn(
          "text-xs mt-0.5",
          isCenter ? "text-gray-400" : "text-gray-600"
        )}>
          {testimonial.title}
        </p>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState({ width: 365, height: 450 });
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setCardSize({ width: 385, height: 480 });
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setCardSize({ width: 340, height: 450 });
      } else {
        setCardSize({ width: 300, height: 420 });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section 
      className="relative w-full overflow-hidden bg-white flex items-center justify-center py-8 sm:py-12"
      style={{ minHeight: 600 }}
      aria-label="Client testimonials"
    >
      {/* Cards */}
      <div className="relative w-full h-full">
        {testimonialsList.map((testimonial, index) => {
          const position = testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 flex -translate-x-1/2 gap-3 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center text-xl sm:text-2xl transition-all rounded-xl sm:rounded-2xl",
            "bg-white border-2 border-border hover:bg-black hover:text-white hover:scale-105 active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "shadow-md hover:shadow-lg"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center text-xl sm:text-2xl transition-all rounded-xl sm:rounded-2xl",
            "bg-white border-2 border-border hover:bg-black hover:text-white hover:scale-105 active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "shadow-md hover:shadow-lg"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};