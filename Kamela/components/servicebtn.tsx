"use client";

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
        className=" rounded-3xl bg-white text-(--prime) px-12 py-3 text-sm font-medium transition hover:bg-(--prime) hover:text-white border-2 border-(--prime) cursor-pointer"
      >
        Discover Our Services
      </button>
    </div>
  );
}

export default Servicebtn;
