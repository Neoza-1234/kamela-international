"use client";

import Link from "next/dist/client/link";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "About Us", href: "/UI-Components/About-Us" },
  {
    label: "Solutions",
    href: "#",
    dropdown: [
      { label: "Study", href: "/UI-Components/Solutions/Study" },
      { label: "Enterprise", href: "/UI-Components/Solutions/Enterprise" },
      { label: "RPL", href: "/UI-Components/Solutions/RPL" },
      {
        label: "Assessment Center",
        href: "/UI-Components/Solutions/Assessment-Center",
      },
    ],
  },
  {
    label: "Explore",
    href: "#",
    dropdown: [
      { label: "Events", href: "/UI-Components/Explore/Events" },
      { label: "Gallery", href: "/UI-Components/Explore/Gallery" },
    ],
  },
  { label: "Contact", href: "/UI-Components/Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<Record<string, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev[label] ? {} : { [label]: true }));
  };

  {
    /* Close dropdown when clicking outside*/
  }
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = Object.entries(dropdownRefs.current).every(
        ([_, ref]) => ref && !ref.contains(event.target as Node),
      );

      if (clickedOutside) {
        setOpenDropdown({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all ${
        isScrolled ? "bg-(--navbar) shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-20 px-[8%] lg:px-[12%] py-4 w-full">
        {/* Logo Section */}
        <Link href="/" className="logo shrink-0">
          <Image
            src="/icons/logoa.png"
            alt="Kamela Logo"
            width={120}
            height={40}
            className="w-28 sm:w-32 md:w-36 lg:w-40 h-auto"
            priority
          />
        </Link>

        {/* Navigation Links for Large Screens */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative z-50"
                ref={(el) => {
                  dropdownRefs.current[link.label] = el;
                }}
              >
                <button
                  onClick={() => toggleDropdown(link.label)}
                  className="flex menu-links text-xl items-center gap-1 hover:text-(--prime) transition-all duration-300 cursor-pointer"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openDropdown[link.label] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute left-0 top-8 bg-white shadow-xl border border-gray-50-10 rounded-lg z-500 min-w-45 transition-all duration-300 ${
                    openDropdown[link.label]
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-md rounded-md hover:text-(--prime) transition-all duration-300"
                      onClick={() => setOpenDropdown({})}
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
            ),
          )}
        </nav>

        {/* Right Side: Learning Hub + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* Learning Hub Button - Desktop Only */}
          <Link
            href="https://kamelatraininghub.co.za"
            target="_blank"
            className="hidden lg:block"
          >
            <button
              className="flex justify-center items-center px-4 py-2 font-bold rounded-full border text-lg
              bg-(--prime) text-white hover:bg-white hover:text-(--black) transition-all duration-300 cursor-pointer border-(--prime)"
            >
              Learning Hub
            </button>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-3xl flex items-center justify-center p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-8 h-8 transition-all duration-300" />
            ) : (
              <Menu className="w-8 h-8 transition-all duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-(--navbar) border-t border-gray-400 overflow-hidden transition-all duration-500 ${
          mobileMenuOpen
            ? "max-h-125 opacity-100 py-4"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-[8%] flex flex-col space-y-4">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="border border-gray-700/50 rounded-lg overflow-hidden"
            >
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="w-full flex justify-between items-center px-4 py-3 text-left text-xl hover:bg-gray-200 transition-all duration-300"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openDropdown[link.label] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`pl-6 pr-4 bg-gray-800/10 border-t border-gray-700/50 overflow-hidden transition-all duration-300 ${
                      openDropdown[link.label]
                        ? "max-h-125 opacity-100 py-2"
                        : "max-h-0 opacity-0 py-0"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-md rounded-md hover:text-(--prime) transition-all duration-300"
                        onClick={() => {
                          setOpenDropdown({});
                          setMobileMenuOpen(false);
                        }}
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
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          {/* Learning Hub Link in Mobile Menu */}
          <div className="border border-gray-700/50 rounded-lg overflow-hidden">
            <Link
              href="https://kamelatraininghub.co.za"
              target="_blank"
              className="block px-4 py-3 text-xl hover:text-(--prime) transition font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Learning Hub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
