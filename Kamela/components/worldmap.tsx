"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import WorldMap from "@/components/ui/world-map";

export default function AfricanImpact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="py-10 dark:bg-black w-full">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl dark:text-white text-black font-bold">
          Our Footprint Across <span className="text-purple_blue">Africa</span>
        </h2>
        <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto py-6 px-6">
          Kamela International delivers training and workforce development
          solutions within South Africa and across the African continent.
        </p>
      </div>
      
      {/* Only render WorldMap when it comes into view */}
      {isInView ? (
        <WorldMap
          dots={[
            {
              start: {
                lat: -45.1076,
                lng: 28.0567,
              }, // Sandton, South Africa (fixed latitude)
              end: {
                lat: -22.57,
                lng: 17.1,
              }, // Windhoek, Namibia
            },
            {
              start: { lat: -45.1076, lng: 28.0567 }, // Sandton, South Africa
              end: { lat: -17.8292, lng: 31.054 }, // Harare, Zimbabwe
            },
            {
              start: { lat: -17.8292, lng: 31.054 }, // Harare, Zimbabwe
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi, Kenya (fixed latitude)
            },
            {
              start: { lat:-45.1076, lng: 28.0567 }, // Sandton, South Africa
              end: { lat: -25.9653, lng: 32.5892 }, // Maputo, Mozambique
            },
            {
              start: { lat: -45.1076, lng: 28.0567 }, // Sandton, South Africa
              end: { lat: -15.4167, lng: 28.2833 }, // Lusaka, Zambia
            },
            {
              start: { lat: -45.1076, lng: 28.0567 }, // Sandton, South Africa
              end: { lat: 25.2048, lng: 55.2708 }, // Dubai
            },
          ]}
        />
      ) : (
        // Placeholder to maintain layout while loading
        <div className="w-full aspect-2/1 dark:bg-black rounded-lg" />
      )}
    </div>
  );
}