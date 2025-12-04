import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://kupennia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kupennia Cleaning Services - Professional Cleaning in Harare, Zimbabwe",
    template: "%s | Kupennia Cleaning Services",
  },
  description: "Professional cleaning services in Harare, Zimbabwe. Residential and commercial cleaning, deep cleaning, office cleaning, carpet cleaning, window cleaning, BNB cleaning, mold removal, car washing, and more. Eco-friendly solutions. Fully insured. Satisfaction guaranteed.",
  keywords: [
    "cleaning services Harare",
    "professional cleaners Harare",
    "residential cleaning Zimbabwe",
    "commercial cleaning Harare",
    "office cleaning Harare",
    "deep cleaning services",
    "carpet cleaning Harare",
    "window cleaning Zimbabwe",
    "Airbnb cleaning Harare",
    "mold removal Harare",
    "car washing Harare",
    "bin cleaning Harare",
    "mattress cleaning",
    "eco-friendly cleaning",
    "cleaning company Harare",
    "house cleaning services",
    "professional housekeeping",
  ],
  authors: [{ name: "Kupennia Cleaning Services" }],
  creator: "Kupennia Cleaning Services",
  publisher: "Kupennia Cleaning Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: siteUrl,
    siteName: "Kupennia Cleaning Services",
    title: "Kupennia Cleaning Services - Professional Cleaning in Harare",
    description: "Professional cleaning services in Harare, Zimbabwe. Residential and commercial cleaning with eco-friendly solutions.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Kupennia Cleaning Services - Professional Cleaning in Harare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kupennia Cleaning Services - Professional Cleaning in Harare",
    description: "Professional cleaning services in Harare, Zimbabwe. Residential and commercial cleaning with eco-friendly solutions.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Cleaning Services",
  classification: "Professional Cleaning Services",
  other: {
    "geo.region": "ZW-HA",
    "geo.placename": "Harare",
    "geo.position": "-17.8292;31.0522",
    "ICBM": "-17.8292, 31.0522",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kupennia Cleaning Services",
  image: `${siteUrl}/logo.jpg`,
  "@id": siteUrl,
  url: siteUrl,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Harare",
    addressLocality: "Harare",
    addressRegion: "Harare",
    addressCountry: "ZW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -17.8292,
    longitude: 31.0522,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    // Add your social media links here
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6SHP6E4B8W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6SHP6E4B8W');
          `}
        </Script>
        <Suspense fallback={<div className="h-16 bg-white shadow-md"></div>}>
        <Navbar />
        </Suspense>
        <main className="min-h-screen bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

