import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Car Rental Service",
  description: "Car Rental Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-300">
          <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
