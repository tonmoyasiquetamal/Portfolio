import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tonmoy Asique Tamal",
  description: "Personal Portfolio website of Tonmoy Asique Tamal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-gray-100">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
