"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { heroSlides as slides } from "@/lib/data";
import { BLUR_DATA } from "@/lib/images";

export default function Hero() {
  const [i, setI] = useState(0);
  const next = useCallback(() => setI((p) => (p + 1) % slides.length), []);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative h-[60vh] min-h-[420px] overflow-hidden sm:h-[70vh] sm:min-h-[480px]">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.img}
            alt={s.title}
            fill
            priority={idx === 0}
            loading={idx === 0 ? "eager" : "lazy"}
            placeholder="blur"
            blurDataURL={BLUR_DATA}
            className="object-cover"
            sizes="100vw"
            quality={70}
          />
          <div className="bg-overlay absolute inset-0" />
          <div className="container-x relative flex h-full flex-col justify-center text-white">
            <span className="mb-3 text-xs uppercase tracking-[0.3em] text-brand sm:text-sm">
              We Are Expert In
            </span>
            <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {s.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm text-white/90 sm:text-base">{s.sub}</p>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              <Link href="/services" className="btn-brand">
                Our Services
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white hover:bg-brand sm:left-4 sm:h-11 sm:w-11"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15 6l-6 6 6 6V6z" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-2 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white hover:bg-brand sm:right-4 sm:h-11 sm:w-11"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 6l6 6-6 6V6z" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2 sm:bottom-6">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${
              idx === i ? "w-8 bg-brand" : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
