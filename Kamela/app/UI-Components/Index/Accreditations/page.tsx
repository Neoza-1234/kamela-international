"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import acc1 from "@/public/icons/acc-1.jpg";
import acc2 from "@/public/icons/acc-2.jpg";
import acc3 from "@/public/icons/acc-3.png";
import acc4 from "@/public/icons/acc-4.png";

const Accreditation = [acc1, acc2, acc3, acc4];

export default function Accreditations() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 services">
        <div className="text-center mb-12">
          <h3 className=" mt-5">Our Accreditations</h3>
          <h2 className="mt-1">
            Kamela International is{" "}
            <span className="text-(--prime)">
              fully accredited, registered, and recognized by QCTO and other leading industry
              bodies and authorities
            </span>
          </h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] pb-10px">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            575: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 2 },
            1200: { slidesPerView: 2 },
          }}
          className="accreditation-swiper"
        >
          {Accreditation.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt="accreditationImage"
                className="accreditation-img"
                priority={index < 2}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
