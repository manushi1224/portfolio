import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  style: ["normal"],
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manushi Oza",
  description: "Portfolio - Manushi Oza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth`}>{children}</body>
    </html>
  );
}
