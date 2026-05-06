"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="section bg-white">
      <div className="container-x flex flex-col items-center py-20 text-center">
        <div className="text-6xl font-bold text-brand">Oops</div>
        <h1 className="mt-3 text-2xl font-bold uppercase tracking-tight text-ink md:text-3xl">
          Something Went Wrong
        </h1>
        <p className="mt-3 max-w-md text-ink-mute">
          An unexpected error occurred. Try again, or head back home.
        </p>
        <div className="mt-8 flex gap-3">
          <button onClick={reset} className="btn-brand">
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-sm border-2 border-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
