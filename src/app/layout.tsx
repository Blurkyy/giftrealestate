import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from "next/script";

export const metadata: Metadata = {
  title: 'Gift Real Estate - Find Your Perfect Property',
  description: 'Discover exceptional properties in Addis Ababa. From luxury villas to commercial spaces, find your perfect home with Gift Real Estate.',
  keywords: 'real estate, properties, apartments, villas, Addis Ababa, Ethiopia',
  authors: [{ name: 'Gift Real Estate' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://giftrealestateet.com',
    title: 'Gift Real Estate - Find Your Perfect Property',
    description: 'Discover exceptional properties in Addis Ababa',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="GfQrTNg7Y_Sac11ykQgiChwqbkIRsfQ9VojMomPxlSQ"
        />
        <meta name="theme-color" content="#0284c7" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18145953243"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18145953243');
          `}
        </Script>
      </head>

      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}