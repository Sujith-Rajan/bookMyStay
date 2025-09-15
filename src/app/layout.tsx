import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Links from "@/components/Links";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "700"], // normal, medium, bold
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: "Homestay Booking - mFarm",
  description: "Best Homestay booking at Kottayam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <Navbar />
        {children}
        <Links />
        <Footer />
      </body>
    </html>
  );
}
