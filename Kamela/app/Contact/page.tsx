"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HoverDevCards from "@/components/contactinfo";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      
     
      setTimeout(() => setStatus("idle"), 5000);
   } catch {
  setStatus("error");
  setErrorMessage("Failed to send message. Please try again.");
}
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>

      <div className="flex flex-wrap justify-start items-center space-x-2 text-sm text-gray-500 font-medium mt-30 px-10 md:px-16 lg:px-24 xl:px-32 mb-3">
        <button type="button" aria-label="Home">
          <Link href="/#">Home</Link>
        </button>
        <i className="ri-arrow-drop-right-line"></i>
        <div className="text-(--prime) font-semibold">Contact</div>
      </div>

      <div
        className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gaps-12 items-center relative z-10 mt-15"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="hero-content">
          <h1 className="hero-title leading-tight flex justify-center items-center flex-col pr-5 text-(--prime)">
            Take the next step toward success!
          </h1>
          <div className=" flex justify-start items-center gap-3 flex-wrap">
            <p className="hero-paragraph max-w-lg mt-6">
              Connect with our dedicated team today for tailored advice on RPL
              pathways, course enrollment, and enterprise development strategies to accelerate your
              professional growth. We are here to guide you every step of the
              way.
            </p>
          </div>
        </div>

        <div className="hero-img-container relative flex justify-around items-center pt-5">
          <Image
            src="/Team.jpg"
            alt="Hero Image"
            width={500}
            height={900}
            className="hero-img rounded-3xl w-auto h-auto "
          />
        </div>
      </div>

      <div className="mt-15">
        <HoverDevCards/>
      </div>

      <section className="flex overflow-hidden mt-30 mb-20">
        <div className="flex-1 hidden lg:block">
          <Image src="/contact2.jpg" width={1920} height={1080} className="w-full h-screen object-cover" alt={""} />
        </div>
        <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
          <div className="max-w-lg flex-1 mx-auto px-4 text-black">
            <div>
              <h2 className="sm:text-4xl">
                We would love to hear from you! Please fill out the form below and we will get back to you within 24hrs.
              </h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 mt-12 lg:pb-12"
            >
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Phone number</label>
                <div className="relative mt-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Your Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-3 pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                ></textarea>
              </div>

              {status === "success" && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit"
                disabled={status === "loading"}
                className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
