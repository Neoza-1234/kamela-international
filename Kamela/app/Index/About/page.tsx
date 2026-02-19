import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative overflow-hidden py-20 px-[8%] lg:px-[12%]"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2
            id="about-heading"
            className="sm:text-4xl lg:text-5xl leading-tight"
          >
            Innovating Skills Development For The Future Workforce
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-5/4">
            <Image
              src="/kamela-about.jpg"
              alt="Kamela International skills development training session"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="object-fill"
            />
          </div>

          <div>
            <p className="leading-relaxed">
              Kamela International is a Pan-African organisation focused on
              skills development, training, enterprise growth, and assessment.
              Our mission is to empower individuals, businesses, and communities
              by providing accredited, future-oriented training that leads to
              genuine competence, true confidence, and meaningful opportunities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <p className="leading-relaxed">
              At Kamela, we believe that education is the doorway to
              empowerment, and skills development is the engine that drives
              sustainable economic growth. We are dedicated to transforming the
              skills landscape in South Africa and across the continent by
              offering a wide range of accredited qualifications, skills
              programs, and assessment services that are aligned with industry
              needs and future trends.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-5/4 order-1 md:order-2">
            <Image
              src="/kamela-about-2.jpg"
              alt="Kamela International learners collaborating in a workshop"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="object-fill"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-5/4">
            <Image
              src="/gallery-3.jpg"
              alt="Kamela International training facilities and learning environment"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="object-fill"
            />
          </div>

          <div>
            <p className="leading-relaxed mb-10">
              As a QCTO-accredited Skills Development Provider and a fully
              accredited QCTO Assessment Centre, Kamela provides an integrated
              ecosystem where learning, assessment, and workplace relevance come
              together. Every qualification, every skills programme, and every
              assessment service is designed to ensure that learners gain
              practical, industry-aligned competencies that prepare them to
              excel in modern workplaces and growing sectors.
            </p>
            <div className="flex justify-center items-center gap-6 flex-wrap mt-10">
              <Link
                href="/About-Us"
                className="group bg-(--prime) text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-64 w-52 md:py-3 border border-(--prime) transition-all duration-200 ease-in-out hover:bg-transparent hover:text-(--prime)"
              >
                <span className="flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-13">
                  Explore More
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
        </div>
      </div>
    </section>
  );
}
