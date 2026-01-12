"use client";

import Image from "next/image";
import Link from "next/link";
import { Feature197 } from "@/components/accordion-feature-section";

const scrollToEnterpriseServices = () => {
  const element = document.getElementById("enterprise-services");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Enterprise() {
  return (
    <>
      <svg
        className="size-full absolute -z-10 inset-0"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="#E2E8F0" strokeOpacity=".7" d="M-15.227 702.342H1439.7" />
        <circle
          cx="711.819"
          cy="372.562"
          r="308.334"
          stroke="#E2E8F0"
          strokeOpacity=".7"
        />
        <circle
          cx="16.942"
          cy="20.834"
          r="308.334"
          stroke="#d9d9d9"
          strokeOpacity=".7"
        />
        <path
          stroke="#d9d9d9"
          strokeOpacity=".7"
          d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7"
        />
        <circle
          cx="782.595"
          cy="411.166"
          r="308.334"
          stroke="#d9d9d9"
          strokeOpacity=".7"
        />
      </svg>

      <div className="flex flex-wrap justify-start items-center space-x-2 text-sm text-gray-500 font-medium mt-30 px-10 md:px-16 lg:px-24 xl:px-32 mb-3">
        <button type="button" aria-label="Home">
          <Link href="/#">Home</Link>
        </button>
        <i className="ri-arrow-drop-right-line"></i>
        <a href="#">Solutions</a>
        <i className="ri-arrow-drop-right-line"></i>
        <div style={{ color: "var(--prime)" }} className="font-semibold">
          Enterprise
        </div>
      </div>

      {/* Hero Section */}

      <div
        className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="hero-content">
          <h1 className="hero-title leading-tight flex justify-center items-center flex-col text-center text-(--prime)">
            Corporate Training <br></br> Workforce Development Talent Pipelines{" "}
            <br></br> Digital Upskilling
          </h1>
          
            <div className="mt-6 flex justify-center">
              <button
                onClick={scrollToEnterpriseServices}
                className="inline-block rounded-3xl bg-white text-(--prime) px-12 py-3 text-sm font-medium transition hover:bg-(--prime) hover:text-white border-2 border-(--prime)"
              >
                Our Services
              </button>
            </div>
          
        </div>

        <div className="hero-img-container relative flex justify-around items-center pt-5">
          <Image
            src="/corporate2.jpg"
            alt="Hero Image"
            width={365}
            height={250}
            className="hero-img rounded-3xl "
          />
        </div>
      </div>

      {/* Introduction Section */}

      <section className="max-w-7xl mx-auto px-6 py-5">
        <div className="text-center mb-12">
          <h2 className=" mb-6">
            A Leading Provider Of Corporate Training Solutions
          </h2>
          <p>
            Kamela International partners with organisations across South Africa
            and Africa to deliver high-impact enterprise development, workforce
            transformation, and talent enablement solutions. Our programmes are
            designed to strengthen organisational capacity, build future-ready
            skills, and accelerate economic inclusion through scalable,
            digital-enabled training interventions. We support corporates,
            SMMEs, NGOs, and government institutions with evidence-based
            learning models that drive productivity, innovation, and long-term
            sustainability.
          </p>
        </div>
      </section>

      {/* Why Corporates Choose Kamela Section */}

      <section className="py-20 px-4 bg-white flex flex-col justify-center items-center gap-6">
        <h2 className="px-4 h-8 rounded-3xl text-center leading-tight">
          Why Corporates Choose Kamela
        </h2>
        <p className=" md:text-[40px]/12 text-center leading-tight max-w-3xl">
          Our enterprise development solutions are trusted because they offer
        </p>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-check-double-line w-30 h-30 pb-3"></i>
            <p className="font-bold">Proven Track Record</p>
            <p>
              We have successfully delivered programmes for leading
              organisations in mining, logistics, public sector,
              telecommunications, manufacturing, and academia.
            </p>
          </div>
          <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-check-double-line w-30 h-30 pb-3"></i>
            <p className="font-bold">Customised Skills Solutions</p>
            <p>
              Training is tailored to each client's operational environment,
              workforce needs, and strategic goals.
            </p>
          </div>
          <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-check-double-line w-30 h-30 pb-3"></i>
            <p className="font-bold">Digital & Blended Learning</p>
            <p>
              Our LMS, virtual classrooms, digital labs, and workplace-based
              assessments ensure employees learn anywhere, anytime.
            </p>
          </div>
          <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-check-double-line w-30 h-30 pb-3"></i>
            <p className="font-bold">Enterprise Development & Incubation</p>
            <p>
              We design and implement SMME development, incubation, and supplier
              development training aligned to B-BBEE requirements.
            </p>
          </div>
          <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-check-double-line w-30 h-30 pb-3"></i>
            <p className="font-bold">Talent Pipeline Development</p>
            <p>
              We prepare youth and early-career employees for long-term
              employability and professional performance
            </p>
          </div>
          <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-check-double-line w-30 h-30 pb-3"></i>
            <p className="font-bold">National Implementation Capability</p>
            <p>
              We can roll out programmes in all 9 provinces with digital,
              hybrid, or on-site delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}

      <section className="flex flex-col items-center justify-center px-4 md:px-0 w-full mb-15">
        <h2 className=" text-center">
          Trusted By leading Corporate & Public Organisations
        </h2>
        <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full mt-14">
          <div className="border border-secondary p-4 h-15 grid place-content-center rounded-md hover:-translate-y-2 transition duration-200">
            <Image
              src="/icons/anglo-american.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="border border-secondary p-4 h-15 grid place-content-center rounded-md hover:-translate-y-2 transition duration-200">
            <Image src="/alteram.png" alt="Logo" width={100} height={100} />
          </div>
          <div className="border border-secondary p-4 h-15 grid place-content-center rounded-md hover:-translate-y-2 transition duration-200">
            <Image
              src="/icons/master-plastics.webp"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="border border-secondary p-4 h-15 grid place-content-center rounded-md hover:-translate-y-2 transition duration-200">
            <Image src="/icons/iwits.png" alt="Logo" width={100} height={100} />
          </div>
          <div className="border border-secondary p-4 h-15 grid place-content-center rounded-md hover:-translate-y-2 transition duration-200">
            <Image src="/icons/unisa.jpg" alt="Logo" width={100} height={100} />
          </div>
          <div className="border border-secondary p-4 h-15 grid place-content-center rounded-md hover:-translate-y-2 transition duration-200">
            <Image src="/icons/transnet.png" alt="Logo" width={100} height={100} />
          </div>
          <div className="border border-secondary p-4 h-15 grid place-content-center rounded-md hover:-translate-y-2 transition duration-200">
            <Image src="/icons/marshalls.jpg" alt="Logo" width={100} height={100} />
          </div>
          <div className="border border-secondary p-4 h-15 grid place-content-center rounded-md hover:-translate-y-2 transition duration-200">
            <Image src="/icons/makhophila.png" alt="Logo" width={100} height={100} />
          </div>
          <div className="border border-secondary p-4 h-15 grid place-content-center rounded-md hover:-translate-y-2 transition duration-200">
            <Image src="/icons/raf.jpg" alt="Logo" width={50} height={50} />
          </div>
        </div>
      </section>

      {/* Custom Training Solutions */}

      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 dark:bg-gray-900">
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h2 className="tracking-tight text-pretty sm:text-5xl dark:text-white">
                  Training Solutions Tailored For Enterprise Success
                </h2>
                <p className="mt-6 dark:text-gray-300">
                  We partner with organisations to deliver customised training
                  solutions that drive workforce transformation, enterprise
                  development, and talent pipeline growth. We work closely with
                  clients to design and implement programmes that enhance
                  employee performance, improve organisational capacity, and
                  accelerate economic inclusion.
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              width={1184}
              height={1376}
              alt="training"
              src="/Kamela-18.jpg"
              className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228 dark:bg-gray-800 dark:ring-white/10"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl lg:max-w-lg dark:text-gray-400">
                <p>
                  Our enterprise training solutions are designed to meet the
                  unique needs of each organisation. Whether it's upskilling
                  employees, developing SMMEs, or building talent pipelines, we
                  create programmes that deliver measurable impact and long-term
                  value.
                </p>
                <ul role="list" className="mt-8 space-y-8 dark:text-gray-400">
                  <li className="flex gap-x-3">
                    <span>
                      <strong
                        className="font-semibold dark:text-white"
                        style={{ color: "var(--prime)" }}
                      >
                        In-House Training.{" "}
                      </strong>
                      We offer flexible in-house training programs tailored to
                      your organization's specific needs. Delivered on-site by
                      experienced facilitators, our sessions ensure minimal
                      disruption to operations while maximizing learning
                      outcomes for your team.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong
                        className="font-semibold dark:text-white"
                        style={{ color: "var(--prime)" }}
                      >
                        Online Training.{" "}
                      </strong>{" "}
                      We also deliver accessible and flexible online training
                      solutions designed to meet the needs of modern learners.
                      Our virtual programs combine expert instruction with
                      interactive content, allowing individuals and teams to
                      upskill from anywhere, at any time.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong
                        className="font-semibold dark:text-white"
                        style={{ color: "var(--prime)" }}
                      >
                        Blended Learning.{" "}
                      </strong>{" "}
                      Our blended learning solutions combine the best of
                      in-person and online training methods. This approach
                      maximizes engagement and retention by providing a mix of
                      face-to-face instruction, digital content, and practical
                      application.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}

      <section
        id="enterprise-services"
        className="enterprise-services max-w-7xl mx-auto px-6 py-5"
      >
        <div className="text-center mb-12">
          <h2 className=" mb-6">Our Enterprise Solutions</h2>
          <p>
            Kamela International offers a comprehensive suite of enterprise
            solutions designed to meet the diverse needs of organisations across
            South Africa and Africa. Our services include
          </p>
        </div>

        <Feature197 />
      </section>

      {/* Call to Action Section */}

      <section className="overflow-hidden sm:grid sm:grid-cols-2 mb-8">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="font-bold md:text-3xl">
              Ready to Transform Your Workforce and Drive Enterprise Success?
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Partner with Kamela International to access customised training
              solutions that empower your employees, develop SMMEs, and build
              talent pipelines for the future. Let's work together to create a
              skilled, inclusive, and competitive workforce that drives your
              organisation's success.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="/UI-Components/Contact"
                className="inline-block rounded-3xl bg-white px-12 py-3 text-sm font-medium text-(--prime) transition hover:bg-(--prime) hover:text-white border-2 border-(--prime)"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <Image
          alt="contact"
          src="/contact.jpg"
          width={500}
          height={500}
          className="h-56 w-full object-cover rounded-3xl sm:h-full"
        />
      </section>
    </>
  );
}
