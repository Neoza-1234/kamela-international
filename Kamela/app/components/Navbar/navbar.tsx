"use client";

import Link from "next/dist/client/link";
import { useEffect, useState } from "react";
import Image from "next/image";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  
  { label: "About Us", href: "/UI-Components/About" },
  {
    label: "Solutions",
    href: "/UI-Components/Solutions",
    dropdown: [
      { label: "Study", href: "/UI-Components/Solutions/Study" },
      { label: "Enterprise", href: "/UI-Components/Solutions/Enterprise" },
      { label: "RPL", href: "/UI-Components/Solutions/RPL" },
    ],
  },
  {
    label: "Explore",
    href: "/UI-Components/Explore",
    dropdown: [
      { label: "Events", href: "/UI-Components/Explore/Events" },
      { label: "Gallery", href: "/UI-Components/Explore/Gallery" },
      { label: "Careers", href: "/UI-Components/Explore/Careers" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<Record<string, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev[label] ? {} : { [label]: true }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all  ${
        isScrolled ? "bg-(--navbar) shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-center items-center h-20 px-[8%] lg:px-[12%] py-4">
        <div className=" gap-38 flex items-center">
          {/* Logo Section */}

          <Link href="/" className="logo">
            <Image
              src="/logob.png"
              alt="Kamela Logo"
              width={120}
              height={40}
              cursor-pointer="true"
            />
          </Link>

          {/* Navigation Links for Large Screens */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group z-50">
                  <Link
                    href={link.href}
                    className="flex menu-links text-xl items-center gap-1 hover:text-(--prime) transition-all duration-300"
                  >
                    {link.label} <i className="ri-arrow-down-s-line"></i>
                  </Link>
                  <div
                    className="absolute left-0 top-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300
                                 bg-white shadow-xl border border-gray-50-10 rounded-lg z-500 min-w-[180px]"
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-md rounded-md hover:text-(--prime) transition-all duration-300"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xl hover:text-(--prime) transition-all duration-300"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Learning Hub Link */}
          <div className="flex justify-center items-center ml-6">
            <Link href="https://kamelatraininghub.co.za">
              <button
                className="hidden lg:flex justify-center items-center text-l px-3 py-2 font-bold rounded-full border
                         bg-(--prime) text-white  hover:bg-white hover:text-(--black) transition-all duration-300 cursor-pointer border-(--prime) hover:border-(--prime)"
              >
                Learning Hub
              </button>
            </Link>

            <button
              className="lg:hidden ml-4 text-3xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i
                className={`ri-${
                  mobileMenuOpen ? "close-line" : "menu-line"
                } transition-all duration-300`}
              ></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={
          "lg:hidden bg-(--navbar) border-t border-gray-400 overflow-hidden transition-all duration-500 " +
          (mobileMenuOpen
            ? "max-h-[500px] opacity-100 py-4"
            : "max-h-0 opacity-0 py-0")
        }
      >
        <div className="px-[8%] flex flex-col space-y-4">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="border border-gray-700/50 rounded-lg overfow-hidden"
            >
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="w-full flex justify-between items-center px-4 py-3 text-left text-xl hover:bg-gray-200 transition-all duration-300"
                  >
                    {link.label}
                    <i
                      className={`ri-arrow-down-s-line transition-transform duration-300 ${
                        openDropdown[link.label] ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  <div
                    className={
                      "pl-6 pr-4 bg-gray-800/10 border-t border-gray-700/50 overflow-hidden transition-all duration-300 " +
                      (openDropdown[link.label]
                        ? "max-h-[500px] opacity-100 py-2"
                        : "max-h-0 opacity-0 py-0")
                    }
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-md rounded-md hover:text-(--prime) transition-all duration-300"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-xl hover:text-(--prime) transition font-medium"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
