import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section bg-white">
      <div className="container-x flex flex-col items-center py-20 text-center">
        <div className="text-[120px] font-bold leading-none text-brand">404</div>
        <h1 className="mt-2 text-2xl font-bold uppercase tracking-tight text-ink md:text-3xl">
          Page Not Found
        </h1>
        <p className="mt-3 max-w-md text-ink-mute">
          The page you’re looking for moved, changed name, or never existed.
        </p>
        <Link href="/" className="btn-brand mt-8">
          Back To Home
        </Link>
      </div>
    </section>
  );
}
