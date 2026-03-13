import Image from "next/image";
import Link from "next/link";
import { ArrowBigRight } from "lucide-react";

export default function CourseCategory() {
  return (
    <div className="px-[8%] lg:px-0 py-20 course-category">
      <div className="text-center mt-8 max-w-3xl mx-auto"> 
        <h2>
          Focusing On Key Sectors Essential For South Africa's Stability &
          Growth, Providing In-Demand Programs In
        </h2>
      </div>
      <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full">
          {/* Main Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {/* ICT - */}
              <Link 
                href="/Solutions/Study?tab=ict"
                className="h-100 md:h-125 lg:h-150"
              >
                <div className="overflow-hidden relative rounded-3xl cursor-pointer h-full group hover:shadow-lg hover:shadow-black/30 transition-shadow duration-300">
                  <Image
                    src="/ICT.jpg"
                    alt="Information & Communication Technology"
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute flex justify-between gap-4 bottom-4 left-4 text-white px-3">
                     <ArrowBigRight className="pb-0.5"/>
                    <h3 className="text-xl sm:text-2xl font-bold drop-shadow-lg">
                      View ICT Courses
                    </h3>
                  </div>
                </div>
              </Link>

              {/* Business, Management & Administration  */}
              <Link
                href="/Solutions/Study?tab=business"
                className="h-75 md:h-70 lg:h-80"
              >
                <div className="overflow-hidden relative rounded-3xl cursor-pointer h-full group hover:shadow-lg hover:shadow-black/30 transition-shadow duration-300">
                  <Image
                    src="/business.jpg"
                    alt="Business, Management & Administration"
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute flex justify-between gap-4 bottom-4 left-4 text-white px-3">
                     <ArrowBigRight className="pb-0.5"/>
                    <h3 className="text-lg sm:text-xl font-bold drop-shadow-lg">
                       View Business, Management & Admin Courses
                    </h3>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {/* Sales & Retail  */}
              <Link
                href="/Solutions/Study?tab=sales"
                className="h-75 md:h-70 lg:h-80"
              >
                <div className="overflow-hidden relative rounded-3xl cursor-pointer h-full group hover:shadow-lg hover:shadow-black/30 transition-shadow duration-300">
                  <Image
                    src="/sales-&-retail.jpg"
                    alt="Sales & Retail"
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute flex justify-between gap-4 bottom-4 left-4 text-white px-3">
                     <ArrowBigRight className="pb-0.5"/>
                    <h3 className="text-lg sm:text-xl font-bold drop-shadow-lg">
                      View Sales & Retail Courses
                    </h3>
                  </div>
                </div>
              </Link>

              {/* Governance & Operations  */}
              <Link
                href="/Solutions/Study?tab=governance"
                className="h-100 md:h-125 lg:h-150"
              >
                <div className="overflow-hidden relative rounded-3xl cursor-pointer h-full group hover:shadow-lg hover:shadow-black/30 transition-shadow duration-300">
                  <Image
                    src="/operations.jpg"
                    alt="Governance & Operations"
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute flex justify-between gap-4 bottom-4 left-4 text-white px-3">
                     <ArrowBigRight className="pb-0.5"/>
                    <h3 className="text-lg sm:text-xl font-bold drop-shadow-lg">
                      View Governance & Operations Courses
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
