import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";


export const metadata: Metadata = {
  title: 'Modern Book Search',
  description: 'Find your next favorite book with our powerful search engine',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto text-gray-900 bg-gray-50">
        {children}
        <Footer/>
      </body>
    </html>
  );
}
