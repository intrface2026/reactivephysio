import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Phisio – Physiotherapy & Rehabilitation Website Template",
  description:
    "Phisio is a modern Framer template made for physiotherapy, rehabilitation, and wellness clinics.",
};

import { SecurityProvider } from "@/components/SecurityProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans flex flex-col min-h-screen relative">
        <SecurityProvider>
          <Header />
          <div className="flex-1 w-full bg-white z-0">{children}</div>
          <Footer />
        </SecurityProvider>
      </body>
    </html>
  );
}
