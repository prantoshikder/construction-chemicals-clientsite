import Image from "next/image";
import Link from "next/link";
import { IMG, img, BLUR_DATA } from "@/lib/images";

export default function PageHeader({
  title,
  subtitle,
  bg = img(IMG.about, 1600),
}: {
  title: string;
  subtitle?: string;
  bg?: string;
}) {
  return (
    <section className="relative">
      <Image
        src={bg}
        alt=""
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={BLUR_DATA}
        className="object-cover"
        quality={70}
      />
      <div className="bg-overlay absolute inset-0" />
      <div className="container-x relative py-14 text-center text-white sm:py-20 md:py-28">
        <h1 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85 sm:text-base">{subtitle}</p>
        )}
        <nav className="mt-5 flex flex-wrap justify-center gap-2 text-xs uppercase tracking-widest sm:text-sm">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <span className="text-white/60">/</span>
          <span className="text-brand">{title}</span>
        </nav>
      </div>
    </section>
  );
}
