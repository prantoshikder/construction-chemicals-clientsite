import { Footer, Navbar, TopBar } from "@/components/layout";
import { SITE_URL } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f47b20",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MCCEL | Mount Construction Chemicals Engineering Limited",
    template: "%s | MCCEL",
  },
  description:
    "Complete solution for construction — concrete repair, retrofitting, industrial flooring, waterproofing, protective coatings and more.",
  applicationName: "MCCEL",
  keywords: [
    "construction chemicals",
    "concrete repair",
    "retrofitting",
    "industrial flooring",
    "waterproofing",
    "protective coatings",
    "Bangladesh",
  ],
  authors: [{ name: "MCCEL" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "MCCEL",
    title: "MCCEL | Mount Construction Chemicals Engineering Limited",
    description:
      "Engineered construction-chemical solutions across Bangladesh — repair, retrofitting, flooring, waterproofing, coatings.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCCEL",
    description: "Engineered construction-chemical solutions across Bangladesh.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${poppins.variable} font-sans antialiased`}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
