import Link from "next/link";
import Image from "next/image";
import {ArrowUpRight} from "lucide-react";

export default function About() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 about">
        <div className="text-center mb-12">
          <h3 className=" mt-15">About Kamela International</h3>
          <h2 className="mt-1">
            Innovating{" "}
            <span className="text-(--prime)">Skills Development</span> for the
            Future Workforce
          </h2>
        </div>
        <div className="container mx:auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="about-image flex justify-center">
            <Image
              src="/kamela-about.jpg"
              alt="About Kamela International"
              width={500}
              height={300}
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="content mt-8 relative justify-center items-center ">
            <p className="mb-4">
              Kamela International is a Pan-African organization focused on
              skills development, training, enterprise growth, and assessment.
              Its mission is to empower individuals, businesses, and communities
              by providing accredited, future-oriented training that leads to
              genuine competence, true confidence, and meaningful
              opportunities.
            </p>
          </div>
        </div>

        <div className="container mx:auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-40">
          <div className="content mt-8  justify-end items-center ">
            <p className="mb-4">
              At Kamela, we believe that education is the doorway to
              empowerment, and skills development is the engine that drives
              sustainable economic growth.
            </p>
          </div>
          <div className="about-image flex justify-center">
            <Image
              src="/kamela-about-2.jpg"
              alt="About Kamela International"
              width={500}
              height={300}
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        <div className="container mx:auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-40">
          <div className="about-image flex justify-center">
            <Image
              src="/gallery-3.jpg"
              alt="About Kamela International"
              width={500}
              height={300}
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="content mt-8 justify-center items-center ">
            <p className="mb-4">
              As a QCTO-accredited Skills Development Provider and a fully
              accredited QCTO Assessment Centre, Kamela provides an integrated
              ecosystem where learning, assessment, and workplace relevance come
              together. Every qualification, every skills program, and every
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
    </>
  );
}
