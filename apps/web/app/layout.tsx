import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";

import "./globals.css";

const nunito_sans = Nunito_Sans({ subsets: ["latin"], weight: "400" });
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
// });

export const metadata: Metadata = {
  title: "CodeDaily",
  description: "CodeDaily | Practice coding like never before",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>{children}</body>
    </html>
  );
}
