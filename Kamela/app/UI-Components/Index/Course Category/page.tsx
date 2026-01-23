
import Image from "next/image";
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
      <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          
          {/* ICT - Large Featured Card */}
          <Link
            href="/UI-Components/Solutions/Study?tab=ict"
            className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-2 h-64 sm:h-80 lg:h-full min-h-100"
          >
            <div className="overflow-hidden relative rounded-3xl cursor-pointer h-full group">
              <Image
                src="/ICT.jpg"
                alt="Information & Communication Technology"
                width={1920}
                height={1080}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white px-3 py-1">
                <h3 className="text-xl sm:text-2xl font-bold drop-shadow-lg">
                  Information & Communication Technology
                </h3>
              </div>
            </div>
          </Link>

          {/* Sales & Retail */}
          <Link
            href="/UI-Components/Solutions/Study?tab=sales"
            className="col-span-1 sm:col-span-1 lg:col-span-2 h-64 sm:h-48 lg:h-auto"
          >
            <div className="overflow-hidden relative rounded-3xl cursor-pointer h-full group">
              <Image
                src="/sales-&-retail.jpg"
                alt="Sales & Retail"
                width={1920}
                height={1080}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white px-3 py-1">
                <h3 className="text-lg sm:text-xl font-bold drop-shadow-lg">
                  Sales & Retail
                </h3>
              </div>
            </div>
          </Link>

          {/* Business, Management & Administration */}
          <Link
            href="/UI-Components/Solutions/Study?tab=business"
            className="col-span-1 sm:col-span-1 lg:col-span-2 h-64 sm:h-48 lg:h-auto"
          >
            <div className="overflow-hidden relative rounded-3xl cursor-pointer h-full group">
              <Image
                src="/business.jpg"
                alt="Business, Management & Administration"
                width={1920}
                height={1080}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white px-3 py-1">
                <h3 className="text-lg sm:text-xl font-bold drop-shadow-lg">
                  Business, Management & Administration
                </h3>
              </div>
            </div>
          </Link>

          {/* Governance & Operations */}
          <Link
            href="/UI-Components/Solutions/Study?tab=governance"
            className="col-span-1 sm:col-span-2 lg:col-span-3 h-64 sm:h-56 lg:h-auto"
          >
            <div className="overflow-hidden relative rounded-3xl cursor-pointer h-full group">
              <Image
                src="/operations.jpg"
                alt="Governance & Operations"
                width={1920}
                height={1080}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white px-3 py-1">
                <h3 className="text-lg sm:text-xl font-bold drop-shadow-lg">
                  Governance & Operations
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
