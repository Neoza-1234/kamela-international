import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Corporate Training Events & Conferences | Kamela International | Africa & UAE",
  description:
    "Kamela International delivers world-class corporate training events, leadership summits, skills development expos and learning exchanges across Africa and Dubai. Now offering dedicated BMC Helix training for Enterprise IT Teams. Book your team for our next corporate engagement.",
  keywords: [
    "corporate training events South Africa",
    "corporate training conferences South Africa",
    "skills development conference South Africa",
    "learning and development expo South Africa",
    "professional development events South Africa",
    "workforce development seminars South Africa",
    "corporate learning events Africa",
    "leadership summit South Africa",
    "management summit South Africa",
    "corporate training retreat South Africa",
    "skills development expo",
    "learning expo South Africa",
    "international learning exchange",
    "corporate engagement South Africa",
    "HR conference South Africa",
    "L&D conference South Africa",
    "BMC Helix training South Africa",
    "BMC Helix enterprise IT training",
    "BMC Helix ITSM training",
    "BMC Helix certification South Africa",
    "enterprise IT training South Africa",
    "ITSM training South Africa",
    "IT service management training Africa",
    "BMC Helix workshop",
    "BMC Helix for enterprise teams",
    "IT operations training South Africa",
    "corporate training events Dubai",
    "training events UAE",
    "Africa corporate learning events",
    "international corporate training",
    "cross-border learning exchange Africa",
    "professional development Dubai",
    "corporate events Johannesburg",
    "training events Sandton",
    "corporate conference Gauteng",
    "skills summit Johannesburg",
    "Kamela International events",
    "Kamela International conferences",
    "Kamela International",
  ],
  authors: [
    { name: "Kamela International", url: "https://kamelatraining.co.za" },
  ],
  creator: "Kamela International",
  publisher: "Kamela International",
  metadataBase: new URL("https://kamelatraining.co.za"),
  alternates: {
    canonical: "https://kamelatraining.co.za/Events",
  },
  openGraph: {
    title:
      "Corporate Events & Conferences | BMC Helix IT Training | Kamela International",
    description:
      "From leadership summits and skills expos to BMC Helix enterprise IT training — Kamela International delivers impactful corporate learning events across Africa and Dubai. Explore upcoming events and book your team.",
    url: "https://kamelatraining.co.za/Events",
    siteName: "Kamela International",
    images: [
      {
        url: "https://kamelatraining.co.za/icons/3d-illustration.png",
        width: 1200,
        height: 630,
        alt: "Kamela International Corporate Training Events & Conferences — Africa and Dubai",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Events & Conferences | Kamela International",
    description:
      "Leadership summits, skills expos, BMC Helix IT training and international learning exchanges — delivered by Kamela International across Africa and Dubai.",
    images: ["https://kamelatraining.co.za/3d-illustration.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function Events() {
  return (
    <>
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
      <section className="py-12  sm:pb-16 lg:pb-20 xl:pb-24 my-25">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative">
            <div className="lg:w-2/3">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full uppercase">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-blue-600"
                  aria-hidden
                />
                Events, Conferences & Corporate Engagements
              </div>
              <h1 className="mt-6 sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-orange-600">
                  Kamela International
                </span>{" "}
                Events
              </h1>
              <p className="max-w-lg mt-4 text-xl font-normal sm:mt-8">
                Kamela International hosts and
                delivers corporate training events, leadership summits, skills
                expos and international learning exchanges — designed to
                challenge thinking, build capability and drive real
                organisational impact
              </p>
              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <Link
                  href="#"
                  className="group bg-(--prime) text-white font-medium inline-flex flex-row justify-between items-center py-3 px-5 rounded-full w-52 border border-(--prime) transition-all duration-200 ease-in-out hover:bg-transparent hover:text-(--prime) cursor-pointer"
                >
                  <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-8">
                    Coming Soon!
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-all duration-200 ease-in-out group-hover:-translate-x-35 group-hover:rotate-45 group-hover:bg-black">
                    <ArrowUpRight
                      className="w-4 h-4 text-black transition-colors duration-200 ease-in-out group-hover:text-white"
                      strokeWidth={1.67}
                    />
                  </div>
                </Link>
              </div>
            </div>

            <div className="mt-5 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
              <img
                className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl"
                src="/icons/3d-illustration.png"
                alt="Event Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
