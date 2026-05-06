import Image from "next/image";
import Link from "next/link";
import { galleryShots } from "@/lib/data";
import { BLUR_DATA } from "@/lib/images";

const homeShots = galleryShots.slice(0, 8);

export default function Gallery() {
  return (
    <section className="section bg-gray-50">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Our Work
          </span>
          <h2 className="section-title title-bar mt-2">Gallery</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {homeShots.map((s, i) => (
            <div
              key={s.src}
              className={`group relative overflow-hidden ${
                i === 0 || i === 5 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={s.src}
                alt={`Project ${i + 1}`}
                fill
                loading="lazy"
                placeholder="blur"
                blurDataURL={BLUR_DATA}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width:768px) 50vw, 25vw"
                quality={65}
              />
              <div className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors group-hover:bg-ink/40">
                <svg
                  className="text-white opacity-0 transition-opacity group-hover:opacity-100"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 1 0-.7.7l.3.3v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/gallery" className="btn-brand">
            See Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
