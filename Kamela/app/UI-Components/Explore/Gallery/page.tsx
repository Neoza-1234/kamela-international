import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <div className="my-30 sm:mt-20 px-4 md:px-0">
        <div className="flex flex-wrap justify-start items-center space-x-2 text-sm text-gray-500 font-medium mt-30 px-10 md:px-16 lg:px-24 xl:px-32 mb-3">
          <button type="button" aria-label="Home">
            <Link href="/#">Home</Link>
          </button>
          <i className="ri-arrow-drop-right-line"></i>
          <a href="#">Explore</a>
          <i className="ri-arrow-drop-right-line"></i>
          <div className="text-(--prime) font-semibold">Gallery</div>
        </div>
        <h1 className="text-3xl font-semibold text-center mx-auto mt-30 text-(--prime)">
          Kamela International Galleery
        </h1>
        <h3 className="text-center mt-2 max-w-lg mx-auto">
          {" "}
          Capturing every moment of excellence and achievement at Kamela
          International.{" "}
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 px-6">
          <div className="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-xl"
                src="/kamela-1.jpg"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-xl"
                src="/kamela-2.jpg"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-xl"
                src="/kamela-5.jpg"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-xl"
                src="/Kamela-6.jpg"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-xl"
                src="/Kamela-7.jpg"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-xl"
                src="/Kamela-8.jpg"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-xl"
                src="/Kamela-9.jpg"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-xl"
                src="/Kamela-10.jpg"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-xl"
                src="/Kamela-11.jpg"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-xl"
                src="/Kamela-12.jpg"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-xl"
                src="/Kamela-14.jpg"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-xl"
                src="/Kamela-13.jpg"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
