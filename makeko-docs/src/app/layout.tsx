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
  title: "Makeko Interiors | Technical Interior Design Studio",
  description: "Forward-thinking interior design studio delivering technically sound, creative, and functional interior environments in Johannesburg, South Africa.",
  keywords: ["interior design", "Johannesburg", "space planning", "technical detailing", "fit-out", "custom design"],
  authors: [{ name: "Makeko Interiors" }],
  openGraph: {
    title: "Makeko Interiors",
    description: "Technical Interior Design Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
