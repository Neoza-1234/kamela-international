import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-5xl w-full text-center rounded-3xl py-20 px-8 md:py-24 bg-black my-20">
      <h1 className="text-white leading-tight">
        Contact us today and take the next step toward growth{" "}
      </h1>
      <div className="h-0.75 w-32 my-1 bg-linear-to-l from-transparent to-blue-700"></div>
      <p className="md:text-base text-white max-w-2xl pt-5">
        Whether you are advancing your own career or strengthening your
        workforce, we deliver the training that transforms potential into
        performance
      </p>
      <div className="mt-7">
      <Link
        href="/Contact"
        className="group bg-blue-700 text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-75 w-70 md:py-3 border border-blue-700 transition-all duration-200 ease-in-out hover:bg-transparent hover:text-white"
      >
        <span className="flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-13">
          Book A Free Consultation
        </span>
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-all duration-200 ease-in-out group-hover:-translate-x-50 group-hover:rotate-45 group-hover:bg-black">
          <ArrowUpRight
            className="w-4 h-4 text-black transition-colors duration-200 ease-in-out group-hover:text-white"
            strokeWidth={1.67}
          />
        </div>
      </Link>
      </div>
    </section>
  );
}
