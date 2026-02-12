import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import "remixicon/fonts/remixicon.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title:
    "Kamela International |  Empowering Africa's Workforce Through Skills, Technology, and Innovation",
  description:
    "Kamela International empowers learners with accredited training, flexible study options, and industry-aligned qualifications. Our supportive community helps students, professionals, and career changers gain the skills and confidence needed to thrive in today's workforce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} min-h-screen antialiased`}
      >
        <svg
          className="size-full absolute -z-10 inset-0"
          width="1440"
          height="720"
          viewBox="0 0 1440 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="#D9D9D9"
            strokeOpacity=".7"
            d="M-15.227 702.342H1439.7"
          />
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

        <Navbar/>
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer/>
      </body>
    </html>
  );
}
