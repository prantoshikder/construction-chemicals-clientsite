import Image from "next/image";
import Link from "next/link";
import { IMG, img, BLUR_DATA } from "@/lib/images";

export default function About() {
  return (
    <section className="section bg-white">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <div className="relative h-[420px] overflow-hidden rounded shadow-lg">
            <Image
              src={img(IMG.about, 1400)}
              alt="Our team on site"
              fill
              loading="lazy"
              placeholder="blur"
              blurDataURL={BLUR_DATA}
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
              quality={70}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden bg-brand p-5 text-white md:block">
            <div className="text-3xl font-bold">2018</div>
            <div className="text-xs uppercase tracking-widest">Since</div>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            About Us
          </span>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-ink md:text-4xl">
            A Complete Partner For Construction Chemicals & Engineering
          </h2>
          <p className="mt-4 leading-relaxed text-ink-mute">
            Mount Construction Chemicals Engineering Limited (MCCEL) is a Bangladesh-based
            specialist in construction chemicals, structural retrofitting and protective coatings.
            We pair engineering know-how with field-proven products to deliver long-lasting
            solutions across industrial, commercial and infrastructure projects.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Concrete Repair & Renovation",
              "Industrial Flooring",
              "Waterproofing Systems",
              "Structural Retrofitting",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-ink">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand/15 text-brand">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                  </svg>
                </span>
                <span className="text-sm">{t}</span>
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-brand mt-8">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
