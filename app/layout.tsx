import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MogSocials — Social Media That Hits Different",
  description:
    "Gen Z-first social media marketing. We grow your brand the authentic way.",
  openGraph: {
    title: "MogSocials",
    description: "Social media marketing that hits different.",
    url: "https://mogsocials.com",
    siteName: "MogSocials",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
