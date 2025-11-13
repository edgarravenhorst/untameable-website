import type { Metadata, Viewport } from 'next';
import { Mulish } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import i18nConfig from '../../../i18nConfig';

const mulish = Mulish({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#111B2B' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: 'Untameable',
  description:
    'Build great Developer and User Experiences for digital products',
};

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Script
        defer
        data-domain='untameable.io'
        src='https://plausible.io/js/script.js'
      />

      <body className={mulish.className + ' ' + 'antialiased'}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
