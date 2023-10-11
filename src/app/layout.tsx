import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

export const metadata: Metadata = {
  title: 'Crypto Pay',
  description: 'Crypto payments for telegram bots',
  twitter: {
    card: 'summary_large_image',
    images: ['https://i.ibb.co/N3Y1PvJ/cover.png']
  },
  openGraph: {
    images: ['https://i.ibb.co/N3Y1PvJ/cover.png']
  }
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="light">
        {children}
      </body>
    </html>
  );
}
