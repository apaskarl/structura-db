import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "StructuraDB - Database Schema Design Tool",
    template: "%s - StructuraDB",
  },
  description:
    "StructuraDB is a powerful and intuitive web app for designing and visualizing database schemas. Easily create tables, define relationships, and export your database structure for seamless development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
