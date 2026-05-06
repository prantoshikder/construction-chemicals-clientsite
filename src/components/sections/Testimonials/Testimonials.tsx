"use client";

import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-brand" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const AUTOPLAY_MS = 6000;

function getPerView(width: number) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export default function Testimonials() {
  const total = testimonials.length;
  const [perView, setPerView] = useState(3);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const update = () => setPerView(getPerView(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxStart = Math.max(0, total - perView);

  useEffect(() => {
    if (active > maxStart) setActive(maxStart);
  }, [active, maxStart]);

  const next = useCallback(
    () => setActive((p) => (p >= maxStart ? 0 : p + 1)),
    [maxStart],
  );
  const prev = () => setActive((p) => (p <= 0 ? maxStart : p - 1));

  useEffect(() => {
    if (paused || maxStart === 0) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next, paused, maxStart]);

  const slideWidth = 100 / perView;
  const dots = maxStart + 1;

  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Customer Reviews
          </span>
          <h2 className="section-title title-bar mt-2">What Clients Say</h2>
          <p className="section-sub">
            Engineers, project directors and facility owners we have worked with across Bangladesh.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * slideWidth}%)` }}
              aria-live="polite"
            >
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="shrink-0 px-3"
                  style={{ flex: `0 0 ${slideWidth}%` }}
                >
                  <div className="relative flex h-full flex-col border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg">
                    <svg
                      className="absolute right-6 top-6 text-brand/15"
                      width="56"
                      height="56"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 0 1 7.17 9.5V6zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H15.5A1.67 1.67 0 0 1 17.17 9.5V6z" />
                    </svg>

                    <Stars count={t.rating} />

                    <blockquote className="mt-5 flex-1 text-ink-mute leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-base font-bold text-brand">
                        {initials(t.name)}
                      </div>
                      <div>
                        <div className="font-semibold text-ink">{t.name}</div>
                        <div className="text-xs uppercase tracking-wide text-ink-mute">
                          {t.role} &middot; {t.company}
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          {maxStart > 0 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous review"
                className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-gray-200 bg-white text-ink shadow-md transition-colors hover:border-brand hover:bg-brand hover:text-white md:h-12 md:w-12"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next review"
                className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-gray-200 bg-white text-ink shadow-md transition-colors hover:border-brand hover:bg-brand hover:text-white md:h-12 md:w-12"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                </svg>
              </button>

              <div className="mt-8 flex justify-center gap-2">
                {Array.from({ length: dots }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === active}
                    className={`h-2 rounded-full transition-all ${
                      i === active ? "w-8 bg-brand" : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
