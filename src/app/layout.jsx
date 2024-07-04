import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toast/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundBeams } from "@/components/ui/background-beams";

import "@/styles/globals.css";
import "@/styles/theme.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-poppins",
});

/** @type {import('next').Metadata} */
export const metadata = {
  title: "The Madlad Store",
  description:
    "I build minimalistic and simple Notion templates and websites to improve your life.",
  keywords: ["notion", "websites", "templates", "codingmadlad", "madlad.store"],
  authors: [
    {
      name: "Coding Madlad",
      url: "https://www.madlad.store",
    },
  ],
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
    images: [
      {
        url: "/madlad-logo.png",
      },
    ],
    locale: "en-US",
  },
  twitter: {
    title: "The Madlad Store",
    description:
      "Discover the best Notion Templates to help you stay organized and productive.",
    images: [
      {
        url: "/madlad-logo.png",
      },
    ],
  },
};

export default function RootLayout({ children, modal }) {
  const Children = () => children;
  const Modal = () => modal;
  const Background = () => (
    <div className="fixed left-0 right-0 top-0 h-screen">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.5}
        maxSize={2}
        particleDensity={60}
        className="h-full w-full"
        particleColor="#707070"
      />
      <BackgroundBeams />
    </div>
  );

  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar />
        <Children />
        <Background />
        <Modal />
        <Toaster />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
