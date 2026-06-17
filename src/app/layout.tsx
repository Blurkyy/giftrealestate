import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AddisHomesFinder - Find Your Perfect Property',
  description: 'Discover exceptional properties in Addis Ababa. From luxury villas to commercial spaces, find your perfect home with AddisHomesFinder.',
  keywords: 'real estate, properties, apartments, villas, Addis Ababa, Ethiopia',
  authors: [{ name: 'AddisHomesFinder' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://addishomesfinder.com',
    title: 'AddisHomesFinder - Find Your Perfect Property',
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
