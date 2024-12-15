import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { ToastComponent } from "@/lib/toastContainer";


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
      <body className="font-roboto h-screen text-gray-900 bg-gray-50">
      <Navbar />
        {children}
        <Footer/>
      <ToastComponent/>
      </body>
    </html>
  );
}
