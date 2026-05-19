import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

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
  metadataBase: new URL("https://reactivephysicaltherapy.com"), // Replace with actual domain when live
  title: {
    default: "Reactive – Premium Home-Based Physiotherapy in Nagpur",
    template: "%s | Reactive Physiotherapy Nagpur",
  },
  description:
    "Reactive delivers professional, science-driven physiotherapy and rehabilitation services in the comfort of your home in Nagpur. Serving Ramdaspeth, Dharampeth, Pratap Nagar, and more. Led by Dr. Falguni Ambare.",
  keywords: [
    "Best physiotherapist in Nagpur",
    "Home physiotherapy Nagpur",
    "Physiotherapy in Ramdaspeth",
    "Physiotherapy in Dharampeth",
    "Physiotherapy in Pratap Nagar",
    "Sports rehabilitation Nagpur",
    "Home service physiotherapist",
    "Dr. Falguni Ambare",
  ],
  openGraph: {
    title: "Reactive – Premium Home-Based Physiotherapy in Nagpur",
    description:
      "Reactive delivers professional, science-driven physiotherapy and rehabilitation services in the comfort of your home in Nagpur.",
    url: "https://reactivephysicaltherapy.com",
    siteName: "Reactive Physical Therapy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reactive – Premium Home-Based Physiotherapy in Nagpur",
    description:
      "Professional, science-driven physiotherapy services at home in Nagpur.",
  },
  alternates: {
    canonical: "/",
  },
};

import { SecurityProvider } from "@/components/SecurityProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Reactive Physical Therapy",
    url: "https://reactivephysicaltherapy.com",
    logo: "https://reactivephysicaltherapy.com/logo/logo.png",
    description: "Premium Home-Based Physiotherapy and Rehabilitation Services in Nagpur.",
    founder: {
      "@type": "Person",
      name: "Dr. Falguni Ambare",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Nagpur" },
      { "@type": "Neighborhood", name: "Ramdaspeth" },
      { "@type": "Neighborhood", name: "Dharampeth" },
      { "@type": "Neighborhood", name: "Pratap Nagar" }
    ],
    medicalSpecialty: "Physiotherapy",
    priceRange: "$$",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 21.1458,
        longitude: 79.0882
      },
      geoRadius: "20000" // 20km radius around Nagpur
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${sans.variable} ${display.variable} antialiased font-sans flex flex-col min-h-screen relative`}>
        <SecurityProvider>
          <Header />
          <div className="flex-1 w-full z-0">{children}</div>
          <Footer />
          <WhatsAppButton />
          <ScrollToTopButton />
        </SecurityProvider>
      </body>
    </html>
  );
}
