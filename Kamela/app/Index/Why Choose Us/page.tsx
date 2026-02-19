import Image from "next/image";

export default function value() {
  return (
    <>
      <div className="py-20 sm:py-30">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="mx-auto mt-2 max-w-lg text-center tracking-tight text-balance sm:text-5xl">
            At Kamela International, we stand for
          </h2>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg border-2 shadow-lg lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    High-quality, accessible education
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    We are committed to providing high-quality education that is
                    accessible to all, regardless of their background or
                    circumstances.
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-4xl shadow-2xl">
                    <Image
                      alt="value image"
                      src="/gallery-26.jpg"
                      width={400}
                      height={400}
                      loading="lazy"
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg border-2 shadow-lg max-lg:rounded-t-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Industry-relevant training for Africa's labor market
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    We are dedicated to equipping our learners with the digital
                    skills and future-ready competencies needed to thrive in the
                    rapidly evolving job market.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <Image
                    alt="value image"
                    src="/value.png"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg" />
              <div className="relative flex h-full flex-col overflow-hidden border-2 shadow-lg rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Focus on digital transformation and future skills
                  </p>
                  <p className="my-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    We are committed to driving digital transformation in Africa
                    by providing training and resources that empower individuals
                    and organizations to embrace technology and innovation.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg border-2 shadow-lg max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 font-medium tracking-tight max-lg:text-center">
                    Ensure excellence, transparency, and compliance in all
                    services
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    We are dedicated to maintaining the highest standards of
                    excellence in all our services, ensuring that our learners
                    receive the best possible education and support.
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow">
                  <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-4xl shadow-2xl">
                    <Image
                      alt="value image"
                      src="/gallery-16.jpg"
                      width={400}
                      height={400}
                      loading="lazy"
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
