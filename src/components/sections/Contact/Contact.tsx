"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", note: "" });
  const [sent, setSent] = useState(false);

  const onChange =
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", company: "", note: "" });
  };

  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Get In Touch
          </span>
          <h2 className="section-title title-bar mt-2">Contact Us</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <InfoCard
              title="Office Address"
              lines={["House 12, Road 5", "Dhaka, Bangladesh"]}
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              }
            />
            <InfoCard
              title="Phone"
              lines={["+880-1715-403993", "+880-248-110528"]}
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.4.2 2.7.6 3.9.1.4 0 .8-.3 1.1l-2.2 1.8z" />
                </svg>
              }
            />
            <InfoCard
              title="Email"
              lines={["info@mountbd.org", "mccelbd@gmail.com"]}
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 4h20v16H2V4zm10 9L4 6v12h16V6l-8 7z" />
                </svg>
              }
            />
            <InfoCard
              title="Working Hours"
              lines={["Sat – Thu: 9:00 – 18:00", "Friday: Closed"]}
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h5v-2h-4V6h-2v7z" />
                </svg>
              }
            />
          </div>

          <form onSubmit={onSubmit} className="rounded-sm bg-gray-50 p-6 md:p-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Your Name *" value={form.name} onChange={onChange("name")} required />
              <Input
                label="Email Address *"
                type="email"
                value={form.email}
                onChange={onChange("email")}
                required
              />
              <Input
                label="Phone Number *"
                value={form.phone}
                onChange={onChange("phone")}
                required
              />
              <Input
                label="Company *"
                value={form.company}
                onChange={onChange("company")}
                required
              />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium text-ink">Your Note *</label>
              <textarea
                value={form.note}
                onChange={onChange("note")}
                required
                rows={5}
                className="w-full rounded-sm border border-gray-200 px-4 py-3 focus:border-brand focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-brand mt-5">
              {sent ? "Message Sent" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  lines,
  icon,
}: {
  title: string;
  lines: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-brand text-white">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold uppercase tracking-wide text-ink">{title}</div>
        {lines.map((l) => (
          <div key={l} className="mt-0.5 text-sm text-ink-mute">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

function Input({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">{label}</label>
      <input
        {...rest}
        className="w-full rounded-sm border border-gray-200 px-4 py-3 focus:border-brand focus:outline-none"
      />
    </div>
  );
}
