
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
    title: "404 Page | Kamela International ",
};

const ErrorPage = () => {
    return (
        <section>
      <div className='relative w-full p-10  '>
        <div className='container'>
          <div className='flex flex-col items-center justify-center'>
            <div>
              <Image
                src={'/icons/Not-Found.png'}
                alt='Not Found Image'
                height={300}
                width={600}
              />
            </div>
            <div className='max-w-xl text-center'>
              <h2>
                Oops! The page you are looking for{' '}
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  doesn't exist
                </span>
              </h2>
            </div>
            <div>
              <Link
                href='/'
                className='group w-fit text-black font-medium bg-dark_black dark:bg-white/20 dark:hover:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 hover:bg-transparent border border-dark_black'>
                <span className='group-hover:translate-x-9 group-hover:text-dark_black transform transition-transform duration-200 ease-in-out'>
                  Back to home
                </span>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='group-hover:-translate-x-31.25 transition-all duration-200 ease-in-out group-hover:rotate-45'>
                  <rect
                    width='32'
                    height='32'
                    rx='16'
                    fill='white'
                    className='fill-white transition-colors duration-200 ease-in-out group-hover:fill-black'
                  />
                  <path
                    d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                    stroke='#1B1D1E'
                    strokeWidth='1.42857'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default ErrorPage;
