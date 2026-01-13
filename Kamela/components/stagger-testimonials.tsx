"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';


const testimonials = [
  {
    tempId: 0,
    testimonial: "Kamela has highly competent training facilitators who are passionate and eager to train for a positive changing environment and business improvement. Furthermore, Kamela also exhibits a propensity for technological advancements.",
    by: "NTOMBIZODIDI NDLOVU, HCM Manager at Alteram ",
    imgSrc: "/icons/alteram.png"
  },
  {
    tempId: 1,
    testimonial: "Kamela International did work for the University, they delivered on their mandate with dedication and professionalism..",
    by: " Dr Phasoane Mokgobu , Vice-Principal of Institutional Development and Transformation at UNISA",
    imgSrc: "/icons/unisa.jpg"
  },
  {
    tempId: 2,
    testimonial: "Kamela has been providing soft skills training services to our organization for the past 5 years with exceptional results. Kamela's Training expertise, corroborative and innovative spirit make them the go to company when you are looking for customized training",
    by: "MM Ngiba, Manager at Makhophila",
    imgSrc: "/icons/makhophila.png"
  },
  {
    tempId: 3,
    testimonial: "Kamela International has provided professional training services to the University of Witwatersrand Campus Protection Services. Kamela International conducted themselves with the highest level of professionalism and integrity ",
    by: "Donna-Lisa Mac Minn, Acting Deputy Director- Specialised Operation at Wits",
    imgSrc: "/icons/wits.png"
  },
  {
    tempId: 4,
    testimonial: "The service provider, Kamela International, was appointed to provide a Power BI Session for the RAF Management Structure in Cape Town. We wish to acknowledge Kamela International for their outstanding professionalism and good work ethic ",
    by: "Glynn Schlemmer, Senior HRD Officer at RAF",
    imgSrc: "/icons/raf.jpg"
  },
  {
    tempId: 5,
    testimonial: "We have worked with Kamela for the past 6 years and we can confirm that they are industry leaders, their ability to identify training needs analysis and recommend relevant and adequate training programmes is exceptional.",
    by: "Tsepo Nthebe, Head of Skills at Marshalls World of Sport",
    imgSrc: "/icons/marshalls.jpg"
  },
  {
    tempId: 6,
    testimonial: "Kamela's software development learnership gave me the foundation I needed to enter the IT field.",
    by: "Neo, Student",
    imgSrc: "/icons/students.png"
  },
  {
    tempId: 7,
    testimonial: "Kamela International has conducted Computer Training for the staff at Wits University and has provided excellent training. The Director is always professional and goes out of his way to ensure that we are always satisfied",
    by: "G THULUKANAM, HUMAN RESOURCES DEVELOPMENT CONSULTANT at Wits",
    imgSrc: "/icons/wits.png"
  },
  {
    tempId: 8,
    testimonial: "I appreciated the flexible schedule that allowed me to balance studies and work. ",
    by: "G Jessica, student",
    imgSrc: "/icons/students.png"
  },
  {
    tempId: 9,
    testimonial: "I found the interactive sessions engaging and career-focused. I also appreciate the team in how they handled the training sessions the whole time",
    by: "Lunga Makhubu, student",
    imgSrc: "/icons/students.png"
  },
  {
    tempId: 10,
    testimonial: "For the past two years, Kamela has been our go-to training provider for such as HPE Blade Administration, CompTiA Security+, Fortigate, Risk Management and other essential topics",
    by: "Busani Hadebe, 22KA Training and Consulting (Pty) Ltd",
    imgSrc: "/icons/22ka.png"
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
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
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-black text-primary-foreground border-primary" 
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        borderRadius: 20,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
     
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-20 w-60 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl",
        isCenter ? "text-primary-foreground" : "text-foreground"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 italic",
        isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
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
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-white flex items-center justify-center"
      style={{ height: 600 }}
    >
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
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-2xl",
            "bg-background border-2 border-border hover:bg-black hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-2xl",
            "bg-background border-2 border-border hover:bg-black hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};