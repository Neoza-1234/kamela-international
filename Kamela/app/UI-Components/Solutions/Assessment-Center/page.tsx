import Link from "next/link";
import Image from "next/image";

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

        {/* Hero Section */}
        
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

      <div
              className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gaps-12 items-center relative z-10"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="hero-content">
                <h1 className="hero-title leading-tight flex justify-center items-center flex-col pr-5">
                  QCTO-Accredited External Integrated Summative Assessment Centre
                </h1>
                <div className=" flex justify-start items-center gap-3 flex-wrap">
                  <p className="hero-paragraph max-w-lg mt-6">
                    Kamela International is a fully accredited QCTO Assessment Centre,
                    authorised to conduct External Integrated Summative Assessments (EISA) for selected Occupational Qualifications.
                  </p>
                 
                </div>
              </div>
      
              <div className="hero-img-container relative flex justify-around items-center pt-5">
                <Image
                  src="/Kamela-2.jpg"
                  alt="Hero Image"
                  width={500}
                  height={700}
                  className="hero-img rounded-3xl "
                />
              </div>
            </div>
      
    </div>
    
    
    </>
  )
}
