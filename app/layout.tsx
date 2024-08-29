"use client";

import { Sulphur_Point } from "next/font/google";
import "./globals.css";

const SulphurPoint = Sulphur_Point({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SulphurPoint.className}>{children}</body>
    </html>
  );
}
