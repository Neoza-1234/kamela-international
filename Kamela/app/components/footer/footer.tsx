import Link from "next/link";
import Image from "next/image";

export default function Example() {
  return (
    <>
      <footer className="bg-black text-gray-400 text-sm md:text-base">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-12 md:py-16 lg:py-20">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start shrink-0">
            <Link href="/" className="logo mb-6 md:mb-8">
              <Image
                src="/logoa.png"
                alt="Kamela Logo"
                width={150}
                height={150}
                className="w-32 md:w-40 lg:w-48 h-auto"
              />
            </Link>
          </div>

          {/* Links Grid */}
          <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-16 lg:gap-20 justify-center lg:justify-start flex-1">
            {/* Links Column */}
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">
                Links
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="/UI-Components/About Us"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/UI-Components/Explore/Events"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="/UI-Components/Explore/Gallery"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/UI-Components/Explore/Careers"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/UI-Components/Contact"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">
                Solutions
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="/"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Study
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Enterprise
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    RPL
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Assessment Center
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">
                Legal
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="/"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Tagline & Social */}
          <div className="flex flex-col items-center lg:items-end gap-4 text-center lg:text-right shrink-0">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-xs md:max-w-sm">
              Empowering futures through innovative learning and transformative
              training experiences
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-end gap-4 md:gap-5">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition duration-200 text-lg md:text-xl"
              >
                <i className="ri-twitter-x-line"></i>
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition duration-200 text-lg md:text-xl"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition duration-200 text-lg md:text-xl"
              >
                <i className="ri-tiktok-fill"></i>
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition duration-200 text-lg md:text-xl"
              >
                <i className="ri-facebook-fill"></i>
              </a>
            </div>
            
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-700 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-4 md:py-6 text-center text-xs sm:text-sm text-gray-500">
          <p>
            © 2026{" "}
            <a
              href="/"
              className="text-gray-400 hover:text-indigo-500 transition duration-200"
            >
              Kamela International
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
