import Image from "next/image";
import { stats } from "@/lib/data";
import { IMG, img, BLUR_DATA } from "@/lib/images";

export default function Stats() {
  return (
    <section className="relative py-20">
      <Image
        src={img(IMG.stats, 1600)}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
        placeholder="blur"
        blurDataURL={BLUR_DATA}
        quality={65}
      />
      <div className="bg-overlay absolute inset-0" />
      <div className="container-x relative">
        <div className="grid grid-cols-2 gap-8 text-center text-white lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold text-brand md:text-5xl">{s.value}</div>
              <div className="mt-2 text-sm uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
