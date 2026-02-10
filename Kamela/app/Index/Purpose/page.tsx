import { ChartNoAxesCombined, Goal, BookCopy } from "lucide-react";

const features = [
  {
    name: "UN Goal 4: Quality Education.",
    description:
      "To ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
    icon: BookCopy,
  },
  {
    name: "UN Goal 8: Decent Work and Economic Growth.",
    description:
      "To promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all",
    icon: ChartNoAxesCombined,
  },
  {
    name: "UN Goal 10: Reduced inequalities within and among countries.",
    description:
      "To reduce inequality within and among countries by empowering and promoting the social, economic and political inclusion of all, irrespective of age, sex,disability,race,ethnicity,origin,religion or economic or other status.",
    icon: Goal,
  },
];

export default function Purpose() {
  return (
    <div className="overflow-hidden py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="">Our Purpose</h2>
              <p className="mt-6 text-lg/8">
                To unlock Africa's potential by equipping people and
                organizations with high-impact skills, digital capabilities,
                leadership excellence, and meaningful economic opportunities.
                Our mission aligns with the National Development Plan 2030, the
                National Skills Development Strategy, and the United Nations
                Sustainability Development Goals.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-700"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Purpose Image"
            src="/sdg.jpg"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:ml-0"
          />
        </div>
      </div>
    </div>
  );
}
