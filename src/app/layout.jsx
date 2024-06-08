import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toast/toaster";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";
import "@/styles/theme.css";

const sans = localFont({
  src: "../fonts/GeistSansVF.woff",
  variable: "--font-sans"
});
const mono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-mono"
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
    images: "/madlad-logo.png",
    locale: "en-US",
  },
  twitter: {
    title: "The Madlad Store",
    description:
      "Discover the best Notion Templates to help you stay organized and productive.",
    images: "/madlad-logo.png",
  },
};

function rootElements(...args) {
  const Root = () => <>{args.map(arg => arg)}</>;
  return Root;
}

export default function RootLayout({ children, modal }) {
  const Root = rootElements(
    <Navbar />,
      children,
      modal,
    <Footer />,
      <Toaster />,
      <Analytics />
  );
  const fontVariables = cn(sans.variable, mono.variable);

  return (
    <html lang="en">
      <body className={fontVariables}>
        <Root />
      </body>
    </html>
  );
}
