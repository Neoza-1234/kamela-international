import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Computer,
  FingerprintPattern,
  Database,
  FolderKanban,
  BookOpenCheck,
  Headset,
  Store,
  Container,
  Forklift,
  ChartCandlestick,
  BadgeDollarSign,
  Briefcase,
  Building2,
  UsersRound,
} from "lucide-react";

export default function RPL() {
  return (
    <>
      {/* BG SVG */}

      <svg
        className="size-full absolute -z-10 inset-0"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="#D9D9D9" strokeOpacity=".7" d="M-15.227 702.342H1439.7" />
        <circle
          cx="711.819"
          cy="372.562"
          r="308.334"
          stroke="#D9D9D9"
          strokeOpacity=".7"
        />
        <circle
          cx="16.942"
          cy="20.834"
          r="308.334"
          stroke="#D9D9D9"
          strokeOpacity=".7"
        />
        <path
          stroke="#D9D9D9"
          strokeOpacity=".7"
          d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7"
        />
        <circle
          cx="782.595"
          cy="411.166"
          r="308.334"
          stroke="#D9D9D9"
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
        <div className="text-(--prime) font-semibold">RPL</div>
      </div>

      {/* Hero Section */}

      <div
        className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gaps-12 items-center relative z-10"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="hero-content">
          <h1 className="hero-title leading-tight flex justify-center items-center flex-col pr-5 text-(--prime) ">
            Recognition of Prior Learning (RPL) Services
          </h1>
          <div className=" flex justify-start items-center gap-3 flex-wrap">
            <p className="hero-paragraph max-w-lg mt-6">
              At Kamela International, we specialize in Recognition of Prior
              Learning (RPL) services that empower individuals to have their
              existing skills and knowledge formally recognized. Our RPL
              solutions are designed to help you gain accredited qualifications
              based on your prior learning experiences, whether acquired through
              work, life experiences, or informal training.
            </p>
          </div>
        </div>

        <div className="hero-img-container relative flex justify-around items-center pt-5">
          <Image
            src="/RPL.jpg"
            alt="Hero Image"
            width={500}
            height={600}
            className="hero-img rounded-3xl "
          />
        </div>
      </div>

      {/* About RPL Section */}

      <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="rpl-img-container relative flex justify-around items-center pt-5">
          <Image
            src="/rpl2.jpg"
            alt="RPL Image"
            width={500}
            height={600}
            className="rpl-image rounded-3xl "
          />
        </div>
        <div className="rpl-content">
          <h2 className="about-rpl leading-tight flex justify-center items-center flex-col pr-5  ">
            Understanding What Recognition Of Prior Learning (RPL) Is
          </h2>
          <div className=" flex justify-start items-center gap-3 flex-wrap">
            <p className="rpl-paragraph max-w-lg mt-6">
              Recognition of Prior Learning (RPL) is a process that allows
              individuals to have their existing skills, knowledge, and
              competencies formally assessed and recognized, regardless of how
              they were acquired. RPL acknowledges that learning can occur in
              various contexts, including work experience, informal training,
              volunteering, and life experiences. Through RPL, individuals can
              obtain accredited qualifications or certifications without having
              to undergo traditional education or training programs.
            </p>
            <p className="rpl-paragraph max-w-lg mt-4">
              RPL is particularly beneficial for those who have gained
              significant skills and knowledge through practical experience but
              may not have formal qualifications to demonstrate their
              capabilities. By recognizing prior learning, we at Kamela
              International help bridge the gap between experience and formal
              education, enabling individuals to advance their careers, enhance
              employability, and pursue further education or training
              opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits of RPL Section */}

      <div className="container mx-auto px-6 py-20">
        <h2 className="text-center mb-12">
          Benefits of Recognition of Prior Learning (RPL)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-check-double-line w-30 h-30 pb-3 text-blue-700"></i>
            <p className="font-bold">Faster achievement of a qualification</p>
            <p>
              RPL allows individuals to gain qualifications more quickly by
              recognizing their existing skills and knowledge.
            </p>
          </div>

          <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-check-double-line w-30 h-30 pb-3 text-blue-700"></i>
            <p className="font-bold">Reduced training time and cost</p>
            <p>
              By recognizing prior learning, individuals can avoid redundant
              training, saving both time and money.
            </p>
          </div>

          <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-check-double-line w-30 h-30 pb-3 text-blue-700"></i>
            <p className="font-bold">Recognition of real experience</p>
            <p>
              RPL validates the skills and knowledge gained through practical
              experience, enhancing employability and career advancement.
            </p>
          </div>
          <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-check-double-line w-30 h-30 pb-3 text-blue-700"></i>
            <p className="font-bold">Supports promotions and career mobility</p>
            <p>
              RPL can help individuals qualify for promotions or new job roles
              by formally recognizing their competencies.
            </p>
          </div>
          <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-check-double-line w-30 h-30 pb-3 text-blue-700"></i>
            <p className="font-bold">
              Ideal for experienced workers without formal qualifications
            </p>
            <p>
              RPL is especially beneficial for those who have extensive work
              experience but lack formal certifications.
            </p>
          </div>
          <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
            <i className="ri-check-double-line w-30 h-30 pb-3 text-blue-700"></i>
            <p className="font-bold">Increases confidence and self-esteem</p>
            <p>
              Having prior learning recognized can boost an individuals
              confidence in their abilities and knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* RPL Journey Section */}

      <div className="container mx-auto px-6 py-20">
        <h2 className="text-center mb-12">
          Your RPL Journey with Kamela International
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rpl-journey-step p-6 text-center border border-secondary rounded-3xl hover:-translate-y-1 transition duration-300">
            <h3 className="font-bold mb-4">Step 1: Initial Consultation</h3>
            <p>
              Discuss your prior learning experiences and career goals with our
              RPL experts.
            </p>
          </div>
          <div className="rpl-journey-step p-6 text-center border border-secondary rounded-3xl hover:-translate-y-1 transition duration-300">
            <h3 className="font-bold mb-4">Step 2: Documentation</h3>
            <p>
              Gather and submit documentation that supports your prior learning
              and experience.
            </p>
          </div>
          <div className="rpl-journey-step p-6 text-center border border-secondary rounded-3xl hover:-translate-y-1 transition duration-300">
            <h3 className="font-bold mb-4">Step 3: Assessment</h3>
            <p>
              Our experts will assess your documentation and determine the level
              of recognition.
            </p>
          </div>
          <div className="rpl-journey-step p-6 text-center border border-secondary rounded-3xl hover:-translate-y-1 transition duration-300">
            <h3 className="font-bold mb-4">Step 4: Outcome</h3>
            <p>
              Receive your accredited qualification or certification based on
              the assessment.
            </p>
          </div>
          <div className="rpl-journey-step p-6 text-center border border-secondary rounded-3xl hover:-translate-y-1 transition duration-300">
            <h3 className="font-bold mb-4">Step 5: Further Development</h3>
            <p>
              Explore additional training or education opportunities to further
              enhance your skills.
            </p>
          </div>
        </div>
      </div>

      {/* Eligibility and Requirements Section */}

      <div className="container mx-auto px-8 py-20">
        <h2 className="text-center mb-12">RPL Eligibility and Requirements</h2>
        <div className="max-w-4xl mx-auto">
          <ul className="list-item list-inside space-y-4">
            <li>
              <i className="ri-check-double-line w-30 h-30 pb-3 text-blue-700"></i>
              Individuals must have relevant prior learning experiences that can
              be documented and assessed.
            </li>
            <li>
              <i className="ri-check-double-line w-30 h-30 pb-3 text-blue-700"></i>A
              comprehensive portfolio of evidence, including work samples,
              references, and other supporting documents, is typically required.
            </li>
            <li>
              <i className="ri-check-double-line w-30 h-30 pb-3 text-blue-700"></i>
              Candidates should be prepared to undergo an assessment process,
              which may include interviews or practical demonstrations of
              skills.
            </li>
            <li>
              <i className="ri-check-double-line w-30 h-30 pb-3 text-blue-700"></i>
              RPL is suitable for individuals seeking to gain qualifications in
              various fields, including vocational education, professional
              certifications, and academic degrees.
            </li>
            <li>
              <i className="ri-check-double-line w-30 h-30 pb-3 text-blue-700"></i>
              Employer validation may be necessary to confirm the authenticity
              of prior learning experiences.
            </li>
          </ul>
        </div>
      </div>

      {/* Approved Qualifications for RPL */}

      <div className="container mx-auto px-8 py-20">
        <h2 className="text-center mb-12">
          Approved Qualifications for RPL at Kamela International
        </h2>

        <section className="flex flex-col justify-center items-center gap-6">
          <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <Code className="text-blue-700"/>
              <p className="font-bold">
                Occupational Certificate: Software Developer
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <Computer className="text-blue-700"/>
              <p className="font-bold">
                Occupational Certificate: Computer Technician
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <FingerprintPattern className="text-blue-700"/>
              <p className="font-bold">
                Occupational Certificate: Cybersecurity Analyst
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <Database className="text-blue-700"/>
              <p className="font-bold">
                Occupational Certificate: Data Science Practitioner
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <FolderKanban className="text-blue-700"/>
              <p className="font-bold">
                Occupational Certificate: Project Manager
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <BookOpenCheck className="text-blue-700"/>
              <p className="font-bold">
                Occupational Certificate: Quality Assurer
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <Headset className="text-blue-700"/>
              <p className="font-bold">
                Occupational Certificate: Contact Centre Manager
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <Store className="text-blue-700"/>
              <p className="font-bold">
                {" "}
                Occupational Certificate: Retail Supervisor
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <Container className="text-blue-700"/>
              <p className="font-bold">
                Occupational Certificate: Supply Chain Practitioner{" "}
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <Forklift className="text-blue-700"/>
              <p className="font-bold">
                Occupational Certificate: Supply Chain Manager
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <ChartCandlestick className="text-blue-700"/>
              <p className="font-bold">
                Occupational Certificate: Marketing Coordinator
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <BadgeDollarSign className="text-blue-700"/>
              <p className="font-bold">
                National Occupational Certificate: Sales Representative
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <Briefcase className="text-blue-700"/>
              <p className="font-bold">
                Occupational Certificate: Office Administrator
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <Building2 className="text-blue-700"/>
              <p className="font-bold">
                Occupational Certificate: Office Supervisor
              </p>
            </div>
            <div className="bg-white border border-secondary rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition duration-300">
              <UsersRound className="text-blue-700"/>
              <p className="font-bold">
                Higher Occupational Certificate: Human Resource Management
                Administrator
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="bg-black rounded-3xl p-8 text-center">
          <h2 className="text-white mb-4">Ready to Start Your RPL Journey?</h2>
          <p className="text-white mb-6">
            Apply for Recognition of Prior Learning today and take the next step
            in your career.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Link href="/Contact">
              <button className="px-8 py-2.5 mt-4 text-sm bg-linear-to-r from-indigo-600 to-orange-700 hover:scale-105 transition duration-300 text-white rounded-full cursor-pointer">
                Book A Free Consultation
              </button>
            </Link>
            <Link href="https://forms.office.com/r/4BMZTXFiEb" target="_blank">
              <button className="px-8 py-2.5 mt-4 text-sm bg-linear-to-r from-indigo-600 to-orange-700 hover:scale-105 transition duration-300 text-white rounded-full cursor-pointer">
                RPL Registration
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
