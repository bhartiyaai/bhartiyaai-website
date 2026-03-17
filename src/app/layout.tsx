import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhartiya AI — Intelligence for Bharat",
  description:
    "AI-powered daily services delivered on WhatsApp every morning. Kisan AI for farmers, Guru AI for devotees, CA AI for professionals. No app. No login. Just send HI.",
  keywords: [
    "Bhartiya AI",
    "WhatsApp AI",
    "Kisan AI",
    "Guru AI",
    "CA AI",
    "Indian AI startup",
    "mandi prices",
    "daily shloka",
    "GST updates",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
