"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryShots } from "@/lib/data";
import { BLUR_DATA } from "@/lib/images";

const filters = [
  "All",
  "Site Work",
  "Repair",
  "Flooring",
  "Waterproofing",
  "Retrofitting",
  "Coatings",
] as const;

type Filter = (typeof filters)[number];

export default function GalleryFilter() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () => (active === "All" ? galleryShots : galleryShots.filter((s) => s.cat === active)),
    [active],
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`border px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                isActive
                  ? "border-brand bg-brand text-white"
                  : "border-gray-200 bg-white text-ink hover:border-brand hover:text-brand"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="py-16 text-center text-sm uppercase tracking-widest text-gray-500">
          No projects in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {visible.map((s, i) => (
            <div
              key={s.src}
              className={`group relative overflow-hidden ${
                i === 0 || i === 5 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={s.src}
                alt={`${s.cat} project ${i + 1}`}
                fill
                loading="lazy"
                placeholder="blur"
                blurDataURL={BLUR_DATA}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width:768px) 50vw, 25vw"
                quality={65}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/0 text-white opacity-0 transition-colors group-hover:bg-ink/60 group-hover:opacity-100">
                <div className="text-xs uppercase tracking-widest text-brand">{s.cat ?? ""}</div>
                <div className="mt-2 font-semibold uppercase">View</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
