import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import "@/styles/theme.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
});

/** @type {import('next').Metadata} */
export const metadata = {
  title: "The Madlad Store",
  description:
    "I build minimalistic and simple Notion templates and websites to improve your life.",
  keywords: ["notion", "websites", "templates", "codingmadlad", "madlad.store"],
  authors: {
    name: "Coding Madlad",
    url: "https://www.madlad.store",
  },
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    type: "website",
    title: "The Madlad Store",
    description:
      "Discover the best Notion Templates to help you stay organized and productive.",
    url: "https://www.madlad.store",
    images: "/images/madlad-logo.png",
    locale: "en-US",
  },
  twitter: {
    title: "The Madlad Store",
    description:
      "Discover the best Notion Templates to help you stay organized and productive.",
    images: "/images/madlad-logo.png",
  },
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        {modal}
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
