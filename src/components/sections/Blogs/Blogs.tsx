import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/data";
import { BLUR_DATA } from "@/lib/images";

export default function Blogs() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            From The Site
          </span>
          <h2 className="section-title title-bar mt-2">Latest Blogs</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                  quality={70}
                />
                <span className="absolute left-3 top-3 bg-brand px-3 py-1 text-xs font-semibold uppercase text-white">
                  {p.cat}
                </span>
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-widest text-ink-mute">{p.date}</div>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-mute">{p.excerpt}</p>
                <Link
                  href="/blogs"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold uppercase text-brand"
                >
                  Read More <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blogs" className="btn-brand">
            More Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
