import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
// Google Analytics Tag ID
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
    "Glen Lorne cleaning",
    "Borrowdale cleaning",
    "Mount Pleasant cleaning",
    "Highlands cleaning",
    "Chisipite cleaning",
    "Avondale cleaning",
    "Newlands cleaning",
    "Tynwald cleaning",
    "Pomona cleaning",
    "Helensvale cleaning",
    "Carrick Creagh cleaning",
    "Harare cleaners",
    "best cleaning service Harare",
    "top cleaners Harare",
    "affordable cleaning Harare",
    "reliable cleaners Harare",
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
  image: `${siteUrl}/logo_kupennia.webp`,
  "@id": siteUrl,
  url: siteUrl,
  priceRange: "$$",
  telephone: "+263-XXX-XXXX",
  email: "info@kupennia.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Harare",
    addressLocality: "Harare",
    addressRegion: "Harare",
    postalCode: "0000",
    addressCountry: "ZW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -17.8292,
    longitude: 31.0522,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Harare",
      addressRegion: "Harare",
      addressCountry: "ZW"
    },
    {
      "@type": "City",
      name: "Glen Lorne",
      addressRegion: "Harare",
      addressCountry: "ZW"
    },
    {
      "@type": "City",
      name: "Borrowdale",
      addressRegion: "Harare",
      addressCountry: "ZW"
    },
    {
      "@type": "City",
      name: "Mount Pleasant",
      addressRegion: "Harare",
      addressCountry: "ZW"
    },
    {
      "@type": "City",
      name: "Highlands",
      addressRegion: "Harare",
      addressCountry: "ZW"
    },
    {
      "@type": "City",
      name: "Chisipite",
      addressRegion: "Harare",
      addressCountry: "ZW"
    },
    {
      "@type": "City",
      name: "Avondale",
      addressRegion: "Harare",
      addressCountry: "ZW"
    },
    {
      "@type": "City",
      name: "Newlands",
      addressRegion: "Harare",
      addressCountry: "ZW"
    },
    {
      "@type": "City",
      name: "Tynwald",
      addressRegion: "Harare",
      addressCountry: "ZW"
    },
    {
      "@type": "City",
      name: "Pomona",
      addressRegion: "Harare",
      addressCountry: "ZW"
    },
    {
      "@type": "City",
      name: "Helensvale",
      addressRegion: "Harare",
      addressCountry: "ZW"
    },
    {
      "@type": "City",
      name: "Carrick Creagh",
      addressRegion: "Harare",
      addressCountry: "ZW"
    }
  ],
  openingHoursSpecification: [
    {
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
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep Cleaning",
          description: "Comprehensive deep cleaning for homes and offices"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Office Cleaning",
          description: "Professional office and commercial cleaning"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Carpet Cleaning",
          description: "Professional carpet and upholstery cleaning"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Window Cleaning",
          description: "Crystal clear window cleaning services"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BNB Cleaning",
          description: "Professional Airbnb and short-term rental cleaning"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Car Washing",
          description: "Professional car washing and detailing services"
        }
      }
    ]
  },
  sameAs: [
    // Add your social media links here
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1"
  },
  description: "Professional cleaning services in Harare, Zimbabwe. Residential and commercial cleaning, deep cleaning, office cleaning, carpet cleaning, window cleaning, BNB cleaning, mold removal, car washing, and more. Eco-friendly solutions. Fully insured. Serving all areas of Harare including Glen Lorne, Borrowdale, Mount Pleasant, Highlands, Chisipite, Avondale, Newlands, Tynwald, Pomona, Helensvale, Carrick Creagh, and more.",
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

