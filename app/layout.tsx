import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Travel Journal & Hidden Gems | Wanderlog Chronicles",
  description:
    "Capture your adventures with Wanderlog Chronicles — your personal travel journal to document memories, uncover hidden gems, and share local travel stories.",
  keywords: [
    "personal travel diary",
    "digital travel journal",
    "log travel memories",
    "hidden travel gems",
    "local travel experiences",
    "wanderlog chronicles",
    "trip documentation",
    "travel stories",
    "explore offbeat places",
    "travel memory tracker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col w-screen h-screen relative`}
      >
        <main className="flex-1">
          {/* <Navbar /> */}
          {children}
        </main>
      </body>
    </html>
  );
}
