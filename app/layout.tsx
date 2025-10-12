import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "İstanbul'un Kayıp Mühürleri",
  description: "Şehrin kaderi sizin ellerinizde...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900`}
      >
        {/* Elegant overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 pointer-events-none" />

        {/* Subtle pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25px_25px,rgba(255,255,255,0.1)_2%,transparent_0%)] bg-[length:50px_50px] pointer-events-none" />

        {/* Main content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
