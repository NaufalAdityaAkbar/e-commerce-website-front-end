import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TokoOnline - Belanja Online Terpercaya",
  description: "Toko online terpercaya dengan berbagai produk berkualitas dan harga terjangkau.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
