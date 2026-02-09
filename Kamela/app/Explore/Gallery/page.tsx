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
          Kamela International Gallery
        </h1>
        <h3 className="text-center mt-2 max-w-lg mx-auto">
          {" "}
          Capturing every moment of excellence and achievement at Kamela
          International.{" "}
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 px-10 md:px-15 lg:px-20 xl:px-30">
          <div className="grid gap-4">
            <div>
              <img
                className="w-full rounded-xl shadow"
                src="/gallery-4.jpg"
                width="232"
                height="290"
                alt="Image 01"
              />
            </div>
            <div>
              <img
                className="w-full rounded-xl shadow"
                src="/gallery-5.jpg"
                width="232"
                height="290"
                alt="Image 02"
              />
            </div>
            <div>
              <img
                className="w-full rounded-xl shadow"
                src="/gallery-6.jpg"
                width="232"
                height="174"
                alt="Image 03"
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <img
                className="w-full rounded-xl shadow"
                src="/gallery-7.jpg"
                width="232"
                height="155"
                alt="Image 04"
              />
            </div>
            <div>
              <img
                className="w-full rounded-xl shadow"
                src="/gallery-8.jpg"
                width="232"
                height="349"
                alt="Image 05"
              />
            </div>
            <div>
              <img
                className="w-full rounded-xl shadow"
                src="/gallery-9.jpg"
                width="232"
                height="349"
                alt="Image 06"
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <img
                className="w-full rounded-xl shadow"
                src="/.jpg"
                width="232"
                height="349"
                alt="Image 07"
              />
            </div>
            <div>
              <img
                className="w-full rounded-xl shadow"
                src="/gallery-10.jpg"
                width="232"
                height="155"
                alt="Image 08"
              />
            </div>
            <div>
              <img
                className="w-full rounded-xl shadow"
                src="/kamela7.jpg"
                width="232"
                height="349"
                alt="Image 09"
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <img
                className="w-full rounded-xl shadow"
                src="/gallery-11.jpg"
                width="232"
                height="290"
                alt="Image 10"
              />
            </div>
            <img
              className="w-full rounded-xl shadow"
              src="/gallery-2.jpg"
              width="232"
              height="155"
              alt="Image 11"
            />
            <img
              className="w-full rounded-xl shadow"
              src="/about2.jpg"
              width="232"
              height="309"
              alt="Image 12"
            />
          </div>
        </div>
      </div>
    </>
  );
}
