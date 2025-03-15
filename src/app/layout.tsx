import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'AI Atlas - European AI Services Directory',
  description:
    'Discover the best European AI services for consumers and developers',
  icons: {
    icon: [
      {
        url: '/europe-logo.svg',
        href: '/europe-logo.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        {children}
        <Script
          data-goatcounter="https://aiatlas.goatcounter.com/count"
          async
            src="//gc.zgo.at/count.js"
          />
      </body>
    </html>
  );
}
