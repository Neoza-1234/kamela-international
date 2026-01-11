"use client"

import Link from "next/link";


export default function ContactUs() {
  return (
   
    
<section className="flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-5xl w-full text-center rounded-3xl py-20 px-8 md:py-24 bg-black my-30">
    <h1 className="text-white leading-tight">Contact us today and take the <br></br>next step toward growth </h1>
    <div className="h-[3px] w-32 my-1 bg-linear-to-l from-transparent to-blue-700"></div>
    <p className="md:text-base text-white max-w-xl pt-5">
        Whether you're advancing your own career or strengthening your workforce, we deliver the training that transforms potential into performance
    </p>
    <Link href="/UI-Components/Contact">
    <button className="px-8 py-2.5 mt-4 text-sm bg-linear-to-r from-blue-700 to-orange-600 hover:scale-105 transition duration-300 text-white rounded-full cursor-pointer border border-transparent hover:border-white">
        Book A Free Consultation
    </button>
    </Link>
</section> 
  )
}
