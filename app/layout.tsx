import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono, Inter, Metrophobic } from "next/font/google";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const metro = Metrophobic({ subsets: ["latin"], variable: "--font-metro", weight: "400" });
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

// appears in browser tab & SEO
export const metadata: Metadata = {
  title: "PawsRescue",
  description:
    "Every dog deserves a second chance. Rescuing & Caring for Street Dogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${metro.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-white min-h-screen text-dark font-inter antialiased">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Push content down so it’s not hidden under navbar */}
        <div className="mt-16">
          {children}
        </div>
      </body>
    </html>
  );
}


