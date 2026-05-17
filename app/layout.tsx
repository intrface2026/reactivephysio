import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reactive – Premium Home-Based Physiotherapy, Nagpur",
  description:
    "Reactive delivers professional, science-driven physiotherapy and rehabilitation services in the comfort of your home in Nagpur. Led by Dr. Falguni Ambare.",
};

import { SecurityProvider } from "@/components/SecurityProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} antialiased font-sans flex flex-col min-h-screen relative`}>
        <SecurityProvider>
          <Header />
          <div className="flex-1 w-full z-0">{children}</div>
          <Footer />
          <WhatsAppButton />
        </SecurityProvider>
      </body>
    </html>
  );
}
