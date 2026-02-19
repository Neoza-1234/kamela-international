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
        <h2 className="text-center mt-5 max-w-2xl mx-auto">
          {" "}
          Capturing every moment of excellence and achievement at Kamela
          International.{" "}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 px-10 md:px-15 lg:px-20 xl:px-30">
          <div className="grid gap-4">
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-4.jpg"
                width="232"
                height="290"
                alt="Image 01"
                loading="lazy"
              />
            </div>
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-5.jpg"
                width="232"
                height="290"
                alt="Image 02"
                loading="lazy"
              />
            </div>
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-6.jpg"
                width="232"
                height="174"
                alt="Image 03"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-7.jpg"
                width="232"
                height="155"
                alt="Image 04"
                loading="lazy"
              />
            </div>
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-8.jpg"
                width="232"
                height="349"
                alt="Image 05"
                loading="lazy"
              />
            </div>
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-9.jpg"
                width="232"
                height="349"
                alt="Image 06"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-12.jpg"
                width="232"
                height="349"
                alt="Image 07"
                loading="lazy"
              />
            </div>
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-10.webp"
                width="232"
                height="155"
                alt="Image 08"
                loading="lazy"
              />
            </div>
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/kamela7.jpg"
                width="232"
                height="349"
                alt="Image 09"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-11.jpg"
                width="232"
                height="290"
                alt="Image 10"
                loading="lazy"
              />
            </div>
            <Image
              className="w-full rounded-xl shadow"
              src="/gallery-2.jpg"
              width="232"
              height="155"
              alt="Image 11"
              loading="lazy"
            />
            <Image
              className="w-full rounded-xl shadow"
              src="/about2.jpg"
              width="232"
              height="309"
              alt="Image 12"
              loading="lazy"
            />
          </div>
        </div>

        <h2 className="text-center mt-15 max-w-2xl mx-auto">
          Empowering future developers and managers with essential skills and knowledge for career success
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-10 px-10 md:px-15 lg:px-20 xl:px-30">
          <div className="grid gap-4">
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-15.jpg"
                width="232"
                height="290"
                alt="Image 13"
                loading="lazy"
              />
            </div>
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-16.jpg"
                width="232"
                height="290"
                alt="Image 14"
                loading="lazy"
              />
            </div>
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-17.jpg"
                width="232"
                height="174"
                alt="Image 15"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-18.jpg"
                width="232"
                height="155"
                alt="Image 16"
                loading="lazy"
              />
            </div>
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-19.jpg"
                width="232"
                height="349"
                alt="Image 17"
                loading="lazy"
              />
            </div>
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-22.jpg"
                width="232"
                height="250"
                alt="Image 18"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/About1.jpg"
                width="232"
                height="349"
                alt="Image 19"
                loading="lazy"
              />
            </div>
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-24.webp"
                width="232"
                height="155"
                alt="Image 20"
                loading="lazy"
              />
            </div>
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-25.jpg"
                width="232"
                height="250"
                alt="Image 09"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <Image
                className="w-full rounded-xl shadow"
                src="/gallery-23.webp"
                width="232"
                height="290"
                alt="Image 10"
                loading="lazy"
              />
            </div>
            <Image
              className="w-full rounded-xl shadow"
              src="/gallery-3.jpg"
              width="232"
              height="155"
              alt="Image 11"
              loading="lazy"
            />
            <Image
              className="w-full rounded-xl shadow"
              src="/gallery-26.jpg"
              width="232"
              height="309"
              alt="Image 12"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
