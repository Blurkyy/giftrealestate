import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gift Real Estate - Find Your Perfect Property',
  description: 'Discover exceptional properties in Addis Ababa. From luxury villas to commercial spaces, find your perfect home with Gift Real Estate.',
  keywords: 'real estate, properties, apartments, villas, Addis Ababa, Ethiopia',
  authors: [{ name: 'Gift Real Estate' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://giftrealestateeth.com',
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
        <meta name="google-site-verification" content="GfQrTNg7Y_Sac11ykQgiChwqbkIRsfQ9VojMomPxlSQ" />
        <meta name="theme-color" content="#0284c7" />
        <link rel="icon" href="/favicon.ico" />
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
