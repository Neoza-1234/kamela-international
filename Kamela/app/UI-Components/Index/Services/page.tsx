"use client";

import Image from "next/image";

export default function Services() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 services">
        <div className="flex flex-col items-center gap-8 p-10 mt-15">
          <div className="text-center mt-30">
            <h3>Our Services</h3>
            <h2 className="mt-1">
              Explore our extensive{" "}
              <span className="text-(--prime)">training solutions</span> across{" "}
              <span className="text-(--prime)">
                five fundamental service streams
              </span>
            </h2>
          </div>
          <div className="service-card relative w-full max-w-6xl bg-black rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-8 items-center cursor-pointer">
            <div className="flex-1 text-white w-full md:w-2/3 lg:w-3/5 service-content">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold italic">01</span>
                <h2>Student Centre</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Designed for self-paying or privately registered students.
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-white">
                  How learning works:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 ml-2">
                  <li>
                    Training delivered through our Learning Management System
                    (LMS)
                  </li>
                  <li>Online learning and virtual classes</li>
                  <li>
                    Weekday attendance options: Monday, Tuesday & Thursday
                  </li>
                  <li>
                    Weekend classes for employed learners: Saturday & Sunday
                  </li>
                  <li>Nationally recognized QCTO-accredited qualifications</li>
                </ul>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold text-white mb-2">Ideal for:</h4>
                <p className="leading-relaxed">
                  Youth, unemployed individuals, career changers, adult
                  learners, and professionals seeking upskilling.
                </p>
              </div>
            </div>
            <div className="relative w-full md:w-1/3 lg:w-2/5 shrink-0">
              <div className="overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72 w-full rounded-3xl md:max-w-[300px]">
                <Image
                  src="/student-learning.jpg"
                  className="object-cover border-2 w-full h-full border-white service-img"
                  width={300}
                  height={300}
                  alt="Student Learning"
                ></Image>
              </div>
              <i className=" i bi bi-arrow-up-right transition-all duration-300"></i>
            </div>
          </div>
          <div className="service-card relative w-full max-w-6xl bg-black rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-8 items-center cursor-pointer">
            <div className="flex-1 text-white w-full md:w-2/3 lg:w-3/5 service-content">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold italic">02</span>
                <h2>Enterprise Development</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Training designed specifically for companies or organizations.
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-white">Delivery options:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 ml-2">
                  <li>Kamela International LMS</li>
                  <li>Online Classes</li>
                  <li>Face-to-face (onsite or venue-based)</li>
                  <li>Dual/blended training</li>
                  <li>Customized schedules based on client requirements</li>
                </ul>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold text-white mb-2">Ideal for:</h4>
                <p className="leading-relaxed">
                  Corporate teams, government departments, SMEs, enterprise
                  development programs and workforce upskilling.
                </p>
              </div>
            </div>
            <div className="relative w-full md:w-1/3 lg:w-2/5 shrink-0">
              <div className="overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72 w-full rounded-3xl md:max-w-[300px]">
                <Image
                  src="/corporate.jpg"
                  className="object-cover border-2 w-full h-full border-white service-img"
                  width={300}
                  height={300}
                  alt="Student Learning"
                ></Image>
              </div>
              <i className="i bi bi-arrow-up-right transition-all duration-300"></i>
            </div>
          </div>
          <div className="service-card relative w-full max-w-6xl bg-black rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-8 items-center cursor-pointer">
            <div className="flex-1 text-white w-full md:w-2/3 lg:w-3/5 service-content">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold italic">03</span>
                <h2>CSI Skills Development</h2>
              </div>
              <p className="text-gray-300 mb-6">
                A partnership-driven model supporting social impact initiatives.
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-white">Our approach:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 ml-2">
                  <li>
                    Training delivered via LMS, online classes, or face-to-face
                    sessions
                  </li>
                  <li>Targeted at under-resourced communities</li>
                  <li>
                    Supports Corporate Social Investment (CSI) and BBBEE skills
                    development goals
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold text-white mb-2">Ideal for:</h4>
                <p className="leading-relaxed">
                  NGOs, NPOs, NPCs, foundations, corporate CSI departments,
                  community empowerment projects.
                </p>
              </div>
            </div>
            <div className="relative w-full md:w-1/3 lg:w-2/5 shrink-0">
              <div className="overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72 w-full rounded-3xl md:max-w-[300px]">
                <Image
                  src="/csi.jpg"
                  className="object-cover border-2 w-full h-full border-white service-img"
                  width={300}
                  height={300}
                  alt="Student Learning"
                ></Image>
              </div>
            </div>
          </div>
          <div className="service-card relative w-full max-w-6xl bg-black rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-8 items-center cursor-pointer">
            <div className="flex-1 text-white w-full md:w-2/3 lg:w-3/5 service-content">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold italic">04</span>
                <h2>QCTO Assessment Centre</h2>
              </div>
              <p className="text-gray-300 mb-6">
                A fully accredited center offering External Integrated Summative
                Assessments (EISA) for occupational qualifications.
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-white">We Provide:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 ml-2">
                  <li>Practical & knowledge assessments</li>
                  <li>Compliant assessment facilities</li>
                  <li>Qualified assessors & moderators</li>
                  <li>Preparation support for learners</li>
                  <li>Certification documentation for QCTO</li>
                </ul>
              </div>
            </div>
            <div className="relative w-full md:w-1/3 lg:w-2/5 shrink-0">
              <div className="overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72 w-full rounded-3xl md:max-w-[300px]">
                <Image
                  src="/exam-center.jpg"
                  className="object-cover border-2 w-full h-full border-white service-img"
                  width={300}
                  height={500}
                  alt="Student Learning"
                ></Image>
              </div>
              <i className="i bi bi-arrow-up-right transition-all duration-300"></i>
            </div>
          </div>
          <div className="service-card relative w-full max-w-6xl bg-black rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row gap-10 items-center cursor-pointer">
            <div className="flex-1 text-white md:flex-row w-full md:w-[70%] service-content">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold italic">05</span>
                <h2>Events, Conferences & Corporate Engagements</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Kamela International has delivered corporate training events,
                conferences, learning expos, and professional development
                engagements across Africa and Dubai (UAE).
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-white">We Specialize In:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 ml-2">
                  <li>Workforce development seminars</li>
                  <li>Leadership & management summits</li>
                  <li>Skills development expos</li>
                  <li>Corporate training retreats</li>
                  <li>International learning exchanges</li>
                </ul>
              </div>
            </div>
            <div className="relative w-full md:w-[40%]">
              <div className="overflow-hidden h-full w-full rounded-3xl mid:h-[210px] md:w-[300px]">
                <Image
                  src="/events.jpg"
                  className="object-cover border-2 w-full h-full service-img border-white"
                  width={500}
                  height={500}
                  alt="Student Learning"
                ></Image>
              </div>
              <i className="i bi bi-arrow-up-right transition-all duration-300"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
