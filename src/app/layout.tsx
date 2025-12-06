
import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppFab } from '@/components/whatsapp-fab';

export const metadata: Metadata = {
  title: 'Naturheilpraxis Julia Jordan',
  description: 'Ihr Weg zu natürlicher Heilung und Wohlbefinden',
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
      </head>
      <body className="font-body antialiased">
        {children}
        <WhatsAppFab />
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
