import Image from "next/image"
import Link from "next/link"

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

            <h1 className="text-3xl font-semibold text-center mx-auto mt-30">
                Kamela International Events
            </h1>
            <h3 className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
              {" "}
              Stay updated with the latest events, workshops, and seminars at Kamela International.{" "}
            </h3>
    
    
    
    </>
  )
}
