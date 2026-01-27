"use client";

import {ArrowUpRight} from "lucide-react"

const scrollToEnterpriseServices = () => {
  const element = document.getElementById("enterprise-services");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function Servicebtn() {
  return (
    <div>
  <button
    onClick={scrollToEnterpriseServices}
    className="group bg-(--prime) text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-65 w-65 md:py-3 border border-(--prime) transition-all duration-200 ease-in-out hover:bg-transparent hover:text-(--prime) cursor-pointer"
  >
    <span className="flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-13">
      Discover Our Services
    </span>
    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-all duration-200 ease-in-out group-hover:-translate-x-51 group-hover:rotate-135 group-hover:bg-black">
      <ArrowUpRight
        className="w-4 h-4 text-black transition-colors duration-200 ease-in-out group-hover:text-white"
        strokeWidth={1.67}
      />
    </div>
  </button>
</div>
  );
}

export default Servicebtn;
