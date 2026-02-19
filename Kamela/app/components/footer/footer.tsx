

import Link from "next/link";
import Image from "next/image";


export default function footer() {
  return (
    <>
    
      <footer className="bg-black text-gray-400 text-sm md:text-base">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-12 md:py-16 lg:py-20">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start shrink-0">
            <Link href="/" className="logo mb-6 md:mb-8">
              <Image
                src="/icons/logoc.png"
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
                  <Link
                  prefetch={false}
                    href="/About-Us"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                  prefetch={false}  
                    href="/Explore/Events"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                  prefetch={false}
                    href="/Explore/Gallery"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                  prefetch={false}
                    href="/Contact"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Contact
                  </Link>
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
                  <Link
                    href="/Solutions/Study"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Study
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Solutions/Enterprise"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Solutions/RPL"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    RPL
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Solutions/Assessment-Center"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Assessment Center
                  </Link>
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
                  <Link
                  prefetch={false}
                    href="/"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                  prefetch={false}
                    href="/"
                    className="hover:text-indigo-500 transition duration-200"
                  >
                    Terms
                  </Link>
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
              <Link
              prefetch={false}
                href="https://x.com/KamelaPty"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition duration-200 text-lg md:text-xl"
              >
                <i className="ri-twitter-x-line"></i>
              </Link>
              <Link
              prefetch={false}
                href="https://www.linkedin.com/in/kamela-international-60510b315?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B89CsBFitTVKzYLc9QSwFDQ%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition duration-200 text-lg md:text-xl"
              >
                <i className="ri-linkedin-fill"></i>
              </Link>
              <Link
              prefetch={false}
                href="https://www.tiktok.com/@kamela.international"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition duration-200 text-lg md:text-xl"
              >
                <i className="ri-tiktok-fill"></i>
              </Link>
              <Link
              prefetch={false}
                href="https://www.facebook.com/kamelatraining?rdid=pnspctJDkZcOZRVv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EWQ5JuMLr%2F"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition duration-200 text-lg md:text-xl"
              >
                <i className="ri-facebook-fill"></i>
              </Link>
            </div>
            
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-700 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-4 md:py-6 text-center text-xs sm:text-sm text-gray-500">
          <p>
            © 2026{" "}
            <Link
              href="/"
              className="text-gray-400 hover:text-indigo-500 transition duration-200"
            >
              Kamela International
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
