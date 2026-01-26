
import Link from "next/link";


export default function notFound() {
    return (
        <div className="flex flex-col items-center justify-center text-sm max-md:px-4 py-20 mt-40">
            <h1 className=" md:text-5xl font-bold text-black bg-clip-text">
                404 Not Found
            </h1>
            <div className="h-px w-80 rounded my-5 md:my-7"></div>
            <p className="md:text-xl text-black max-w-lg text-center">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link href="/" className="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-gray-800 rounded-full mt-10 font-medium active:scale-95 transition-all cursor-pointer">
                Back to Home
            </Link>
        </div>
    );
};