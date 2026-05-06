import { clients } from "@/lib/data";

export default function Clients() {
  return (
    <section className="section bg-gray-50">
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Our Trust
          </span>
          <h2 className="section-title title-bar mt-2">Clients</h2>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {clients.map((c) => (
            <div
              key={c}
              className="grid aspect-[3/2] place-items-center border border-gray-200 bg-white text-sm font-semibold uppercase text-ink-mute transition-colors hover:border-brand hover:text-brand"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
