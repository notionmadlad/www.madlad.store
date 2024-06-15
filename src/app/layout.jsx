import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toast/toaster";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import "@/styles/theme.css";

const sans = localFont({
  src: "../fonts/GeistSansVF.woff",
  variable: "--font-sans",
});

/** @type {import('next').Metadata} */
export const metadata = {
  title: "The Madlad Store",
  description:
    "I build minimalistic and simple Notion templates and websites to improve your life.",
  keywords: ["notion", "websites", "templates", "codingmadlad", "madlad.store"],
  authors: [{
    name: "Coding Madlad",
    url: "https://www.madlad.store",
  }],
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
    images: [{
      url: "/madlad-logo.png"
    }],
    locale: "en-US",
  },
  twitter: {
    title: "The Madlad Store",
    description:
      "Discover the best Notion Templates to help you stay organized and productive.",
    images: [{
      url: "/madlad-logo.png"
    }],
  },
};

export default function RootLayout({ children, modal }) {
  const Children = () => children;
  const Modal = () => modal;

  return (
    <html lang="en">
      <body className={sans.variable}>
        <Navbar />
          <Children />
            <Modal />
            <Toaster />
            <Analytics />
        <Footer />
      </body>
    </html>
  );
}
