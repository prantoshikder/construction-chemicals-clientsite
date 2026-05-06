import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout";
import { About, Clients, Stats, Subscribe } from "@/components/sections";
import { IMG, img, BLUR_DATA } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Mount Construction Chemicals Engineering Limited — engineering know-how, field-proven products, long-lasting structures.",
};

const values = [
  {
    title: "Engineering First",
    desc: "Every recommendation starts with the structure, the load, the exposure — not the catalogue.",
  },
  {
    title: "Quality Materials",
    desc: "Imported and locally formulated chemistries tested against international standards.",
  },
  {
    title: "On-Site Precision",
    desc: "Trained applicators, supervised installation, documented QA at every milestone.",
  },
  {
    title: "Long Service Life",
    desc: "We optimise for the 20-year cost, not the cheapest line item today.",
  },
];

const team = [
  { name: "Engr. Rashed Hasan", role: "Managing Director", img: img(IMG.team.a, 600) },
  { name: "Engr. Mahmud Alam", role: "Technical Director", img: img(IMG.team.c, 600) },
  { name: "Engr. Sabbir Khan", role: "Project Manager", img: img(IMG.team.d, 600) },
  { name: "Engr. Tahsin Ahmed", role: "QA Lead", img: img(IMG.team.b, 600) },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="A Bangladesh specialist in construction chemicals, retrofitting and protective coatings."
        bg={img(IMG.page.about, 1600)}
      />

      <About />

      <section className="section bg-gray-50">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand">
              What We Stand For
            </span>
            <h2 className="section-title title-bar mt-2">Our Values</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="border-t-4 border-brand bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <h3 className="font-semibold uppercase tracking-wide text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-mute">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand">
              Behind The Work
            </span>
            <h2 className="section-title title-bar mt-2">Leadership Team</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div key={t.name} className="group text-center">
                <div className="relative aspect-square overflow-hidden rounded-sm">
                  <Image
                    src={t.img}
                    alt={t.name}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 50vw, 25vw"
                    quality={70}
                  />
                </div>
                <h3 className="mt-4 font-semibold text-ink">{t.name}</h3>
                <div className="text-sm uppercase tracking-widest text-brand">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Clients />
      <Subscribe />
    </>
  );
}
