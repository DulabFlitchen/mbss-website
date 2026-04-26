import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { siteConfig } from '@/app/lib/seo';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Quality Education Excellence`,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    'Mwandege Boys Secondary School',
    'Tanzania secondary school',
    'academic excellence',
    'school admissions',
    'quality education',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Quality Education Excellence`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Quality Education Excellence`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/schoolLogo.png',
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}${siteConfig.ogImage}`,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'School Administration',
          telephone: siteConfig.phone,
          email: siteConfig.email,
        },
      },
      {
        '@type': 'EducationalOrganization',
        '@id': `${siteConfig.url}/#school`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        logo: `${siteConfig.url}${siteConfig.ogImage}`,
        description: siteConfig.description,
        slogan: 'Learn & Serve',
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.address.locality,
          addressRegion: siteConfig.address.region,
          addressCountry: siteConfig.address.country,
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.url}/#local-business`,
        name: siteConfig.name,
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.address.locality,
          addressRegion: siteConfig.address.region,
          addressCountry: siteConfig.address.country,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: 'en',
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="language" content="en" />
        <meta name="theme-color" content="#003f7f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
          suppressHydrationWarning
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
