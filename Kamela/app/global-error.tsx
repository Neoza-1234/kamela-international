"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error caught:", error);
  }, [error]);

  return (
    <html>
      <body className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="font-bold text-red-600">Something went wrong</h1>
          <p className="mt-2 text-gray-700">
            We're sorry, an unexpected error occurred.
          </p>
          <button
            onClick={() => reset()}
            className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}