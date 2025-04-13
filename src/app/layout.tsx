import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NavStrip from "@/components/layout/NavStrip";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlayShifu Clone",
  description: "A clone of the PlayShifu website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col w-full max-w-[1900px] mx-auto">
            <Header />
            <main className="flex justify-center w-full flex-col items-center align-middle">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
