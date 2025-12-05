
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Naturheilpraxis Julia Jordan',
  description: 'Ganzheitliche Naturheilkunde in Aachen – individuelle Begleitung für Haut und Wohlbefinden.',
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Naturheilpraxis Julia Jordan",
  description: "Ganzheitliche Naturheilkunde in Aachen.",
  url: "https://www.heilpraxis-jordan.de",
  telephone: "+49 151 507 986 38",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vaalser Str. 525",
    addressLocality: "Aachen",
    postalCode: "52074",
    addressCountry: "DE",
  },
  sameAs: ["https://www.instagram.com/heilpraxis.juliajordan/"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "08:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "08:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "08:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "08:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <Script
          id="medical-business-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(medicalBusinessSchema)}
        </Script>
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Script
          src="https://cloud.ccm19.de/app.js?apiKey=a572c08ee1bde113afedeccb5f01232260a351e2f657c039&domain=686abba124ec8a7a000ee4c2"
          referrerPolicy="origin"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
