import './globals.css';

import type { Metadata } from 'next';

import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import { metadataBaseUrl } from '@/lib/site-url';

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl,
  title: {
    default: 'Pragme India Foundation',
    template: '%s | Pragme India Foundation',
  },
  description:
    'Together, we rebuild lives with dignity, hope, and opportunity.',
  keywords: [
    'Pragme India Foundation',
    'non-profit',
    'community development',
    'women empowerment',
    'education',
    'healthcare',
    'rural development',
  ],
  openGraph: {
    type: 'website',
    title: 'Pragme India Foundation',
    description: 'Together, we rebuild lives with dignity, hope, and opportunity.',
    siteName: 'Pragme India Foundation',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pragme India Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pragme India Foundation',
    description: 'Together, we rebuild lives with dignity, hope, and opportunity.',
    images: ['/logo.jpeg'],
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
