"use client";

import Image from "next/image";
import { motion } from "motion/react";
import WorldMap from "@/components/ui/world-map";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";

const ImageHeader = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex flex-1 w-full h-full min-h-24 rounded-xl overflow-hidden relative">
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      fill
      className="object-cover"
    />
  </div>
);

function BentoData() {
  return (
    <div className="flex flex-1 w-full h-full min-h-24 rounded-3xl bg-linear-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
}
const items = [
  {
    title: "Information Technology",
    description:
      " Gain expertise in software development, cybersecurity, and cloud computing.",
    header: <ImageHeader src="/it.jpg" alt="IT Image" />,
  },
  {
    title: "Business Administration and Management",
    description:
      "Explore essential business skills including project management, human resources and marketing",
    header: <ImageHeader src="/bussiness.jpg" alt="Business Image" />,
  },
  {
    title: "Leadership, Supervision & Project Management",
    description:
      "Develop essential leadership and project management skills for effective team and project oversight.",
    header: <ImageHeader src="/leadership.jpg" alt="Leadership Image" />,
  },
  {
    title: "Retail, Sales & Supply Chain Management",
    description:
      "Master the fundamentals of retail operations, sales strategies, and supply chain logistics to drive business success.",
    header: <ImageHeader src="/sales-&-retail.jpg" alt="Retail Image" />,
  },
  {
    title: "Enterprise Development & Re-Skilling Programs",
    description:
      "Empower yourself with skills to start and grow your own business or pivot your career.",
    header: <ImageHeader src="/corporate.jpg" alt="Enterprise Image" />,
  },
  {
    title: "Microsoft Azure Cloud Certifications",
    description:
      "Achieve industry-recognized Microsoft Azure certifications to advance your cloud computing career.",
    header: <ImageHeader src="/cloud.png" alt="Azure Image" />,
  },
  {
    title: "Digital Skills & Future Technologies",
    description:
      "Stay ahead in the digital age with skills in AI, cloud computing, and digital literacy.",
    header: <ImageHeader src="/future-tech.jpg" alt="Digital Image" />,
  },
  {
    title: "Entrepreneurship & Small Business Development",
    description:
      "Turn ideas into reality with practical business skills and strategies.",
    header: (
      <ImageHeader
        src="/small-business-development.jpg"
        alt="Entrepreneurship Image"
      />
    ),
  },
  {
    title: "Work Integrated Learning & Industry Readiness",
    description:
      "Bridge the gap between education and employment with hands-on experience.",
    header: (
      <ImageHeader
        src="/work-intergrated-learning.jpg"
        alt="Work Integrated Image"
      />
    ),
  },
];

export default function AboutUs() {
  return (
    <>
      <div className="flex flex-wrap justify-start items-center space-x-2 text-sm text-gray-500 font-medium mt-30 px-10 md:px-16 lg:px-24 xl:px-32 mb-3">
        <button type="button" aria-label="Home">
          <Link href="/#">Home</Link>
        </button>
        <i className="ri-arrow-drop-right-line"></i>
        <div className="text-(--prime) font-semibold">About Us</div>
      </div>

      <div className="section-bg flex justify-center  text-center text-white px-10 md:px-16 lg:px-24 xl:px-32">
        <h1 className="mx-auto mt-10">About Kamela International</h1>
      </div>

      {/* ======= About Us Section ======= */}

      <section className="overflow-hidden pt-20 pb-12 px-10 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4 bg-cover">
                    <Image
                      src="/About1.jpg"
                      alt="about image"
                      width={500}
                      height={400}
                      className=" rounded-2xl w-[500px] h-[400px]  "
                    />
                  </div>
                  <div className="py-3 sm:py-4 bg-cover">
                    <Image
                      src="/about2.jpg"
                      alt="about image"
                      width={500}
                      height={400}
                      className=" rounded-2xl w-[500px] h-[400px] "
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4 bg-cover">
                    <Image
                      src="/about3.jpg"
                      alt="about image"
                      width={500}
                      height={400}
                      className=" rounded-2xl w-[500px] h-[400px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <h2 className="mb-5 text-dark dark:text-white sm:text-[40px]/[48px] text-center">
                  <span className="text-(--prime) leading-tight">
                    10 Years of Empowering Skills & <br></br> Shaping Futures
                  </span>
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Kamela International is a leading training, digital
                  transformation, enterprise development, and assessment
                  institution committed to producing highly skilled
                  professionals across Africa.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  We partner with government entities, universities, corporates,
                  and global technology providers to deliver programs that
                  address Africa's most urgent needs: employability, innovation,
                  productivity, and economic growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= Core Values Section ======= */}

      <section className="py-20 px-4 bg-black flex flex-col justify-center items-center gap-6">
        <h3 className="px-4 h-8 text-slate-200 rounded-lg">
          Our Core Values
        </h3>
        <h2 className=" md:text-[40px]/12 text-gray-100 max-w-lg text-center leading-tight">
          Our values define our identity, drive our decisions, and shape every
          learner and client experience.
        </h2>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-medal-fill text-white w-30 h-30 pb-3"></i>
            <p className=" text-gray-100">Excellence</p>
            <p className=" text-gray-200">
              We maintain uncompromising quality across curriculum design,
              facilitation, assessment, corporate engagement, and learner
              support. Excellence is our standard and our promise.
            </p>
          </div>
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-shake-hands-fill text-white w-30 h-30 pb-3"></i>
            <p className=" text-gray-100">Integrity</p>
            <p className=" text-gray-200">
              We operate with transparency, accountability, and ethical
              conduct—earning the trust of learners, partners, regulators, and
              communities.
            </p>
          </div>
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-lightbulb-ai-fill text-white w-30 h-30 pb-3"></i>
            <p className=" text-gray-100">Innovation</p>
            <p className=" text-gray-200">
              We embrace digital learning, modern pedagogies, artificial
              intelligence tools, and future technologies to deliver relevant,
              engaging, and forward-looking training solutions
            </p>
          </div>
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-team-fill text-white w-30 h-30 pb-3"></i>
            <p className=" text-gray-100">Collaboration</p>
            <p className=" text-gray-200">
              We build strong relationships with industry partners to ensure
              programme relevance, workplace integration, and meaningful impact.
            </p>
          </div>
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-rocket-2-fill text-white w-30 h-30 pb-3"></i>
            <p className=" text-gray-100">Empowerment</p>
            <p className=" text-gray-200">
              We uplift individuals, organisations, and communities by creating
              pathways to employment, entrepreneurship, and economic
              participation.
            </p>
          </div>
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-earth-fill text-white w-30 h-30 pb-3"></i>
            <p className=" text-gray-100">Inclusivity</p>
            <p className=" text-gray-200">
              We provide equitable access to education for youth, unemployed
              individuals, rural communities, professionals, and people with
              diverse abilities and backgrounds
            </p>
          </div>
        </div>
      </section>

      {/* ======= Mission, Vision, Values ======= */}

      <section className="py-15 dark:bg-black bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl dark:text-white text-black">
              Our Expanded <span className="text-(--prime)">Vision</span>
            </h2>
            <p className="md:text-lg max-w-2xl mx-auto py-6 px-6">
              To be the recognised leader in occupational training, digital
              transformation, and competency assessment across Southern
              Africa—producing a workforce that is innovative, future-ready, and
              economically impactful. Our long-term goal is to train and empower
              45,000 learners to become industry-relevant, employable, and
              globally competitive professionals.
            </p>
          </div>

          <div className="text-center mb-16 mt-30">
            <h2 className="md:text-4xl dark:text-white text-black">
              Our Institutional <span className="text-(--prime)">Mission</span>
            </h2>
            <p className="md:text-lg max-w-2xl mx-auto py-6 px-6">
              We exist to empower individuals and organisations through
              excellence in accredited skills development. We are dedicated to:
            </p>

            <div className=" px-4 py-8 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <h3 className="mt-4 text-black font-bold">
                    Quality education
                  </h3>
                  <p className="mt-2 text-pretty text-gray-700">
                    Designing and delivering market-responsive, accredited
                    qualifications and assessments
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="mt-4 text-black font-bold">Learner success</h3>

                  <p className="mt-2 text-pretty text-gray-700">
                    Providing learner-centred environments that support
                    practical, real-world mastery
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="mt-4 text-black font-bold">
                    Industry partnerships
                  </h3>

                  <p className="mt-2 text-pretty text-gray-700">
                    Building strategic partnerships with industry, academia, and
                    government
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="mt-4 text-black font-bold">
                    Workforce readiness
                  </h3>

                  <p className="mt-2 text-pretty text-gray-700">
                    Producing graduates who are not just trained—but truly
                    competent, confident, and workplace-ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= World Map ======= */}

      <div className=" py-40 dark:bg-black bg-white w-full">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="md:text-4xl dark:text-white text-black">
            Our Footprint Across{" "}
            <span className="text-(--prime)">
              {" Africa".split("").map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>
          <p className=" md:text-lg text-neutral-500 max-w-2xl mx-auto py-6 px-6">
            Kamela International delivers training and workforce development
            solutions within South Africa and across the African continent.
          </p>
        </div>
        <WorldMap
          dots={[
            {
              start: {
                lat: -45.1076,
                lng: 28.0567,
              }, //  Sandton, South Africa
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
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi, Kenya
            },

            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </div>

      {/* ======= Program Focus Area ======= */}

      <section className="py-20 dark:bg-black bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl dark:text-white text-black">
              Our Program Focus <span className="text-(--prime)">Areas</span>
            </h2>
            <p className="md:text-lg max-w-2xl mx-auto py-6 px-6">
              Kamela International provides occupational training and
              development across high-demand sectors aligned to the South
              African labour market and digital economy
            </p>
          </div>

          <BentoGrid className="max-w-5xl mx-auto px-6">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={
                  i === 3 || i === 6
                    ? "md:col-span-4"
                    : i === 7 || i === 8
                    ? "md:col-span-3"
                    : "md:col-span-2"
                }
              />
            ))}
          </BentoGrid>

          <div className="flex justify-center items-center gap-6 flex-wrap mt-10">
            <button className="mt-9 border-(--prime) border-2 px-3 py-3 rounded-full text-(--prime) font-semibold hover:bg-(--prime) hover:text-white transition-all duration-300 flex items-center gap-6">
              <Link href="/UI-Components/Solutions/Study">
                Find Our Courses<i className="bi bi-arrow-right ps-1"></i>
              </Link>
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-5xl w-full text-center rounded-3xl py-20 px-8 md:py-24 bg-black my-15">
        <h1 className="text-white leading-tight">
          Contact us today and take the <br></br>next step toward growth{" "}
        </h1>
        <div className="h-[3px] w-32 my-1 bg-linear-to-l from-transparent to-blue-700"></div>
        <p className="md:text-base text-white max-w-xl pt-5">
          Whether you're advancing your own career or strengthening your
          workforce, we deliver the training that transforms potential into
          performance
        </p>
        <Link href="/UI-Components/Contact">
          <button className="px-8 py-2.5 mt-4 text-sm bg-linear-to-r from-blue-700 to-orange-600 hover:scale-105 transition duration-300 text-white rounded-full cursor-pointer border border-transparent hover:border-white">
            Book A Free Consultation
          </button>
        </Link>
      </section>
    </>
  );
}
