"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import acc1 from "@/public/acc-1.jpg";
import acc2 from "@/public/acc-2.jpg";
import acc3 from "@/public/acc-3.png";
import acc4 from "@/public/acc-4.png";

const Accreditation = [acc1, acc2, acc3, acc4];

export default function Accreditations() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 services">
        <div className="text-center mb-12">
          <h3 className=" mt-5">Our Accreditations</h3>
          <h2 className="mt-1">
            Kamela International is{" "}
            <span className="text-(--prime)">
              fully accredited, registered, and recognized by leading industry
              bodies and authorities
            </span>
          </h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] pb-10px">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 1500 }}
          modules={[Autoplay]}
          breakpoints={{
            1200: { slidesPerView: 5 },
            991: { slidesPerView: 4 },
            575: { slidesPerView: 2 },
            0: { slidesPerView: 2 },
          }}
          className="accreditation-swiper"
        >
            {Accreditation.map((img,index) =>(
                <SwiperSlide key={index}>
                    <Image 
                    src={img}
                    alt="accreditationImage"
                    className="accreditation-img"
                    /> 
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
