import Image from "next/image";
import Link from "next/link";

export default function Events() {
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
        <a href="#">Explore</a>
        <i className="ri-arrow-drop-right-line"></i>
        <div style={{ color: "var(--prime)" }} className="font-semibold">
          Events
        </div>
      </div>

      {/* Hero Section */}

      <div
              className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gaps-12 items-center relative z-10"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="hero-content">
                <h1 className="hero-title leading-tight flex justify-center items-center flex-col pr-5 text-(--prime)">
                  Explore Our Upcoming Events and Workshops
                </h1>
                <div className=" flex justify-start items-center gap-3 flex-wrap">
                  <p className="hero-paragraph max-w-lg mt-6">
                    Stay updated with our latest events and workshops designed to
                    enhance your skills and knowledge. Join us for insightful
                    sessions led by industry experts, covering a range of topics
                    relevant to your professional growth.
                  </p>

                  <Link href="/UI-Components/Explore/Events">
                    <button className="inline-block rounded-3xl bg-white text-(--prime) px-12 py-3 text-sm font-medium transition hover:bg-(--prime) hover:text-white border-2 border-(--prime)">
                      Event Page Coming Soon
                    </button>
                  </Link>

                </div>
              </div>
      
              <div className="hero-img-container relative flex justify-around items-center pt-5">
                <Image
                  src="/events.jpg"
                  alt="Hero Image"
                  width={500}
                  height={600}
                  className="hero-img rounded-3xl "
                />
              </div>
            </div>
    </>
  );
}
