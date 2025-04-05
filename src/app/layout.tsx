import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { headers } from 'next/headers';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get('host') || 'aiatlas.eu';

  return {
    title: 'European AI Atlas',
    description:
      'Discover and explore European AI companies and services across different categories.',
    metadataBase: new URL(`https://${host}`),
    openGraph: {
      title: 'European AI Atlas',
      description:
        'Discover and explore European AI companies and services across different categories.',
      url: '/',
      siteName: 'European AI Atlas',
      images: [
        {
          url: 'OG.jpg',
          width: 1200,
          height: 630,
          alt: 'European AI Atlas - Discover European AI Companies',
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
    icons: {
      icon: [
        {
          url: '/europe-logo.svg',
          href: '/europe-logo.svg',
        },
      ],
    },
  };
}

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
