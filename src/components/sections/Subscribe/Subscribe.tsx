"use client";
import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  };

  return (
    <section className="bg-brand">
      <div className="container-x grid items-center gap-6 py-12 md:grid-cols-2">
        <div className="text-white">
          <h3 className="text-2xl font-bold uppercase md:text-3xl">Subscribe To Our Newsletter</h3>
          <p className="mt-2 text-white/90">
            Product updates, project stories and field tips — straight to your inbox.
          </p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your e-mail"
            className="flex-1 rounded-sm px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="rounded-sm bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ink-soft"
          >
            {done ? "Subscribed" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
