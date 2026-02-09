import Link from "next/link";
import Image from "next/image";
import {ArrowUpRight} from "lucide-react";

export default function AssessmentCenter() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col">
        <div className="flex flex-wrap justify-start items-center space-x-2 text-sm text-gray-500 font-medium mt-30 px-10 md:px-16 lg:px-24 xl:px-32 mb-3">
          <button type="button" aria-label="Home">
            <Link href="/#">Home</Link>
          </button>
          <i className="ri-arrow-drop-right-line"></i>
          <a href="#">Solutions</a>
          <i className="ri-arrow-drop-right-line"></i>
          <div className="text-(--prime) font-semibold">Assessment Center</div>
        </div>

        {/* Hero Content */}

        <div
          className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gaps-12 items-center relative z-10"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="hero-content">
            <h1 className="hero-title leading-tight flex justify-center items-center flex-col pr-5 text-(--prime)">
              QCTO-Accredited External Integrated Summative Assessment Centre
            </h1>
            <div className=" flex justify-start items-center gap-3 flex-wrap">
              <p className="hero-paragraph max-w-lg mt-6">
                Kamela International is a fully accredited QCTO Assessment
                Centre, authorized to conduct External Integrated Summative
                Assessments (EISA) for selected Occupational Qualifications.
              </p>
            </div>
          </div>

          <div className="hero-img-container relative flex justify-around items-center pt-5">
            <Image
              src="/Kamela8.jpg"
              alt="Hero Image"
              width={500}
              height={700}
              className="hero-img rounded-3xl "
            />
          </div>
        </div>

        {/* Why Choose Us Section */}

        <div className="mt-30 px-10 md:px-16 lg:px-24 xl:px-32 mb-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Our Assessment Centre?
          </h2>
          <p className="max-w-3xl mx-auto">
            Kamela International provides a fully equipped, compliant, and
            professionally managed environment for learners to complete their
            final qualification assessment. We pride ourselves on delivering
            credible and fair assessments, qualified assessors and moderators,
            modern facilities and excellent support services to ensure a smooth
            assessment experience for all candidates.
          </p>
        </div>
      </div>

      {/* Qualifications For External Assessment */}

      <div className="py-10 px-5 md:px-16 lg:px-24 xl:px-32">
        <h2 className=" text-center mb-8">
          2026 EISA Dates and Qualifications Offered
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-6 border-b border-gray-300 text-left w-100">
                  Qualification Name
                </th>
                <th className="py-3 px-6 border-b border-gray-300 text-left w-100">
                  SAQA ID
                </th>
                <th className="py-3 px-6 border-b border-gray-300 text-left w-100">
                  Next EISA Date
                </th>
                <th className="py-3 px-6 border-b border-gray-300 text-left w-100">
                  Upcoming EISA Dates
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-6 border-b border-gray-300 wrap-text">
                  OC: Contact Centre Manager NQF Level 5
                </td>
                <td className="py-3 px-6 border-b border-gray-300">99687</td>
                <td className="py-3 px-6 border-b border-gray-300">
                  09-10 February 2026
                </td>
                <td className="py-3 px-6 border-b border-gray-300">
                  4-5 June 2026, 3-4 Oct 2026
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b border-gray-300">
                  OC: Marketing Coordinator NQF Level 5
                </td>
                <td className="py-3 px-6 border-b border-gray-300">118706</td>
                <td className="py-3 px-6 border-b border-gray-300">
                  05-06 March 2026
                </td>
                <td className="py-3 px-6 border-b border-gray-300">
                  2-3 July 2026
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b border-gray-300">
                  OC: Office Administrator NQF Level 5
                </td>
                <td className="py-3 px-6 border-b border-gray-300">102161</td>
                <td className="py-3 px-6 border-b border-gray-300">
                  23-24 March 2026
                </td>
                <td className="py-3 px-6 border-b border-gray-300">
                  13-14 May 2026, 28-29 September 2026
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b border-gray-300">
                  OC: Project Manager NQF Level 5
                </td>
                <td className="py-3 px-6 border-b border-gray-300">1018695</td>
                <td className="py-3 px-6 border-b border-gray-300">
                  12-13 March 2026
                </td>
                <td className="py-3 px-6 border-b border-gray-300">
                  9-10 Nov 2026
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b border-gray-300">
                  HOC: Human Resource Management Administrator NQF Level 5
                </td>
                <td className="py-3 px-6 border-b border-gray-300">121150</td>
                <td className="py-3 px-6 border-b border-gray-300">
                  23-24 March 2026
                </td>
                <td className="py-3 px-6 border-b border-gray-300">
                  6-7 August 2026
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Assessment Center Services */}

        <section className="py-15 px-4 bg-black flex flex-col justify-center items-center gap-6">
        <h2 className=" md:text-[40px]/12 text-gray-100 max-w-lg text-center leading-tight">
          Kamela International provides a full suite of assessment services:
        </h2>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-file-list-3-fill text-white w-30 h-30 pb-3"></i>
            <p className=" text-gray-200">
             Assessment Scheduling & Candidate Management
            </p>
          </div>
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-shield-check-fill text-white w-30 h-30 pb-3"></i>
            <p className=" text-gray-200">
              Verification of Entry Requirements & Internal Assessments
            </p>
          </div>
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-computer-fill text-white w-30 h-30 pb-3"></i>
            <p className=" text-gray-200">
              Practical & Knowledge-Based Assessments designed to reflect real-world
              workplace scenarios.
            </p>
          </div>
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-lock-fill text-white w-30 h-30 pb-3"></i>
            <p className=" text-gray-200">
              Digital Assessment Tools & Secure Systems
            </p>
          </div>
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-eye-fill text-white w-30 h-30 pb-3"></i>
            <p className=" text-gray-200">
             Assessment Supervision & Monitoring
            </p>
          </div>
          <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-file-check-fill text-white w-30 h-30 pb-3"></i>
            <p className=" text-gray-200">
              Submission of Results to QCTO for Certification
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Center Fees */}

      <div className="py-10 px-5 md:px-16 lg:px-24 xl:px-32">
        <h2 className=" text-center mb-8">Assessment Centre Fees</h2>
        <p className="text-center">Fees are subject to change. Please contact us for the latest fee structure.</p>
      </div>

      {/* Assessment Process Overview */}

      <div className="py-10 px-5 md:px-16 lg:px-24 xl:px-32">
        <h2 className=" text-center mb-8">Assessment Process Overview</h2>
        <p className="text-center">Our streamlined assessment process ensures a smooth experience for all candidates.</p>

        <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rpl-journey-step p-6 text-center border border-secondary rounded-3xl hover:-translate-y-1 transition duration-300">
            <h3 className="font-bold mb-4">Step 1: Registration & Verification</h3>
            <p>
              Learners submit documents + proof of internal assessments.
            </p>
          </div>
          <div className="rpl-journey-step p-6 text-center border border-secondary rounded-3xl hover:-translate-y-1 transition duration-300">
            <h3 className="font-bold mb-4">Step 2: Booking & Scheduling</h3>
            <p>
              Exam dates are confirmed and communicated.
            </p>
          </div>
          <div className="rpl-journey-step p-6 text-center border border-secondary rounded-3xl hover:-translate-y-1 transition duration-300">
            <h3 className="font-bold mb-4">Step 3: Assessment Day</h3>
            <p>
              Learners complete knowledge + practical assessments at the centre.
            </p>
          </div>
          <div className="rpl-journey-step p-6 text-center border border-secondary rounded-3xl hover:-translate-y-1 transition duration-300">
            <h3 className="font-bold mb-4">Step 4: Moderation & Quality Review</h3>
            <p>
              Results are verified by accredited moderators.
            </p>
          </div>
          <div className="rpl-journey-step p-6 text-center border border-secondary rounded-3xl hover:-translate-y-1 transition duration-300">
            <h3 className="font-bold mb-4">Step 5: Submission to QCTO</h3>
            <p>
              Final results are captured and submitted for certification.
            </p>
          </div>
           <div className="rpl-journey-step p-6 text-center border border-secondary rounded-3xl hover:-translate-y-1 transition duration-300">
            <h3 className="font-bold mb-4">Step 6: Certification</h3>
            <p>
              Learners receive a QCTO Occupational Certificate upon successful completion.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* CTA Section */}

      <div className="container mx-auto px-6 py-20">
        <div className="bg-black rounded-3xl p-8 text-center">
          <h2 className="text-white mb-4">Book Your Assessment with Us Today</h2>
          <p className="text-white mb-6">
            Ensure your learners complete their qualifications in a professional and supportive environment.
          </p>
          <div className="flex justify-center">
          <a
              href="https://forms.office.com/r/Zn5Sa6jdjC"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-700 text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-65 w-55 md:py-3 border border-blue-700 transition-all duration-200 ease-in-out hover:bg-transparent hover:text-white"
            >
              <span className="flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-15">
                Register
              </span>
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-all duration-200 ease-in-out group-hover:-translate-x-40 group-hover:rotate-45 group-hover:bg-black">
                <ArrowUpRight
                  className="w-4 h-4 text-black transition-colors duration-200 ease-in-out group-hover:text-white"
                  strokeWidth={1.67}
                />
              </div>
            </a>
            </div>
        </div>
      </div>
        
    </>
  );
}

