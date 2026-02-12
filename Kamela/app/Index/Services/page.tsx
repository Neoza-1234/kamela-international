import Image from "next/image";


const servicesData = [
  {
    id: "01",
    title: "Student Centre",
    description: "Designed for self-paying or privately registered students.",
    image: "/student-learning.jpg",
    imageAlt: "Student Learning",
    sections: [
      {
        heading: "How learning works:",
        items: [
          "Training delivered through our Learning Management System (LMS)",
          "Online learning and virtual classes",
          "Weekday attendance options: Monday, Tuesday & Thursday",
          "Weekend classes for employed learners: Saturday & Sunday",
          "Nationally recognized QCTO-accredited qualifications",
        ],
      },
      {
        heading: "Ideal for:",
        content:
          "Youth, unemployed individuals, career changers, adult learners, and professionals seeking up-skilling.",
      },
    ],
  },
  {
    id: "02",
    title: "Enterprise Development",
    description:
      "Training designed specifically for companies or organizations.",
    image: "/corporate.jpg",
    imageAlt: "Corporate Training",
    sections: [
      {
        heading: "Delivery options:",
        items: [
          "Kamela International LMS",
          "Online Classes",
          "Face-to-face (onsite or venue-based)",
          "Dual/blended training",
          "Customized schedules based on client requirements",
        ],
      },
      {
        heading: "Ideal for:",
        content:
          "Corporate teams, government departments, SMEs, enterprise development programs and workforce up-skilling.",
      },
    ],
  },
  {
    id: "03",
    title: "CSI Skills Development",
    description:
      "A partnership-driven model supporting social impact initiatives.",
    image: "/csi.jpg",
    imageAlt: "CSI Skills Development",
    sections: [
      {
        heading: "Our approach:",
        items: [
          "Training delivered via LMS, online classes, or face-to-face sessions",
          "Targeted at under-resourced communities",
          "Supports Corporate Social Investment (CSI) and BBBEE skills development goals",
        ],
      },
      {
        heading: "Ideal for:",
        content:
          "NGOs, NPOs, NPCs, foundations, corporate CSI departments, community empowerment projects.",
      },
    ],
  },
  {
    id: "04",
    title: "QCTO Assessment Centre",
    description:
      "A fully accredited center offering External Integrated Summative Assessments (EISA) for occupational qualifications.",
    image: "/exam-center.jpg",
    imageAlt: "QCTO Assessment Centre",
    sections: [
      {
        heading: "We Provide:",
        items: [
          "Practical & knowledge assessments",
          "Compliant assessment facilities",
          "Qualified assessors & moderators",
          "Preparation support for learners",
          "Certification documentation for QCTO",
        ],
      },
    ],
  },
  {
    id: "05",
    title: "Events, Conferences & Corporate Engagements",
    description:
      "Kamela International has delivered corporate training events, conferences, learning expos, and professional development engagements across Africa and Dubai (UAE).",
    image: "/events.jpg",
    imageAlt: "Events and Conferences",
    sections: [
      {
        heading: "We Specialize In:",
        items: [
          "Workforce development seminars",
          "Leadership & management summits",
          "Skills development expos",
          "Corporate training retreats",
          "International learning exchanges",
        ],
      },
    ],
  },
];


interface ServiceCardProps {
  service: (typeof servicesData)[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const isEven = index % 2 === 0;

  return (
    <article className="service-card relative w-full max-w-7xl bg-black rounded-3xl lg:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-14 ">
      <div
        className={`flex flex-col gap-6 sm:gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
      >
        {/* Content Section */}
        <div className="flex-1 text-white w-full md:w-3/5 lg:w-3/5 space-y-6">
          {/* Header */}
          <header className="flex items-center gap-3 sm:gap-4">
            <span
              className="text-xl sm:text-2xl font-bold italic text-gray-400"
              aria-label={`Service ${service.id}`}
            >
              {service.id}
            </span>
            <h2 className=" sm:text-3xl lg:text-4xl leading-tight">
              {service.title}
            </h2>
          </header>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {service.description}
          </p>

          {/* Sections */}
          <div className="space-y-6">
            {service.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="font-semibold sm:text-lg text-white">
                  {section.heading}
                </h3>
                {section.items ? (
                  <ul className="space-y-2 ml-1">
                    {section.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex gap-2 text-sm sm:text-base text-gray-300"
                      >
                        <span className="text-gray-500 mt-1.5 shrink-0">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed ml-1">
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-2/5 lg:w-2/5 shrink-0">
          <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 w-full rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-white/20">
            <Image
              src={service.image}
              className="object-cover service-img transition-transform duration-300 hover:scale-105"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 35vw"
              alt={service.imageAlt}
              priority={index < 2}
            />
          </div>
        </div>
      </div>
    </article>
  );
}


export default function Services() {
  return (
    <section
      className="px-[5%] sm:px-[8%] lg:px-[12%] py-12 sm:py-16 lg:py-20 services"
      aria-labelledby="services-heading "
    >
      <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
        {/* Header */}
        <header className="text-center max-w-4xl px-4 mt-50">
          <h2 className=" sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            Explore our extensive training solutions across{" "}
            <span className="text-(--prime)">
              five fundamental service streams
            </span>
          </h2>
        </header>

        {/* Service Cards */}
        <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
