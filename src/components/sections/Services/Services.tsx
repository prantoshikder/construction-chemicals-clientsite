import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";
import { BLUR_DATA } from "@/lib/images";

export default function Services() {
  return (
    <section className="section bg-gray-50">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            We Are Expert In
          </span>
          <h2 className="section-title title-bar mt-2">Our Services</h2>
          <p className="mt-4 text-ink-mute">
            Engineered solutions covering every stage from substrate preparation to final finish.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                  quality={70}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-brand">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">{s.desc}</p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-brand"
                >
                  Read More <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className="btn-brand">
            More Services
          </Link>
        </div>
      </div>
    </section>
  );
}
