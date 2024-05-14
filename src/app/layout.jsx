import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";
import Script from "next/script";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["500", "600"]
});

export const metadata = {
  title: "The Madlad Store",
  description: "The one stop for all your templates",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        {modal}
        <Footer />
        <Script 
          src="https://widget.senja.io/widget/fa4ed835-1c9d-49b4-af75-4c212ca3748e/platform.js" 
          async={true}
        />
      </body>
    </html>
  );
}
