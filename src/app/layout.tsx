import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vibe Arcade - The Sexiest Gaming Ecosystem on Solana",
  description: "Enter the most exciting gaming ecosystem on Solana. Join tournaments, earn rewards, and compete with the best players in the sexiest arcade experience.",
  keywords: ["gaming", "arcade", "solana", "vibearcade", "blockchain gaming", "web3 games", "player rewards", "gaming ecosystem"],
  authors: [{ name: "Vibe Arcade" }],
  creator: "Vibe Arcade",
  publisher: "Vibe Arcade",
  robots: "index, follow",
  openGraph: {
    title: "Vibe Arcade - The Sexiest Gaming Ecosystem",
    description: "The premier destination for competitive Web3 gaming on Solana",
    url: "https://vibearcade.com",
    siteName: "Vibe Arcade",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Arcade - The Sexiest Gaming Ecosystem",
    description: "The premier destination for competitive Web3 gaming on Solana",
    creator: "@vibearcade",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans bg-black`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
