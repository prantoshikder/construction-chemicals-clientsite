import Link from "next/link";

const Icon = {
  Phone: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.4.2 2.7.6 3.9.1.4 0 .8-.3 1.1l-2.2 1.8z" />
    </svg>
  ),
  Mail: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 4h20v16H2V4zm10 9L4 6v12h16V6l-8 7z" />
    </svg>
  ),
  Facebook: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 22v-9h3l1-4h-4V6.5c0-1.2.3-2 2-2h2V1.1C16.6 1 15.4 1 14.2 1 11.4 1 9.5 2.7 9.5 5.9V9H6v4h3.5v9H13z" />
    </svg>
  ),
  Twitter: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 5.8c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.7 1A4.3 4.3 0 0 0 11.5 9c0 .3 0 .7.1 1A12 12 0 0 1 3 4.7a4.3 4.3 0 0 0 1.3 5.7c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.4 4.1-.7.2-1.4.2-2 .1.6 1.7 2.2 3 4 3a8.6 8.6 0 0 1-6.4 1.8A12 12 0 0 0 8 21c8 0 12.4-6.6 12.4-12.4v-.6c.8-.6 1.5-1.4 2-2.2z" />
    </svg>
  ),
  Instagram: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-2 6h4v12H2V10zm6 0h4v2c.6-1 2-2.2 4-2.2 4 0 5 2.6 5 6V22h-4v-6c0-1.6-.5-3-2.2-3-1.7 0-2.8 1.2-2.8 3v6H8V10z" />
    </svg>
  ),
};

export default function TopBar() {
  return (
    <div className="hidden bg-ink text-xs text-white lg:block">
      <div className="container-x flex items-center justify-between py-2">
        <div className="flex items-center gap-6">
          <Link href="tel:+8801715403993" className="flex items-center gap-2 hover:text-brand">
            <Icon.Phone /> +880-1715-403993
          </Link>
          <Link href="mailto:info@mountbd.org" className="flex items-center gap-2 hover:text-brand">
            <Icon.Mail /> info@mountbd.org
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="Facebook" href="#" className="hover:text-brand">
            <Icon.Facebook />
          </a>
          <a aria-label="Twitter" href="#" className="hover:text-brand">
            <Icon.Twitter />
          </a>
          <a aria-label="Instagram" href="#" className="hover:text-brand">
            <Icon.Instagram />
          </a>
          <a aria-label="LinkedIn" href="#" className="hover:text-brand">
            <Icon.LinkedIn />
          </a>
        </div>
      </div>
    </div>
  );
}
