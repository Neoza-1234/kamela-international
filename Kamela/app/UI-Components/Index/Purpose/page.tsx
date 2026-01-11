import Image from "next/image";

export default function Purpose() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-30 purpose h-[50hv] md:h-[90vh] flex flex-col items-center justify-center mt-30">
        <div className="title flex flex-col items-center justify-center mt-50">
          <h1 className="text-(--prime) text-center">Our Purpose Is Clear</h1>
          <p className="text-center my-4 sm:text-xsm">
            To unlock Africa's potential by equipping people and organizations
            with high-impact skills, digital capabilities, leadership
            excellence, and meaningful economic opportunities. Our mission
            aligns with the National Development Plan 2030, the National Skills
            Development Strategy, and the United Nations Sustainable Development
            Goals, specifically Goals 4, 8, and 10.
          </p>
        </div>
      </div>
    </>
  );
}
