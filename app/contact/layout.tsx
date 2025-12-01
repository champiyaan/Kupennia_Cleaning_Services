import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Quote | Kupennia Cleaning Services Harare",
  description: "Contact Kupennia Cleaning Services in Harare, Zimbabwe. Get a free quote for professional cleaning services. Fill out our contact form or email us. We serve all areas in and around Harare.",
  keywords: [
    "contact cleaning services Harare",
    "cleaning quote Harare",
    "cleaning services phone number",
    "professional cleaners contact",
    "Harare cleaning services",
  ],
  openGraph: {
    title: "Contact Us - Get a Free Quote",
    description: "Contact Kupennia Cleaning Services in Harare for a free quote. Professional cleaning services.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

