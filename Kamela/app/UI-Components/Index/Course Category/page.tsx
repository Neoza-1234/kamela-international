"use client";

import Link from "next/link";

export default function CourseCategory() {
  return (
    <div className="px-[8%] lg:px-0 py-20 course-category">
      <div className="text-center mt-8">
        <h3 className="">Course Categories</h3>
        <h2>
          We focus on key sectors essential for South Africa's stability and
          growth, providing{" "}
          <span className="text-(--prime)">
            <br></br>in-demand programs
          </span>
        </h2>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid max-w-5xl w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          <div className="col-span-1 lg:col-span-3 lg:row-span-3 overflow-hidden relative rounded-3xl cursor-pointer">
            <img
              src="/ICT.jpg"
              alt="Course Category 1"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 text-white px-3 py-1">
              <h3 className="text-lg font-semibold ">
                Information & Communication Technology
              </h3>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 overflow-hidden relative rounded-3xl cursor-pointer">
            <img
              src="/sales-&-retail.jpg"
              alt="Course Category 2"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 text-white px-3 py-1">
              <h3 className="text-lg font-semibold">Sales & Retail</h3>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 overflow-hidden relative rounded-3xl cursor-pointer">
            <img
              src="/bussiness.jpg"
              alt="Course Category 3"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 text-white px-3 py-1">
              <h3 className="text-lg font-semibold">
                Business, Management & Administration
              </h3>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 overflow-hidden relative rounded-3xl cursor-pointer">
            <img
              src="/operations.jpg"
              alt="Course Category 4"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 text-white px-3 py-1">
              <h3 className="text-lg font-semibold">Operations & Logistics</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
