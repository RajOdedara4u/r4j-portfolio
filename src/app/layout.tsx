import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { Footer } from "@/components";
import AOSProvider from "@/components/AOSProvider/AOSProvider";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Raj Odedara — Full Stack Developer",
  description:
    "Full-stack Developer crafting scalable web apps and SaaS platforms. Available for freelance projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#f8f9fc] text-[#1a1a2e]`}
      >
        <AOSProvider>
          <Header />
          {children}
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
