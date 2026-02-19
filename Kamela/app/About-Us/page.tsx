import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";
import AfricanImpact from "@/components/worldmap";
import {
  Medal,
  Handshake,
  Earth,
  Lightbulb,
  Waypoints,
  HandFist,
  ArrowUpRight,
} from "lucide-react";
import { Metadata } from "next";

/* ─── Brand tokens ────────────────────────────────────────────── */
const BRAND = {
  orange: "#ff4500",
  blue: "#0866ff",
} as const;

/* ─── Page metadata ─────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "About Us - Kamela International | Empowering Skills, Shaping Futures",
  description:
    "Kamela International is a leading accredited training, digital transformation, and enterprise development institution committed to producing highly skilled professionals across Africa.",
  keywords: [
    "Kamela International",
    "About Us",
    "Mission",
    "about Kamela International",
    "accredited training provider South Africa",
    "skills development Africa",
    "enterprise development South Africa",
    "digital transformation training",
    "QCTO accredited institution",
    "workforce development Africa",
    "occupational training South Africa",
    "Kamela International mission",
    "training institution Johannesburg",
    "SETA accredited training",
    "employability South Africa",
    "economic growth training Africa",
    "competency assessment South Africa",
  ],
  openGraph: {
    title:
      "About Us - Kamela International | Accredited Training & Development Institution",
    description:
      "A leading accredited training, digital transformation, and enterprise development institution committed to producing highly skilled professionals across Africa.",
    url: "https://www.kamelatraining.co.za/About-Us",
    images: [
      {
        url: "https://www.kamelatraining.co.za/Team.jpg",
        width: 1200,
        height: 630,
        alt: "About Us - Kamela International",
        type: "image/jpeg",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Kamela International",
    description:
      "10 years of empowering individuals and organisations through accredited skills development, digital transformation, and enterprise development across Africa.",
    images: ["https://www.kamelatraining.co.za/Team.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

/* ─── BentoGrid items ─────────────────────────────────────────── */
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
    header: <ImageHeader src="/business.jpg" alt="Business Image" />,
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

/* ─── Mission  ────────────────────────────────────────── */

const missionPillars = [
  {
    title: "Quality Education",
    body: "Designing and delivering market-responsive, accredited qualifications and assessments.",
  },
  {
    title: "Learner Success",
    body: "Providing learner-centred environments that support practical, real-world mastery.",
  },
  {
    title: "Industry Partnerships",
    body: "Building strategic partnerships with industry, academia, and government.",
  },
  {
    title: "Workforce Readiness",
    body: "Producing graduates who are not just trained — but truly competent, confident, and workplace-ready.",
  },
];

/* ─── Page  ────────────────────────────────────────── */

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

      <section className="overflow-hidden pt-10 pb-10 px-6 lg:pt-10 lg:pb-10 dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4 bg-cover">
                    <Image
                      src="/About1.jpg"
                      alt="Training Session"
                      width={500}
                      height={500}
                      loading="lazy"
                      className=" rounded-2xl  object-contain shadow-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4 bg-cover">
                    <Image
                      src="/about2.jpg"
                      alt="Graduation and Certification Ceremony"
                      width={500}
                      height={500}
                      loading="lazy"
                      className=" rounded-2xl object-contain shadow-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4 bg-cover">
                    <Image
                      src="/about3.jpg"
                      alt="Learners Engaged in Practical Training"
                      width={500}
                      height={500}
                      loading="lazy"
                      className=" rounded-2xl  object-contain shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 xl:w-5/12">
              <div className="mt-5 lg:mt-0">
                <h2
              className="sm:text-5xl leading-tight text-start md:text-left pb-3"
              style={{ color: "#0d0d14" }}
            >
              10 Years Of{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND.orange}, ${BRAND.blue})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                  Empowering Skills And Shaping Futures 
              </span>{" "}
              Through Accredited Training
            </h2>
                <p className="mb-5 dark:text-dark-6">
                  Kamela International is a leading training, digital
                  transformation, enterprise development, and assessment
                  institution committed to producing highly skilled
                  professionals across Africa.
                </p>
                <p className="mb-5 dark:text-dark-6">
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
        <h2 className=" md:text-[40px]/12 text-gray-100 max-w-2xl text-center">
          Our values define our identity, drive our decisions, and shape every
          learner and client experience.
        </h2>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-2 transition duration-300">
            <Medal className="text-white" />
            <p className=" text-gray-100">Excellence</p>
            <p className=" text-gray-200">
              We maintain uncompromising quality across curriculum design,
              facilitation, assessment, corporate engagement, and learner
              support. Excellence is our standard and our promise.
            </p>
          </div>
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-2 transition duration-300">
            <Handshake className="text-white" />
            <p className=" text-gray-100">Integrity</p>
            <p className=" text-gray-200">
              We operate with transparency, accountability, and ethical
              conduct—earning the trust of learners, partners, regulators, and
              communities.
            </p>
          </div>
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-2 transition duration-300">
            <Lightbulb className="text-white" />
            <p className=" text-gray-100">Innovation</p>
            <p className=" text-gray-200">
              We embrace digital learning, modern pedagogies, artificial
              intelligence tools, and future technologies to deliver relevant,
              engaging, and forward-looking training solutions
            </p>
          </div>
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-2 transition duration-300">
            <Waypoints className="text-white" />
            <p className=" text-gray-100">Collaboration</p>
            <p className=" text-gray-200">
              We build strong relationships with industry partners to ensure
              programme relevance, workplace integration, and meaningful impact.
            </p>
          </div>
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-2 transition duration-300">
            <HandFist className="text-white" />
            <p className=" text-gray-100">Empowerment</p>
            <p className=" text-gray-200">
              We uplift individuals, organizations, and communities by creating
              pathways to employment, entrepreneurship, and economic
              participation.
            </p>
          </div>
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-2 transition duration-300">
            <Earth className="text-white" />
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

      <section className="py-20 dark:bg-black bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl dark:text-white">Our Expanded Vision</h2>
            <p className="md:text-lg max-w-5xl mx-auto py-6 px-6">
              To be the recognized leader in occupational training, digital
              transformation, and competency assessment across Southern
              Africa—producing a workforce that is innovative, future-ready, and
              economically impactful. Our long-term goal is to train and empower
              45,000 learners to become industry-relevant, employable, and
              globally competitive professionals.
            </p>
          </div>

          <div className="text-center py-20">
            <h2 className="md:text-4xl dark:text-white text-black">
              Our Institutional Mission
            </h2>
            <p className="md:text-lg max-w-3xl mx-auto py-6 px-6">
              We exist to empower individuals and organizations through
              excellence in accredited skills development. We are dedicated to:
            </p>
{/* Mission pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {missionPillars.map(({ title, body }, i) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                {/* Numbered badge */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white mx-auto mb-4"
                  style={{
                    background: i % 2 === 0 ? BRAND.orange : BRAND.blue,
                  }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                {/* Hover top accent line */}
                <div
                  aria-hidden
                  className="absolute top-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: i % 2 === 0 ? BRAND.orange : BRAND.blue,
                  }}
                />
                <h3
                  className="font-bold text-gray-900 mb-2 text-sm"
                  style={{ color: i % 2 === 0 ? BRAND.orange : BRAND.blue }}
                >
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        </div>
      </section>

      {/* ======= World Map ======= */}

      <AfricanImpact />

      {/* ======= Program Focus Area ======= */}

      <section className="py-20 dark:bg-black bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl dark:text-white text-black">
              Our Programme Focus Areas
            </h2>
            <p className="md:text-lg max-w-3xl mx-auto py-5, px-6">
              Kamela International provides occupational training and
              development across high-demand sectors aligned to the South
              African labour market and digital economy
            </p>
          </div>

          <BentoGrid className="max-w-7xl mx-auto px-6">
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
            <Link
              href="/Solutions/Study"
              className="group bg-(--prime) text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-64 w-52 md:py-3 border border-(--prime) transition-all duration-200 ease-in-out hover:bg-transparent hover:text-(--prime)"
            >
              <span className="flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-13">
                Explore Courses
              </span>
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-all duration-200 ease-in-out group-hover:-translate-x-37 group-hover:rotate-45 group-hover:bg-black">
                <ArrowUpRight
                  className="w-4 h-4 text-black transition-colors duration-200 ease-in-out group-hover:text-white"
                  strokeWidth={1.67}
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ======= Contact Us Section ======= */}

      <section className="flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-5xl w-full text-center rounded-3xl py-20 px-8 md:py-24 bg-black my-10">
        <h1 className="text-white leading-tight">
          Contact us today and take the <br></br>next step toward growth{" "}
        </h1>
        <div className="h-0.75 w-38 my-1 bg-linear-to-l from-transparent to-blue-700"></div>
        <p className="md:text-base text-white max-w-2xl pt-5">
          Whether you are advancing your own career or strengthening your
          workforce, we deliver the training that transforms potential into
          performance
        </p>
        <div className="mt-7">
          <Link
            prefetch={null}
            href="/Contact"
            className="group bg-blue-700 text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-75 w-70 md:py-3 border border-blue-700 transition-all duration-200 ease-in-out hover:bg-transparent hover:text-white"
          >
            <span className="flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-13">
              Book A Free Consultation
            </span>
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-all duration-200 ease-in-out group-hover:-translate-x-50 group-hover:rotate-45 group-hover:bg-black">
              <ArrowUpRight
                className="w-4 h-4 text-black transition-colors duration-200 ease-in-out group-hover:text-white"
                strokeWidth={1.67}
              />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
